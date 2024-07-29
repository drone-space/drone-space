interface typeTitle {
	long: string;
	short: string | null;
}

interface typePrice {
	former: string;
	latter: string | null;
}

export interface typeAccessory {
	images: string[];
	title: typeTitle;
	specs: { label: string; desc: string }[];
	price: typePrice | null;
}

export interface typeDrone {
	images: string[];
	title: typeTitle;
	specs: {
		intro: string | string[];
		aircraft: { label: string; desc: string }[];
		camera?: { label: string; desc: string }[];
	};
	price: typePrice;
	kit: {
		basic: {
			image: string;
			contents: { qty: number; item: string; image: string }[];
		};
		flyMore: {
			contents: { qty: number; item: string; image: string }[];
			price: typePrice;
		} | null;
	};
	accessories?: {
		battery: typeAccessory | null | undefined;
		other: typeAccessory[] | null | undefined | any;
	} | null;

	category: string;
	available: boolean | null;
	brand: string;
	make: string | null;
	model: string | null;
	featured?: boolean | undefined;
	starter?: boolean | undefined;
}
