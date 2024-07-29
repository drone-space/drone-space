"use client";

import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Anchor, Group } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

import MenuNavbar from "../menus/Navbar";

import classes from "./Shop.module.scss";

import { typeMenuNavbar } from "@/types/components/menu";

export default function Shop({ data, variant }: { data: typeMenuNavbar[]; variant?: "hero" }) {
	const pathname = usePathname();

	return data.map(link => (
		<MenuNavbar key={link.link} subLinks={link.subLinks}>
			{!link.subLinks ? (
				<Anchor
					underline="never"
					pl={data.indexOf(link) == 0 ? 0 : undefined}
					component={Link}
					href={link.link}
					className={`${classes.link} ${variant == "hero" && classes.linkHero} ${
						pathname == link.link ? (variant == "hero" ? classes.linkHeroActive : classes.linkActive) : ""
					}`}
				>
					{link.label}
				</Anchor>
			) : (
				<Anchor
					underline="never"
					pl={data.indexOf(link) == 0 ? 0 : undefined}
					component={Link}
					href={link.link}
					className={`${classes.link} ${variant == "hero" && classes.linkHero} ${
						pathname == link.link || link.subLinks.find(l => pathname.includes(l.link))
							? variant == "hero"
								? classes.linkHeroActive
								: classes.linkActive
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
