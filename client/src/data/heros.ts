import image from "../assets/images";

const heros = {
	about: {
		image: image.gallery.graduation.yr2022.image9,
		title: "About",
		crumbs: [
			{ label: "Home", link: "/" },
			{ label: "About", link: "#" },
		],
	},

	pricing: {
		training: {
			image: image.gallery.innovation.jamuhuri.image1,
			title: "Training Pricing",
			crumbs: [
				{ label: "Home", link: "/" },
				{ label: "Pricing", link: "#" },
			],
		},
	},

	training: {
		root: {
			image: image.gallery.graduation.yr2022.image4,
			title: "Drone Training",
			crumbs: [
				{ label: "Home", link: "/" },
				{ label: "Training", link: "#" },
			],
		},
		course: {
			rpl: {
				image: image.gallery.graduation.yr2022.image4,
				title: "RPL Training",
				crumbs: [
					{ label: "Home", link: "/" },
					{ label: "Training", link: "#training" },
					{ label: "RPL Training", link: "#" },
				],
			},
			advanced: {
				image: image.gallery.graduation.yr2022.image8,
				title: "Advanced Training",
				crumbs: [
					{ label: "Home", link: "/" },
					{ label: "Training", link: "#training" },
					{ label: "Advanced Training", link: "#" },
				],
			},
			junior: {
				image: image.gallery.projects.project1.image3,
				title: "Holiday Camp",
				crumbs: [
					{ label: "Home", link: "/" },
					{ label: "Training", link: "#training" },
					{ label: "Holiday Camp", link: "#" },
				],
			},
		},
	},

	services: {
		image: image.gallery.innovation.jamuhuri.image9,
		title: "Drone Solutions",
		crumbs: [
			{ label: "Home", link: "/" },
			{ label: "Drone Solutions", link: "#" },
		],
	},

	shop: {
		// root: {
		// 	image: image.gallery.innovation.jamuhuri.image6,
		// 	title: "Shop",
		// 	crumbs: [
		// 		{ label: "Home", link: "/" },
		// 		{ label: "Shop", link: "#" },
		// 	],
		// },
		camera: {
			image: image.gallery.innovation.jamuhuri.image6,
			title: "Camera Drones",
			crumbs: [
				{ label: "Home", link: "/" },
				{ label: "Shop", link: "/shop" },
				{ label: "Camera Drones", link: "#" },
			],
		},
		enterprise: {
			image: image.gallery.innovation.jamuhuri.image8,
			title: "Enterprise Drones",
			crumbs: [
				{ label: "Home", link: "/" },
				{ label: "Shop", link: "/shop" },
				{ label: "Enterprise Drones", link: "#" },
			],
		},
		agriculture: {
			image: image.gallery.innovation.jamuhuri.image4,
			title: "Agriculture Drones",
			crumbs: [
				{ label: "Home", link: "/" },
				{ label: "Shop", link: "/shop" },
				{ label: "Agriculture Drones", link: "#" },
			],
		},
	},

	blog: {
		image: image.gallery.graduation.yr2022.image4,
		title: "Blog",
		crumbs: [
			{ label: "Home", link: "/" },
			{ label: "Blog", link: "#" },
		],
	},

	gallery: {
		image: image.gallery.projects.project1.image2,
		title: "Gallery",
		crumbs: [
			{ label: "Home", link: "/" },
			{ label: "Gallery", link: "#" },
		],
	},

	contact: {
		image: image.gallery.innovation.jamuhuri.image2,
		title: "Contact",
		crumbs: [
			{ label: "Home", link: "/" },
			{ label: "Contact", link: "#" },
		],
	},

	faq: {
		image: image.gallery.innovation.jamuhuri.image9,
		title: "FAQ",
		crumbs: [
			{ label: "Home", link: "/" },
			{ label: "FAQ", link: "#" },
		],
	},

	error: {
		error404: {
			image: image.gallery.graduation.yr2022.image4,
			title: "Error",
			crumbs: [
				{ label: "Home", link: "/" },
				{ label: "Error", link: "#" },
			],
		},
		error500: {
			image: image.gallery.graduation.yr2022.image7,
			title: "Error",
			crumbs: [
				{ label: "Home", link: "/" },
				{ label: "Error", link: "#" },
			],
		},
	},
};

export default heros;
