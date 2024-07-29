import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";
// import AsideBlog from "@/partials/aside/Blog";

import link from "@/handlers/parsers/string/link";

import accessories from "@/data/accessories";

export interface typeParams {
	params: { accessoryId: string };
}

export const generateMetadata = ({ params }: typeParams): Metadata => {
	const product = accessories.find(a => link.linkify(a.title.long) == params.accessoryId);

	return { title: product?.title.long };
};

export default function Accessory({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <LayoutBody>{children}</LayoutBody>;
}
