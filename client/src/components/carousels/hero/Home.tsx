import React from "react";
import { useRef } from "react";

import { Box, Button, Container, Group, Stack, Text, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";

import { IconFileDownload } from "@tabler/icons-react";

import Autoplay from "embla-carousel-autoplay";

import Component from "@src/components";

import image from "@src/assets/images";
import videos from "@src/assets/videos";
import document from "@src/assets/documents";

import classes from "./Home.module.scss";

import { useMediaQuery } from "@mantine/hooks";

const data = [
	{
		image: image.gallery.graduation.yr2022.image8,
		title: "Over 200 Pilots Trained",
		desc: "The Remote Pilot Licence (RPL) Training is the initial license required for a delegate/student to start their professional drone pilot career. Join us today and experience the power of flight.",
		styles: {
			alignment: "start",
		},
	},
	{
		image: image.gallery.expo.yr2022.image7,
		title: "Host of First Ever Drone Tech and Data Expo in the Region",
		desc: "Drone Space through its spaces and hub will develop different innovative spaces as well as training courses to meet the needs of drone operators, developers and innovators and to build strategic partnerships between them so as to support their innovations and developments.",
		styles: {
			alignment: "end",
		},
	},
	{
		image: image.gallery.projects.project1.image5,
		title: "100+ Drone Operations Completed",
		desc: "Our skilled personnel are adept at spotting issues and verifying drone operations follow client specifications and regulatory standards. When problems arise, Drone Space provides instant reaction and communication to all parties.",
		styles: {
			alignment: "end",
		},
	},
];

export default function Shop() {
	const autoplay = useRef(Autoplay({ delay: 10000 }));
	const mobile = useMediaQuery("(max-width: 36em)");

	const anchors = (
		<Group gap={"xs"}>
			<Button
				size="xs"
				component={"a"}
				href={document.brochure}
				download={"dronespace-borchure"}
				leftSection={<IconFileDownload size={16} stroke={1.5} />}
			>
				Brochure
			</Button>
			<Component.Modal.Advertisment active={false} />
		</Group>
	);

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
			<Container size={"md"}>
				<Stack align={slide.styles.alignment} justify="center" mih={520}>
					<Text ta={slide.styles.alignment} component={Title} order={2}>
						{slide.title}
					</Text>
					<Text w={{ base: "100%", md: "50%" }} ta={slide.styles.alignment} fz={"sm"}>
						{slide.desc}
					</Text>
					{anchors}
				</Stack>
			</Container>
		</CarouselSlide>
	));

	return (
		<Carousel
			withIndicators
			loop
			withControls={false}
			classNames={{ slide: classes.slide, control: classes.control }}
			plugins={[autoplay.current]}
			// onMouseEnter={autoplay.current.stop}
			// onMouseLeave={autoplay.current.reset}
		>
			<CarouselSlide key={"Empowering Drone Professionals in Kenya"} pos={"relative"}>
				<Box
					pos={"absolute"}
					style={{ zIndex: -2 }}
					component="video"
					src={videos.hero.video1}
					controls
					autoPlay
					playsInline
					preload="auto"
					poster={image.gallery.innovation.jamuhuri.image4}
					muted
					loop
					h={mobile && "100%"}
					w={!mobile && "100%"}
				></Box>
				<Box
					pos={"absolute"}
					top={0}
					bottom={0}
					left={0}
					right={0}
					style={{
						background: `linear-gradient( rgba(0, 0, 0, 0.25) 20%, rgba(0, 0, 0, 0.75) 100%)`,
						zIndex: -1,
					}}
				></Box>
				<Container size={"md"}>
					<Stack align={"start"} justify="center" mih={520}>
						<Title order={2}>Empowering Drone Professionals in Kenya</Title>
						<Text w={{ base: "100%", md: "50%" }} ta={"start"} fz={"sm"}>
							Whether you&apos;re looking to start a new career or expand your skillset, our Remote Pilot
							License (RPL) training program is the perfect place to begin your journey. Join us and
							become a licensed drone operator today!
						</Text>
						<Group gap={"xs"}>
							<Button
								size="xs"
								component={"a"}
								href={document.brochure}
								download={"dronespace-borchure"}
								leftSection={<IconFileDownload size={16} stroke={1.5} />}
							>
								Brochure
							</Button>
							<Component.Modal.Advertisment active={true} />
						</Group>
					</Stack>
				</Container>
			</CarouselSlide>
			{slides}
		</Carousel>
	);
}
