import React from "react";
import { Link } from "react-router-dom";

import {
	Box,
	Button,
	Container,
	Flex,
	Group,
	Stack,
	Text,
	Title,
} from "@mantine/core";

import { Icon } from "@tabler/icons-react";

export default function Cta({
	title,
	desc,
	anchors,
}: {
	title: { plain: string; highlight?: string | undefined };
	desc: string;
	anchors: { icon: Icon; link: string; label: string }[];
}) {
	return (
		<Box component="section" py={48} bg={"pri"} c={"white"}>
			<Container>
				<Flex
					direction={{ base: "column", md: "row" }}
					align={"center"}
					justify={{ md: "space-between" }}
					gap={"xl"}
				>
					{title && (
						<Stack gap={"xs"}>
							<Title
								order={2}
								ta={{ base: "center", md: "start" }}
							>
								{title.plain}{" "}
								<Text component="span" inherit c={"sec.3"}>
									{title.highlight}
								</Text>
							</Title>
							<Text
								w={{ base: "100%", md: "75%" }}
								ta={{ base: "center", md: "start" }}
							>
								{desc}
							</Text>
						</Stack>
					)}
					<Group gap={"xs"} justify="center">
						{anchors.map((anchor) => (
							<Button
								key={anchor.link}
								color="sec.3"
								component={Link}
								to={anchor.link}
								c={"pri"}
								h={"100%"}
							>
								<Stack gap={"xs"} align="center" py={"md"}>
									<anchor.icon size={24} />
									{anchor.label}
								</Stack>
							</Button>
						))}
					</Group>
				</Flex>
			</Container>
		</Box>
	);
}
