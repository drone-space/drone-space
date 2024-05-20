import image from "../../../../../images";

const mavic3Multispectral = {
	title: {
		long: "DJI Mavic 3M Enterprise",
		short: "Mavic 3M",
	},

	specs: [
		"Ideal for Agriculture & Surveying",
		"2 Years of DJI Care Enterprise Basic",
		"20MP RGB & 4 x 5MP Multispectral Camera",
		"RTK for Centimeter-Level Precision",
		"Omnidirectional Obstacle Avoidance",
		"Up to 43 Minutes of Cruise Time",
	],

	price: {
		former: "909,000",
		// latter: "790,000",
		//  change: "-12.1"
	},

	category: "enterprise",

	kit: {
		basic: {
			contents: [
				"Aircraft x 1",
				"Remote Controller x 1",
				"Propeller (Pair) x 4",
				"Intelligent Flight Battery x 1",
				"AC Power Adapter x 1",
				"AC Power Cable x 1",
				"Battery Charging Hub x 1",
				"Gimbal Clamp x 1",
				"Micro USB Cable x 1",
			],
		},
	},

	accessories: {
		battery: {
			title: {
				long: "Intelligent Battery",
				short: null,
			},
			specs: [
				"Offers a max flight time of 46 minutes",
				"Compatibility: DJI Mavic 3 Pro, DJI Mavic 3 Pro Cine, DJI Mavic 3",
				"Classic, DJI Mavic 3, DJI Mavic 3 Cine, DJI Mavic 3 Enterprise Series",
			],
			price: {
				former: "49,000",
				// latter: "41,000",
				// change: "-16.3"
			},
		},
		other: [
			{
				image: image.products.drone.dji.mavic.mav3multispectral.accessories.other.tripod,
				title: {
					long: "D-RTK 2 Mobile Station + Tripod",
					short: "D-RTK 2 Station & Tripod",
				},
				specs: "Gain improved relative accuracy with centimeter-level precision positioning data using the D-RTK 2 High Precision GNSS Mobile Station, which supports all major global satellite navigation systems and provides real-time differential corrections.",
				price: {
					former: "680,000",
					// latter: "590,000",
					// change: "-13.2"
				},
			},
		],
	},
};

export default mavic3Multispectral;
