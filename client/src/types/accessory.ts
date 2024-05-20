import typePrice from "./price";
import typeTitle from "./title";

export default interface typeAccessory {
	image: string;
	title: typeTitle;
	specs: string[];
	price: typePrice;
}