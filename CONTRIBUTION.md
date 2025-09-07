# Contribution


## How to install

### Prerequisites

- Node.js 22+ or Bun 1.2+

### Install dependencies

```bash
bun install
```

### Start development server

- Chrome
```bash
bun dev
```

- Firefox
```bash
bun dev:firefox
```

This will:

1. Start the development server
1. Watch for file changes and automatically reload the extension
1. Open your browser with the extension loaded in development mode
  - If you don't want this automatic behavior, create this file at the root directory
  ```js
  # web-ext.config.ts
  import { defineWebExtConfig } from "wxt"
  export default defineWebExtConfig({
    disabled: true,
  })
  ```

### Create a production build

Chrome

```bash
bun run build
```

Firefox

```bash
bun run build:firefox
```
### Create a production zip

Chrome

```bash
bun run zip
```

Firefox

```bash
bun run zip:firefox
```

This will create a production-ready build in the `.output/` directory.

## Project structure

* [.output](.output) - Built files (Output)
* [public](public) - Exposed runtime files
	+ [pwa-manifest.json](public/pwa-manifest.json) - Manifest file to enable PWA
* [src](src) - Source files
    * [assets](assets) - Extension files such as icons. 
	+ [config.ts](src/config.ts) - Global config like devMode, runScriptOn, node selectors, theme configuration, etc
	* [entrypoints](src/entrypoints) - Extension entrypoints
    	+ [index.ts](src/entrypoints/index.ts) - Content script. Code starts here
    	+ [style.css](src/entrypoints/style.css) - Content styles
	+ [data](src/data) - Data files
		- [filters-database.ts](src/data/filters-database.ts) - Filter database. This is where you can add new categories, as well as the entries for settings menu
		- [keywords-per-language.ts](src/data/keywords-per-language.ts) - Keywords per language. This is where you can add new keywords for each language (Language detection is still unstable)
	+ [lib](src/lib) - Library files or features

## Guidelines

- Turn on `devMode` in [config.ts](src/config.ts) to get verbose console logs.
- Try to follow "Inject when necessary, remove when not" principle. Just write your code in your own way and tell WindSurf, Cursor or VScode to handle it for you based on other functions here.
- Document your code

## Footer

For any questions, please open an issue.