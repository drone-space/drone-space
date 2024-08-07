"use client";

import React from "react";

import { usePathname } from "next/navigation";
import NextImage from "next/image";

import { Burger, Drawer, Image, NavLink, Stack } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import images from "@/assets/images";

import classes from "./Main.module.scss";

import { typeMenuNavbar } from "@/types/components/menu";
import Link from "next/link";

export default function Main({ data, ...restProps }: { data: typeMenuNavbar[] } & React.ComponentProps<typeof Burger>) {
	const [opened, { toggle, close }] = useDisclosure(false);
	const pathname = usePathname();
	const mobile = useMediaQuery("(max-width: 36em)");

	const navMobile = data.map(link => {
		const subLinks =
			link.subLinks &&
			link.subLinks.map(subLink => (
				<NavLink
					disabled={subLink.disabled ? subLink.disabled : undefined}
					key={subLink.link}
					component={Link}
					href={subLink.link}
					label={subLink.label}
					active={pathname == subLink.link}
					onClick={() => close()}
				/>
			));

		return !subLinks ? (
			<NavLink
				key={link.link}
				component={Link}
				href={link.link}
				label={link.label}
				active={pathname == link.link}
				onClick={() => close()}
				leftSection={link.leftSection ? <link.leftSection size={14} /> : undefined}
				rightSection={link.rightSection ? <link.rightSection size={14} /> : undefined}
			/>
		) : (
			<NavLink
				key={link.link}
				component={Link}
				href={link.link}
				label={link.label}
				active={pathname == link.link}
				opened={link.subLinks?.find(sl => sl.link == pathname)?.link == pathname ? true : undefined}
				leftSection={link.leftSection ? <link.leftSection size={14} /> : undefined}
				rightSection={link.rightSection ? <link.rightSection size={14} /> : undefined}
			>
				{subLinks}
			</NavLink>
		);
	});

	return (
		<>
			<Drawer
				opened={opened}
				onClose={close}
				withCloseButton={false}
				size={200}
				classNames={{
					body: classes.body,
					close: classes.close,
					content: classes.content,
					header: classes.header,
					inner: classes.inner,
					overlay: classes.overlay,
					root: classes.root,
					title: classes.title,
				}}
				// title={
				// 	<Stack w={160}>
				// 		<Image
				// 			src={images.brand.logo.landscape.brandColor}
				// 			alt="Drone Space"
				// 			component={NextImage}
				// 			priority
				// 			width={6161}
				// 			height={1034}
				// 		/>
				// 	</Stack>
				// }
			>
				{navMobile}
			</Drawer>

			<Burger opened={opened} onClick={toggle} size={mobile ? "sm" : "sm"} {...restProps} />
		</>
	);
}
