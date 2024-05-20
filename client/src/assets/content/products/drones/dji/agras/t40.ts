import image from "../../../../../images";

const t40 = {
	title: {
		long: "DJI Agras T40 (Drone Spraying System)",
		short: "Agras T40",
	},

	specs: [
		"40L spraying payload",
		"Active Phased Array Radar + Binocular Vision",
		"Dual Atomized Spraying System",
		"Supports flight spraying/spreading and RC mapping",
		"Core Modules IPX6K",
	],

	price: {
		former: "2,110,000",
		// latter: "1,950,000",
		// change: "-7.1"
	},

	category: "enterprise",

	kit: {
		basic: {
			contents: [
				"Aircraft X1",
				"Remote Controller x 1",
				"Remote Controller Intelligent Battery x 1",
				"Intelligent Battery Charging Hub x 1",
				"Remote Controller Lanyard x 1",
				"Coaxial Twin Rotor",
			],
		},

		flyMore: null,
	},

	accessories: {
		battery: {
			specs: [
				"Battery Model: BAX601 -30000mAh-52.22V",
				"Weight: ~ 12kg",
				"3 phase 240-volt outlet",
				"Protection Rating: IPX6K",
				"Drone compatibility: T40",
				"Cycles in assurance (12 months or certain times: 1,500 cycles)",
			],
			price: {
				former: "390,000",
				// latter: "290,000",
				// change: "-2.6"
			},
		},
		other: [
			{
				image: image.products.drone.dji.agras.t40.accessories.other.generator,
				title: {
					long: "D12000iE Multifunctional Inverter Generator",
					short: "D12000iE Generator",
				},
				specs: [
					"Compatibility for battery: T40 & T30 battery",
					"Weight: 101kg",
					"Volume: 30L",
					"Max power: 18500 W",
					"Charging power: 7200W",
					"DC output: 42-59.92V/9000W",
					"Charging time: 9-minutes",
					"Engine oil: SJ 10W-40",
					"Ultra-fast charging",
					"D12000iE Generator Extended Cable",
				],
				price: {
					former: "670,000",
					// latter: "592,000",
					// change: "-11.6"
				},
			},

			{
				image: image.products.drone.dji.agras.t40.accessories.other.spreader,
				title: {
					long: "Spreading System",
					short: "Spreading System",
				},
				specs: [
					"Applicable Materials - Solid dry particles - diameter 0.5 to 5 mm",
					"Spread Tank Volume 70L",
					"Spread Tank Internal Load 50kg",
					"Spread Width of Spreading System 11m",
				],
				price: {
					former: "140,000",
					// latter: "136,000",
					// change: "-2.9"
				},
			},
		],
	},
};

export default t40;
