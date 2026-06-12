import galleryImg01Sp from "@/assets/img-gallery-01-sp.jpg";
import galleryImg01Pc from "@/assets/img-gallery-01.jpg";
import galleryImg02Sp from "@/assets/img-gallery-02-sp.jpg";
import galleryImg02Pc from "@/assets/img-gallery-02.jpg";
import galleryImg03Sp from "@/assets/img-gallery-03-sp.jpg";
import galleryImg03Pc from "@/assets/img-gallery-03.jpg";
import galleryImg04Sp from "@/assets/img-gallery-04-sp.jpg";
import galleryImg04Pc from "@/assets/img-gallery-04.jpg";
import galleryImg05Sp from "@/assets/img-gallery-05-sp.jpg";
import galleryImg05Pc from "@/assets/img-gallery-05.jpg";

export const galleryImages = {
  img01: {
    mobileImg: galleryImg01Sp,
    desktopImg: galleryImg01Pc,
  },
  img02: {
    mobileImg: galleryImg02Sp,
    desktopImg: galleryImg02Pc,
  },
  img03: {
    mobileImg: galleryImg03Sp,
    desktopImg: galleryImg03Pc,
  },
  img04: {
    mobileImg: galleryImg04Sp,
    desktopImg: galleryImg04Pc,
  },
  img05: {
    mobileImg: galleryImg05Sp,
    desktopImg: galleryImg05Pc,
  },
} as const;
