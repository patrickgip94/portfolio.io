import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Patrick&apos;s Portfolio</title>
        <link rel="icon" href="https://i.imgur.com/83VDPFh.png" />
      </Head>
      <div className="relative z-0">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Skills />
        <Projects />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </div>
  )
}
