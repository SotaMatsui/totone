import type { StaticImageData } from "next/image";
import airPurifier from "@/assets/img/air-purifier.png";
import aircon from "@/assets/img/aircon.png";
import fridge from "@/assets/img/fridge.png";
import microwave from "@/assets/img/microwave.png";

export type Product = {
  name: string;
  description: string;
  price: number;
  image?: StaticImageData;
  imagePosition?: string;
};

export type SetPlan = {
  name: string;
  items: string;
  price: number;
};

export const STUDENT_DISCOUNT_RATE = 0.2;

export const products: Product[] = [
  {
    name: "鳥の巣 電子レンジ",
    description:
      "編み込まれた巣のような外観。温め完了時には「チン」ではなく、優しい小鳥のさえずりでお知らせします。",
    price: 39800,
    image: microwave,
  },
  {
    name: "木の冷蔵庫",
    description:
      "本物の樹木と苔が息づくようなデザイン。小枝のハンドルを開けるたび、森の澄んだ冷気が広がります。",
    price: 69800,
    image: fridge,
    imagePosition: "center 40%",
  },
  {
    name: "森のそよ風 エアコン",
    description:
      "マイナスイオンを豊富に含んだ風を届けるエアコン。木漏れ日の下で深呼吸しているような心地よさへ。",
    price: 89800,
    image: aircon,
  },
  {
    name: "深呼吸 空気清浄機",
    description:
      "空気がキレイになると鳥が小さくさえずり、アロマとマイナスイオンで部屋の空気を森の朝へ書き換えます。",
    price: 24800,
    image: airPurifier,
  },
  {
    name: "きのこランプ",
    description:
      "ぽわんと柔らかな光でベッドサイドを照らす、キノコ型のタッチセンサー調光ランプです。",
    price: 9800,
  },
];

export const setPlans: SetPlan[] = [
  { name: "① 空気セット", items: "空気清浄機 ＋ エアコン", price: 99800 },
  { name: "② キッチン家電セット", items: "電子レンジ ＋ 木の冷蔵庫", price: 96000 },
  { name: "③ 見た目いい感じセット", items: "電子レンジ ＋ きのこランプ", price: 44800 },
];

export function formatPrice(price: number, discounted: boolean) {
  const value = discounted ? Math.round(price * (1 - STUDENT_DISCOUNT_RATE)) : price;
  return `¥${value.toLocaleString("ja-JP")}`;
}
