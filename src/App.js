import { useEffect, useState } from "react";
import "./App.css";
import Courses from "./components/courses/Courses";
import Events from "./components/events/Events";
import Footer from "./components/footer/Footer";
import Future from "./components/futurewitheducation/Future";
import Herosection from "./components/herosection/Herosection";
import Testimonial from "./components/testimonial/Testimonial";
import Usefull from "./components/useful/Usefull";
import Whatwedo from "./components/whatwedo/Whatwedo";
import { ScaleLoader } from "react-spinners";

function App() {
 
  return (
    <div className="App ">

        <div>
          <Herosection />
          <Whatwedo />
          <Courses />
          <Usefull />
          <Events />
          <Future />
          <Testimonial />
          <Footer />
        </div>
    
    </div>
  );
}

export default App;
