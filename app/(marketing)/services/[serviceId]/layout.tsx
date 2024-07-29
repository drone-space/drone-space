import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";

import link from "@/handlers/parsers/string/link";

import services from "@/data/services";

export interface typeParams {
	params: { serviceId: string };
}

export const generateMetadata = ({ params }: typeParams): Metadata => {
	return { title: services.find(p => link.linkify(p.title) == params.serviceId)?.title };
};

export default function Service({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <LayoutBody>{children}</LayoutBody>;
}
