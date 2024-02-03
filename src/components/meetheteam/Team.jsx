import React from "react";
import img1 from '../../assets/image/man1.jpg'
import img2 from '../../assets/image/man2.jpg'
import img3 from '../../assets/image/man3.jpg'

const Team = () => {
  return (
    <div>
      <div>
        <h5 className="text-gray-400 text-center font-serif mt-20">
          Specialization
        </h5>
        <h2 className="text-center text-black font-bold text-4xl font-sans">
          Meet the Team
        </h2>
        <div className="align-top justify-center flex-wrap mr-auto ml-auto w-14 h-0.5 bg-green-500 mt-6 mb-5"></div>
        <div className="md:flex justify-center p-10 gap-4">
            <div className="md:w-1/3 xs:w-full bg-stone-100 justify-center">
                <img src={img1} alt=""/>
                <h6 className="text-center mt-6 text-base" >James Rodrigus</h6>
                <p className="text-center text-gray-400 text-sm pb-4 mb-5 font-serif">Human Resourse</p>
            </div>
            <div className="md:w-1/3 xs:w-full bg-stone-100 justify-center">
                <img src={img2} alt=""/>
                <h6 className="text-center mt-6 text-base">Edwaid Livingston</h6>
                <p className="text-center text-gray-400 text-sm pb-4  mb-5 font-serif">Manager</p>
            </div>
            <div className="md:w-1/3 xs:w-full bg-stone-100 justify-center">
                <img src={img3} alt=""/>
                <h6 className="text-center mt-6 text-base">Jospeh Great</h6>
                <p className="text-center text-gray-400 text-sm pb-4  mb-5 font-serif">Senior Manager</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
