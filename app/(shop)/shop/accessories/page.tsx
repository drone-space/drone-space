import React from "react";

import { Metadata } from "next";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import CardShopDroneAccessory from "@/components/card/shop/Accessory";

import { Grid, GridCol, Stack, Text, Title } from "@mantine/core";
import accessories from "@/data/accessories";

// export const metadata: Metadata = { title: "Shop" };

export default async function Accessories() {
	return (
		<LayoutPage>
			<LayoutSection padded containerized={"responsive"}>
				<Grid>
					{accessories.map(accessory => (
						<GridCol key={accessory.title.long} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
							<CardShopDroneAccessory data={accessory} />
						</GridCol>
					))}
				</Grid>
			</LayoutSection>
		</LayoutPage>
	);
}
