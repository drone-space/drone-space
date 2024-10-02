"use client";

import React, { useRef } from "react";

import NextImage from "next/image";

import { Modal, Image, Stack, Button } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import classes from "./Advertisment.module.scss";
import images from "@/assets/images";
import { IconArrowRight, IconSchool } from "@tabler/icons-react";
import { Carousel, CarouselSlide } from "@mantine/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Advertisment({ active }: { active?: boolean }) {
	const [opened, { open, close }] = useDisclosure(active ? true : false);

	const mobile = useMediaQuery("(max-width: 36em)");
	const tablet = useMediaQuery("(max-width: 48em)");
	const laptopmd = useMediaQuery("(max-width: 75em)");

	const autoplay = useRef(Autoplay({ delay: 5000 }));

	const dataMobile = [
		{ title: "August Intake (With Drone)", image: images.posters.intakes.yr2024.oct2.portrait },
		{ title: "August Intake", image: images.posters.intakes.yr2024.oct.portrait },
		{ title: "August Mapping", image: images.posters.courses.yr2024.oct.mapping.portrait },
	];

	const data = [
		{ title: "Mapping Intake (With Drone)", image: images.posters.intakes.yr2024.oct2.portrait },
		{ title: "August Intake", image: images.posters.intakes.yr2024.oct.portrait },
		{ title: "August Mapping", image: images.posters.courses.yr2024.oct.mapping.portrait },
	];

	const slides = (mobile ? dataMobile : data).map(slide => (
		<CarouselSlide key={slide.title}>
			<Stack h={"100%"}>
				<Image
					src={slide.image}
					alt={"Training Workshop"}
					loading="lazy"
					radius={"sm"}
					component={NextImage}
					width={1080}
					height={1920}
					w={"100%"}
				/>
			</Stack>
		</CarouselSlide>
	));

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				centered
				size={mobile ? "md" : tablet ? "sm" : laptopmd ? "sm" : "lg"}
				classNames={classes}
				withCloseButton={false}
			>
				<Carousel
					withIndicators={false}
					withControls={data.length > 1}
					slidesToScroll={1}
					slideSize={"100%"}
					slideGap={0}
					loop
					classNames={{ root: classes.root, control: classes.control }}
					plugins={[autoplay.current]}
				>
					{slides}
				</Carousel>
			</Modal>

			<Button
				onClick={open}
				size="xs"
				variant="default"
				leftSection={<IconSchool size={16} stroke={2} />}
				c={"pri"}
			>
				Weekly Intakes
			</Button>
		</>
	);
}
