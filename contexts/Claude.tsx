"use client";

import React, { createContext, useState, ReactNode, useEffect } from "react";

export interface typeClaudeTurn {
	role: "user" | "assistant" | string;
	content: string;
}

// Define the shape of your context's data
interface ClaudeContextType {
	newConversation: boolean;
	setNewConversation: React.Dispatch<React.SetStateAction<boolean>>;
	submitted: boolean;
	setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
	generating: boolean;
	setGenerating: React.Dispatch<React.SetStateAction<boolean>>;
	conversation: typeClaudeTurn[];
	setConversation: React.Dispatch<React.SetStateAction<typeClaudeTurn[]>>;

	clearConversation: () => void;
}

// Create a context with a default value (optional)
const ClaudeContext = createContext<ClaudeContextType | undefined>(undefined);

const ClaudeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const defaultConversation = [
		{
			role: "assistant",
			content:
				"Hi! I'm Claude, an AI model trained provide Drone Space related content. Ask me anything you wish to know about the company.",
		},
		// {
		// 	role: "user",
		// 	content: "Hello. Are you open on saturdays?",
		// },
		// {
		// 	role: "assistant",
		// 	content:
		// 		"Welcome to Drone Space. Unfortunately, we don't open on saturdays. Our office hours are between 9am and 5pm from monday to friday.",
		// },
		// {
		// 	role: "user",
		// 	content:
		// 		"When is the next intake? I'd like to start training as soon as possible. Also, tell me how Drone Space handles the issuance of licenses.",
		// },
		// {
		// 	role: "assistant",
		// 	content: "Intakes happpen every monday and tuesday?",
		// },
		// {
		// 	role: "user",
		// 	content: "Hello. Are you open on saturdays?",
		// },
		// {
		// 	role: "assistant",
		// 	content:
		// 		"Welcome to Drone Space. Unfortunately, we don't open on saturdays. Our office hours are between 9am and 5pm from monday to friday.",
		// },
		// {
		// 	role: "user",
		// 	content:
		// 		"When is the next intake? I'd like to start training as soon as possible. Also, tell me how Drone Space handles the issuance of licenses.",
		// },
		// {
		// 	role: "assistant",
		// 	content: "Intakes happpen every monday and tuesday?",
		// },
	];

	const [conversation, setConversation] = useState<typeClaudeTurn[]>(() => {
		// Check if we are in a browser environment before accessing localStorage
		if (typeof window !== "undefined") {
			const savedState = localStorage.getItem("ClaudeConversation");
			return savedState ? JSON.parse(savedState) : defaultConversation;
		}

		return defaultConversation;
	});
	const [newConversation, setNewConversation] = useState(conversation.length < 2);
	const [submitted, setSubmitted] = useState(false);
	const [generating, setGenerating] = useState(false);

	useEffect(() => {
		// Save state to local storage whenever it changes
		localStorage.setItem("ClaudeConversation", JSON.stringify(conversation));
	}, [conversation]);

	const clearConversation = () => {
		localStorage.removeItem("ClaudeConversation");
		setConversation(defaultConversation);
		setNewConversation(true);
	};

	return (
		<ClaudeContext.Provider
			value={{
				newConversation,
				setNewConversation,
				submitted,
				setSubmitted,
				generating,
				setGenerating,
				conversation,
				setConversation,
				clearConversation,
			}}
		>
			{children}
		</ClaudeContext.Provider>
	);
};

export { ClaudeContext, ClaudeProvider };
