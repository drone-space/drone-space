import React from "react";
import ReactDOM from "react-dom/client";

import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "@mantine/notifications/styles.css";

import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";

import droneSpace from "./theme";

import App from "./pages/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<MantineProvider theme={droneSpace} defaultColorScheme="light">
			<Notifications limit={3} />
			<App />
		</MantineProvider>
	</React.StrictMode>
);
