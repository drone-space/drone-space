import typeAccessory from "./accessory";
import typePrice from "./price";
import typeTitle from "./title";

export default interface typeProduct {
	image: {
		drone: string;
		kit: {
			basic: string;
			flyMore: string | null;
		};
		accessories: {
			battery: string | null;
			other: object | null;
		} | null;
	};
	desc: {
		title: typeTitle;
		specs: string[];
		price: typePrice;
		category: string;
		kit: {
			basic: {
				contents: string[];
			};
			flyMore: {
				contents: string[];
				price: typePrice;
			} | null;
		};
		accessories: {
			battery: typeAccessory | null;
			other: typeAccessory[] | null;
		} | null;
	};

	link: string;

	filters: {
		available: boolean | null;
		type: string;
		brand: string;
		make: string | null;

		featured?: boolean | undefined;
		starter?: boolean | undefined;
	};
}
