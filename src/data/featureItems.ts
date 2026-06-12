import type { ImageMetadata } from "astro";

import featureImg01Sp from "@/assets/img-feature-01-sp.jpg";
import featureImg01Pc from "@/assets/img-feature-01.jpg";
import featureImg02Sp from "@/assets/img-feature-02-sp.jpg";
import featureImg02Pc from "@/assets/img-feature-02.jpg";
import featureImg03Sp from "@/assets/img-feature-03-sp.jpg";
import featureImg03Pc from "@/assets/img-feature-03.jpg";

type FeatureItem = {
  number: string;
  title: string;
  description: string;
  alt: string;
  images: {
    mobile: ImageMetadata;
    desktop: ImageMetadata;
  };
};

export const featureItems = [
  {
    number: "01",
    title: "職人による一点もの",
    description:
      "すべての家具は、熟練の職人が一点ずつ手仕事で仕上げています。<br />木目の個性、細部の仕口、触れたときの感触にまで気を配った仕上がりは、大量生産にはない温もりと品格を宿します。",
    alt: "木製椅子のフレームを丁寧に調整する職人の手元。背景には温かい光のテーブルランプとサイドボード",
    images: {
      mobile: featureImg01Sp,
      desktop: featureImg01Pc,
    },
  },
  {
    number: "02",
    title: "素材を活かすデザイン",
    description:
      "無垢材や天然塗料など、自然素材の魅力を活かすシンプルなデザインが特徴。木の表情を隠さず、素材<br class='block md:hidden'/>の“声”をそのまま活かすことで、空間にすっとなじむ静かな存在感を放ちます。",
    alt: "天然木の節を活かしたサイドテーブル。天板の上には黒いマグカップと本、リンゴが置かれている",
    images: {
      mobile: featureImg02Sp,
      desktop: featureImg02Pc,
    },
  },
  {
    number: "03",
    title: "経年変化が楽しめる",
    description:
      "無垢材や自然素材は、生きているように表情を変えていきます。<br class='hidden md:block' />磨かれ、傷つき、艶を帯びながら、<br class='hidden md:block' />その変化さえも「味」となるように設計されています。",
    alt: "有機的な曲線を持つ一枚板のローテーブルと、リネン素材のローソファが置かれたモダンなリビング",
    images: {
      mobile: featureImg03Sp,
      desktop: featureImg03Pc,
    },
  },
] as const satisfies FeatureItem[];
