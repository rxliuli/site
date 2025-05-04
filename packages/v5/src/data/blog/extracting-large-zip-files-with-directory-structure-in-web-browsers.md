---
title: Extracting Large ZIP Files with Directory Structure in Web
slug: extracting-large-zip-files-with-directory-structure-in-web-browsers
date: 2025-04-26
summary: I initially noticed a Reddit post from someone seeking a Firefox extension that could extract ZIP files. Curious about this need, I discovered the author was using a restricted computer environment that prevented installation of local programs. This prompted me to examine existing online decompression tools, only to find that the top five online extraction tools failed to fully support
tags: [Zip, Web, JavaScript]
status: published
---

## Background

I initially noticed a Reddit post from someone seeking a Firefox extension that could extract ZIP files [^1]. Curious about this need, I discovered the author was using a restricted computer environment that prevented installation of local programs. This prompted me to examine existing online decompression tools, only to find that the top five online extraction tools failed to fully support:

1. Decompressing large ZIP files (tens of gigabytes)
2. Preserving directory structures when extracting folders

The video below demonstrates the performance of current online tools:

https://www.youtube.com/watch?v=yon89-Z__g8

In practice, only ezyZip came close, but it still doesn't support extracting specific directories from a ZIP.

[^1]: [Is there a Firefox addon that can extract a zip file to a selected directory and maintain the directory structure?](https://www.reddit.com/r/FirefoxAddons/comments/1jvg5eu)

## Implementation

After brief consideration, I decided to try using the currently popular Vibe Coding approach to create a web tool meeting these requirements. I first checked ZIP-related npm packages. I'd previously used jszip frequently, but discovered it can't handle large ZIP files [^2]. I then found the faster fflate, but unfortunately it doesn't support encryption/decryption features at all. However, the author recommended zip.js in an issue [^3].

[^2]: <https://github.com/Stuk/jszip/issues/912>
[^3]: <https://github.com/101arrowz/fflate/issues/90#issuecomment-929490126>

## Stream-Based Decompression

The examples provided on the official website are remarkably simple and straightforward. To decompress a file and trigger a download, you simply need to combine BlobWriter with file-saver.

```ts
import { saveAs } from 'file-saver'

const zipFileReader = new BlobReader(zipFileBlob)
const zipReader = new ZipReader(zipFileReader)
const firstEntry = (await zipReader.getEntries()).shift()

const blobWriter = new BlobWriter() // Create an adapter to parse zip files as blobs
const blob = await firstEntry.getData(blobWriter) // Perform the actual conversion
await zipReader.close() // Close the stream

saveAs(blob, 'test.mp4') // Save to disk
```

An interesting element in this code is `BlobWriter`. How does it store decompressed large files? After all, data must be somewhere, and blobs seem to reside in memory, allowing only stream reading but not stream writing. Let's examine the source code on GitHub [^4].

[^4]: <https://github.com/gildas-lormeau/zip.js/blob/601dedd3251676587123fd35228447682c9b02c9/lib/core/io.js#L207-L228>

```ts
class BlobWriter extends Stream {
  constructor(contentType) {
    super()
    const writer = this
    const transformStream = new TransformStream()
    const headers = []
    if (contentType) {
      headers.push([HTTP_HEADER_CONTENT_TYPE, contentType])
    }
    Object.defineProperty(writer, PROPERTY_NAME_WRITABLE, {
      get() {
        return transformStream.writable
      },
    })
    writer.blob = new Response(transformStream.readable, { headers }).blob()
  }

  getData() {
    return this.blob
  }
}
```

The key here is `Response`, which accepts a ReadableStream [^5] parameter. ReadableStream doesn't store data in memory; it's just a stream that can continuously pull data.

[^5]: <https://developer.mozilla.org/docs/Web/API/ReadableStream>

For example, here we manually create a ReadableStream generating an infinite stream of incrementing numbers starting from zero, but if not consumed, it only produces the first piece of data:

```ts
let i = 0
const stream = new ReadableStream({
  pull(controller) {
    console.log('generate', i)
    controller.enqueue(i)
    i++
  },
})
const resp = new Response(stream)
```

![image](https://gist.github.com/user-attachments/assets/45a40802-3a16-458e-ab3d-902f7fded7d6)


If consumed 100 times, it generates 100 values:

```ts
// before code...
const reader = resp.body!.getReader()
let chunk = await reader.read()
while (!chunk.done && i < 100) {
  console.log('read', chunk.value)
  chunk = await reader.read()
}
```

![image](https://gist.github.com/user-attachments/assets/c509366b-30d5-4a92-aa9e-359393ff933c)


When decompressing in zip.js, `firstEntry.getData(blobWriter)` writes the binary stream from decompressing a single file into Response and converts it to a Blob. But doesn't `await new Response().blob()` load all data into memory?

Yes, Blobs are generally thought to store data in memory, but when a Blob becomes too large, it transparently moves to disk [^6], at least according to official Chromium documentation. The JavaScript specification doesn't explicitly define how browsers should implement this. Someone on Stack Overflow mentioned that a Blob is just a pointer to data and doesn't store the actual data [^7] - a very accurate and interesting observation. Incidentally, you can visit <chrome://blob-internals/> to view all Blob objects in your browser.

[^6]: <https://source.chromium.org/chromium/chromium/src/+/main:storage/browser/blob/README.md>
[^7]: <https://stackoverflow.com/questions/38239361/where-is-blob-binary-data-stored>

## Decompressing Directories

The main challenge with directory decompression is writing multiple directories and files locally in one operation. This requires using the relatively new File System API [^8] in browsers. Its browser compatibility is decent so far [^9], making it feasible for extracting directories from ZIPs and writing them locally. With proper fallback handling, using this new API is viable.

[^8]: <https://developer.mozilla.org/docs/Web/API/File_System_API>
[^9]: <https://developer.mozilla.org/docs/Web/API/File_System_API#browser_compatibility>

First, you can obtain a FileSystemDirectoryHandle through the drag-and-drop API or input File. Once you have it, you can access all files in that directory and create subdirectories and write files (supporting stream writing). If we have a list of files to write, we can easily write them to the selected directory using the following method:

```ts
const list = [
  {
    path: 'test1/test1.txt',
    content: 'test1',
  },
  {
    path: 'test1/test2.txt',
    content: 'test2',
  },
  {
    path: 'test3/test3.txt',
    content: 'test3',
  },
]

function fs(rootHandle: FileSystemDirectoryHandle) {
  const dirCache = new Map<string, FileSystemDirectoryHandle>()
  dirCache.set('', rootHandle)
  async function mkdirp(path: string[]): Promise<FileSystemDirectoryHandle> {
    if (path.length === 0) {
      return rootHandle
    }
    const dirPath = path.join('/')
    if (dirCache.has(dirPath)) {
      return dirCache.get(dirPath)!
    }
    const parentPath = path.slice(0, -1)
    const parentDir = await mkdirp(parentPath)
    const newDir = await parentDir.getDirectoryHandle(path[path.length - 1], {
      create: true,
    })
    dirCache.set(dirPath, newDir)
    return newDir
  }
  return {
    async write(path: string, blob: Blob) {
      const pathParts = path.split('/').filter(Boolean)
      const dir = await mkdirp(pathParts)
      const fileHandle = await dir.getFileHandle(pathParts.pop()!, {
        create: true,
      })
      const writable = await fileHandle.createWritable()
      await blob.stream().pipeTo(writable) // Stream write file to local
    },
  }
}

const rootHandle = await navigator.storage.getDirectory() // rootHandle is obtained from drag-and-drop API or input File, just for testing here
const { write } = fs(rootHandle)
for (const it of list) {
  console.log('write', it.path)
  await write(it.path, new Blob([it.content]))
}
```

### Limitations

Although the File System API can handle normal file operations, it still has some limitations, including:

1. Users can only select from a limited set of directories. For example, direct selection of ~/Desktop or ~/Download directories is restricted as it's considered risky [^10].
2. Saving files with certain extensions is prohibited, such as `*.cfg` or files ending with `~`, which are also considered risky [^11].

[^10]: <https://github.com/WICG/file-system-access/issues/381>
[^11]: <https://issues.chromium.org/issues/380857453>

## Conclusion

This is something people have been doing for a long time, but interesting discoveries can still be made. Especially regarding how Blobs work - I'd never truly understood their storage mechanisms before.

> Based on the technologies discussed in this article, I ultimately created an online decompression tool called MyUnzip. Feel free to visit <https://myunzip.com> to try it and provide feedback.