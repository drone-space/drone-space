import compare from "./compare";
import email from "./email";
import text from "./text";
import password from "./password";
import phone from "./phone";

const special = {
	text: text,
	email: email,
	password: password,
	compare: compare,
	phone: phone,
};

export default special;
