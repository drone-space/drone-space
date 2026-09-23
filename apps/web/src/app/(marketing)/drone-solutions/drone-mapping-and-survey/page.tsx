import React from 'react';
import { Metadata } from 'next';
import { LayoutPage } from '@repo/ui';
import { LayoutSection } from '@repo/ui';
import {
  Grid,
  GridCol,
  Text,
  ThemeIcon,
  Group,
  Card,
  Divider,
  Title,
  Button,
  Stack,
} from '@mantine/core';
import { ModalContactService } from '@repo/ui';
import { IconArrowRightDashed, IconMessage } from '@tabler/icons-react';
import { getBaseUrl, ICON_SIZE, ICON_STROKE_WIDTH, ICON_WRAPPER_SIZE } from '@repo/constants';
import { LayoutIntroSection } from '@repo/ui';
import { ImageDefault } from '@repo/ui';
import { images } from '@repo/constants';
import { linkify } from '@repo/utils';
import { LayoutIntroPage } from '@repo/ui';
import { COMPANY_NAME } from '@repo/constants';
import services from '@web/data/services';
import { GetLayout } from '../../faq/page';
import AccordionFaq from '@web/ui/common/accordions/faq';
import CtaMain from '@web/ui/partial/cta/main';

const service = services.find((c) => c.title == services[2].title);

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = await getBaseUrl();

  return {
    title: service?.metaTitle,
    description: service?.linkDesc,
    openGraph: {
      title: service?.metaTitle,
      description: service?.linkDesc,
      url: `${baseUrl.WEB}/drone-solutions/${service?.title}`,
      type: 'website',
      images: [
        {
          url: images.brand.droneSpace.logo.potrait.meta,
          width: 1200,
          height: 1200,
          alt: COMPANY_NAME,
        },
      ],
    },
  };
}

export default async function Service() {
  if (!service) throw new Error('Service not foud');

  return (
    <LayoutPage>
      <LayoutIntroPage
        props={{
          path: 'Drone Services',
          title: service.title || '',
          bg: images.web.hero.light,
          desc: service?.linkDesc,
        }}
      />

      <LayoutSection id={linkify(service.title)} padded>
        <Grid gap={'xl'}>
          <GridCol span={{ base: 12, md: 6, lg: 6.5 }} order={{ base: 2, md: 1 }}>
            <LayoutIntroSection
              props={{
                title: 'Drone Mapping & Survey',
                desc: `We specialize in creating detailed maps, 3D models, and orthomosaics that empower informed decision­making in land surveying, construction, agriculture, environmental monitoring, and more.`,
              }}
              options={{ alignment: 'start' }}
            />

            {features.mapping.map((item, index) => (
              <Group key={index} gap={'xs'} wrap="nowrap" align="start" pl={{ md: 'md' }} mt={'xs'}>
                <ThemeIcon size={ICON_WRAPPER_SIZE / 1.5} mt={2} color="sec.3" c={'pri.9'}>
                  <IconArrowRightDashed size={ICON_SIZE / 1.5} stroke={ICON_STROKE_WIDTH} />
                </ThemeIcon>

                <Text fz={'sm'}>
                  <Text component="span" inherit fw={'bold'} c={'pri.9'}>
                    {item.title}
                  </Text>
                  : {item.desc}
                </Text>
              </Group>
            ))}

            <ModalContactService
              props={{
                initialValues: {
                  subject: `Mapping & Survey Service Inquiry`,
                  message: `Hello, I am interested in your drone mapping and survey service. Please send me more information about it.`,
                },
              }}
            >
              <Button
                mt={'xl'}
                variant="outline"
                leftSection={<IconMessage size={ICON_SIZE} stroke={ICON_STROKE_WIDTH} />}
              >
                <Text component="span" inherit>
                  Inquire or Request a Quote
                </Text>
              </Button>
            </ModalContactService>
          </GridCol>

          <GridCol span={{ base: 12, md: 6, lg: 5.5 }} order={{ base: 1, md: 2 }}>
            <ImageDefault
              src={images.services.mappSur}
              alt={'Drone Mapping and Survey'}
              height={{ base: 240, xs: 320, sm: 400, md: '100%' }}
              mode="grid"
            />
          </GridCol>
        </Grid>
      </LayoutSection>

      <LayoutSection id="pricing-training-faq" padded bg={'var(--mantine-color-gray-1)'}>
        <GetLayout
          props={{
            header: (
              <LayoutIntroSection
                props={{
                  subTitle: `FAQ's`,
                  title: `Frequently Asked Questions`,
                  desc: `For further information, please visit our training section, and for any other training inquiries, please send us a training inquiry.`,
                }}
                options={{ alignment: 'start' }}
              />
            ),
          }}
        >
          <AccordionFaq />
        </GetLayout>
      </LayoutSection>

      <CtaMain
        props={{
          title: 'Accurate Aerial Mapping & Surveying',
          desc: 'Deliver precise geospatial data with high-resolution drone mapping. We provide topographic surveys, 3D modeling, orthomosaic maps, and site analysis for construction, mining, and land development projects. Faster, safer, and more accurate than traditional surveying methods.',
          options: { service },
        }}
      />
    </LayoutPage>
  );
}

const features = {
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
};
