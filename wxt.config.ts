import { defineConfig } from "wxt"
import { description } from "./package.json"

// See https://wxt.dev/api/config.html
export default defineConfig({
	manifest:({browser}) =>  ({
		name: "Clean My Feeds for Facebook Mobile",
		description,
		web_accessible_resources: [
			{
				resources: ["pwa-manifest.json", "icons/*"],
				matches: ["*://*.facebook.com/*"],
			},
		],
		...(browser === "firefox" ? {
			"browser_specific_settings": {
				"gecko_android": {
					"strict_min_version": "113.0",
					"id": "92a2df5ed2510a2bfa4131c48c63c5d2de0ce475@webdevsk-addon"
						},
				"gecko": {
					"strict_min_version": "113.0",
					"id": "92a2df5ed2510a2bfa4131c48c63c5d2de0ce475@webdevsk-addon"
					},
				}
		} : {})
	}),
	srcDir: "src",
	modules: ["@wxt-dev/auto-icons"],
	autoIcons: {
		sizes: [16, 32, 48, 128, 192, 512],
	},
	manifestVersion: 3,
})
