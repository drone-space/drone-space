"use client";

import React from "react";

import NextImage from "next/image";

import { ActionIcon, Affix, Anchor, Image, Stack, Transition } from "@mantine/core";
import { useWindowScroll } from "@mantine/hooks";

import contact from "@/data/contact";

export default function Whatsapp() {
	const [scroll, scrollTo] = useWindowScroll();
	const link = contact.socials.find(s => s.title.includes("WhatsApp"));

	return (
		<Affix position={{ bottom: "calc(var(--mantine-spacing-xl) * 1)", right: 0 }}>
			<Transition transition="slide-left" mounted={scroll.y > 80}>
				{transitionStyles => (
					<div style={transitionStyles}>
						<ActionIcon
							size={28}
							onClick={() => scrollTo({ y: 0 })}
							color="sec.3"
							style={{
								borderBottomRightRadius: 0,
								borderTopRightRadius: 0,
							}}
							component="a"
							href={link?.link}
							target="_blank"
						>
							<Stack>
								<Image
									src={link?.icon}
									alt={link?.title ? link.title : ""}
									title={link?.title}
									component={NextImage}
									height={20}
									width={20}
									priority
								/>
							</Stack>
						</ActionIcon>
					</div>
				)}
			</Transition>
		</Affix>
	);
}
