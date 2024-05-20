import React from "react";

import { Modal, Button, Stack, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { IconPhoneIncoming } from "@tabler/icons-react";

import Part from "../../partials";

export default function Callback() {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				centered
				title="Callback request"
				closeButtonProps={{ "aria-label": "Close modal" }}
			>
				<Part.Form.Contact />
			</Modal>

			<Button
				color="sec.3"
				c={"pri.6"}
				fullWidth
				mih={125}
				onClick={open}
				style={{
					transition: "0.25s all ease",
				}}
			>
				<Stack align="center">
					<IconPhoneIncoming size={36} stroke={1.5} />
					<Text fw={"bold"}>Request Callback</Text>
				</Stack>
			</Button>
		</>
	);
}
