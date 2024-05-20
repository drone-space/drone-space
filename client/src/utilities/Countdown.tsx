import { useState, useEffect } from "react";

import { Grid, Stack, Text } from "@mantine/core";

import classes from "./Countdown.module.css";

export default function Countdown() {
	const targetDate: Date = new Date(2023, 9, 14, 23, 59, 59);

	interface typeTimeRemaining {
		months: number;
		days: number;
		hours: number;
		minutes: number;
		seconds: number;
	}

	const calculateTimeRemaining = (): typeTimeRemaining => {
		const now = new Date();
		const timeDifference = Math.max(
			targetDate.getTime() - now.getTime(),
			0
		);

		if (timeDifference > 0) {
			const seconds = Math.floor((timeDifference / 1000) % 60);
			const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
			const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
			const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

			let remainingDays = days;
			let months = 0;

			while (remainingDays >= 30) {
				const targetMonthDays = new Date(
					targetDate.getFullYear(),
					targetDate.getMonth() + months + 1,
					0
				).getDate();
				if (remainingDays >= targetMonthDays) {
					remainingDays -= targetMonthDays;
					months++;
				} else {
					break;
				}
			}

			return {
				months,
				days: remainingDays,
				hours,
				minutes,
				seconds,
			};
		} else {
			return {
				months: 0,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
		}
	};

	const [timeRemaining, setTimeRemaining] = useState<typeTimeRemaining>(
		calculateTimeRemaining()
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeRemaining(calculateTimeRemaining());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Grid w={"100%"} gutter={"xl"}>
			{timeRemaining.months !== 0 && (
				<Grid.Col span={"auto"}>
					<Stack align="center" gap={"xs"} className={classes.col}>
						<Text fz={32} fw={500} lh={1} c={"sec.3"}>
							{timeRemaining.months}
						</Text>
						<Text fz={"xl"}>Months</Text>
					</Stack>
				</Grid.Col>
			)}
			{timeRemaining.days !== 0 && (
				<Grid.Col span={"auto"}>
					<Stack align="center" gap={"xs"} className={classes.col}>
						<Text fz={32} fw={500} lh={1} c={"sec.3"}>
							{timeRemaining.days}
						</Text>
						<Text fz={"xl"}>Days</Text>
					</Stack>
				</Grid.Col>
			)}
			{timeRemaining.hours !== 0 && (
				<Grid.Col span={"auto"}>
					<Stack align="center" gap={"xs"} className={classes.col}>
						<Text fz={32} fw={500} lh={1} c={"sec.3"}>
							{timeRemaining.hours}
						</Text>
						<Text fz={"xl"}>Hours</Text>
					</Stack>
				</Grid.Col>
			)}
			{timeRemaining.minutes !== 0 && (
				<Grid.Col span={"auto"}>
					<Stack align="center" gap={"xs"} className={classes.col}>
						<Text fz={32} fw={500} lh={1} c={"sec.3"}>
							{timeRemaining.minutes}
						</Text>
						<Text fz={"xl"}>Minutes</Text>
					</Stack>
				</Grid.Col>
			)}
			{timeRemaining.seconds !== 0 && (
				<Grid.Col span={"auto"}>
					<Stack align="center" gap={"xs"} className={classes.col}>
						<Text fz={32} fw={500} lh={1} c={"sec.3"}>
							{timeRemaining.seconds}
						</Text>
						<Text fz={"xl"}>Seconds</Text>
					</Stack>
				</Grid.Col>
			)}
		</Grid>
	);
}
