import { IconRegistered, IconShoppingCart, IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

import content from "../assets/content";
import image from "@src/assets/images";

const links = {
	social: [
		{
			icon: image.icons.social.twitter,
			title: "Drone Space @ Twitter",
			link: content.contact.social.twitter,
		},
		{
			icon: image.icons.social.facebook,
			title: "Drone Space @ Facebook",
			link: content.contact.social.facebook,
		},
		{
			icon: image.icons.social.instagram,
			title: "Drone Space @ Instagram",
			link: content.contact.social.instagram,
		},
		{
			icon: image.icons.social.linkedin,
			title: "Drone Space @ LinkedIn",
			link: content.contact.social.linkedIn,
		},
	],

	cta: [
		{
			icon: IconRegistered,
			link: "drone-training/pricing",
			label: "Register for RPL",
		},
		{
			icon: IconShoppingCart,
			link: "drone-shop",
			label: "Shop For A Drone",
		},
	],

	contact: [
		{
			icon: IconMail,
			title: "Email Us",
			desc: [
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
		{
			icon: IconMapPin,
			title: "Find Us",
			desc: [
				{
					link: content.contact.map.link,
					label: content.contact.map.location,
				},
			],
		},
		{
			icon: IconPhone,
			title: "Call Us",
			desc: [
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
	],
};

export default links;
