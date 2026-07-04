import Hero from "@/components/home/Hero";
import AboutClub from "@/components/home/AboutClub";
import Statistics from "@/components/home/Statistics";
import MoreThanBasketball from "@/components/home/MoreThanBasketball";
import ClubLife from "@/components/home/ClubLife";
import ParentsChoose from "@/components/home/ParentsChoose";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutClub />
      <Statistics />
      <MoreThanBasketball />
      <ClubLife />
      <ParentsChoose />
    </main>
  );
}