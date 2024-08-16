import React from "react";

import LayoutSection from "@/layouts/Section";

import classes from "./Shows.module.scss";
import { AspectRatio, Button, Card, Grid, GridCol, Group, Stack, Text, Title } from "@mantine/core";
import images from "@/assets/images";
import videos from "@/assets/videos";
import shows from "@/data/shows";

export default function Shows() {
	const data = shows;

	return (
		<div className={classes.hero}>
			<div className={classes.underlay}>
				<AspectRatio ratio={1920 / 1080} h={"100%"}>
					<video
						controls={false}
						autoPlay
						muted
						loop
						playsInline
						preload="auto"
						poster={images.gallery.innovation.jamuhuri.yr2020.image9}
						height={"100%"}
					>
						<source src={videos.hero.lightShow} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</AspectRatio>
			</div>

			<LayoutSection containerized="responsive" padded>
				<Stack gap={48} align="center">
					<Stack gap={"xs"} align="center">
						<Title
							ta={"center"}
							order={1}
							fw={"bold"}
							fz={{ base: 32, sm: 32, md: 48 }}
							w={{ md: "80%" }}
							c={"sec.3"}
						>
							Drone Space Light Shows
						</Title>

						<Text ta={"center"} w={{ base: "100%", md: "90%", lg: "75%" }}>
							Drone Space, an approved drone operator in Kenya, proudly stands as the leader and pioneer
							in drone technology. With a reputation for innovation and excellence, Drone Space is
							thrilled to announce the launch of its new division: Drone Light Shows. This exciting
							venture is set to captivate audiences across the nation in the coming months with
							breathtaking displays of synchronized drone lighting.
						</Text>
					</Stack>

					<Grid justify="center">
						{data.features.map(feature => (
							<GridCol key={feature.label} span={{ xs: 6, sm: 4, lg: 3 }}>
								<Card className={classes.card}>
									<Stack gap={"xs"}>
										<Title order={2} fz={"sm"} c={"sec.3"}>
											{feature.label}
										</Title>
										<Text fz={"xs"}>{feature.item}</Text>
									</Stack>
								</Card>
							</GridCol>
						))}
					</Grid>
				</Stack>
			</LayoutSection>
		</div>
	);
}
