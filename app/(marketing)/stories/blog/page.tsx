import React from "react";

import Link from "next/link";

import { Grid, GridCol } from "@mantine/core";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import CardBlogMain from "@/components/card/blog/Main";

import blog from "@/data/blog";

export default function Blog() {
	return (
		<LayoutPage>
			<LayoutSection padded>
				<Grid>
					{blog.map(post => (
						<GridCol key={post.title} span={{ base: 12, xs: 6, lg: 4 }}>
							<CardBlogMain data={post} />
						</GridCol>
					))}
				</Grid>
			</LayoutSection>
		</LayoutPage>
	);
}
