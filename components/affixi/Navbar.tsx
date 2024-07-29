"use client";

import React, { useEffect, useState } from "react";

import { Affix, Transition } from "@mantine/core";
import { useDebouncedValue, useWindowScroll } from "@mantine/hooks";

import NavbarMain from "@/partials/navbars/Main";

import classes from "./Navbar.module.scss";

export default function Navbar() {
	const [scroll, scrollTo] = useWindowScroll();
	const [mounted, setMounted] = useState(false);
	const [debounced] = useDebouncedValue(scroll.y, 100);

	useEffect(() => (debounced > scroll.y ? setMounted(true) : setMounted(false)), [scroll.y]);

	return (
		<Affix position={{ left: 0, top: 0, right: 0 }}>
			<Transition transition="slide-down" mounted={scroll.y > 80 ? mounted : false}>
				{transitionStyles => (
					<div style={transitionStyles} className={classes.box}>
						<NavbarMain />
					</div>
				)}
			</Transition>
		</Affix>
	);
}
