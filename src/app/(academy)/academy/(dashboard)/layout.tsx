import React from 'react';
import AppshellAcademy from '@/components/layout/appshell/academy';

export default function Academy({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return <AppshellAcademy>{children}</AppshellAcademy>;
}
