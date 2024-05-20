import React from "react";

import { Affix, Anchor, Box, Image, Transition } from "@mantine/core";
import { useMediaQuery, useWindowScroll } from "@mantine/hooks";

import Partial from "@src/partials";

import classes from "./Chat.module.scss";
import image from "@src/assets/images";

export default function Chat() {
	const touch = useMediaQuery("(max-width: 62em)");

	return (
		<Affix position={{ bottom: 40, right: 0 }}>
			<Transition transition="slide-left" mounted={true}>
				{transitionStyles => (
					<Box style={transitionStyles}>
						<Box className={classes.chat}>
							<Anchor href="https://wa.me/254713028115" target="_blank" title="Chat on WhatsApp">
								<Image
									src={image.icons.social.whatsapp}
									alt="whatsapp chat"
									w={36}
									className={classes.icon}
								/>
							</Anchor>
						</Box>
					</Box>
				)}
			</Transition>
		</Affix>
	);
}
