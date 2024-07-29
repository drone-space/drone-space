"use client";

import React from "react";

import Link from "next/link";

import { Anchor, Breadcrumbs } from "@mantine/core";

import { IconChevronRight } from "@tabler/icons-react";

import classes from "./Main.module.scss";

import { typeLink } from "@/types/link";
import { useMediaQuery } from "@mantine/hooks";

export default function Main({ data }: { data: typeLink[] }) {
	const active = (breadcrumb: typeLink) => data.indexOf(breadcrumb) == data.length - 1;
	const mobile = useMediaQuery("(max-width: 36em)");

	return (
		<Breadcrumbs
			separator={
				<IconChevronRight
					size={12}
					stroke={2.5}
					color="light-dark(var(--mantine-color-pri-9),var(--mantine-color-sec-4))"
				/>
			}
		>
			{data.map(
				item =>
					data.indexOf(item) < (mobile ? 2 : data.length) && (
						<Anchor
							underline="never"
							key={item.link}
							component={Link}
							href={item.link}
							c={active(item) ? "pri" : undefined}
							className={classes.link}
							onClick={e => e.preventDefault()} // remove top directive if you don't need this
						>
							{item.label}
						</Anchor>
					)
			)}
		</Breadcrumbs>
	);
}
