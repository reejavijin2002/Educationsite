import React from "react";
import img1 from "../../assets/image/mystery-businessman-eyeglasses-sitting-by-table-cafe-with-laptop-computer-looking-away.jpg";
import img2 from "../../assets/image/man-having-coffee-while-using-his-laptop.jpg";
import img3 from "../../assets/image/lightbulb (1).png";
import img4 from "../../assets/image/bachelor (1).png";

const Future = () => {
  return (
    <div>
      <div className="bg-stone-100 w-full flex">
        <div className="w-1/2">
          <img src={img1} alt="" className="w-full h-[500px]" />
        </div>
        <div className="p-5 w-1/2 mt-16">
          <h5 className="text-sm text-gray-400 font-serif">The Best Choice</h5>
          <h4 className="font-bold ">We Build Future with Education</h4>
          <div className="align-top justify-left mr-auto  w-10 mt-2 mb-2 h-0.5 bg-green-500 "></div>

          <p className="text-sm  font-light mt-0 mb-5">
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explore.
          </p>
          <div className="flex mt-10">
            <div className="flex">
              <div className="w-[10%]">
                <img src={img4} alt="" className="mr-2" />
              </div>

              <div className="w-[90%]">
                {" "}
                <h6 className="text-sm text-black font-sans">
                  Professional Degree
                </h6>
                <p className="text-xs  font-light">
                  Professional degrees are degrees recognized by the US
                  Department of Education as necessary for subsequent licensing.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-[10%]">
                <img src={img3} alt="" className="mr-2" />
              </div>
              <div className="w-[90%]">
                <h6 className="text-sm text-black font-sans">
                  The Best Online Courses
                </h6>
                <p className="text-xs  font-light">
                  Find Courses and Specializations from top universities like
                  Yale, Michigan, Stanford, and leading companies like Google
                  and IBM.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-stone-100 w-full flex">
        <div className="w-1/2 mt-16 p-5">
          <h5 className="text-sm text-gray-400 font-serif">The Best Choice</h5>
          <h4 className="font-bold ">Get Free Consultation</h4>
          <div className="align-top justify-left mr-auto  w-10 mt-3 mb-2 h-0.5 bg-green-500  "></div>
          <div className="mt-10 w-full flex">
            <div className="w-1/2">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-stone-100 w-full"
              ></input>
              <div className="bg-gray-300 h-0.5 w-[90%] mt-2"></div>
            </div>
            <div className="w-1/2">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-stone-100 w-full"
              ></input>
              <div className="bg-gray-300 h-0.5 w-[90%] mt-2"></div>
            </div>
           

          </div>
          <input
                type="text"
                placeholder="Your Message"
                className="bg-stone-100 w-full mt-10"
              ></input>
              <div className="bg-gray-300 h-0.5 w-[95%] mt-2"></div>
              <button className="mt-14 bg-green-500 h-12 text-white font-semibold px-4 rounded">SEND MESSAGE</button>
        </div>
        <div className=" w-1/2 ">
          <img src={img2} alt="" className="w-full h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Future;
