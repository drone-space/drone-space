import icons from "@/assets/icons";

const companyName = "Drone Space";
const appName = companyName;

const contact = {
	name: { company: companyName, app: appName },
	desc: "Drone Space is the leading provider of drone training and drone services in Kenya and East Africa. The company offers comprehensive drone license training courses designed to educate and equip professionals with the skills and knowledge to safely and effectively operate drones commercially. The courses are designed to meet international standards and provide students with hands-on experience and practical knowledge of drone operations.",
	phones: [
		{ type: "primary", label: "", value: "+254713028115" },
		{ type: "secondary", label: "", value: "+254750939105" },
	],
	email: [
		{ type: "info", value: "info@dronespace.co.ke" },
		{ type: "training", value: "training@dronespace.co.ke" },
	],
	socials: [
		{
			title: `${companyName} @ WhatsApp`,
			link: "https://wa.me/254713028115",
			icon: icons.social.whatsapp,
		},
		{
			title: `${companyName} @ Twitter`,
			link: "https://twitter.com/DroneSpaceKenya",
			icon: icons.social.twitter,
		},
		{
			title: `${companyName} @ Facebook`,
			link: "https://www.facebook.com/profile.php?id=100079898846715&mibextid=kFxxJD",
			icon: icons.social.facebook,
		},
		{
			title: `${companyName} @ Instagram`,
			link: "https://www.instagram.com/dronespacekenya/?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D",
			icon: icons.social.instagram,
		},
		{
			title: `${companyName} @ LinkedIn`,
			link: "https://www.linkedin.com/company/drone-space-kenya-limited",
			icon: icons.social.linkedin,
		},
	],
	hours: [
		{ label: "days", value: "Mon - Fri" },
		{ label: "times", value: "9 AM - 5 PM" },
	],
	locations: [
		{
			place: "Main Office",
			label: "73 Westlands Road, Westlands, Nairobi, KE 00100",
			link: "#",
		},
	],

	year: new Date().getFullYear(),
};

export default contact;
