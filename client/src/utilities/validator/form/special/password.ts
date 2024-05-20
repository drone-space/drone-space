import errors from "../errors";
import generic from "../generic";

const password = (val: string, min: number, max: number) =>
	generic.empty.string(val, () =>
		generic.length.string(
			val,
			min,
			max,
			() =>
				!(
					/[$&+,:;=?@#|'<>.^*()%!-]/.test(val.trim()) &&
					/[0-9]/.test(val.trim()) &&
					/[a-z]/.test(val.trim()) &&
					/[A-Z]/.test(val.trim())
				) && errors.isPassword
		)
	);

export default password;
