import React, { FC } from "react";

interface OwnProps {}

type Props = OwnProps;

const CounterArea: FC<Props> = () => {
  return (
    <section className="counter-area counter-area-2" id="counter-area">
      <div className="container custom-count-container">
        <div className="counter_bg theme-bg pl-60 pr-60">
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="counters d-xxl-flex align-items-center">
                <div className="count-num">
                  <span className="counter">321</span>+
                </div>
                <p>Klientów w roku 2020</p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="counters d-xxl-flex align-items-center">
                <div className="count-num">
                  <span className="counter">542</span>+
                </div>
                <p>Serwisowanych pojazdów</p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="counters d-xxl-flex align-items-center">
                <div className="count-num">
                  <span className="counter">100</span>%
                </div>
                <p>Zadowolonych klientów</p>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div className="counters d-xxl-flex align-items-center">
                <div className="count-num">
                  <span className="counter">1440</span>+
                </div>
                <p>Wymienionych części</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterArea;
