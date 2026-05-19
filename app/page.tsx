// app/page.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Differentiator from "./components/Differentiator";
import HowItWorks from "./components/HowItWorks";
import ImageBanner from "./components/ImageBanner";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Differentiator />
        <HowItWorks />
        <ImageBanner />
      </main>
      <Footer />
    </>
  );
}