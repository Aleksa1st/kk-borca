import Hero from "@/components/home/Hero";
import AboutClub from "@/components/home/AboutClub";
import Statistics from "@/components/home/Statistics";
import Generations from "@/components/home/Generations";
import MoreThanBasketball from "@/components/home/MoreThanBasketball";
import ClubLife from "@/components/home/ClubLife";
import WabaHighlight from "@/components/home/WabaHighlight";
import ParentsChoose from "@/components/home/ParentsChoose";
import JoinClub from "@/components/home/JoinClub";
import PartnersPreview from "@/components/home/PartnersPreview";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutClub />
      <Statistics />
      <Generations />
      <MoreThanBasketball />
      <ClubLife />
      <WabaHighlight />
      <ParentsChoose />
      <JoinClub />
      <PartnersPreview />
    </main>
  );
}