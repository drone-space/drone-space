import {
	IconMail,
	IconMapPin,
	IconPhone,
	IconClock,
} from "@tabler/icons-react";

import content from "../assets/content";

const contact = {
	mail: {
		icon: IconMail,
		title: "Email Us",
		description: [
			{
				link: `mailto:${content.contact.email.info}`,
				label: content.contact.email.info,
			},
			{
				link: `mailto:${content.contact.email.training}`,
				label: content.contact.email.training,
			},
		],
	},
	phone: {
		icon: IconPhone,
		title: "Call Us",
		description: [
			{
				link: `tel:${content.contact.phone.phone1}`,
				label: content.contact.phone.phone1,
			},
			{
				link: `tel:${content.contact.phone.phone2}`,
				label: content.contact.phone.phone2,
			},
		],
	},
	map: {
		icon: IconMapPin,
		title: "Find Us",
		description: [
			{
				link: "https://www.bing.com/maps/?cp=-1.272695%7E36.811809&lvl=17.3",
				label: "6th Floor, Prosperity House, Westlands, Nairobi KE",
			},
		],
	},
	hours: {
		icon: IconClock,
		title: "Office Hours",
		description: [
			{
				link: "#",
				label: `${content.contact.hours.times.from} AM - ${content.contact.hours.times.to} PM`,
			},
			{
				link: "#",
				label: `${content.contact.hours.days.from} - ${content.contact.hours.days.to}`,
			},
		],
	},
};

export default contact;
