import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";
// import AsideBlog from "@/partials/aside/Blog";

import link from "@/handlers/parsers/string/link";

import products from "@/data/products";

import { typeParams } from "../layout";

export const generateMetadata = ({ params }: typeParams): Metadata => {
	const product = products.find(p => link.linkify(p.title.long) == params.droneId);

	return { title: product?.title.long };
};

export default function Drone({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <LayoutBody>{children}</LayoutBody>;
}
