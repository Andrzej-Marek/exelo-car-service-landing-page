import React, { FC } from "react";
import { Link } from "react-scroll";

interface OwnProps {
  to: string;
  label: string;
  onClick?: () => void;
}

type Props = OwnProps;

const ScrollLink: FC<Props> = ({ to, label, onClick }) => {
  return (
    <div className="scroll-link-item">
      <Link
        className="scroll-link"
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-50}
        duration={500}
        onClick={onClick}
      >
        {label}
      </Link>
    </div>
  );
};
export default ScrollLink;
