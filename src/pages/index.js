import Navbar from "../components/Navbar.js";
import HeroSection from "../components/HeroSection.js";
import Largest from "../components/Largest.js";
import Container from "../components/Container.js";
import Head from "next/head";
import Script from "next/script";

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
        <meta property="og:image" content="/resurgence.svg" />
      </Head>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-T5CSNYS9YF"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-T5CSNYS9YF', {
page_path: window.location.pathname,
});
`,
        }}
      />
      <Navbar />
      <HeroSection />
      <Largest />
      <Container />
    </>
  );
}
