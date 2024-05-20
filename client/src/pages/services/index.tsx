import React from "react";

import { Container, Grid, GridCol } from "@mantine/core";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";
import Partial from "@src/partials";

export default function Services() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
				<Layout.Section.Main>
					<Container>
						<Grid gutter={"xl"}>
							{data.services.reverse().map((item) => (
								<GridCol
									key={item.title}
									span={{ base: 12, xs: 6, md: 4 }}
								>
									<Component.Card.Feature.Service
										image={item.image}
										title={item.title}
										desc={item.desc}
									/>
								</GridCol>
							))}
						</Grid>
					</Container>
				</Layout.Section.Main>
				</Layout.Page>
	);
}
