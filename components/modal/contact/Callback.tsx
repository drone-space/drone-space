"use client";

import React from "react";

import NextImage from "next/image";

import { Modal, Grid, GridCol, Group, Image, Text, Stack } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import FormContact from "@/partials/forms/Contact";

import images from "@/assets/images";

export default function Callback({ children }: { children: React.ReactNode }) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				size={"md"}
				centered
				title={
					<Text component="span" inherit fw={"bold"} c={"pri"}>
						Callback Request
					</Text>
				}
			>
				<FormContact data={{ subject: "Callback Request" }} inquiry="callback" />
			</Modal>

			<span style={{ display: "inline" }} onClick={open}>
				{children}
			</span>
		</>
	);
}
