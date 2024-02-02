import React from "react";
import img1 from "../../assets/image/email-correspondence-mail-message-concept.jpg";
import img2 from "../../assets/image/medium-shot-people-learning-job.jpg";
import img3 from "../../assets/image/serious-teacher-checking-assignment-two-students.jpg";

const Events = () => {
  return (
    <div className="mt-20 w-full">
      <h5 className="text-gray-400 text-center font-serif ">The Best Choice</h5>
      <h2 className="text-center text-black font-bold text-4xl font-sans">
        Our Events
      </h2>
      <div className="align-top justify-center flex-wrap mr-auto ml-auto w-14 h-0.5 bg-green-500 mt-6 mb-5"></div>
      <div className="md:flex justify-center flex-wrap  border border-1  m-10 p-2">
        <h1 className="md:w-1/5 sm:1/3 xs:full sm:mr-auto sm:ml-auto justify-center mr-auto ml-auto font-bold text-orange-600 text-center">
          18 <br></br>
          <p className="text-xs text-center text-gray-500"> MAY</p>
        </h1>

        <img
          src={img1}
          className="rounded-full justify-center mr-auto xs:mr-auto xs:ml-auto xs:mt-1 xs:mb-1 "
          style={{ object: "cover" }}
          height="250px"
          width="130px"
          alt=""
        ></img>
        <h5 className="md:w-1/5 sm:1/3 xs:full justify-center flex-wrap mr-auto ml-auto font-medium text-lg text-center xs:mt-1 xs:mb-1 ">
          101 Standard Workshop for All Levels
        </h5>
        <div className="md:h-16 md:w-0.5  bg-gray-400"></div>
        <h5 className="md:w-1/5 sm:1/3 xs:full justify-center mr-auto ml-auto text-gray-400 font-medium text-lg text-center xs:mt-1 xs:mb-1">
          Thursday @ 12:00 am Thursday @ 11:59 pm
        </h5>
        <div className="md:h-16 md:w-0.5 bg-gray-400"></div>

        <h5 className="md:w-1/5 sm:1/3 xs:full justify-center mr-auto ml-auto text-gray-400 font-medium text-lg text-center xs:mt-1 xs:mb-1">
          350 5th Ave New York, United States
        </h5>
      </div>
      <div className="md:flex justify-center flex-wrap border border-1  m-10 p-2">
        <h1 className="md:w-1/5 sm:1/3 xs:full justify-center mr-auto ml-auto font-bold text-orange-600 text-center">
          25 <br></br>
          <p className="text-xs text-center text-gray-500"> MAY</p>
        </h1>

        <img
          src={img2}
          className="rounded-full justify-center mr-auto xs:mr-auto xs:ml-auto xs:mt-1 xs:mb-1 "
          style={{ object: "cover" }}
          height="250px"
          width="130px"
          alt=""
        ></img>
        <h5 className="md:w-1/5 sm:1/3 xs:full justify-center mr-auto ml-auto font-medium text-lg text-center xs:mt-1 xs:mb-1">
          Leadership Academy for Administrator
        </h5>
        <div className="md:h-16 md:w-0.5 bg-gray-400"></div>
        <h5 className="md:w-1/5 sm:1/3 xs:full justify-center mr-auto ml-auto text-gray-400 font-medium text-lg text-center xs:mt-1 xs:mb-1">
          Thursday @ 12:00 am Friday @ 11:59 pm
        </h5>
        <div className="md:h-16 md:w-0.5 bg-gray-400"></div>

        <h5 className="md:w-1/5 sm:1/3 xs:full justify-center mr-auto ml-auto text-gray-400 font-medium text-lg text-center xs:mt-1 xs:mb-1">
          350 5th Ave New York, United States
        </h5>
      </div>
      <div className="md:flex justify-center flex-wrap border border-1  m-10 p-2">
        <h1 className="md:w-1/5 sm:1/3 xs:full justify-center mr-auto ml-auto font-bold text-orange-600 text-center">
          28 <br></br>
          <p className="text-xs text-center text-gray-500"> AUG</p>
        </h1>

        <img
          src={img3}
          className="rounded-full justify-center mr-auto xs:mr-auto xs:ml-auto xs:mt-1 xs:mb-1"
          style={{ object: "cover" }}
          height="250px"
          width="130px"
          alt=""
        ></img>
        <h5 className="md:w-1/5 sm:1/3 xs:full justify-center mr-auto ml-auto font-medium text-lg text-center xs:mt-1 xs:mb-1">
          Educator Collaborative Series
        </h5>
        <div className="md:h-16 md:w-0.5 bg-gray-400"></div>
        <h5 className="md:w-1/5 sm:1/3 xs:full justify-center mr-auto ml-auto text-gray-400 font-medium text-lg text-center xs:mt-1 xs:mb-1">
          Tuesday @ 12:00 am Saturday @ 11:59 pm
        </h5>
        <div className="md:h-16 md:w-0.5 bg-gray-400"></div>

        <h5 className="md:w-1/5 sm:1/3 xs:full justify-center mr-auto ml-auto text-gray-400 font-medium text-lg text-center xs:mt-1 xs:mb-1">
          350 5th Ave New York, United States
        </h5>
      </div>
      <button className="bg-green-500 h-14 w-48 justify-center mb-20 rounded text-white md:ml-[600px] sm:ml-[300px] xs:ml-[70px] font-medium  ">
        MORE EVENTS
      </button>
    </div>
  );
}; 

export default Events;
