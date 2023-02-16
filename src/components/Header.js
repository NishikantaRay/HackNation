import React from "react";

export default function Header() {
  return (
    <div>
      <div class="slider-area  position-relative">
        <div class="slider-active">
          <div class="single-slider">
            <div class="slider-cap-wrapper slider-height">
              <div class="hero-caption">
                <span data-animation="fadeInUp" data-delay=".2s">
                  A complete Health solution
                </span>
                <h1 data-animation="fadeInUp" data-delay=".4s">
                  Campus Health Hub
                </h1>
                <p data-animation="fadeInUp" data-delay=".6s">
                  Your One-Stop Solution for Health and Wellness on Campus
                </p>

                <div class="col-xl-10 float-left">
                  <button type="submit" className="btn_1 d-none d-xl-block">
                    Get Started
                  </button>
                </div>
              </div>
              <div class="hero-img position-relative">
                <img
                  src="assets/img/bg.png"
                  alt=""
                  data-animation="fadeInRight"
                  data-transition-duration="5s"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="hero-shape d-none d-xl-block">
          <img src="assets/img/hero/hero-shape.png" alt="" />
        </div>
      </div>
    </div>
  );
}
