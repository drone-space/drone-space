import React from 'react';
import { Metadata } from 'next';
import LayoutPage from '@/components/layout/page';
import LayoutSection from '@/components/layout/section';
import { Grid, GridCol, Stack, Text, ThemeIcon, Group } from '@mantine/core';

import { IconArrowRightDashed } from '@tabler/icons-react';
import {
  ICON_SIZE,
  ICON_STROKE_WIDTH,
  ICON_WRAPPER_SIZE,
} from '@/data/constants';
import IntroSection from '@/components/layout/intro/section';
import ImageDefault from '@/components/common/images/default';
import { images } from '@/assets/images';

export const metadata: Metadata = {
  title: 'Drone Space Services - Expert Drone Solutions in Kenya',
  description: `Discover professional drone services, including training, aerial photography, surveying, and light shows. Trusted solutions for all your drone needs.`,
};

export default async function Services() {
  return (
    <LayoutPage>
      <LayoutSection id="cinematography" padded>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <Stack gap={'xl'}>
              <IntroSection
                props={{
                  title: 'Aerial Cinematography',
                  desc: `We offer professional aerial cinematography services to capture stunning aerial footage of any location. Our experienced drone pilots use state­of-the-art drone technology to produce high-quality aerial footage that will make your project stand out.`,
                }}
                options={{ alignment: 'start' }}
              />

              <Stack>
                {features.cinematography.map((item, index) => (
                  <Group
                    key={index}
                    gap={'xs'}
                    wrap="nowrap"
                    align="start"
                    pl={{ md: 'md' }}
                  >
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      mt={2}
                      color="sec.4"
                      c={'pri.9'}
                      radius={'xl'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Text fz={'sm'}>
                      <Text component="span" inherit fw={'bold'} c={'pri.9'}>
                        {item.title}
                      </Text>
                      : {item.desc}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
          >
            <ImageDefault
              src={images.services.aerCin}
              alt={'Aerial Cinematography'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="agriculture" padded bg={'var(--mantine-color-gray-1)'}>
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 6.5 }} order={2}>
            <Stack gap={'xl'}>
              <IntroSection
                props={{
                  title: 'Agriculture',
                  desc: `From precise crop monitoring and targeted spraying to efficient data collection for informed decision­making, our drone technology optimizes resource allocation, reduces costs, and maximizes yields.`,
                }}
                options={{ alignment: 'start' }}
              />

              <Stack>
                {features.agriculture.map((item, index) => (
                  <Group
                    key={index}
                    gap={'xs'}
                    wrap="nowrap"
                    align="start"
                    pl={{ md: 'md' }}
                  >
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      mt={2}
                      color="sec.4"
                      c={'pri.9'}
                      radius={'xl'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Text fz={'sm'}>
                      <Text component="span" inherit fw={'bold'} c={'pri.9'}>
                        {item.title}
                      </Text>
                      : {item.desc}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }} order={1}>
            <ImageDefault
              src={images.services.droSee}
              alt={'Agriculture'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="drone-mapping-and-survey" padded>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <Stack gap={'xl'}>
              <IntroSection
                props={{
                  title: 'Drone Mapping & Survey',
                  desc: `We specialize in creating detailed maps, 3D models, and orthomosaics that empower informed decision­making in land surveying, construction, agriculture, environmental monitoring, and more.`,
                }}
                options={{ alignment: 'start' }}
              />

              <Stack>
                {features.mapping.map((item, index) => (
                  <Group
                    key={index}
                    gap={'xs'}
                    wrap="nowrap"
                    align="start"
                    pl={{ md: 'md' }}
                  >
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      mt={2}
                      color="sec.4"
                      c={'pri.9'}
                      radius={'xl'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Text fz={'sm'}>
                      <Text component="span" inherit fw={'bold'} c={'pri.9'}>
                        {item.title}
                      </Text>
                      : {item.desc}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
          >
            <ImageDefault
              src={images.services.mappSur}
              alt={'Drone Mapping and Survey'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="thermal-inspection"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 6.5 }} order={2}>
            <Stack gap={'md'}>
              <IntroSection
                props={{
                  title: 'Thermal Inspection',
                  desc: `Our thermal inspection services leverage advanced drone technology to provide detailed thermal imaging and analysis for a variety of applications. We specialize in identifying anomalies and potential issues in solar panels, landfills, dumpsites, geothermal sites, and power lines. Our high-resolution thermal data enables early detection of problems, facilitating timely maintenance and preventing costly failures.`,
                }}
                options={{ alignment: 'start' }}
              />

              <Text>
                By combining innovative technologies with extensive inspection
                experience, our inspectors perform thorough examinations of
                solar panels as well as associated wiring and hardware in a
                professional, safe, and efficient manner.
              </Text>

              <Text>
                Our field employees have access to FLIR (Infra-Red Cameras) as
                well as Unmanned Aircraft Systems with Infra-red capabilities
                solution that enables customers to watch inspections. This
                facilitates real-time responses as opposed to long email chains
                that take up valuable time and data.
              </Text>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }} order={1}>
            <ImageDefault
              src={images.services.solIns}
              alt={'Thermal Inspection'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="search-and-rescue" padded>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <Stack gap={'xl'}>
              <IntroSection
                props={{
                  title: 'Search and Rescue',
                  desc: `We are equipped to support search and rescue operations with our advanced drone technology. Our drones, equipped with thermal imaging cameras and long-range capabilities, can quickly scan vast areas, providing crucial aerial support to locate missing persons or assess disaster zones efficiently and safely.`,
                }}
                options={{ alignment: 'start' }}
              />

              <Stack>
                {features.sar.map((item, index) => (
                  <Group
                    key={index}
                    gap={'xs'}
                    wrap="nowrap"
                    align="start"
                    pl={{ md: 'md' }}
                  >
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      mt={2}
                      color="sec.4"
                      c={'pri.9'}
                      radius={'xl'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Text fz={'sm'}>
                      <Text component="span" inherit fw={'bold'} c={'pri.9'}>
                        {item.title}
                      </Text>
                      : {item.desc}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
          >
            <ImageDefault
              src={images.services.sar}
              alt={'Search and Rescue'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection
        id="medical-delivery"
        padded
        bg={'var(--mantine-color-gray-1)'}
      >
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 6.5 }} order={2}>
            <Stack gap={'xl'}>
              <IntroSection
                props={{
                  title: 'Medical Delivery',
                  desc: `Our drones can swiftly transport essential medical supplies to remote or hard-to-reach areas, ensuring access to critical healthcare when every second counts.`,
                }}
                options={{ alignment: 'start' }}
              />

              <Stack>
                {features.medical.map((item, index) => (
                  <Group
                    key={index}
                    gap={'xs'}
                    wrap="nowrap"
                    align="start"
                    pl={{ md: 'md' }}
                  >
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      mt={2}
                      color="sec.4"
                      c={'pri.9'}
                      radius={'xl'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Text fz={'sm'}>
                      <Text component="span" inherit fw={'bold'} c={'pri.9'}>
                        {item.title}
                      </Text>
                      : {item.desc}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }} order={1}>
            <ImageDefault
              src={images.services.medical}
              alt={'Medical Delivery'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="consultancy-and-resale" padded>
        <Grid gutter={'xl'}>
          <GridCol
            span={{ base: 12, md: 6, lg: 6.5 }}
            order={{ base: 2, md: 1 }}
          >
            <Stack gap={'xl'}>
              <IntroSection
                props={{
                  title: 'Consultancy and Resale',
                  desc: `We are authorized drone importers and resellers, offering a wide range of high-quality drone solutions to meet your needs. We
                also offer drone consultancy services to help you get the most
                out of your drone solutions. Our team of experts can help you
                with everything from drone selection and setup, to training and
                maintenance.`,
                }}
                options={{ alignment: 'start' }}
              />

              <Stack gap={'xs'}>
                {features.consRes.map((item, index) => (
                  <Group
                    key={index}
                    gap={'xs'}
                    wrap="nowrap"
                    align="start"
                    pl={{ md: 'md' }}
                  >
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      mt={2}
                      color="sec.4"
                      c={'pri.9'}
                      radius={'xl'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Text fz={'sm'}>
                      <Text component="span" inherit fw={'bold'} c={'pri.9'}>
                        {item.title}
                      </Text>
                      : {item.desc}
                    </Text>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </GridCol>

          <GridCol
            span={{ base: 12, md: 6, lg: 5.5 }}
            order={{ base: 1, md: 2 }}
          >
            <ImageDefault
              src={images.services.conRes}
              alt={'Consultancy and Resale'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="roc-support" padded bg={'var(--mantine-color-gray-1)'}>
        <Grid gutter={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 6.5 }} order={2}>
            <Stack gap={'xl'}>
              <IntroSection
                props={{
                  title: 'ROC Support',
                  desc: `A ROC is a certification approved and issued by the KCAA that demonstrates that an organization fulfils the legal requirements to commercially operate a drone; Both the drone and the pilot will need to operate under a RPAS Operating Certificate.`,
                }}
                options={{ alignment: 'start' }}
              />

              <Text>
                We are the holders of ROC 002. We support our clients&apos;
                commercial operations through our ROC at affordable rates to
                ensure safety and legal compliance. Our ROC enables you carry
                out missions in a legal and compliant manner with significant
                cost savings on setup costs.
              </Text>

              <Stack gap={'xs'}>
                {features.roc.map((item, index) => (
                  <Group
                    key={index}
                    gap={'xs'}
                    wrap="nowrap"
                    align="start"
                    pl={{ md: 'md' }}
                  >
                    <ThemeIcon
                      size={ICON_WRAPPER_SIZE / 1.5}
                      mt={2}
                      color="sec.4"
                      c={'pri.9'}
                      radius={'xl'}
                    >
                      <IconArrowRightDashed
                        size={ICON_SIZE / 1.5}
                        stroke={ICON_STROKE_WIDTH}
                      />
                    </ThemeIcon>

                    <Text fz={'sm'}>{item}</Text>
                  </Group>
                ))}
              </Stack>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }} order={1}>
            <ImageDefault
              src={images.services.rocSup}
              alt={'ROC Support'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
              radius={'sm'}
            />
          </GridCol>
        </Grid>
      </LayoutSection>
    </LayoutPage>
  );
}

const features = {
  cinematography: [
    {
      title: 'Stunning footage',
      desc: 'Our aerial cinematography services produce stunning and captivating footage that will take your project to the next level.',
    },
    {
      title: 'Versatility',
      desc: 'Our drones are equipped with a variety of cameras and lenses, allowing us to produce aerial footage for a wide range of applications, including real estate, film and video production, and tourism.',
    },
    {
      title: 'Fast Turnaround',
      desc: 'Our team works quickly and efficiently to produce high-quality aerial footage in a timely manner, meeting your project deadlines.',
    },
  ],
  agriculture: [
    {
      title: 'Increased Efficiency',
      desc: 'Drone technology allows us to spread seedballs and other seeds quickly and efficiently, reducing the time and effort required to reforest large areas of land.',
    },
    {
      title: 'Increased Accuracy',
      desc: 'Our drones can precisely target areas for reforestation, increasing the chances of successful seed germination and growth.',
    },
    {
      title: 'Cost-Effective',
      desc: 'Drone seeding is a cost-effective alternative to traditional reforestation methods, saving you time and money.',
    },
    {
      title: 'Improved Access',
      desc: 'Drone technology allows us to access difficult or remote areas for reforestation efforts, improving the overall success of reforestation efforts.',
    },
    {
      title: 'Climate Change Mitigation',
      desc: 'By spreading seedballs and other seeds for reforestation, we can help mitigate the effects of climate change and improve the health of our planet.',
    },
  ],
  mapping: [
    {
      title: 'High-Resolution Imaging',
      desc: 'Our drones are equipped with advanced cameras capable of capturing high-resolution images. This enables us to create detailed maps with exceptional clarity, helping you visualize every inch of your project area.',
    },
    {
      title: 'Topographical Mapping',
      desc: 'Accurate topographical maps are essential for various applications, including land development and infrastructure planning. Our drones gather elevation data with precision, allowing us to generate comprehensive topographical maps that serve as the foundation for your projects.',
    },
    {
      title: 'Orthomosaic Maps',
      desc: 'We produce seamless orthomosaic maps by stitching together hundreds of aerial images. These maps provide a true-to-scale, geometrically accurate representation of your site, aiding in measurements, analysis, and project tracking.',
    },
    {
      title: '3D Models',
      desc: 'Our drones capture data from multiple angles to generate detailed 3D models of your site. This immersive representation offers a deeper understanding of the terrain, structures, and surroundings, enhancing your project planning and visualization.',
    },
    {
      title: 'Volumetric Analysis',
      desc: 'For industries such as mining and construction, accurately calculating volumes of stockpiles, excavations, and landfills is crucial. Our Aerial Drone Mapping services provide precise volumetric measurements to streamline your operations.',
    },
    {
      title: 'Environmental Monitoring',
      desc: "Whether it's tracking changes in vegetation, identifying erosion, or monitoring wildlife habitats, our services contribute to effective environmental management and conservation efforts.",
    },
    {
      title: 'Progress Monitoring',
      desc: "Keep track of your project's progress over time with our aerial mapping solutions. Regular updates and comparisons enable you to identify any deviations from the original plan and make adjustments as needed.",
    },
  ],
  sar: [
    {
      title: 'Comprehensive Aerial Surveillance',
      desc: 'Drones provide a bird’s-eye view, enabling rapid coverage of vast or difficult terrains, including forests, mountains, and water bodies. They deliver high-resolution imagery and live video feeds to enhance situational awareness.',
    },
    {
      title: 'Thermal and Night Vision Capabilities',
      desc: 'With advanced thermal imaging, drones can detect heat signatures, making it possible to locate individuals even in darkness, dense vegetation, or challenging weather conditions.',
    },
    // {
    //   title: 'Real-Time Data Sharing',
    //   desc: 'Equipped with live-streaming technology, drones transmit critical information and visuals directly to rescue teams, ensuring quick and informed decision-making.',
    // },
    // {
    //   title: 'Access to Hard-to-Reach Locations',
    //   desc: 'Whether it’s navigating narrow canyons, collapsed structures, or flood zones, drones excel in reaching areas that are inaccessible or unsafe for human rescuers.',
    // },
    {
      title: 'Emergency Supply Delivery',
      desc: 'Drones can deliver essential items such as first aid kits, water, food, or communication tools to stranded individuals, bridging the gap until help arrives.',
    },
    // {
    //   title: 'Optimized Search Using AI',
    //   desc: 'Powered by artificial intelligence, drones can identify patterns, objects, or movements, streamlining the search process and increasing efficiency.',
    // },
  ],
  medical: [
    {
      title: 'Emergency Medical Support',
      desc: 'Drones deliver life-saving supplies like automated external defibrillators (AEDs), epinephrine injectors, and first aid kits directly to emergency scenes, ensuring rapid response during critical moments.',
    },
    // {
    //   title: 'Blood and Organ Transportation',
    //   desc: 'Time-sensitive deliveries of blood, plasma, and organs for transplants are streamlined with drone technology, saving precious minutes when every second counts.',
    // },
    {
      title: 'Remote Vaccination Campaigns',
      desc: 'Medical drones reach isolated communities to distribute vaccines efficiently, especially during health crises like epidemics or pandemics.',
    },
    {
      title: 'Faster Diagnostic Sample Transfers',
      desc: 'Quickly transport diagnostic samples—such as blood or swabs—to laboratories for prompt analysis and decision-making.',
    },
    {
      title: 'Disaster Relief and Humanitarian Aid',
      desc: 'Drones deliver essential medical supplies to areas affected by natural disasters, ensuring healthcare support when traditional routes are disrupted.',
    },
  ],
  consRes: [
    {
      title: 'Wide Range of Products',
      desc: 'We offer a wide range of drones and drone accessories, including multirotor, fixed-wing drones, and more, to meet your needs.',
    },
    {
      title: 'Expert Advice',
      desc: 'Our team of experts can help you choose the right drone for your needs, taking into account your budget, requirements, and goals.',
    },
    {
      title: 'Affordable Prices',
      desc: 'We offer competitive pricing on all of our products, ensuring that you can get the drone solutions you need at a price you can afford.',
    },
    {
      title: 'Authorized Reseller',
      desc: 'Hassle-free importation and registration of your drone.',
    },
  ],
  roc: [
    'Simplified Monthly Subscription',
    'Paperwork Support',
    'Timely Processing of Authorizations',
    'Incident/accident reporting',
  ],
};
