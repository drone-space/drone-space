import React from "react";

import { Grid, GridCol } from "@mantine/core";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";
import Partial from "@src/partials";

export default function Blog() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			aside={
				<Layout.Section.Main>
					<Partial.Aside.Blog />
				</Layout.Section.Main>
			}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Grid gutter={"xl"}>
					{data.blogs.map((item) => (
						<GridCol key={item.title} span={{ base: 12, xs: 6 }}>
							<Component.Card.Blog.Main data={item} />
						</GridCol>
					))}
				</Grid>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
