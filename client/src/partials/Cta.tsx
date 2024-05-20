import React from "react";

import { Flex, Button, Text, Container, Box } from "@mantine/core";

import content from "../assets/content";

import classes from "./Cta.module.scss";

export default function Cta() {
	return (
		<Box className={classes.cta}>
			<Container w={"100%"}>
				<Flex direction={{ base: "column", xs: "row" }} align={"center"} justify={"space-between"} gap={"xl"}>
					<div>
						<Text component="h1" fz={24} mt={0} ta={{ base: "center", xs: "start" }}>
							Have any question for us?
						</Text>
						<Text component="p" my={0} ta={{ base: "center", xs: "start" }}>
							Don’t hesitate to contact us and get your questions answered.
						</Text>
					</div>
					<Button
						size="lg"
						component="a"
						title={content.contact.phone.phone1}
						href={`tel:${content.contact.phone.phone1}`}
					>
						Call {content.contact.phone.phone1}
					</Button>
				</Flex>
			</Container>
		</Box>
	);
}
