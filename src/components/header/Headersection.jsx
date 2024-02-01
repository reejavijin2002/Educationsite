import React from 'react'
import { Link } from "react-router-dom";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { MdViewHeadline } from "react-icons/md";

const Headersection = () => {
  return (
    <div>
    <header className="bg-black-opacity sticky w-full  top-0 h-16  shadow border-slate-200z-30  ">
      <div className="px-4 ">
        <div className="flex items-center justify-between h-16 ">
    
            <div className="flex caret-transparent no-underline ">
              <div>
              </div>{" "}
              <div className="font-bold  text-xl lg:text-2xl  mt-2  text-white no-underline" >
                <h3 className='text-decoration font-extrabold  no-underline'>Mellon</h3>
              </div>
            </div>
    

          <div className="xs:hidden text-sm cursor-pointer text-end  sm:hidden md:flex text-md">
            <Link
              to="/"
              className="lg:px-6  text-sm  text-decoration text-white font-[inherit]  md:px-1 font-normal  hover:text-orange-600"
            
            >
              HOME
            </Link>

            <Link
              to="/"
              className="lg:px-6 text-sm text-decoration  md:px-1 text-white font-[inherit] font-normal  hover:text-orange-600"
           
            >
              ABOUT
            </Link>
            <Link
              to="/"
              className="lg:px-6 text-sm text-decoration  md:px-1 text-white font-[inherit] font-normal hover:text-orange-600"
           
            >
              FEATURES
            </Link>
            <Link
              to="/"
              className="lg:px-6 text-sm text-decoration md:px-1 text-white font-[inherit] font-normal hover:text-orange-600"
           
            >
              BLOG
            </Link>
            <Link
              to="/"
              className="lg:px-6 text-sm text-decoration  md:px-1 text-white font-[inherit] font-normal hover:text-orange-600"
           
            >
              CONTACT
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
            <Link to="/Landingicon">
              <div className="xs:visible md:hidden">
                <MdViewHeadline className="w-[25px] h-[25px] xs:visible md:invisible" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  </div>
  )
}

export default Headersection