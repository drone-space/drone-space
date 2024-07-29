"use client";

import React, { useEffect, useState } from "react";

import { NumberFormatter, Stack, Text } from "@mantine/core";

import countdown from "@/handlers/timers/countdown";
import { notifications } from "@mantine/notifications";
import { IconInfoCircle } from "@tabler/icons-react";

export default function Hero({ dates }: { dates: Date[] }) {
	const [targetDate, setTargetDate] = useState(setActiveDate(dates));
	const [time, setTime] = useState(targetDate ? countdown(targetDate) : undefined);

	useEffect(() => {
		if (targetDate) {
			const interval = setInterval(() => {
				const timeDifference = targetDate.getTime() > new Date().getTime();

				if (!timeDifference) {
					setTargetDate(setActiveDate(dates));

					notifications.show({
						id: "intake-session-over",
						icon: <IconInfoCircle size={16} stroke={1.5} />,
						autoClose: 5000,
						title: "Intake Day!",
						message: `This week's intake is today.`,
						// variant: "success",
					});
				}

				setTime(countdown(targetDate));
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [dates, targetDate]);

	return !time ? null : (
		<Stack gap={8} ta={"end"} mb={-8} visibleFrom="xs">
			<Text
				component="span"
				inherit
				fz={"xl"}
				fw={"bold"}
				c={"light-dark(var(--mantine-color-pri-9),var(--mantine-color-pri-9))"}
				opacity={time ? 1 : 0}
			>
				<NumberFormatter prefix={time.days < 10 ? "0" : undefined} value={time.days} /> :{" "}
				<NumberFormatter prefix={time.hours < 10 ? "0" : undefined} value={time.hours} /> :{" "}
				<NumberFormatter prefix={time.minutes < 10 ? "0" : undefined} value={time.minutes} /> :{" "}
				<NumberFormatter prefix={time.seconds < 10 ? "0" : undefined} value={time.seconds} />
			</Text>

			<Text component="span" inherit fw={500} opacity={!time ? 0 : undefined} my={0}>
				Next Intake
			</Text>
		</Stack>
	);
}

const setActiveDate = (dates: Date[]) => {
	const date = dates.find(date => date.getTime() > new Date().getTime());

	if (!date) {
		return undefined;
	} else {
		return date;
	}
};
