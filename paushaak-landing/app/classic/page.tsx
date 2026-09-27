import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/ui/Marquee";
import { marquee } from "@/content/sections";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Differentiation } from "@/components/sections/Differentiation";
import { Impact } from "@/components/sections/Impact";
import { MarketBusiness } from "@/components/sections/MarketBusiness";
import { Team } from "@/components/sections/Team";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee items={[...marquee]} />
      <Problem />
      <Solution />
      <Differentiation />
      <Impact />
      <MarketBusiness />
      <Team />
    </main>
  );
}
