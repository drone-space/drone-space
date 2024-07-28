import React from "react";

import { Metadata } from "next";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import products from "@/data/products";
import { Grid, GridCol, Text } from "@mantine/core";
import CardShopDronesMain from "@/components/card/shop/drones/Main";

export const metadata: Metadata = { title: "Camera Drones" };

export default async function Camera() {
	const drones = products.filter(p => p.category == "camera");

	return (
		<LayoutPage>
			<LayoutSection padded containerized={"responsive"}>
				<Grid>
					{drones.map(drone => (
						<GridCol key={drone.title.long} span={{ base: 12, xs: 6, md: 4, lg: 3 }}>
							<CardShopDronesMain data={drone} />
						</GridCol>
					))}
				</Grid>
			</LayoutSection>
		</LayoutPage>
	);
}
