export interface typeBlog {
	data: {
		image: string;
		title: string;
		titleLink?: string;
		desc: {
			p: string[];
			list?: { title: string; desc: { p: string[] } }[] | { title: string; desc: string }[];
			images?: { title: string; image: string }[];
			quotes?: { quote: string; cite: string }[];
		};
		date: string;
		// views: number;
		// comments: number;
	};
}
