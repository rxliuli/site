# Single Instance

## Introduction

Keep each site you choose in a single tab. When a link to that site is opened from somewhere else, it opens in the tab you already have and the new tab is closed.

Built for web apps that misbehave with a second tab: Discord asking you to log in again, WhatsApp Web's single session, heavy apps such as Slack or Figma, music sites playing twice.

## Key Features

- 🗂️ Keep any site in one tab, configured per match pattern such as `https://discord.com/*`
- 🔗 New tabs to that site are merged into the existing tab and closed
- 🙅 Only a new tab's first navigation is intercepted — Ctrl/Cmd+click, middle click and OAuth popups work normally
- 🔒 Minimal permissions: `storage` and `activeTab`, plus access to a site only when you add a rule for it
- 🚫 No content scripts, no network requests, no data collection — rules stay on your device
