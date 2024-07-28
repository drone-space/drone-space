import React from "react";

import Link from "next/link";
import NextImage from "next/image";

import { Anchor, Center, Grid, GridCol, Group, Stack, Text, Title, Image, Button, Flex } from "@mantine/core";

import { IconArrowLeft } from "@tabler/icons-react";

import LayoyutSection from "@/layouts/Section";

import contact from "@/data/contact";
import images from "@/assets/images";

export default function NotFound() {
	return (
		<LayoyutSection containerized="responsive">
			<Center mih={"100vh"} py={96}>
				<Grid w={"100%"} gutter={{ base: "xl", md: "md" }} align="center">
					<GridCol span={{ base: 12, md: 5 }} order={{ base: 2, md: 1 }}>
						<Flex align={{ base: "center", md: "start" }} direction={"column"} gap={{ base: "md", md: 64 }}>
							<Anchor component={Link} href={"/"} visibleFrom="md">
								<Stack w={240}>
									<Image
										src={images.brand.logo.landscape.brandColor}
										alt={contact.name.app}
										component={NextImage}
										width={6161}
										height={1034}
										priority
									/>
								</Stack>
							</Anchor>

							<Stack gap={"xs"}>
								<Title
									order={1}
									fw={"bold"}
									fz={{ base: 16, md: 24 }}
									ta={{ base: "center", md: "start" }}
								>
									Not Found
								</Title>
								<Text fz={{ base: "sm", md: "md" }} ta={{ base: "center", md: "start" }}>
									The page you&apos;re looking for has either been removed or moved to another section
									of the site.
								</Text>
							</Stack>

							<Group>
								<Button leftSection={<IconArrowLeft size={16} />} component={Link} href={"/"}>
									Back Home
								</Button>
								{/* <Button variant="light" component={Link} href={"#"}>
									Help Center
								</Button> */}
							</Group>
						</Flex>
					</GridCol>
					<GridCol span={{ base: 12, md: 7 }} order={{ base: 1, md: 2 }}>
						<Center>
							<Stack w={{ base: 240, md: 360 }}>
								<Image
									src={images.error.err404}
									alt={"Not Found"}
									component={NextImage}
									width={1920}
									height={1080}
									priority
								/>
							</Stack>
						</Center>
					</GridCol>
				</Grid>
			</Center>
		</LayoyutSection>
	);
}
