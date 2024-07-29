"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { Menu, ThemeIcon } from "@mantine/core";

import { typeMenuNavbar } from "@/types/components/menu";

import classes from "./Navbar.module.scss";

export default function Navbar({ children, subLinks }: { children: React.ReactNode; subLinks?: typeMenuNavbar[] }) {
	const pathname = usePathname();

	const menuItems =
		subLinks &&
		subLinks.map(item => (
			<Menu.Item
				disabled={item.disabled ? item.disabled : undefined}
				key={item.link}
				component={Link}
				href={item.link}
				leftSection={
					item.leftSection && (
						<ThemeIcon variant="light" size={20}>
							<item.leftSection
								size={14}
								stroke={1.5}
								color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
							/>
						</ThemeIcon>
					)
				}
				rightSection={
					item.rightSection && (
						<ThemeIcon variant="light" size={20}>
							<item.rightSection
								size={14}
								stroke={1.5}
								color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
							/>
						</ThemeIcon>
					)
				}
				className={`${classes.item} ${pathname.includes(item.link) ? classes.itemActive : ""}`}
			>
				{item.label}
			</Menu.Item>
		));

	return (
		<Menu
			shadow="xs"
			width={"auto"}
			trigger="hover"
			// position="bottom-start"
			openDelay={50}
			closeDelay={50}
			classNames={{
				dropdown: classes.dropdown,
				arrow: classes.arrow,
				divider: classes.divider,
				label: classes.label,
				item: classes.item,
				itemLabel: classes.itemLabel,
				itemSection: classes.itemSection,
			}}
		>
			<Menu.Target>{children}</Menu.Target>
			{menuItems && <Menu.Dropdown>{menuItems}</Menu.Dropdown>}
		</Menu>
	);
}
