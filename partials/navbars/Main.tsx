import React from "react";

import Link from "next/link";
import NextImage from "next/image";

import { Group, Container, Image, Stack } from "@mantine/core";

import LayoutSection from "@/layouts/Section";
import DrawerNavMain from "@/components/drawers/nav/Main";
import NavigationMain from "@/components/navigation/Main";

import links from "@/data/links";
import images from "@/assets/images";

import classes from "./Main.module.scss";

export default function Main() {
	return (
		<LayoutSection className={classes.navbar}>
			<Container size={"responsive"}>
				<Group justify="space-between">
					<Group hiddenFrom="md">
						<Link href={"/"}>
							<Stack w={200}>
								<Image
									src={images.brand.logo.landscape.brandColor}
									alt="Drone Space"
									// className={classes.logo}
									component={NextImage}
									width={6161}
									height={1034}
									priority
								/>
							</Stack>
						</Link>
					</Group>

					<DrawerNavMain data={links.navbar.main} hiddenFrom="md" aria-label="Toggle Navigation" />

					<Group gap={"xs"} component={"nav"} visibleFrom="md">
						<NavigationMain />
					</Group>
				</Group>
			</Container>
		</LayoutSection>
	);
}
