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
      <div className="align-top justify-center mr-auto ml-auto w-14 h-0.5 bg-green-500 mt-6 mb-5"></div>
      <div className="flex justify-center border border-1 border-black m-10 p-4">
        <h1 className="w-1/5 justify-center mr-auto ml-auto font-bold text-orange-600 text-center">
          18 <br></br>
          <p className="text-xs text-center text-gray-500"> MAY</p>
        </h1>

        <img
          src={img1}
          className="rounded-full justify-center mr-auto  "
          style={{ object: "cover" }}
          height="250px"
          width="130px"
        ></img>
        <h5 className="w-1/5 justify-center mr-auto ml-auto font-semibold">
          101 Standard Workshop for All Levels
        </h5>
        <div className="h-16 w-0.5 bg-gray-400"></div>
        <h5 className="w-1/5 justify-center mr-auto ml-auto text-gray-400">
          Thursday @ 12:00 am Thursday @ 11:59 pm
        </h5>
        <div className="h-16 w-0.5 bg-gray-400"></div>

        <h5 className="w-1/5 justify-center mr-auto ml-auto text-gray-400">
          350 5th Ave New York, United States
        </h5>
      </div>
      <div className="flex justify-center border border-1 border-black m-10 p-4">
        <h1 className="w-1/5 justify-center mr-auto ml-auto font-bold text-orange-600 text-center">
          25 <br></br>
          <p className="text-xs text-center text-gray-500"> MAY</p>
        </h1>

        <img
          src={img2}
          className="rounded-full justify-center mr-auto  "
          style={{ object: "cover" }}
          height="250px"
          width="130px"
        ></img>
        <h5 className="w-1/5 justify-center mr-auto ml-auto font-semibold">
          Leadership Academy for Administrator
        </h5>
        <div className="h-16 w-0.5 bg-gray-400"></div>
        <h5 className="w-1/5 justify-center mr-auto ml-auto text-gray-400">
          Thursday @ 12:00 am Friday @ 11:59 pm
        </h5>
        <div className="h-16 w-0.5 bg-gray-400"></div>

        <h5 className="w-1/5 justify-center mr-auto ml-auto text-gray-400">
          350 5th Ave New York, United States
        </h5>
      </div>
      <div className="flex justify-center border border-1 border-black m-10 p-4">
        <h1 className="w-1/5 justify-center mr-auto ml-auto font-bold text-orange-600 text-center">
          28 <br></br>
          <p className="text-xs text-center text-gray-500"> AUG</p>
        </h1>

        <img
          src={img3}
          className="rounded-full justify-center mr-auto  "
          style={{ object: "cover" }}
          height="250px"
          width="130px"
        ></img>
        <h5 className="w-1/5 justify-center mr-auto ml-auto font-semibold">
          Educator Collaborative Series
        </h5>
        <div className="h-16 w-0.5 bg-gray-400"></div>
        <h5 className="w-1/5 justify-center mr-auto ml-auto text-gray-400">
          Tuesday @ 12:00 am Saturday @ 11:59 pm
        </h5>
        <div className="h-16 w-0.5 bg-gray-400"></div>

        <h5 className="w-1/5 justify-center mr-auto ml-auto text-gray-400">
          350 5th Ave New York, United States
        </h5>
      </div>
      <button className="bg-green-500 h-14 w-48 justify-center mb-20 rounded text-white ml-[600px] font-medium ">
        MORE EVENTS
      </button>
    </div>
  );
}; 

export default Events;
