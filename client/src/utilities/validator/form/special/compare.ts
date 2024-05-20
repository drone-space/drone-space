import errors from "../errors";
import generic from "../generic";

const string = (val: string, control: string) =>
	generic.empty.string(val, () => val !== control && errors.isConfirm);

const number = (val: string, control: string) =>
	generic.empty.string(val, () => val !== control && errors.isConfirm);

const compare = {
	string: string,
	number: number,
};

export default compare;
