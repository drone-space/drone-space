import React from 'react';
import { Metadata } from 'next';
import LayoutBody from '@/components/layout/body';
import courses from '@/data/courses';
import { linkify } from '@repo/utils/formatters';

export interface typeParams {
  params: { courseId: string };
}

export const generateMetadata = ({ params }: typeParams): Metadata => {
  return {
    title: courses.advanced.units.find(
      (u) => linkify(u.title.full) == params.courseId
    )?.title.full,
  };
};

export default function AdvancedCourse({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <LayoutBody>{children}</LayoutBody>;
}
