import React from "react";

import { Affix, Box, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import Partial from "@src/partials";

export default function Navbar() {
	const [scroll] = useWindowScroll();

	return (
		<Affix
			display={{ base: "none", xs: "block" }}
			position={{ left: 0, top: 0, right: 0 }}
		>
			<Transition transition="slide-down" mounted={scroll.y > 240}>
				{(transitionStyles) => (
					<Box style={transitionStyles}>
						<Partial.Navbar.Root />
					</Box>
				)}
			</Transition>
		</Affix>
	);
}
