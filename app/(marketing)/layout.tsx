import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";
import LayoutHeroMain from "@/layouts/heros/Main";
import HeaderMain from "@/partials/headers/Main";
import NavbarMain from "@/partials/navbars/Main";
import FooterMain from "@/partials/footers/Main";
import contact from "@/data/contact";
import AffixTop from "@/components/affixi/Top";
import AffixNavbar from "@/components/affixi/Navbar";
import AffixAssistant from "@/components/affixi/Assistant";
import AffixWhatsapp from "@/components/affixi/Whatsapp";

export const metadata: Metadata = {
	title: { default: `Drone Space`, template: `%s - ${contact.name.company}` },
};

export default function Marketing({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<LayoutBody header={<HeaderMain />} nav={<NavbarMain />} hero={<LayoutHeroMain />} footer={<FooterMain />}>
			<main>
				{children}

				<AffixNavbar />

				<AffixTop />
				<AffixWhatsapp />
				<AffixAssistant />
			</main>
		</LayoutBody>
	);
}
