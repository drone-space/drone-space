import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";
import LayoutHeroMain from "@/layouts/heros/Main";
import NavbarShop from "@/partials/navbars/Shop";

import contact from "@/data/contact";

export const metadata: Metadata = {
	title: { default: `Drones`, template: `%s - Drones - Drone Shop - ${contact.name.company}` },
};

export default function DronesLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<LayoutBody nav={<NavbarShop />} hero={<LayoutHeroMain />}>
			<main>{children}</main>
		</LayoutBody>
	);
}
