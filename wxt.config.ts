import { defineConfig } from "wxt"
import { description, version } from "./package.json"

// See https://wxt.dev/api/config.html
export default defineConfig({
	manifest: {
		name: "FB Mobile - Clean my feeds",
		description,
		version,
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
				resources: ["/runtime.css"],
				matches: ["*://*.facebook.com/*"],
			},
		],
	},
	srcDir: "src",
	modules: ["@wxt-dev/auto-icons"],
})
