import { Container, createTheme } from "@mantine/core";

const droneSpace = createTheme({
	colors: {
		pri: [
			"#e6ebff",
			"#bac3fa",
			"#8d9af1",
			"#6172eb",
			"#354ae4",
			"#1c31ca",
			"#14269e", // src 6
			"#0d1b72",
			"#061047",
			"#01041d",
		],
		sec: [
			"#dffcfa",
			"#beefec",
			"#9ae3de",
			"#74d7d1", // src 3
			"#51ccc4",
			"#38b3aa",
			"#288b85",
			"#18635f",
			"#063d39",
			"#001614",
		],
	},
	primaryColor: "pri",
	primaryShade: 6,
	defaultGradient: {
		from: "pri",
		to: "sec",
		deg: 135,
	},

	defaultRadius: "xs",
	cursorType: "pointer",

	components: {
		Container: Container.extend({
			defaultProps: { size: "lg" },
		}),
	},
});

export default droneSpace;
