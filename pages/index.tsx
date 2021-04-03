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
        <title>Serwis Samochodowy EXELO</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Serwis Samochodowy EXELO, Serwis Klimatyzacji Samochodowej, Elektryka"
        />
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
      <FAQArea />
      <CtaArea />
      <Footer />
    </div>
  );
}
