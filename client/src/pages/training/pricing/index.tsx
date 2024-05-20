import React from "react";

import {
	Box,
	Container,
	Grid,
	GridCol,
	Stack,
	Text,
	Title,
} from "@mantine/core";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";
import Partial from "@src/partials";

export default function Pricing() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Stack gap={96}>
					<Container>
						<Grid align="stretch">
							{data.prices.map((item) => (
								<GridCol
									key={item.title}
									span={{ base: 12, sm: 6 }}
								>
									<Component.Card.Pricing.Training
										price={item.price}
										title={item.title}
										desc={item.desc}
									/>
								</GridCol>
							))}
						</Grid>
					</Container>

					<Partial.Cta />

					<Box component="section" id="faq">
						<Container>
							<Stack align="center">
								<div>
									<Title order={1} ta="center" fz={24}>
										Frequently Asked
									</Title>
									<Text component="p" ta="center">
										Collection of questions our clients ask
										us most frequently
									</Text>
								</div>
								<Component.Accordion.Faq data={data.faqs} />
							</Stack>
						</Container>
					</Box>
				</Stack>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
