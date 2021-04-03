import React, { FC } from "react";
import { Links } from "../../constants";

interface OwnProps {}

type Props = OwnProps;

const Footer: FC<Props> = () => {
  const CURRENT_YEAR = new Date().getFullYear();
  return (
    <footer className="footer-area footer-area-2 dark-blue-bg pt-80">
      <div className="container">
        <div className="row border-bottom pb-50">
          <div
            className="col-xxl-4 col-xl-4 col-lg-4 col-md-6  wow fadeInUp2 animated"
            data-wow-delay=".1s"
          >
            <div className="footer__widget mb-30">
              <div className="logo logo-img" style={{ marginBlock: "20px" }}>
                <img
                  src="/img/logo/footer-logo2.png"
                  alt=""
                  style={{ maxWidth: "180px" }}
                />
              </div>
              <p>
                Serwis samochodowy EXELO s.c. To firma świadcząca usługi w
                zakresie mechaniki, elektryki, serwisu klimatyzacji oraz
                ogrzewań postojowych.
              </p>
              <div className="footer_social mt-30">
                <a
                  style={{ color: "#0676e8" }}
                  target="_blank"
                  href={Links.FACEBOOK}
                  rel="noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  style={{ color: "#D9480F" }}
                  href={Links.GOOGLE}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-google"></i>
                  <i className="fab fa-google"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-4 col-xl-4col-lg-4 col-md-3 col-sm-6  wow fadeInUp2 animated"
            data-wow-delay=".2s"
          >
            <div className="footer__widget mb-30 pl-70"></div>
          </div>
          <div
            className="col-xxl-4 col-xl-4col-lg-6 col-md-6 col-sm-6  wow fadeInUp2 animated"
            data-wow-delay=".5s"
          >
            <div className="footer__widget mb-25 pl-85">
              <h4 className="semi-title mb-25">Kontakt</h4>
              <p className="mb-10">Skontaktuj się z nami</p>
              <ul className="fot-list address-list">
                <li>
                  <a href="mailto:firma.exelo@gmail.com" rel="noreferrer">
                    <span>
                      <i className="far fa-map-marker-alt"></i>
                    </span>{" "}
                    firma.exelo@gmail.com
                  </a>
                </li>
                <li>
                  <a href={Links.GOOGLE} target="_blank" rel="noreferrer">
                    <span>
                      <i className="far fa-envelope"></i>
                    </span>{" "}
                    ul. Pszczyńska 116 43-254 Warszowice
                  </a>
                </li>
                <li>
                  <a href="tel:+48794965465" rel="noreferrer">
                    <span>
                      <i className="far fa-phone-volume"></i>
                    </span>{" "}
                    +48 794 965 465
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy-right-area pt-30">
          <div className="row align-items-center">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="copyright mb-25 text-center">
                <p>© {CURRENT_YEAR} Copyright, All Right Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
