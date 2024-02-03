import React from "react";
import img1 from "../../assets/image/slide1.jpg";
import img2 from "../../assets/image/slide2.jpg";
import img3 from "../../assets/image/slide3.jpg";
import img8 from "../../assets/image/serious-teacher-checking-assignment-two-students.jpg";
import img9 from "../../assets/image/man-having-coffee-while-using-his-laptop.jpg";

const Gallerytutoring = () => {
  return (
    <div className="mb-20">
      <div className="md:flex px-5 gap-3 py-2">
        <img src={img1} alt="" className="md:w-1/3 xs:w-full mb-2" />
        <img src={img2} alt="" className="md:w-1/3 xs:w-full mb-2" />
        <img src={img3} alt="" className="md:w-1/3 xs:w-full mb-2" />
      </div>
      <div className="md:flex px-5 gap-3 py-2">
        <img src={img8} alt="" className="md:w-1/3 xs:w-full mb-2" />
        <img src={img9} alt="" className="md:w-1/3 xs:w-full mb-2" />
      </div>
    </div>
  );
};

export default Gallerytutoring;
