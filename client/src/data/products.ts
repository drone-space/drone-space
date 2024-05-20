import content from "../assets/content";
import image from "../assets/images";
import parse from "../utilities/parser/linkify";

const products = [
	{
		image: image.products.drone.dji.air.air2s,
		desc: content.products.drones.dji.mavic.mavAir.air2s,

		link: `/drone-shop/${parse(
			content.products.drones.dji.mavic.mavAir.air2s.title.long
		)}`,
		filters: {
			available: true,
			type: ["camera"],
			brand: "dji",
			make: "air",
		},
	},
	{
		image: image.products.drone.dji.agras.t40,
		desc: content.products.drones.dji.agras.t40,

		link: `/drone-shop/${parse(
			content.products.drones.dji.agras.t40.title.long
		)}`,
		filters: {
			available: true,
			type: ["agriculture", "enterprise"],
			brand: "dji",
			make: "agras",
		},
	},
	{
		image: image.products.drone.dji.m30t,
		desc: content.products.drones.dji.m30t,
		link: `/drone-shop/${parse(
			content.products.drones.dji.m30t.title.long
		)}`,
		filters: {
			available: true,
			type: ["enterprise"],
			brand: "dji",
			make: "matrice",
		},
	},
	{
		image: image.products.drone.autel.evo2,
		desc: content.products.drones.autel.evo.evo2Dual640t,
		link: `/drone-shop/${parse(
			content.products.drones.autel.evo.evo2Dual640t.title.long
		)}`,
		filters: {
			available: true,
			type: ["enterprise"],
			brand: "autel",
			make: "evo",
		},
	},
	{
		image: image.products.drone.dji.mavic.mav3classic,
		desc: content.products.drones.dji.mavic.mav3classic,
		link: `/drone-shop/${parse(
			content.products.drones.dji.mavic.mav3classic.title.long
		)}`,
		filters: {
			available: true,
			type: ["camera"],
			brand: "dji",
			make: "mavic",
		},
	},
	{
		image: image.products.drone.dji.mavic.mav3t,
		desc: content.products.drones.dji.mavic.mav3t,
		link: `/drone-shop/${parse(
			content.products.drones.dji.mavic.mav3t.title.long
		)}`,
		filters: {
			available: true,
			type: ["enterprise"],
			brand: "dji",
			make: "mavic",
		},
	},
	{
		image: image.products.drone.dji.mavic.mav3e,
		desc: content.products.drones.dji.mavic.mav3e,
		link: `/drone-shop/${parse(
			content.products.drones.dji.mavic.mav3e.title.long
		)}`,
		filters: {
			available: true,
			type: ["enterprise"],
			brand: "dji",
			make: "mavic",
		},
	},
	{
		image: image.products.drone.dji.mavic.mav3multispectral,
		desc: content.products.drones.dji.mavic.mav3multispectral,
		link: `/drone-shop/${parse(
			content.products.drones.dji.mavic.mav3multispectral.title.long
		)}`,
		filters: {
			available: true,
			type: ["agriculture", "enterprise"],
			brand: "dji",
			make: "mavic",
		},
	},
	{
		image: image.products.drone.dji.mini.mini3pro,
		desc: content.products.drones.dji.mini.mini3pro,
		link: `/drone-shop/${parse(
			content.products.drones.dji.mini.mini3pro.title.long
		)}`,
		filters: {
			available: true,
			type: ["camera"],
			brand: "dji",
			make: "mini",

			featured: true,
			starter: true,
		},
	},
];

export default products;
