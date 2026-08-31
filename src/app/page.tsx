import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { RecruiterStrip } from "@/components/RecruiterStrip";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Growth } from "@/components/Growth";
import { Bridge } from "@/components/Bridge";
import { Fintech } from "@/components/Fintech";
import { Projects } from "@/components/Projects";
import { GithubWork } from "@/components/GithubWork";
import { Skills } from "@/components/Skills";
import { Education } from "@/components/Education";
import { Social } from "@/components/Social";
import { Brand } from "@/components/Brand";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <RecruiterStrip />
        <About />
        <Experience />
        <Growth />
        <Bridge />
        <Fintech />
        <Projects />
        <GithubWork />
        <Skills />
        <Education />
        <Social />
        <Brand />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
