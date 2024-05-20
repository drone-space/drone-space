import mavic3Classic from "./3classic";
import mavic3e from "./3e";
import mavic3Multispectral from "./3multispectral";
import mavic3T from "./3t";
import air from "./air";

const mavic = {
	mavAir: air,
	mav3classic: mavic3Classic,
	mav3e: mavic3e,
	mav3multispectral: mavic3Multispectral,
	mav3t: mavic3T,
};

export default mavic;
