import React from "react";
import { Link } from "react-router-dom";

import { Anchor, Stack, Text, Title } from "@mantine/core";

import Layout from "@src/layouts";
import Partial from "@src/partials";

export default function Error404() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Stack align="center" gap={"xl"}>
					<Title order={1} c={"pri"} fz={96}>
						4
						<Text component="span" inherit c={"sec.3"}>
							0
						</Text>
						4
					</Title>
					<Text>
						Could not find the requested page.{" "}
						<Anchor component={Link} to="/">
							Return Home
						</Anchor>
						.
					</Text>
				</Stack>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
