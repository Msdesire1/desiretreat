// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Page = () => {
//   const [isDropdownOpen1, setDropdownOpen1] = useState(false);
//   const [isDropdownOpen2, setDropdownOpen2] = useState(false);
//   const [isDropdownOpen3, setDropdownOpen3] = useState(false);
//   const [isDropdownOpen4, setDropdownOpen4] = useState(false);
//   const [isDropdownOpen5, setDropdownOpen5] = useState(false);
//   const [isDropdownOpen6, setDropdownOpen6] = useState(false);
//   const [isDropdownOpen7, setDropdownOpen7] = useState(false);

//   const handleMouseEnter1 = () => {
//     setDropdownOpen1(true);
//   };

//   const handleMouseLeave1 = () => {
//     setDropdownOpen1(false);
//   };

//   const handleMouseEnter2 = () => {
//     setDropdownOpen2(true);
//   };

//   const handleMouseLeave2 = () => {
//     setDropdownOpen2(false);
//   };

//   const handleMouseEnter3 = () => {
//     setDropdownOpen3(true);
//   };

//   const handleMouseLeave3 = () => {
//     setDropdownOpen3(false);
//   };

//   const handleMouseEnter4 = () => {
//     setDropdownOpen4(true);
//   };

//   const handleMouseLeave4 = () => {
//     setDropdownOpen4(false);
//   };
//   const handleMouseEnter5 = () => {
//     setDropdownOpen5(true);
//   };

//   const handleMouseLeave5 = () => {
//     setDropdownOpen5(false);
//   };
//   const handleMouseEnter6 = () => {
//     setDropdownOpen6(true);
//   };

//   const handleMouseLeave6 = () => {
//     setDropdownOpen6(false);
//   };

//   const handleMouseEnter7 = () => {
//     setDropdownOpen7(true);
//   };

//   const handleMouseLeave7 = () => {
//     setDropdownOpen7(false);
//   };

//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     <header className="container-fluid sticky top-0 bg-[#111] nav-wrapper z-[500] ">
//       <nav className="w-full py-3 px-10 xl:px-[5%]">
//         <div className="flex items-center justify-between">
//           <div className="flex justify-between items-center py-4">
//             {/* Logo */}
//             <Link href="/" className="flex items-center">
//               <img src="/image/logo (1).png" alt="Logo" className="" />
//             </Link>
//             <div className=" block md:hidden bg-white justify-between items-end">
//               {/* <div className=""> */}
//                 <GiHamburgerMenu
//                   className="cursor-pointer text-4xl"
//                   onClick={toggleMenu}
//                 />
//               {/* </div> */}
//             </div>

//             <div className=" md:flex flex-row space-x-4 items-center text-black">
//               <div className="">
//                 <ul className="space-x-4 text-2xl gap-8 flex ">
//                   <li
//                     className="relative"
//                     onMouseEnter={handleMouseEnter1}
//                     onMouseLeave={handleMouseLeave1}
//                   >
//                     <a
//                       href=""
//                       className="py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
//                     >
//                       HOME
//                     </a>
//                     {/* Dropdown Menu */}
//                     {isDropdownOpen1 && (
//                       <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 ">
//                         <a
//                           href="#"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           HOME V1
//                         </a>
//                         <a
//                           href="landing"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           HOME V2
//                         </a>
//                       </div>
//                     )}
//                   </li>
//                   <li
//                     className="relative"
//                     onMouseEnter={handleMouseEnter2}
//                     onMouseLeave={handleMouseLeave2}
//                   >
//                     <a
//                       href="ourfood"
//                       className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
//                     >
//                       OUR FOOD
//                     </a>
//                     {/* Dropdown Menu */}
//                   </li>
//                   <li
//                     className="relative"
//                     onMouseEnter={handleMouseEnter3}
//                     onMouseLeave={handleMouseLeave3}
//                   >
//                     <a
//                       href="#"
//                       className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
//                     >
//                       PAGE
//                     </a>
//                     {/* Dropdown Menu */}
//                     {isDropdownOpen3 && (
//                       <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 ">
//                         <a
//                           href="aboutus"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           About us
//                         </a>
//                         <a
//                           href="menu"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           Menu
//                         </a>
//                         <a
//                           href="blogdetail"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           Blog Detail
//                         </a>

//                         <a
//                           href="faq"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           Faq
//                         </a>
//                       </div>
//                     )}
//                   </li>

//                   <li
//                     className="relative"
//                     onMouseEnter={handleMouseEnter4}
//                     onMouseLeave={handleMouseLeave4}
//                   >
//                     <a
//                       href="galllery1"
//                       className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
//                     >
//                       GALLERY
//                     </a>
//                     {/* Dropdown Menu */}
//                     {isDropdownOpen4 && (
//                       <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 ">
//                         <a
//                           href="gallery1"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           Gallery 1
//                         </a>
//                         <a
//                           href="gallery2"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           Gallery 2
//                         </a>
//                         <a
//                           href="gallery3"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           Gallery3
//                         </a>
//                       </div>
//                     )}
//                   </li>
//                   <li
//                     className="relative"
//                     onMouseEnter={handleMouseEnter5}
//                     onMouseLeave={handleMouseLeave5}
//                   >
//                     <a
//                       href="blog"
//                       className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
//                     >
//                       BLOG
//                     </a>
//                     {/* Dropdown Menu */}
//                     {isDropdownOpen5 && (
//                       <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 "></div>
//                     )}
//                   </li>

