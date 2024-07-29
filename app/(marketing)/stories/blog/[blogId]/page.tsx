import React from "react";

import NextImage from "next/image";

import { Blockquote, Grid, GridCol, Group, Image, Stack, Text, Title } from "@mantine/core";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import ModalGallery from "@/components/modal/Gallery";

import blog from "@/data/blog";
import link from "@/handlers/parsers/string/link";

import { typeParams } from "./layout";

export default function Post({ params }: typeParams) {
	const post = blog.find(b => link.linkify(b.titleLink ? b.titleLink : b.title) == params.blogId);

	return (
		<LayoutPage>
			<LayoutSection padded>
				<Stack gap={"xl"}>
					<Stack>
						<Image
							src={post?.image}
							alt={post?.title ? post.title : ""}
							radius={"sm"}
							component={NextImage}
							width={1920}
							height={1080}
						/>
					</Stack>

					<Stack gap={"xs"}>
						<Title order={2} fz={"xl"} fw={"bold"}>
							{post?.title}
						</Title>
						<Text
							fz={"xs"}
							fw={500}
							c={"light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"}
						>
							{post?.date}
						</Text>
					</Stack>

					<Stack gap={"xs"}>
						{post?.desc.p.map(item => (
							<Text key={item}>{item}</Text>
						))}
					</Stack>

					{post?.desc.quotes && (
						<Blockquote cite={post?.desc.quotes[0].cite}>{post?.desc.quotes[0].quote}</Blockquote>
					)}

					{post?.desc.list && (
						<Stack>
							{post?.desc.list.map(item => (
								<Stack key={item.title} gap={4}>
									<Title
										order={3}
										fz={"md"}
										fw={"bold"}
										c={"light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"}
									>
										{item.title}
									</Title>
									<Text>{item.desc}</Text>
								</Stack>
							))}
						</Stack>
					)}

					{post?.desc.images && (
						<Grid justify="center">
							{post.desc.images.map(image => (
								<GridCol key={image.title} span={{ base: 12, xs: "auto" }}>
									<Stack>
										<Image
											src={image.image}
											alt={image.title}
											loading="lazy"
											component={NextImage}
											width={1920}
											height={1080}
											radius={"sm"}
										/>
									</Stack>
								</GridCol>
							))}
						</Grid>
					)}
				</Stack>
			</LayoutSection>
		</LayoutPage>
	);
}
