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
		{ title: "November Radiotelephony", image: images.posters.courses.yr2024.nov.radiotelephony.portrait },
		{ title: "November Rating", image: images.posters.courses.yr2024.nov.rating.portrait },
		{ title: "November Intake", image: images.posters.intakes.yr2024.nov.portrait },
		{ title: "November Ad", image: images.posters.ads.image1 },
	];

	const data = [
		{ title: "November Radiotelephony", image: images.posters.courses.yr2024.nov.radiotelephony.portrait },
		{ title: "November Rating", image: images.posters.courses.yr2024.nov.rating.portrait },
		{ title: "November Intake", image: images.posters.intakes.yr2024.nov.portrait },
		{ title: "November Ad", image: images.posters.ads.image1 },
	];

	const slides = (mobile ? dataMobile : data).map((slide, index) => (
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
