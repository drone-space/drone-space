import errors from "../errors";

const string = (val: string, action: Function) =>
	val.trim() ? action() : errors.isEmpty;

const number = (val: number, action: Function) =>
	val ? action() : errors.isEmpty;

const checkbox = (val: boolean) => !val && errors.isUnchecked;

const empty = {
	string: string,
	checkbox: checkbox,
	number: number,
};

export default empty;
