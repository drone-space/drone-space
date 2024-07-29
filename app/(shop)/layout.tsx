import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";
import HeaderMain from "@/partials/headers/Main";
import NavbarMain from "@/partials/navbars/Main";
import FooterMain from "@/partials/footers/Main";
import AffixTop from "@/components/affixi/Top";
import AffixNavbar from "@/components/affixi/Navbar";

import contact from "@/data/contact";

export const metadata: Metadata = {
	title: { default: `Shop`, template: `%s - Shop - ${contact.name.company}` },
};

export default function ShopLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<LayoutBody header={<HeaderMain />} nav={<NavbarMain />} footer={<FooterMain />}>
			<main style={{ position: "relative" }}>
				{children}
				<AffixTop />
				<AffixNavbar />
			</main>
		</LayoutBody>
	);
}
