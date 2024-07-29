import React from "react";

import { Metadata } from "next";

import LayoutBody from "@/layouts/Body";

import contact from "@/data/contact";

export const metadata: Metadata = {
	title: { default: "Training", template: `%s - Training - ${contact.name.app}` },
};

export default function Training({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return <LayoutBody>{children}</LayoutBody>;
}
