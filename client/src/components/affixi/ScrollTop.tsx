import React from "react";

import { Affix, Button, Transition, rem } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import { IconArrowUp } from "@tabler/icons-react";

export default function ScrollTop() {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<Affix
			display={{ base: "none", xs: "block" }}
			position={{ bottom: 20, right: 20 }}
		>
			<Transition transition="slide-up" mounted={scroll.y > 0}>
				{(transitionStyles) => (
					<Button
						leftSection={
							<IconArrowUp
								style={{ width: rem(16), height: rem(16) }}
							/>
						}
						style={transitionStyles}
						onClick={() => scrollTo({ y: 0 })}
						size="xs"
						color="sec.3"
						c={"pri.6"}
					>
						Top
					</Button>
				)}
			</Transition>
		</Affix>
	);
}
