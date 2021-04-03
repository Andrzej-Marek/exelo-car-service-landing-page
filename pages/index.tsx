import Head from "next/head";
import { useState } from "react";
import {
  CounterArea,
  CtaArea,
  FAQArea,
  FeatureasArea,
  Footer,
  Header,
  HeroArea,
  Navbar,
  WhyChooseUs,
} from "../components";

export default function Home() {
  const [isOpenNavbar, toggleIsOpenNavbar] = useState(false);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header toggleNavbar={() => toggleIsOpenNavbar(true)} />
      <Navbar
        isOpen={isOpenNavbar}
        toggleNavbar={() => toggleIsOpenNavbar((prevState) => !prevState)}
      />

      <HeroArea />
      <CounterArea />
      <FeatureasArea />
      <WhyChooseUs />
      {/* <ServicesArea /> */}
      <FAQArea />
      <CtaArea />
      <Footer />
    </div>
  );
}
