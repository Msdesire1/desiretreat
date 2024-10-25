
"use client";
import React, { useState } from "react";
import Link from "next/link";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);
  const [isDropdownOpen2, setDropdownOpen2] = useState(false);
  const [isDropdownOpen3, setDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setDropdownOpen7] = useState(false);

  const handleMouseEnter1 = () => {
    setDropdownOpen1(true);
  };

  const handleMouseLeave1 = () => {
    setDropdownOpen1(false);
  };

  const handleMouseEnter2 = () => {
    setDropdownOpen2(true);
  };

  const handleMouseLeave2 = () => {
    setDropdownOpen2(false);
  };

  const handleMouseEnter3 = () => {
    setDropdownOpen3(true);
  };

  const handleMouseLeave3 = () => {
    setDropdownOpen3(false);
  };

  const handleMouseEnter4 = () => {
    setDropdownOpen4(true);
  };

  const handleMouseLeave4 = () => {
    setDropdownOpen4(false);
  };
  const handleMouseEnter5 = () => {
    setDropdownOpen5(true);
  };

  const handleMouseLeave5 = () => {
    setDropdownOpen5(false);
  };
  const handleMouseEnter6 = () => {
    setDropdownOpen6(true);
  };

  const handleMouseLeave6 = () => {
    setDropdownOpen6(false);
  };

  const handleMouseEnter7 = () => {
    setDropdownOpen7(true);
  };

  const handleMouseLeave7 = () => {
    setDropdownOpen7(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container-fluid sticky top-0 bg-[#111] nav-wrapper z-[500] ">
      <nav className="w-full py-3 px-10 xl:px-[5%]">
        <div className="flex items-center justify-between">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img src="/image/logo (1).png" alt="Logo" className="" />
            </Link>
            {/* Navbar menu for large screens */}
            <div
              className="md:flex sm:hidden space-x-4 items-center "
            >
              <ul className="md:flex md:flex-row sm:hidden space-x-4 ps-40 gap-20 text-2xl">
                <li
                  className="relative"
                  onMouseEnter={handleMouseEnter1}
                  onMouseLeave={handleMouseLeave1}
                >
                  <a
                    href="#"
                    className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
                  >
                    HOME
                  </a>
                  {/* Dropdown Menu */}
                  {isDropdownOpen1 && (
                    <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 ">
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        HOME V1
                      </a>
                      <a
                        href="landing"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        HOME V2
                      </a>
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={handleMouseEnter2}
                  onMouseLeave={handleMouseLeave2}
                >
                  <a
                    href="ourfood"
                    className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
                  >
                    OUR FOOD
                  </a>
                  {/* Dropdown Menu */}
                </li>
                <li
                  className="relative"
                  onMouseEnter={handleMouseEnter3}
                  onMouseLeave={handleMouseLeave3}
                >
                  <a
                    href="#"
                    className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
                  >
                    PAGE
                  </a>
                  {/* Dropdown Menu */}
                  {isDropdownOpen3 && (
                    <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 ">
                      <a
                        href="aboutus"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        About us
                      </a>
                      <a
                        href="menu"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        Menu
                      </a>
                      <a
                        href="blogdetail"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        Blog Detail
                      </a>

                      <a
                        href="faq"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        Faq
                      </a>
                    </div>
                  )}
                </li>

                <li
                  className="relative"
                  onMouseEnter={handleMouseEnter4}
                  onMouseLeave={handleMouseLeave4}
                >
                  <a
                    href="galllery1"
                    className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
                  >
                    GALLERY
                  </a>
                  {/* Dropdown Menu */}
                  {isDropdownOpen4 && (
                    <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 ">
                      <a
                        href="gallery1"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        Gallery 1
                      </a>
                      <a
                        href="gallery2"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        Gallery 2
                      </a>
                      <a
                        href="gallery3"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        Gallery3
                      </a>
                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={handleMouseEnter5}
                  onMouseLeave={handleMouseLeave5}
                >
                  <a
                    href="blog"
                    className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
                  >
                    BLOG
                  </a>
                  {/* Dropdown Menu */}
                  {isDropdownOpen5 && (
                    <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 ">

                    </div>
                  )}
                </li>

                <li
                  className="relative"
                  onMouseEnter={handleMouseEnter6}
                  onMouseLeave={handleMouseLeave6}
                >
                  <a
                    href="ordernow"
                    className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
                  >
                    ORDER NOW
                  </a>
                  {/* Dropdown Menu */}
                  {isDropdownOpen6 && (
                    <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 ">

                    </div>
                  )}
                </li>
                <li
                  className="relative"
                  onMouseEnter={handleMouseEnter7}
                  onMouseLeave={handleMouseLeave7}
                >
                  <a
                    href="location1"
                    className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
                  >
                    LOCATION
                  </a>
                  {/* Dropdown Menu */}
                  {isDropdownOpen7 && (
                    <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 ">
                      <a
                        href="location1"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        Location 1
                      </a>
                      <a
                        href="location2"
                        className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
                      >
                        Location 2
                      </a>
                    </div>
                  )}
                </li>
              </ul>
            </div>


          </div>
            {/* Toggle button, only visible on small screens */}
          <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white w-10 h-10"
              >
                <svg
                  className="h-4 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

          {/* Mobile menu, visible only on small screens */}
            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg`}
              id="mobile-menu"
            >
              <ul className="flex flex-col space-y-4 p-4">
                <li>
                  <a href="#" className="text-gray-700 ">
                    Home
                  </a>
                </li>
                <li>
                  <a href="food.html" className="text-gray-700 ">
                    Our Food
                  </a>
                </li>
                <li>
                  <a href="about.html" className="text-gray-700 ">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="menu.html" className="text-gray-700">
                    Menu
                  </a>
                </li>
                <li>
                  <a href="gallery.html" className="text-gray-700 ">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="blog.html" className="text-gray-700 ">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="order.html" className="text-gray-700 ">
                    Order Now
                  </a>
                </li>
                <li>
                  <a href="location.html" className="text-gray-700 ">
                    Location
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar