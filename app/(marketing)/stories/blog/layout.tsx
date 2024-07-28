import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";
import AsideBlog from "@/partials/asides/Blog";

import contact from "@/data/contact";

export const metadata: Metadata = {
	title: { default: "Blog", template: `%s - Blog - Stories - ${contact.name.app}` },
};

export default function Blog({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<LayoutBody aside={{ right: { component: <AsideBlog />, width: { md: 30, lg: 25 } } }}>{children}</LayoutBody>
	);
}
