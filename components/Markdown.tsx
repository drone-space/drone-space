import { ClaudeContext } from "@/contexts/Claude";
import { Text } from "@mantine/core";
import React, { useContext, useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import Typed from "typed.js";

// Define and export the MarkdownComponent
interface MarkdownComponentProps {
	markdown: string;
	animate: boolean;
}

export const MarkdownComponent: React.FC<MarkdownComponentProps> = ({ markdown, animate }) => {
	const markdownRef = useRef<HTMLDivElement>(null);
	const hiddenMarkdownRef = useRef<HTMLDivElement>(null);
	const typedRef = useRef<Typed | null>(null); // Reference to store Typed instance

	const claude = useContext(ClaudeContext);

	if (!claude) {
		throw new Error("Outside Claude Context");
	}

	const { conversation, newConversation } = claude;

	useEffect(() => {
		if (hiddenMarkdownRef.current && markdownRef.current) {
			const renderedHTML = hiddenMarkdownRef.current.innerHTML;

			// Ensure the target element is cleared before initializing Typed.js
			markdownRef.current.innerHTML = "";

			const options = {
				strings: [renderedHTML],
				typeSpeed: 1,
				showCursor: false,
				cursorChar: " ",
				contentType: "html", // Important to tell typed.js to treat the string as HTML
			};

			// Initialize Typed.js instance
			typedRef.current = new Typed(markdownRef.current, options);

			return () => {
				// Destroy Typed instance during cleanup to stop animation
				if (typedRef.current) {
					typedRef.current.destroy();
				}
			};
		}
	}, [markdown, conversation, newConversation]);

	return animate ? (
		<>
			<div ref={hiddenMarkdownRef} style={{ display: "none" }}>
				<Markdown>{markdown}</Markdown>
			</div>
			<div ref={markdownRef} className="markdown-render"></div>
		</>
	) : (
		<div className="markdown-render">{markdown}</div>
	);
};

// Create a root and render the MarkdownComponent on the client side
const App: React.FC = () => {
	const claude = useContext(ClaudeContext);

	if (!claude) {
		throw new Error("Outside Claude Context");
	}

	const { conversation, newConversation } = claude;

	const markdown = "# Hi, *Pluto*!"; // This is just for demonstration, remove or modify this as needed

	useEffect(() => {
		const rootElement = document.getElementById("root");
		if (rootElement) {
			const root = createRoot(rootElement);
			root.render(<MarkdownComponent markdown={markdown} animate />);
		}
	}, [markdown, conversation, newConversation]);

	return <div id="root"></div>;
};

export default App;
