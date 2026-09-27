import type { Metadata } from "next";
import {
  Cinzel,
  Cormorant_Garamond,
  Rozha_One,
  Noto_Serif_Devanagari,
  Noto_Nastaliq_Urdu,
} from "next/font/google";
import "./heritage.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const rozha = Rozha_One({
  variable: "--font-rozha",
  subsets: ["devanagari", "latin"],
  weight: "400",
});

const notoDevanagari = Noto_Serif_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600"],
});

const notoNastaliq = Noto_Nastaliq_Urdu({
  variable: "--font-noto-nastaliq",
  subsets: ["arabic", "latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "PAUSHAAK — करघे से बाज़ार तक",
  description:
    "A heritage-styled retelling of PAUSHAAK: the artisan's craft, painted and penned in the spirit of Mughal and Rajput-era miniatures.",
};

export default function HeritageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`heritage-page ${cinzel.variable} ${cormorant.variable} ${rozha.variable} ${notoDevanagari.variable} ${notoNastaliq.variable}`}
    >
      {children}
    </div>
  );
}
