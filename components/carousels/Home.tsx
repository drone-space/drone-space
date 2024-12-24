"use client";

import React from "react";
import { useRef } from "react";
import NextImage from "next/image";

import { AspectRatio, Box, Button, Container, Group, Image, Stack, Text, Title } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";

import { IconExternalLink, IconFileDownload } from "@tabler/icons-react";

import Autoplay from "embla-carousel-autoplay";

import images from "@/assets/images";
import documents from "@/assets/documents";
import videos from "@/assets/videos";

import ModalPoster from "../modal/Poster";
import LayoutSection from "@/layouts/Section";
import ModalAdvertisment from "../modal/Advertisment";
import ModalCamp from "../modal/Camp";
import ModalShows from "../modal/Shows";
import ModalDownloadBrochure from "../modal/download/Brochure";

import classes from "./Home.module.scss";

import { useMediaQuery } from "@mantine/hooks";

export default function Home() {
	const autoplay = useRef(Autoplay({ delay: 8000 }));
	const mobile = useMediaQuery("(max-width: 36em)");

	const anchors = (
		<Group gap={"xs"}>
			<ModalDownloadBrochure>
				<Button size="xs" leftSection={<IconFileDownload size={16} stroke={1.5} />}>
					Brochure
				</Button>
			</ModalDownloadBrochure>

			{/* <ModalPoster /> */}
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
			<LayoutSection containerized="responsive">
				<Stack align={'center'} justify="center" mih={520}>
					<Title order={1} ta={'center'} className={classes.title}>
						{slide.title}
					</Title>

					<Text
						w={{ base: "100%", md: "50%" }}
						ta={'center'}
						fz={"sm"}
					>
						{slide.desc}
					</Text>

					<Group gap={"xs"}>
						{anchors} <ModalAdvertisment />
					</Group>

					<Group gap={"xs"}>
						{/* <ModalAdvertisment /> */}
						{/* <ModalShows /> */}
					</Group>
				</Stack>
			</LayoutSection>
		</CarouselSlide>
	));

	return (
		<Carousel
			withIndicators
			loop
			withControls={false}
			classNames={{ slide: classes.slide, control: classes.control, indicator: classes.indicator }}
			plugins={[autoplay.current]}
			// onMouseEnter={autoplay.current.stop}
			// onMouseLeave={autoplay.current.reset}
		>
			{/* <CarouselSlide key={"AI Conference"} style={{
				background: `linear-gradient( rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.2) 100%), url('${images.posters.conference.ai.poster1.landscape}')`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center center",
			}}>
				<LayoutSection containerized="responsive">
					<Stack align={"center"} justify="center" mih={520}>
					<Stack className={classes.imageContainer} h={80}>
						<Image
							src={images.brand.conference.ai.landscape.dark}
							alt={'AI Conference'}
							loading="lazy"
							h={80}
							component={NextImage}
							width={1920}
							height={1080}
						/>
					</Stack>

						<Text w={{ base: "100%", md: "75%" }} ta={"center"} fz={{base:'md',xs:'lg',sm:'xl'}} c={'yellow.4	'} fw={'bold'}>
						Explore the Fusion of AI, Drones, and Data Analytics
						</Text>

						<Title order={1} className={classes.title} ta={"center"} fz={{base:'lg',xs:'xl',sm:24,md:32}}>
						JW Marriott Hotel, Westlands <br/>
						Tue 6th - Wed 7th May, 2025
						</Title>

						<Text w={{ base: "100%", md: "75%",lg:'60%' }} ta={'center'} fz={'sm'}>
							Drone Space hosted Kenya&apos;s first public AI Conference on March 26th - 27th, 2024, and will hold the 2nd AI Conference Nairobi on May 6th - 7th, 2025, at the JW Marriott Hotel in Westlands
							</Text>

						<Group gap={"xs"}>
							<Button component={'a'} href="https://aiconference.co.ke" target="_blank" color="white" variant="outline" radius={'xl'} size="xs" rightSection={<IconExternalLink size={16} stroke={1.5} />}>

							<Text component="span" inherit>
							<Text visibleFrom="xs" component="span" inherit>Visit Our AI Conference Website to </Text>Learn More
							</Text>
							</Button>
						</Group>
					</Stack>
				</LayoutSection>
			</CarouselSlide> */}

			<CarouselSlide key={"Empowering Drone Professionals in Kenya"} pos={"relative"}>
				<div className={classes.underlay}>
					<AspectRatio ratio={1920 / 1080} h={"100%"}>
						<video
							// controls={false}
							autoPlay
							muted
							loop
							playsInline
							preload="auto"
							// poster={images.gallery.innovation.jamuhuri.yr2020.image9}
							height={"100%"}
						>
							<source src={videos.hero.video1} type="video/mp4" />
							Your browser does not support the video tag.
						</video>
					</AspectRatio>
				</div>

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
				<LayoutSection containerized="responsive">
					<Stack align={"center"} justify="center" mih={520}>
						<Title order={1} className={classes.title} ta={"center"}>
							Empowering Drone Professionals in Kenya
						</Title>

						<Text w={{ base: "100%", md: "50%" }} ta={"center"} fz={"sm"}>
							Whether you&apos;re looking to start a new career or expand your skillset, our Remote Pilot
							License (RPL) training program is the perfect place to begin your journey. Join us and
							become a licensed drone operator today!
						</Text>

						<Group gap={"xs"}>
							<ModalDownloadBrochure>
								<Button size="xs" leftSection={<IconFileDownload size={16} stroke={1.5} />}>
									Brochure
								</Button>
							</ModalDownloadBrochure>

							{/* <ModalPoster active={true} /> */}
							<ModalAdvertisment active={true} />
						</Group>

						<Group gap={"xs"}>
							{/* <ModalAdvertisment /> */}
							{/* <ModalShows active={true} /> */}
						</Group>
					</Stack>
				</LayoutSection>
			</CarouselSlide>

			{slides}
		</Carousel>
	);
}

const data = [
	{
		image: images.gallery.graduation.yr2022.image8,
		title: "Over 200 Pilots Trained",
		desc: "The Remote Pilot Licence (RPL) Training is the initial license required for a delegate/student to start their professional drone pilot career. Join us today and experience the power of flight.",
	},
	{
		image: images.gallery.expo.yr2022.image7,
		title: "Host of First Ever Drone Tech and Data Expo in the Region",
		desc: "Drone Space through its spaces and hub will develop different innovative spaces as well as training courses to meet the needs of drone operators, developers and innovators and to build strategic partnerships between them so as to support their innovations and developments.",
	},
	{
		image: images.gallery.projects.project1.image5,
		title: "100+ Drone Operations Completed",
		desc: "Our skilled personnel are adept at spotting issues and verifying drone operations follow client specifications and regulatory standards. When problems arise, Drone Space provides instant reaction and communication to all parties.",
	},
];
