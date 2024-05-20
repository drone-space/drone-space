import React from "react";

import { Accordion, List, ListItem } from "@mantine/core";

import classes from "./Faq.module.scss";

export interface typeAccordionFaq {
	data: {
		question: string;
		answer: string[];
	}[];
}

export default function Faq({ data }: typeAccordionFaq) {
	return (
		<Accordion
			w={"100%"}
			defaultValue={data[0].question}
			classNames={{
				control: classes.control,
				label: classes.label,
			}}
			order={2}
		>
			{data.map((item) => (
				<Accordion.Item key={item.question} value={item.question}>
					<Accordion.Control>{item.question}</Accordion.Control>
					<Accordion.Panel>
						<List spacing={"xs"} listStyleType="none" withPadding>
							{item.answer.map((item) => (
								<ListItem key={item} fz={"sm"}>
									{item}
								</ListItem>
							))}
						</List>
					</Accordion.Panel>
				</Accordion.Item>
			))}
		</Accordion>
	);
}
