export type Page = {
  id: string;
  href: string;
  label: string;
};

export const PAGES: Page[] = [
  {
    id: "0",
    href: "#about",
    label: "ABOUT",
  },
  {
    id: "1",
    href: "#feature",
    label: "FEATURE",
  },
  {
    id: "2",
    href: "#product",
    label: "PRODUCT",
  },
  {
    id: "3",
    href: "#gallery",
    label: "GALLERY",
  },
];

export type Sns = {
  href: string;
  label: string;
};

export const SNSS: Sns[] = [
  {
    href: "#",
    label: "X",
  },
  {
    href: "#",
    label: "Instagram",
  },
  {
    href: "#",
    label: "Pinterest",
  },
];
