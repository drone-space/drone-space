import React from "react";

import Link from "next/link";
import NextImage from "next/image";

import { Group, Container, Image, Stack, Flex } from "@mantine/core";

import LayoutSection from "@/layouts/Section";
import DrawerNavMain from "@/components/drawers/nav/Main";
import NavigationShop from "@/components/navigation/Shop";

import links from "@/data/links";
import images from "@/assets/images";

import classes from "./Shop.module.scss";

export default async function Shop() {
	return (
		<LayoutSection padded="md" shadowed className={classes.navbar}>
			<Container size={"responsive"}>
				<Flex justify={{ base: "end", sm: "start" }}>
					<DrawerNavMain
						data={links.navbar.shop}
						color="white"
						hiddenFrom="sm"
						aria-label="Toggle Navigation"
					/>

					<Group gap={"xs"} component={"nav"} visibleFrom="sm">
						<NavigationShop data={links.navbar.shop} />
					</Group>
				</Flex>
			</Container>
		</LayoutSection>
	);
}
