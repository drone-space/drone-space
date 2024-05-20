import React, { useEffect, useState } from "react";

import { Grid, GridCol, Stack, Text } from "@mantine/core";

import timer from "@src/utilities/timers";

import classes from "./Countdown.module.scss";

export default function Countdown() {
	const target = new Date(2023, 11, 24, 23, 59, 59);

	const [time, setTime] = useState(timer.countdown(target));

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(timer.countdown(target));
		}, 1000);

		return () => clearInterval(interval);
	});

	const details = [
		{
			unit: "Month",
			time: time.months,
		},
		{
			unit: "Day",
			time: time.days,
		},
		{
			unit: "Hour",
			time: time.hours,
		},
		{
			unit: "Minute",
			time: time.minutes,
		},
		{
			unit: "Second",
			time: time.seconds,
		},
	];

	return (
		<Grid
			align="center"
			fz={{ base: 24, xs: 28, sm: 32, md: 36 }}
			fw={500}
			lh={1}
		>
			{details.map((item) => (
				<GridCol key={item.unit} span={"auto"}>
					<Stack align="center" gap={"xs"} className={classes.col}>
						<Text component="span" inherit fz={"md"}>
							{item.time}
						</Text>
						<Text inherit tt={"uppercase"} fz={"xs"} c={"sec.3"}>
							{item.unit}
							{item.time != 1 && <>s</>}
						</Text>
					</Stack>
				</GridCol>
			))}
		</Grid>
	);
}
