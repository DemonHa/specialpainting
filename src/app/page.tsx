import Description from "@/features/home/main/description";
import Hero from "@/features/home/hero/hero";
import Main from "@/features/home/main";
import Statistics from "@/features/home/main/statistics";
import Testimonials from "@/features/home/main/testimonials";
import Footer from "@/features/home/footer";
import Language from "@/features/home/footer/language";

import Achivements from "@/features/home/main/achivements";

export default function Home() {
  return (
    <>
      <Hero />
      <Main>
        <Description />
        <Statistics />
        <Achivements />
        <Testimonials />
      </Main>
    <Footer>
      <Language />
    </Footer>
    </>
  );
}