//                   <li
//                     className="relative"
//                     onMouseEnter={handleMouseEnter6}
//                     onMouseLeave={handleMouseLeave6}
//                   >
//                     <a
//                       href="ordernow"
//                       className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
//                     >
//                       ORDER NOW
//                     </a>
//                     {/* Dropdown Menu */}
//                     {isDropdownOpen6 && (
//                       <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 "></div>
//                     )}
//                   </li>
//                   <li
//                     className="relative"
//                     onMouseEnter={handleMouseEnter7}
//                     onMouseLeave={handleMouseLeave7}
//                   >
//                     <a
//                       href="location1"
//                       className="block py-2 px-7 text-white hover:text-[#e25111] hover:bg-gray-100 md:hover:bg-transparent border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 rounded-lg text-2xl"
//                     >
//                       LOCATION
//                     </a>
//                     {/* Dropdown Menu */}
//                     {isDropdownOpen7 && (
//                       <div className="absolute z-10 bg-white  dark:bg-[#e25111] dark:text-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3 ">
//                         <a
//                           href="location1"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           Location 1
//                         </a>
//                         <a
//                           href="location2"
//                           className="block px-4 py-2 hover:bg-[#e25111] dark:hover:bg-[#e25111] rounded-lg"
//                         >
//                           Location 2
//                         </a>
//                       </div>
//                     )}
//                   </li>
//                 </ul>
//               </div>

//               {menuOpen && (
//                 <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20">
//                   <ul className="flex flex-col space-y-4 p-4">
//                     <li>
//                       <a href="#" className="text-gray-700 ">
//                         Home
//                       </a>
//                     </li>
//                     <li>
//                       <a href="food.html" className="text-gray-700 ">
//                         Our Food
//                       </a>
//                     </li>
//                     <li>
//                       <a href="about.html" className="text-gray-700 ">
//                         About Us
//                       </a>
//                     </li>
//                     <li>
//                       <a href="menu.html" className="text-gray-700">
//                         Menu
//                       </a>
//                     </li>
//                     <li>
//                       <a href="gallery.html" className="text-gray-700 ">
//                         Gallery
//                       </a>
//                     </li>
//                     <li>
//                       <a href="blog.html" className="text-gray-700 ">
//                         Blog
//                       </a>
//                     </li>
//                     <li>
//                       <a href="order.html" className="text-gray-700 ">
//                         Order Now
//                       </a>
//                     </li>
//                     <li>
//                       <a href="location.html" className="text-gray-700 ">
//                         Location
//                       </a>
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Page;









// "use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { GiHamburgerMenu } from "react-icons/gi";

// const Page = () => {
//   const [isDropdownOpen1, setDropdownOpen1] = useState(false);
//   const [isDropdownOpen3, setDropdownOpen3] = useState(false);
//   const [isDropdownOpen4, setDropdownOpen4] = useState(false);
//   const [isDropdownOpen5, setDropdownOpen5] = useState(false);
//   const [isDropdownOpen6, setDropdownOpen6] = useState(false);
//   const [isDropdownOpen7, setDropdownOpen7] = useState(false);

//   const toggleDropdown = (setDropdown) => {
//     return {
//       onMouseEnter: () => setDropdown(true),
//       onMouseLeave: () => setDropdown(false),
//     };
//   };

//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <header className="sticky top-0 bg-[#111] z-[500]">
//       <nav className="w-full py-3 px-10 xl:px-[5%]">
//         <div className="flex items-center justify-between">
//           <div className="flex justify-between items-center py-4">
//             {/* Logo */}
//             <Link href="/" className="flex items-center">
//               <img src="/image/logo (1).png" alt="Logo" />
//             </Link>
//             {/* Hamburger Menu */}
//             <div className="block md:hidden">
//               <GiHamburgerMenu
//                 className="cursor-pointer text-4xl text-white"
//                 onClick={toggleMenu}
//               />
//             </div>
//           </div>

