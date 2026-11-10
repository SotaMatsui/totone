import type { Metadata } from "next";
import { Quicksand, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-quicksand",
});

const zenMaru = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  variable: "--font-zen-maru",
  preload: false,
});

export const metadata: Metadata = {
  title: "totone（トトネ）| 暮らしに、自然という心地よさを。",
  description:
    "木肌の手触り、鳥のさえずり、澄んだ風を届ける家電ブランド「totone（トトネ）」",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={`${quicksand.variable} ${zenMaru.variable}`}>
      <body>{children}</body>
    </html>
  );
}
