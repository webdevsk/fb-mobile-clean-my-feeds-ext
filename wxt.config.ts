import { defineConfig } from "wxt"
import { description, version } from "./package.json"

// See https://wxt.dev/api/config.html
export default defineConfig({
	manifest: {
		name: "FB Mobile - Clean my feeds",
		description,
		version,
		icons: {
			"16": "icons/icon-16.png",
			"32": "icons/icon-32.png",
			"48": "icons/icon-48.png",
			"128": "icons/icon-128.png",
		},
		action: {
			default_icon: {
				"16": "icons/icon-16.png",
				"32": "icons/icon-32.png",
				"48": "icons/icon-48.png",
				"128": "icons/icon-128.png",
			},
		},
		web_accessible_resources: [
			{
				resources: ["/content.css"],
				matches: ["*://*.facebook.com/*"],
			},
		],
	},
	srcDir: "src",
	modules: ["@wxt-dev/auto-icons"],
})
