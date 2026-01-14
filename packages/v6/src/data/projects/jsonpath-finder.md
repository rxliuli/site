# JSONPath Finder

A Visual Studio Code extension for navigating complex JSON files. Search for keys, values, or use JSONPath expressions to quickly locate and jump to specific nodes in your JSON documents.

## Features

- **Quick Search**: Find any key or value in JSON files using fuzzy search
- **JSONPath Support**: Use JSONPath expressions for precise queries (e.g., `$.store.book[*].author`)
- **Real-time Navigation**: Instantly jump to matching nodes as you type
- **JSONC Support**: Works with both JSON and JSONC (JSON with comments) files

## Usage

1. Open a JSON or JSONC file
2. Run the command "JSONPath Finder: Quick Navigate" from the command palette (Ctrl+Shift+P / Cmd+Shift+P)
3. Start typing to search:
   - Enter any text to search for keys or values
   - Use JSONPath expressions for structured queries (e.g., `users[0].name`)
   - Navigate through results with arrow keys
   - Press Enter to jump to the selected node

## License

MIT License
