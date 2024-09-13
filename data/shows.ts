import {
	IconBuildingSkyscraper,
	IconConfetti,
	IconNumber1,
	IconNumber2,
	IconNumber3,
	IconNumber4,
	IconSoccerField,
	IconTicket,
} from "@tabler/icons-react";

const shows = {
	features: [
		{
			label: "Advanced Drones",
			item: "Equipped with state-of-the-art LED lights, our drones are capable of producing vibrant colors and dynamic light patterns.",
		},
		{
			label: "Precision Synchronization",
			item: "Our drones are meticulously programmed to perform intricate and perfectly synchronized movements, creating stunning visual effects.",
		},
		{
			label: "Choreographed Displays",
			item: "Each show is expertly choreographed to deliver a seamless and captivating performance, often synchronized with music or other multimedia elements.",
		},
	],
	why: [
		{
			label: "Safety and environmental friendliness",
			item: "Drone light shows are safer and more environmentally friendly than traditional fireworks, with no fire hazards, explosions, or debris.",
		},
		{
			label: "Customization and flexibility",
			item: "Drone light shows can be easily customized to match your brand's identity and messaging, while fireworks offer limited customization options.",
		},
		{
			label: "Precision and control",
			item: "Drone light shows offer greater precision and control over the display, allowing for intricate designs and synchronized movements.",
		},
		{
			label: "Unique experience",
			item: "Drone light shows create a unique and unforgettable experience that sets your brand apart from competitors.",
		},
	],
	talk: [
		"Imagine a sky filled with thousands of dancing lights, choreographed to create breathtaking patterns and messages.",
		"Drone light shows are not just a form of entertainment but also a powerful marketing tool. They offer a unique and unforgettable way to capture attention, make a statement, and create lasting memories.",
		"From product launches to corporate events and national holidays, drone light shows can be adapted to suit a wide range of occasions",
	],
	understand: [
		{
			label: "Technology",
			item: "Drone light shows are made possible through advanced technology, including GPS synchronization, LED lights, and flight control systems.",
		},
		{
			label: "Versatility",
			item: "These shows can create a wide range of shapes, patterns, and messages, making them suitable for various events and occasions.",
		},
		{
			label: "Customization",
			item: "Drone light shows can be customized to match your brand's identity, values, and messaging.",
		},
		{
			label: "Precision",
			item: "The precise control of drones allows for intricate and detailed designs, ensuring a visually stunning performance.",
		},
	],
	advantages: [
		{
			label: "Eco-Friendly",
			item: "Unlike traditional fireworks, our drone light shows produce no harmful smoke, debris, or noise pollution, making them an environmentally responsible choice.",
		},
		{
			label: "Enhanced Safety",
			item: "Drones pose a significantly lower risk of fire and accidents compared to fireworks, ensuring a safe experience for all spectators.",
		},
		{
			label: "Innovation",
			item: "As a cutting-edge technology, drone light shows offer a modern and innovative form of entertainment, setting new standards for visual displays.",
		},
		{
			label: "Reusability",
			item: "Our drones are designed for multiple uses, offering a sustainable and cost-effective alternative to single-use fireworks.",
		},
	],
	applications: [
		{
			icon: IconConfetti,
			label: "Festivals and Holidays",
			item: "Celebrate national holidays such as Mashujaa Day, Jamhuri Day, Christmas, and New Year’s Eve with spectacular drone light shows that create unforgettable experiences for communities.",
		},
		{
			icon: IconBuildingSkyscraper,
			label: "Corporate Events",
			item: "Enhance product launches, corporate anniversaries, and brand promotions with customized drone displays that leave a lasting impression on clients and stakeholders.",
		},
		{
			icon: IconSoccerField,
			label: "Sporting Events",
			item: "Elevate pre-game or halftime shows at major sporting events with dynamic drone performances that engage and entertain fans.",
		},
		{
			icon: IconTicket,
			label: "Public Events",
			item: "Enrich city celebrations, cultural festivals, and community gatherings with captivating light shows that foster a sense of unity and excitement.",
		},
	],
	icons: [{ icon: IconNumber1 }, { icon: IconNumber2 }, { icon: IconNumber3 }, { icon: IconNumber4 }],
	pricing: [
		{
			title: "Small Shows",
			desc: "Up to 100 Drones",
			price: 87000,
		},
		{
			title: "Medium Shows",
			desc: "Up to 200 Drones",
			price: 117000,
		},
		{
			title: "Mid-Large Shows",
			desc: "Up to 300 Drones",
			price: 147000,
		},
		{
			title: "Large Shows",
			desc: "Up to 500+ Drones",
			price: 250000,
		},
		{
			title: "High-End Custom",
			desc: "Depending on level of customization and complexity",
			price: 300000,
		},
	],
	timeline: [
		{
			title: "Preperation Task",
			desc: [
				{
					item: "Site and launch pad selection",
					duration: "1",
				},
				{
					item: "Location check by pilot",
					duration: "1",
				},
				{
					item: "Working out the technical rider for the launch",
					duration: "1",
				},
				{
					item: "Risk assessment and mitigation",
					duration: "1",
				},
				{
					item: "Contract negotiation and signing",
					duration: "1",
				},
			],
		},
		{
			title: "Creative and Pre-production Task",
			desc: [
				{
					item: "Concept discussion with client",
					duration: "1 - 2",
				},
				{
					item: "Preparing the Storyboard",
					duration: "1 - 2",
				},
				{
					item: "Creating the static figures",
					duration: "1 - 2",
				},
				{
					item: "Full animation (10 days before the 1st test flight)",
					duration: "1 - 2",
				},
				{
					item: "Preparing the technical part of the animation, crosscheck designers and pilots",
					duration: "1 - 3",
				},
			],
		},
		{
			title: "Tech Preperation Task",
			desc: [
				{
					item: "Team appointment",
					duration: "1",
				},
				{
					item: "KCAA authorization and permits",
					duration: "1 - 3",
				},
				{
					item: "County permits",
					duration: "1 - 3",
				},
				{
					item: "Site preparation",
					duration: null,
				},
			],
		},
		{
			title: "On-Site Task",
			desc: [
				{
					item: "Team arrival",
					duration: "3 - 4",
				},
				{
					item: "Tests with a small set of drones",
					duration: "3 - 4",
				},
				{
					item: "Dress rehearsal",
					duration: "4",
				},
				{
					item: "Reserve day",
					duration: "4",
				},
				{
					item: "Show time",
					duration: "4",
				},
			],
		},
		{
			title: "Event Activations",
			desc: [
				{
					item: "Soundtrack production of the drone light show",
					duration: "2 - 4",
				},
				{
					item: "Capturing the show",
					duration: "4",
				},
			],
		},
		{
			title: "After The Show",
			desc: [
				{
					item: "Team debrief and packing of equipment",
					duration: "4",
				},
				{
					item: "Preparation and approval of the content publication with client",
					duration: "5",
				},
				{
					item: "Report and delivery of raw footage",
					duration: "5",
				},
			],
		},
	],
};

export default shows;