//           {/* Main Navigation for large screens */}
//           <div className="hidden md:flex flex-row space-x-4 items-center">
//             <ul className="space-x-4 text-2xl gap-8 flex">
//               <li className="relative" {...toggleDropdown(setDropdownOpen1)}>
//                 <Link
//                   href="/"
//                   className="text-white hover:text-[#e25111] py-2 px-7"
//                 >
//                   HOME
//                 </Link>
//                 {isDropdownOpen1 && (
//                   <div className="absolute z-10 bg-white py-2 rounded-lg shadow-lg w-44">
//                     <Link href="#" className="block px-4 py-2 hover:bg-[#e25111]">
//                       HOME V1
//                     </Link>
//                     <Link href="/landing" className="block px-4 py-2 hover:bg-[#e25111]">
//                       HOME V2
//                     </Link>
//                   </div>
//                 )}
//               </li>
//               <li>
//                 <Link href="/ourfood" className="text-white hover:text-[#e25111] py-2 px-7">
//                   OUR FOOD
//                 </Link>
//               </li>
//               <li className="relative" {...toggleDropdown(setDropdownOpen3)}>
//                 <Link href="#" className="text-white hover:text-[#e25111] py-2 px-7">
//                   PAGE
//                 </Link>
//                 {isDropdownOpen3 && (
//                   <div className="absolute z-10 bg-white py-2 rounded-lg shadow-lg w-44">
//                     <Link href="/aboutus" className="block px-4 py-2 hover:bg-[#e25111]">
//                       About Us
//                     </Link>
//                     <Link href="/menu" className="block px-4 py-2 hover:bg-[#e25111]">
//                       Menu
//                     </Link>
//                     <Link href="/blogdetail" className="block px-4 py-2 hover:bg-[#e25111]">
//                       Blog Detail
//                     </Link>
//                     <Link href="/faq" className="block px-4 py-2 hover:bg-[#e25111]">
//                       FAQ
//                     </Link>
//                   </div>
//                 )}
//               </li>
//               <li className="relative" {...toggleDropdown(setDropdownOpen4)}>
//                 <Link href="/gallery1" className="text-white hover:text-[#e25111] py-2 px-7">
//                   GALLERY
//                 </Link>
//                 {isDropdownOpen4 && (
//                   <div className="absolute z-10 bg-white py-2 rounded-lg shadow-lg w-44">
//                     <Link href="/gallery1" className="block px-4 py-2 hover:bg-[#e25111]">
//                       Gallery 1
//                     </Link>
//                     <Link href="/gallery2" className="block px-4 py-2 hover:bg-[#e25111]">
//                       Gallery 2
//                     </Link>
//                     <Link href="/gallery3" className="block px-4 py-2 hover:bg-[#e25111]">
//                       Gallery 3
//                     </Link>
//                   </div>
//                 )}
//               </li>
//               <li>
//                 <Link href="/blog" className="text-white hover:text-[#e25111] py-2 px-7">
//                   BLOG
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/ordernow" className="text-white hover:text-[#e25111] py-2 px-7">
//                   ORDER NOW
//                 </Link>
//               </li>
//               <li className="relative" {...toggleDropdown(setDropdownOpen7)}>
//                 <Link href="/location1" className="text-white hover:text-[#e25111] py-2 px-7">
//                   LOCATION
//                 </Link>
//                 {isDropdownOpen7 && (
//                   <div className="absolute z-10 bg-white py-2 rounded-lg shadow-lg w-44">
//                     <Link href="/location1" className="block px-4 py-2 hover:bg-[#e25111]">
//                       Location 1
//                     </Link>
//                     <Link href="/location2" className="block px-4 py-2 hover:bg-[#e25111]">
//                       Location 2
//                     </Link>
//                   </div>
//                 )}
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {menuOpen && (
//           <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg z-20">
//             <ul className="flex flex-col space-y-4 p-4">
//               <li>
//                 <Link href="/" className="text-gray-700">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/ourfood" className="text-gray-700">
//                   Our Food
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/aboutus" className="text-gray-700">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/menu" className="text-gray-700">
//                   Menu
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/gallery1" className="text-gray-700">
//                   Gallery
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/blog" className="text-gray-700">
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/ordernow" className="text-gray-700">
//                   Order Now
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/location1" className="text-gray-700">
//                   Location
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default Page;





"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Page = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Mobile menu state
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state for large screens

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 bg-[#111] z-[500]">
      <nav className="w-full py-3 px-10 xl:px-[5%] flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/image/logo (1).png" alt="Logo" />
        </Link>

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden">
          <GiHamburgerMenu
            className="cursor-pointer text-4xl text-white"
            onClick={toggleMenu}
          />
        </div>

        {/* Large Screen Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <ul className="flex space-x-8">
            <li
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <a href="#" className="text-white hover:text-[#e25111]">
                HOME
              </a>
              {dropdownOpen && (
                <div className="absolute z-10 bg-white dark:bg-[#e25111] py-2 rounded-lg shadow-lg w-44 px-3">
                  <a href="#" className="block px-4 py-2 hover:bg-[#e25111] rounded-lg">
                    HOME V1
                  </a>
                  <a href="landing" className="block px-4 py-2 hover:bg-[#e25111] rounded-lg">
                    HOME V2
                  </a>
                </div>
              )}
            </li>
            <li>
              <a href="ourfood" className="text-white hover:text-[#e25111]">
                OUR FOOD
              </a>
            </li>
            {/* Add more menu items as needed */}
          </ul>
        </div>

        {/* Mobile Navigation for Small Screens */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#111] shadow-lg z-20">
            <ul className="flex flex-col space-y-4 p-4 text-white">
              <li>
                <a href="#" className="hover:text-[#e25111]">Home</a>
              </li>
              <li>
                <a href="ourfood" className="hover:text-[#e25111]">Our Food</a>
              </li>
              {/* Add more mobile items as needed */}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Page;

