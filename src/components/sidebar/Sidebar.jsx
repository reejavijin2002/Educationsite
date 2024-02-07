import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-container xs:visible sm:invisible">
    <div className="bg-black-opacity1 w-full h-full fixed top-0 left-0 z-50 overflow-auto">
      <div className="bg-black-opacity1 p-4">
        <Link
          to="/"
          className="lg:px-6 text-sm mb-4 text-decoration text-white font-[inherit] md:px-1 font-medium"
        >
          <p className="hover:text-orange-600 text-center">HOME</p>
        </Link>

        <Link
          to="/aboutus"
          className="lg:px-6 text-sm text-decoration mb-4 md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
        >
          <p className="hover:text-orange-600 text-center">ABOUT</p>
        </Link>

        <Link
          to="/gallery"
          className="lg:px-6 text-sm text-decoration mb-4 md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
        >
          <p className="hover:text-orange-600 text-center">GALLERY</p>
        </Link>
        <Link
          to="/"
          className="lg:px-6 text-sm text-decoration mb-4 md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
        >
          <p className="hover:text-orange-600 text-center">BLOG</p>
        </Link>
        <Link
          to="/contact"
          className="lg:px-6 text-sm text-decoration mb-4 md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
        >
          <p className="hover:text-orange-600 text-center">CONTACT</p>
        </Link>
        <Link
          to="/events"
          className="lg:px-6 text-sm text-decoration mb-4 md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
        >
          <p className="hover:text-orange-600 text-center">EVENTS</p>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
