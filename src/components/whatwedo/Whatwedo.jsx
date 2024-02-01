import React from "react";
import icon1 from "../../assets/image/online-learning (1).png"
import icon2 from '../../assets/image/mission (1).png'
import icon3 from '../../assets/image/certificate.png'

const Whatwedo = () => {
  return (
    <div className="mt-40 mb-40">
      <h3 className="text-center text-gray-400 font-serif">What We Do</h3>
      <h1 className="text-center font-bold">Unlimitted Possibilities</h1>
      <div className="flex justify-center mt-20 ">
        <div className="justify-center">
            <img src={icon1} alt="" className="ml-auto mr-auto mb-5"/>
          <h5 className="text-center mb-3">Online Courses</h5>
          <p className="text-center px-10 font-light">Choose from hundreds of free training courses, or pay to get certified to complete a course or specialization.</p>
        </div>
        <div>
        <img src={icon2} alt="" className="ml-auto mr-auto mb-5"/>

          <h5 className="text-center mb-3">Our Mission</h5>
          <p className="text-center px-10 font-light">Developing strong vision and mission statements can help stakeholders in your school reach such a common understanding.</p>
        </div>
        <div>
        <img src={icon3} alt="" className="ml-auto mr-auto mb-5"/>

          <h5 className="text-center mb-3">Proffesional Certificate</h5>
          <p className="text-center px-10 font-light">Join the millions of students around the world who are already learning! Find an experienced and suitable instructor only for you.</p>
        </div>
      </div>
    </div>
  );
};

export default Whatwedo;
