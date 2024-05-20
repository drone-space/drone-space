import React from "react";

import {
	Box,
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
import {
	IconCheckbox,
	IconHexagons,
	IconSchool,
	IconStethoscope,
} from "@tabler/icons-react";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";

import classes from "./Rpl.module.scss";
import Partial from "@src/partials";

export default function Rpl() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Stack gap={48}>
					<Container>
						<Grid>
							<GridCol span={{ base: 12, xs: 6 }}>
								<Stack gap={"sm"}>
									<Title order={2} c={"pri.6"}>
										Remote Pilot License Training
									</Title>
									<Stack gap={"xs"}>
										<Text component="p">
											{data.training.desc.rpl.intro[0]}
										</Text>
										{data.training.desc.rpl.intro[1] && (
											<Text component="p">
												{
													data.training.desc.rpl
														.intro[1]
												}
											</Text>
										)}
									</Stack>
								</Stack>
							</GridCol>
							<GridCol span={{ base: 12, xs: 6 }}>
								<Box className={classes.categories}>
									<Stack gap={"md"}>
										<Stack gap={"xs"}>
											<Text fw={500} component="h2">
												{
													data.training.desc.rpl
														.categories.title
												}
											</Text>
											<Text>
												{
													data.training.desc.rpl
														.categories.desc.p1
												}
											</Text>
										</Stack>
										<List
											spacing="xs"
											size="sm"
											center
											icon={
												<ThemeIcon
													size={20}
													color="pri.6"
												>
													<IconSchool
														size={16}
														stroke={1.5}
														color="#74d7d1"
													/>
												</ThemeIcon>
											}
										>
											{data.training.desc.rpl.categories.desc.list.map(
												(item) => (
													<ListItem
														key={item}
														fw={500}
													>
														{item}
													</ListItem>
												)
											)}
										</List>
									</Stack>
								</Box>
							</GridCol>
						</Grid>
					</Container>

					<Container>
						<Grid align="start">
							<GridCol span={{ base: 12, xs: 6 }}>
								<Stack
									gap={"sm"}
									className={classes.objectives}
								>
									<Text component="h2" fz={20}>
										{
											data.training.desc.rpl.objectives
												.title
										}
									</Text>
									<Stack gap={"xs"}>
										<Text component="p" fz={"sm"}>
											{
												data.training.desc.rpl
													.objectives.desc.p1
											}
										</Text>
										<List
											spacing={"xs"}
											size={"xs"}
											fw={500}
											icon={
												<ThemeIcon
													size={20}
													color="sec.3"
												>
													<IconCheckbox
														size={16}
														stroke={1.5}
														color="#14269e"
													/>
												</ThemeIcon>
											}
										>
											{data.training.desc.rpl.objectives.desc.list.map(
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
							<GridCol span={{ base: 12, xs: 6 }}>
								<Stack gap={"sm"}>
									<Text component="h2" fz={20}>
										{data.training.desc.rpl.overview.title}
									</Text>
									<List
										spacing={"xs"}
										listStyleType="none"
										size={"xs"}
									>
										{data.training.desc.rpl.overview.list.map(
											(item) => (
												<ListItem key={item.title}>
													<Text
														component="span"
														fw={500}
														fz={"inherit"}
														c={"pri.6"}
													>
														{item.title}
													</Text>
													: {item.desc}
												</ListItem>
											)
										)}
									</List>
								</Stack>
							</GridCol>
						</Grid>
					</Container>

					<Component.Hr.Primary />

					<Container>
						<Grid>
							<GridCol span={{ base: 12, xs: 6 }}>
								<Stack gap={"xl"}>
									<Stack gap={"sm"}>
										<Text
											component="h2"
											fz={20}
											c={"pri.6"}
										>
											{
												data.training.desc.rpl.duration
													.title
											}
										</Text>
										<Text>
											{
												data.training.desc.rpl.duration
													.desc
											}
										</Text>
									</Stack>
									<Stack gap={"sm"}>
										<Text
											component="h3"
											fz={20}
											c={"pri.6"}
										>
											{data.training.desc.rpl.exams.title}
										</Text>
										<Text component="p">
											{data.training.desc.rpl.exams.desc}
										</Text>
									</Stack>
								</Stack>
							</GridCol>
							<GridCol span={{ base: 12, xs: 6 }}>
								<Stack gap={"sm"} className={classes.modules}>
									<Text component="h2" fz={20}>
										{data.training.desc.rpl.modules.title}
									</Text>
									<Stack gap={"xs"}>
										<Text component="p" fz={"sm"}>
											{
												data.training.desc.rpl
													.objectives.desc.p1
											}
										</Text>
										<List
											size={"xs"}
											spacing={"xs"}
											center
											fw={500}
											c={"pri.6"}
											icon={
												<ThemeIcon
													size={20}
													color="pri.6"
												>
													<IconHexagons
														size={16}
														stroke={1.5}
														color="#74d7d1"
													/>
												</ThemeIcon>
											}
										>
											{data.training.desc.rpl.modules.desc.list.map(
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
					<Box className={classes.ctaDoctors}>
						<Container>
							<Grid align="center">
								<GridCol span={{ base: 12, xs: 7 }}>
									<Stack gap={"xs"}>
										<Text component="h2" fz={20} fw={500}>
											{
												data.training.desc.rpl.appDoc
													.title
											}
										</Text>
										<Text component="p">
											<Text
												component="span"
												fw={500}
												c={"pri.6"}
											>
												Location:{" "}
											</Text>
											{
												data.training.desc.rpl.appDoc
													.desc.location
											}
										</Text>
									</Stack>
								</GridCol>
								<GridCol span={{ base: 12, xs: 5 }}>
									<List
										center
										icon={
											<ThemeIcon
												size={64}
												color="sec.3"
												c={"pri"}
											>
												<IconStethoscope
													size={36}
													stroke={1.5}
												/>
											</ThemeIcon>
										}
									>
										{data.training.desc.rpl.appDoc.desc.docs.map(
											(item) => (
												<ListItem
													key={item.name}
													className={
														classes.cardDoctors
													}
												>
													<Stack gap={0}>
														<Text
															component="p"
															fw={500}
														>
															{item.name}
														</Text>
														<Text
															component="p"
															fz={"sm"}
														>
															{item.email}
														</Text>
														<Text
															component="p"
															fz={"sm"}
														>
															{item.phone}
														</Text>
													</Stack>
												</ListItem>
											)
										)}
									</List>
								</GridCol>
							</Grid>
						</Container>
					</Box>
					<Container>
						<Stack gap={"xl"}>
							<Text component="h2" fz={24} ta="center" fw={500}>
								Our RPL{" "}
								<Text
									c="pri.6"
									component="span"
									fz={"inherit"}
									fw={"inherit"}
								>
									Courses
								</Text>
							</Text>
							<Grid>
								{data.training.desc.courses.basic.map(
									(item) => (
										<GridCol
											key={item.title}
											span={{
												base: 12,
												xs: 6,
												md: 4,
											}}
										>
											<Component.Card.Training.Course
												img={item.img}
												title={item.title}
												desc={item.desc}
												links={item.links}
												type={item.type}
												offered={item.offered}
											/>
										</GridCol>
									)
								)}
							</Grid>
						</Stack>
					</Container>
				</Stack>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
