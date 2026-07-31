# CORS Unblock

## Introduction

CORS Unblock is a browser extension that provides additional capabilities for Web applications. Compared to Native applications, one of the most lacking features of modern Web applications is the ability to make cross-domain requests. CORS Unblock addresses this by rewriting the Response Header in the browser, enabling Web applications to access cross-domain resources.

Video Demo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/nR2TB5njRiE?si=zoE3IrxvEGdqIjql" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Usage

As a user, you don't need to do anything. If a Web application needs to use the capabilities of CORS Unblock, it will automatically prompt you to install or request specific permissions. CORS Unblock adopts a design principle of clear permissions and on-demand authorization, ensuring that you have full control over cross-domain requests in the browser.

### Main Features

- **Precise domain name permission control**: Only allow specific websites to access external APIs you have approved
- **Simple permission management**: A clear user interface for managing authorized domains and permissions
- **Security-first**: Does not collect user data, all operations are completed within the local browser
- **Lightweight design**: Minimize the impact on browsing performance
- **Developer-friendly**: Provide simple APIs, developers can easily integrate

## Privacy and Security

CORS Unblock highly values user privacy and security. The plugin does not collect any user data and all operations are completed within the local browser. The permission system ensures that only websites that users have explicitly approved can use the extension's cross-domain capabilities, and these permissions can be revoked at any time.

## Inspiration

The design of CORS Unblock is inspired by [Shizuku](https://github.com/RikkaApps/Shizuku), a brilliant Android application that provides a centralized way to manage system API permissions. Shizuku allows applications to access system APIs through a proxy application, eliminating the need for each app to request root permissions individually.

We've adapted this concept to the Web environment. Just as Shizuku acts as a permission manager for system APIs, CORS Unblock serves as a permission manager for cross-origin requests. This approach offers several advantages:

- **Centralized Permission Management**: Users can manage all cross-origin request permissions in one place
- **Enhanced Security**: Permissions are granted explicitly and can be revoked at any time
- **Better User Experience**: No need for complex proxy server setups or CORS configurations
- **Developer-Friendly**: Simple API integration for web applications

## Development

Integrating CORS Unblock into your Web application is very simple. First, install our core library:

```bash
pnpm i cors-unblock
```

Then use it in your code:

```ts
import { hasInstall, install, getAllowedInfo, requestHosts } from 'cors-unblock'

async function main() {
  if (!hasInstall()) {
    alert('Please install CORS Unblock plugin')
    install()
    return
  }
  const allowedInfo = await getAllowedInfo()
  if (allowedInfo.enabled) {
    return
  }
  const result = await requestHosts({
    hosts: ['example.com'],
  })
  if (result !== 'accept') {
    alert('Please allow CORS Unblock plugin to access example.com')
    return
  }
  alert('Request permission success')
  // Use CORS Unblock's ability
}
```

Once the user grants permission, your application can seamlessly perform cross-domain requests without setting up complex proxy servers or CORS configurations.

