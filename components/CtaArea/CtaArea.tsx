import React, { FC } from "react";

interface OwnProps {}

type Props = OwnProps;

const CtaArea: FC<Props> = () => {
  return (
    <section
      className="cta-area cta-height"
      style={{ backgroundImage: "url(/img/bg/04.jpeg)" }}
      id="contact"
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="cta_wrapper">
              <div className="section-title white-title text-center mb-40">
                <h6
                  className="mb-20 wow fadeInUp2 animated"
                  data-wow-delay=".1s"
                >
                  Skontaktuj się z nami!
                </h6>
                <h3 className="wow fadeInUp2 animated" data-wow-delay=".2s">
                  +48 794 965 465
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaArea;
