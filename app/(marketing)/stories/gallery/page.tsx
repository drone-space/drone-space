import React from "react";

import { Metadata } from "next";

import { Grid, GridCol, Tabs, TabsList, TabsPanel, TabsTab } from "@mantine/core";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import ModalGallery from "@/components/modal/Gallery";

import tabs from "@/data/tabs";

import classes from "./Gallery.module.scss";

export const metadata: Metadata = { title: "Gallery" };

export default async function Gallery() {
	return (
		<LayoutPage>
			<LayoutSection containerized="responsive" padded>
				<Tabs defaultValue={"conference"} classNames={{ list: classes.panel }} keepMounted={true}>
					<Grid component={TabsList} grow mb={"xl"} justify="center" gutter={0}>
						<GridCol span={{ base: 6, xs: 4, sm: "auto" }}>
							<TabsTab w={"100%"} value="conference">
								Conference
							</TabsTab>
						</GridCol>
						<GridCol span={{ base: 6, xs: 4, sm: "auto" }}>
							<TabsTab w={"100%"} value="expo">
								Expo
							</TabsTab>
						</GridCol>
						<GridCol span={{ base: 6, xs: 4, sm: "auto" }}>
							<TabsTab w={"100%"} value="hackathon">
								Hackathon
							</TabsTab>
						</GridCol>
						<GridCol span={{ base: 6, xs: 4, sm: "auto" }}>
							<TabsTab w={"100%"} value="graduation">
								Graduation
							</TabsTab>
						</GridCol>
						<GridCol span={{ base: 6, xs: 4, sm: "auto" }}>
							<TabsTab w={"100%"} value="innovation">
								Innovation
							</TabsTab>
						</GridCol>
						<GridCol span={{ base: 6, xs: 4, sm: "auto" }}>
							<TabsTab w={"100%"} value="projects">
								Projects
							</TabsTab>
						</GridCol>
						<GridCol span={{ base: 6, xs: 4, sm: "auto" }}>
							<TabsTab w={"100%"} value="airfield">
								Airfield
							</TabsTab>
						</GridCol>
					</Grid>

					<TabsPanel value="conference">
						<Grid gutter={2} justify="center">
							{tabs.gallery.conference.yr2024.map((item, id) => (
								<GridCol
									key={id}
									span={{
										base: 12,
										xs: 6,
										sm: 4,
										md: 3,
										lg: 2,
									}}
								>
									<ModalGallery img={item} />
								</GridCol>
							))}
						</Grid>
					</TabsPanel>

					<TabsPanel value="expo">
						<Grid gutter={2} justify="center">
							{tabs.gallery.expo.yr2024.map((item, id) => (
								<GridCol
									key={id}
									span={{
										base: 12,
										xs: 6,
										sm: 4,
										md: 3,
										lg: 2,
									}}
								>
									<ModalGallery img={item} />
								</GridCol>
							))}
						</Grid>
					</TabsPanel>

					<TabsPanel value="hackathon">
						<Grid gutter={2} justify="center">
							{tabs.gallery.hackathon.yr2024.map((item, id) => (
								<GridCol
									key={id}
									span={{
										base: 12,
										xs: 6,
										sm: 4,
										md: 3,
										lg: 2,
									}}
								>
									<ModalGallery img={item} />
								</GridCol>
							))}
						</Grid>
					</TabsPanel>

					<TabsPanel value="graduation">
						<Grid gutter={2} justify="center">
							{tabs.gallery.graduation.yr2022.map((item, id) => (
								<GridCol
									key={id}
									span={{
										base: 12,
										xs: 6,
										sm: 4,
										md: 3,
										lg: 2,
									}}
								>
									<ModalGallery img={item} />
								</GridCol>
							))}
						</Grid>
					</TabsPanel>

					<TabsPanel value="innovation">
						<Grid gutter={2} justify="center">
							{tabs.gallery.innovation.jamuhuri.map((item, id) => (
								<GridCol
									key={id}
									span={{
										base: 12,
										xs: 6,
										sm: 4,
										md: 3,
										lg: 2,
									}}
								>
									<ModalGallery img={item} />
								</GridCol>
							))}
						</Grid>
					</TabsPanel>

					<TabsPanel value="projects">
						<Grid gutter={2} justify="center">
							{tabs.gallery.projects.project.map((item, id) => (
								<GridCol
									key={id}
									span={{
										base: 12,
										xs: 6,
										sm: 4,
										md: 3,
										lg: 2,
									}}
								>
									<ModalGallery img={item} />
								</GridCol>
							))}
						</Grid>
					</TabsPanel>

					<TabsPanel value="airfield">
						<Grid gutter={2} justify="center">
							{tabs.gallery.airfield.map((item, id) => (
								<GridCol
									key={id}
									span={{
										base: 12,
										xs: 6,
										sm: 4,
										md: 3,
										lg: 2,
									}}
								>
									<ModalGallery img={item} />
								</GridCol>
							))}
						</Grid>
					</TabsPanel>
				</Tabs>
			</LayoutSection>
		</LayoutPage>
	);
}
