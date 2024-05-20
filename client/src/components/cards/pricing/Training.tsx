import React from "react";

import { Grid, GridCol, Stack, Text, Title } from "@mantine/core";

import Modal from "../../modals";

import Component from "@src/components";

import classes from "./Training.module.scss";

export interface typeCardPricingTraining {
	price: string;
	title: string;
	desc: { title: string; duration: string; price: number }[];
}

export default function Training({
	price,
	title,
	desc,
}: typeCardPricingTraining) {
	return (
		<Stack align="stretch" gap={36} className={classes.card} h={"100%"}>
			<Stack gap={"md"} w={"100%"}>
				<Title order={2} ml={"auto"} className={classes.price}>
					<Text component="span" fz={"md"} c={"white"}>
						Total.
					</Text>{" "}
					{price} /-
				</Title>
				<Title order={3} className={classes.title} fz={24}>
					{title}
				</Title>
			</Stack>

			{desc && <Component.Hr.Secondary />}

			<Stack justify="space-between" w={"100%"} h={"100%"}>
				{desc && (
					<Stack gap={"xs"} mb={"xl"}>
						{desc.map((item) => (
							<Grid
								key={item.title}
								columns={20}
								align="center"
								className={classes.grid}
							>
								<GridCol
									span={{ base: 13, xs: 10, sm: 13, md: 10 }}
								>
									<Text
										component="p"
										my={0}
										fz={{ base: "xs", xs: "sm" }}
									>
										{item.title}
									</Text>
								</GridCol>
								<GridCol
									span={4}
									display={{
										base: "none",
										xs: "block",
										sm: "none",
										md: "block",
									}}
								>
									<Text
										component="p"
										my={0}
										ta="center"
										fz={{ base: "xs", xs: "sm" }}
									>
										{item.duration && item.duration}
									</Text>
								</GridCol>
								<GridCol
									span={{ base: 7, xs: 6, sm: 7, md: 6 }}
								>
									<Text
										component="p"
										my={0}
										ta="end"
										fz={{ base: "xs", xs: "sm" }}
									>
										{item.price
											? `Ksh. ${item.price}`
											: "Free"}
									</Text>
								</GridCol>
							</Grid>
						))}
					</Stack>
				)}

				<Modal.Enrollment title={title} />
			</Stack>
		</Stack>
	);
}
