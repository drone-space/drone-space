import React from "react";

import { Link } from "react-router-dom";

import { Anchor, Container, Stack, Text } from "@mantine/core";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";
import Partial from "@src/partials";

export default function Training() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Container>training home page</Container>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
