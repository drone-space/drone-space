import { images } from '@/assets/images';
import accessories from './accessories';
import { HOSTED_BASE_URL } from './constants';

const baseUrl = `${HOSTED_BASE_URL.DRONE_SPACE}/images`;

const products = [
  {
    images: images.products.drones.dji.avata.avata2.drone,
    title: { long: 'DJI Avata 2', short: 'Avata 2' },
    specs: {
      intro: [
        'Googles 3 HD micro-OLED display',
        'RC Motion 3 Easy Acro',
        'Tight Shots in Super-Wide 4K',
        '1/1.3-inch Image Sensor',
        'Built-in Propeller Guard',
      ],
      aircraft: [
        {
          label: 'Takeoff Weight',
          desc: '377 g',
        },
        {
          label: 'Max Takeoff Altitude',
          desc: '5000 m',
        },
        {
          label: 'Max Flight Time',
          desc: '23 minutes',
        },
        {
          label: 'Max Hovering Time',
          desc: '21 minutes',
        },
        {
          label: 'Max Flight Distance',
          desc: '13 km',
        },
        {
          label: 'Max Wind Speed Resistance',
          desc: '10.7 m/s',
        },
        {
          label: 'Internal Storage',
          desc: '46 GB',
        },
      ],
    },
    price: null,
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/avata/avata2/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/avata/avata2/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/avata/avata2/box/battery.webp`,
          },
          {
            qty: 4,
            item: 'Low Noise Propellers (Pairs)',
            image: `${baseUrl}/products/drones/dji/avata/avata2/box/propellers.webp`,
          },
          {
            qty: 16,
            item: 'DJI Avata 2 Propeller Screw',
            image: `${baseUrl}/products/drones/dji/avata/avata2/more/propeller-screw.webp`,
          },
          {
            qty: 1,
            item: 'Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/avata/avata2/box/protector.webp`,
          },
          {
            qty: 1,
            item: 'Screwdriver',
            image: `${baseUrl}/products/drones/dji/avata/avata2/box/screwdriver.webp`,
          },
          {
            qty: 1,
            item: 'Type-C to Type-C PD Cable',
            image: `${baseUrl}/products/drones/dji/avata/avata2/box/type-c-to-type-c-pd-cable.webp`,
          },
        ],
      },
      flyMore: {
        contents: [
          {
            qty: 2,
            item: 'Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/avata/avata2/more/battery.webp`,
          },
          {
            qty: 1,
            item: 'Two-Way Charging Hub',
            image: `${baseUrl}/products/drones/dji/avata/avata2/more/charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'DJI Googles 3',
            image: `${baseUrl}/products/drones/dji/avata/avata2/more/googles.webp`,
          },
          {
            qty: 1,
            item: 'DJI Goggles 3 -2.0D Corrective Lenses (Pairs)',
            image: `${baseUrl}/products/drones/dji/avata/avata2/more/lenses.webp`,
          },
          {
            qty: 1,
            item: 'DJI RC Motion 3',
            image: `${baseUrl}/products/drones/dji/avata/avata2/more/motion.webp`,
          },
          {
            qty: 1,
            item: 'DJI RC Motion 3 Lanyard',
            image: `${baseUrl}/products/drones/dji/avata/avata2/more/lanyard.webp`,
          },
          {
            qty: 1,
            item: 'DJI Sling Bag',
            image: `${baseUrl}/products/drones/dji/avata/avata2/more/sling-bag.webp`,
          },
          {
            qty: 1,
            item: 'USB-C OTG Cable',
            image: `${baseUrl}/products/drones/dji/avata/avata2/more/usb-c-otg-cable.webp`,
          },
        ],

        price: null,
      },
    },
    accessories: {
      battery: accessories.find((a) => a.title.short == 'Avata 2 Battery'),
      other: null,
    },
    category: 'camera',
    available: true,
    brand: 'dji',
    make: 'avata',
    model: null,
  },

  {
    images: images.products.drones.dji.air.air2s.drone,
    title: { long: 'DJI Mavic Air 2S', short: 'Air 2S' },
    specs: {
      intro: [
        '1-inch image sensor & large 2.4μm pixels',
        '1080p image transmission (upto 12 KM)',
        'UHD Video (5.4K)',
        'One-tap MasterShots feature',
        'APAS 4.0 Four-directional obstacle sensing',
      ],
      aircraft: [
        {
          label: 'Takeoff Weight',
          desc: '595 g',
        },
        {
          label: 'Max Service Ceiling Above Sea Level',
          desc: '5000 m',
        },
        {
          label: 'Max Flight Time (no wind)',
          desc: '31 minutes',
        },
        {
          label: 'Max Hovering Time (no wind)',
          desc: '30 minutes',
        },
        {
          label: 'Max Flight Distance (no wind)',
          desc: '18.5 km',
        },
        {
          label: 'Max Wind Speed Resistance',
          desc: '10.7 m/s',
        },
        {
          label: 'Internal Storage',
          desc: '8 GB',
        },
      ],
    },
    price: {
      former: 250000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/air/2s/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/air/2s/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Remote Controller',
            image: `${baseUrl}/products/drones/dji/air/2s/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/air/2s/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'Battery Charger',
            image: `${baseUrl}/products/drones/dji/air/2s/box/charger.webp`,
          },
          {
            qty: 1,
            item: 'AC Power Cable',
            image: `${baseUrl}/products/drones/dji/air/2s/box/ac-power-cable.webp`,
          },
          {
            qty: 3,
            item: 'Low Noise Propellers (Pairs)',
            image: `${baseUrl}/products/drones/dji/air/2s/box/propellers.webp`,
          },
          {
            qty: 1,
            item: 'Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/air/2s/box/protector.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Data Cable',
            image: `${baseUrl}/products/drones/dji/air/2s/box/usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'RC Cable (USB Type-C Connector)',
            image: `${baseUrl}/products/drones/dji/air/2s/box/rc-n1-rc-cable-(usb-type-c-connector).webp`,
          },
          {
            qty: 1,
            item: 'RC Cable (Lightning Connector)',
            image: `${baseUrl}/products/drones/dji/air/2s/box/rc-n1-rc-cable-(lightning-connector).webp`,
          },
          {
            qty: 1,
            item: 'RC Cable (Standard Micro-USB Connector)',
            image: `${baseUrl}/products/drones/dji/air/2s/box/rc-n1-rc-cable-(standard-micro-usb-connector).webp`,
          },
          {
            qty: 1,
            item: 'Spare Control Sticks (Pair)',
            image: `${baseUrl}/products/drones/dji/air/2s/box/spare-rc-n1-control-sticks-(pair).webp`,
          },
        ],
      },
      flyMore: {
        contents: [
          {
            qty: 2,
            item: 'Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/air/2s/more/battery.webp`,
          },
          {
            qty: 3,
            item: 'Low Noise Propellers (Pairs)',
            image: `${baseUrl}/products/drones/dji/air/2s/more/propellers.webp`,
          },
          {
            qty: 1,
            item: 'ND Filters Set (ND4/8/16/32)',
            image: `${baseUrl}/products/drones/dji/air/2s/more/nd-filters-set.webp`,
          },
          {
            qty: 1,
            item: 'Battery Charging Hub',
            image: `${baseUrl}/products/drones/dji/air/2s/more/battery-charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'Battery to Power Bank Adaptor',
            image: `${baseUrl}/products/drones/dji/air/2s/more/battery-to-power-bank-adaptor.webp`,
          },
          {
            qty: 1,
            item: 'Shoulder Bag',
            image: `${baseUrl}/products/drones/dji/air/2s/more/shoulder-bag.webp`,
          },
        ],

        price: {
          former: 59000,
          latter: null,
        },
      },
    },
    accessories: {
      battery: accessories.find((a) => a.title.short == 'Mavic Air 2 Battery'),
      other: null,
    },
    category: 'camera',
    available: true,
    brand: 'dji',
    make: 'mavic',
    model: 'air',
  },

  {
    images: images.products.drones.dji.air.air3.drone,
    title: { long: 'DJI Mavic Air 3', short: 'Air 3' },
    specs: {
      intro: [
        '1/1.3-inch-CMOS wide-angle camera',
        '3x medium tele camera',
        '46-Min Max Flight Time',
        'Dual-Camera 48MP Photos',
        'Dual-Camera 4K/60fps HDR Videos',
        'New O4 HD Video Transmission',
        'APAS 5.0 Omnidirectional Obstacle Sensing',
      ],
      aircraft: [
        {
          label: 'Takeoff Weight',
          desc: '720 g',
        },
        {
          label: 'Max Horizontal Speed (at sea level, no wind)',
          desc: '21 m/s',
        },
        {
          label: 'Max Flight Time (no wind)',
          desc: '46 minutes',
        },
        {
          label: 'Max Hovering Time (no wind)',
          desc: '42 minutes',
        },
        {
          label: 'Max Flight Distance (no wind)',
          desc: '32 km',
        },
        {
          label: 'Max Wind Speed Resistance',
          desc: '12 m/s',
        },
        {
          label: 'Internal Storage',
          desc: '8 GB',
        },
      ],
    },
    price: {
      former: 290000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/air/air3/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/air/air3/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Remote Controller',
            image: `${baseUrl}/products/drones/dji/air/air3/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/air/air3/box/battery.webp`,
          },
          {
            qty: 3,
            item: 'Low Noise Propellers (Pairs)',
            image: `${baseUrl}/products/drones/dji/air/air3/box/propellers.webp`,
          },
          {
            qty: 1,
            item: 'Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/air/air3/box/protector.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Data Cable',
            image: `${baseUrl}/products/drones/dji/air/air3/box/usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'RC Cable (USB Type-C Connector)',
            image: `${baseUrl}/products/drones/dji/air/air3/box/rc-n1-rc-cable-(usb-type-c-connector).webp`,
          },
          {
            qty: 1,
            item: 'RC Cable (Lightning Connector)',
            image: `${baseUrl}/products/drones/dji/air/air3/box/rc-n1-rc-cable-(lightning-connector).webp`,
          },
        ],
      },
      flyMore: {
        contents: [
          {
            qty: 2,
            item: 'Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/air/air3/more/battery.webp`,
          },
          {
            qty: 3,
            item: 'Low Noise Propellers (Pairs)',
            image: `${baseUrl}/products/drones/dji/air/air3/more/propellers.webp`,
          },
          {
            qty: 1,
            item: 'Battery Charging Hub',
            image: `${baseUrl}/products/drones/dji/air/air3/more/battery-charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'Shoulder Bag',
            image: `${baseUrl}/products/drones/dji/air/air3/more/shoulder-bag.webp`,
          },
        ],
        price: {
          former: 59000,
          latter: null,
        },
      },
    },
    accessories: {
      battery: accessories.find((a) => a.title.short == 'Mavic Air 3 Battery'),
      other: null,
    },
    category: 'camera',
    available: true,
    brand: 'dji',
    make: 'mavic',
    model: 'air',
  },

  // {
  // 	images: images.products.drones.dji.agras.t40.drone,
  // 	title: {
  // 		long: "DJI Agras T40 (Drone Spraying System)",
  // 		short: "Agras T40",
  // 	},
  // 	specs: {
  // 		intro: [
  // 			"40kg spraying payload",
  // 			"50kg spreading payload",
  // 			"Active Phased Array Radar + Binocular Vision",
  // 			"Dual Atomized Spraying System",
  // 			"Supports flight spraying/spreading",
  // 			"Supports flight RC mapping",
  // 			"Core Modules IPX6K",
  // 			"EFI Generator 15% fuel saving",
  // 		],
  // 		aircraft: [
  // 			{
  // 				label: "Total Weight (without battery)",
  // 				desc: "38 kg",
  // 			},
  // 			{
  // 				label: "Total Weight (with battery)",
  // 				desc: "50 kg",
  // 			},
  // 			{
  // 				label: "Takeoff Weight (spraying)",
  // 				desc: "90 kg (at sea level)",
  // 			},
  // 			{
  // 				label: "Takeoff Weight (spreading)",
  // 				desc: "101 kg (at sea level)",
  // 			},
  // 			{
  // 				label: "Max Diagonal Wheelbase",
  // 				desc: "2184 mm",
  // 			},
  // 			{
  // 				label: "Max flight radius can be set",
  // 				desc: "2000 m",
  // 			},
  // 			{
  // 				label: "Max Wind Speed Resistance",
  // 				desc: "6 m/s",
  // 			},
  // 		],
  // 	},
  // 	price: {
  // 		former: 1950000,
  // 		latter: null,
  // 	},
  // 	kit: {
  // 		basic: {
  // 			image: `${baseUrl}/products/drones/dji/agras/t40/box/collective.webp`,
  // 			contents: [
  // 				{
  // 					qty: 1,
  // 					item: "Aircraft",
  // 					image: `${baseUrl}/products/drones/dji/agras/t40/box/aircraft.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Remote Controller",
  // 					image: `${baseUrl}/products/drones/dji/agras/t40/box/controller.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Intelligent Flight Battery",
  // 					image: `${baseUrl}/products/drones/dji/agras/t40/box/battery.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Charging Hub",
  // 					image: `${baseUrl}/products/drones/dji/agras/t40/box/charging-hub.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Coaxial Twin Rotor",
  // 					image: `${baseUrl}/products/drones/dji/agras/t40/box/coaxial.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Remote Controller Lanyard",
  // 					image: `${baseUrl}/products/drones/dji/agras/t40/box/lanyard.webp`,
  // 				},
  // 			],
  // 		},
  // 		flyMore: null,
  // 	},
  // 	accessories: {
  // 		battery: accessories.find(a => a.title.short == "Agras Series Battery"),
  // 		other: [
  // 			accessories.find(a => a.title.short == "Agras Series Generator (D12000iE)"),
  // 			accessories.find(a => a.title.short == "Agras Series Spreading System"),
  // 		].filter(i => i != undefined),
  // 	},
  // 	category: "agriculture",
  // 	available: true,
  // 	brand: "dji",
  // 	make: "agras",
  // 	model: null,
  // },

  {
    images: images.products.drones.dji.agras.t50.drone,
    title: {
      long: 'DJI Agras T50 (Drone Spraying System)',
      short: 'Agras T50',
    },
    specs: {
      intro: [
        '40 kg spraying payload',
        '50 kg spreading payload',
        '2 km O3 Transmission',
        'Spraying Flow Rate (16 L/min)',
        'Spreading Flow Rate (108 kg/min)',
        'Reverse Directional Spray During Flight',
        'Obstacle Avoidance (up to 50°)',
        '4-sprinkler spraying, flow rate 24 L/min',
      ],
      aircraft: [
        {
          label: 'Total Weight (without battery)',
          desc: '39.9 kg',
        },
        {
          label: 'Total Weight (with battery)',
          desc: '52 kg',
        },
        {
          label: 'Takeoff Weight (spraying)',
          desc: '92 kg (at sea level)',
        },
        {
          label: 'Takeoff Weight (spreading)',
          desc: '103 kg (at sea level)',
        },
        {
          label: 'Max Diagonal Wheelbase',
          desc: '2200 mm',
        },
        {
          label: 'Max Configurable Flight Radius',
          desc: '2000 m',
        },
        {
          label: 'Max Wind Speed Resistance',
          desc: '6 m/s',
        },
      ],
    },
    price: {
      former: 2315000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/agras/t50/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/agras/t50/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Remote Controller',
            image: `${baseUrl}/products/drones/dji/agras/t50/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/agras/t50/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'Charging Hub',
            image: `${baseUrl}/products/drones/dji/agras/t50/box/charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'Coaxial Twin Rotor',
            image: `${baseUrl}/products/drones/dji/agras/t50/box/coaxial.webp`,
          },
          {
            qty: 1,
            item: 'Remote Controller Lanyard',
            image: `${baseUrl}/products/drones/dji/agras/t50/box/lanyard.webp`,
          },
        ],
      },
      flyMore: null,
    },
    accessories: {
      battery: accessories.find((a) => a.title.short == 'Agras Series Battery'),
      other: [
        accessories.find(
          (a) => a.title.short == 'Agras Series Generator (D12000iE)'
        ),
        accessories.find(
          (a) => a.title.short == 'Agras Series Spreading System'
        ),
      ].filter((i) => i != undefined),
    },
    category: 'agriculture',
    available: true,
    brand: 'dji',
    make: 'agras',
    model: null,
  },

  {
    images: images.products.drones.huida.hd540s.drone,
    title: {
      long: 'HUIDA HD540S (Drone Spraying System)',
      short: 'HUIDA HD540S',
    },
    specs: {
      intro: [
        'Higher spraying load (40L Spraying)',
        'High Spreading Efficieancy (110 Kg/min)',
        'Higher spreading load (60L Spreading)',
        'Double Magnetic Impeller Pump (24 L/min )',
        '8500W Intelligent charger',
        'HD 5.0 Core computing system',
        '2KM Image Transmission',
      ],
      aircraft: [
        {
          label: 'Structural layout',
          desc: 'Six-axis layout 2100mm',
        },
        {
          label: 'Maximum wheelbase',
          desc: '2100mm (six axes)',
        },
        {
          label: 'Pesticide container capacity',
          desc: '40L',
        },
        {
          label: 'Seed container capacity',
          desc: '60L',
        },
        {
          label: 'Container installation mode',
          desc: 'Plug-in',
        },
        {
          label: 'Max Configurable Flight Radius',
          desc: '2000 m',
        },
        {
          label: 'No-load mass (including battery)',
          desc: '47.5KG',
        },
        {
          label: 'Power battery',
          desc: '30000mAh',
        },
        {
          label: 'Battery charging time (Lithium)',
          desc: '20%-95% about 13min',
        },
        {
          label: 'Reference fuel consumption',
          desc: '500ml/kWh',
        },
        {
          label: 'FPV camera',
          desc: 'Front camera, rear camera',
        },
        {
          label: 'Motor rated power',
          desc: '2000w*6pcs',
        },
        {
          label: 'Remote control signal distance',
          desc: '≤1500m',
        },
        {
          label: 'Flight speed limit',
          desc: '≤10m/s',
        },
      ],
    },
    price: null,
    kit: null,
    accessories: {
      battery: accessories.find((a) => a.title.short == 'HUIDA HD540S Battery'),
      other: [
        accessories.find((a) => a.title.short == 'HUIDA HD540S Generator'),
        accessories.find(
          (a) => a.title.short == 'HUIDA HD540S Spreading System'
        ),
      ].filter((i) => i != undefined),
    },
    category: 'agriculture',
    available: true,
    brand: 'huida',
    make: 'Huida HD Series',
    model: null,
  },

  {
    images: images.products.drones.dji.matrice.matrice30t.drone,
    title: { long: 'DJI Matrice 30T', short: 'Matrice 30T' },
    specs: {
      intro:
        'The DJI Matrice 30T is a high-performance drone designed for professional applications. With its advanced flight capabilities and impressive payload capacity, this drone offers precise aerial data collection, mapping, and inspection solutions. It boasts exceptional stability, intelligent flight modes, and a reliable control system, making it an ideal choice for industrial and commercial operations.',
      aircraft: [
        {
          label: 'Diagonal Wheelbase',
          desc: '668 mm',
        },
        {
          label: 'Weight (incl. two batteries)',
          desc: '3770 ± 10 g',
        },
        {
          label: 'Max Takeoff Weight',
          desc: '4069 g',
        },
        {
          label: 'Max Wind Resistance',
          desc: '12 m/s',
        },
        {
          label: 'Max Hover Time',
          desc: '36 min',
        },
        {
          label: 'Max Flight Time',
          desc: '41 min',
        },
        {
          label: 'Ingress Protection Rating',
          desc: 'IP55',
        },
      ],
    },
    price: {
      former: 1650000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/matrice/matrice30t/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/matrice/matrice30t/box/aircraft.webp`,
          },
          {
            qty: 2,
            item: 'TB30 Flight Battery',
            image: `${baseUrl}/products/drones/dji/matrice/matrice30t/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'DJI RC Plus Remote Controller',
            image: `${baseUrl}/products/drones/dji/matrice/matrice30t/box/controller.webp`,
          },
          {
            qty: 1,
            item: '1671 Propeller (CW)',
            image: `${baseUrl}/products/drones/dji/matrice/matrice30t/box/cw-propellers.webp`,
          },
          {
            qty: 1,
            item: '1671 Propeller (CCW)',
            image: `${baseUrl}/products/drones/dji/matrice/matrice30t/box/ccw-propellers.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Data Cable',
            image: `${baseUrl}/products/drones/dji/matrice/matrice30t/box/usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'Carrying Case',
            image: `${baseUrl}/products/drones/dji/matrice/matrice30t/box/carrying-case.webp`,
          },
          {
            qty: 1,
            item: 'Screws and Tools',
            image: `${baseUrl}/products/drones/dji/matrice/matrice30t/box/screws-tools.webp`,
          },
          {
            qty: 1,
            item: 'BS30 Battery station',
            image: `${baseUrl}/products/drones/dji/matrice/matrice30t/box/battery-station.webp`,
          },
        ],
      },
      flyMore: null,
    },
    accessories: {
      battery: accessories.find(
        (a) => a.title.short == 'Matrice Series Battery'
      ),
      other: null,
    },
    category: 'enterprise',
    available: true,
    brand: 'dji',
    make: 'matrice',
    model: null,
  },

  {
    images: images.products.drones.dji.matrice.matrice350.drone,
    title: { long: 'DJI Matrice 350', short: 'Matrice 350' },
    specs: {
      intro: [
        '55-Min Flight Time',
        'IP55 Rating',
        'O3 Enterprise Transmission',
        'RC Plus',
        '400 Battery Cycles',
        '6-Directional Sensing & Positioning',
        'DJI O3 Enterprise Transmission',
        'Night-Vision FPV Camera',
        'Multi-Payload Support',
      ],
      aircraft: [
        {
          label: 'Diagonal Wheelbase',
          desc: '895 mm',
        },
        {
          label: 'Weight (with single downward gimbal, no batteries)',
          desc: '3.77 kg',
        },
        {
          label: 'Weight (with single downward gimbal, 2 TB65 batteries)',
          desc: '6.47 kg',
        },
        {
          label: "Single Gimbal Damper's Max Payload",
          desc: '960 g',
        },
        {
          label: 'Max Takeoff Weight',
          desc: '9.2 kg',
        },
        {
          label: 'Max Horizontal Speed',
          desc: '23 m/s',
        },
        {
          label:
            'Max Flight Altitude (2110s propellers, takeoff weight ≤ 7.4 kg)',
          desc: '5000 m',
        },
        {
          label:
            'Max Flight Altitude (2112 propellers, takeoff weight ≤ 7.2 kg)',
          desc: '7000 m',
        },
        {
          label: 'Max Wind Speed Resistance',
          desc: '12 m/s',
        },
      ],
    },
    price: {
      former: 1270000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'DJI RC Plus Remote Controller',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'WB37 Intelligent Battery',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/wb37-battery.webp`,
          },
          {
            qty: 2,
            item: 'TB65 Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/tb65-battery.webp`,
          },
          {
            qty: 1,
            item: 'Carrying Case',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/carrying-case.webp`,
          },
          {
            qty: 1,
            item: 'BS65 Intelligent Battery station',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/battery-station.webp`,
          },
          {
            qty: 2,
            item: 'Landing Gear',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/landing-gear.webp`,
          },
          {
            qty: 1,
            item: 'Matrice 350 RTK 2110s Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/propellers.webp`,
          },
          {
            qty: 1,
            item: 'Screws and Tools',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/screws-tools.webp`,
          },
          {
            qty: 1,
            item: 'Cleaning Tools',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/cleaning-tools.webp`,
          },
          {
            qty: 4,
            item: 'Spare Gimbal Damper',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/gimbal-damper.webp`,
          },
          {
            qty: 1,
            item: 'Rubber Port Cover (Set)',
            image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/port-cover.webp`,
          },
        ],
      },
      flyMore: null,
    },
    accessories: {
      battery: accessories.find((a) => a.title.short == 'Matrice 350 Battery'),
      other: null,
    },
    category: 'enterprise',
    available: true,
    brand: 'dji',
    make: 'matrice',
    model: null,
  },

  {
    images: images.products.drones.autel.evo2.drone,
    title: {
      long: 'Autel Evo II Dual 640T (Enterprise Bundle)',
      short: 'Evo II Dual 640T',
    },
    specs: {
      intro: [
        '50MP Ultra-Sensitive Camera',
        '640x512 30Hz New Thermal Imaging Sensor',
        'Multiple Temperature Measurement Modes',
        '360° Obstacle Avoidance',
        '7.9-inch Smart Controller V3',
        '15KM Image Transmission',
      ],
      aircraft: [
        {
          label: 'Max takeoff weight',
          desc: '2000 g',
        },
        {
          label: 'Wheelbase',
          desc: '397 mm',
        },
        {
          label: 'Max Takeoff Altitude',
          desc: '7000 m',
        },
        {
          label: 'Max flight distance (no wind)',
          desc: '22 km',
        },
        {
          label: 'Max Horizontal Speed',
          desc: '23 m/s',
        },
        {
          label: 'Max flight time (no wind)',
          desc: '38 min',
        },
        {
          label: 'Max hovering time (no wind)',
          desc: '33 min',
        },
        {
          label: 'Internal storage',
          desc: '8GB',
        },
        {
          label: 'SD storage',
          desc: '256GB (UHS-3 or Class 10)',
        },
      ],
    },
    price: {
      former: 900000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/autel/evo2/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/autel/evo2/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Remote Controller',
            image: `${baseUrl}/products/drones/autel/evo2/box/controller.webp`,
          },
          {
            qty: 3,
            item: 'Propeller',
            image: `${baseUrl}/products/drones/autel/evo2/box/propeller.webp`,
          },
          {
            qty: 1,
            item: 'RC Charging cable',
            image: `${baseUrl}/products/drones/autel/evo2/box/controller-charger.webp`,
          },
          {
            qty: 1,
            item: 'Battery Charger',
            image: `${baseUrl}/products/drones/autel/evo2/box/battery-charger.webp`,
          },
          {
            qty: 2,
            item: 'Battery',
            image: `${baseUrl}/products/drones/autel/evo2/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'Battery Charging Hub',
            image: `${baseUrl}/products/drones/autel/evo2/box/charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'Carrying Case',
            image: `${baseUrl}/products/drones/autel/evo2/box/carrying-case.webp`,
          },
        ],
      },
      flyMore: null,
    },
    accessories: null,
    category: 'enterprise',
    available: true,
    brand: 'autel',
    make: 'evo',
    model: null,
  },

  {
    images: images.products.drones.dji.mavic.m3c.drone,
    title: { long: 'DJI Mavic 3 Classic', short: 'Mavic 3 Classic' },
    specs: {
      intro: [
        '4/3 CMOS Hasselblad Camera',
        '5.1K HD Video',
        '46-Min Max Flight Time',
        'Omnidirectional Obstacle Sensing',
        'Hasselblad Natural Colour Solution',
        '15km HD Video Transmission',
        'Advanced RTH',
        'Night Mode for Video Recording',
      ],
      aircraft: [
        {
          label: 'Takeoff weight',
          desc: '895 g',
        },
        {
          label: 'Max Takeoff Altitude',
          desc: '6000 m',
        },
        {
          label: 'Max Flight Time',
          desc: '46 minutes',
        },
        {
          label: 'Max Hovering Time',
          desc: '40 minutes',
        },
        {
          label: 'Max Flight Distance',
          desc: '30 km',
        },
        {
          label: 'Max Wind Speed Resistance',
          desc: '12 m/s',
        },
      ],
    },
    price: {
      former: 396000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/mavic/3c/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/mavic/3c/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'DJI Remote Controller',
            image: `${baseUrl}/products/drones/dji/mavic/3c/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'DJI Mavic 3 Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/3c/box/battery.webp`,
          },
          {
            qty: 3,
            item: 'DJI Mavic 3 Low-Noise Propellers (pair)',
            image: `${baseUrl}/products/drones/dji/mavic/3c/box/propeller.webp`,
          },
          {
            qty: 1,
            item: 'DJI 65W Portable Charger',
            image: `${baseUrl}/products/drones/dji/mavic/3c/box/charger.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3c/box/usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'DJI Mavic 3 Classic Storage Cover',
            image: `${baseUrl}/products/drones/dji/mavic/3c/box/storage-cover.webp`,
          },
          {
            qty: 1,
            item: 'Spare DJI RC Control Sticks (pair)',
            image: `${baseUrl}/products/drones/dji/mavic/3c/box/spare-rc-n1-control-sticks-(pair).webp`,
          },
        ],
      },

      flyMore: {
        image: `${baseUrl}/products/drones/dji/mavic/3c/more/collective.webp`,
        contents: [
          {
            qty: 2,
            item: 'Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/3c/more/battery.webp`,
          },
          {
            qty: 1,
            item: 'Battery Charging Hub',
            image: `${baseUrl}/products/drones/dji/mavic/3c/more/charging-hub.webp`,
          },
          {
            qty: 1,
            item: '65W Car Charger',
            image: `${baseUrl}/products/drones/dji/mavic/3c/more/car-charger.webp`,
          },
          {
            qty: 3,
            item: 'Low-Noise Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/mavic/3c/more/propellers.webp`,
          },
          {
            qty: 1,
            item: 'Convertible Carrying Bag',
            image: `${baseUrl}/products/drones/dji/mavic/3c/more/carrying-bag.webp`,
          },
        ],

        price: {
          former: 135000,
          latter: null,
        },
      },
    },
    accessories: {
      battery: accessories.find(
        (a) => a.title.short == 'Mavic 3 Series Battery'
      ),
      other: null,
    },
    category: 'camera',
    available: true,
    brand: 'dji',
    make: 'mavic',
    model: null,
  },

  {
    images: images.products.drones.dji.mavic.m3pro.drone,
    title: { long: 'DJI Mavic 3 Pro', short: 'Mavic 3 Pro' },
    specs: {
      intro: [
        '4/3 CMOS Hasselblad Camera ',
        'Dual Tele Cameras ',
        'Cine Only Tri-Camera Apple ProRes Support ',
        '43-Min Max Flight Time',
        'Omnidirectional Obstacle Sensing',
        '15km HD Video Transmission',
      ],
      aircraft: [
        {
          label: 'Max Horizontal Speed (sea level, no wind)',
          desc: '21 m/s',
        },
        {
          label: 'Max Takeoff Altitude',
          desc: '6000 m',
        },
        {
          label: 'Max Flight Time',
          desc: '46 minutes',
        },
        {
          label: 'Max Hovering Time',
          desc: '37 minutes',
        },
        {
          label: 'Max Flight Distance',
          desc: '28 km',
        },
        {
          label: 'Max Wind Speed Resistance',
          desc: '12 m/s',
        },
        {
          label: 'Internal Storage (Mavic 3 Pro)',
          desc: '8 GB',
        },
        {
          label: 'Internal Storage (Mavic 3 Pro Cine)',
          desc: '1 TB',
        },
      ],
    },
    price: {
      former: 530000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/mavic/3pro/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Remote Controller',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 3 Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/box/battery.webp`,
          },
          {
            qty: 3,
            item: 'Mavic 3 Low-Noise Propellers (pair)',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/box/propellers.webp`,
          },
          {
            qty: 1,
            item: '65W Portable Charger',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/box/charger.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/box/usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 3 Classic Storage Cover',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/box/storage-cover.webp`,
          },
          {
            qty: 1,
            item: 'Spare RC Control Sticks (pair)',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/box/spare-rc-n1-control-sticks-(pair).webp`,
          },
        ],
      },

      flyMore: {
        image: `${baseUrl}/products/drones/dji/mavic/3pro/more/collective.webp`,
        contents: [
          {
            qty: 2,
            item: 'Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/more/battery.webp`,
          },
          {
            qty: 1,
            item: '100W USB-C Power Adapter AC Power Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/more/usb-c-power-adapter-ac-cable.webp`,
          },
          {
            qty: 1,
            item: '100W USB-C Power Adapter',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/more/usb-c-power-adapter.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 3 Battery Charging Hub (100W)',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/more/charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 3 Pro ND Filters Set (ND8/16/32/64)',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/more/filters.webp`,
          },
          {
            qty: 3,
            item: 'Low-Noise Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/more/propellers.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/more/usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'Shoulder Bag',
            image: `${baseUrl}/products/drones/dji/mavic/3pro/more/shoulder-bag.webp`,
          },
        ],

        price: {
          former: 135000,
          latter: null,
        },
      },
    },
    accessories: {
      battery: accessories.find(
        (a) => a.title.short == 'Mavic 3 Series Battery'
      ),
      other: null,
    },
    category: 'camera',
    available: true,
    brand: 'dji',
    make: 'mavic',
    model: null,
  },

  {
    images: images.products.drones.dji.mavic.m3t.drone,
    title: { long: 'DJI Mavic 3T Enterprise', short: 'Mavic 3T Enterprise' },
    specs: {
      intro: [
        '4/3 CMOS wide camera',
        '56X hybrid zoom',
        '640 × 512 px Thermal Camera',
        '45-min max flight time',
        'DJI O3 Enterprise Transmission',
        'Centimeter-level positioning with RTK',
        'High-Volume loudspeaker',
      ],
      aircraft: [
        {
          label: 'Max Wind Speed Resistance',
          desc: '12 m/s',
        },
        {
          label: 'Max Take-off Altitude Above Sea Level',
          desc: '6000 m (without payload)',
        },
        {
          label: 'Max Flight Time (no wind)',
          desc: '45 minutes',
        },
        {
          label: 'Max Hovering Time (no wind)',
          desc: '38 minutes',
        },
        {
          label: 'Max Flight Distance',
          desc: '32 km',
        },
        {
          label: 'Max Wind Speed Resistance',
          desc: '12 m/s',
        },
      ],
    },
    price: {
      former: 951400,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/mavic/3t/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 3 Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'microSD Card (64GB)',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/microsd-card.webp`,
          },
          {
            qty: 1,
            item: 'Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/gimbal-protector.webp`,
          },
          {
            qty: 3,
            item: 'Mavic 3 Enterprise Series Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/propellers.webp`,
          },
          {
            qty: 1,
            item: 'RC Pro Enterprise',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'Screwdriver',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/screwdriver.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Power Adapter (100W)',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/power-adapter.webp`,
          },
          {
            qty: 1,
            item: '100W Power Adaptor AC Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/usb-c-power-adapter-ac-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-C to USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/usb-c-usb-c.webp`,
          },
          {
            qty: 1,
            item: 'Protector Case',
            image: `${baseUrl}/products/drones/dji/mavic/3t/box/carrying-case.webp`,
          },
        ],
      },

      flyMore: {
        image: `${baseUrl}/products/drones/dji/mavic/3t/more/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Mavic 3 Enterprise Series RTK Module',
            image: `${baseUrl}/products/drones/dji/mavic/3t/more/rtk.webp`,
          },
          {
            qty: 2,
            item: 'Mavic 3 Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/3t/more/battery.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 3 Battery Charging Hub (100W)',
            image: `${baseUrl}/products/drones/dji/mavic/3t/more/charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'USB-C to USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3t/more/usb-c-usb-c.webp`,
          },
        ],

        price: {
          former: 135000,
          latter: null,
        },
      },
    },
    accessories: {
      battery: accessories.find(
        (a) => a.title.short == 'Mavic 3 Series Battery'
      ),
      other: null,
    },
    category: 'enterprise',
    available: true,
    brand: 'dji',
    make: 'mavic',
    model: null,
  },

  {
    images: images.products.drones.dji.mavic.m3e.drone,
    title: { long: 'DJI Mavic 3E Enterprise', short: 'Mavic 3E Enterprise' },
    specs: {
      intro: [
        '4/3 CMOS wide camera',
        '56X hybrid zoom',
        '640 × 512 px Thermal Camera',
        '45-min max flight time',
        'DJI O3 Enterprise Transmission',
        'Centimeter-level positioning with RTK',
        'High-Volume loudspeaker',
      ],
      aircraft: [
        {
          label: 'Max Wind Speed Resistance',
          desc: '12 m/s',
        },
        {
          label: 'Max Take-off Altitude Above Sea Level',
          desc: '6000 m (without payload)',
        },
        {
          label: 'Max Flight Time (no wind)',
          desc: '45 minutes',
        },
        {
          label: 'Max Hovering Time (no wind)',
          desc: '38 minutes',
        },
        {
          label: 'Max Flight Distance',
          desc: '32 km',
        },
        {
          label: 'Max Wind Speed Resistance',
          desc: '12 m/s',
        },
      ],
    },
    price: {
      former: 690000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/mavic/3e/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 3 Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'microSD Card (64GB)',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/microsd-card.webp`,
          },
          {
            qty: 1,
            item: 'Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/gimbal-protector.webp`,
          },
          {
            qty: 3,
            item: 'Mavic 3 Enterprise Series Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/propellers.webp`,
          },
          {
            qty: 1,
            item: 'RC Pro Enterprise',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'Screwdriver',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/screwdriver.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Power Adapter (100W)',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/power-adapter.webp`,
          },
          {
            qty: 1,
            item: '100W Power Adaptor AC Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/usb-c-power-adapter-ac-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-C to USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/usb-c-usb-c.webp`,
          },
          {
            qty: 1,
            item: 'Protector Case',
            image: `${baseUrl}/products/drones/dji/mavic/3e/box/carrying-case.webp`,
          },
        ],
      },

      flyMore: {
        image: `${baseUrl}/products/drones/dji/mavic/3e/more/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Mavic 3 Enterprise Series RTK Module',
            image: `${baseUrl}/products/drones/dji/mavic/3e/more/rtk.webp`,
          },
          {
            qty: 2,
            item: 'Mavic 3 Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/3e/more/battery.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 3 Battery Charging Hub (100W)',
            image: `${baseUrl}/products/drones/dji/mavic/3e/more/charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'USB-C to USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3e/more/usb-c-usb-c.webp`,
          },
        ],

        price: {
          former: 135000,
          latter: null,
        },
      },
    },
    accessories: {
      battery: accessories.find(
        (a) => a.title.short == 'Mavic 3 Series Battery'
      ),
      other: null,
    },
    category: 'enterprise',
    available: true,
    brand: 'dji',
    make: 'mavic',
    model: null,
  },

  {
    images: images.products.drones.dji.mavic.m3m.drone,
    title: { long: 'DJI Mavic 3M Enterprise', short: 'Mavic 3M Enterprise' },
    specs: {
      intro: [
        '4 × 5MP Multispectral Camera',
        '20 MP, RGB, 4/3 CMOS, mechanical shutter',
        'Omnidirectional Obstacle Avoidance',
        '15km Transmission Distance',
        'Centimeter-level RTK positioning',
        'Up to 200 hectares per flight',
      ],
      aircraft: [
        {
          label: 'Net Weight (with propellers and RTK module)',
          desc: '951 g',
        },
        {
          label: 'Max Takeoff Weight',
          desc: '1,050 g',
        },
        {
          label: 'Max Wind Speed Resistance',
          desc: '12 m/s',
        },
        {
          label: 'Max Take-off Altitude (Above Sea Level)',
          desc: '6000 m (without payload)',
        },
        {
          label: 'Max Flight Time (without wind)',
          desc: '43 minutes',
        },
        {
          label: 'Max Hover Time (without wind)',
          desc: '37 minutes',
        },
        {
          label: 'Max Flight Distance',
          desc: '32 km',
        },
      ],
    },
    price: {
      former: 909000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/mavic/3m/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 3 Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 3 Enterprise Series RTK Module',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/rtk.webp`,
          },
          {
            qty: 1,
            item: 'microSD Card (64GB)',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/microsd-card.webp`,
          },
          {
            qty: 1,
            item: 'Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/gimbal-protector.webp`,
          },
          {
            qty: 3,
            item: 'Mavic 3 Enterprise Series Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/propellers.webp`,
          },
          {
            qty: 1,
            item: 'RC Pro Enterprise',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'Screwdriver',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/screwdriver.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Power Adapter (100W)',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/power-adapter.webp`,
          },
          {
            qty: 1,
            item: '100W Power Adaptor AC Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/usb-c-power-adapter-ac-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-C to USB-C Cable',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/usb-c-usb-c.webp`,
          },
          {
            qty: 1,
            item: 'Protector Case',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/carrying-case.webp`,
          },
        ],
      },
      flyMore: null,
    },
    accessories: {
      battery: accessories.find(
        (a) => a.title.short == 'Mavic 3 Series Battery'
      ),
      other: [
        accessories.find((a) => a.title.short == 'Mobile Station and Tripod'),
      ].filter((i) => i != undefined),
    },
    category: 'agriculture',
    available: true,
    brand: 'dji',
    make: 'mavic',
    model: null,
  },

  // {
  // 	images: images.products.drones.dji.mini.m3pro.drone,
  // 	title: { long: "DJI Mini 3 Pro", short: "Mini 3 Pro" },
  // 	specs: {
  // 		intro: [
  // 			"Lightweight (Under 249 g)",
  // 			"Tri-Directional Obstacle Sensing",
  // 			"4K HDR Video",
  // 			"Extended Battery Life",
  // 			"True Vertical Shooting",
  // 			"FocusTrack Feature",
  // 		],
  // 		aircraft: [
  // 			{
  // 				label: "Takeoff Weight",
  // 				desc: "<249 g",
  // 			},
  // 			{
  // 				label: "Flight Time (Intelligent Battery, 21.6 kph, no wind)",
  // 				desc: "34 mins",
  // 			},
  // 			{
  // 				label: "Flight Time (Intelligent Battery Plus, 21.6 kph, no wind)",
  // 				desc: "47 mins",
  // 			},
  // 			{
  // 				label: "Hovering Time (Intelligent Battery, no wind)",
  // 				desc: "30 mins",
  // 			},
  // 			{
  // 				label: "Hovering Time (Intelligent Battery Plus, no wind)",
  // 				desc: "40 mins",
  // 			},
  // 			{
  // 				label: "Flight Distance (Intelligent Battery, 43.2 kph, no wind)",
  // 				desc: "18 km",
  // 			},
  // 			{
  // 				label: "Flight Distance (Intelligent Battery Plus, 43.2 kph, no wind)",
  // 				desc: "25 km",
  // 			},
  // 			{
  // 				label: "Wind Speed Resistance",
  // 				desc: "10.7 m/s (Level 5)",
  // 			},
  // 		],
  // 	},
  // 	price: {
  // 		former: 215000,
  // 		latter: null,
  // 	},
  // 	kit: {
  // 		basic: {
  // 			image: `${baseUrl}/products/drones/dji/mini/3pro/box/collective.webp`,
  // 			contents: [
  // 				{
  // 					qty: 1,
  // 					item: "Aircraft",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/aircraft.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Remote Controller",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/controller.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "RC Cable (USB Type-C Connector)",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/rc-n1-rc-cable-(usb-type-c-connector).webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "RC Cable (Lightning Connector)",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/rc-n1-rc-cable-(lightning-connector).webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "RC Cable (Standard Micro-USB Connector)",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/rc-n1-rc-cable-(standard-micro-usb-connector).webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Mini 3 Pro Intelligent Flight Battery",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/battery.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Mini 3 Pro Spare Propellers (Pair)",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/propellers.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Gimbal Protector",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/protector.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Type-C to Type-C PD Cable",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/usb-c-data-cable.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Screwdriver",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/screwdriver.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Screws",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/box/screws.webp`,
  // 				},
  // 			],
  // 		},

  // 		flyMore: {
  // 			image: `${baseUrl}/products/drones/dji/mini/3pro/more/collective.webp`,
  // 			contents: [
  // 				{
  // 					qty: 2,
  // 					item: "Intelligent Flight Battery",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/more/battery.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Two-way Charging Hub",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/more/charging-hub.webp`,
  // 				},
  // 				{
  // 					qty: 2,
  // 					item: "Mini 3 Pro Propellers (pair)",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/more/propellers.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "Shoulder Bag",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/more/shoulder-bag.webp`,
  // 				},
  // 				{
  // 					qty: 1,
  // 					item: "USB 3.0 Type-C Data Cable ",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/more/usb-c-data-cable.webp`,
  // 				},
  // 				{
  // 					qty: 12,
  // 					item: "Screws",
  // 					image: `${baseUrl}/products/drones/dji/mini/3pro/more/screws.webp`,
  // 				},
  // 			],

  // 			price: {
  // 				former: 55000,
  // 				latter: null,
  // 			},
  // 		},
  // 	},
  // 	accessories: {
  // 		battery: accessories.find(a => a.title.short == "Mini 3 Pro Battery"),
  // 		other: null,
  // 	},
  // 	category: "camera",
  // 	available: true,
  // 	brand: "dji",
  // 	make: "mini",
  // 	model: null,
  // },

  {
    images: images.products.drones.dji.neo.drone,
    title: { long: 'DJI Neo', short: 'DJI Neo' },
    specs: {
      intro: [
        'Palm Takeoff & Landing',
        'Easy Editing With QuickShots',
        'Multiple Control Options',
        '4K Ultra-Stabilized Video',
        '135 g, Light and Portable',
        'Full-Coverage Propeller Guards',
      ],
      aircraft: [
        {
          label: 'Takeoff Weight',
          desc: '135 g',
        },
        {
          label: 'Takeoff Altitude',
          desc: '2000 m',
        },
        {
          label: 'Flight Time',
          desc: '18 mins',
        },
        {
          label: 'Flight Time (with propeller guards)',
          desc: '17 mins',
        },
        {
          label: 'Hovering Time',
          desc: '18 mins',
        },
        {
          label: 'Hovering Time (with propeller guards)',
          desc: '17 mins',
        },
        {
          label: 'Flight Distance',
          desc: '7 km',
        },
        {
          label: 'Wind Speed Resistance',
          desc: '8 m/s (Level 4)',
        },
      ],
    },
    price: {
      former: 45000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/neo/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/neo/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Mini 3 Pro Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/neo/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'Propeller Guard (Pair)',
            image: `${baseUrl}/products/drones/dji/neo/box/guard.webp`,
          },
          {
            qty: 1,
            item: 'Spare Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/neo/box/propellers.webp`,
          },
          {
            qty: 1,
            item: 'Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/neo/box/protector.webp`,
          },
          {
            qty: 1,
            item: 'Type-C to Type-C PD Cable',
            image: `${baseUrl}/products/drones/dji/neo/box/data-cable.webp`,
          },
          {
            qty: 1,
            item: 'Screwdriver',
            image: `${baseUrl}/products/drones/dji/neo/box/screwdriver.webp`,
          },
          {
            qty: 4,
            item: 'Spare Propeller Screw',
            image: `${baseUrl}/products/drones/dji/neo/box/screw.webp`,
          },
        ],
      },

      flyMore: {
        image: `${baseUrl}/products/drones/dji/neo/more/collective.webp`,
        contents: [
          {
            qty: 2,
            item: 'Mini 3 Pro Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/neo/more/battery.webp`,
          },
          {
            qty: 1,
            item: 'Two-way Charging Hub',
            image: `${baseUrl}/products/drones/dji/neo/more/charging-hub.webp`,
          },
        ],

        price: {
          former: 35000,
          latter: null,
        },
      },
    },
    accessories: {
      battery: accessories.find((a) => a.title.short == 'Neo Battery'),
      other: null,
    },
    category: 'camera',
    available: true,
    brand: 'dji',
    make: 'neo',
    model: null,
    featured: true,
    starter: true,
  },
];

export default products;
