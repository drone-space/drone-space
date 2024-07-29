import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Anchor, Divider, Grid, GridCol, Stack, Text, Title } from "@mantine/core";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import CardPricingBasic from "@/components/card/pricing/Basic";
import AccordionFaq from "@/components/accordions/Faq";
import ModalContactTraining from "@/components/modal/contact/Training";

import courses from "@/data/courses";

export const metadata: Metadata = { title: "Training" };

export default async function Gallery() {
	return (
		<LayoutPage>
			<LayoutSection containerized="responsive" padded bordered>
				<Grid>
					{courses.basic.units.map(
						course =>
							course.available != false && (
								<GridCol key={course.title.full} span={{ sm: 6, lg: 4 }}>
									<CardPricingBasic data={course} />
								</GridCol>
							)
					)}
				</Grid>
			</LayoutSection>

			<LayoutSection containerized="responsive" padded shadowed>
				<Grid>
					{courses.advanced.units.map(course => (
						<GridCol key={course.title.full} span={{ sm: 6, md: 4 }}>
							<CardPricingBasic data={course} />
						</GridCol>
					))}
				</Grid>
			</LayoutSection>

			<LayoutSection padded containerized={"sm"}>
				<Stack gap={"xl"}>
					<Title ta={"center"} order={2} fz={"xl"} fw={"bold"}>
						Frequently Asked Questions
					</Title>

					<Text w={{ md: "75%" }} mx={"auto"} ta={"center"} fz={"sm"}>
						For further information, please visit our training section, and for any other training
						inquiries, please send us a{" "}
						<ModalContactTraining>
							<Anchor inherit fw={500}>
								training inquiry
							</Anchor>
						</ModalContactTraining>
						.
					</Text>

					<AccordionFaq section="training" />
				</Stack>
			</LayoutSection>
		</LayoutPage>
	);
}
