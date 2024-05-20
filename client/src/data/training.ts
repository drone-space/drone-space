import content from "../assets/content";
import image from "../assets/images";
import parse from "../utilities/parser/linkify";

const training = {
	title: "Drone Training",
	desc: {
		rpl: {
			intro: [content.course.rpl.intro.p1, content.course.rpl.intro.p2],
			categories: {
				title: content.course.rpl.categories.title,
				desc: {
					p1: content.course.rpl.categories.desc.p1,
					list: [
						content.course.rpl.categories.desc.list.li1,
						content.course.rpl.categories.desc.list.li2,
						content.course.rpl.categories.desc.list.li3,
					],
				},
			},
			overview: {
				title: content.course.rpl.overview.title,
				desc: content.course.rpl.overview.desc,
				list: content.course.rpl.overview.list,
			},
			objectives: {
				title: content.course.rpl.objectives.title,
				desc: {
					p1: content.course.rpl.objectives.desc.p1,
					list: [
						content.course.rpl.objectives.desc.list.li1,
						content.course.rpl.objectives.desc.list.li2,
						content.course.rpl.objectives.desc.list.li3,
						content.course.rpl.objectives.desc.list.li4,
						content.course.rpl.objectives.desc.list.li5,
						content.course.rpl.objectives.desc.list.li6,
					],
				},
			},
			modules: {
				title: content.course.rpl.modules.title,
				desc: {
					p1: content.course.rpl.modules.desc.p1,
					list: [
						content.course.rpl.modules.desc.list.li1,
						content.course.rpl.modules.desc.list.li2,
						content.course.rpl.modules.desc.list.li3,
						content.course.rpl.modules.desc.list.li4,
						content.course.rpl.modules.desc.list.li5,
						content.course.rpl.modules.desc.list.li6,
						content.course.rpl.modules.desc.list.li7,
						content.course.rpl.modules.desc.list.li8,
						content.course.rpl.modules.desc.list.li9,
					],
				},
			},
			appDoc: {
				title: content.course.rpl.appDoc.title,
				desc: {
					location: content.course.rpl.appDoc.desc.location,
					docs: [
						content.course.rpl.appDoc.desc.docs.doc1,
						content.course.rpl.appDoc.desc.docs.doc2,
					],
				},
			},
			// delivery: {},
			duration: {
				title: content.course.rpl.duration.title,
				desc: content.course.rpl.duration.desc,
			},
			exams: {
				title: content.course.rpl.exams.title,
				desc: content.course.rpl.exams.desc,
			},
		},
		advanced: {
			intro: [
				content.course.advanced.intro.p1,
				content.course.advanced.intro.p2,
			],
			categories: {
				title: content.course.advanced.categories.title,
				desc: {
					p1: content.course.advanced.categories.desc.p1,
					list: [
						content.course.advanced.categories.desc.list.li1,
						content.course.advanced.categories.desc.list.li2,
						content.course.advanced.categories.desc.list.li3,
					],
				},
			},
			overview: {
				title: content.course.advanced.overview.title,
				desc: content.course.advanced.overview.desc,
			},
			objectives: {
				title: content.course.advanced.objectives.title,
				desc: {
					p1: content.course.advanced.objectives.desc.p1,
					list: [
						content.course.advanced.objectives.desc.list.li1,
						content.course.advanced.objectives.desc.list.li2,
						content.course.advanced.objectives.desc.list.li3,
						content.course.advanced.objectives.desc.list.li4,
						content.course.advanced.objectives.desc.list.li5,
						content.course.advanced.objectives.desc.list.li6,
					],
				},
			},
			modules: {
				title: content.course.advanced.modules.title,
				desc: {
					p1: content.course.advanced.modules.desc.p1,
					list: [
						content.course.advanced.modules.desc.list.li1,
						content.course.advanced.modules.desc.list.li2,
						content.course.advanced.modules.desc.list.li3,
						content.course.advanced.modules.desc.list.li4,
						content.course.advanced.modules.desc.list.li5,
						content.course.advanced.modules.desc.list.li6,
						content.course.advanced.modules.desc.list.li7,
						content.course.advanced.modules.desc.list.li8,
						content.course.advanced.modules.desc.list.li9,
					],
				},
			},
			appDoc: {
				title: content.course.advanced.appDoc.title,
				desc: {
					location: content.course.advanced.appDoc.desc.location,
					docs: [
						content.course.advanced.appDoc.desc.docs.doc1,
						content.course.advanced.appDoc.desc.docs.doc2,
					],
				},
			},
			// delivery: {},
			duration: {
				title: content.course.advanced.duration.title,
				desc: content.course.advanced.duration.desc,
			},
			exams: {
				title: content.course.advanced.exams.title,
				desc: content.course.advanced.exams.desc,
			},
		},
		courses: {
			basic: [
				{
					img: image.training.image1,
					title: content.course.rpl.course.fixedWing.title,
					desc: content.course.rpl.course.fixedWing.desc,
					links: {
						default: `/drone-training/${parse(
							content.course.rpl.course.fixedWing.title
						)}`,
						specific: null,
					},
					type: "rpl",
					offered: false,
				},
				{
					img: image.training.image2,
					title: content.course.rpl.course.multiRotor.title,
					desc: content.course.rpl.course.multiRotor.desc,
					links: {
						default: `/drone-training/${parse(
							content.course.rpl.course.multiRotor.title
						)}`,
						specific: null,
					},
					type: "rpl",
					offered: true,
				},
				{
					img: image.training.image3,
					title: content.course.rpl.course.bvlos.title,
					desc: content.course.rpl.course.bvlos.desc,
					links: {
						default: `/drone-training/${parse(
							content.course.rpl.course.bvlos.title
						)}`,
						specific: null,
					},
					type: "rpl",
					offered: false,
				},
				{
					img: image.training.image4,
					title: content.course.rpl.course.instructorRating.title,
					desc: content.course.rpl.course.instructorRating.desc,
					links: {
						default: `/drone-training/${parse(
							content.course.rpl.course.instructorRating.title
						)}`,
						specific: null,
					},
					type: "rpl",
					offered: true,
				},
			],
			advanced: [
				{
					img: image.training.image5,
					title: content.course.advanced.course.droneMapping.title,
					desc: content.course.advanced.course.droneMapping.desc,
					links: {
						default: `/drone-training/${parse(
							content.course.advanced.course.droneMapping.title
						)}`,
						specific: null,
					},
					type: "advanced",
					offered: true,
				},
				{
					img: image.training.image6,
					title: content.course.advanced.course.thermography.title,
					desc: content.course.advanced.course.thermography.desc,
					links: {
						default: `/drone-training/${parse(
							content.course.advanced.course.thermography.title
						)}`,
						specific: null,
					},
					type: "advanced",
					offered: true,
				},
				{
					img: image.training.image7,
					title: content.course.advanced.course.radioTelephony.title,
					desc: content.course.advanced.course.radioTelephony.desc,
					links: {
						default: `/drone-training/${parse(
							content.course.advanced.course.radioTelephony.title
						)}`,
						specific: null,
					},
					type: "advanced",
					offered: true,
				},
			],
			junior: {
				img: image.training.image8,
				title: content.course.junior.holidayCamp.title,
				desc: content.course.junior.holidayCamp.desc,
				links: {
					default: `/drone-training/junior`,
					specific: null,
				},
				type: "junior",
				offered: true,
			},
		},
	},
};

export default training;
