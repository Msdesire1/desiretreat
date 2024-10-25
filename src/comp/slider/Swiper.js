
"use client";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import Navbar from "../nav/Navbar";


const Slider =() => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.activeIndex);
  };

  return (
 <Swiper
     modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={handleSlideChange}
    >
      {/* First Slide */}
      <div
        className="tp-tabs  inner hesperiden nav-pos-hor-bottom nav-pos-ver-bottom nav-dir-horizontal"
        style={{
          maxWidth: 1169,
          maxHeight: 110,
          overflow: "visible",
          position: "absolute",
          padding: 0,
          top: "100%",
          transform: "matrix(1, 0, 0, 1, -1199, 0)",
          left: "100%",
          height: 110,
        }}
      >
        <div
          className="tp-tab-mask"
          style={{
            maxWidth: 1169,
            maxHeight: 110,
            overflow: "hidden",
            position: "relative",
            height: 110,
            width: 1169,
          }}
        >
          <div
            className="tp-tabs-inner-wrapper"
            style={{ position: "relative", width: 1169, height: 110, left: 0 }}
          >
            <div
              data-liindex={0}
              data-liref="rs-129"
              className="tp-tab selected"
              style={{ width: 383, height: 110, left: 0, top: 0 }}
            >
              <div className="tp-tab-title">Fish &nbsp; Steak</div>
              <div className="tp-tab-desc">
                Duis autem vel eum iriure dolor in hendrerit
              </div>
            </div>
            <div
              data-liindex={1}
              data-liref="rs-130"
              className="tp-tab"
              style={{ width: 383, height: 110, left: 393, top: 0 }}
            >
              <div className="tp-tab-title">Bakery &nbsp; Items</div>
              <div className="tp-tab-desc">
                Duis autem vel eum iriure dolor in hendrerit
              </div>
            </div>
            <div
              data-liindex={2}
              data-liref="rs-131"
              className="tp-tab"
              style={{ width: 383, height: 110, left: 786, top: 0 }}
            >
              <div className="tp-tab-title">Fresh &nbsp; Food</div>
              <div className="tp-tab-desc">
                Duis autem vel eum iriure dolor in hendrerit
              </div>
            </div>
          </div>
        </div>
      </div>
      <SwiperSlide>
        <div className="h-[100vh] w-full bg-cover bg-center bg-[url('/image/banner2.jpg')] relative">
          <div
            className={`slide-content transition-all duration-1000 ${
              activeSlide === 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-[47px] font-bold text-white px-40 pt-[90px]">
              <span>Yes We Have</span> <br /> The Best Fish
              <span className="color">Steak</span>
            </h1>
            <p className="mt-4 lg:text-3xl text-1xl text-white px-40">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br />
              sed diam nonummy nibh euismod.
            </p>
            <div className="mt-6 px-40">
              <a href="#" className="btn-common btn-white page-scroll">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Second Slide */}
      <SwiperSlide>
        <div className="h-[100vh] w-full bg-cover bg-center bg-[url('/image/banner1.jpg')] relative">
          <div
            className={`slide-content transition-all duration-1000 ${
              activeSlide === 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="lg:text-[40px] text-[10px] font-bold text-white pt-[90px] justify-center flex items-center">
              <div>
                <span className="text-center justify-center items-center flex mb-[-35px]">
                  DELICIOUS BAKERY ITEMS
                </span>
                <br />
                COCONUT WITH
                <span className="color">LEMON GRASS</span>
              </div>
            </h1>
            <p className="mt-1 lg:text-3xl text-1xl text-white justify-center flex items-center">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br />
              sed diam nonummy nibh euismod.
            </p>
            <div className="mt-6 flex-row gap-3 justify-center items-center flex">
              <div>
                <a href="#" className="btn-common btn-white page-scroll">
                  Learn More
                </a>
              </div>
              <div>
                <a href="#" className="btn-common btn-white page-scroll">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Third Slide */}
      <SwiperSlide>
        <div className="h-[100vh] w-full bg-cover bg-center bg-[url('/image/banner4.jpg')] relative">
          <div
            className={`slide-content transition-all duration-1000 ${
              activeSlide === 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-[40px] font-bold text-white pt-[90px] justify-end flex items-end pr-28">
              <div>
                <span className="text-end justify-end items-end flex mb-[-35px]">
                  We Prepare
                </span>{" "}
                <br />
                Fresh Food
                <span className="color">Vegies</span>
              </div>
            </h1>
            <p className="mt-1 lg:text-3xl text-1xl text-white justify-end flex items-end pr-28">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, <br />
              sed diam nonummy nibh euismod.
            </p>
            <div className="mt-6 flex-row gap-3 justify-end items-end flex pr-28">
              <div>
                <a href="#" className="btn-common btn-white page-scroll">
                  Order Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Slider
