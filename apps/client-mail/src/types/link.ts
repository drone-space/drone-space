export interface Link {
  link: string;
  label: string;
  desc?: string;
  subLinks?: Link[];
}
