import React from "react";

import { AspectRatio, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import classes from "./Gallery.module.scss";

export interface typeModalGallery {
	img: string;
}

export default function Gallery({ img }: typeModalGallery) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				centered
				classNames={{ close: classes.close }}
				size={"xl"}
				title={"Image Viewer"}
				closeButtonProps={{ "aria-label": "Close modal" }}
			>
				<AspectRatio ratio={1920 / 1080}>
					<img
						src={img}
						alt={"Gallery Image"}
						loading="lazy"
						width={"100%"}
					/>
				</AspectRatio>
			</Modal>
			<AspectRatio
				unstyled
				ratio={1920 / 1080}
				className={classes.container}
				onClick={open}
			>
				<img
					src={img}
					alt={"Gallery Image"}
					loading="lazy"
					width={"100%"}
					className={classes.image}
				/>
			</AspectRatio>
		</>
	);
}
