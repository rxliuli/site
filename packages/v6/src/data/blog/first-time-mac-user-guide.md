---
title: First-Time Mac User Guide
slug: first-time-mac-user-guide
date: 2025-08-06
summary: I switched to an M2 MacBook, and as a long-term Windows user, I have encountered many problems and confusion up to this point. Some have been resolved, while others currently remain unsolved. I'm recording and sharing them here.
tags: [Mac, macOS]
status: published
---

## Scenario

I switched to an M2 MacBook, and as a long-term Windows user, I have encountered many problems and confusion up to this point. Some have been resolved, while others currently remain unsolved. I'm recording and sharing them here.

## System

### How to add fonts

I previously used [Sarasa Gothic](https://github.com/be5invis/Sarasa-Gothic) font daily. It's not outstanding, but its main advantage is supporting Chinese Traditional, Chinese Simplified, Japanese, and English in a unified style.
The basic steps are similar to Windows - download the TTC file and click to open it, then wait for verification to pass. However, this process is very, very, very slow on Mac, so slow that I thought there was a bug.

### How to close the lid without the screen turning off when using an external monitor

Although I found many answers, you actually just need to connect external power and set the external monitor as the primary display.

> There's still a bug - sometimes using an external keyboard and mouse, it can't wake up.

### How to reverse mouse scrolling

This was a very uncomfortable aspect I encountered initially, but you can use the tool [SCROLL REVERSER](https://pilotmoon.com/scrollreverser/) to set it to reverse.

### View global shortcut key usage on Mac

I haven't found a truly usable one. I'll continue to search for Mac shortcut key settings through Google and questions.

### How to use other input methods

Just use the system's input method download, then you can use `ctrl+space` to switch input methods.

> Due to conflicts with VSCode's suggestion shortcut, I changed it to `ctrl+shift+space`.

### Use function keys on Mac without fn

Enable **Use F1, F2, etc. keys as standard function keys** in system settings, ref: <https://support.apple.com/HT204436>

![1754490071638.jpg](https://blog.rxliuli.com/resources/c38083a1796040c0b594929bc5cf8c8e.jpg)

> In practice, the F5 browser page refresh shortcut doesn't work...

### How to hide from dock when closing the main window of an application

This depends on whether the application supports this behavior. For example, SSR supports minimizing to the top right corner after closing the window, but Proxifier doesn't support it and must occupy a position in the dock.

### How to list all windows for switching

Mac's command+tab can only switch applications, but cannot switch between multiple windows of the same application.
When switching multiple windows of the same application, you need to use the command+~ shortcut.
To list all windows, you can use the ctrl+top shortcut, but you can't switch using shortcuts. Having to move your right hand from mouse to keyboard and back to mouse is too counterintuitive, and the varying sizes are strange.

Using [alt-tab](https://github.com/lwouis/alt-tab-macos) can restore Windows-like behavior.
![6a9735ba560f48bb913d8fed5171aa17.jpg](https://blog.rxliuli.com/resources/00a366fbbbd74ed3825afbb176dff465.jpg)

### Disable Chrome's right-click menu

By default, Chrome displays several Mac integration right-click menu items, which are mostly not useful and need to be disabled.

![1754490211303.jpg](https://blog.rxliuli.com/resources/51303a88cdef45898633ca9c7ac81d0c.jpg)

Well, it seems this problem cannot be solved, which is really bad. ref: <https://superuser.com/questions/1012292/>

### Modify cursor movement shortcuts in input to Windows shortcuts

The cursor movement shortcuts on Mac might be good, but they obviously differ significantly from Windows.
In Windows, the following keys are generally used to move the cursor:

- home/end jump to beginning/end of line
- ctrl+home/end jump to beginning/end of text
- ctrl+left/right jump to beginning/end of word

All the above keys can be used with shift.

You can configure global keyboard mapping through [Karabiner-Elements](https://karabiner-elements.pqrs.org/) to alleviate this problem.
![1676608991086.png](https://blog.rxliuli.com/resources/8fea00bb34c743939d69be7272208488.png)

### How to download DMG files from third parties

Not handled yet

### How to kill specific processes

Sometimes a background program crashes and needs to be restarted, but Activity Monitor doesn't seem able to right-click and kill a process.
Use Linux commands ps + kill -9

---

In Activity Monitor, first select the process you want to kill, then click ⊗ in the navigation bar
![1754490341172.jpg](https://blog.rxliuli.com/resources/169123dbf20f4ab5af53129200f925ed.jpg)

### Disable cmd+shift+a triggering "No manual entry for setting;type=a" on Mac

In JetBrains IDEs, cmd+shift+a triggers `No manual entry for setting;type=a`, another Mac smart shortcut.

![image (45).png](https://blog.rxliuli.com/resources/e4456280483a4416bb1de7a4a00e1e67.png)

This can be resolved by:

1. Open **System Settings => Keyboard => Keyboard Shortcuts => Services**
2. Disable **Text => Search man Page Index in Terminal**

![1754490809786.jpg](https://blog.rxliuli.com/resources/36716a376a4d4185a666e159ef5b72c7.jpg)

### Automatically close notification popups in the top right corner

Sometimes the system pops up notifications, like software updates, but these notifications stay in the top right corner and remain there unless manually closed, which is very annoying. I'd prefer them to auto-hide like Windows and be viewable in a notification list.

![1680158199513.png](https://blog.rxliuli.com/resources/0a9d1dcc299347eba268fc3fbb54937f.png)

Automator and similar tools can only set shortcuts to close, but cannot automatically close system notifications after a few seconds.

### Set Gmail web version as system default email client

Mac's built-in email client might be good, but I'm used to Gmail, so I want to set Gmail as the system default email client. This step is much more troublesome than on Windows, reference tutorial: <https://zhuanlan.zhihu.com/p/530508168>

### How to sync files to phone via USB with differential sync

The actual need is to sync OneDrive with e-book reader directories, but amazingly, after connecting an Android phone to Mac, you can't directly transfer files to the phone through Finder. You must use Google's [Android File Transfer](https://www.android.com/filetransfer/) program, but it can't do differential sync.

> Now I understand why some people don't like Mac and say it's too closed - it supports things outside its ecosystem very poorly.

### Disable mouse moving to bottom right corner showing Stickies

1. Open **System Settings => Search "Hot Corners" => Hot Corners**
2. Remove the Stickies trigger from the bottom right corner

![1754491072442.jpg](https://blog.rxliuli.com/resources/10a51e7665ce43a7a5d90a6b5640e284.jpg)

> ref: <https://www.zhihu.com/question/502048404>

### Solve the problem of insufficient status bar space hiding some app icons

For example, sometimes you'll find that when too many apps are open on Mac, some app icons in the top right status bar can no longer be seen.

![1714395387992.jpg](https://blog.rxliuli.com/resources/7d55b68097c5481eb56f5b3539ad2593.jpg)

In this case, you can use third-party tools to hide specific icons, but a simpler way is to remove unnecessary system icons like sound, Bluetooth, etc., since they can all be found in Control Center. If you use them frequently, you can also drag them back from Control Center.

<iframe width="560" height="315" src="https://www.youtube.com/embed/O4UclYIeMwc?si=pzUyEIV6t1K1EoFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Additionally, you can modify the spacing between status bar app icons, so the status bar can accommodate more icons, for example:

```sh
defaults -currentHost write -globalDomain NSStatusItemSpacing -int 5
```

Effect

![1717746064016.jpg](https://blog.rxliuli.com/resources/e2a2bb204b1f4e2ca87335ccde7d9865.jpg)

## Finder

### Delete icons on Mac desktop

Use command+delete to delete selected icons.

### Quickly switch windows

Use ctrl+left/right to switch adjacent windows, which is very useful for quickly switching between just a few commonly used windows during development. (Restores old multi-window-like behavior, abandoning the mobile-like approach of one app covering the screen)

### Show hidden files

`command+shift+.` can temporarily toggle showing hidden files.

Use the following method for permanent setting (doesn't seem to work for browser-triggered file selectors)

```sh
defaults write com.apple.finder AppleShowAllFiles -bool true # Show hidden files
defaults write com.apple.finder AppleShowAllFiles -bool false # Don't show hidden files
killall Finder # Restart Finder
```

![1754491134810.jpg](https://blog.rxliuli.com/resources/7bd29ce4376748fb84cd8c7a6a93fc2a.jpg)

### How to paste file paths

Sometimes when you copy a file path and want to quickly open it in Finder, you can use the `command+shift+g` shortcut, then paste the path.

![1754491174091.jpg](https://blog.rxliuli.com/resources/7e49aeef916e4407a731a6f2cb1fcfb3.jpg)

### Open terminal or VSCode in current directory

After selecting a directory, go to **Finder => Services => New iTerm2 Window Here**.

![1754491374728.jpg](https://blog.rxliuli.com/resources/1c718c632c1f4c749503f5f280147111.jpg)

> This is actually different from the expected "open current directory" and is also quite slow.

Well, it's actually also in the right-click menu's submenu.

![1754491437697.jpg](https://blog.rxliuli.com/resources/6927e706c8fd4041a7d38a961dbdbfce.jpg)

Opening iTerm2 for the first time will have two terminals, which seems like a bug.

---

You can use [szContext](https://github.com/RoadToDream/SzContext) to customize the right-click menu.

### Change the default program for opening files

1. Right-click a file of that type in Finder to bring up the menu
2. Select "Get Info" option from the menu
3. In the popup dialog, expand the "Open With" option
4. Select the default program you want to change to, and click "Change All..." below

![1754491665205.jpg](https://blog.rxliuli.com/resources/6242880c1db14060a50b1b008b775af8.jpg)

The **Always open with this kind of application** option when selecting an application is confusing - I didn't expect it to only apply to this specific file.
![1754491616149.jpg](https://blog.rxliuli.com/resources/ad75bed89821493fae3ef83d2857ac83.jpg)

A better tool is duti, which can get or set the default program for specified file types. This is very helpful for batch changing file types that Xcode opens to VSCode.

```sh
# https://github.com/moretension/duti
brew install duti
# from https://github.com/vscode-icons/vscode-icons/blob/74220b6f8389ad5c5d9f68b2029d91460de2b374/src/iconsManifest/languages.ts#L319
filetypes=(.as .ada .prw .affect .al .ansible .g4 .any .htaccess .cls .apib .apl .applescript .adoc .asp .asm .ats .ahk .au3 .avcs .azcli .azure-pipelines.yml .bal .bat .bats .bzl .bf .bicep .bib .biml .blade.php .blitzbasic .bolt .bsq .buf.yaml .c .cal .cabal .Caddyfile .casc .cddl .ceylon .cfc .cfm .clojure .clojurescript .yml .cmake .CMakeCache.txt .cbl .ql .coffee .cfml .confluence .ckbk .cpp .h .cr .cs .css .feature .cu .pyx .dal .dart .dhall .html .diff .d .dockerfile .dtx .env .dot .dox .drl .dust .dylan .earthfile .edge .eex .es .ex .elm .erb .erl .yaml .falcon .fql .f .ftl .fs .fthtml .gspec .gml .gcode .gen .git .glsl .glyphs .gp .go .api .gd .gr .gql .gv .groovy .haml .hbs .prg .hs .haxe .hcl .helm.tpl .hjson .hlsl .hosts .http .aff .hy .hypr .icl .imba .4gl .ini .ink .iss .io .janet .java .js .jsx .jekyll .jenkins .jinja .json .jsonc .jsonnet .json5 .jsonl .jl .id .k .kv .ks .kt ..kusto .tex .lat .less .flex .ly .lisp .lhs .log .lol .lsl .lua .mk .md .marko .mat .ms .mdx .mediawiki .mel .mmd .meson.build .mjml .pq .ep .mongo .mson .ne .nim .nimble .nix .nsi .nunjucks .m .mm .ml .o3 .w .things .pas .pddl .plan .happenings .pl .pl6 .pgsql .php .pine .requirements.txt .txt .dbgasm .ddl .polymer .pony .pcss .ps1 .prisma .pde .pro .rules .properties .proto .pug .pp .purs .arr .py .pyowo .qvs .qml .qs .r .rkt .cshtml .raml .re .red .res .rst .rex .tag .rmd .robot .rb .rs .san .sas .sbt .scad .scala .sce .scss .sdl .shader .sh .slang .ice .slim .ss .sn .eskip .tpl .snort .sol .rq .sqf .sql .nut .stan .bazel .do .stencil .html.stencil .st.css .styled .styl .svelte .swagger .swift .swig .link .sv .tt .teal .tt3 .tera .tf .sty .textile .JSON-tmLanguage .YAML-tmLanguage .Tiltfile .toit .toml .ttcn3 .tuc .twig .ts .tsx .typoscript .u .vb .wsf .vm .v .vhdl .vim .volt .vue .wai .wasm .wy .wgsl .wt .wl .wurst .wxml .xmake.lua .xml .xquery .xsl .bison .yang .zig)

for filetype in "${filetypes[@]}"
do
   duti -s com.microsoft.VSCode $filetype all
   if [ $? -ne 0 ]; then
      echo "Failed to set default program for $filetype"
   fi
done
```

### How to rename files

Select a file and press Enter to rename, or select Rename from the right-click menu.

### How to cut files

Well, you have to use command+c then command+option+v to move files. This is Mac only - even other programs on Mac support command+x.

The third-party enhancement tool XtraFinder doesn't support M1, ref: <https://www.zhihu.com/question/19579070>

### How to create a new Finder window using shortcuts

In Finder, use cmd+n to create a window, not as convenient as ctrl+e which can be done with one hand.

### How to batch copy file names

Well, you just need to multi-select and cmd+c, then paste in a text editor to get the file names, no special tools needed. ref: <https://zhuanlan.zhihu.com/p/71065439>

### How to close all Finder windows

In a Finder window, press option+command+w to close all windows of the current application.

### How to display standard ISO date format

By default, the date format displayed is American date format, while the standard YYYY-MM-DD hh:mm:ss format is more expected.

![1754464608133.jpg](https://blog.rxliuli.com/resources/8e75d7c832cd46209777449a5ec93b64.jpg)

Settings

```sh
# Disable relative date display
defaults write com.apple.finder RelativeDates -bool false

# Set date format
defaults write NSGlobalDomain AppleICUDateFormatStrings -dict-add "1" "yyyy-MM-dd HH:mm"
defaults write NSGlobalDomain AppleICUDateFormatStrings -dict-add "2" "yyyy-MM-dd HH:mm:ss"
defaults write NSGlobalDomain AppleICUDateFormatStrings -dict-add "3" "yyyy-MM-dd HH:mm:ss"
defaults write NSGlobalDomain AppleICUDateFormatStrings -dict-add "4" "yyyy-MM-dd HH:mm:ss"

# Restart Finder
killall Finder
```

Verification

```sh
defaults read com.apple.finder RelativeDates
# 0
defaults read NSGlobalDomain AppleICUDateFormatStrings
# {
#     1 = "yyyy-MM-dd HH:mm";
#     2 = "yyyy-MM-dd HH:mm:ss";
#     3 = "yyyy-MM-dd HH:mm:ss";
#     4 = "yyyy-MM-dd HH:mm:ss";
# }
```

Effect

![1754464645394.jpg](https://blog.rxliuli.com/resources/4cf73c40efcf43a1b4378e4295e0ba9f.jpg)

If you want to restore, you can do so with the following commands.

```sh
# Restore relative date display (enable Today, Yesterday, etc.)
defaults delete com.apple.finder RelativeDates
# Or explicitly enable
# defaults write com.apple.finder RelativeDates -bool true

# Delete custom date format, restore system default
defaults delete NSGlobalDomain AppleICUDateFormatStrings

# Restart Finder to make changes effective
killall Finder
```

## Applications

### Video player

On Windows, I basically always used PotPlayer, powerful and simple. Mac doesn't seem to support it, so I used an open source tool [iina](https://iina.io/). The control bar is a bit strange, but supporting keyboard control for progress is fine.
![1676612583239.png](https://blog.rxliuli.com/resources/f7a272132bee49a4aee730e1b75a233c.png)

### Music player

Although iina also supports playing music, I still found an open source music player [museeks](https://museeks.io/).
![1676374490873.png](https://blog.rxliuli.com/resources/2b45e8d94c1b4dd89554f00fe02c870c.png)

### Clipboard history management

Use the open source program Maccy for management, github: <https://github.com/p0deje/Maccy>

### How to convert wav+cue to flac

Use [Medihuman Audio Converter](https://www.mediahuman.com/audio-converter/welcome.html), reference: <https://www.reddit.com/r/audiophile/comments/s7ftf3/help_with_cue_splitter_program_for_mac/>

### What to use as a sandbox tool

Parallels can install Windows, but $80 is really a bit expensive.

---

Use UTM to solve this. Note that downloading Windows 11 ARM is a bit troublesome. Download and convert from [uup dump](https://uupdump.net/) must use a Windows system.

![1754492590626.jpg](https://blog.rxliuli.com/resources/416187191d13475c8b9120a5d8a4a4ac.jpg)

### How to record GIFs

Use the open source tool [kap](https://getkap.co/) to replace [ScreenToGif](https://www.screentogif.com/) in Windows. It doesn't support cropping and scaling timelines but is basically usable (especially the feature to select application windows - screen recording tools that don't support this are really stupid).

## Development

### Disable or modify system shortcuts on Mac

First is ctrl+space, which is the input method switching shortcut. You can modify it in **Shortcuts => Input Sources**
![1754492733146.jpg](https://blog.rxliuli.com/resources/ff0a4c543e3e491a86acc2b065085529.jpg)

Then there's ctrl+command+space, which by default brings up the emoji menu. In **Shortcuts => App Shortcuts**, change it to a complex, rarely used shortcut.
![1754492771902.jpg](https://blog.rxliuli.com/resources/dd4513368e80476691e8a3634895b5e7.jpg)

Disable the command+alt+m minimize window shortcut. Similarly in **Shortcuts => App Shortcuts**, change it to a complex, rarely used shortcut.
![1754492797698.jpg](https://blog.rxliuli.com/resources/357bc30b06864728a0f5f7da5598bebf.jpg)

Disable the cmd+shift+c create terminal shortcut, which easily conflicts with browser shortcuts. -- This is actually a VSCode shortcut.
![1676524787759.jpg](https://blog.rxliuli.com/resources/c143fa1e520845b3aa77f9cf086d8e1b.jpg)

### How to use shortcuts similar to ctrl+home/ctrl+end to move cursor

By default, the cursor movement shortcuts on Mac are:

Use command+home/end to jump to beginning/end of line (paragraph)
Use option+left/right to jump to beginning of previous word/end of next word paragraph
Use command+top/bottom to jump to beginning/end of text

All the above keys can be used with shift.

---

In VSCode, command+bottom is occupied by the IdeaVim shortcut binding `editor.action.goToDeclaration` and needs to be disabled.

### Configure terminal command line prompt

Use [iterm2](https://iterm2.com/index.html) and [oh-my-zsh](https://github.com/ohmyzsh/ohmyzsh).

### Unable to use Run Script functionality in VSCode

Error: `The terminal process "/bin/zsh '-c', 'pnpm run dev'" failed to launch (exit code: 127).`

Resolved after installing iTerm2 and oh-my-zsh, strange.

### Git pull automatically merges when pulling code

Currently, using `git pull` always prompts for commit message input, but there should be a configuration to disable this behavior.

```sh
git config --global branch.autosetupmerge always
git config --global branch.autosetuprebase always
```

ref: <https://stackoverflow.com/questions/5480069/>

> Not effective

### VSCode tab switching

Well, IdeaVim's default alt+left/right on Windows platform conflicts with macOS's built-in cursor jumping. Can only use the following shortcuts to alleviate this problem:

- command+shift+n open file -- this is JetBrains IDE shortcut
- command+alt+left/right go back/forward to next position in opened files
- ctrl+tab switch tabs (obviously, this shortcut is not particularly easy to press)

### Disable alt key inputting special characters when held

Unfortunately, this problem also seems unsolvable. This is the behavior of Mac's built-in input method and no setting can be found to modify it.

### Sound becomes strange when starting Android Studio

Disable virtual machine sound

```conf
hw.audioInput = no
hw.audioOutput = no
```

You can use the following script to disable sound for all virtual machines:

```sh
#!/bin/bash
find ~/.android/avd -name "config.ini" | while read line
do
   awk '!/audio/' $line > tmp
   rm $line
   mv tmp $line
   echo "hw.audioInput = no" >> $line
   echo "hw.audioOutput = no" >> $line
done
```

Then clear data and cold restart the virtual machine.
![1677133915491.png](https://blog.rxliuli.com/resources/2ce3a5f07cd5403e8f036453d5286ba7.png)

### Modify hosts file

```sh
sudo code /etc/hosts
```

> ref: <https://www.jianshu.com/p/752211238c1b>

### Disable automatic creation of .DS_Store files on Mac

Since using Mac, it's easy to see this file when committing to git, and its position is unpredictable, very annoying. So I want to disable it. Here's ChatGPT's answer:

You can enter the following command in Terminal to disable macOS from automatically creating .DS_Store files:

```sh
defaults write com.apple.desktopservices DSDontWriteNetworkStores true
```

This will prevent macOS from creating .DS_Store files on network volumes. If you want to prevent macOS from creating .DS_Store files in local folders, you can enter another command in Terminal:

```sh
defaults write com.apple.desktopservices DSDontWriteStores true
```

For these changes to take effect, you need to log out and log back into your macOS account. If you want to re-enable .DS_Store file creation, you can replace "true" with "false" in the above two commands and log out and log back into your system account again.

### Configure iTerm2 terminal shortcuts

Strangely, the widely used terminal tool on Mac has cursor movement shortcuts that are inconsistent with Mac defaults. What I expect to be consistent with Mac is:

- cmd+left move to beginning of line
- cmd+right move to end of line
- option+left move to beginning of word
- option+right move to end of word

This requires modifying Key Mappings Preset

![Key Mappings Preset](https://blog.rxliuli.com/resources/1ba7f0e7000e454c8bc8c04e8ddd2257.jpg)

> ref: <https://superuser.com/a/1157575/1078727>

### Disable iTerm2 confirmation prompt every time it closes

You can find these options in Settings => General => Closing

![Prompt information.jpg](https://blog.rxliuli.com/resources/3731d52caeab4167a179a8a4d127e88d.jpg)

### JetBrains IDE input method theme doesn't follow system

Currently the system theme is dark, but the input method theme is light. Seems to be a JetBrains IDE bug, can only exit and reopen the IDE. Related issue: <https://youtrack.jetbrains.com/issue/IDEA-252482/>

### How to create icns icon files

Creating and publishing Mac apps requires using specified icons.

```sh
# 1. Prepare one 1024x1024 maximum size image, rename to icon.png, other sizes can be generated through terminal commands;
# 2. Create a folder named icons.iconset through right-click or command
mkdir icons.iconset
# 3. Use "Terminal" to quickly create various different size requirement image files
sips -z 16 16 icon.png -o icons.iconset/icon_16x16.png
sips -z 32 32 icon.png -o icons.iconset/icon_16x16@2x.png
sips -z 32 32 icon.png -o icons.iconset/icon_32x32.png
sips -z 64 64 icon.png -o icons.iconset/icon_32x32@2x.png
sips -z 128 128 icon.png -o icons.iconset/icon_128x128.png
sips -z 256 256 icon.png -o icons.iconset/icon_128x128@2x.png
sips -z 256 256 icon.png -o icons.iconset/icon_256x256.png
sips -z 512 512 icon.png -o icons.iconset/icon_256x256@2x.png
sips -z 512 512 icon.png -o icons.iconset/icon_512x512.png
sips -z 1024 1024 icon.png -o icons.iconset/icon_512x512@2x.png
# 4. Run the following command in terminal to get an icon file named icon.icns
iconutil -c icns icons.iconset -o icon.icns
```

> Note: The icon.png image file and icons.iconset folder should be saved in the same directory. After starting "Terminal", switch to the same directory.
> ref: <https://zhuanlan.zhihu.com/p/348599140>

