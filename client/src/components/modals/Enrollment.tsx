import React from "react";

import { Modal, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import Part from "../../partials";

export default function Enrollment({ title }: { title: string }) {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				centered
				title={`${title} Enrollment`}
				closeButtonProps={{ "aria-label": "Close modal" }}
			>
				<Part.Form.Contact />
			</Modal>

			<Button color="sec.3" c={"pri.6"} fullWidth onClick={open}>
				Enroll for {title}
			</Button>
		</>
	);
}
