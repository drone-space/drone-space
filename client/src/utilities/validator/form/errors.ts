export const errors = {
	isEmpty: "Please fill out this field",
	isText: "Please exclude numbers here",
	isLowercase: "Please exclude uppercase letters here",
	isUnchecked: "Please check this box to continue",
	isShort: (length: number) => `At least ${length} characters`,
	isLong: (length: number) => `At most ${length} characters`,
	isFormat: (type: string) => `Invalid ${type} format`,
	isPassword: "Must include an uppercase, lowercase, number and symbol",
	isConfirm: "Passwords must match",
	isInauthentic: (field: string) => `Incorrect ${field}`,
};

export default errors;
