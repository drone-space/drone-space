import images from "@/assets/images";

const accessories = [
	{
		images: images.products.drones.dji.avata.avata2.accessories.battery,
		title: { long: "DJI Avata 2 Intelligent Flight Battery", short: "Avata 2 Battery" },
		specs: [
			{
				label: "Capacity",
				desc: "2150 mAh",
			},
			{
				label: "Weight",
				desc: "145 g",
			},
			{
				label: "Standard Voltage",
				desc: "14.76 V",
			},
			{
				label: "Max Charging Voltage",
				desc: "17 V",
			},
			{
				label: "Battery Type",
				desc: "Li-ion",
			},
			{
				label: "Energy",
				desc: "31.7 Wh@0.5C",
			},
			{
				label: "Charging Temp",
				desc: "5° to 40° C (41° to 104° F)",
			},
		],
		price: {
			former: "TBD",
			latter: null,
		},
	},

	{
		images: images.products.drones.dji.air.air2s.accessories.battery,
		title: { long: "Mavic Air 2 Intelligent Flight Battery", short: "Mavic Air 2 Battery" },
		specs: [
			{
				label: "Capacity",
				desc: "3750 mAh / 3500 mAh",
			},
			{
				label: "Voltage",
				desc: "11.04 V / 11.55 V",
			},
			{
				label: "Max Charging Voltage",
				desc: "12.6 V / 13.2 V",
			},
			{
				label: "Battery Type",
				desc: "LiPo 3S",
			},
			{
				label: "Energy",
				desc: "41.4 Wh / 40.42 Wh",
			},
			{
				label: "Weight",
				desc: "198 g",
			},
			{
				label: "Max Charging Power",
				desc: "38 W",
			},
		],
		price: null,
	},

	{
		images: images.products.drones.dji.air.air3.accessories.battery,
		title: { long: "Mavic Air 3 Intelligent Flight Battery", short: "Mavic Air 3 Battery" },
		specs: [
			{
				label: "Capacity",
				desc: "4241 mAh",
			},
			{
				label: "Weight",
				desc: "267 g",
			},
			{
				label: "Max Charging Voltage",
				desc: "17 V",
			},
			{
				label: "Battery Type",
				desc: "Li-ion 4S",
			},
			{
				label: "Energy",
				desc: "62.6 Wh",
			},
			{
				label: "Charging Temperature",
				desc: "5° to 40° C (41° to 104° F)",
			},
		],
		price: null,
	},

	{
		images: images.products.drones.huida.hd540s.accessories.other.generator,
		title: {
			long: "HUIDA HD540S Generator",
			short: "HUIDA HD540S Generator",
		},
		specs: [
			{
				label: "Power (fast charging)",
				desc: "230V/8500W socket",
			},
			{
				label: "Power (slow charging)",
				desc: "230V/2300W socket (also as mains power)",
			},
			{
				label: "Principle",
				desc: "Single-phase AC gasoline generator",
			},
			{
				label: "Maximum Power",
				desc: " 8.5KW",
			},
			{
				label: "Rated Power",
				desc: "8KW",
			},
			{
				label: "Tank",
				desc: "38L gasoline tank (No. 92)",
			},
			{
				label: "Ambient Temperature",
				desc: "Upper limit (40°C), lower limit (-5°C)",
			},
		],
		price: {
			former: "TBD",
			latter: null,
		},
	},

	{
		images: images.products.drones.dji.agras.t40.accessories.other.generator,
		title: {
			long: "Agras Series Multifunctional Inverter Generator (D12000iE)",
			short: "Agras Series Generator (D12000iE)",
		},
		specs: [
			{
				label: "Weight",
				desc: "101 KG",
			},
			{
				label: "Charging power",
				desc: "7200 W",
			},
			{
				label: "DC output",
				desc: "42-59.92 V/9000 W",
			},
			{
				label: "Battery Charging Time (one T40 battery)",
				desc: "9-12 mins",
			},
			{
				label: "Fuel Tank Capacity",
				desc: "30 L",
			},
			{
				label: "Starting Method",
				desc: "One-Button Start Switch",
			},
			{
				label: "Max Power of Engine",
				desc: "12000 W",
			},
			{
				label: "Fuel Type",
				desc: "Unleaded gasoline (RON ≥91 (AKI ≥87), alcohol <10%)",
			},
			{
				label: "Reference Fuel Consumption",
				desc: "500 ml/kWh",
			},
			{
				label: "Engine Oil Model",
				desc: "SJ 10W-40",
			},
		],
		price: {
			former: "670,000",
			latter: null,
		},
	},

	{
		images: images.products.drones.huida.hd540s.accessories.other.spreader,
		title: {
			long: "HUIDA HD540S Spreading System",
			short: "HUIDA HD540S Spreading System",
		},
		specs: [
			{
				label: "Maximum spreading capacity",
				desc: "60L/50kg",
			},
			{
				label: "Broadcast width",
				desc: "4-9m",
			},
			{
				label: "Sowing method",
				desc: "Dial type",
			},
			{
				label: "Turntable maximum speed",
				desc: "1100r/min",
			},
			{
				label: "Support particle diameter",
				desc: "0.5 - 6mm dry solid particles",
			},
			{
				label: "Spreading up to",
				desc: "360kg/battery",
			},
		],
		price: {
			former: "TBD",
			latter: null,
		},
	},

	{
		images: images.products.drones.dji.agras.t40.accessories.other.spreader,
		title: {
			long: "Agras Series Spreading System",
			short: "Agras Series Spreading System",
		},
		specs: [
			{
				label: "Applicable Materials",
				desc: "Solid dry particles with a diameter of 0.5 to 5 mm",
			},
			{
				label: "Spread Tank Volume",
				desc: "70 L",
			},
			{
				label: "Spread Tank Internal Load",
				desc: "50 kg",
			},
			{
				label: "Spread Width of Spreading System",
				desc: "7 m",
			},
			{
				label: "Recommended Operating Temperature",
				desc: "0°C to 40°C (32°F to 104°F)",
			},
		],
		price: {
			former: "140,000",
			latter: null,
		},
	},

	{
		images: images.products.drones.huida.hd540s.accessories.battery,
		title: {
			long: "HUIDA HD540S Intelligent Flight Battery",
			short: "HUIDA HD540S Battery",
		},
		specs: [
			{
				label: "Battery assembly specifications",
				desc: "(3.8V30Ah) 18S 30000mAh",
			},
			{
				label: "Shell size",
				desc: "175*275*309mm",
			},
			{
				label: "Battery weight",
				desc: "~ 13.5KG",
			},
			{
				label: "Shell size",
				desc: "175*275*309mm",
			},
			{
				label: "Nominal capacity",
				desc: "30000mAh",
			},
			{
				label: "Minimum capacity",
				desc: "29500mAH",
			},
			{
				label: "Charging voltage",
				desc: "DC 78.3V",
			},
			{
				label: "Nominal voltage",
				desc: "68.4V",
			},
			{
				label: "Protection level",
				desc: "IP54",
			},
			{
				label: "Maximum charging current",
				desc: "120A",
			},
			{
				label: "Maximum discharge current",
				desc: "IP54240A",
			},
		],
		price: {
			former: "TBD",
			latter: null,
		},
	},

	{
		images: images.products.drones.dji.agras.t40.accessories.battery,
		title: { long: "Agras Series Intelligent Flight Battery", short: "Agras Series Battery" },
		specs: [
			{
				label: "Model",
				desc: "BAX601-30000mAh-52.22V",
			},
			{
				label: "Weight",
				desc: "12 kg",
			},
			{
				label: "Capacity",
				desc: "30000 mAh",
			},
			{
				label: "Voltage",
				desc: "52.22 V",
			},
			{
				label: "Protection Rating",
				desc: "IPX6K",
			},
			{
				label: "Cycles in assurance (12 months or certain times",
				desc: "1,500 cycles",
			},
		],
		price: {
			former: "390,000",
			latter: null,
		},
	},

	{
		images: images.products.drones.dji.matrice.matrice30t.accessories.battery,
		title: { long: "Matrice Series Intelligent Flight Battery", short: "Matrice Series Battery" },
		specs: [
			{
				label: "Capacity",
				desc: "5880 mAh",
			},
			{
				label: "Voltage",
				desc: "26.1 V",
			},
			{
				label: "Type",
				desc: "Li-ion 6S",
			},
			{
				label: "Energy",
				desc: "131.6 Wh",
			},
			{
				label: "Weight",
				desc: "685 g",
			},
			{
				label: "Chemical System",
				desc: "LiNiMnCoO2",
			},
		],
		price: {
			former: "75,000",
			latter: null,
		},
	},

	{
		images: images.products.drones.dji.matrice.matrice350.accessories.battery,
		title: { long: "Matrice 350 Intelligent Flight Battery", short: "Matrice 350 Battery" },
		specs: [
			{
				label: "Model",
				desc: "TB65",
			},
			{
				label: "Capacity",
				desc: "5880 mAh",
			},
			{
				label: "Voltage",
				desc: "44.76 V",
			},
			{
				label: "Type",
				desc: "Li-ion",
			},
			{
				label: "Energy",
				desc: "263.2 Wh",
			},
			{
				label: "Weight",
				desc: "1.35 kg",
			},
			{
				label: "Operating Temperature",
				desc: "-20° to 50° C (-4° to 122° F)",
			},
		],
		price: null,
	},

	{
		images: images.products.drones.autel.evo2.accessories.battery,
		title: { long: "Autel Evo 2 Series Intelligent Flight Battery", short: "Autel Evo 2 Series Battery" },
		specs: [
			{
				label: "Capacity",
				desc: "7100 mAh",
			},
			{
				label: "Voltage",
				desc: "11.55 V",
			},
			{
				label: "Battery type",
				desc: "LiPo 3S",
			},
			{
				label: "Energy",
				desc: "82 Wh",
			},
			{
				label: "Weight",
				desc: "365 g",
			},
			{
				label: "Charging temperature range",
				desc: "5℃ to 45℃",
			},
			{
				label: "Max charging power",
				desc: "93W",
			},
			{
				label: "Charging time",
				desc: "90 minutes",
			},
		],
		price: null,
	},

	{
		images: images.products.drones.dji.mavic.m3c.accessories.battery,
		title: { long: "Mavic 3 Series Intelligent Flight Battery", short: "Mavic 3 Series Battery" },
		specs: [
			{
				label: "Capacity",
				desc: "5000 mAh",
			},
			{
				label: "Weight",
				desc: "335.5 g",
			},
			{
				label: "Nominal Voltage",
				desc: "15.4 V",
			},
			{
				label: "Charging Voltage Limit",
				desc: "17.6 V",
			},
			{
				label: "Type",
				desc: "Li-ion 4S",
			},
			{
				label: "Energy",
				desc: "77 Wh",
			},
			{
				label: "Charging Temperature",
				desc: "5° to 40° C (41° to 104° F)",
			},
			{
				label: "Charging Time",
				desc: "96 minutes",
			},
		],
		price: {
			former: "49,000",
			latter: null,
		},
	},

	{
		images: images.products.drones.dji.mavic.m3m.accessories.other.tripod,
		title: { long: "D-RTK 2 Mobile Station and Tripod", short: "Mobile Station and Tripod" },
		specs: [
			{
				label: "GPS",
				desc: "L1 C/A, L2, L5",
			},
			{
				label: "BeiDou",
				desc: "B1, B2, B3",
			},
			{
				label: "GLONASS",
				desc: "F1, F2",
			},
			{
				label: "Galileo",
				desc: "E1, E5A, E5B",
			},

			{
				label: "Single Point Horizontal",
				desc: "1.5 m (RMS)",
			},
			{
				label: "Vertical",
				desc: "3.0 m (RMS)",
			},
			{
				label: "Horizontal (RTK FIX)",
				desc: "1 cm+1 ppm (RMS)",
			},
			{
				label: "Vertical (RTK FIX)",
				desc: "2 cm + 1 ppm (RMS)",
			},
			{
				label: "Operating Temperature",
				desc: "-20° to 55° C (4° to 131° F )",
			},
			{
				label: "Resistance Rating",
				desc: "IP65",
			},
		],
		price: {
			former: "680,000",
			latter: null,
		},
	},

	{
		images: images.products.drones.dji.mini.m3pro.accessories.battery,
		title: { long: "Mini 3 Pro Intelligent Flight Battery", short: "Mini 3 Pro Battery" },
		specs: [
			{
				label: "Capacity",
				desc: "3850 mAh",
			},
			{
				label: "Weight",
				desc: "121 g",
			},
			{
				label: "Voltage",
				desc: "7.38 V",
			},
			{
				label: "Charging Voltage Limit",
				desc: "8.5 V",
			},
			{
				label: "Type",
				desc: "Li-ion",
			},
			{
				label: "Energy",
				desc: "28.4 Wh",
			},
			{
				label: "Charging Temperature Range",
				desc: "5° to 40° C (41° to 104° F)",
			},
			{
				label: "Charging Time (30W Charger, battery mounted)",
				desc: "101 mins",
			},
			{
				label: "Charging Time (30W Charger, battery in Charging Hub)",
				desc: "78 mins",
			},
		],
		price: {
			former: "25,000",
			latter: null,
		},
	},

	{
		images: images.products.drones.dji.neo.accessories.battery,
		title: { long: "Neo Intelligent Flight Battery", short: "DJI Neo Battery" },
		specs: [
			{
				label: "Capacity",
				desc: "1435 mAh",
			},
			{
				label: "Weight",
				desc: "Approx. 45 g",
			},
			{
				label: "Nominal Voltage",
				desc: "7.3 V",
			},
			{
				label: "Max Charging Voltage",
				desc: "8.6 V",
			},
			{
				label: "Battery Type",
				desc: "Li-ion",
			},
			{
				label: "Energy",
				desc: "10.5 Wh",
			},
			{
				label: "Charging Temperature",
				desc: "5° to 40° C",
			},
		],
		price: {
			former: "TBD",
			latter: null,
		},
	},
];

export default accessories;
