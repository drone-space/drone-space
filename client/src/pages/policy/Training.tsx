import React from "react";

import { Anchor, Container, List, Stack, Text, Title } from "@mantine/core";

import Layout from "@src/layouts";
import Component from "@src/components";
import Partial from "@src/partials";

import data from "@src/data";
import { Link } from "react-router-dom";

export default function TrainingPolicy() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Container size={"sm"}>
					<Stack gap={"xl"}>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								Ground School Policy
							</Title>
							<Text c={"dimmed"}>
								The following policy is to be adhered to for all
								theoretical:
							</Text>
							<List size="sm" withPadding>
								<List.Item>
									The pass mark required for any ground school
									theory exam is 70%
								</List.Item>
								<List.Item>
									Rewrites for first and second failures is
									after 7 days
								</List.Item>
								<List.Item>
									Third and subsequent faliures will be
									rewritten after 2 months
								</List.Item>
								<List.Item>
									If a mark of less than 50% is acheived in
									any exam, then a rewrite can be done after 2
									months
								</List.Item>
								<List.Item>
									The results of nay theory exams passed will
									be valid for 90 days from date of writing
								</List.Item>
							</List>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								Ground School Syllabus
							</Title>
							<Text c={"dimmed"}>
								The following information is presented in the
								ground school syllabus:
							</Text>
							<List size="sm" withPadding>
								<List.Item>
									What exams are to be written
								</List.Item>
								<List.Item>
									When each exam is to be written
								</List.Item>
								<List.Item>
									Details of the source materal to be used for
									each subject
								</List.Item>
							</List>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								Dress Code
							</Title>
							<Text c={"dimmed"}>
								The school requires that its students adhere to
								the stated dress requirements when participating
								in or present during practical flight training:
							</Text>
							<List size="sm" withPadding>
								<List.Item>
									Preferably cotton shirts or cotton trousers,
									shorts or jeans
								</List.Item>
								<List.Item>
									No jacket or ties or other other clothing
									that may cause discomfort whilst flying
								</List.Item>
								<List.Item>
									Contact lenses or glasses if so endorsed on
									the student's medical license
								</List.Item>
								<List.Item>
									A hat to be worn as training is done outside
									in the sunlight
								</List.Item>
							</List>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								Social Behaviour
							</Title>
							<Text c={"dimmed"}>
								The school does not endorse and will not
								tolerate the following behaviour from students
								or instructors:
							</Text>
							<List size="sm" withPadding>
								<List.Item>
									Unnacceptable standards of hygiene such that
									a positive flight training environment is
									not possible
								</List.Item>
								<List.Item>
									Sexual fraternization/overtures between
									students and instructors or any other two or
									more persons present whilst in class or at
									the practical training grounds
								</List.Item>
								<List.Item>
									Flight training or attendanct of ground
									lectures under the influence of alcohol or
									illegal drugs
								</List.Item>
							</List>
						</Stack>
					</Stack>
				</Container>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
