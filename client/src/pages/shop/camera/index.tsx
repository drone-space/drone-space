"use client";

import React, { useEffect, useState } from "react";

import { Button, Container, Divider, Grid, GridCol, Group, Stack } from "@mantine/core";

import Component from "@src/components";
import Layout from "@src/layouts";

import data from "@src/data";
import image from "@src/assets/images";
import Partial from "@src/partials";

const categories = [
	{
		image: image.products.drone.dji.mavic.mav3classic.drone,
		title: "DJI Mavic Series",
		value: "mavic",
	},
	{
		image: image.products.drone.dji.air.air2s.drone,
		title: "DJI Air Series",
		value: "air",
	},
	{
		image: image.products.drone.dji.mini.mini3pro.drone,
		title: "DJI Mini Series",
		value: "mini",
	},
];

export default function Camera() {
	const [products, setProducts] = useState(data.products);
	const [filter, setFilter] = useState("");

	const items = categories.map(category => (
		<Grid.Col
			span={{ base: 6, xs: 4, md: 3 }}
			key={category.value}
			onClick={() => {
				setFilter(category.value);
			}}
		>
			<Component.Card.Product.Link data={category} />
		</Grid.Col>
	));

	useEffect(() => {
		if (filter == "mavic") {
			setProducts(data.products.filter(product => product.filters.make == "mavic"));
		} else if (filter == "air") {
			setProducts(data.products.filter(product => product.filters.make == "air"));
		} else if (filter == "mini") {
			setProducts(data.products.filter(product => product.filters.make == "mini"));
		} else {
			setProducts(data.products);
		}
	}, [filter]);

	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			navSec={<Partial.Navbar.Shop />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Container>
					<Stack gap={"xl"}>
						<Grid grow>{items}</Grid>
						<Divider
							color="pri.6"
							label={
								<Button size="xs" onClick={() => setFilter("reset")}>
									Reset
								</Button>
							}
							labelPosition="right"
						/>
						<Grid align="stretch">
							{products
								.filter(item => item.filters.type.includes("camera"))
								.map(product => (
									<GridCol
										key={product.desc.title.short}
										span={{
											base: 12,
											xs: 6,
											sm: 4,
											md: 3,
										}}
									>
										<Component.Card.Product.Drone data={product} />
									</GridCol>
								))}
						</Grid>
					</Stack>
				</Container>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
