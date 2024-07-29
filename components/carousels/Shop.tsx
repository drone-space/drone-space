"use client";

import React from "react";
import { useRef } from "react";
import Link from "next/link";

import { Anchor, Container, Stack, Text, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";

import Autoplay from "embla-carousel-autoplay";

import LayoutSection from "@/layouts/Section";

import images from "@/assets/images";

import classes from "./Shop.module.scss";

const data = [
	{
		title: "Camera Drones",
		image: images.carousel.shop.image1,
		desc: "Camera drones are small unmanned aerial vehicles with a camera attached. Primarily used for aerial photography and videography but can also be used for aerial inspections, thermal imaging, land surveying, and many other applications on a small scale.",
		anchor: { link: "/shop/drones/camera", label: "Shop Now" },
		styles: {
			alignment: "start",
		},
	},
	{
		title: "Enterprise Drones",
		image: images.carousel.shop.image2,
		desc: "Enterprise drones introduce advanced data capture capabilities, encompassing high-resolution imagery, LiDAR scanning, and thermal imaging. These capabilities empower businesses to amass detailed and actionable insights efficiently over expansive areas. Processed through specialized software, the collected data can yield precise maps, 3D models, and a range of analytics on a large scale.",
		anchor: { link: "/shop/drones/enterprise", label: "Shop Now" },
		styles: {
			alignment: "end",
		},
	},
	{
		title: "Agriculture Drones",
		image: images.carousel.shop.image3,
		desc: "Agriculture drones are used to monitor and manage the growth of crops, land area, and overall agricultural aspects. These drones also have special cameras, advanced sensors, and automated data-capturing capabilities that can help farmers record any data related to crop growth, weather conditions, and more. Used for pesticide spraying equipment, monitoring, reinforcing-checking and measuring damage from animals.",
		anchor: { link: "/shop/drones/agriculture", label: "Shop Now" },
		styles: {
			alignment: "end",
		},
	},
];

export default function Shop() {
	const autoplay = useRef(Autoplay({ delay: 8000 }));

	const slides = data.map(slide => (
		<CarouselSlide
			key={slide.title}
			style={{
				background: `linear-gradient( rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.75) 100%), url('${slide.image}')`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center",
			}}
		>
			<LayoutSection containerized="responsive">
				<Stack align={slide.styles.alignment} justify="center" mih={480}>
					<Title order={2} c={"light-dark(var(--mantine-color-white),var(--mantine-color-white))"}>
						{slide.title}
					</Title>
					<Text w={{ base: "100%", md: "50%" }} ta={data.indexOf(slide) == 0 ? "start" : "end"} fz={"sm"}>
						{slide.desc}
					</Text>
					<Anchor underline="never" component={Link} href={slide.anchor.link} className={classes.link}>
						{slide.anchor.label}
					</Anchor>
				</Stack>
			</LayoutSection>
		</CarouselSlide>
	));

	return (
		<Carousel
			withIndicators
			withControls={false}
			loop
			classNames={{ root: classes.root, slide: classes.slide, control: classes.control }}
			plugins={[autoplay.current]}
			// onMouseEnter={autoplay.current.stop}
			// onMouseLeave={autoplay.current.reset}
		>
			{slides}
		</Carousel>
	);
}
