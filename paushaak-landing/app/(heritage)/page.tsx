import { HeritageHero } from "@/components/heritage/sections/HeritageHero";
import { HeritageIntroVideo } from "@/components/heritage/sections/HeritageIntroVideo";
import { Plea } from "@/components/heritage/sections/Plea";
import { HeritageProblem } from "@/components/heritage/sections/HeritageProblem";
import { HeritageSolution } from "@/components/heritage/sections/HeritageSolution";
import { HeritageDifferentiation } from "@/components/heritage/sections/HeritageDifferentiation";
import { HeritageImpact } from "@/components/heritage/sections/HeritageImpact";
import { HeritageTeam } from "@/components/heritage/sections/HeritageTeam";
import { HeritageFooter } from "@/components/heritage/sections/HeritageFooter";
import { BardIcon } from "@/components/heritage/BardIcon";
import { LoadingScreen } from "@/components/heritage/LoadingScreen";

export default function HeritagePage() {
  return (
    <main>
      <LoadingScreen />
      <HeritageHero />
      <HeritageIntroVideo />
      <Plea />
      <HeritageProblem />
      <HeritageSolution />
      <HeritageDifferentiation />
      <HeritageImpact />
      <HeritageTeam />
      <HeritageFooter />
      <BardIcon />
    </main>
  );
}
