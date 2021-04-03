import React, { FC } from "react";
import { ScrollLink } from "..";
import { Links } from "../../constants";

interface OwnProps {
  toggleNavbar: () => void;
}

type Props = OwnProps;

const Header: FC<Props> = ({ toggleNavbar }) => {
  return (
    <header className="header-area">
      <div className="header-top-area header-top-2 theme-bg d-none d-lg-block">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 text-center d-none d-md-block">
              <ul className="cta_list">
                <li>
                  <a href={Links.GOOGLE} target="_blank" rel="noreferrer">
                    <i className="fal fa-map-marker-alt"></i> ul. Pszczyńska 116
                    43-254 Warszowice
                  </a>
                </li>
                <li>
                  <i className="fal fa-clock"></i> Pon - Piąt: 09:00-17:00, Sob:
                  09:00-13:00
                </li>
              </ul>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 text-end d-none d-md-block">
              <ul className="cta_list">
                <li>
                  <a href="tel:+48794965465">
                    <i className="fal fa-phone"></i> +48 794 965 465
                  </a>
                </li>
                <li>
                  <div className="haeader_social">
                    <a href={Links.FACEBOOK} target="_blank" rel="noreferrer">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href={Links.GOOGLE} target="_blank" rel="noreferrer">
                      <i className="fab fa-google"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header-area pt-10 pb-10">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-2 col-xl-2 col-lg-6 col-md-4 col-6">
              <div className="logo logo-img">
                <img src="/img/logo/header_logo_two.png" alt="EXELO" />
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-xl-block text-lg-center text-xl-right">
              <div className="main-menu d-none d-lg-block">
                <nav>
                  <ul>
                    <li>
                      <ScrollLink to="featureas-area" label="Oferta" />{" "}
                    </li>
                    <li>
                      <ScrollLink to="why-choose-us" label="Dlaczego EXELO?" />{" "}
                    </li>
                    <li>
                      <ScrollLink to="faq-area" label="Pytania i Odpowiedzi" />{" "}
                    </li>
                    <li>
                      <ScrollLink to="contact" label="Kontakt" />{" "}
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-6 col-md-8 col-6 text-end">
              <ul className="right-nav right-nav-2 d-inline-flex align-items-center">
                <li>
                  <div
                    className="hamburger-menu d-lg-block d-xl-none mr-25"
                    onClick={toggleNavbar}
                  >
                    <i className="far fa-bars"></i>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
