const mavic3Classic = {
	title: { long: "DJI Mavic 3 Classic", short: "Mavic 3 Classic" },

	specs: [
		"4/3 CMOS Hasselblad Camera",
		"5.1K/50fps Professional Imagery",
		"Hasselblad Natural Colour Solution",
		"46-Min Max Flight Time",
		"Omnidirectional Obstacle Sensing",
		"15km HD Video Transmission",
		"Advanced RTH",
		"Night Mode for Video Recording",
	],

	price: {
		former: "396,000",
		// 	latter: "360,000",
		// change: "-6.7"
	},

	category: "camera",

	kit: {
		basic: {
			contents: [
				"DJI Mavic 3 classic x1",
				"DJI Mavic 3 RC x1",
				"DJI Mavic 3 Intelligent Battery x1 (46 mins)",
				"DJI Mavic 3 Low noise Propellers (Pair)",
				"DJI Mavic 3 65W Portable Charger",
				"DJI Mavic 3 Classic Storage Cover x1",
				"Spare DJI RC Control Sticks (pair)",
			],
		},

		flyMore: {
			contents: [
				"DJI Mavic 3 Intelligent Flight Battery × 2",
				"DJI Mavic 3 100W Battery Charging Hub × 1",
				"DJI 65W Car Charger × 1",
				"DJI Mavic 3 Low-Noise Propellers (pair) × 3",
				"DJI Convertible Carrying Bag × 1",
				"Shoulder Bag × 1",
			],

			price: {
				former: "125,000",
				// latter: "120,000",
				// change: "-4"
			},
		},
	},

	accessories: {
		battery: {
			title: { long: "Intelligent Battery", short: null },
			specs: [
				"Model: BWX260-5000-15.4",
				"Capacity: 5000 mAh",
				"Battery Type: LiPo 4S",
				"Flight Tine - 46 Minutes",
			],
			price: {
				former: "55,000",
				// latter: "44,000",
				// change: "-20",
			},
		},
		other: null,
	},
};

export default mavic3Classic;
