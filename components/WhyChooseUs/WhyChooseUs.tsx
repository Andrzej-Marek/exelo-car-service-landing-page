import React, { FC } from "react";

interface OwnProps {}

type Props = OwnProps;

const WhyChooseUs: FC<Props> = () => {
  return (
    <section
      className="chose-us-area chose-style-1 dark-blue-bg"
      id="why-choose-us"
    >
      <div
        className="chose-us-img"
        style={{ backgroundImage: "url(/img/bg/02.jpeg)" }}
      ></div>
      <img
        src="/img/shape/03.png"
        alt=""
        className="chose-shape-one d-none d-md-inline-block"
      />
      <img
        src="/img/shape/04.png"
        alt=""
        className="chose-shape-two d-none d-md-inline-block"
      />
      <div className="container px-0">
        <div className="row gx-0 justify-content-end">
          <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
            <div className="chose_wrapper pt-145 pl-100 pb-140 pr-130">
              <div className="section-title white-title text-left mb-40">
                <h6 className="mb-20">Dlaczego Nasz Serwis?</h6>
                <h3 className="mb-50">Poznaj nową jakoś obsługi serwisowej</h3>
              </div>
              <ul className="services_text_list mb-15">
                <li>Gwarancja na każdy serwis</li>
                <li>Kontakt na każdym etapie serwisu</li>
                <li>Markowe Części</li>
                <li>Rabaty Dla Stałych Klientów</li>
                <li>Historia Serwisowa</li>
                <li>Profesionalna Załoga</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
