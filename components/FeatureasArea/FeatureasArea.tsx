import React, { FC } from "react";

interface OwnProps {}

type Props = OwnProps;

const FeatureasArea: FC<Props> = () => {
  return (
    <section
      className="features-area grey-bg pt-130 pb-100"
      id="featureas-area"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title text-center mb-80">
              <h6 className="mb-20">Czym się zajmujemy?</h6>
              <h3>Oferujemy Jakościowy Serwis Samochodowy</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp2 animated mb-30"
            data-wow-delay=".2s"
          >
            <div
              className="features features-2 mb-30"
              style={{ backgroundImage: "url(/img/feature/01.jpg)" }}
            >
              <div className="features__icon mb-35">
                <img className="block-one" src="/img/icon/01.png" alt="" />
                <img className="block-two" src="/img/icon/1a.png" alt="" />
              </div>
              <div className="features__content">
                <h4>Mechanika Pojazdow</h4>
                <p>Naprawy mechaniczne w 90% marek samochodów</p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp2 animated mb-30"
            data-wow-delay=".3s"
          >
            <div
              className="features features-2 mb-30"
              style={{ backgroundImage: "url(/img/feature/01.jpg)" }}
            >
              <div className="features__icon mb-35">
                <img className="block-one" src="/img/icon/02.png" alt="" />
                <img className="block-two" src="/img/icon/2a.png" alt="" />
              </div>
              <div className="features__content">
                <h4 className="gservice-title">Serwis Klimatyzacji</h4>
                <p>Pełny serwis klimatyzacji nowy i stary czynnik chłodniczy</p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp2 animated mb-30"
            data-wow-delay=".4s"
          >
            <div
              className="features features-2 mb-30"
              style={{ backgroundImage: "url(/img/feature/01.jpg)" }}
            >
              <div className="features__icon mb-35">
                <img className="block-one" src="/img/icon/03.png" alt="" />
                <img className="block-two" src="/img/icon/3a.png" alt="" />
              </div>
              <div className="features__content">
                <h4 className="gservice-title">Elektryka Samochodowa</h4>
                <p>Diagnostyka oraz elektryka samochodowa. </p>
              </div>
            </div>
          </div>
          <div
            className="col-xxl-3 col-xl-4 col-lg-4 col-md-6 wow fadeInUp2 animated mb-30"
            data-wow-delay=".5s"
          >
            <div
              className="features features-2 mb-30"
              style={{ backgroundImage: "url(/img/feature/01.jpg)" }}
            >
              <div className="features__icon mb-35">
                <img className="block-one" src="/img/icon/01.png" alt="" />
                <img className="block-two" src="/img/icon/1a.png" alt="" />
              </div>
              <div className="features__content">
                <h4 className="gservice-title">Ogrzewania Postojowe</h4>
                <p>Autoryzowany sklep i serwis ogrzewań postojowych</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureasArea;
