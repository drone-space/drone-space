import React from "react";

import { Modal, Button, Image } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import { IconCertificate } from "@tabler/icons-react";

import carousel from "../carousels";

import image from "../../assets/images";

import classes from "./Ad.module.scss";

export default function Advertisment({ active }: { active: boolean }) {
	const [opened, { open, close }] = useDisclosure(active);
	const mobile = useMediaQuery("(max-width: 36em)");

	const xl = useMediaQuery("(min-width: 88em)");

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				centered
				// title={"Training workshop"}
				withCloseButton={false}
				closeButtonProps={{
					"aria-label": "Close modal",
				}}
				size={xl ? "md" : "sm"}
				classNames={{ content: classes.content, body: classes.body }}
			>
				<carousel.Popup.Ad />
			</Modal>

			<Button
				onClick={open}
				size="xs"
				color="sec.4"
				c={"pri.6"}
				leftSection={<IconCertificate size={16} stroke={1.5} />}
			>
				Training Workshop
			</Button>
		</>
	);
}
