import React from "react";
import Headersection from "../components/header/Headersection";
import Footer from "../components/footer/Footer";
import Galleryall from "../components/gallerycomponent/Galleryall";
import { Link, Outlet } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <Headersection />
      <h2 className="mt-20 text-center font-extrabold ">Gallery</h2>
      <p className="text-center mb-0  text-xs text-gray-400">Home / Gallery</p>

      <div className="px-40 flex justify-center ">
        <Link
          to="/gallery/"
          className="md:px-10 xs:p-2 text-center text-xs text-gray-500 font-semibold cursor-pointer no-underline hover:text-orange-500"
        >
          ALL
        </Link>
        <Link
          to="/gallery/gallerynews"
          className="md:px-10 xs:p-2 text-center text-xs text-gray-500 font-semibold cursor-pointer no-underline hover:text-orange-500"
        >
          NEWS
        </Link>
        <Link
          to="/gallery/galleryshedule"
          className="md:px-10 xs:p-2 text-center text-xs text-gray-500 font-semibold cursor-pointer no-underline hover:text-orange-500"
        >
          SHEDULE
        </Link>
        <Link
          to="/gallery/gallerytutoring"
          className="md:px-10 xs:p-2 text-center text-xs text-gray-500 font-semibold cursor-pointer no-underline hover:text-orange-500"
        >
          TUTORING
        </Link>
      </div>

      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Gallery;
