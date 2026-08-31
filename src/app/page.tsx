import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Nutrition } from "../components/sections/Nutrition";
import { Services } from "../components/sections/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Nutrition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
