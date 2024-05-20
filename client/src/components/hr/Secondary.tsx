import React from "react";

import { Text } from "@mantine/core";

export default function Secondary() {
	return (
		<Text
			component="hr"
			style={(theme) => ({
				border: `1px solid ${theme.colors.sec[3]}`,
			})}
		></Text>
	);
}
