import text from "./text";

const crumify = (path: string) => {
	const crumbs = [{ link: "/", label: "Home" }];

	let currentLink = "";

	path.split("/")
		.filter((crumb) => crumb != "")
		.map((item) => {
			currentLink += `/${item}`;
			item.length < 24 &&
				crumbs.push({
					link: currentLink,
					label: `${text.capitalize.sentence(
						item.replaceAll("-", " ")
					)}`,
				});
		});

	return crumbs;
};

export default crumify;
