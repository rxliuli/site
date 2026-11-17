# SimDrop

**SimDrop** puts the iOS simulators you have booted into the Finder sidebar, so moving files in and out of a simulator is just drag and drop — no app switching, no `xcrun simctl` commands.

```
SimDrop                      ← Finder sidebar › Locations
└── iPhone Duo/              ← one folder per *booted* simulator
    ├── Photos and Videos/   ← simulator Photos library
    └── Downloads/           ← Files app › On My iPhone › Downloads
```

Simulators appear when they boot and disappear when they shut down.

## ✨ What you get

- **Photos and Videos** — dropped images and videos are imported with `simctl addmedia`, so they land in the simulator's Photos app with real previews in Finder.
- **Downloads** — add, open, replace and delete files and folders; deleting goes to the Mac's Trash, so **Put Back** restores the file into the simulator.
- **Terminal access** — the same folders are regular paths, e.g. copy a config file with `cp config.json ~/Library/CloudStorage/SimDrop-SimDrop/iPhone\ Duo/Downloads/`.
- **Finder-native** — it is a File Provider extension, so everything works in icon view, column view and Quick Look.

## 🛠️ Install

```bash
brew install --cask rxliuli/tap/sim-drop
```

Or download `SimDrop-macos.dmg` from [Releases](https://github.com/rxliuli/sim-drop/releases). It is Developer ID signed and notarized. SimDrop can't ship on the Mac App Store: the app and its helper must run unsandboxed to drive `simctl` and the simulators' folders.

## 🚀 Setup

Open SimDrop once and grant two one-time approvals in the settings window:

1. **Background Service** — allow SimDrop in System Settings › General › Login Items.
2. **Finder Extension** — click **Enable** in the Finder banner, or turn on SimDrop under File Providers.

Open the app once again after every install or upgrade: replacing the app makes macOS drop its Finder extension and stop the background helper, and only launching the new copy can re-register them.

## ⚠️ Behavior to know about

- Dragging **moves** by default, because File Provider locations live on the startup disk. Hold ⌥ to copy instead — and note that dragging a file out of a simulator's Downloads removes it from the simulator.
- Finder can't reject drops by file type, so anything that isn't an image or video goes to that simulator's Downloads folder instead, with a notification telling you where it went.
- Deleting a photo in Finder moves it to the simulator's "Recently Deleted", where it is recoverable for 30 days.

iOS simulators only — real devices aren't supported.
