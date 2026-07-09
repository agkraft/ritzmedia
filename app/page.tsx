import About from "./components/about";
import Award from "./components/award";
import Deliver from "./components/deliver";
import Footer from "./components/footer";
import Header from "./components/header";
import HustleSection from "./components/hustlesection";
import ServicesHero from "./components/servicebanner";
import Think from "./components/think";
import TimelineSection from "./components/timelinesection";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Deliver />
      <Think />
      <TimelineSection />
      <Award />
      <HustleSection />
      <ServicesHero />
      <Footer />
    </>
  );
}
