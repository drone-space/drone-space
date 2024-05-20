import React from "react";

import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Part from "../../partials";

export default function Purchase() {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal opened={opened} onClose={close} title="Drone Purchase">
				<Part.Form.Contact />
			</Modal>

			<Button color="pri.6" fullWidth onClick={open}>
				Contact Seller
			</Button>
		</>
	);
}
