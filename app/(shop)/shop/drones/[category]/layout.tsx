import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";
// import AsideBlog from "@/partials/aside/Blog";

import link from "@/handlers/parsers/string/link";

import products from "@/data/products";
import contact from "@/data/contact";

export interface typeParams {
	params: { category: string; droneId: string };
}

export const generateMetadata = ({ params }: typeParams): Metadata => {
	const product = products.find(p => link.linkify(p.title.long) == params.droneId);

	return {
		title: {
			default: link.unlinkify(params.category),
			template: `%s - ${link.unlinkify(params.category)} Drones - Drones - Shop - ${contact.name.company}`,
		},
	};
};

export default function Category({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <LayoutBody>{children}</LayoutBody>;
}
