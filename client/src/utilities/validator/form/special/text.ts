import errors from "../errors";
import generic from "../generic";

const text = (val: string, min: number, max: number) => {
	return generic.empty.string(val, () =>
		generic.length.string(
			val,
			min,
			max,
			() => /[0-9]/.test(val.trim()) && errors.isText
		)
	);
};

export default text;
