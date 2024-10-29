import React from "react";

import NextImage from "next/image";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import LayoutBody from "@/layouts/Body";
import NavbarMain from "@/partials/navbars/Main";
import FooterMain from "@/partials/footers/Main";
import NotificationMain from "@/partials/notifications/Main";
import HeaderMain from "@/partials/headers/Main";
import { Button, Grid, GridCol, Image, List, ListItem, Stack, Text, ThemeIcon, Title } from "@mantine/core";
import Link from "next/link";
import {
	IconArrowRight,
	IconCamera,
	IconCertificate,
	IconCertificate2,
	IconChartBar,
	IconCheck,
	IconFileDownload,
	IconPhoneCall,
	IconPhoneIncoming,
	IconPlant2,
	IconReportAnalytics,
	IconSchool,
	IconSeeding,
	IconShoppingCart
} from "@tabler/icons-react";
import ModalContactCallback from "@/components/modal/contact/Callback";
import ModalContactTraining from "@/components/modal/contact/Training";
import ModalDownloadBrochure from "@/components/modal/download/Brochure";
import documents from "@/assets/documents";
import services from "@/data/services";
import link from "@/handlers/parsers/string/link";
import CardService from "@/components/card/Service";
import products from "@/data/products";
import CardSHoDroneMain from "@/components/card/shop/drones/Main";
import categories from "@/data/categories";
import CardPartner from "@/components/card/Partner";
import partners from "@/data/partners";
import CardWhy from "@/components/card/Why";
import CtaTraining from "@/partials/cta/Training";
import array from "@/utilities/arrays";
import AffixTop from "@/components/affixi/Top";
import AffixNavbar from "@/components/affixi/Navbar";
import AffixAssistant from "@/components/affixi/Assistant";
import AffixWhatsapp from "@/components/affixi/Whatsapp";
import HeroHome from "@/partials/heros/Home";

