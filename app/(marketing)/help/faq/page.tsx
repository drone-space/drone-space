import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import LayoutPage from "@/layouts/Page";
import LayoutSection from "@/layouts/Section";
import AccordionFaq from "@/components/accordions/Faq";
import TooltipWhatsApp from "@/components/tooltips/WhatsApp";
import ModalContactTraining from "@/components/modal/contact/Training";
import ModalContactShop from "@/components/modal/contact/Shop";

import { Anchor, Stack, Text, Title } from "@mantine/core";

import contact from "@/data/contact";

export const metadata: Metadata = { title: "FAQ" };

export default async function Faq() {
	const abbreviations = [
		"AIC - Aviation Information Circular",
		"AIP - Aviation Information Publication",
		"ATPL- Airline Transport License",
		"BVLOS - Beyond Visual Line Of Sight",
		"KCAR's - Civil Aviation Regulations",
		"Checkout- Practical Exam/ Skills Test performed by DFE",
		"CPL - Commercial Pilot License",
		"DFE - Designated Flight Examiner",
		"EVLOS - Extended Visual Line Of Sight",
		"FW (Fixed Wing) - Drone that looks like a mini plane",
		"Helicopter - Drone that looks like a mini helicopter",
		"ICAO - International Civil Aviation Organization",
		"KCAA - Kenya Civil Aviation Authority",
		"MR (Multi Rotor) - Drone that is also called the quadcopter, as the name suggests there are 4 propellers or more arranged in a cross-type configuration",
		"PPL - Private Pilot License",
		"ROC - Remote Operators Certificate",
		"RPA - Remotely Piloted Aircraft",
		"RPAS - Remotely Piloted Aircraft Systems",
		"RPL - Remote Pilot License",
		"TGM - Technical Guidance Maintenance",
		"VLOS - Visual Line Of Sight",
		"VTOL - Vertical Take off and Landing",
	];

	return (
		<LayoutPage>
			<LayoutSection padded containerized={"sm"} shadowed>
				<Stack gap={"xl"}>
					<Title ta={"center"} order={2} fz={"xl"} fw={"bold"}>
						Drone Training
					</Title>

					<Text w={{ md: "75%" }} mx={"auto"} ta={"center"} fz={"sm"}>
						For further information, please visit our training section, for course prices go to{" "}
						<Anchor component={Link} href="/pricing/training" inherit fw={500}>
							pricing
						</Anchor>{" "}
						and for any other training inquiries, please send us a{" "}
						<ModalContactTraining>
							<Anchor inherit fw={500}>
								training inquiry
							</Anchor>
						</ModalContactTraining>
						.
					</Text>

					<AccordionFaq section="training" />
				</Stack>
			</LayoutSection>

			{/* <LayoutSection padded containerized={"sm"} shadowed>
				<Stack gap={"xl"}>
					<Title ta={"center"} order={2} fz={"xl"} fw={"bold"}>
						Drone Purchases
					</Title>

					<Text w={{ md: "75%" }} mx={"auto"} ta={"center"} fz={"sm"}>
						To see available drones and drone prices please visit our{" "}
						<Anchor component={Link} href="/shop" inherit fw={500}>
							shop section
						</Anchor>
						, for drone importation or other drone purchase inquiries, please send us a{" "}
						<ModalContactShop>
							<Anchor inherit fw={500}>
								product/purchase inquiry
							</Anchor>
						</ModalContactShop>
						.
					</Text>

					<AccordionFaq section="shop" />
				</Stack>
			</LayoutSection> */}

			<LayoutSection padded containerized={"sm"} shadowed>
				<Stack gap={"xl"}>
					<Title ta={"center"} order={2} fz={"xl"} fw={"bold"}>
						General Questions
					</Title>

					<Text w={{ md: "75%" }} mx={"auto"} ta={"center"} fz={"sm"}>
						For any other questions,{" "}
						<Anchor component={Link} inherit fw={500} href={"/contact"}>
							submit an inquiry
						</Anchor>{" "}
						or{" "}
						<TooltipWhatsApp>
							<Anchor inherit fw={500} href={`${contact.socials[0].link}`} target="_blank">
								start a chat with us
							</Anchor>
						</TooltipWhatsApp>
						.
					</Text>

					<AccordionFaq />
				</Stack>
			</LayoutSection>
		</LayoutPage>
	);
}
