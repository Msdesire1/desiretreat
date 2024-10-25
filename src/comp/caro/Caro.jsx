"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Caro() {
  const [carouselData] = useState([
    {
      Image: "/image/hom2-banner1.jpg",
      title: (
        <h1 className="text-[47px] font-bold text-white px-40 pt-[90px]">
          <span className="">Yes We Have</span>The Best Fish
          <span className="color">Steak</span>
        </h1>
      ),
      description:
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod",
    },
    {
      Image: "/image/hom2-banner2.jpg",
      title: (
        <h1 className="text-[47px] font-bold text-white px-40 pt-[90px]">
          <span className="">Yes We Have</span>The Best Fish
          <span className="color">Steak</span>
        </h1>
      ),
      description:
        " Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod.",
    },
    // {
    //   Image: "/image/banner4.jpg",
    //   title: "Trade and Invest with confidence",
    //   description:
    //     "Confidently trade and invest with the tools you need to make informed decisions. Manage your portfolio all in one place.",
    // },
  ]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slides every 5 seconds

    return () => clearInterval(interval);
  }, [carouselData]);

  return (
    <div className="relative w-full h-[100vh]">
      {/* Carousel Content */}
      <div className="relative  w-full h-full">
        {/* Slide Background Image with Text on Top */}
        <div
          className="h-full w-full flex items-center justify-center text-center bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${carouselData[activeIndex].Image})`,
          }}
        >
          {/* Text Overlay */}
          <div className="p-10 rounded-lg w-1/2">
            <h1 className="text-3xl font-bold text-white">
              {carouselData[activeIndex].title}
            </h1>
            <p className="text-1xl text-white opacity-90 mt-4">
              {carouselData[activeIndex].description}
            </p>

            <div className="mt-6">
              <a href="#" className="btn-common btn-white page-scroll">
                Order Now
              </a>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {carouselData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full border-2 border-white focus:outline-none ${
                activeIndex === index ? "bg-yellow-400" : "bg-white"
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
