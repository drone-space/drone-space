import { Icon } from '@tabler/icons-react';

export interface Link {
  link: string;
  label: string;
  desc?: string;
  icon?: Icon;
}

export interface typeMenu extends Link {
  subLinks?: Link[];
}

export interface typeMenuNavbar extends typeMenu {
  leftSection?: Icon;
  rightSection?: Icon;
}
