import React from "react";
import { Link } from "react-router-dom";

import {
	Menu,
	Group,
	Burger,
	Container,
	Box,
	Drawer,
	ThemeIcon,
	Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { Icon, IconChevronDown } from "@tabler/icons-react";

import classes from "./Shop.module.scss";

interface typeShop {
	link: string;
	label: string;
	subLinks: { icon?: Icon | undefined; link: string; label: string }[] | null;
}

const data: typeShop[] = [
	{
		link: "/drone-shop/camera-drones",
		label: "Camera Drones",
		subLinks: null,
	},
	{
		link: "/drone-shop/enterprise-drones",
		label: "Enterprise Drones",
		subLinks: null,
	},
	{
		link: "/drone-shop/agriculture-drones",
		label: "Agriculture Drones",
		subLinks: null,
	},
];

export default function Shop() {
	const [opened, { toggle, close }] = useDisclosure(false);

	const items = data.map((link) => {
		const menuItems = link.subLinks?.map((item) => (
			<Menu.Item
				key={item.link}
				component={Link}
				to={item.link}
				onClick={() => close()}
				leftSection={
					item.icon && (
						<ThemeIcon size={20} variant="light">
							<item.icon size={16} />
						</ThemeIcon>
					)
				}
			>
				{item.label}
			</Menu.Item>
		));

		if (menuItems) {
			return (
				<Menu
					key={link.link}
					trigger="hover"
					withinPortal
					position="bottom-end"
					transitionProps={{ duration: 250 }}
					classNames={{
						dropdown: classes.dropdown,
						item: classes.item,
					}}
				>
					<Menu.Target>
						<Link
							to={link.link}
							className={classes.link}
							onClick={(event) => event.preventDefault()}
						>
							<Group gap={3}>
								{link.label}
								<IconChevronDown size={16} stroke={1.5} />
							</Group>
						</Link>
					</Menu.Target>
					<Menu.Dropdown>{menuItems}</Menu.Dropdown>
				</Menu>
			);
		}

		return (
			<Group key={link.link}>
				<Link
					to={link.link}
					className={classes.link}
					onClick={() => close()}
				>
					{link.label}
				</Link>
			</Group>
		);
	});

	return (
		<Box className={classes.navbar}>
			<Container>
				<Group justify="end">
					<Group gap={"md"} visibleFrom="xs">
						{items}
					</Group>

					<Burger
						size={"sm"}
						opened={opened}
						onClick={toggle}
						title="burger"
						hiddenFrom="xs"
						color="white"
					/>

					<Drawer
						position="left"
						opened={opened}
						withCloseButton={false}
						onClose={close}
						size={200}
						overlayProps={{ opacity: 0.5, blur: 2 }}
						classNames={{ content: classes.drawerContent }}
						transitionProps={{
							transition: "slide-right",
							duration: 250,
						}}
					>
						<Stack gap={"md"}>{items}</Stack>
					</Drawer>
				</Group>
			</Container>
		</Box>
	);
}
