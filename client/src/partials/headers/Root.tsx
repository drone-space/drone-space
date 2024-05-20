import { Anchor, Box, Center, Container, Flex, Group, Image } from "@mantine/core";

import {
	IconBrandFacebook,
	IconBrandInstagram,
	IconBrandLinkedin,
	IconBrandX,
	IconMail,
	IconPhone,
} from "@tabler/icons-react";

import content from "../../assets/content";

import classes from "./Root.module.scss";
import image from "@src/assets/images";

const data = {
	contact: [
		{
			icon: IconMail,
			link: `mailto:${content.contact.email.info}`,
			label: content.contact.email.info,
		},
		{
			icon: IconPhone,
			link: `tel:${content.contact.phone.phone1}`,
			label: content.contact.phone.phone1,
		},
		{
			icon: IconPhone,
			link: `tel:${content.contact.phone.phone2}`,
			label: content.contact.phone.phone2,
		},
	],

	social: [
		{
			icon: image.icons.social.twitter,
			link: content.contact.social.twitter,
		},
		{
			icon: image.icons.social.facebook,
			link: content.contact.social.facebook,
		},
		{
			icon: image.icons.social.instagram,
			link: content.contact.social.instagram,
		},
		{
			icon: image.icons.social.linkedin,
			link: content.contact.social.linkedIn,
		},
	],
};

export default function Root() {
	return (
		<Box className={classes.header} visibleFrom="xs">
			<Container>
				<Flex justify={{ base: "center", sm: "space-between" }}>
					<Group>
						{data.contact.map(item => (
							<Group key={item.link} gap={4}>
								<item.icon size={20} stroke={2} color="#74d7d1" />
								<Anchor key={item.link} href={item.link} className={classes.link}>
									{item.label}
								</Anchor>
							</Group>
						))}
					</Group>
					<Group gap={4} visibleFrom="sm">
						{data.social.map(item => (
							<Anchor key={item.link} href={item.link} target="_blank">
								<Image src={item.icon} alt={item.link} w={24} h={24} />
							</Anchor>
						))}
					</Group>
				</Flex>
			</Container>
		</Box>
	);
}
