import React from "react";

import { Card, Divider, Stack, Title } from "@mantine/core";

import LayoutSection from "@/layouts/Section";
import CardBlogAside from "@/components/card/blog/Aside";

import blog from "@/data/blog";

import classes from "./Blog.module.scss";

export default function Blog() {
	return (
		<LayoutSection padded>
			<Stack gap={"xl"}>
				<Card className={classes.posts}>
					<Stack gap={24}>
						<Title order={2} fz={"md"} fw={"bold"}>
							Latest Posts
						</Title>
						<Stack>
							{blog.map(
								post =>
									blog.indexOf(post) < 3 && (
										<>
											<CardBlogAside key={post.title} data={post} />
											{blog.indexOf(post) < 3 - 1 && <Divider />}
										</>
									)
							)}
						</Stack>
					</Stack>
				</Card>
			</Stack>
		</LayoutSection>
	);
}
