import React from "react";

import Link from "next/link";
import NextImage from "next/image";

import { Anchor, Button, Flex, Grid, GridCol, Group, Image, Stack, Text } from "@mantine/core";

import LayoutSection from "@/layouts/Section";

import images from "@/assets/images";
import contact from "@/data/contact";

import classes from "./Main.module.scss";
import { IconMail, IconPhone } from "@tabler/icons-react";

export default function Main() {
	const email = contact.email.find(e => e.type == "info");
	const phone1 = contact.phones.find(p => p.type == "primary");
	const phone2 = contact.phones.find(p => p.type == "secondary");
	const location = contact.locations.find(l => l.place == "Main Office");

	const data = {
		left: [
			{ icon: IconPhone, label: phone1?.value, link: `tel:${phone1?.value}` },
			{ icon: IconPhone, label: phone2?.value, link: `tel:${phone2?.value}` },
		],
	};

	return (
		<>
			<LayoutSection
				containerized="responsive"
				padded="xs"
				shadowed
				bg={"var(--mantine-color-pri-9)"}
				c={"var(--mantine-color-white)"}
			>
				<Flex direction={{ base: "column", sm: "row" }} align={"center"} gap={"xs"} justify="space-between">
					<Text inherit fz={{ base: "xs", lg: "sm" }} fw={500} c={"white"}>
						{location?.label}
					</Text>

					<Group gap={0}>
						{data.left.map(item => (
							<Button
								key={item.link}
								size="xs"
								variant="transparent"
								color="white"
								component={"a"}
								href={item.link}
								leftSection={<item.icon size={16} stroke={1.5} />}
							>
								{item.label}
							</Button>
						))}
					</Group>
				</Flex>
			</LayoutSection>

			<LayoutSection
				visibleFrom="xs"
				containerized="responsive"
				padded="xs"
				bg={"var(--mantine-color-sec-light)"}
				shadowed
				className={classes.header}
			>
				<Grid align="center" gutter={0}>
					<GridCol span={{ base: 12, xs: 6, md: 4 }}>
						<Anchor href={`mailto:${email?.value}`} fz={{ base: "xs", lg: "sm" }} fw={500}>
							{email?.value}
						</Anchor>
					</GridCol>
					<GridCol span={{ base: 12, md: 4 }} visibleFrom="md">
						<Group justify="center">
							<Anchor component={Link} href={"/"}>
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
							</Anchor>
						</Group>
					</GridCol>
					<GridCol span={{ base: 12, xs: 6, md: 4 }}>
						<Group justify="end" gap={"xs"}>
							<Group gap={0}>
								{contact.socials.map(social => (
									<Anchor key={social.link} href={social.link} target="_blank">
										<Stack>
											<Image
												src={social.icon}
												alt={social.title}
												title={social.title}
												component={NextImage}
												height={24}
												width={24}
												priority
											/>
										</Stack>
									</Anchor>
								))}
							</Group>
						</Group>
					</GridCol>
				</Grid>
			</LayoutSection>
		</>
	);
}
