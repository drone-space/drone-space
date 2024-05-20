import categories from "../categories";
import bvlos from "./bvlos";
import fixedWing from "./fixed-wing";
import instructorRating from "./instructor-rating";
import multiRotor from "./multi-rotor";

const rpl = {
	intro: {
		p1: "The Remote Pilot License (RPL) course is designed for individuals who are interested in starting a career as a drone pilot or for unlicensed drone pilots who want to fly legally. This course is also suitable for individuals who are looking to add drone operation skills to their CVs.",
		p2: "By obtaining an RPL, you will be able to legally operate drones in Kenya and potentially pursue a career in various industries, including cinematography, agriculture, and construction, survey and mapping among others.",
	},
	categories: {
		title: "What Drone Categories are under the RPL Training Course?",
		desc: {
			p1: "There are Four categories that are under the RPL Training however, drone space offers only three categories",
			list: {
				li1: categories.rpl.fixedWing.long,
				li2: categories.rpl.multiRotor.long,
				li3: categories.rpl.instructorRating.long,
			},
		},
	},
	overview: {
		title: "Course Overview",
		desc: "The Drone Space Remote Pilot License (RPL) Multi-Rotor training course provides you with the fundamental knowledge & skills required to operate drones safely and legally for non-commercial flights. The course also provides students with an understanding of THE CIVIL AVIATION (UNMANNED AIRCRAFT SYSTEMS) REGULATIONS, 2020 associated with the operation of unmanned aircraft systems (UAS). Students gain knowledge and an understanding of the evolving regulations and how they apply to training of Remote Pilots as well as to recreational and commercial UAS operations. students explore guidance on the requirements, operational and technical aspects and the risk-based processes underpinning the application and granting of authorizations for UAS operations.",
		list: [
			{
				title: "Part I - Theory (Modules)",
				desc: "The modules are listed below",
			},
			{
				title: "Part II - Practicals",
				desc: "One on One instruction with professional flight instructors with a recommendation of 5 hours of flight time.",
			},
			{
				title: "Part III - Checkout (Skills Test)",
				desc: "Students undergo a checkout flight by a qualified designated flight examiner (DFE) where their knowledge of the rules of the air, regulations, airmanship & flight ability will be tested and evaluated in accordance with the KCAA’s Manual of Implementing Standards.",
			},
			{
				title: "Part IV - RPL Certification",
				desc: "Passing this test will qualify our students to complete an application for a Remote Pilot. License (RPL) at KCAA.",
			},
		],
	},
	objectives: {
		title: "Course Objectives",
		desc: {
			p1: "By the end of this course, students are able to demonstrate knowledge of:",
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
		desc: "The course duration is dependent on the amount of time you can commit to studying each week. However, it's important to note that the course is designed to be comprehensive and provides all the information you need to successfully complete the Remote Pilot License (RPL) exam. With a mix of video lessons and online quizzes, you'll have the opportunity to learn at your own pace and retain the information effectively. Whether you are a busy professional, a student or just someone looking to advance their career, our online class provides you with the tools and resources you need to achieve your goals.",
	},
	exams: {
		title: "Course Evaluation",
		desc: "Upon completion of the online course, students are required to sit for exams at any of our training centers after which they receive face to face practical flight instruction at any of our Airfields (Sigona, Mombasa or Naivasha).",
	},

	course: {
		bvlos: bvlos,
		fixedWing: fixedWing,
		instructorRating: instructorRating,
		multiRotor: multiRotor,
	},
};

export default rpl;
