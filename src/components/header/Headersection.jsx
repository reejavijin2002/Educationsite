import React,{useState} from "react";
import { Link } from "react-router-dom";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { MdViewHeadline } from "react-icons/md";
import logo from "../../assets/image/mellon_brand._logo_FIN__2__page-0001-removebg-preview.png"
import Sidebar from "../sidebar/Sidebar";
import img1 from '../../assets/image/user (1).png'

const Headersection = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isZoomed, setZoomed] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleSidebar1 = () => {
    setSidebarOpen(isSidebarOpen);
  };

  const handleZoom = () => {
    setZoomed(true);
    setTimeout(() => {
      setZoomed(false);
    }, 300); 
  };
  return (
    <div className="">
      <header className="bg-black-opacity fixed w-full custom-z-index1  top-0 h-16  shadow border-slate-200z-30  ">
        <div className="px-4 ">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex caret-transparent no-underline ">
              <div></div>{" "}
              <div className="font-bold  text-xl lg:text-2xl  mt-2  text-white no-underline">
                <Link to="/" className="no-underline text-white">
                  <img src={logo} width='100px' className="text-decoration font-extrabold  no-underline">
                    
                  </img>
                </Link>
              </div>
            </div>

            <div className="xs:hidden text-sm cursor-pointer text-end  sm:hidden md:flex text-md">
              <Link
                to="/"
                className="lg:px-6  text-sm  text-decoration text-white font-[inherit]   md:px-1 font-medium  "
              >
                <p className="hover:text-orange-600 font-body ">HOME</p>
              </Link>

              <Link
                to="/aboutus"
                className="lg:px-6 text-sm text-decoration  md:px-1 text-white font-[inherit] font-medium  hover:text-orange-600"
              >
                <p className="hover:text-orange-600 font-body">ABOUT</p>
              </Link>

              <Link
                to="/gallery"
                className="lg:px-6 text-sm text-decoration  md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
              >
                <p className="hover:text-orange-600 font-body">GALLERY</p>
              </Link>
              <Link
                to="/blog"
                className="lg:px-6 text-sm text-decoration md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
              >
                <p className="hover:text-orange-600 font-body">BLOG</p>
              </Link>
              <Link
                to="/contact"
                className="lg:px-6 text-sm text-decoration  md:px-1 text-white font-[inherit] font-medium hover:text-orange-600"
              >
                <p className="hover:text-orange-600 font-body">CONTACT</p>
              </Link>
              <Link
                to="/events"
                className="lg:px-6 text-sm text-decoration  md:px-1 text-white font-[inherit] font-medium  hover:text-orange-600"
              >
                <p className="hover:text-orange-600 font-body">EVENTS</p>
              </Link>
              <Link
                to="/login"
                className="lg:px-6 text-sm text-decoration  md:px-1 text-white font-[inherit] font-medium  hover:text-orange-600"
              >
                <p className="hover:text-orange-600 font-body">LOGIN</p>
              </Link>
            </div>

            {/* <div className="flex items-center space-x-3">
            <div></div>
            <div className=" xs:hidden sm:hidden md:flex text-sm">
              <div className="ml-4">
                <div className="flex cursor-pointer  "></div>
              </div>
             
            </div>
          </div> */}
            <div className="xs:visible md:hidden">
              <Link to="" onClick={() => { toggleSidebar(); handleZoom(); }}>
                <div className={`xs:visible md:hidden ${isZoomed ? 'zoom-effect' : ''}`}>
                  <MdViewHeadline className="w-[25px] h-[25px] xs:visible md:invisible" />
                </div>
              </Link>
            </div>
         
          </div>
          {isSidebarOpen && <Sidebar className="xs:invisible md:visible" toggleSidebar1={toggleSidebar} /> }
        </div>
      </header>
    </div>
  );
};

export default Headersection;
