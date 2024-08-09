"use client";

import React from "react";

import { usePathname } from "next/navigation";

import { Group, Stack, Title } from "@mantine/core";

import LayoutSection from "@/layouts/Section";
import BreadcrumbMain from "@/components/breadcrumbs/Main";
import CounterIntakeHero from "@/partials/counter/intake/Hero";

import crumbify from "@/handlers/parsers/string/crumbify";

import links from "@/data/links";
import dates from "@/data/dates";

import classes from "./Main.module.scss";

export default function Main({ title }: { title?: string }) {
	const pathname = usePathname();
	const segments = crumbify(pathname);

	const counterRoutes = ["/training"];

	const dynamicRoutes = [
		"/stories/blog",
		"/services",
		"/training/basic",
		"/training/advanced",
		"/shop/drones",
		"/shop/accessories",
	];

	const dynamic = dynamicRoutes.find(r => pathname.includes(r));

	const selectTitle = () => {
		if (segments.length > 2) {
			return dynamic
				? links.navbar.main
						.find(l => l.link == segments[segments.length - (segments.length - 1)].link)
						?.subLinks?.find(sl => pathname.includes(sl.link))?.label
				: links.navbar.main
						.find(l => l.link == segments[segments.length - (segments.length - 1)].link)
						?.subLinks?.find(sl => sl.link == pathname)?.label;
		} else {
			return links.navbar.main.find(l => l.link == pathname)?.label;
		}
	};

	return (
		<LayoutSection containerized="responsive" padded="xl" shadowed className={classes.hero}>
			<Group justify="space-between" align="center">
				<Stack>
					{selectTitle() && (
						<Title order={1} fw={"bolder"} fz={24} c={"white"}>
							{title ? title : selectTitle()}
						</Title>
					)}
					<BreadcrumbMain data={segments} />
				</Stack>

				{counterRoutes.find(r => pathname.includes(r)) && <CounterIntakeHero dates={dates.intakes} />}
			</Group>
		</LayoutSection>
	);
}
