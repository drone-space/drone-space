"use client";

import React from "react";

import NextImage from "next/image";

import { Modal, Grid, GridCol, Group, Image, Text, Stack, AspectRatio } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import FormContact from "@/partials/forms/Contact";

import images from "@/assets/images";
import videos from "@/assets/videos";

export default function Shows({ children }: { children: React.ReactNode }) {
	const [opened, { open, close }] = useDisclosure(false);
	const desktoplg = useMediaQuery("(min-width: 75em)");

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				size={desktoplg ? 960 : "xl"}
				centered
				title={
					<Text component="span" inherit fw={"bold"} c={"pri"}>
						Drone Light Show Inquiry
					</Text>
				}
			>
				<Grid>
					<GridCol span={{ base: 12, sm: 6 }} visibleFrom="sm">
						<AspectRatio ratio={1920 / 1080} h={"100%"}>
							<video
								width="100%"
								controls
								autoPlay
								muted
								loop
								style={{ borderRadius: "var(--mantine-radius-sm)", overflow: "hidden" }}
								height={"100%"}
							>
								<source src={videos.hero.lightShow} type="video/mp4" />
								Your browser does not support the video tag.
							</video>
						</AspectRatio>
					</GridCol>
					<GridCol span={{ base: 12, sm: 6 }}>
						<FormContact data={{ subject: "Drone Light Show Inquiry" }} inquiry="shows" />
					</GridCol>
				</Grid>
			</Modal>

			<span style={{ display: "inline" }} onClick={open}>
				{children}
			</span>
		</>
	);
}
