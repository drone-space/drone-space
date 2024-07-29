import React from "react";

import Link from "next/link";
import NextImage from "next/image";

import { Anchor, Grid, GridCol, Group, Image, Stack } from "@mantine/core";

import LayoutSection from "@/layouts/Section";

import images from "@/assets/images";
import contact from "@/data/contact";

import classes from "./Main.module.scss";

export default function Main() {
	const email = contact.email.find(e => e.type == "info");

	return (
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
					{email && (
						<Anchor href={`mailto:${email.value}`} fz={{ base: "xs", lg: "sm" }} fw={500}>
							{email.value}
						</Anchor>
					)}
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
	);
}
