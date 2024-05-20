import React from "react";

import {
	Box,
	Divider,
	Grid,
	GridCol,
	Image,
	List,
	ListItem,
	Stack,
	Tabs,
	TabsList,
	TabsPanel,
	TabsTab,
	Text,
	ThemeIcon,
	Title,
} from "@mantine/core";

import {
	IconBattery2,
	IconBox,
	IconBoxSeam,
	IconCubePlus,
	IconDrone,
} from "@tabler/icons-react";

import card from "../cards";

import typeProduct from "@src/types/product";

import classes from "./Product.module.scss";

export default function Product({ data }: { data: typeProduct }) {
	return (
		<Tabs
			defaultValue="basic"
			classNames={{ tab: classes.tab, panel: classes.panel }}
		>
			<TabsList grow>
				<TabsTab
					value="basic"
					fw={500}
					rightSection={<IconBox size={24} color="#14269e" />}
				>
					In the Box
				</TabsTab>

				{data.desc.accessories?.battery && (
					<TabsTab
						value="battery"
						fw={500}
						rightSection={
							<IconBattery2 size={24} color="#14269e" />
						}
					>
						Intelligent Battery
					</TabsTab>
				)}

				{data.desc.kit.flyMore && (
					<TabsTab
						value="flyMore"
						fw={500}
						rightSection={<IconBoxSeam size={24} color="#14269e" />}
					>
						Fly More Kit
					</TabsTab>
				)}

				{data.desc.accessories?.other && (
					<TabsTab
						value="other"
						fw={500}
						rightSection={
							<IconCubePlus size={24} color="#14269e" />
						}
					>
						Extras
					</TabsTab>
				)}
			</TabsList>

			{data.desc.kit.basic && (
				<TabsPanel value="basic">
					<Stack gap={"xl"}>
						<Grid align="stretch">
							<GridCol span={{ base: 12, sm: 4 }} px={"md"}>
								<Box className={classes.imageContainer}>
									<Image
										src={data.image.kit.basic}
										alt={data.desc.title.long}
									/>
								</Box>
							</GridCol>
							<GridCol span={{ base: 12, sm: 8 }} px={"md"}>
								<Stack gap={"xl"}>
									<Title order={2} className={classes.title}>
										What&apos;s in the Box?
									</Title>
									<List
										spacing={"xs"}
										size="xs"
										fw={500}
										icon={
											<ThemeIcon size={20} color="pri.6">
												<IconDrone
													size={16}
													stroke={1.5}
													color="#74d7d1"
												/>
											</ThemeIcon>
										}
									>
										<Grid>
											{data.desc.kit.basic.contents.map(
												(item) => (
													<GridCol
														key={item}
														span={{
															base: 12,
															sm: 6,
														}}
													>
														<ListItem key={item}>
															{item}
														</ListItem>
													</GridCol>
												)
											)}
										</Grid>
									</List>
								</Stack>
							</GridCol>
						</Grid>
					</Stack>
				</TabsPanel>
			)}

			{data.desc.accessories?.battery && (
				<TabsPanel value="battery">
					<Stack gap={"xl"}>
						<Grid>
							<GridCol span={{ base: 12, sm: 4 }} px={"md"}>
								<Box className={classes.imageContainer}>
									<Image
										src={data.image.accessories?.battery}
										alt={data.desc.title.long}
									/>
								</Box>
							</GridCol>
							<GridCol span={{ base: 12, sm: 8 }} px={"md"}>
								<Stack gap={"xl"}>
									<Title order={2} className={classes.title}>
										{`${data.desc.title.long} Intelligent Battery`}
									</Title>
									<List
										size="xs"
										fw={500}
										spacing={"xs"}
										icon={
											<ThemeIcon size={20} color="pri.6">
												<IconDrone
													size={16}
													stroke={1.5}
													color="#74d7d1"
												/>
											</ThemeIcon>
										}
									>
										<Grid>
											{data.desc.accessories.battery.specs.map(
												(item) => (
													<GridCol
														key={item}
														span={{
															base: 12,
															sm: 6,
														}}
													>
														<ListItem key={item}>
															{item}
														</ListItem>
													</GridCol>
												)
											)}
										</Grid>
									</List>
									<Stack gap={4}>
										<Divider
											label="Pricing"
											labelPosition="left"
											fw={500}
											w={"50%"}
											color="pri.6"
										/>
										<Text component="p" mb={0} fw={500}>
											Kshs.{" "}
											<Text
												component="span"
												fw={500}
												size={"xl"}
												td={"strikethrough"}
												c={"pri.6"}
											>
												{
													data.desc.accessories
														.battery.price.former
												}
											</Text>{" "}
											/-
										</Text>
									</Stack>
								</Stack>
							</GridCol>
						</Grid>
					</Stack>
				</TabsPanel>
			)}

			{data.desc.kit.flyMore && (
				<TabsPanel value="flyMore">
					<Stack gap={"xl"}>
						<Grid>
							<GridCol span={{ base: 12, sm: 4 }} px={"md"}>
								<Box className={classes.imageContainer}>
									{" "}
									<Image
										my={"xl"}
										src={data.image.kit.flyMore}
										alt={data.desc.title.long}
										maw={"100%"}
										radius={"md"}
									/>
								</Box>
							</GridCol>
							<GridCol span={{ base: 12, sm: 8 }} px={"md"}>
								<Stack gap={"xl"}>
									<Title order={2} className={classes.title}>
										{`${data.desc.title.long} Fly More Kit`}
									</Title>
									<List
										size="xs"
										spacing={"xs"}
										fw={500}
										icon={
											<ThemeIcon size={20} color="pri.6">
												<IconDrone
													size={16}
													stroke={1.5}
													color="#74d7d1"
												/>
											</ThemeIcon>
										}
									>
										<Grid>
											{data.desc.kit.flyMore.contents.map(
												(item) => (
													<GridCol
														key={item}
														span={{
															base: 12,
															sm: 6,
														}}
													>
														<ListItem key={item}>
															{item}
														</ListItem>
													</GridCol>
												)
											)}
										</Grid>
									</List>
									<Stack gap={4}>
										<Divider
											label="Pricing"
											labelPosition="left"
											fw={500}
											w={"50%"}
											color="pri.6"
										/>
										<Text component="p" mb={0} fw={500}>
											Kshs.{" "}
											<Text
												component="span"
												fw={500}
												size={"xl"}
												td={"strikethrough"}
												c={"pri.6"}
											>
												{
													data.desc.kit.flyMore.price
														.former
												}
											</Text>{" "}
											/-
										</Text>
									</Stack>
								</Stack>
							</GridCol>
						</Grid>
					</Stack>
				</TabsPanel>
			)}

			{data.desc.accessories?.other && (
				<TabsPanel value="other">
					<Grid>
						{data.desc.accessories.other.map((accessory) => (
							<GridCol
								key={accessory.title.long}
								span={{ base: 12, xs: 6, md: 4 }}
							>
								<card.Product.Accessory data={accessory} />
							</GridCol>
						))}
					</Grid>
				</TabsPanel>
			)}
		</Tabs>
	);
}
