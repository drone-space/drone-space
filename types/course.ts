export interface typeBasic {
	title: {
		short: string;
		full: string;
	};
	desc: string;
	overview: string;
	objectives: string[];
	units: typeUnit[];
}

export interface typeUnit {
	featured?: boolean;
	advanced?: boolean;
	image: string;
	title: {
		short: string;
		full: string;
	};
	price: {
		discount: number | null;
		full: number;
	} | null;
	priceFeatures:
		| {
				item: string;
				duration: string | null;
				price: number | null;
		  }[]
		| null;
	desc: string;
	modules: string[] | null;
	qualifications: string[];
	available?: boolean;
}
