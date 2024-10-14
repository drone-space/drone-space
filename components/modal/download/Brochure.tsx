"use client";

import React from "react";

import { Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import FormDownloadBrochure from "@/partials/forms/download/Brochure";

export default function Brochure({ children }: { children: React.ReactNode }) {
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
						Brochure Download
					</Text>
				}
			>
				<FormDownloadBrochure />
			</Modal>

			<span style={{ display: "inline" }} onClick={open}>
				{children}
			</span>
		</>
	);
}
