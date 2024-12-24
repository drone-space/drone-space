"use client";

import React, { useRef } from "react";

import NextImage from "next/image";

import { Modal, Image, Stack, Button, Group, AspectRatio } from "@mantine/core";
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
	const laptop = useMediaQuery("(max-width: 75em)");

	const autoplay = useRef(Autoplay({ delay: 5000 }));

	const dataMobile = [
		{ title: "Christmas Ad", image: images.posters.holidays.image1 },
		{ title: "January Intake", image: images.posters.intakes.yr2025.jan.portrait },
	];

	const data = [
		{ title: "Christmas Ad", image: images.posters.holidays.image1 },
		{ title: "January Intake", image: images.posters.intakes.yr2025.jan.portrait },
	];

	const now = new Date();
	const cutoffDate = new Date(2025, 0, 1); // January 1, 2025, 00:00
	const render = now < cutoffDate;

	const slideData = mobile ? dataMobile : data

	const slides = slideData.map((slide, index) => slideData.indexOf(slide) != (render ? undefined : 0) && (
		<CarouselSlide key={slide.title} mah={"fit-content"}>
			<Group h={"100%"}>
				<Image src={slide.image} alt={`Poster ${index + 1}`} loading="lazy" radius={"sm"} />
			</Group>
		</CarouselSlide>
	));

	return (
		<>
			<Modal opened={opened} size={384} onClose={close} centered classNames={classes} withCloseButton={false}>
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
				Courses & Intakes
			</Button>
		</>
	);
}
