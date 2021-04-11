import React, { FC, useState } from "react";

interface OwnProps {}

type Props = OwnProps;

const FAQArea: FC<Props> = () => {
  const [opens, setOpens] = useState({
    open1: false,
    open2: false,
    open3: false,
    open4: false,
  });

  const toggleOpen = (openNumber: string) => {
    setOpens((prevState) => ({
      ...prevState,
      [openNumber]: !prevState[openNumber],
    }));
  };
  const { open1, open2, open3, open4 } = opens;
  return (
    <section className="faq-area faq-style-1 grey-bg" id="faq-area">
      <div className="container">
        <div className="row">
          <div className="col-xxl-4 col-xl-5 col-lg-6">
            <div className="faq_wrapper">
              <div className="section-title text-left mb-40">
                <h6 className="mb-20">Najcześciej zadawane pytania</h6>
                <h3>Jesteśmy po to, aby Ci pomóc!</h3>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item mb-10">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      onClick={() => toggleOpen("open1")}
                    >
                      Czy na serwis muszę umawiać się z wyprzedzeniem?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className={`accordion-collapse collapse ${open1 && "show"}`}
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        Tak, wszystkie serwisy umawiane są co do dnia i godziny,
                        dzięki czemu wiesz, kiedy Twój samochód jest
                        serwisowany.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-10">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed show"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      onClick={() => toggleOpen("open2")}
                    >
                      Czy jest możliwość napełnienia tzw. nowego czynnika
                      klimatyzacji (r1234yf)?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className={`accordion-collapse collapse ${open2 && "show"}`}
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Jak najbardziej, nasza firma świadczy kompleksowe usługi w
                      zakresie serwisu klimatyzacji. Również z czynnikiem
                      r1234yf
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-10">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      onClick={() => toggleOpen("open3")}
                    >
                      Czy na usługę dostanę gwarancję?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className={`accordion-collapse collapse ${open3 && "show"}`}
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Oczywiście! Na wszelkie nasze usługi wystawiamy gwarancję.
                      Dzięki gwarancji wrazie ustarki samochów jest traktowany
                      priorytetowo!
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-10">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                      onClick={() => toggleOpen("open4")}
                    >
                      Jak mogę umówić wizytę?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className={`accordion-collapse collapse ${open4 && "show"}`}
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Umówienie wizyty jest niezwykle proste, wystarczy iż
                      skontaktujesz się na numer telefonu: +48 794 965 465.
                      Znajdziemy odpowiedni termin.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-8 col-xl-7 col-lg-6">
            <div className="faq_video_area">
              <div className="faq_video_wrap"></div>
              <div className="faq__thumb-2 d-none d-xl-inline">
                <img src="/img/faq/02.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQArea;
