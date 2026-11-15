export type Keyword = string | RegExp
export type KeywordsPerLanguageItem = Record<
	NavigatorLanguage["languages"][number],
	Keyword | Keyword[]
>
type KeywordsPerLanguage =  Record<string, KeywordsPerLanguageItem>

// You can add more languages here. Language code must match the output of navigator.languages
// You can get the output of navigator.languages by opening the console and typing navigator.languages
export const placeholderMessage = {
	"en-US": "Removed",
	en: "Removed",
	bn: "বাতিল",
}
export const keywordsPerLanguage = {
	suggested: {
		"en-US": "Suggested",
		en: "Suggested",
		bn: "আপনার জন্য প্রস্তাবিত",
	},
	sponsored: {
		"en-US": ["Sponsored", /^\s*Ad\s*$/],
		en: "Sponsored",
		bn: "স্পনসর্ড",
	},
	uncategorized: {
		"en-US": ["Join", "Follow"],
		en: ["Join", "Follow"],
		bn: ["ফলো করুন", "যোগ দিন"],
	},
	peopleYouMayKnow: {
		"en-US": "People You May Know",
		en: "People You May Know",
	},
	reels: {
		"en-US": "Reels",
		en: "Reels",
	},
	addFriend: {
		"en-US": "Add friend",
		en: "Add friend",
	},
} satisfies KeywordsPerLanguage
