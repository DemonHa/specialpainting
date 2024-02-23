import Description from "@/features/home/description";
import Hero from "@/features/home/hero/hero";
import Main from "@/features/home/main";
import Statistics from "@/features/home/statistics";

export default function Home() {
  return (
    <>
      <Hero />
      <Main>
        <Description />
        <Statistics />
      </Main>
    </>
  );
}
