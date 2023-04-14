import Navbar from "../components/Navbar.js";
import HeroSection from "../components/HeroSection.js";
import Largest from "../components/Largest.js";
import Container from "../components/Container.js";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Resurgence 2.0 - IEEE SCT SB</title>
        <meta
          name="description"
          content="Techno-Literacy Fest conducted by IEEE SCT SB"
        />
        <meta property="og:title" content="Resurgence 2.0 - IEEE SCT SB" />
        <meta property="og:url" content="https://ieeesctsb.org/" />
        <meta
          property="og:description"
          content="IEEE SCT SB is here with yet another version of Resurgence. RESURGENCE 2.0 is a batch-wise competition conducted exclusively for SCTians with many activities like hackathons, competitions, etc."
        />
        <meta
          property="og:image"
          content="/resurgence.svg"
        />
      </Head>
      <Navbar />
      <HeroSection />
      <Largest />
      <Container />
    </>
  );
}
