import React, { FC } from "react";

interface OwnProps {}

type Props = OwnProps;

const HeroArea: FC<Props> = () => {
  return (
    <>
      <div className="hero-area hero-style-2">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="hero__content text-left">
                <h1
                  className="main-title mb-25 wow fadeInUp2 animated"
                  data-wow-delay=".2s"
                >
                  Serwis Jakiego Szukasz
                </h1>
                <h5
                  className="semi-title-2 wow fadeInUp2 animated"
                  data-wow-delay=".3s"
                >
                  Spawdź serwis EXELO i poznaj nasze podejście do klienta, oraz
                  samochodu.
                </h5>
                <ul
                  className="btn-list mt-35 wow fadeInUp2 animated"
                  data-wow-delay=".4s"
                ></ul>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6">
              <div
                className="hero_img text-end wow zoomIn animated"
                data-wow-delay=".4s"
              >
                <img
                  className="img-fluid scaleUp1"
                  src="/img/slider/slider4.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;
