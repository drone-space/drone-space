import React from "react";
import { useLocation } from "react-router";

import { Box, Container, Flex, Stack, Title } from "@mantine/core";

import breadcrumb from "../breadcrumbs";

import utility from "@src/utilities";
import image from "@src/assets/images";

export default function Route() {
	const location = useLocation();
	const crumbs = utility.parser.crumify(location.pathname);

	return (
		<Box
			style={(theme) => ({
				background: `linear-gradient( rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.6)100%), url('${image.gallery.innovation.jamuhuri.image9}')`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center",
				color: theme.white,
				minHeight: 200,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
			})}
		>
			<Container w={"100%"}>
				<Flex
					direction={"column"}
					gap={"xs"}
					align={{ base: "start", sm: "center" }}
				>
					<Title order={1} ta={{ base: "start", sm: "center" }}>
						{crumbs[crumbs.length - 1].label}
					</Title>
					<breadcrumb.Hero data={crumbs} />
				</Flex>
			</Container>
		</Box>
	);
}
