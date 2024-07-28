import React from "react";

import LayoutSection from "@/layouts/Section";
import CarouselShop from "@/components/carousels/Shop";
import DrawerNavMain from "@/components/drawers/nav/Main";
import NavigationShop from "@/components/navigation/Shop";

import classes from "./Shop.module.scss";
import { Flex, Group } from "@mantine/core";
import links from "@/data/links";

export default function Shop() {
	return (
		<LayoutSection className={classes.hero}>
			<LayoutSection containerized="responsive" padded="md" shadowed className={classes.navbar}>
				<Flex justify={{ base: "end", sm: "start" }}>
					<DrawerNavMain
						data={links.navbar.shop}
						color="white"
						hiddenFrom="sm"
						aria-label="Toggle Navigation"
					/>

					<Group gap={"xs"} component={"nav"} visibleFrom="sm">
						<NavigationShop data={links.navbar.shop} variant="hero" />
					</Group>
				</Flex>
			</LayoutSection>

			<CarouselShop />
		</LayoutSection>
	);
}
