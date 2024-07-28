import React from "react";

import { Group, Stack, Text, ThemeIcon, Tooltip } from "@mantine/core";

import { IconBrandWhatsapp } from "@tabler/icons-react";

export default function WhatsApp({ children }: { children: React.ReactNode }) {
	return (
		<Tooltip
			color="pri"
			withArrow
			py={3}
			pl={4}
			label={
				<Group gap={"xs"}>
					<ThemeIcon size={32} color="green.4" c={"white"}>
						<IconBrandWhatsapp size={24} stroke={1.5} />
					</ThemeIcon>
					<Stack gap={0}>
						<Text inherit fz={"xs"} lh={1} fw={500}>
							WhatsApp
						</Text>
						<Text inherit fz={10} fw={500}>
							Help Center
						</Text>
					</Stack>
				</Group>
			}
		>
			{children}
		</Tooltip>
	);
}
