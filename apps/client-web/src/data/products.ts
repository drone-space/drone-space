import { images } from '@/assets/images';
import accessories from './accessories';
import { PRODUCTION_BASE_URL_CLIENT_WEB } from '@repo/constants/paths';

const baseUrl = `${PRODUCTION_BASE_URL_CLIENT_WEB.DEFAULT}/images`;

const products = [
  // {
  //   images: images.products.drones.dji.avata.avata2.drone,
  //   title: { long: 'DJI Avata 2', short: 'Avata 2' },
  //   specs: {
  //     intro: [
  //       'Googles 3 HD micro-OLED display',
  //       'RC Motion 3 Easy Acro',
  //       'Tight Shots in Super-Wide 4K',
  //       '1/1.3-inch Image Sensor',
  //       'Built-in Propeller Guard',
  //     ],
  //     aircraft: [
  //       {
  //         label: 'Takeoff Weight',
  //         desc: '377 g',
  //       },
  //       {
  //         label: 'Max Takeoff Altitude',
  //         desc: '5000 m',
  //       },
  //       {
  //         label: 'Max Flight Time',
  //         desc: '23 minutes',
  //       },
  //       {
  //         label: 'Max Hovering Time',
  //         desc: '21 minutes',
  //       },
  //       {
  //         label: 'Max Flight Distance',
  //         desc: '13 km',
  //       },
  //       {
  //         label: 'Max Wind Speed Resistance',
  //         desc: '10.7 m/s',
  //       },
  //       {
  //         label: 'Internal Storage',
  //         desc: '46 GB',
  //       },
  //     ],
  //   },
  //   price: null,
  //   kit: {
  //     basic: {
  //       image: `${baseUrl}/products/drones/dji/avata/avata2/box/collective.webp`,
  //       contents: [
  //         {
  //           qty: 1,
  //           item: 'Aircraft',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/box/aircraft.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'Intelligent Flight Battery',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/box/battery.webp`,
  //         },
  //         {
  //           qty: 4,
  //           item: 'Low Noise Propellers (Pairs)',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/box/propellers.webp`,
  //         },
  //         {
  //           qty: 16,
  //           item: 'DJI Avata 2 Propeller Screw',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/more/propeller-screw.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'Gimbal Protector',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/box/protector.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'Screwdriver',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/box/screwdriver.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'Type-C to Type-C PD Cable',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/box/type-c-to-type-c-pd-cable.webp`,
  //         },
  //       ],
  //     },
  //     flyMore: {
  //       contents: [
  //         {
  //           qty: 2,
  //           item: 'Intelligent Flight Battery',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/more/battery.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'Two-Way Charging Hub',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/more/charging-hub.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Googles 3',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/more/googles.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Goggles 3 -2.0D Corrective Lenses (Pairs)',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/more/lenses.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI RC Motion 3',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/more/motion.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI RC Motion 3 Lanyard',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/more/lanyard.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Sling Bag',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/more/sling-bag.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'USB-C OTG Cable',
  //           image: `${baseUrl}/products/drones/dji/avata/avata2/more/usb-c-otg-cable.webp`,
  //         },
  //       ],

  //       price: null,
  //     },
  //   },
  //   accessories: {
  //     battery: accessories.find((a) => a.title.short == 'Avata 2 Battery'),
  //     other: null,
  //   },
  //   category: 'camera',
  //   available: true,
  //   brand: 'dji',
  //   make: 'avata',
  //   model: null,
  // },

  {
    images: images.products.drones.dji.mavic.m4pro.drone,
    title: { long: 'DJI Mavic 4 Pro (DJI RC 2)', short: 'Mavic 4 Pro (RC 2)' },
    tag: 'Taking Aerial Photography to New Heights',
    desc: 'Features a triple-camera system with focal lengths of 24mm, 70mm, and 166mm, 52-minute flight time, and OcuSync 4+ transmission.',
    specs: {
      intro: [
        '100MP 4/3 CMOS Hasselblad Camera',
        'CMOS Telephoto Lenses ',
        '6K/60fps HDR Video',
        '0.1-Lux Nightscape Omnidirectional Sensing',
        '360° Camera Rotation',
        '51 Minute Flight Time',
        'DJI O4+ 10-bit HDR Video Transmission',
        'Pro-grade All-I 4:2:2 Encoding',
      ],
      desc: 'Introducing the DJI Mavic 4 Pro, a revolutionary triple-lens flagship camera drone built for creators who demand power, precision, and performance. Featuring a groundbreaking 100MP 4/3 CMOS Hasselblad camera alongside dual large CMOS telephoto lenses, the Mavic 4 Pro delivers cinematic 6K/60fps HDR video, crisp telephoto stills, and stunning low-light shots using its advanced 0.1-Lux Nightscape omnidirectional sensing system. Its innovative Infinity Gimbal allows for 360° camera rotation, unlocking dynamic perspectives previously impossible in aerial imaging. With a class-leading 51-minute flight time and DJI O4+ 10-bit HDR video transmission reaching up to 30 km, creators enjoy longer, uninterrupted sessions with rock-solid connectivity. Whether capturing wide landscapes, dynamic portraits, or long-range subjects, the Mavic 4 Pro adapts with precision, enhanced by subject tracking, slow motion up to 120fps, and pro-grade All-I 4:2:2 encoding. Paired with a rotatable 7” DJI RC Pro 2 controller and fast-charging, power-efficient accessories, this drone is not just a tool—it’s a creative powerhouse ready to redefine aerial storytelling.',
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
      former: 370000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/mavic/4pro/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'DJI Mavic 4 Pro',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'DJI RC 2',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'DJI Mavic 4 Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 4 Low-Noise Propellers (pair)',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/box/propellers.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 4 Pro Storage Cover',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/box/storage-cover.webp`,
          },
          {
            qty: 2,
            item: 'USB-C to USB-C Data Cable',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/box/usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'DJI 100W USB-C Power Adapter',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/box/adapter.webp`,
          },
        ],
      },

      flyMore: {
        image: `${baseUrl}/products/drones/dji/mavic/4pro/more/collective.webp`,
        contents: [
          {
            qty: 2,
            item: 'DJI Mavic 4 Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/more/battery.webp`,
          },
          {
            qty: 3,
            item: 'Mavic 4 Low-Noise Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/more/propellers.webp`,
          },
          {
            qty: 1,
            item: 'Mavic 4 Parallel Charging Hub',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/more/charging-hub.webp`,
          },
          // {
          //   qty: 1,
          //   item: 'Mavic 4 Pro ND Filters Set (ND8/16/32/64)',
          //   image: `${baseUrl}/products/drones/dji/mavic/4pro/more/filters.webp`,
          // },
          {
            qty: 1,
            item: 'Shoulder Bag',
            image: `${baseUrl}/products/drones/dji/mavic/4pro/more/shoulder-bag.webp`,
          },
        ],

        price: {
          former: 105000,
          latter: null,
        },
      },
    },
    accessories: {
      battery: accessories.find(
        (a) => a.title.short == 'Mavic 4 Series Battery'
      ),
      other: null,
    },
    category: 'camera',
    available: true,
    brand: 'dji',
    make: 'mavic',
    model: null,
    new: true,
  },

  {
    images: images.products.drones.dji.air.air3.drone,
    title: { long: 'DJI Mavic Air 3', short: 'Air 3' },
    tag: 'All-in-one imaging and safety',
    desc: 'Dual-camera system, omnidirectional obstacle sensing, 46-minute flight time, and 4K/60fps video capabilities.',
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
        image: `${baseUrl}/products/drones/dji/air/air3/more/collective.webp`,
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

  {
    images: images.products.drones.dji.agras.t50.drone,
    title: {
      long: 'DJI Agras T50 (Drone Spraying System)',
      short: 'Agras T50',
    },
    tag: 'Empowering Agriculture with Intelligent Precision',
    desc: 'The T50 is designed for large-scale farming, offering a 40kg spraying or 50kg spreading payload, dual atomization spraying system, and the ability to cover up to 50 acres per hour.',
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
          // {
          //   qty: 1,
          //   item: 'Enterprise Series RTK Module',
          //   image: `${baseUrl}/products/drones/dji/mavic/3m/box/rtk.webp`,
          // },
          // {
          //   qty: 1,
          //   item: 'Charging Hub',
          //   image: `${baseUrl}/products/drones/dji/agras/t50/box/charging-hub.webp`,
          // },
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
        accessories.find((a) => a.title.short == 'Mobile Station and Tripod'),
      ].filter((i) => i != undefined),
    },
    category: 'agriculture',
    available: true,
    brand: 'dji',
    make: 'agras',
    model: null,
  },

  // {
  //   images: images.products.drones.huida.hd540s.drone,
  //   title: {
  //     long: 'HUIDA HD540S (Drone Spraying System)',
  //     short: 'HUIDA HD540S',
  //   },
  //   specs: {
  //     intro: [
  //       'Higher spraying load (40L Spraying)',
  //       'High Spreading Efficieancy (110 Kg/min)',
  //       'Higher spreading load (60L Spreading)',
  //       'Double Magnetic Impeller Pump (24 L/min )',
  //       '8500W Intelligent charger',
  //       'HD 5.0 Core computing system',
  //       '2KM Image Transmission',
  //     ],
  //     aircraft: [
  //       {
  //         label: 'Structural layout',
  //         desc: 'Six-axis layout 2100mm',
  //       },
  //       {
  //         label: 'Maximum wheelbase',
  //         desc: '2100mm (six axes)',
  //       },
  //       {
  //         label: 'Pesticide container capacity',
  //         desc: '40L',
  //       },
  //       {
  //         label: 'Seed container capacity',
  //         desc: '60L',
  //       },
  //       {
  //         label: 'Container installation mode',
  //         desc: 'Plug-in',
  //       },
  //       {
  //         label: 'Max Configurable Flight Radius',
  //         desc: '2000 m',
  //       },
  //       {
  //         label: 'No-load mass (including battery)',
  //         desc: '47.5KG',
  //       },
  //       {
  //         label: 'Power battery',
  //         desc: '30000mAh',
  //       },
  //       {
  //         label: 'Battery charging time (Lithium)',
  //         desc: '20%-95% about 13min',
  //       },
  //       {
  //         label: 'Reference fuel consumption',
  //         desc: '500ml/kWh',
  //       },
  //       {
  //         label: 'FPV camera',
  //         desc: 'Front camera, rear camera',
  //       },
  //       {
  //         label: 'Motor rated power',
  //         desc: '2000w*6pcs',
  //       },
  //       {
  //         label: 'Remote control signal distance',
  //         desc: '≤1500m',
  //       },
  //       {
  //         label: 'Flight speed limit',
  //         desc: '≤10m/s',
  //       },
  //     ],
  //   },
  //   price: null,
  //   kit: null,
  //   accessories: {
  //     battery: accessories.find((a) => a.title.short == 'HUIDA HD540S Battery'),
  //     other: [
  //       accessories.find((a) => a.title.short == 'HUIDA HD540S Generator'),
  //       accessories.find(
  //         (a) => a.title.short == 'HUIDA HD540S Spreading System'
  //       ),
  //     ].filter((i) => i != undefined),
  //   },
  //   category: 'agriculture',
  //   available: true,
  //   brand: 'huida',
  //   make: 'Huida HD Series',
  //   model: null,
  // },

  {
    images: images.products.drones.dji.matrice.matrice350.drone,
    title: { long: 'DJI Matrice 350 RTK', short: 'Matrice 350' },
    tag: 'Precision Aerial Operations for Enterprise Excellence',
    desc: 'An advanced drone equipped with RTK positioning, six-directional obstacle sensing, and a maximum flight time of 55 minutes, making it ideal for detailed surveying and mapping tasks.',
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
      former: 1125000,
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
          // {
          //   qty: 1,
          //   item: 'WB37 Intelligent Battery',
          //   image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/wb37-battery.webp`,
          // },
          // {
          //   qty: 2,
          //   item: 'TB65 Intelligent Flight Battery',
          //   image: `${baseUrl}/products/drones/dji/matrice/matrice350/box/tb65-battery.webp`,
          // },
          {
            qty: 1,
            item: 'Enterprise Series RTK Module',
            image: `${baseUrl}/products/drones/dji/mavic/3m/box/rtk.webp`,
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
      other: [
        accessories.find((a) => a.title.short == 'Mobile Station and Tripod'),
      ].filter((i) => i != undefined),
    },
    category: 'mapping',
    available: true,
    brand: 'dji',
    make: 'matrice',
    model: null,
  },

  {
    images: images.products.drones.dji.mavic.m3pro.drone,
    title: { long: 'DJI Mavic 3 Pro', short: 'Mavic 3 Pro' },
    tag: 'Professional-grade imaging with triple-camera versatility',
    desc: 'Hasselblad camera system, 5.1K video recording, 43-minute flight time, and advanced safety features.',
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
            item: 'Mavic 3 Pro Storage Cover',
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
            item: 'Mavic 3 Intelligent Flight Battery',
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
            item: 'Mavic 3 Low-Noise Propellers (pair)',
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
    images: images.products.drones.dji.mavic.m3e.drone,
    title: { long: 'DJI Mavic 3E Enterprise', short: 'Mavic 3E Enterprise' },
    tag: 'Portable Precision for Professional Mapping',
    desc: 'Tailored for geospatial professionals, providing high-resolution imaging and advanced sensing capabilities in a compact form factor, suitable for mapping and surveying applications.',
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
    category: 'mapping',
    available: true,
    brand: 'dji',
    make: 'mavic',
    model: null,
  },

  {
    images: images.products.drones.dji.mavic.m3m.drone,
    title: { long: 'DJI Mavic 3M Enterprise', short: 'Mavic 3M Enterprise' },
    tag: 'Precision Mapping in the Palm of Your Hand',
    desc: 'Tailored for surveying and mapping, the Mavic 3M offers high-resolution imaging and advanced sensing capabilities for accurate data collection.',
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
    category: 'enterprise',
    available: true,
    brand: 'dji',
    make: 'mavic',
    model: null,
  },

  {
    images: images.products.drones.dji.mavic.m3t.drone,
    title: { long: 'DJI Mavic 3T Enterprise', short: 'Mavic 3T Enterprise' },
    tag: 'Portable Power for Professional Missions',
    desc: 'The Mavic 3T features a 56× hybrid zoom camera and RTK module for centimeter-level precision, offering mission efficiency for various commercial applications.',
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
    images: images.products.drones.dji.mini.m4pro.drone,
    title: { long: 'DJI Mini 4 Pro', short: 'Mini 4 Pro' },
    tag: 'Ultimate mini camera drone',
    desc: '48MP camera, 4K/60fps HDR video, omnidirectional obstacle sensing, and 20km video transmission.',
    specs: {
      intro: [
        'Lightweight (Under 249 g)',
        '4K/60fps HDR True Vertical Shooting',
        'Omnidirectional Obstacle Sensing',
        'Extended Battery Life',
        '20km FHD Video Transmission',
        'ActiveTrack (360 degrees)',
      ],
      aircraft: [
        {
          label: 'Takeoff Weight',
          desc: '<249 g',
        },
        {
          label: 'Flight Time (Intelligent Battery, 21.6 kph, no wind)',
          desc: '34 mins',
        },
        {
          label: 'Flight Time (Intelligent Battery Plus, 21.6 kph, no wind)',
          desc: '47 mins',
        },
        {
          label: 'Hovering Time (Intelligent Battery, no wind)',
          desc: '30 mins',
        },
        {
          label: 'Hovering Time (Intelligent Battery Plus, no wind)',
          desc: '40 mins',
        },
        {
          label: 'Flight Distance (Intelligent Battery, 43.2 kph, no wind)',
          desc: '18 km',
        },
        {
          label:
            'Flight Distance (Intelligent Battery Plus, 43.2 kph, no wind)',
          desc: '25 km',
        },
        {
          label: 'Wind Speed Resistance',
          desc: '10.7 m/s (Level 5)',
        },
      ],
    },
    price: {
      former: 190000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/mini/4pro/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Remote Controller',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'Mini 4 Pro Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'Mini 4 Pro Spare Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/propellers.webp`,
          },
          {
            qty: 6,
            item: 'Screws',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/screws.webp`,
          },
          {
            qty: 1,
            item: 'Screwdriver',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/screwdriver.webp`,
          },
          {
            qty: 1,
            item: 'RC Cable (USB Type-C Connector)',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/rc-n2-rc-cable-usb-c-connector.webp`,
          },
          {
            qty: 1,
            item: 'RC Cable (Lightning Connector)',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/rc-n2-rc-cable-lightning-connector.webp`,
          },
          {
            qty: 1,
            item: 'Type-C to Type-C PD Cable',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/type-c-to-type-c-pd-cable.webp`,
          },
          {
            qty: 1,
            item: 'Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/protector.webp`,
          },
          {
            qty: 1,
            item: 'Propeller Holder',
            image: `${baseUrl}/products/drones/dji/mini/4pro/box/propeller-holder.webp`,
          },
        ],
      },

      flyMore: {
        image: `${baseUrl}/products/drones/dji/mini/4pro/more/collective.webp`,
        contents: [
          {
            qty: 2,
            item: 'Mini 4 Pro Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mini/4pro/more/battery.webp`,
          },
          {
            qty: 1,
            item: 'Two-way Charging Hub',
            image: `${baseUrl}/products/drones/dji/mini/4pro/more/charging-hub.webp`,
          },
          {
            qty: 2,
            item: 'Mini 4 Pro Spare Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/mini/4pro/more/propellers.webp`,
          },
          {
            qty: 1,
            item: 'Shoulder Bag',
            image: `${baseUrl}/products/drones/dji/mini/4pro/more/shoulder-bag.webp`,
          },
          {
            qty: 12,
            item: 'Screws',
            image: `${baseUrl}/products/drones/dji/mini/4pro/more/screws.webp`,
          },
        ],

        price: {
          former: 40000,
          latter: null,
        },
      },
    },
    accessories: {
      battery: accessories.find((a) => a.title.short == 'Mini 4 Pro Battery'),
      other: null,
    },
    category: 'camera',
    available: true,
    featured: false,
    brand: 'dji',
    make: 'mini',
    model: null,
  },

  {
    images: images.products.drones.dji.mini.m5pro.drone,
    title: { long: 'DJI Mini 5 Pro', short: 'Mini 5 Pro' },
    tag: 'Pro In Mini',
    desc: '48MP camera, 4K/60fps HDR video, omnidirectional obstacle sensing, and 20km video transmission.',
    specs: {
      intro: [
        '1 Inch-Large CMOS Camera',
        'Nightscape Omnidirectional Obstacle Sensing',
        'True Vertical Shooting',
        '255 degree Flexibal Ggimbal Rotation',
        'Extended Battery Life',
        'Upgraded ActiveTrack (360 degrees)',
      ],
      aircraft: [
        {
          label: 'Takeoff Weight',
          desc: '249.9 g',
        },
        {
          label: 'Flight Time (Intelligent Battery, 21.6 kph, no wind)',
          desc: '36 mins',
        },
        {
          label: 'Flight Time (Intelligent Battery Plus, 21.6 kph, no wind)',
          desc: '52 mins',
        },
        {
          label: 'Hovering Time (Intelligent Battery, no wind)',
          desc: '30 mins',
        },
        {
          label: 'Hovering Time (Intelligent Battery Plus, no wind)',
          desc: '40 mins',
        },
        {
          label: 'Flight Distance (Intelligent Battery, 43.2 kph, no wind)',
          desc: '18 km',
        },
        {
          label:
            'Flight Distance (Intelligent Battery Plus, 43.2 kph, no wind)',
          desc: '25 km',
        },
        {
          label: 'Wind Speed Resistance',
          desc: '10.7 m/s (Level 5)',
        },
      ],
    },
    price: {
      former: 230000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/mini/5pro/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'Remote Controller',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'Mini 5 Pro Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'Mini 5 Pro Spare Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/propellers.webp`,
          },
          {
            qty: 6,
            item: 'Screws',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/screws.webp`,
          },
          {
            qty: 1,
            item: 'Screwdriver',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/screwdriver.webp`,
          },
          {
            qty: 1,
            item: 'RC Cable (USB Type-C Connector)',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/rc-n2-rc-cable-usb-c-connector.webp`,
          },
          {
            qty: 1,
            item: 'RC Cable (Lightning Connector)',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/rc-n2-rc-cable-lightning-connector.webp`,
          },
          {
            qty: 1,
            item: 'Type-C to Type-C PD Cable',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/type-c-to-type-c-pd-cable.webp`,
          },
          {
            qty: 1,
            item: 'Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/protector.webp`,
          },
          {
            qty: 1,
            item: 'Propeller Holder',
            image: `${baseUrl}/products/drones/dji/mini/5pro/box/propeller-holder.webp`,
          },
        ],
      },

      flyMore: {
        image: `${baseUrl}/products/drones/dji/mini/5pro/more/collective.webp`,
        contents: [
          {
            qty: 2,
            item: 'Mini 5 Pro Intelligent Flight Battery',
            image: `${baseUrl}/products/drones/dji/mini/5pro/more/battery.webp`,
          },
          {
            qty: 1,
            item: 'Two-way Charging Hub',
            image: `${baseUrl}/products/drones/dji/mini/5pro/more/charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'DJI Mini 5 Pro ND Filters Set (ND8/32/128)',
            image: `${baseUrl}/products/drones/dji/mini/5pro/more/filters-set.webp`,
          },
          {
            qty: 2,
            item: 'Mini 5 Pro Spare Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/mini/5pro/more/propellers.webp`,
          },
          {
            qty: 1,
            item: 'Shoulder Bag',
            image: `${baseUrl}/products/drones/dji/mini/5pro/more/shoulder-bag.webp`,
          },
          {
            qty: 12,
            item: 'Screws',
            image: `${baseUrl}/products/drones/dji/mini/5pro/more/screws.webp`,
          },
        ],

        price: {
          former: 40000,
          latter: null,
        },
      },
    },
    accessories: {
      battery: accessories.find((a) => a.title.short == 'Mini 5 Pro Battery'),
      other: null,
    },
    category: 'camera',
    available: true,
    featured: true,
    brand: 'dji',
    make: 'mini',
    model: null,
    new: true,
  },

  {
    images: images.products.drones.dji.inspire.inspire3.drone,
    title: { long: 'DJI Inspire 3', short: 'Inspire 3' },
    tag: 'Cinematic Excellence in the Sky',
    desc: "Flagship drone for high-end productions, featuring a full-frame sensor, dual native ISO for superior low-light performance, and compatibility with custom lenses. It's been utilized in major film and TV projects such as 'Spider-Man Noir' and 'Happy Gilmore 2'.",
    specs: {
      intro: [
        'Full-frame 8K ProRes RAW/CinemaDNG',
        '1/1.8-inch Low-Light FPV Camera',
        '360° Pan and Tilt Boost',
        'O3 Pro Video Transmission',
        'RTK and Waypoint Pro',
        'DJI PRO Ecosystem Support',
      ],
      aircraft: [
        {
          label: 'Takeoff Weight',
          desc: '<249 g',
        },
        {
          label: 'Flight Time (Intelligent Battery, 21.6 kph, no wind)',
          desc: '34 mins',
        },
        {
          label: 'Flight Time (Intelligent Battery Plus, 21.6 kph, no wind)',
          desc: '47 mins',
        },
        {
          label: 'Hovering Time (Intelligent Battery, no wind)',
          desc: '30 mins',
        },
        {
          label: 'Hovering Time (Intelligent Battery Plus, no wind)',
          desc: '40 mins',
        },
        {
          label: 'Flight Distance (Intelligent Battery, 43.2 kph, no wind)',
          desc: '18 km',
        },
        {
          label:
            'Flight Distance (Intelligent Battery Plus, 43.2 kph, no wind)',
          desc: '25 km',
        },
        {
          label: 'Wind Speed Resistance',
          desc: '10.7 m/s (Level 5)',
        },
      ],
    },
    price: {
      former: 2032800,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'Aircraft',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'RC Plus (Inspire 3)',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'Zenmuse X9-8K Air Gimbal Camera',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/camera.webp`,
          },
          {
            qty: 6,
            item: 'TB51 Intelligent Battery',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'PROSSD 1TB',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/ssd.webp`,
          },
          {
            qty: 1,
            item: 'TB51 Intelligent Battery Charging Hub',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'TB51 Intelligent Battery Charging Hub AC Cable',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/battery-charging-hub-ac-cable.webp`,
          },
          {
            qty: 1,
            item: 'TB51 Intelligent Battery Paired Batteries Sticker',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/sticker.webp`,
          },
          {
            qty: 3,
            item: 'Inspire 3 Foldable Quick-Release Propellers (Pair)',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/propellers.webp`,
          },
          {
            qty: 1,
            item: 'RC Plus Strap',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/strap.webp`,
          },
          {
            qty: 1,
            item: 'RC Plus Waist Support',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/waist-support.webp`,
          },
          {
            qty: 1,
            item: 'Inspire 3 Trolley Case',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/trolley-case.webp`,
          },
          {
            qty: 1,
            item: 'Zenmuse X9-8K Air Gimbal Camera Case',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/camera-case.webp`,
          },
          {
            qty: 1,
            item: 'Lens Carrying Box (18/24/35/50mm)',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/camera-case.webp`,
          },
          {
            qty: 1,
            item: 'USB-C to USB-C High-Speed Data Cable',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/usb-c-to-usb-c-high-speed-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-C to USB-A Data Cable',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/usb-c-to-usb-a-data-cable.webp`,
          },
          {
            qty: 2,
            item: 'Inspire 3 Gimbal Rubber Dampers',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/dampers.webp`,
          },
          {
            qty: 1,
            item: 'Double-Headed Screwdriver',
            image: `${baseUrl}/products/drones/dji/inspire/inspire3/box/screwdriver.webp`,
          },
        ],
      },
      flyMore: null,
    },
    accessories: {
      battery: accessories.find((a) => a.title.short == 'Inspire 3 Battery'),
      other: null,
    },
    category: 'cinematography',
    available: true,
    brand: 'dji',
    make: 'inspire',
    model: null,
  },

  {
    images: images.products.drones.dji.matrice.m4e.drone,
    title: { long: 'DJI Matrice 4E', short: 'Matrice 4E' },
    tag: 'Intelligent Aerial Operations for Geospatial Excellence',
    desc: 'The Matrice 4E is designed for geospatial applications such as surveying and mapping, construction, and mining, offering advanced features to enhance aerial operations.',
    specs: {
      intro: [
        'Intelligent Recognition With AI, Intelligent Operation',
        'Excellent for Low-Light Environments (0.5 lux)',
        'Crystal Clear Vision: Unveil the Details (112x)',
        'Precision Mapping (Oblique, 3-Directional Ortho, & Smart 3D Capture)',
        'Enhanced Flight Safety',
        'Accessory Upgrades',
      ],
      aircraft: [
        {
          label: 'Takeoff Weight',
          desc: '<249 g',
        },
        {
          label: 'Flight Time (Intelligent Battery, 21.6 kph, no wind)',
          desc: '34 mins',
        },
        {
          label: 'Flight Time (Intelligent Battery Plus, 21.6 kph, no wind)',
          desc: '47 mins',
        },
        {
          label: 'Hovering Time (Intelligent Battery, no wind)',
          desc: '30 mins',
        },
        {
          label: 'Hovering Time (Intelligent Battery Plus, no wind)',
          desc: '40 mins',
        },
        {
          label: 'Flight Distance (Intelligent Battery, 43.2 kph, no wind)',
          desc: '18 km',
        },
        {
          label:
            'Flight Distance (Intelligent Battery Plus, 43.2 kph, no wind)',
          desc: '25 km',
        },
        {
          label: 'Wind Speed Resistance',
          desc: '10.7 m/s (Level 5)',
        },
      ],
    },
    price: {
      former: 726000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/matrice/m4e/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'DJI Matrice 4E',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'DJI RC Plus 2 Enterprise',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'DJI Matrice 4 Series Battery',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'DJI 100W USB-C Power Adapter',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/adapter.webp`,
          },
          {
            qty: 1,
            item: 'DJI Matrice 4 Series Charging Hub',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'microSD Card',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/microsd.webp`,
          },
          {
            qty: 1,
            item: 'DJI Matrice 4E Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/gimbal-protector.webp`,
          },
          {
            qty: 1,
            item: 'DJI Cellular Dongle 2 Pry Bar',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/dongle.webp`,
          },
          {
            qty: 3,
            item: 'DJI Matrice 4 Series Propellers',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/propellers.webp`,
          },
          {
            qty: 1,
            item: '100W Power Adaptor AC Cable',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/adapter-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-C to USB-C Data Cable',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/usb-c-to-usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-A to USB-C Data Cable',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/usb-a-to-usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'DJI Matrice 4 Series Storage Case',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/case.webp`,
          },
          {
            qty: 1,
            item: 'DJI Matrice 4 Series Storage Case Shoulder Strap',
            image: `${baseUrl}/products/drones/dji/matrice/m4e/box/strap.webp`,
          },
        ],
      },
      flyMore: null,
    },
    accessories: {
      battery: accessories.find(
        (a) => a.title.short == 'Matrice 4 Series Battery'
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
    images: images.products.drones.dji.matrice.m4t.drone,
    title: { long: 'DJI Matrice 4T', short: 'Matrice 4T' },
    tag: 'Thermal Imaging for Tactical Precision',
    desc: 'Equipped with a thermal imaging camera and NIR auxiliary light, the Matrice 4T is suitable for industries requiring thermal inspection and monitoring.',
    specs: {
      intro: [
        'Intelligent Recognition With AI, Intelligent Operation',
        'Excellent for Low-Light Environments (0.5 lux)',
        'Crystal Clear Vision: Unveil the Details (112x)',
        'Precision Mapping (Oblique, 3-Directional Ortho, & Smart 3D Capture)',
        'Enhanced Flight Safety',
        'Accessory Upgrades',
      ],
      aircraft: [
        {
          label: 'Takeoff Weight',
          desc: '<249 g',
        },
        {
          label: 'Flight Time (Intelligent Battery, 21.6 kph, no wind)',
          desc: '34 mins',
        },
        {
          label: 'Flight Time (Intelligent Battery Plus, 21.6 kph, no wind)',
          desc: '47 mins',
        },
        {
          label: 'Hovering Time (Intelligent Battery, no wind)',
          desc: '30 mins',
        },
        {
          label: 'Hovering Time (Intelligent Battery Plus, no wind)',
          desc: '40 mins',
        },
        {
          label: 'Flight Distance (Intelligent Battery, 43.2 kph, no wind)',
          desc: '18 km',
        },
        {
          label:
            'Flight Distance (Intelligent Battery Plus, 43.2 kph, no wind)',
          desc: '25 km',
        },
        {
          label: 'Wind Speed Resistance',
          desc: '10.7 m/s (Level 5)',
        },
      ],
    },
    price: {
      former: 990000,
      latter: null,
    },
    kit: {
      basic: {
        image: `${baseUrl}/products/drones/dji/matrice/m4t/box/collective.webp`,
        contents: [
          {
            qty: 1,
            item: 'DJI Matrice 4T',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/aircraft.webp`,
          },
          {
            qty: 1,
            item: 'DJI RC Plus 2 Enterprise',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/controller.webp`,
          },
          {
            qty: 1,
            item: 'DJI Matrice 4 Series Battery',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/battery.webp`,
          },
          {
            qty: 1,
            item: 'DJI 100W USB-C Power Adapter',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/adapter.webp`,
          },
          {
            qty: 1,
            item: 'DJI Matrice 4 Series Charging Hub',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/charging-hub.webp`,
          },
          {
            qty: 1,
            item: 'microSD Card',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/microsd.webp`,
          },
          {
            qty: 1,
            item: 'DJI Matrice 4T Gimbal Protector',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/gimbal-protector.webp`,
          },
          {
            qty: 1,
            item: 'DJI Cellular Dongle 2 Pry Bar',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/dongle.webp`,
          },
          {
            qty: 3,
            item: 'DJI Matrice 4 Series Propellers',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/propellers.webp`,
          },
          {
            qty: 1,
            item: '100W Power Adaptor AC Cable',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/adapter-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-C to USB-C Data Cable',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/usb-c-to-usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'USB-A to USB-C Data Cable',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/usb-a-to-usb-c-data-cable.webp`,
          },
          {
            qty: 1,
            item: 'DJI Matrice 4 Series Storage Case',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/case.webp`,
          },
          {
            qty: 1,
            item: 'DJI Matrice 4 Series Storage Case Shoulder Strap',
            image: `${baseUrl}/products/drones/dji/matrice/m4t/box/strap.webp`,
          },
        ],
      },
      flyMore: null,
    },
    accessories: {
      battery: accessories.find(
        (a) => a.title.short == 'Matrice 4 Series Battery'
      ),
      other: null,
    },
    category: 'enterprise',
    available: true,
    brand: 'dji',
    make: 'matrice',
    model: null,
  },

  // {
  //   images: images.products.drones.dji.matrice.m4d.drone,
  //   title: { long: 'DJI Matrice 4D (With Dock 2)', short: 'Matrice 4D' },
  //   tag: 'Enhanced Detection for Complex Environments',
  //   desc: 'An autonomous drone-in-a-box solution that can be deployed from moving vehicles. The Matrice 4D features a built-in weather station, surveillance cameras, and a 10 km communication range, supporting various industrial applications.',
  //   specs: {
  //     intro: [
  //       'Extended Flight Times (54 minutes)',
  //       'Advanced Camera System (24mm, 70mm, 168mm)',
  //       'Night Scene Mode',
  //       'Auto-Zoom Capability (FlightHub 2)',
  //       'Enhanced Flight Safety',
  //       'IP-rated (IP55)',
  //     ],
  //     aircraft: [
  //       {
  //         label: 'Takeoff Weight',
  //         desc: '<249 g',
  //       },
  //       {
  //         label: 'Flight Time (Intelligent Battery, 21.6 kph, no wind)',
  //         desc: '34 mins',
  //       },
  //       {
  //         label: 'Flight Time (Intelligent Battery Plus, 21.6 kph, no wind)',
  //         desc: '47 mins',
  //       },
  //       {
  //         label: 'Hovering Time (Intelligent Battery, no wind)',
  //         desc: '30 mins',
  //       },
  //       {
  //         label: 'Hovering Time (Intelligent Battery Plus, no wind)',
  //         desc: '40 mins',
  //       },
  //       {
  //         label: 'Flight Distance (Intelligent Battery, 43.2 kph, no wind)',
  //         desc: '18 km',
  //       },
  //       {
  //         label:
  //           'Flight Distance (Intelligent Battery Plus, 43.2 kph, no wind)',
  //         desc: '25 km',
  //       },
  //       {
  //         label: 'Wind Speed Resistance',
  //         desc: '10.7 m/s (Level 5)',
  //       },
  //     ],
  //   },
  //   price: null,
  //   kit: {
  //     basic: {
  //       image: `${baseUrl}/products/drones/dji/matrice/m4d/box/collective.webp`,
  //       contents: [
  //         {
  //           qty: 1,
  //           item: 'Aircraft',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/aircraft.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'Controller',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/controller.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Battery',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/battery.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Power Adapter',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/adapter.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Charging Hub',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/charging-hub.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'microSD Card',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/microsd.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Gimbal Protector',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/gimbal-protector.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Dock 2 Station',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/dock.webp`,
  //         },
  //         {
  //           qty: 3,
  //           item: 'DJI Matrice 4D Series Propellers',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/propellers.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: '100W Power Adaptor AC Cable',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/adapter-cable.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'USB-C to USB-C Data Cable',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/usb-c-to-usb-c-data-cable.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'USB-A to USB-C Data Cable',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/usb-a-to-usb-c-data-cable.webp`,
  //         },
  //         {
  //           qty: 8,
  //           item: 'Screws',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/screws.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Storage Case',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/case.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Storage Case Shoulder Strap',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4d/box/strap.webp`,
  //         },
  //       ],
  //     },
  //     flyMore: null,
  //   },
  //   accessories: {
  //     battery: accessories.find(
  //       (a) => a.title.short == 'Matrice 4D Series Battery'
  //     ),
  //     other: null,
  //   },
  //   category: 'enterprise',
  //   available: true,
  //   brand: 'dji',
  //   make: 'matrice',
  //   model: null,
  // },

  // {
  //   images: images.products.drones.dji.matrice.m4td.drone,
  //   title: { long: 'DJI Matrice 4TD (With Dock 2)', short: 'Matrice 4TD' },
  //   tag: 'Robust Protection for Critical Infrastructure',
  //   desc: 'An autonomous drone-in-a-box solution that can be deployed from moving vehicles. Designed to endure harsh conditions with an impressive IP55 dust and water resistance rating, excels in low-light environments and offers obstacle sensing.',
  //   specs: {
  //     intro: [
  //       'Extended Flight Times (54 minutes)',
  //       'Advanced Camera System (24mm, 70mm, 168mm)',
  //       'Night Scene Mode',
  //       'Auto-Zoom Capability (FlightHub 2)',
  //       'Enhanced Flight Safety',
  //       'IP-rated (IP55)',
  //     ],
  //     aircraft: [
  //       {
  //         label: 'Takeoff Weight',
  //         desc: '<249 g',
  //       },
  //       {
  //         label: 'Flight Time (Intelligent Battery, 21.6 kph, no wind)',
  //         desc: '34 mins',
  //       },
  //       {
  //         label: 'Flight Time (Intelligent Battery Plus, 21.6 kph, no wind)',
  //         desc: '47 mins',
  //       },
  //       {
  //         label: 'Hovering Time (Intelligent Battery, no wind)',
  //         desc: '30 mins',
  //       },
  //       {
  //         label: 'Hovering Time (Intelligent Battery Plus, no wind)',
  //         desc: '40 mins',
  //       },
  //       {
  //         label: 'Flight Distance (Intelligent Battery, 43.2 kph, no wind)',
  //         desc: '18 km',
  //       },
  //       {
  //         label:
  //           'Flight Distance (Intelligent Battery Plus, 43.2 kph, no wind)',
  //         desc: '25 km',
  //       },
  //       {
  //         label: 'Wind Speed Resistance',
  //         desc: '10.7 m/s (Level 5)',
  //       },
  //     ],
  //   },
  //   price: null,
  //   kit: {
  //     basic: {
  //       image: `${baseUrl}/products/drones/dji/matrice/m4td/box/collective.webp`,
  //       contents: [
  //         {
  //           qty: 1,
  //           item: 'Aircraft',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/aircraft.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'Controller',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/controller.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Battery',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/battery.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Power Adapter',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/adapter.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Charging Hub',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/charging-hub.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'microSD Card',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/microsd.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Gimbal Protector',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/gimbal-protector.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Dock 2 Station',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/dock.webp`,
  //         },
  //         {
  //           qty: 3,
  //           item: 'DJI Matrice 4D Series Propellers',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/propellers.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: '100W Power Adaptor AC Cable',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/adapter-cable.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'USB-C to USB-C Data Cable',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/usb-c-to-usb-c-data-cable.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'USB-A to USB-C Data Cable',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/usb-a-to-usb-c-data-cable.webp`,
  //         },
  //         {
  //           qty: 8,
  //           item: 'Screws',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/screws.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Storage Case',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/case.webp`,
  //         },
  //         {
  //           qty: 1,
  //           item: 'DJI Matrice 4D Series Storage Case Shoulder Strap',
  //           image: `${baseUrl}/products/drones/dji/matrice/m4td/box/strap.webp`,
  //         },
  //       ],
  //     },
  //     flyMore: null,
  //   },
  //   accessories: {
  //     battery: accessories.find(
  //       (a) => a.title.short == 'Matrice 4D Series Battery'
  //     ),
  //     other: null,
  //   },
  //   category: 'enterprise',
  //   available: true,
  //   brand: 'dji',
  //   make: 'matrice',
  //   model: null,
  // },

  {
    images: images.products.drones.dji.matrice.matrice30t.drone,
    title: { long: 'DJI Matrice 30T', short: 'Matrice 30T' },
    tag: 'Versatile Aerial Intelligence for Enterprise',
    desc: 'The Matrice 30T is equipped with a thermal camera, wide-angle camera, and laser rangefinder, making it suitable for a wide range of industries, including electricity, emergency response, public safety, and forestry conservation. ',
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
    images: images.products.drones.autel.evo2.drone,
    title: {
      long: 'Autel Evo II Dual 640T (Enterprise Bundle)',
      short: 'Evo II Dual 640T',
    },
    desc: 'The Autel EVO II Dual is equipped with a high-resolution thermal imaging camera and an 8K visual camera, providing powerful imaging capabilities for a variety of professional applications. Its compact, foldable design and advanced obstacle avoidance make it ideal for industries such as firefighting, law enforcement, search and rescue, infrastructure inspection, and agriculture.',
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
];

export const upcomingDrones = [];

export default products;
