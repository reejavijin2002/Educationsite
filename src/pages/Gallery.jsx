import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Headersection from "../components/header/Headersection";
import Footer from "../components/footer/Footer";
import Galleryall from "../components/gallerycomponent/Galleryall";

const Gallery = () => {
  return (
    <div>
      <Headersection />
      <h2 className="mt-20 text-center font-bold text-4xl font-sans">Gallery</h2>
      <p className="text-center mb-0  text-xs text-gray-400">Home / Gallery</p>

      <div className="px-40 flex justify-center ">
        <NavLink
          to="/gallery/"
          activeClassName="text-orange-500"
          className="md:px-10 xs:p-2 text-center text-xs text-gray-500 active:text-orange-500 font-semibold cursor-pointer no-underline hover:text-orange-500"
        >
          ALL
        </NavLink>
        <NavLink
          to="/gallery/gallerynews"
          activeClassName="text-orange-500"
          className="md:px-10 xs:p-2 text-center text-xs text-gray-500 active:text-orange-500 font-semibold cursor-pointer no-underline hover:text-orange-500"
        >
          NEWS
        </NavLink>
        <NavLink
          to="/gallery/galleryshedule"
          activeClassName="text-orange-500"
          className="md:px-10 xs:p-2 text-center text-xs text-gray-500 active:text-orange-500 font-semibold cursor-pointer no-underline hover:text-orange-500"
        >
          SCHEDULE
        </NavLink>
        <NavLink
          to="/gallery/gallerytutoring"
          activeClassName="text-orange-500"
          className="md:px-10 xs:p-2 text-center text-xs text-gray-500 active:text-orange-500 font-semibold cursor-pointer no-underline hover:text-orange-500"
        >
          TUTORING
        </NavLink>
      </div>

      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Gallery;
