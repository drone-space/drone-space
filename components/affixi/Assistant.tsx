"use client";

import React from "react";

import { Affix, Center, Transition } from "@mantine/core";

import ModalClaudeMain from "../modal/claude/Main";

import classes from "./Assistant.module.scss";

export default function Assistant() {
	return (
		<Affix position={{ bottom: "calc(var(--mantine-spacing-xl) * .75)", right: 0 }}>
			<Transition transition="slide-left" mounted={true}>
				{transitionStyles => (
					<div style={transitionStyles} className={classes.box}>
						<Center>
							<ModalClaudeMain />
						</Center>
					</div>
				)}
			</Transition>
		</Affix>
	);
}
