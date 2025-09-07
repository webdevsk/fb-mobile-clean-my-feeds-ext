import { defineConfig } from "wxt"
import { description } from "./package.json"

// See https://wxt.dev/api/config.html
export default defineConfig({
	manifest:({browser}) =>  ({
		name: "FB Mobile - Clean my feeds",
		description,
		icons: {
			"16": "icons/16.png",
			"32": "icons/32.png",
			"48": "icons/48.png",
			"128": "icons/128.png",
		},
		action: {
			default_icon: {
				"16": "icons/16.png",
				"32": "icons/32.png",
				"48": "icons/48.png",
				"128": "icons/128.png",
			},
		},
		web_accessible_resources: [
			{
				resources: ["pwa-manifest.json"],
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
	manifestVersion: 3,
})
