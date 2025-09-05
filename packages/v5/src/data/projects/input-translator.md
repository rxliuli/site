# Input Translator

A lightweight browser extension for instant text translation in any input field.

## Features

- **Instant Translation** - Translate directly in input fields without switching tabs
- **Free by Default** - Uses Google Translate, no configuration required
- **AI Support** - Configure OpenAI API or compatible LLM providers (OpenRouter, etc.)
- **Universal Compatibility** - Works with text inputs and rich text editors

## Quick Start

1. Install the extension
2. Type in any input field
3. Press space 3 times to translate

## Usage

### Translation Triggers

- **Triple Space** - Press space 3 times to translate current input
- **Hotkey** - `Alt+T` (customizable)
- **Context Menu** - Right-click and select "Translate Text"

## Configuration

### Basic Settings

- Target Language: Set your preferred target language (default: English)
- Custom hotkey configuration (optional)

### API Configuration (Optional)

**OpenAI:**

```sh
API Provider: OpenAI
API Key: sk-...
Model: gpt-4.1-mini
```

**OpenRouter or Compatible Services:**

```sh
API Provider: OpenAI
API Base URL: https://openrouter.ai/api/v1
API Key: your-api-key
Model: openai/gpt-4.1-mini
```

## Privacy

- No personal data collection
- API keys stored locally in browser
- Text only sent to configured translation service

### Chrome/Edge

Download from [Chrome Web Store](https://chromewebstore.google.com/detail/namibphobdcighbjjojlhcflpnhobjeo)

### Firefox

Download from [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/input-translator/)

### Safari

Download from [App Store](https://apps.apple.com/us/app/input-translator/id6749811908)

## Support

### Need Help?

- **Report Issues**: [GitHub Issues](https://github.com/rxliuli/input-translator/issues)
- **Contact Email**: [rxliuli@gmail.com](mailto:rxliuli@gmail.com)
- **Discord Community**: [Join our Discord](https://discord.gg/fErBc3wYrC)
- **Documentation**: You're reading it! This README contains all usage instructions.

### Frequently Asked Questions

**Q: Why doesn't the triple space trigger work?**
A: Some websites may override keyboard shortcuts. Try using the hotkey (Alt+T) or context menu instead.

**Q: Is it free to use?**
A: Yes! The extension uses Google Translate by default which is free. OpenAI API is optional.

**Q: How do I change the translation hotkey?**
A: Go to your browser's extension shortcuts settings and customize the keyboard shortcut.

**Q: My API key isn't working, what should I do?**
A: Verify your API key is correct and has sufficient credits. For OpenRouter, ensure you've set the correct API Base URL.

**Q: Which languages are supported?**
A: The extension supports all languages available in Google Translate and your configured AI model.

**Q: How do I change the translation target language?**
A: Go to the extension settings and select your preferred target language.

## License

GPL-3.0

---

[Report Issue](https://github.com/rxliuli/input-translator/issues) | [Star on GitHub](https://github.com/rxliuli/input-translator)

