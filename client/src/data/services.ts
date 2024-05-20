import content from "../assets/content";
import image from "../assets/images";
import parse from "../utilities/parser/linkify";

const services = [
	{
		image: image.services.image2,
		title: content.service.droneConsultancy.title,
		desc: {
			intro: [
				content.service.droneConsultancy.intro.p1,
				content.service.droneConsultancy.intro.p2,
			],
			features: content.service.droneConsultancy.features.desc,
			links: {
				default: `/drone-services/${parse(
					content.service.droneConsultancy.title
				)}`,
				specific: [{ link: "/drone-shop", label: "Go To Shop" }],
			},
		},
	},
	{
		image: image.services.image5,
		title: content.service.rocSupport.title,
		desc: {
			intro: [
				content.service.rocSupport.intro.p1,
				content.service.rocSupport.intro.p2,
			],
			features: content.service.rocSupport.features.desc,
			links: {
				default: `/drone-services/${parse(
					content.service.rocSupport.title
				)}`,
				specific: null,
			},
		},
	},
	{
		image: image.services.image1,
		title: content.service.aerialCinematography.title,
		desc: {
			intro: [content.service.aerialCinematography.intro],
			features: content.service.aerialCinematography.features.desc,
			links: {
				default: `/drone-services/${parse(
					content.service.aerialCinematography.title
				)}`,
				specific: null,
			},
		},
	},
	{
		image: image.services.image3,
		title: content.service.solarInspection.title,
		desc: {
			intro: [
				content.service.solarInspection.intro.p1,
				content.service.solarInspection.intro.p2,
				content.service.solarInspection.intro.p3,
			],
			features: content.service.solarInspection.features.desc,
			links: {
				default: `/drone-services/${parse(
					content.service.solarInspection.title
				)}`,
				specific: null,
			},
		},
	},
	{
		image: image.services.image4,
		title: content.service.droneSeeding.title,
		desc: {
			intro: [content.service.droneSeeding.intro],
			features: content.service.droneSeeding.features.desc,
			links: {
				default: `/drone-services/${parse(
					content.service.droneSeeding.title
				)}`,
				specific: null,
			},
		},
	},
	{
		image: image.training.image5,
		title: content.service.droneMapping.title,
		desc: {
			intro: [
				content.service.droneMapping.intro.p1,
				content.service.droneMapping.intro.p2,
			],
			features: content.service.droneMapping.features.desc,
			links: {
				default: `/drone-services/${parse(
					content.service.droneMapping.title
				)}`,
				specific: null,
			},
		},
	},
];

export default services;
