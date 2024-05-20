import categories from "../categories";
import droneMapping from "./drone-mapping";
import radioTelephony from "./radio-telephony";
import thermography from "./thermography";

const advanced = {
	intro: {
		p1: "The advanced training courses are each divided into three sections i.e.  theory, practical and skills test.",
		p2: "The courses provide you with the fundamental knowledge & skills required to operate drones safely and legally for commercial purposes. The course also provides students with an understanding of THE CIVIL AVIATION (UNMANNED AIRCRAFT SYSTEMS) REGULATIONS, 2020 associated with the operation of unmanned aircraft systems (UAS). Students gain knowledge and an understanding of the evolving regulations and how they apply to the training as well as to commercial UAS operations. students explore guidance on the requirements, operational and technical aspects and the risk-based processes underpinning the application and granting of authorizations for UAS operations.",
	},
	categories: {
		title: "What classifications are under the advanced training?",
		desc: {
			p1: "There are three categories of advanced training:",
			list: {
				li1: categories.advanced.droneMapping.long,
				li2: categories.advanced.thermography.long,
				li3: categories.advanced.radioTelephony.long,
			},
		},
	},
	overview: {
		title: "Course Overview",
		desc: "The Drone Space advanced training courses provides you with the fundamental knowledge & skills required to operate drones safely and legally for commercial purposes. The course also provides students with an understanding of THE CIVIL AVIATION (UNMANNED AIRCRAFT SYSTEMS) REGULATIONS, 2020 associated with the operation of unmanned aircraft systems (UAS). Students gain knowledge and an understanding of the evolving regulations and how they apply to the training as well as to commercial UAS operations. students explore guidance on the requirements, operational and technical aspects and the risk-based processes underpinning the application and granting of authorizations for UAS operations.",
	},
	objectives: {
		title: "Course Objectives",
		desc: {
			p1: "By the end of advanced training, students are able to demonstrate knowledge of the following:",
			list: {
				li1: "The current and future regulatory framework and how it impacts on UAS operations",
				li2: "The role of the regulator (KCAA)",
				li3: "The different types of UAS platform and what their functionality is",
				li4: "The fundamental principles of UAS operation (VLOS, BVLOS)",
				li5: "The fundamental of aviation safety and the role of specific operational risk assessments",
				li6: "An overview of future UAS technology and their role in enhancing UAS operational ",
			},
		},
	},
	modules: {
		title: "Key Modules",
		desc: {
			p1: "",
			list: {
				li1: "Air Law/ CAA (Unmanned Aircraft Systems) Regulations 2020",
				li2: "Operating Procedures and Specifications",
				li3: "UAS General Knowledge",
				li4: "UAS Theory of flight",
				li5: "Meteorology",
				li6: "Navigation",
				li7: "Human Factors",
				li8: "Flight Planning",
				li9: "Radio Telephony (Separate)",
			},
		},
	},
	appDoc: {
		title: "KCAA Approved Doctors",
		desc: {
			location:
				"Sky Clinical Services, Mugoya Shopping Center - South C, Nairobi.",
			docs: {
				doc1: {
					name: "Dr. Wanjohi",
					phone: "0722833492",
					email: "wambakiwanjohi@gmail.com",
				},
				doc2: {
					name: "Dr. Phenny",
					phone: "0722302086",
					email: "kphenny123@gmail.com",
				},
			},
		},
	},
	delivery: {
		title: "RPL Theory Class Delivery Methods",
		desc: {
			list: {
				li1: {
					title: "Classroom",
					desc: {
						p1: "Theory classes are delivered face-to-face at our training classes in:",
						list: {
							li1: "Westlands - Nairobi",
							li2: "Nyali – Mombasa",
							li3: "Enashipai – Naivasha",
						},
					},
				},
				li2: {
					title: "Online",
					desc: "The online class allows you to study at your own pace, giving you the convenience and flexibility you need to fit education into your busy schedule. Whether you prefer to study in the morning, evening or weekend, our online class is designed to accommodate your unique schedule and learning style.",
				},
			},
		},
	},
	duration: {
		title: "Course Duration",
		desc: "The course duration is dependent on the amount of time you can commit to studying each week. However, it's important to note that the course is designed to be comprehensive and provides all the information you need to successfully complete the advanced training course exam. With a mix of video lessons and online quizzes, you'll have the opportunity to learn at your own pace and retain the information effectively. Whether you are a busy professional, a student or just someone looking to advance their career, our online class provides you with the tools and resources you need to achieve your goals.",
	},
	exams: {
		title: "Course Evaluation",
		desc: "Upon completion of the online course, students are required to sit for exams at any of our training centers after which they receive face to face practical flight instruction at any of our Airfields (Sigona, Mombasa or Naivasha).",
	},

	course: {
		droneMapping: droneMapping,
		radioTelephony: radioTelephony,
		thermography: thermography,
	},
};

export default advanced;
