"use client";

import React from "react";
import { useRef } from "react";
import Link from "next/link";
import NextImage from "next/image";

import { Anchor, Container, Stack, Text, Title, Image as MantineImage, Card } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";

import Autoplay from "embla-carousel-autoplay";

import LayoutSection from "@/layouts/Section";

import images from "@/assets/images";

import classes from "./Image.module.scss";

export default function Image({ data }: { data: string[] }) {
	const autoplay = useRef(Autoplay({ delay: 4000 }));

	const slides = data.map(slide => (
		<CarouselSlide key={slide}>
			<Stack w={"100%"}>
				<MantineImage
					src={slide}
					alt={"Intelligent battery"}
					loading="lazy"
					component={NextImage}
					width={1920}
					height={1080}
				/>
			</Stack>
		</CarouselSlide>
	));

	return (
		<Carousel
			withIndicators={data.length > 1 ? true : false}
			withControls={data.length > 1 ? true : false}
			loop={true}
			classNames={{
				root: classes.root,
				slide: classes.slide,
				controls: classes.controls,
				control: classes.control,
				indicator: classes.indicator,
			}}
			plugins={[autoplay.current]}
			onMouseEnter={autoplay.current.stop}
			onMouseLeave={autoplay.current.reset}
		>
			{slides}
		</Carousel>
	);
}
