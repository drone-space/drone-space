"use client";

import React from "react";

import { ActionIcon, Affix, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import { IconArrowUp } from "@tabler/icons-react";

export default function Top() {
	const [scroll, scrollTo] = useWindowScroll();

	return (
		<Affix position={{ bottom: "calc(var(--mantine-spacing-xl) * 2)", right: 0 }}>
			<Transition transition="slide-left" mounted={scroll.y > 80}>
				{transitionStyles => (
					<div style={transitionStyles}>
						<ActionIcon
							size={28}
							onClick={() => scrollTo({ y: 0 })}
							color="sec.3"
							c={"pri.9"}
							style={{
								borderBottomRightRadius: 0,
								borderTopRightRadius: 0,
							}}
						>
							<IconArrowUp size={16} stroke={2} />
						</ActionIcon>
					</div>
				)}
			</Transition>
		</Affix>
	);
}
