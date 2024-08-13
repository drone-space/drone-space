import React from "react";

import LayoutSection from "@/layouts/Section";
import CarouselHome from "@/components/carousels/Home";

import classes from "./Home.module.scss";

export default function Home() {
	return (
		<LayoutSection className={classes.hero}>
			<CarouselHome />
		</LayoutSection>
	);
}
