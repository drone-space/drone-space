"use client";

import React, { useState } from "react";

import { ActionIcon, Box, Container, Group, Text, Transition } from "@mantine/core";

import { IconRosetteDiscount, IconX } from "@tabler/icons-react";

import LayoutSection from "@/layouts/Section";
import ModalContactTraining from "@/components/modal/contact/Training";

import classes from "./Main.module.scss";

export default function Main() {
	const [visible, setVisible] = useState(true);

	return (
		<Transition transition="slide-down" mounted={visible}>
			{transitionStyles => (
				<LayoutSection style={transitionStyles} className={classes.bar} shadowed>
					<Container size={"responsive"} pos={"relative"}>
						<Group justify="center" w={{ base: "80%", sm: "100%" }}>
							<ModalContactTraining>
								<Group className={classes.group}>
									<Group visibleFrom="xs">
										<IconRosetteDiscount size={20} stroke={2} />
									</Group>

									<Text fz={{ base: "xs", lg: "sm" }}>
										RPL course discount (
										<Text inherit component="span" fw={"bold"} fz={"xs"}>
											<Text inherit component="span" td={"line-through"}>
												170,000/-
											</Text>{" "}
											136,000/-
										</Text>
										). Enroll now for {((170000 - 136000) / 170000) * 100}% off. Inclusive of
										medical.
									</Text>
								</Group>
							</ModalContactTraining>

							<ActionIcon
								size={24}
								variant="subtle"
								className={classes.close}
								onClick={() => setVisible(false)}
							>
								<IconX size={16} stroke={1.5} />
							</ActionIcon>
						</Group>
					</Container>
				</LayoutSection>
			)}
		</Transition>
	);
}
