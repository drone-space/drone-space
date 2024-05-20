import aside from "./asides";
import footer from "./footers";
import form from "./forms";
import header from "./headers";
import navbar from "./navbars";

import Cta from "./Cta";
import email from "./email";

const Partial = {
	Head: header,
	Navbar: navbar,
	Footer: footer,
	Aside: aside,
	Form: form,
	Email: email,

	Cta: Cta,
};

export default Partial;
