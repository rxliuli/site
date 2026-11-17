# SafariF12

Press **F12** in Safari to toggle the Web Inspector — the same muscle memory as Chrome and Firefox.

SafariF12 is a tiny native background app: while Safari is the frontmost application it listens for F12 and sends ⌥⌘I. It does nothing in any other app, and its listen-only event tap can never block or delay your keyboard input. No menu bar icon, no Dock icon.

## 🛠️ Install

```bash
brew install --cask rxliuli/tap/safari-f12
```

Or grab the latest `.dmg` from [Releases](https://github.com/rxliuli/safari-f12/releases), open it, and drag `SafariF12.app` to `/Applications`.

## 🚀 First launch

Safari → Settings → Advanced → check **"Show features for web developers"**, then launch SafariF12 and grant **Accessibility** when prompted — it covers both observing the F12 key and sending the synthetic ⌥⌘I. In rare cases macOS additionally asks for **Input Monitoring**; the status window tells you if so.

SafariF12 registers itself to launch at login (you can turn that off under System Settings › General › Login Items) and then works silently in the background. Open it again from Launchpad or Finder to see the status window, which also reappears on its own if the permission ever goes missing.

## 💡 The built-in alternative

macOS can do most of this without extra software: System Settings › Keyboard › Keyboard Shortcuts › App Shortcuts, then add a Safari shortcut for the menu item "Show Web Inspector" bound to F12. The trade-offs are that it depends on the exact (localized) menu title, and F12 keeps its original meaning elsewhere. SafariF12 works out of the box and only intercepts F12 while Safari is active.
