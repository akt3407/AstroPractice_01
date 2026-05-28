export type Page = {
  id: string;
  href: string;
  scroll: string;
  label: string;
};

export const PAGES: Page[] = [
  {
    id: "0",
    href: "#about",
    scroll: "about",
    label: "ABOUT",
  },
  {
    id: "1",
    href: "#feature",
    scroll: "feature",
    label: "FEATURE",
  },
  {
    id: "2",
    href: "#product",
    scroll: "product",
    label: "PRODUCT",
  },
  {
    id: "3",
    href: "#gallery",
    scroll: "gallery",
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
