import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Component from "@src/components";
import utility from "@src/utilities";

import Home from "./home";
import About from "./about";
import Blog from "./blog";
import Post from "./blog/post";
import Contact from "./contact";
import Faq from "./faq";
import Gallery from "./gallery";
import Products from "./shop";
import Enterprise from "./shop/enterprise";
import Camera from "./shop/camera";
import Agriculture from "./shop/agriculture";
import Product from "./shop/product";
import Services from "./services";
import Service from "./services/service";
import Training from "./training";
import Junior from "./training/junior";
import Rpl from "./training/rpl";
import Advanced from "./training/advanced";
import Pricing from "./training/pricing";
import Course from "./training/course";
import Error404 from "./error/404";
import Privacy from "./policy/Privacy";
import Terms from "./policy/Terms";
import TrainingPolicy from "./policy/Training";

export default function App() {
	return (
		<Router>
			<Component.Affix.Navbar />
			<Component.Affix.Chat />
			<utility.ScrollTop />

			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/about"} element={<About />} />
				<Route path={"/blog"}>
					<Route index element={<Blog />} />
					<Route path=":post" element={<Post />} />
				</Route>
				<Route path={"/contact"} element={<Contact />} />
				<Route path={"/faq"} element={<Faq />} />
				<Route path={"/gallery"} element={<Gallery />} />
				<Route path={"/drone-shop"}>
					<Route index element={<Products />} />
					<Route path="enterprise-drones" element={<Enterprise />} />
					<Route path="camera-drones" element={<Camera />} />
					<Route path="agriculture-drones" element={<Agriculture />} />
					<Route path=":product" element={<Product />} />
				</Route>
				<Route path={"/drone-services"}>
					<Route index element={<Services />} />
					<Route path=":service" element={<Service />} />
				</Route>
				<Route path={"/drone-training"}>
					{/* <Route index element={<Training />} /> */}
					<Route path="junior" element={<Junior />} />
					<Route path="remote-pilot-license" element={<Rpl />} />
					<Route path="advanced" element={<Advanced />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path=":course" element={<Course />} />
				</Route>

				<Route path="/policy">
					<Route path="privacy-policy" element={<Privacy />} />
					<Route path="terms-and-conditions" element={<Terms />} />
					<Route path="training-policy" element={<TrainingPolicy />} />
				</Route>

				<Route path="*" element={<Error404 />} />
			</Routes>
		</Router>
	);
}
