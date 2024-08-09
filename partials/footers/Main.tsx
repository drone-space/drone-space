import React from "react";

import NextImage from "next/image";
import Link from "next/link";

import { Flex, Grid, Image, Text, Title, List, Anchor, Group, GridCol, ListItem, Stack } from "@mantine/core";

import LayoutSection from "@/layouts/Section";

import contact from "@/data/contact";
import images from "@/assets/images";

import classes from "./Main.module.scss";

export default function Main() {
	const email = {
		info: contact.email.find(e => e.type == "info"),
		training: contact.email.find(e => e.type == "training"),
	};
	const phone = {
		pri: contact.phones.find(p => p.type == "primary"),
		sec: contact.phones.find(p => p.type == "secondary"),
	};

	const linkSets = [
		{
			title: "Drone Shop",
			links: [
				{ label: "Camera Drones", link: "/shop/drones/camera" },
				{ label: "Enterprise Drones", link: "/shop/drones/enterprise" },
				{ label: "Agriculture Drones", link: "/shop/drones/agriculture" },
				{ label: "Drone Accessories", link: "/shop/accessories" },
			],
		},
		{
			title: "Useful Links",
			links: [
				{ label: "About Drone Space", link: "/about" },
				{ label: "Our Drone Solutions", link: "/services" },
				{ label: "Basic Training (RPL)", link: "/training/basic" },
				{ label: "Advanced Training", link: "/training/advanced" },
				{ label: "Drone Shop", link: "/shop" },
			],
		},
		{
			title: "Drone Solutions",
			links: [
				{ label: "Consultancy & Resale", link: "/services/drone-consultancy-and-resale" },
				{ label: "Drone Mapping & Survey", link: "/services/drone-mapping-and-survey" },
				{ label: "Aerial Cinematography", link: "/services/aerial-cinematography" },
				{ label: "Solar Inspection", link: "/services/solar-inspection" },
				{ label: "Drone Seeding", link: "/services/drone-seeding" },
				{ label: "ROC Support", link: "/services/roc-support" },
			],
		},
		{
			title: "Contact",
			links: [
				{
					label: "Prosperity House, Westlands",
					link: "https://www.google.com/maps/place/Prosperity+House,+Nairobi/@-1.2723743,36.8091986,17z/data=!3m1!4b1!4m6!3m5!1s0x182f17307ceb423b:0x2b6f26cf176c4f6f!8m2!3d-1.2723743!4d36.8117789!16s%2Fg%2F12hlt4d1k?entry=ttu",
				},
				{ label: email.training?.value, link: `mailto:${email.training?.value}` },
				{ label: email.info?.value, link: `mailto:${email.info?.value}` },
				{ label: phone.pri?.value, link: `tel:${phone.pri?.value}` },
				{ label: phone.sec?.value, link: `tel:${phone.sec?.value}` },
				// { label: "GitHub discussions", link: "#GitHub" },
			],
		},
	];

	const year = new Date().getFullYear();

	return (
		<LayoutSection className={classes.footer}>
			<LayoutSection containerized={"responsive"} padded shadowed>
				<Grid>
					<GridCol span={{ base: 12, md: 4 }}>
						<Flex direction={"column"} align={{ base: "center", md: "start" }} gap={"md"}>
							<Stack w={240}>
								<Image
									src={images.brand.logo.landscape.brandColor}
									alt="Drone Space"
									component={NextImage}
									width={6161}
									height={1034}
									priority
								/>
							</Stack>
							<Text ta={{ base: "center", md: "start" }} fz={{ base: "sm", md: "xs", lg: "md" }}>
								{contact.desc}
							</Text>
						</Flex>
					</GridCol>
					<GridCol span={{ base: 12, md: 8 }} visibleFrom="sm">
						<Grid mt={{ sm: "xl", md: 0 }}>
							{linkSets.map(linkSet => (
								<GridCol
									key={linkSet.title}
									span={"auto"}
									visibleFrom={linkSets.indexOf(linkSet) == 3 ? "lg" : undefined}
								>
									<Flex direction={"column"} align={{ base: "center", md: "end" }} gap={"xs"}>
										<Title order={4} c={"pri"} fw={"bold"}>
											{linkSet.title}
										</Title>
										<List listStyleType="none">
											{linkSet.links.map(link => (
												<ListItem key={link.link} className={classes.listItem}>
													<Anchor
														component={Link}
														href={link.link}
														inherit
														fz={{ base: "sm", lg: "md" }}
														className={classes.link}
													>
														{link.label}
													</Anchor>
												</ListItem>
											))}
										</List>
									</Flex>
								</GridCol>
							))}
						</Grid>
					</GridCol>
				</Grid>
			</LayoutSection>
			{/* <Divider my={"sm"} color="var(--mantine-color-default-border)" /> */}
			<LayoutSection
				padded={"sm"}
				bg={"light-dark(var(--mantine-color-sec-light),var(--mantine-color-sec-light))"}
				containerized={"responsive"}
			>
				<Flex
					direction={{ base: "column", xs: "row" }}
					align={"center"}
					justify={{ xs: "space-between" }}
					gap={{ base: "xs", xs: "md" }}
				>
					<Text c={"dimmed"} fz={{ base: "xs", xs: "sm" }}>
						© {year}{" "}
						<Text component="span" inherit fw={500}>
							{contact.name.app}
						</Text>
						. All rights reserved.
					</Text>
					<Group gap={0}>
						{contact.socials.map(social => (
							<Anchor key={social.link} href={social.link} target="_blank">
								<Stack>
									<Image
										src={social.icon}
										alt={social.title}
										title={social.title}
										component={NextImage}
										width={24}
										height={24}
										priority
									/>
								</Stack>
							</Anchor>
						))}
					</Group>
				</Flex>
			</LayoutSection>
		</LayoutSection>
	);
}
