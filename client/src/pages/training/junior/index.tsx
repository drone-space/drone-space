import React from "react";

import Link from "next/link";

import {
	Box,
	Container,
	Grid,
	GridCol,
	Image,
	List,
	ListItem,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";
import {
	IconCheckbox,
	IconHexagons,
	IconSchool,
	IconStethoscope,
} from "@tabler/icons-react";

import Layout from "@src/layouts";
import Component from "@src/components";
import Partial from "@src/partials";

import data from "@src/data";

import classes from "./Advanced.module.scss";

export default function Junior() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Stack gap={72}>
					<Box component="section">
						<Container size={"lg"}>
							<Grid>
								<GridCol span={{ base: 12, xs: 6 }}>
									<Stack>
										<Title order={2} c={"pri.6"} fz={24}>
											Junior Holiday Camp
										</Title>
										<Text component="p">
											{
												data.training.desc.courses
													.junior.desc.intro
											}
										</Text>
									</Stack>
								</GridCol>
								<GridCol span={{ base: 12, xs: 6 }} px={"md"}>
									<Image
										src={
											data.training.desc.courses.junior
												.img
										}
										alt={
											data.training.desc.courses.junior
												.title
										}
										maw={"100%"}
										radius={"sm"}
									/>
								</GridCol>
							</Grid>
						</Container>
					</Box>

					<Partial.Cta />

					<Box component="section" id="faq">
						<Container size={"lg"}>
							<Stack align="center">
								<div>
									<Text component="h1" ta="center" fz={24}>
										Frequently Asked
									</Text>
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
