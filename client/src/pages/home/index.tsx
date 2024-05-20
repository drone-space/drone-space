import React from "react";
import { Link } from "react-router-dom";

import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	GridCol,
	Stack,
	Text,
} from "@mantine/core";

import { IconArrowRight, IconFileDownload } from "@tabler/icons-react";

import Component from "@src/components";
import Layout from "@src/layouts";
import Partial from "@src/partials";

import data from "@src/data";
import document from "@src/assets/documents";

export default function Home() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Home />}
			footer={<Partial.Footer.Root />}
		>
			<Box bg={"pri.6"}>
				<Container py={"xl"}>
					<Grid grow>
						<GridCol span={{ base: 12, xs: 6, sm: 3 }}>
							<Button
								component="a"
								href={document.brochure}
								download={"dronespace-brochure"}
								color="sec.3"
								c={"pri.6"}
								fullWidth
								mih={125}
								style={{
									transition: "0.25s all ease",
								}}
							>
								<Stack align="center">
									<IconFileDownload size={36} stroke={1.5} />
									<Text fw={"bold"}>Download Brochure</Text>
								</Stack>
							</Button>
						</GridCol>
						<GridCol span={{ base: 12, xs: 6, sm: 3 }}>
							<Component.Modal.Callback />
						</GridCol>
						{data.links.cta.map((item) => (
							<GridCol
								key={item.link}
								span={{ base: 12, xs: 6, sm: 3 }}
							>
								<Button
									component={Link}
									to={item.link}
									color="sec.3"
									c={"pri.6"}
									fullWidth
									mih={125}
									style={{
										transition: "0.25s all ease",
									}}
								>
									<Stack align="center">
										<item.icon size={36} stroke={1.5} />
										<Text fw={"bold"}>{item.label}</Text>
									</Stack>
								</Button>
							</GridCol>
						))}
					</Grid>
				</Container>
			</Box>
			<Layout.Section.Main
				title={{ plain: "Drone", highlight: "Solutions" }}
			>
				<Container>
					<Grid>
						{data.services.map((item) => (
							<GridCol
								key={item.title}
								span={{ base: 12, xs: 6, md: 4 }}
							>
								<Component.Card.Feature.Service
									image={item.image}
									title={item.title}
									desc={item.desc}
									// links={item.links}
								/>
							</GridCol>
						))}
					</Grid>
				</Container>
			</Layout.Section.Main>
			<Layout.Section.Main title={{ plain: "Our", highlight: "Shop" }}>
				<Container>
					<Grid align="stretch">
						<GridCol
							span={{
								base: 12,
								xs: 6,
								md: 4,
							}}
						>
							<Component.Card.Product.Drone
								data={data.products.find(
									(product) => product.filters.featured
								)}
							/>
						</GridCol>
						{data.products.map(
							(product) =>
								data.products.indexOf(product) < 4 && (
									<GridCol
										key={product.desc.title.long}
										span={{
											base: 12,
											xs: 6,
											md: 4,
										}}
									>
										<Component.Card.Product.Drone
											data={product}
										/>
									</GridCol>
								)
						)}
						<GridCol span={{ base: 12, xs: 6, md: 4 }}>
							<Flex
								align={"center"}
								justify={"space-between"}
								direction={"column"}
								gap={"md"}
								h={"100%"}
							>
								<Button
									size="xl"
									component={Link}
									to={"drone-shop/camera-drones"}
									h={"100%"}
									fullWidth
								>
									<Stack align="center" c="sec.3" py={"xs"}>
										<IconArrowRight size={40} />
										<Text component="span">
											More Consumer Drones
										</Text>
									</Stack>
								</Button>
								<Button
									size="xl"
									component={Link}
									to={"drone-shop/enterprise-drones"}
									h={"100%"}
									fullWidth
								>
									<Stack align="center" c="sec.3" py={"xs"}>
										<IconArrowRight size={40} />
										<Text component="span">
											More Enterprise Drones
										</Text>
									</Stack>
								</Button>
							</Flex>
						</GridCol>
					</Grid>
				</Container>
			</Layout.Section.Main>
			<Layout.Section.Main
				title={{ plain: "Our", highlight: "Partners" }}
				bg="gray.1"
			>
				<Container>
					<Grid gutter={"xl"}>
						{data.partners.map((item) => (
							<GridCol
								key={item.title}
								span={{ base: 6, xs: 4, md: 3 }}
							>
								<Component.Card.Feature.Partner
									image={item.image}
									title={item.title}
									width={item.width}
								/>
							</GridCol>
						))}
					</Grid>
				</Container>
			</Layout.Section.Main>
			<Layout.Section.Main
				title={{ plain: "Why", highlight: "Choose Us" }}
			>
				<Container>
					<Stack gap={36}>
						<Text
							component="p"
							m={0}
							ta="center"
							maw={"90%"}
							mx={"auto"}
						>
							Soar to new heights with us! As the leading provider
							of drone license training and commercial drone
							operations in Kenya, we are dedicated to helping you
							take your skills and business to the next level.
							Join us today and experience the power of flight.
						</Text>
						<Grid grow>
							{data.features.whyUs.map((item) => (
								<GridCol
									key={item.heading}
									span={{ base: 12, xs: 6, sm: 4 }}
									py={"md"}
								>
									<Component.Card.Feature.Why
										icon={item.icon}
										title={item.heading}
										desc={item.desc}
									/>
								</GridCol>
							))}
						</Grid>
					</Stack>
				</Container>
			</Layout.Section.Main>
			<Layout.Section.Main
				title={{ plain: "Recent", highlight: "Blog Posts" }}
				bg="gray.1"
			>
				<Container>
					<Grid grow>
						{data.blogs.map(
							(item) =>
								data.blogs.indexOf(item) < 3 && (
									<GridCol
										key={item.link}
										span={{ base: 12, xs: 6, md: 4 }}
									>
										<Component.Card.Blog.Listing
											data={item}
										/>
									</GridCol>
								)
						)}
					</Grid>
				</Container>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
