import React from "react";

import { Metadata } from "next";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import CardShopDronesMain from "@/components/card/shop/drones/Main";
import products from "@/data/products";
import { Grid, GridCol } from "@mantine/core";

export const metadata: Metadata = { title: "Agriculture Drones" };

export default async function Agriculture() {
	const drones = products.filter(p => p.category == "agriculture");

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
