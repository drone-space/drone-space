import React from "react";

import {
	AspectRatio,
	Box,
	Center,
	Container,
	Grid,
	GridCol,
	List,
	ListItem,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";

import { IconCheck } from "@tabler/icons-react";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";
import image from "@src/assets/images";
import content from "@src/assets/content";

import classes from "./About.module.scss";
import videos from "@src/assets/videos";
import Partial from "@src/partials";

export default function About() {
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
						<Grid>
							<GridCol span={{ base: 12, sm: 6 }}>
								<Stack gap={"sm"}>
									<Title order={2} c={"pri.6"}>
										{content.page.about.title}
									</Title>
									<Stack gap={"xs"}>
										<Text component="p">
											{content.page.about.p1}
										</Text>
										<Text component="p">
											{content.page.about.p2}
										</Text>
									</Stack>
								</Stack>
							</GridCol>
							<GridCol span={{ base: 12, sm: 6 }} pl={{ sm: 48 }}>
								<Stack gap={"sm"}>
									<AspectRatio
										ratio={1920 / 1080}
										className={classes.image}
									>
										<video
											src={videos.video1}
											controls
											autoPlay
											playsInline
											preload="auto"
											poster={
												image.gallery.airfield.image1
											}
											muted
											loop
											width={"100%"}
										></video>
									</AspectRatio>
									<Stack gap={"xs"}>
										<Text component="p">
											{content.page.about.list.title}:
										</Text>
										<List
											center
											size={"sm"}
											spacing={"xs"}
											icon={
												<ThemeIcon size={20}>
													<IconCheck
														size={16}
														color="#74d7d1"
													/>
												</ThemeIcon>
											}
										>
											{content.page.about.list.listItems.map(
												(item) => (
													<ListItem key={item}>
														{item}
													</ListItem>
												)
											)}
										</List>
									</Stack>
								</Stack>
							</GridCol>
						</Grid>
					</Container>
					<Box className={classes.cta}>
						<Container>
							<Grid grow py={64}>
								{data.stats.map((item) => (
									<GridCol
										key={item.title}
										span={{
											base: 6,
											xs: 4,
											md: "auto",
										}}
									>
										<Component.Card.Stat
											stat={item.stat}
											title={item.title}
										/>
									</GridCol>
								))}
							</Grid>
						</Container>
					</Box>
					<Container>
						<Stack gap={"xl"}>
							<Stack gap={"xs"}>
								<Title order={2} c={"pri.6"} ta="center">
									{content.page.about.spaces.title}
								</Title>
								<Text component="p" ta="center">
									{content.page.about.spaces.p1}
								</Text>
							</Stack>
							<Grid align="stretch" grow>
								{content.page.about.spaces.list.map((item) => (
									<GridCol
										key={item.title}
										span={{
											base: 12,
											sm: 6,
											md: 4,
										}}
									>
										<Component.Card.Feature.Space
											title={item.title}
											listItems={item.listItems}
										/>
									</GridCol>
								))}
							</Grid>
						</Stack>
					</Container>
				</Stack>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
