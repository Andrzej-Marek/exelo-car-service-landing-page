import Head from "next/head";
import React, { useState } from "react";
import { Header, HeroArea, Navbar } from "../components";

const FAQArea = React.lazy(() => import("../components/FAQArea/FAQArea"));
const Footer = React.lazy(() => import("../components/Footer/Footer"));
const WhyChooseUs = React.lazy(
  () => import("../components/WhyChooseUs/WhyChooseUs")
);
const FeatureasArea = React.lazy(
  () => import("../components/FeatureasArea/FeatureasArea")
);
const CtaArea = React.lazy(() => import("../components/CtaArea/CtaArea"));
const CounterArea = React.lazy(
  () => import("../components/CounterArea/CounterArea")
);
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
