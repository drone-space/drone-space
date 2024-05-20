import errors from "../errors";
import generic from "../generic";

const email = (val: string) =>
	generic.empty.string(
		val,
		() => !/^\S+@\S+$/.test(val.trim()) && errors.isFormat("email")
	);

export default email;
