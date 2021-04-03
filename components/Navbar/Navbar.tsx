import React, { FC } from "react";
import { ScrollLink } from "..";

interface OwnProps {
  isOpen: boolean;
  toggleNavbar: () => void;
}

type Props = OwnProps;

const Navbar: FC<Props> = ({ isOpen, toggleNavbar }) => {
  return (
    <>
      <aside className={`slide-bar ${isOpen && "show"}`}>
        <div className="close-mobile-menu" onClick={toggleNavbar}>
          <a href="#">
            <i className="fas fa-times"></i>
          </a>
        </div>

        <nav className="side-mobile-menu">
          <ul>
            <li>
              <ScrollLink
                to="featureas-area"
                label="Oferta"
                onClick={toggleNavbar}
              />{" "}
            </li>
            <li>
              <ScrollLink
                to="why-choose-us"
                label="Dlaczego EXELO?"
                onClick={toggleNavbar}
              />{" "}
            </li>
            <li>
              <ScrollLink
                to="faq-area"
                label="Pytania i Odpowiedzi"
                onClick={toggleNavbar}
              />{" "}
            </li>
            <li>
              <ScrollLink to="contact" label="Kontakt" onClick={toggleNavbar} />{" "}
            </li>
          </ul>
        </nav>
      </aside>
      <div
        className={`body-overlay ${isOpen && "active"}`}
        onClick={toggleNavbar}
      />
    </>
  );
};

export default Navbar;
