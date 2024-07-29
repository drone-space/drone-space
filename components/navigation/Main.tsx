"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Anchor, Group } from "@mantine/core";
import {
	IconArticle,
	IconBriefcase,
	IconCertificate,
	IconCertificate2,
	IconChevronDown,
	IconPhoto,
	IconSchool,
	IconUsersGroup,
} from "@tabler/icons-react";

import MenuNavbar from "../menus/Navbar";

import classes from "./Main.module.scss";
import services from "@/data/services";
import link from "@/handlers/parsers/string/link";

import { typeMenuNavbar } from "@/types/components/menu";

const links = [
	{ link: "/", label: "Home" },
	{ link: "/about", label: "About" },
	{
		link: "/training",
		disabled: true,
		label: "Drone Training",
		subLinks: [
			{ link: "/training/junior", label: "Junior Training (Holiday Camp)", leftSection: IconCertificate2 },
			{ link: "/training/basic", label: "Basic Training (RPL)", leftSection: IconCertificate },
			{ link: "/training/advanced", label: "Advanced Training", leftSection: IconSchool },
		],
	},
	{
		link: "/services",
		label: "Drone Solutions",
		subLinks: services.map(service => {
			return { link: `/services/${link.linkify(service.title)}`, label: service.title };
		}),
	},
	{ link: "/pricing/training", label: "Pricing" },
	{ link: "/shop", label: "Shop" },
	{
		link: "/stories",
		disabled: true,
		label: "Stories",
		subLinks: [
			{ link: "/stories/gallery", label: "Gallery", leftSection: IconPhoto },
			{ link: "/stories/blog", label: "Blog", leftSection: IconArticle },
			// { link: "/stories/portfolio", disabled: true, label: "Portfolio", leftSection: IconBriefcase },
			// { link: "/stories/team", label: "Team", leftSection: IconUsersGroup },
		],
	},
	{ link: "/contact", label: "Contact" },
];

export default function Main({ data = links }: { data?: typeMenuNavbar[] }) {
	const pathname = usePathname();

	return data.map(link => (
		<MenuNavbar key={link.link} subLinks={link.subLinks}>
			{!link.subLinks ? (
				<Anchor
					underline="never"
					pl={data.indexOf(link) == 0 ? 0 : undefined}
					component={Link}
					href={link.link}
					className={`${classes.link} ${pathname == link.link ? classes.linkActive : ""}`}
				>
					{link.label}
				</Anchor>
			) : (
				<Anchor
					underline="never"
					pl={data.indexOf(link) == 0 ? 0 : undefined}
					component={Link}
					href={link.link}
					className={`${classes.link} ${
						pathname == link.link || link.subLinks.find(l => pathname.includes(l.link))
							? classes.linkActive
							: ""
					}`}
					onClick={e => link.disabled == true && e.preventDefault()}
				>
					<Group gap={4}>
						<span>{link.label}</span>
						<IconChevronDown size={12} stroke={2.5} style={{ marginTop: 2 }} />
					</Group>
				</Anchor>
			)}
		</MenuNavbar>
	));
}
