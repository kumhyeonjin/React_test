import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

import { Link } from "react-router-dom";

function MainEvent() {
  return (
    <>
      <section className="sec1 mw">
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
          <div className="slide_title">
            <h1>
              <span>Gold big hoops</span>
              <span>$68.00</span>
            </h1>
            <Link to="/" className="btn_more">
              View Product
            </Link>
          </div>
          <SwiperSlide>
            {" "}
            <img src="/img/img_bg1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="/img/img_bg2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src="/img/img_bg3.jpg" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default MainEvent;
