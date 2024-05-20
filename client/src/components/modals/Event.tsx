import React from "react";

import { Anchor, Button, Center, Group, Modal, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import { IconCalendarEvent, IconChevronRight } from "@tabler/icons-react";

import classes from "./Event.module.scss";

const aiSiteLink = "https://aiconference.co.ke/";

export default function Event({ img, active }: { img: string; active: boolean }) {
	const [opened, { open, close }] = useDisclosure(active);

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				centered
				classNames={{ close: classes.close }}
				size={"xl"}
				// title={"Join us at the first ever AI Conference in Nairobi"}
				withCloseButton={false}
				closeButtonProps={{ "aria-label": "Close modal" }}
			>
				<Stack>
					<Anchor href={aiSiteLink} target="_blank">
						<Center>
							<img src={img} alt={"Gallery Image"} loading="lazy" width={"100%"} />
						</Center>
					</Anchor>
					<Group justify="center">
						<Button
							rightSection={<IconChevronRight size={16} />}
							component="a"
							href={aiSiteLink}
							target="_blank"
						>
							Go to the AI Conference website
						</Button>
					</Group>
				</Stack>
			</Modal>

			<Button
				onClick={open}
				size="xs"
				color="sec.4"
				c={"pri.6"}
				leftSection={<IconCalendarEvent size={16} stroke={1.5} />}
			>
				AI Conference
			</Button>
		</>
	);
}
