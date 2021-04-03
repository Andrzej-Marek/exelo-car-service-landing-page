import React, { FC } from "react";

interface OwnProps {}

type Props = OwnProps;

const ServicesArea: FC<Props> = () => {
  return (
    <section className="services-area pt-125 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="section-title text-center mb-80">
              <h6
                className="mb-20 wow fadeInUp2 animated"
                data-wow-delay="0.1s"
              >
                Czym się zajmujemy?
              </h6>
              <h3 className="wow fadeInUp2 animated" data-wow-delay="0.2s">
                Oferujemy Jakościowy Serwis Samochodowy
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
            <div
              className="gservices mb-30 wow fadeInUp2 animated"
              data-wow-delay="0.2s"
            >
              <div className="gservices_img">
                <div className="gservices__thumb">
                  <img src="/img/service/02.jpg" alt="" />
                </div>
                <div className="gservices_button_box">
                  <div className="gservices__icon">
                    <i className="flaticon-engineering"></i>
                  </div>
                </div>
              </div>
              <div className="gservices__content">
                <h4 className="gservice-title">Mechanika Pojazdowa</h4>
                <p>Naprawy mechaniczne w 90% marek samochodów</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
            <div
              className="gservices mb-30 wow fadeInUp2 animated"
              data-wow-delay="0.3s"
            >
              <div className="gservices_img">
                <div className="gservices__thumb">
                  <img src="/img/service/03.jpg" alt="" />
                </div>
                <div className="gservices_button_box">
                  <div className="gservices__icon">
                    <i className="flaticon-hand"></i>
                  </div>
                </div>
              </div>
              <div className="gservices__content">
                <h4 className="gservice-title">Serwis Klimatyzacji</h4>
                <p>Pełny serwis klimatyzacji nowy i stary czynnik chłodniczy</p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
            <div
              className="gservices mb-30 wow fadeInUp2 animated"
              data-wow-delay="0.4s"
            >
              <div className="gservices_img">
                <div className="gservices__thumb">
                  <img src="/img/service/04.jpg" alt="" />
                </div>
                <div className="gservices_button_box">
                  <div className="gservices__icon">
                    <i className="flaticon-disc-brake"></i>
                  </div>
                </div>
              </div>
              <div className="gservices__content">
                <h4 className="gservice-title">Elektryka Samochodowa</h4>
                <p>Diagnostyka oraz elektryka samochodowa. </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
            <div
              className="gservices mb-30 wow fadeInUp2 animated"
              data-wow-delay="0.5s"
            >
              <div className="gservices_img">
                <div className="gservices__thumb">
                  <img src="/img/service/05.jpg" alt="" />
                </div>
                <div className="gservices_button_box">
                  <div className="gservices__icon">
                    <i className="flaticon-car-service"></i>
                  </div>
                </div>
              </div>
              <div className="gservices__content">
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

export default ServicesArea;
