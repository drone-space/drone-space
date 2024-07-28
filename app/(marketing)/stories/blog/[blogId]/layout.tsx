import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";
// import AsideBlog from "@/partials/aside/Blog";

import link from "@/handlers/parsers/string/link";

import blog from "@/data/blog";

export interface typeParams {
	params: { blogId: string };
}

export const generateMetadata = ({ params }: typeParams): Metadata => {
	const post = blog.find(b => link.linkify(b.titleLink ? b.titleLink : b.title) == params.blogId);

	return { title: post?.title };
};

export default function Post({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <LayoutBody>{children}</LayoutBody>;
}
