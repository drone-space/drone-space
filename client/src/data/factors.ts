import {
	IconDiscount2,
	IconDropletBolt,
	IconGavel,
	IconHeadset,
	IconLayersIntersect,
	IconPhotoSensor3,
} from "@tabler/icons-react";

const factors = [
	{
		icon: IconGavel,
		title: "Laws and Licences",
		desc: "One major difference between commercial drones and camera drones is the question of commercial drone laws and commercial drone licences which is a lot less for camera drones.",
	},
	{
		icon: IconDropletBolt,
		title: "Durability",
		desc: "The first difference between commercial drones and hobbyist drones is the durability of the product—commercial drones, like other pieces of commercial equipment, are designed to do work day in and day out, and they have a much more robust construction than drones meant for occasional use.",
	},
	{
		icon: IconHeadset,
		title: "Support",
		desc: "Does your supplier offer ongoing support and maintenance? This is probable with commercial drone manufacturers, who will provide support with customization, ongoing maintenance and repairs, unlike the case with consumer-grade drones.",
	},
	{
		icon: IconDiscount2,
		title: "Cost",
		desc: "Price is often the most visible difference. The higher price is for commercial drones because of the industrial nature of its construction which will down as technologies mature.",
	},
	{
		icon: IconLayersIntersect,
		title: "Sensor Integration",
		desc: "Many hobbyist drones allow for some level of camera integration, but the when accuracy and precision are essential, they are not the best, which makes them a poor choice for creating accurate maps or taking precise readings for research purposes.",
	},
	{
		icon: IconPhotoSensor3,
		title: "Sensor Control",
		desc: "Most camera drones do not control the points at which images are taken; photographs are taken at ad hoc moments. This results in sub-optimal photographs creating more unnecessary data and time-consuming post-processing. This lack of detail could also result in a failed mapping mission for example.",
	},
];

export default factors;
