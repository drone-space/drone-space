import errors from "../errors";
import generic from "../generic";

const phone = (val: string) =>
	generic.empty.string(
		val,
		() => !/^(07)\d{8}$/.test(val.trim()) && errors.isFormat("phone number")
	);

export default phone;
