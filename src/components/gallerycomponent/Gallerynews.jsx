import React from "react";
import img4 from "../../assets/image/slide4.jpg";
import img5 from "../../assets/image/mystery-businessman-eyeglasses-sitting-by-table-cafe-with-laptop-computer-looking-away.jpg";
import img6 from "../../assets/image/slide5.jpg";
import img1 from "../../assets/image/slide1.jpg";
import img2 from "../../assets/image/slide2.jpg";

const Gallerynews = () => {
  return (
    <div className="mb-20">
      <div className="md:flex px-5 gap-3 py-2">
        <img src={img4} alt="" className="md:w-1/3 xs:w-full mb-2 zoomable-image" />
        <img src={img5} alt="" className="md:w-1/3 xs:w-full mb-2 zoomable-image" />
        <img src={img6} alt="" className="md:w-1/3 xs:w-full mb-2 zoomable-image" />
      </div>
      <div className="md:flex px-5 gap-3 py-2">
        <img src={img1} alt="" className="md:w-1/3 xs:w-full mb-2 zoomable-image" />
        <img src={img2} alt="" className="md:w-1/3 xs:w-full mb-2 zoomable-image" />
      </div>
    </div>
  );
};

export default Gallerynews;
