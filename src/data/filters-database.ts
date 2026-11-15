import {
	type KeywordsPerLanguageItem,
	keywordsPerLanguage,
} from "./keywords-per-language"

type FiltersDatabaseItem = {
	title: string
	description: string
	icon: string
	keywordsDB: KeywordsPerLanguageItem
}

export const filtersDatabase: Record<string, FiltersDatabaseItem> = {
	suggested: {
		title: "Suggested",
		description: "Removes un-needed algorithm suggested posts",
		icon: "󱤁",
		keywordsDB: keywordsPerLanguage.suggested,
	},
	sponsored: {
		title: "Sponsored",
		description: "Hides sponsored and promotional posts",
		icon: "󱠑",
		keywordsDB: keywordsPerLanguage.sponsored,
	},
	reels: {
		title: "Reels",
		description: "Removes annoying short videos",
		icon: "󰎃",
		keywordsDB: keywordsPerLanguage.reels,
	},
	peopleYouMayKnow: {
		title: "People You May Know",
		description: "Removes suggested friends",
		icon: "󰎍",
		keywordsDB: keywordsPerLanguage.peopleYouMayKnow,
	},
	addFriend: {
		title: "Add friend",
		description: "Removes Add friend posts",
		icon: "󰎍",
		keywordsDB: keywordsPerLanguage.addFriend,
	},
	uncategorized: {
		title: "Follow/Join",
		description: "Removes suggested pages with join/follow link",
		icon: "󱠂",
		keywordsDB: keywordsPerLanguage.uncategorized,
	},
}

// RegExp values are normalized to string to be used as keys in the map.
export const filterTitlePerKeywordIndex = new Map<string, string>(
	Object.entries(filtersDatabase).flatMap(([_category, { title, keywordsDB }]) =>
		Object.values(keywordsDB).flatMap((keyword) => Array.isArray(keyword) ? keyword.map(k => [k instanceof RegExp ? k.toString() : k, title]) : [[keyword instanceof RegExp ? keyword.toString() : keyword, title]])
	)
)