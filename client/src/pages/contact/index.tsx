import React from "react";

import { Link } from "react-router-dom";

import { Anchor, Badge, Container, Grid, GridCol, Stack, Text } from "@mantine/core";

import Layout from "@src/layouts";
import Partial from "@src/partials";
import Component from "@src/components";

import data from "@src/data";

export default function Contact() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Container>
					<Grid>
						{data.links.contact.map(item => (
							<GridCol
								key={item.title}
								span={{
									base: 12,
									xs: item.title == "Find Us" ? 4 : 4,
								}}
							>
								<Component.Card.Feature.Contact data={item} />
							</GridCol>
						))}
					</Grid>
				</Container>
			</Layout.Section.Main>
			<Layout.Section.Main bg="pri.0">
				<Container size={"xs"}>
					<Stack gap={"xl"}>
						<Stack gap={"xs"}>
							<Badge size="xs" c={"sec.3"}>
								Contact our Experts
							</Badge>
							<Text component="h1" fz={"xl"} fw={500}>
								Thanks for your interest. How can we help?
							</Text>
							<Text component="p" mt={0} maw={"90%"}>
								Please let us know if you have a question, want to leave a comment or would like further
								information.
							</Text>
						</Stack>
						<Partial.Form.Contact />
						<Text component="small" fz={"sm"} ta={"center"}>
							Kindly consult our{" "}
							<Anchor component={Link} to={"/faq"} fw={500}>
								FAQ&apos;s
							</Anchor>{" "}
							first.
						</Text>
					</Stack>
				</Container>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
