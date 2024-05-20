import errors from "../errors";
import empty from "./empty";

const string = (val: string, min: number, max: number, action: Function) =>
	empty.string(val, () => {
		if (val.trim().length < min) {
			return errors.isShort(min);
		} else if (val.trim().length > max) {
			return errors.isLong(max);
		} else return action();
	});

const number = (val: number, min: number, max: number, action: Function) =>
	empty.number(val, () => {
		if (val < min) {
			return errors.isShort(min);
		} else if (val > max) {
			return errors.isLong(max);
		} else return action();
	});

const length = {
	string: string,
	number: number,
};

export default length;
