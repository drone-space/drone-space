"use client";

import input from "./components/inputs";
import notification from "./components/notification";
import container from "./components/container";
import title from "./components/title";
import text from "./components/text";

import {
	Container,
	Notification,
	PasswordInput,
	Select,
	Text,
	TextInput,
	Textarea,
	Title,
	createTheme,
	rem
} from "@mantine/core";

const projectName = createTheme({
	/** Controls focus ring styles. Supports the following options:
	 *  - `auto` – focus ring is displayed only when the user navigates with keyboard (default value)
	 *  - `always` – focus ring is displayed when the user navigates with keyboard and mouse
	 *  - `never` – focus ring is always hidden (not recommended)
	 */
	focusRing: "auto",

	/** Class added to the elements that have focus styles, for example, `Button` or `ActionIcon`.
	 *  Overrides `theme.focusRing` property.
	 */
	focusClassName: "focus",

	/** Class added to the elements that have active styles, for example, `Button` and `ActionIcon` */
	activeClassName: "active",

	// color
	colors: {
		pri: [
			"#edeffd",
			"#d6daf5",
			"#aab1ec",
			"#7a86e6",
			"#5362df",
			"#3c4adc",
			"#313fdb",
			"#2431c3",
			"#1e2caf",
			"#13259a" // src
		],
		sec: [
			"#e1fdfd",
			"#d3f6f4",
			"#aeeae6",
			"#85dcd7", // src
			"#63d2cb",
			"#4ccbc4",
			"#3bc8c0",
			"#28b1a9",
			"#149d97",
			"#008982"
		]
	},

	/** Key of `theme.colors`, hex/rgb/hsl values are not supported.
	 *  Determines which color will be used in all components by default.
	 *  Default value – `blue`.
	 * */
	primaryColor: "pri",

	/** Index of theme.colors[color].
	 *  Primary shade is used in all components to determine which color from theme.colors[color] should be used.
	 *  Can be either a number (0–9) or an object to specify different color shades for light and dark color schemes.
	 *  Default value `{ light: 6, dark: 8 }`
	 *
	 *  For example,
	 *  { primaryShade: 6 } // shade 6 is used both for dark and light color schemes
	 *  { primaryShade: { light: 6, dark: 7 } } // different shades for dark and light color schemes
	 * */
	primaryShade: { light: 9, dark: 9 },

	defaultGradient: {
		from: "pri",
		to: "sec",
		deg: 45
	},

	/** Key of `theme.radius` or any valid CSS value. Default `border-radius` used by most components */
	defaultRadius: "sm",

	/** Determines whether text color must be changed based on the given `color` prop in filled variant
	 *  For example, if you pass `color="blue.1"` to Button component, text color will be changed to `var(--mantine-color-black)`
	 *  Default value – `false`
	 * */
	autoContrast: true,

	/** Determines which cursor type will be used for interactive elements
	 * - `default` – cursor that is used by native HTML elements, for example, `input[type="checkbox"]` has `cursor: default` styles
	 * - `pointer` – sets `cursor: pointer` on interactive elements that do not have these styles by default
	 */
	cursorType: "pointer",

	components: {
		PasswordInput: PasswordInput.extend(input.password),
		Select: Select.extend(input.select),
		TextInput: TextInput.extend(input.text),
		Textarea: Textarea.extend(input.textarea),

		Container: Container.extend(container),
		Title: Title.extend(title),
		Text: Text.extend(text),
		Notification: Notification.extend(notification)
	}
});

export default projectName;
