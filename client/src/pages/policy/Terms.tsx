import React from "react";

import { Anchor, Container, List, Stack, Text, Title } from "@mantine/core";

import Layout from "@src/layouts";
import Component from "@src/components";
import Partial from "@src/partials";

import data from "@src/data";
import { Link } from "react-router-dom";

export default function Terms() {
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
								Terms and Conditions
							</Title>
							<Text c={"dimmed"}>
								These terms and conditions outline the rules and regulations for the use of the Drone
								Space website, located at donespace.co.ke. By accessing this website we assume you
								accept these terms and conditions. Do not continue to use the website if you do not
								agree to all the terms and conditions stated on this page.
							</Text>
							<Text c={"dimmed"}>
								The following terminology applies to these terms and conditions and all other
								agreements:
							</Text>
							<List size="sm" withPadding>
								<List.Item>
									“Client”, “You” and “Your” refers to you, the person on this website and compliant
									to the Drone Space terms and conditions.
								</List.Item>
								<List.Item>
									“The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to Drone Space.
								</List.Item>
								<List.Item>
									“Party”, “Parties”, or “Us”, refers to both the Client and the Company.
								</List.Item>
								<List.Item>
									All terms refer to the offer, acceptance and consideration of payment necessary to
									undertake the process of our assistance to the Client in the most appropriate manner
									for the express purpose of meeting the Client's needs in respect of provision of the
									Company's stated services, in accordance with and subject to, prevailing law.
								</List.Item>
							</List>
							<Text c={"dimmed"}>
								Any use of the above terminology or other words in the singular, plural, capitalization
								and/or he/she or they, are taken as interchangeable and therefore as referring to same.
							</Text>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								Cookies
							</Title>
							<Text c={"dimmed"}>
								We employ the use of cookies. By accessing dronespace.co.ke, you agree to use cookies in
								agreement with the Company's{" "}
								<Anchor component={Link} to="/policy/privacy-policy">
									privacy policy
								</Anchor>
								. Most interactive websites use cookies to let us retrieve the user's details for each
								visit. Cookies are used by our website to enable the functionality of certain areas to
								make it easier for people visiting our website. Some of our affiliates/partners may also
								use cookies.
							</Text>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								License
							</Title>
							<Text c={"dimmed"}>
								Unless otherwise stated, Drone Space and/or its licensors own the intellectual property
								rights for all material on this website. All intellectual property rights are reserved.
								You may access this from the site for your own personal use subjected to restrictions
								set in these terms and conditions.
							</Text>
							<Text c={"dimmed"}>You must not:</Text>
							<List size="sm" withPadding>
								<List.Item>Republish material from the Drone Space website</List.Item>
								<List.Item>Sell, rent or sub-license material from the Drone Space website</List.Item>
								<List.Item>
									Reproduce, duplicate or copy material from the Drone Space website
								</List.Item>
								<List.Item>Redistribute content from the Drone Space website</List.Item>
							</List>
							<Text c={"dimmed"}>
								Soon, parts of this website will offer an opportunity for users to post and exchange
								opinions and information in certain areas of the website. Drone Space does not filter,
								edit, publish or review comments prior to their presence on the website. Comments do not
								reflect the views and opinions of Drone Space, its agents and/or affiliates. Comments
								reflect the views and opinions of the person who posts the aforementioned views and
								opinions. To the extent permitted by applicable laws, Drone Space shall not be liable
								for the comments or for any liability, damages or expenses caused and/or suffered as a
								result of any use of and/or posting of and/or appearance of the comments on this
								website. Drone Space reserves the right to monitor all comments and to remove any
								comments which can be considered inappropriate, offensive or otherwise causes breach of
								these terms and conditions.
							</Text>
							<Text c={"dimmed"}>You warrant and represent that:</Text>
							<List size="sm" withPadding>
								<List.Item>
									You are entitled to post the comments on our website and have all necessary licenses
									and consents to do so;
								</List.Item>
								<List.Item>
									The comments do not invade any intellectual property right, including without
									limitation copyright, patent or trademark of any third party;
								</List.Item>
								<List.Item>
									The comments do not contain any defamatory, libelous, offensive, indecent or
									otherwise unlawful material which is an invasion of privacy
								</List.Item>
								<List.Item>
									The comments will not be used to solicit or promote business or present commercial
									activities or unlawful activity.
								</List.Item>
							</List>
							<Text c={"dimmed"}>
								You hereby grant Drone Space a non-exclusive license to use, reproduce, edit and
								authorize others to use, reproduce and edit any of your comments in any and all forms,
								formats or media.
							</Text>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								Hyperlinking to our Content
							</Title>
							<Text c={"dimmed"}>
								The following organizations may link to our website without prior written approval:
							</Text>
							<List size="sm" withPadding>
								<List.Item>Government agencies;</List.Item>
								<List.Item>Search engines;</List.Item>
								<List.Item>News organizations;</List.Item>
								<List.Item>
									Online directory distributors may link to our website in the same manner as they
									hyperlink to the websites of other listed businesses; and
								</List.Item>
								<List.Item>
									System wide accredited businesses except soliciting non-profit organizations and
									charity groups which may not hyperlink to our website.
								</List.Item>
							</List>
							<Text c={"dimmed"}>
								These organizations may link to our home page, to publications or to other website
								information so long as the link: (a) is not in any way deceptive; (b) does not falsely
								imply sponsorship, endorsement or approval of the linking party and its products and/or
								services; and (c) fits within the context of the linking party's site.
							</Text>
							<Text c={"dimmed"}>
								We may consider and approve other link requests from the following types of
								organizations:
							</Text>
							<List size="sm" withPadding>
								<List.Item>Commonly-known consumer and/or business information sources;</List.Item>
								<List.Item>dot.com community sites;</List.Item>
								<List.Item>associations or other groups representing charities;</List.Item>
								<List.Item>online directory distributors;</List.Item>
								<List.Item>internet portals;</List.Item>
								<List.Item>accounting, law and consulting firms; and</List.Item>
								<List.Item>educational institutions and trade associations.</List.Item>
							</List>
							<Text c={"dimmed"}>
								We will approve link requests from these organizations if we decide that: (a) the link
								would not make us look unfavorably to ourselves or to our accredited businesses; (b) the
								organization does not have any negative records with us; (c) the benefit to us from the
								visibility of the hyperlink compensates the absence of Drone Space; and (d) the link is
								in the context of general resource information.
							</Text>
							<Text c={"dimmed"}>
								If you are one of the organizations listed in paragraph 2 above and are interested in
								linking to our website, you must inform us by sending an e-mail to Drone Space (
								<Anchor href="mailto:info@dronespace.co.ke">info@dronespace.co.ke</Anchor>
								). Please include your name, your organization name, contact information as well as the
								URL of your site, a list of any URL's from which you intend to link to our website, and
								a list of the URLs on our site to which you would like to link. Wait 2-3 days for a
								response.
							</Text>
							<Text c={"dimmed"}>Approved organizations may hyperlink to our website as follows:</Text>
							<List size="sm" withPadding>
								<List.Item>By use of our corporate name; or</List.Item>
								<List.Item>By use of the uniform resource locator being linked to; or</List.Item>
								<List.Item>
									By use of any other description of our Website being linked to that makes sense
									within the context and format of content on the linking party's site.
								</List.Item>
							</List>
							<Text c={"dimmed"}>
								No use of the Drone Space logo or other artwork will be allowed for linking absent a
								trademark license agreement.
							</Text>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								iFrames
							</Title>
							<Text c={"dimmed"}>
								Without prior approval and written permission, you may not create frames around our
								webpages that alter in any way the visual presentation or appearance of our website.
							</Text>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								Content Liability
							</Title>
							<Text c={"dimmed"}>
								We shall not be held responsible for any content that appears on your website. You agree
								to protect and defend us against all claims that arise on your website. No link(s)
								should appear on any website that may be interpreted as libelous, obscene or criminal,
								or which infringes upon or otherwise violates any third party rights in any way.
							</Text>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								Reservation of Rights
							</Title>
							<Text c={"dimmed"}>
								We reserve the right to request that you remove all links or any particular link to our
								website. You approve to immediately remove all links to our website upon request. We
								also reserve the right to amend these terms and conditions and their linking policy at
								any time. By continuously linking to our website, you agree to be bound to and follow
								these terms and conditions.
							</Text>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								Removal of links from our website
							</Title>
							<Text c={"dimmed"}>
								If you find any link on our website that is offensive for any reason, you are free to
								contact and inform us any moment. We will consider requests to remove links but we are
								not obligated to or so or to respond to you directly.
							</Text>
							<Text c={"dimmed"}>
								We do not ensure that the information on this website is correct, we do not warrant its
								completeness or accuracy; nor do we promise to ensure that the website remains available
								or that the material on the website is kept up to date.
							</Text>
						</Stack>
						<Stack gap={"xs"}>
							<Title order={3} fw={500}>
								Disclaimer
							</Title>
							<Text c={"dimmed"}>
								To the maximum extent permitted by applicable law, we exclude all representations,
								warranties and conditions relating to our website and the use of this website.
							</Text>
							<Text c={"dimmed"}>Nothing in this disclaimer will:</Text>
							<List size="sm" withPadding>
								<List.Item>
									Limit or exclude our or your liability for death or personal injury;
								</List.Item>
								<List.Item>
									Limit or exclude our or your liability for fraud or fraudulent misrepresentation;
								</List.Item>
								<List.Item>
									Limit any of our or your liabilities in any way that is not permitted under
									applicable law; or
								</List.Item>
								<List.Item>
									Exclude any of our or your liabilities that may not be excluded under applicable
									law.
								</List.Item>
							</List>
							<Text c={"dimmed"}>
								The limitations and prohibitions of liability set in this section and elsewhere in this
								disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities
								arising under the disclaimer, including liabilities arising in contract, in tort and for
								breach of statutory duty.
							</Text>
							<Text c={"dimmed"}>
								As long as the website and the information and services on the website are provided free
								of charge, we will not be liable for any loss or damage of any nature.
							</Text>
						</Stack>
					</Stack>
				</Container>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
