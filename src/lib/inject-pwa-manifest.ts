import { devMode } from "@/config"

export const injectPwaManifest = () => {
	let manifestNode = document.querySelector<HTMLLinkElement>(
		'link[rel="manifest"]'
	)
	if (devMode) console.log("Original PWA Manifest status: ", manifestNode)
	if (!manifestNode) {
		manifestNode = document.createElement("link")
		manifestNode.id = "MANIFEST_LINK"
		manifestNode.rel = "manifest"
		document.head.appendChild(manifestNode)
		if (devMode) console.log("Appended new Manifest: ", manifestNode)
	}
	manifestNode.href = browser.runtime.getURL("/pwa-manifest.json")
}
