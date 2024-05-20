import React from "react";

import { Anchor, Container, Stack, Text, Title } from "@mantine/core";

import Layout from "@src/layouts";
import Component from "@src/components";
import Partial from "@src/partials";

import data from "@src/data";

export default function Privacy() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Container size={"sm"}>
					<Stack gap={"xl"}>
						{data.policy.privacy.map((item) => (
							<Stack gap={"xs"}>
								<Title order={3} fw={500}>
									{data.policy.privacy.indexOf(item) + 1}.{" "}
									{item.title}
								</Title>
								<Text c={"dimmed"}>{item.desc}</Text>
							</Stack>
						))}
					</Stack>
				</Container>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
