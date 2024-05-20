import React from "react";
import { useParams } from "react-router";

import {
	AspectRatio,
	Blockquote,
	Container,
	Grid,
	GridCol,
	Group,
	Image,
	List,
	ListItem,
	Stack,
	Text,
	Title,
} from "@mantine/core";

import Layout from "@src/layouts";

import data from "@src/data";
import utility from "@src/utilities";
import Component from "@src/components";
import Partial from "@src/partials";

export default function Post() {
	const { post } = useParams();

	const blog = data.blogs.find(
		(item) => utility.parser.linkify(item.title) == post
	);

	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			aside={
				<Layout.Section.Main>
					<Partial.Aside.Blog />
				</Layout.Section.Main>
			}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				{blog && (
					<Stack gap={"md"}>
						<AspectRatio ratio={1920 / 1080}>
							<Image
								src={blog.image}
								alt={blog.title}
								radius={"xs"}
							/>
						</AspectRatio>
						<Container size={"sm"}>
							<Stack gap={"md"}>
								<Stack gap={"xs"}>
									<Title order={2}>{blog.title}</Title>
									<Group
										gap={"xs"}
										fz={"xs"}
										fw={500}
										c={"pri.6"}
									>
										<Text
											component="p"
											fz={"inherit"}
											fw={"inherit"}
										>
											{blog.date}
										</Text>{" "}
										/
										<Text
											component="p"
											fz={"inherit"}
											fw={"inherit"}
										>
											{blog.views} Views
										</Text>
										{/* /
												<Text
													component="p"
													fz={"inherit"}
													fw={"inherit"}
												>
													{blog.comments}{" "}
													Comments
												</Text> */}
									</Group>
								</Stack>
								<Stack gap={"lg"} fz={"sm"}>
									<Text inherit>{blog.desc.p[0]}</Text>
									{blog.desc.quotes && (
										<Blockquote
											cite={blog.desc.quotes[0].cite}
										>
											{blog.desc.quotes[0].title}
										</Blockquote>
									)}
									<Text inherit>{blog.desc.p[1]}</Text>
									{blog.desc.images && (
										<Grid align="center">
											{blog.desc.images.map((item) => (
												<GridCol
													key={item.title}
													span={{
														base: 12,
														sm: 4,
													}}
												>
													<Image
														src={item.image}
														alt={item.title}
														loading="lazy"
													/>
												</GridCol>
											))}
										</Grid>
									)}
									<Text inherit>{blog.desc.p[2]}</Text>
									{blog.desc.list && (
										<List
											spacing={"xs"}
											size={"sm"}
											listStyleType="none"
										>
											{blog.desc.list.map((item) => (
												<ListItem key={item.title}>
													<Text
														component="span"
														inherit
														fw={500}
														c={"pri.6"}
													>
														{item.title}
													</Text>
													: {item.desc}
												</ListItem>
											))}
										</List>
									)}
									<Text inherit>{blog.desc.p[3]}</Text>
									{blog.desc.p.map(
										(item) =>
											blog.desc.p.indexOf(item) > 3 && (
												<Text key={item} inherit>
													{item}
												</Text>
											)
									)}
								</Stack>
							</Stack>
						</Container>
					</Stack>
				)}
			</Layout.Section.Main>
		</Layout.Page>
	);
}
