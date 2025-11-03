# Sticky Reddit Search

A browser extension that keeps your Reddit search filters (sort, time range, type) when searching with new keywords.

## Problem

Reddit resets all search options every time you enter a new search term. This extension preserves your filter preferences automatically.

## Features

-  Preserves sort order (relevance, hot, top, new, comments)
-  Preserves time range filter (hour, day, week, month, year, all time)
-  Preserves search type (posts, comments, communities, people)
-  Works in both subreddit and site-wide search
-  Lightweight and fast

## Installation

> **Note:** The extension is currently under review for Chrome Web Store and Firefox Add-ons. In the meantime, you can install it manually using the instructions below.

### Chrome/Edge

1. Install from the [Chrome Web Store](https://chromewebstore.google.com/detail/sticky-reddit-search/onpejjljjpabiobobaihncgijgllbifa)

### Firefox

1. Download or clone the repository
2. Open `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on"
4. Select the `manifest.json` file

## Usage

Just search on Reddit normally. Your filter settings will automatically persist across searches.

## How It Works

The extension monitors Reddit search URLs and preserves your selected filters when you enter a new search term. It works seamlessly in the background without requiring any configuration.

