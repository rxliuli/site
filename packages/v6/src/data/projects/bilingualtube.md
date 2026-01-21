# BilingualTube

A browser extension that adds bilingual subtitles to YouTube videos. Displays original and translated subtitles simultaneously, or uses official YouTube translations when available.

## Why BilingualTube?

Learning a new language or trying to understand content in a foreign language? BilingualTube makes it easy by showing both the original subtitles and their translations at the same time. Perfect for language learners, researchers, or anyone who wants to enjoy content in multiple languages.

## Features

- **Bilingual Subtitles**: Shows original and translated text together on YouTube videos
- **Official Translation Priority**: Automatically uses YouTube's official translations when available
- **API Translation Fallback**: Supports Microsoft Translator and OpenAI for videos without official translations
- **Cross-browser Support**: Works on Chrome, Edge, Firefox, and Safari
- **Customizable Settings**: Configure your preferred translation language and engine

## Installation

The extension is available for multiple browsers:

- **Chrome Web Store** - <https://chromewebstore.google.com/detail/bilingualtube/ombapcolopdeailifakdgaijhoncgpgn>
- **Firefox Add-ons** - <https://addons.mozilla.org/firefox/addon/bilingualtube/>
- **Safari Extensions** - <https://apps.apple.com/us/app/bilingualtube/id6757694666>

## How to Use

1. Install the extension in your browser
2. Open any YouTube video with subtitles
3. The extension will automatically display bilingual subtitles
4. Configure your preferred target language and translation engine in the options page

## Configuration

Open the extension options page to configure:

- **Target Language**: Select your preferred translation language
- **Translation Engine**: Choose between Microsoft (default, no API key required) or OpenAI
- **OpenAI Settings**: Configure API key, model, base URL, and custom prompts (when using OpenAI)

## Use Cases

- **Language Learning**: See translations alongside original text to improve comprehension
- **Content Accessibility**: Understand videos in languages you're not fluent in
- **Research**: Access content from different language sources
- **Entertainment**: Enjoy foreign language content with dual subtitles

## Privacy

BilingualTube processes subtitles locally in your browser when possible. When using API translation services, subtitle text is sent to the selected translation service (Microsoft or OpenAI) according to their respective privacy policies.

## Support

If you encounter any issues or have feature requests, please:

- Report bugs on [GitHub Issues](https://github.com/rxliuli/bilingualtube/issues)
- Contact: [rxliuli@gmail.com](mailto:rxliuli@gmail.com)

## Development

This extension is built with modern web technologies:

- **WXT Framework**: Modern web extension development framework
- **React**: UI components and state management
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **TanStack Query**: Data synchronization

## License

This project is open source and available under the GPL-3.0 License © 2026 rxliuli
