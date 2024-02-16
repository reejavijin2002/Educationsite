import React,{useState} from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/image/close.png"

const Sidebar = ({toggleSidebar1}) => {


  return (
    <div className="sidebar-container xs:visible sm:invisible">
    <div className="bg-black-opacity1 w-full h-full fixed top-0 left-0 z-50 overflow-auto">
      <div className="bg-black-opacity1 p-4">
    
      <img src={img1} className="ml-auto h-3 cursor-pointer" onClick={()=>toggleSidebar1()}/>
   

        <Link
          to="/"
          className="lg:px-6 text-sm mb-4 text-decoration text-white font-[inherit] md:px-1 font-medium"
        >
          <p className="hover:text-orange-600 text-left">HOME</p>
        </Link>


        <Link
          to="/aboutus"
          className="lg:px-6 text-sm text-decoration mb-4 md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
        >
          <p className="hover:text-orange-600 text-left">ABOUT</p>
        </Link>

        <Link
          to="/gallery"
          className="lg:px-6 text-sm text-decoration mb-4 md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
        >
          <p className="hover:text-orange-600 text-left">GALLERY</p>
        </Link>
        <Link
          to="/blog"
          className="lg:px-6 text-sm text-decoration mb-4 md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
        >
          <p className="hover:text-orange-600 text-left">BLOG</p>
        </Link>
        <Link
          to="/contact"
          className="lg:px-6 text-sm text-decoration mb-4 md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
        >
          <p className="hover:text-orange-600 text-left">CONTACT</p>
        </Link>
        <Link
          to="/events"
          className="lg:px-6 text-sm text-decoration mb-4 md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
        >
          <p className="hover:text-orange-600 text-left">EVENTS</p>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
