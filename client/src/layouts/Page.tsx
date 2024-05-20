import React from "react";

import { Box, Container, Flex } from "@mantine/core";

export default function Root({
	header,
	nav,
	navSec,
	hero,
	children,
	aside,
	footer,
}: {
	header?: React.ReactNode | undefined;
	nav?: React.ReactNode | undefined;
	navSec?: React.ReactNode | undefined;
	hero?: React.ReactNode | undefined;
	children: React.ReactNode;
	aside?: React.ReactNode | undefined;
	footer?: React.ReactNode | undefined;
}) {
	const content = (
		<Flex direction={{ base: "column", md: "row" }} gap={{ md: "xl" }}>
			<Box
				component="main"
				w={{ base: "100%", md: aside ? "75%" : "100%" }}
			>
				<article>{children}</article>
			</Box>
			{aside && (
				<Box
					component="aside"
					visibleFrom="md"
					style={{
						width: "25%",
						position: "sticky",
						top: 0,
						height: "100%",
					}}
				>
					{aside}
				</Box>
			)}
		</Flex>
	);

	return (
		<>
			<header>
				{header && <>{header}</>}
				{nav && <nav>{nav}</nav>}
				{navSec && <nav>{navSec}</nav>}
				{hero && <>{hero}</>}
			</header>
			{aside ? <Container>{content}</Container> : content}
			{footer && <footer>{footer}</footer>}
		</>
	);
}
