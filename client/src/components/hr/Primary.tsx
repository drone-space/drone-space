import React from "react";

import { Text } from "@mantine/core";

export default function Primary() {
	return (
		<Text
			component="hr"
			style={(theme) => ({
				border: `2px solid ${theme.colors.pri[6]}`,
			})}
		></Text>
	);
}
