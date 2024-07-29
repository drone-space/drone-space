import * as React from "react";

import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text } from "@react-email/components";

import contact from "@/data/contact";

import { typeContact } from "@/types/form";

export default function Technical(data?: typeContact) {
	const templateData = data ? data : sampleData;

	return (
		<Html lang="en">
			<Head />

			<Preview>{templateData.message}</Preview>

			<Body>
				{/* <Container style={content}> */}
				{/* <Section style={header}>
					<Container style={container}>
						<Img
							src={process.env.NEXT_PUBLIC_API_URL + "/images/brand/logo/landscape/image-1.webp"}
							width={200}
							height={"auto"}
							alt={contact.name.company}
						/>
					</Container>
				</Section> */}

				<Section style={main}>
					{/* <Container style={container}> */}
					<Section style={section}>
						<Text style={text}>Drone Space Technical,</Text>

						<Container style={container}>
							<Text style={text}>{templateData.message}</Text>
							<br />
						</Container>

						<Text style={text}>
							Regards, <br />
							{templateData.fname} {templateData.lname}
						</Text>
					</Section>

					<Section style={section}>
						<br />
						{templateData.phone ? (
							<Text style={{ ...text, fontSize: 9, lineHeight: 1.66, color: "#13259a" }}>
								Get in touch with <span style={{ fontWeight: "bold" }}>{templateData.fname}</span> at{" "}
								<a style={{ fontWeight: "bold", color: "#13259a" }} href={`tel:${templateData.phone}`}>
									{templateData.phone}
								</a>{" "}
								or by replying directly to this email.
							</Text>
						) : (
							<Text style={{ ...text, fontSize: 9, lineHeight: 1.66, color: "#13259a" }}>
								Get in touch with <span style={{ fontWeight: "bold" }}>{templateData.fname}</span> by
								replying directly to this email.
							</Text>
						)}
						<Text style={{ ...text, fontSize: 9, lineHeight: 1.66, color: "#13259a" }}>
							Produced and delivered from the {contact.name.company} website.
						</Text>
					</Section>
					{/* </Container> */}
				</Section>

				{/* <Section style={footer}>
					<Container style={container}>
						<Text style={{ ...text, textAlign: "center", fontSize: 9, lineHeight: 1.33 }}>
							© {contact.year}, {contact.name.company}. All rights reserved.
						</Text>
						<Text style={{ ...text, textAlign: "center", fontSize: 9, lineHeight: 1.33 }}>
							This message was produced by and distributed from the {contact.name.company} website.
						</Text>
						<Text style={{ ...text, textAlign: "center", fontSize: 9, lineHeight: 1.33 }}>
							{contact.locations.find(a => a.place == "Main Office")?.label}.
						</Text>
					</Container>
				</Section> */}
				{/* </Container> */}
			</Body>
		</Html>
	);
}

const sampleData = {
	fname: "Jane",
	lname: "Smith",
	email: "jane@example.com",
	phone: "073532946830",
	subject: "Test Subject",
	message: "This is some text.",
};

const content = {
	maxWidth: "640px",
	margin: "0 auto",
	overflow: "hidden",
};

const headerFooter = {
	color: "#13259a",
	backgroundColor: "#edeffd",
	padding: "20px 0",
};

const header = {
	...headerFooter,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
};

const footer = {
	...headerFooter,
};

const main = {
	// backgroundColor: "gray",
};

const section = {
	margin: "20px 0",
};

const container = {
	minWidth: "100%",
	padding: "0 20px",
};

const h1 = {
	fontSize: "24px",
	fontWeight: "bolder",
};

const h2 = {
	fontSize: "20px",
	fontWeight: "bold",
};

const text = {
	margin: 0,
	fontSize: "12px",
};

const link = {
	margin: 0,
	fontWeight: "bold",
	color: "red",
};