export default function Home() {
	const drones = {
		camera: array.shuffle(products.filter((p) => p.category == "camera")),
		enterprise: array.shuffle(products.filter((p) => p.category == "enterprise")),
		agriculture: array.shuffle(products.filter((p) => p.category == "agriculture"))
	};

	const whyUs = [
		{
			icon: IconSchool,
			title: "Skilled Instructors",
			desc: "Our highly skilled trainers use a rigorous teaching technique that ensures efficient learning."
		},
		{
			icon: IconCertificate,
			title: "KCAA Certified",
			desc: "Approved and licensed by Kenya Civil Aviation Authority (KCAA)."
		},
		{
			icon: IconCertificate2,
			title: "KFCB Certified",
			desc: "Approved and licensed by Kenya Film Classification Board (KFCB) as a local film agent."
		}
	];

	return (
		<LayoutBody bar={<NotificationMain />} header={<HeaderMain />} nav={<NavbarMain />} footer={<FooterMain />}>
			<main>
				<LayoutPage>
					<HeroHome />

					<LayoutSection
						padded
						containerized={"md"}
						bg={"light-dark(var(--mantine-color-pri-light), var(--mantine-color-pri-light))"}
						shadowed
					>
						<Grid gutter={{ base: "md", md: "xl" }} justify="center">
							<GridCol span={{ base: 12, xs: 6, sm: 3 }}>
								<ModalDownloadBrochure>
									<Button h={"100%"} fullWidth>
										<Stack align="center" py={"md"}>
											<IconFileDownload size={24} stroke={2} />
											<Text inherit component="span" ta={"center"}>
												Download Brochure
											</Text>
										</Stack>
									</Button>
								</ModalDownloadBrochure>
							</GridCol>
							<GridCol span={{ base: 12, xs: 6, sm: 3 }}>
								<ModalContactCallback>
									<Button h={"100%"} fullWidth>
										<Stack align="center" py={"md"}>
											<IconPhoneCall size={24} stroke={2} />
											<Text inherit component="span" ta={"center"}>
												Request Callback
											</Text>
										</Stack>
									</Button>
								</ModalContactCallback>
							</GridCol>
							<GridCol span={{ base: 12, xs: 6, sm: 3 }}>
								<ModalContactTraining>
									<Button h={"100%"} fullWidth>
										<Stack align="center" py={"md"}>
											<IconSchool size={24} stroke={2} />
											<Text inherit component="span" ta={"center"}>
												Register for RPL
											</Text>
										</Stack>
									</Button>
								</ModalContactTraining>
							</GridCol>
							<GridCol span={{ base: 12, xs: 6, sm: 3 }}>
								<Button component={Link} href={"/shop"} h={"100%"} fullWidth>
									<Stack align="center" py={"md"}>
										<IconShoppingCart size={24} stroke={2} />
										<Text inherit component="span" ta={"center"}>
											Shop for a Drone
										</Text>
									</Stack>
								</Button>
							</GridCol>
						</Grid>
					</LayoutSection>

					<LayoutSection bordered padded containerized={"responsive"}>
						<Stack gap={"xl"}>
							<Title order={2} ta={"center"}>
								Our Drone Solutions
							</Title>

							<Grid justify="center">
								{services.map((service) => (
									<GridCol key={service.title} span={{ md: 4, xs: 6, lg: 3 }}>
										<CardService data={service} />
									</GridCol>
								))}
							</Grid>
						</Stack>
					</LayoutSection>

					<LayoutSection
						shadowed
						padded
						containerized={"responsive"}
						bg={"light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-1))"}
					>
						<Stack gap={"xl"}>
							<Title order={2} ta={"center"}>
								Our Products
							</Title>

							<Grid>
								{drones.camera.map(
									(product) =>
										drones.camera.indexOf(product) < 2 && (
											<GridCol key={product.title.long} span={{ base: 12, xs: 6, md: 4 }}>
												<CardSHoDroneMain data={product} />
											</GridCol>
										)
								)}

								{drones.enterprise.map(
									(product) =>
										drones.enterprise.indexOf(product) < 2 && (
											<GridCol key={product.title.long} span={{ base: 12, xs: 6, md: 4 }}>
												<CardSHoDroneMain data={product} />
											</GridCol>
										)
								)}

								{drones.agriculture.map(
									(product) =>
										drones.agriculture.indexOf(product) < 1 && (
											<GridCol key={product.title.long} span={{ base: 12, xs: 6, md: 4 }}>
												<CardSHoDroneMain data={product} />
											</GridCol>
										)
								)}

								<GridCol span={{ base: 12, xs: 6, md: 4 }}>
									<Stack justify="space-between" h={"100%"}>
										<Button
											component={Link}
											href={"/shop"}
											h={"100%"}
											fullWidth
											variant="light"
											style={{ boxShadow: "var(--mantine-shadow-xs)" }}
										>
											<Stack align="center" p={"md"}>
												<IconShoppingCart size={24} stroke={2} />
												<Text inherit component="span" ta={"center"}>
													Go to Shop
												</Text>
											</Stack>
										</Button>

										{categories.map((category) => (
											<Button
												key={category.label}
												component={Link}
												href={`/shop/drones/${link.linkify(category.label)}`}
												h={"100%"}
												fullWidth
												variant="light"
												style={{ boxShadow: "var(--mantine-shadow-xs)" }}
											>
												<Stack align="center" p={"md"}>
													<category.icon size={24} stroke={2} />
													<Text inherit component="span" ta={"center"}>
														{category.label} Drones
													</Text>
												</Stack>
											</Button>
										))}
									</Stack>
								</GridCol>
							</Grid>
						</Stack>
					</LayoutSection>

					<LayoutSection bordered padded containerized={"responsive"}>
						<Stack gap={"xl"}>
							<Title order={2} ta={"center"}>
								Our Partners
							</Title>

							<Grid>
								{partners.map((partner) => (
									<GridCol key={partner.title} span={{ base: 6, xs: 4, md: 3, lg: 2 }}>
										<CardPartner data={partner} />
									</GridCol>
								))}
							</Grid>
						</Stack>
					</LayoutSection>

					<LayoutSection
						shadowed
						padded
						containerized={"responsive"}
						bg={"light-dark(var(--mantine-color-gray-1), var(--mantine-color-gray-1))"}
					>
						<Stack gap={"xl"}>
							<Stack>
								<Title order={2} ta={"center"}>
									Why Choose Us
								</Title>
								<Text ta={"center"}>
									Soar to new heights with us! As the leading provider of drone license training and
									commercial drone operations in Kenya, we are dedicated to helping you take your
									skills and business to the next level. Join us today and experience the power of
									flight.
								</Text>
							</Stack>

							<Grid justify="center">
								{whyUs.map((item) => (
									<GridCol key={item.title} span={{ base: 12, xs: 6, sm: 4, lg: 3 }}>
										<CardWhy data={item} />
									</GridCol>
								))}
							</Grid>
						</Stack>
					</LayoutSection>

					<CtaTraining data={{ type: "basic" }} />
				</LayoutPage>

				<AffixNavbar />

				<AffixTop />
				<AffixWhatsapp />
				<AffixAssistant />
			</main>
		</LayoutBody>
	);
}
