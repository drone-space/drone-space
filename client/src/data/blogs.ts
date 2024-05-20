import content from "../assets/content";
import image from "../assets/images";
import parse from "../utilities/parser/linkify";

const blogs = [
	{
		image: image.gallery.airfield.image1,
		title: content.blog.yr2022.b220328.title,
		desc: {
			p: [
				content.blog.yr2022.b220328.desc.p.p1,
				content.blog.yr2022.b220328.desc.p.p2,
				content.blog.yr2022.b220328.desc.p.p3,
				content.blog.yr2022.b220328.desc.p.p4,
				content.blog.yr2022.b220328.desc.p.p5,
				content.blog.yr2022.b220328.desc.p.p6,
				content.blog.yr2022.b220328.desc.p.p7,
			],
			quotes: null,
			list: null,
			images: null,
		},
		date: content.blog.yr2022.b220328.date,
		views: 2254,
		comments: 432,
		link: `/blog/${parse(content.blog.yr2022.b220328.title)}`,
	},
	{
		image: image.gallery.innovation.jamuhuri.image3,
		title: content.blog.yr2022.b220831.title,
		desc: {
			p: [
				content.blog.yr2022.b220831.desc.p.p1,
				content.blog.yr2022.b220831.desc.p.p2,
				content.blog.yr2022.b220831.desc.p.p3,
				content.blog.yr2022.b220831.desc.p.p4,
				content.blog.yr2022.b220831.desc.p.p5,
				content.blog.yr2022.b220831.desc.p.p6,
			],
			quotes: null,
			list: null,
			images: null,
		},
		date: content.blog.yr2022.b220831.date,
		views: 1658,
		comments: 768,
		link: `/blog/${parse(content.blog.yr2022.b220831.title)}`,
	},
	{
		image: image.gallery.expo.yr2022.image5,
		title: content.blog.yr2023.b230126.title,
		desc: {
			p: [
				content.blog.yr2023.b230126.desc.p.p1,
				content.blog.yr2023.b230126.desc.p.p2,
				content.blog.yr2023.b230126.desc.p.p3,
			],
			quotes: null,
			list: [
				{
					title: content.blog.yr2023.b230126.desc.list.li1.title,
					desc: content.blog.yr2023.b230126.desc.list.li1.desc,
				},
				{
					title: content.blog.yr2023.b230126.desc.list.li2.title,
					desc: content.blog.yr2023.b230126.desc.list.li2.title,
				},
				{
					title: content.blog.yr2023.b230126.desc.list.li3.title,
					desc: content.blog.yr2023.b230126.desc.list.li3.desc,
				},
				{
					title: content.blog.yr2023.b230126.desc.list.li4.title,
					desc: content.blog.yr2023.b230126.desc.list.li4.desc,
				},
			],
			images: null,
		},
		date: content.blog.yr2023.b230126.date,
		views: 4579,
		comments: 974,
		link: `/blog/${parse(content.blog.yr2023.b230126.title)}`,
	},
	{
		image: image.gallery.expo.yr2022.image2,
		title: content.blog.yr2023.b230328.title,
		desc: {
			p: [
				content.blog.yr2023.b230328.desc.p.p1,
				content.blog.yr2023.b230328.desc.p.p2,
				content.blog.yr2023.b230328.desc.p.p3,
				content.blog.yr2023.b230328.desc.p.p4,
				content.blog.yr2023.b230328.desc.p.p5,
				content.blog.yr2023.b230328.desc.p.p6,
				content.blog.yr2023.b230328.desc.p.p7,
			],
			quotes: null,
			list: null,
			images: [
				{
					title: "Expo Image 1",
					image: image.gallery.expo.yr2022.image5,
				},
				{
					title: "Expo Image 2",
					image: image.gallery.expo.yr2022.image3,
				},
				{
					title: "Expo Image 3",
					image: image.gallery.expo.yr2022.image8,
				},
			],
		},
		date: content.blog.yr2023.b230328.date,
		views: 1567,
		comments: 227,
		link: `/blog/${parse(content.blog.yr2023.b230328.title)}`,
	},
	{
		image: image.gallery.graduation.yr2022.image9,
		title: content.blog.yr2023.b230522.title,
		desc: {
			p: [
				content.blog.yr2023.b230522.desc.p.p1,
				content.blog.yr2023.b230522.desc.p.p2,
				content.blog.yr2023.b230522.desc.p.p3,
				content.blog.yr2023.b230522.desc.p.p4,
				content.blog.yr2023.b230522.desc.p.p5,
			],
			quotes: null,
			list: null,
			images: [
				{
					title: "Graduation Image 1",
					image: image.gallery.graduation.yr2022.image3,
				},
				{
					title: "Graduation Image 2",
					image: image.gallery.graduation.yr2022.image12,
				},
				{
					title: "Graduation Image 3",
					image: image.gallery.graduation.yr2022.image7,
				},
			],
		},
		date: content.blog.yr2023.b230522.date,
		views: 5676,
		comments: 732,
		link: `/blog/${parse(content.blog.yr2023.b230522.title)}`,
	},
	{
		image: image.blogs.yr2023.b0831.image1,
		title: content.blog.yr2023.b230831.title,
		desc: {
			p: [
				content.blog.yr2023.b230831.desc.p.p1,
				content.blog.yr2023.b230831.desc.p.p2,
			],
			quotes: [
				{
					cite: "- Denis Mumo",
					title: content.blog.yr2023.b230831.desc.quote.q1,
				},
			],
			list: [
				{
					title: content.blog.yr2023.b230831.desc.list.li1.title,
					desc: `${content.blog.yr2023.b230831.desc.list.li1.desc.p.p1} ${content.blog.yr2023.b230831.desc.list.li1.desc.p.p2}`,
				},
				{
					title: content.blog.yr2023.b230831.desc.list.li2.title,
					desc: `${content.blog.yr2023.b230831.desc.list.li2.desc.p.p1}`,
				},
				{
					title: content.blog.yr2023.b230831.desc.list.li3.title,
					desc: `${content.blog.yr2023.b230831.desc.list.li3.desc.p.p1}`,
				},
				{
					title: content.blog.yr2023.b230831.desc.list.li4.title,
					desc: `${content.blog.yr2023.b230831.desc.list.li4.desc.p.p1}`,
				},
			],
			images: [
				{
					title: "Blog Image 1",
					image: image.blogs.yr2023.b0831.image1,
				},
				{
					title: "Blog Image 2",
					image: image.blogs.yr2023.b0831.image2,
				},
				{
					title: "Blog Image 3",
					image: image.blogs.yr2023.b0831.image3,
				},
			],
		},
		date: content.blog.yr2023.b230831.date,
		views: 3684,
		comments: 547,
		link: `/blog/${parse(content.blog.yr2023.b230831.title)}`,
	},
	{
		image: image.blogs.yr2023.b1012.image1,
		title: content.blog.yr2023.b231012.title,
		desc: {
			p: [
				content.blog.yr2023.b231012.desc.p.p1,
				content.blog.yr2023.b231012.desc.p.p2,
				content.blog.yr2023.b231012.desc.p.p3,
				content.blog.yr2023.b231012.desc.p.p4,
			],
			quotes: null,
			list: [
				{
					title: content.blog.yr2023.b231012.desc.list.li1.title,
					desc: `${content.blog.yr2023.b231012.desc.list.li1.desc.p.p1} ${content.blog.yr2023.b231012.desc.list.li1.desc.p.p2}`,
				},
				{
					title: content.blog.yr2023.b231012.desc.list.li2.title,
					desc: `${content.blog.yr2023.b231012.desc.list.li2.desc.p.p1}`,
				},
			],
			images: [
				{
					title: "Blog Image 1",
					image: image.blogs.yr2023.b1012.image2,
				},
				{
					title: "Blog Image 2",
					image: image.blogs.yr2023.b1012.image3,
				},
				{
					title: "Blog Image 3",
					image: image.blogs.yr2023.b1012.image4,
				},
			],
		},
		date: content.blog.yr2023.b231012.date,
		views: 364,
		comments: 45,
		link: `/blog/${parse(content.blog.yr2023.b231012.title)}`,
	},
];

export default blogs.reverse();
