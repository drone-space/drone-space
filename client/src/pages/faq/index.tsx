import React from "react";

import { Link } from "react-router-dom";

import { Anchor, Container, Stack, Text } from "@mantine/core";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";
import Partial from "@src/partials";

export default function Faq() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Container>
					<Stack gap={"xl"}>
						<Component.Accordion.Faq data={data.faqs} />
						<Text component="small" fz={"sm"} ta={"center"}>
							Didn&apos;t find what you were looking for?{" "}
							<Anchor component={Link} to={"/contact"} fw={500}>
								Contact us
							</Anchor>{" "}
							instead.
						</Text>
					</Stack>
				</Container>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
