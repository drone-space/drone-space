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
	Image,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import {
	Icon,
	IconChevronDown,
	IconHelpCircle,
	IconInfoCircle,
	IconMessageCircle,
	IconPhoto,
} from "@tabler/icons-react";

import utility from "@src/utilities";
import content from "@src/assets/content";
import image from "@src/assets/images";

import classes from "./Root.module.scss";

interface typeRoot {
	link: string;
	label: string;
	subLinks: { icon?: Icon | undefined; link: string; label: string }[] | null;
}

const data: typeRoot[] = [
	{
		link: "/about",
		label: "About",
		subLinks: null,
	},
	{
		link: "/drone-training",
		label: "Drone Training",
		subLinks: [
			{
				link: "/drone-training/remote-pilot-license",
				label: "RPL Training",
			},
			{
				link: "/drone-training/advanced",
				label: "Advanced Training",
			},
			{
				link: "/drone-training/junior",
				label: "Junior Holiday Camp",
			},
			{
				link: "/drone-training/pricing",
				label: "Pricing",
			},
		],
	},
	{
		link: "/drone-services",
		label: "Drone Solutions",
		subLinks: [
			{
				link: `/drone-services/${utility.parser.linkify(
					content.service.droneConsultancy.title
				)}`,
				label: "Consultancy & Resale",
			},
			{
				link: `/drone-services/${utility.parser.linkify(
					content.service.rocSupport.title
				)}`,
				label: "ROC Support",
			},
			{
				link: `/drone-services/${utility.parser.linkify(
					content.service.aerialCinematography.title
				)}`,
				label: "Aerial Cinematography",
			},
			{
				link: `/drone-services/${utility.parser.linkify(
					content.service.solarInspection.title
				)}`,
				label: "Solar Inspection",
			},
			{
				link: `/drone-services/${utility.parser.linkify(
					content.service.droneSeeding.title
				)}`,
				label: "Drone Seeding",
			},
			{
				link: `/drone-services/${utility.parser.linkify(
					content.service.droneMapping.title
				)}`,
				label: "Aerial Mapping & Survey",
			},
		],
	},
	{
		link: "/drone-shop",
		label: "Shop",
		subLinks: null,
	},
	{
		link: "/stories",
		label: "Our Stories",
		subLinks: [
			{
				icon: IconPhoto,
				link: "/gallery",
				label: "Gallery",
			},
			{
				icon: IconMessageCircle,
				link: "/blog",
				label: "Blog",
			},
			// {
			// 	icon: IconMessageCircle,
			// 	link: "/team",
			// 	label: "Team",
			// },
			// {
			// 	icon: IconMessageCircle,
			// 	link: "/alumni",
			// 	label: "Alumni",
			// },
			// {
			// 	icon: IconMessageCircle,
			// 	link: "/success",
			// 	label: "Success Stories",
			// },
		],
	},
	{
		link: "/contact",
		label: "Contact",
		subLinks: [
			{
				icon: IconInfoCircle,
				link: "/contact",
				label: "Reach Out",
			},
			{
				icon: IconHelpCircle,
				link: "/faq",
				label: "FAQ's",
			},
		],
	},
];

export default function Root() {
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
				<Group justify="space-between">
					<Box component={Link} to={"/"} bg={"white"}>
						<Image
							src={image.logos.brand.landscape}
							alt="Drone Space"
							w={200}
						/>
					</Box>

					<Group gap={"md"} visibleFrom="md">
						{items}
					</Group>

					<Burger
						size={"sm"}
						opened={opened}
						onClick={toggle}
						title="burger"
						hiddenFrom="md"
					/>

					<Drawer
						position="left"
						opened={opened}
						withCloseButton={false}
						onClose={close}
						size={200}
						overlayProps={{ opacity: 0.5, blur: 2 }}
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
