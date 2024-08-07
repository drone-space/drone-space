import React from "react";

import { Metadata } from "next";
import NextImage from "next/image";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import {
	Button,
	Flex,
	Grid,
	GridCol,
	Group,
	Image,
	List,
	ListItem,
	Stack,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";
import courses from "@/data/courses";
import { IconArrowRight, IconCheck, IconCheckbox, IconFileDownload } from "@tabler/icons-react";
import images from "@/assets/images";
import CtaTraining from "@/partials/cta/Training";
import CardTrainingCourse from "@/components/card/training/Course";

export const metadata: Metadata = { title: "Remote Pilot License" };

export default async function Basic() {
	const data = courses.basic;

	const dataImages = {
		section2: [
			{
				src: images.gallery.graduation.yr2022.image1,
				alt: "graduation image 1",
			},
			{
				src: images.gallery.graduation.yr2022.image2,
				alt: "graduation image 2",
			},
			{
				src: images.gallery.graduation.yr2022.image5,
				alt: "graduation image 5",
			},
			{
				src: images.gallery.graduation.yr2022.image7,
				alt: "graduation image 7",
			},
			{
				src: images.gallery.graduation.yr2022.image9,
				alt: "graduation image 9",
			},
			{
				src: images.gallery.graduation.yr2022.image12,
				alt: "graduation image 12",
			},
		],
		section3: [
			{
				src: images.gallery.graduation.yr2022.image3,
				alt: "graduation image 3",
			},
			{
				src: images.gallery.graduation.yr2022.image4,
				alt: "graduation image 4",
			},
			{
				src: images.gallery.graduation.yr2022.image6,
				alt: "graduation image 6",
			},
			{
				src: images.gallery.graduation.yr2022.image8,
				alt: "graduation image 8",
			},
			{
				src: images.gallery.graduation.yr2022.image10,
				alt: "graduation image 10",
			},
			{
				src: images.gallery.graduation.yr2022.image11,
				alt: "graduation image 11",
			},
		],
	};

	return (
		<LayoutPage>
			<LayoutSection bordered padded containerized={"responsive"}>
				<Grid gutter={{ base: 32, lg: 64 }}>
					<GridCol span={{ md: 6 }}>
						<Stack gap={"xs"}>
							<Title order={2} fz={{ sm: "xl", md: 24 }} fw={"bold"}>
								{data.title.full}
							</Title>

							<Text>{data.desc}</Text>
							<Text>{data.overview}</Text>

							<Stack>
								<Text>
									There are Four categories that are under the RPL Training however, drone space
									offers only two categories:
								</Text>
								<List
									listStyleType="none"
									withPadding={true}
									icon={
										<ThemeIcon size={16} color="green.6" c={"white"} radius={"xl"}>
											<IconCheck size={12} stroke={2} />
										</ThemeIcon>
									}
								>
									{data.units.map(
										unit =>
											unit.title.short != "FW" &&
											unit.title.short != "BVLOS" && (
												<ListItem key={unit.title.short}>{unit.title.full}</ListItem>
											)
									)}
								</List>
							</Stack>
						</Stack>
					</GridCol>
					<GridCol span={{ md: 6 }} visibleFrom="md">
						<Grid
							gutter={0}
							style={{
								borderRadius: "var(--mantine-radius-sm)",
								overflow: "hidden",
								boxShadow: "var(--mantine-shadow-xs)",
							}}
						>
							{data.units.reverse().map(unit => (
								<GridCol key={unit.title.short} span={{ md: 6 }}>
									<Stack>
										<Image
											src={unit.image}
											alt={"Gallery Image"}
											loading="lazy"
											// h={{ base: "100%", md: 200, lg: "100%" }}
											title={unit.title.full}
											component={NextImage}
											width={1920}
											height={1080}
										/>
									</Stack>
								</GridCol>
							))}
						</Grid>
					</GridCol>
				</Grid>
			</LayoutSection>

			<LayoutSection
				shadowed
				padded
				containerized={"responsive"}
				bg={"light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-1))"}
			>
				<Grid gutter={{ base: 32, lg: 64 }}>
					<GridCol span={{ md: 6 }} order={{ md: 2 }}>
						<Stack gap={"xs"}>
							<Title order={2} fz={{ sm: "xl", md: 24 }} fw={"bold"}>
								Course Duration
							</Title>

							<Text>
								The course duration is dependent on the amount of time you can commit to studying each
								week. However, it&apos;s important to note that the course is designed to be
								comprehensive and provides all the information you need to successfully complete the
								Remote Pilot License (RPL) exam. With a mix of video lessons and online quizzes,
								you&apos;ll have the opportunity to learn at your own pace and retain the information
								effectively. Whether you are a busy professional, a student or just someone looking to
								advance their career, our online class provides you with the tools and resources you
								need to achieve your goals.
							</Text>

							<Stack>
								<Text>The course objectives:</Text>
								<List spacing={"xs"} listStyleType="none" withPadding={true}>
									{data.objectives.map(objective => (
										<ListItem key={objective}>
											<Group gap={"sm"} align="start" wrap="nowrap">
												<span>
													<IconCheckbox
														size={20}
														stroke={2}
														style={{ marginTop: 3 }}
														color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"
													/>
												</span>

												<Text component="span" inherit fz={{ md: "sm", lg: "md" }}>
													{objective}
												</Text>
											</Group>
										</ListItem>
									))}
								</List>
							</Stack>
						</Stack>
					</GridCol>
					<GridCol span={{ md: 6 }} order={{ md: 1 }} visibleFrom="md">
						<Grid
							gutter={0}
							style={{
								borderRadius: "var(--mantine-radius-sm)",
								overflow: "hidden",
								boxShadow: "var(--mantine-shadow-xs)",
							}}
						>
							{dataImages.section2.map(image => (
								<GridCol key={image.alt} span={{ md: 6 }}>
									<Stack>
										<Image
											src={image.src}
											alt={"Gallery Image"}
											loading="lazy"
											// h={{ base: "100%", md: 200, lg: "100%" }}
											title={image.alt}
											component={NextImage}
											width={1920}
											height={1080}
										/>
									</Stack>
								</GridCol>
							))}
						</Grid>
					</GridCol>
				</Grid>
			</LayoutSection>

			<LayoutSection shadowed padded containerized={"responsive"}>
				<Grid gutter={{ base: 32, lg: 64 }}>
					<GridCol span={{ md: 6 }}>
						<Stack gap={"xs"}>
							<Title order={2} fz={{ sm: "xl", md: 24 }} fw={"bold"}>
								Course Evaluation
							</Title>

							<Text>
								Upon completion of the online course, students are required to sit for exams at any of
								our training centers after which they receive face to face practical flight instruction
								at our Airfield in Sigona. By obtaining an RPL, you will be able to legally operate
								drones in Kenya and potentially pursue a career in various industries, including
								cinematography, agriculture, and construction, survey and mapping among others.
							</Text>

							<Stack>
								<Text>The course overview:</Text>
								<List fz={{ md: "sm" }} spacing={"xs"} listStyleType="none" withPadding={true}>
									{data.process.map(unit => (
										<ListItem key={unit.title}>
											<Group align="start" wrap="nowrap">
												<ThemeIcon
													size={16}
													color="green.6"
													c={"white"}
													radius={"xl"}
													style={{ marginTop: 3 }}
												>
													<IconCheck size={12} stroke={2} />
												</ThemeIcon>

												<span>
													<Text component="span" inherit fw={500} c={"pri"}>
														{unit.title}
													</Text>
													: {unit.desc}
												</span>
											</Group>
										</ListItem>
									))}
								</List>
							</Stack>
						</Stack>
					</GridCol>
					<GridCol span={{ md: 6 }} visibleFrom="md">
						<Grid
							gutter={0}
							style={{
								borderRadius: "var(--mantine-radius-sm)",
								overflow: "hidden",
								boxShadow: "var(--mantine-shadow-xs)",
							}}
						>
							{dataImages.section3.map(image => (
								<GridCol key={image.alt} span={{ md: 6 }}>
									<Stack>
										<Image
											src={image.src}
											alt={"Gallery Image"}
											loading="lazy"
											// h={{ base: "100%", md: 200, lg: "100%" }}
											title={image.alt}
											component={NextImage}
											width={1920}
											height={1080}
										/>
									</Stack>
								</GridCol>
							))}
						</Grid>
					</GridCol>
				</Grid>
			</LayoutSection>

			<CtaTraining data={{ type: "basic" }} />

			<LayoutSection padded containerized={"responsive"}>
				<Stack gap={"xl"}>
					<Stack gap={"xs"}>
						<Title ta={"center"} order={2} fz={{ sm: "xl", md: 24 }} fw={"bold"}>
							RPL Courses
						</Title>
						<Text ta={"center"}>Browse our list of RPL training courses</Text>
					</Stack>

					<Grid justify="center">
						{data.units.map(unit => (
							<GridCol key={unit.title.short} span={{ sm: 6, md: 4, lg: 3 }}>
								<CardTrainingCourse data={unit} type="basic" />
							</GridCol>
						))}
					</Grid>
				</Stack>
			</LayoutSection>
		</LayoutPage>
	);
}
