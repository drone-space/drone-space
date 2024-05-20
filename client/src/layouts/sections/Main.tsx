import React from "react";

import { Box, Divider, Stack, Text, Title } from "@mantine/core";

export default function Main({
	title,
	desc,
	bg,
	children,
}: {
	title?: { plain: string; highlight: string } | undefined;
	desc?: string | React.ReactNode | undefined;
	bg?: string | undefined;
	children: React.ReactNode;
}) {
	return (
		<Box component="section" py={64} bg={bg}>
			<Stack gap={48}>
				{title && (
					<Stack gap={"xl"} align="center">
						<Stack gap={4} align="center">
							<Title order={2} ta={"center"}>
								{title.plain}{" "}
								<Text component="span" inherit c={"pri"}>
									{title.highlight}
								</Text>
							</Title>
							<Divider size={"sm"} color="pri" w={160} />
						</Stack>
						<Text ta={"center"} w={{ base: "100%", md: "75%" }}>
							{desc}
						</Text>
					</Stack>
				)}
				<div>{children}</div>
			</Stack>
		</Box>
	);
}
