"use client";

import React, { useEffect, useState } from "react";

import { NumberFormatter, Text } from "@mantine/core";

import countdown from "@/handlers/timers/countdown";

export default function Modal({ dates }: { dates: Date[] }) {
	const [targetDate, setTargetDate] = useState(setActiveDate(dates));
	const [time, setTime] = useState(targetDate ? countdown(targetDate) : undefined);

	useEffect(() => {
		if (targetDate) {
			const interval = setInterval(() => {
				const timeDifference = targetDate.getTime() > new Date().getTime();

				if (!timeDifference) {
					setTargetDate(setActiveDate(dates));
				}

				setTime(countdown(targetDate));
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [dates, targetDate]);

	return (
		<Text fz={"xs"} fw={500} opacity={!time ? 0 : undefined}>
			Next Intake:
			<br />
			{time ? (
				<Text component="span" inherit c={"pri"}>
					<NumberFormatter prefix={time.days < 10 ? "0" : undefined} value={time.days} /> :{" "}
					<NumberFormatter prefix={time.hours < 10 ? "0" : undefined} value={time.hours} /> :{" "}
					<NumberFormatter prefix={time.minutes < 10 ? "0" : undefined} value={time.minutes} /> :{" "}
					<NumberFormatter prefix={time.seconds < 10 ? "0" : undefined} value={time.seconds} />
				</Text>
			) : (
				<Text component="span" inherit fw={500}>
					00 : 00 : 00 : 00
				</Text>
			)}
		</Text>
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
