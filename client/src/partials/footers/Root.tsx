import React from "react";

import { Link } from "react-router-dom";

import { Text, Container, Group, Stack, Flex, Grid, GridCol, Image } from "@mantine/core";

import Component from "@src/components";

import utility from "@src/utilities";

import data from "@src/data";
import content from "@src/assets/content";

import classes from "./Root.module.scss";

const linkGroups = [
	{
		title: "Useful Links",
		desc: [
			{
				label: "About Us",
				link: "/about",
			},
			{
				label: "Our Services",
				link: "/drone-services",
			},
			{
				label: "RPL Training",
				link: "/drone-training/remote-pilot-license",
			},
			{
				label: "Advanced Training",
				link: "/drone-training/advanced",
			},
			{
				label: "Our Products",
				link: "/drone-shop",
			},
		],
	},

	{
		title: "Services",
		desc: [
			{
				label: "Consultancy & Resale",
				link: `/drone-services/${utility.parser.linkify(content.service.droneConsultancy.title)}`,
			},
			{
				label: "Drone Mapping & Survey",
				link: `/drone-services/${utility.parser.linkify(content.service.droneMapping.title)}`,
			},
			{
				label: content.service.aerialCinematography.title,
				link: `/drone-services/${utility.parser.linkify(content.service.aerialCinematography.title)}`,
			},
			{
				label: content.service.solarInspection.title,
				link: `/drone-services/${utility.parser.linkify(content.service.solarInspection.title)}`,
			},
			{
				label: content.service.droneSeeding.title,
				link: `/drone-services/${utility.parser.linkify(content.service.droneSeeding.title)}`,
			},
			{
				label: content.service.rocSupport.title,
				link: `/drone-services/${utility.parser.linkify(content.service.rocSupport.title)}`,
			},
		],
	},

	{
		title: "Contact Us",
		desc: [
			{
				label: content.contact.map.location,
				link: content.contact.map.link,
			},
			{
				label: content.contact.email.info,
				link: `mailto:${content.contact.email.info}`,
			},
			{
				label: content.contact.phone.phone1,
				link: `tel:${content.contact.phone.phone1}`,
			},
			{
				label: content.contact.phone.phone2,
				link: `tel:${content.contact.phone.phone2}`,
			},
		],
	},
];

const policy = [
	{
		link: "/policy/terms-and-conditions",
		label: "Terms and Conditions",
	},
	{
		link: "/policy/privacy-policy",
		label: "Privacy Policy",
	},
	{
		link: "/policy/training-policy",
		label: "Training Policy",
	},
];

export default function Root() {
	const groups = linkGroups.map(group => {
		const links = group.desc.map(link => (
			<Text key={link.link} component={Link} to={link.link} className={classes.link} fz={"sm"} ta={"end"}>
				{link.label}
			</Text>
		));

		return (
			<GridCol key={group.title} span={"auto"}>
				<Stack align="end" gap={"xs"}>
					<Text fw={"bold"} fz={"xl"} c={"sec.3"}>
						{group.title}
					</Text>
					<Stack gap={"xs"} align="end">
						{links}
					</Stack>
				</Stack>
			</GridCol>
		);
	});

	return (
		<footer className={classes.footer}>
			<Container>
				<Group align="start" justify="space-between" py={"xl"}>
					<Grid>
						<GridCol span={{ base: 12, md: 4 }}>
							<Flex direction={"column"} align={{ base: "center", md: "start" }} gap={"xs"}>
								<Text fz={"xl"} fw={"bold"} ta={{ base: "center", md: "start" }}>
									Drone Space
								</Text>
								<Text fz="sm" ta={{ base: "center", md: "start" }}>
									Drone Space is the leading provider of drone training and drone services in Kenya
									and East Africa. The company offers comprehensive drone license training courses
									designed to educate and equip professionals with the skills and knowledge to safely
									and effectively operate drones commercially. The courses are designed to meet
									international standards and provide students with hands-on experience and practical
									knowledge of drone operations.
								</Text>
								<Group gap={4}>
									{data.links.social.map(link => (
										<a key={link.link} href={link.link} target="_blank" title={link.title}>
											<Image src={link.icon} alt={link.title} w={28} h={28} />
										</a>
									))}
								</Group>
							</Flex>
						</GridCol>
						<GridCol span={8} visibleFrom="md">
							<Grid>{groups}</Grid>
						</GridCol>
					</Grid>
				</Group>
			</Container>

			<Component.Hr.Secondary />

			<Container>
				<Flex
					direction={{ base: "column", sm: "column" }}
					align={"center"}
					justify={{ sm: "space-between" }}
					py={"xs"}
					gap={"xs"}
					fw={500}
					fz={"xs"}
				>
					{/* <Group gap={"xs"} visibleFrom="xs">
						{policy.map((item) => (
							<React.Fragment key={item.link}>
								<Text
									component={Link}
									to={item.link}
									className={classes.link}
									inherit
									ta={"end"}
								>
									{item.label}
								</Text>
								{policy.indexOf(item) < policy.length - 1 && (
									<IconPointFilled size={8} />
								)}
							</React.Fragment>
						))}
					</Group> */}

					<Text ta={{ base: "center", md: "start" }} inherit>
						2024 &copy; Drone Space. All rights reserved.
					</Text>
				</Flex>
			</Container>
		</footer>
	);
}
