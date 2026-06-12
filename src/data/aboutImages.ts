import aboutImg01Sp from "@/assets/img-about-01-sp.jpg";
import aboutImg01Pc from "@/assets/img-about-01.jpg";
import aboutImg02Sp from "@/assets/img-about-02-sp.jpg";
import aboutImg02Pc from "@/assets/img-about-02.jpg";
import aboutImg03Sp from "@/assets/img-about-03-sp.jpg";
import aboutImg03Pc from "@/assets/img-about-03.jpg";

export const aboutImages = {
  img01: {
    mobileImg: aboutImg01Sp,
    desktopImg: aboutImg01Pc,
  },
  img02: {
    mobileImg: aboutImg02Sp,
    desktopImg: aboutImg02Pc,
  },
  img03: {
    mobileImg: aboutImg03Sp,
    desktopImg: aboutImg03Pc,
  },
} as const;
