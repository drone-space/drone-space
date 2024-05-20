import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { Container, Image } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";

import Autoplay from "embla-carousel-autoplay";

import image from "@src/assets/images";

import classes from "./Ad.module.scss";

const data = [{ title: "Intakes", image: image.popups.intakes.yr2024.may.portrait }];

export default function Ad() {
	const autoplay = useRef(Autoplay({ delay: 5000 }));

	const slides = data.map(slide => (
		<CarouselSlide key={slide.title}>
			<Image src={slide.image} loading="lazy" />
		</CarouselSlide>
	));

	return (
		<Carousel
			withIndicators
			slideGap={"xs"}
			loop
			classNames={{ root: classes.root, control: classes.control }}
			plugins={[autoplay.current]}
		>
			{slides}
		</Carousel>
	);
}
