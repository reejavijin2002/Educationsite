import React from 'react'
import img1 from '../../assets/image/baground.png'
import CountUp from "react-countup";
import img2 from '../../assets/image/learner.png'
import img3 from '../../assets/image/graduated.png'
import img4 from '../../assets/image/execution.png'
import img5 from '../../assets/image/worldwide.png'


const Usefull = () => {
  return (
    <div className='w-full md:h-[550px] xs:h-auto' style={{ backgroundImage: `url(${img1})`,backgroundSize: 'cover' }} >
        <h5 className='text-center text-gray-400 pt-20 font-serif'>The Best Choice</h5>
        <h3 className='text-center text-white font-sans font-bold  '>Usefull&Popular Courses</h3>
        <div className='align-top justify-center mr-auto ml-auto w-14 h-0.5 bg-green-500 mt-6'></div>
        <div className="md:flex justify-center flex-wrap w-full mt-28">
            <div className="md:w-1/4 sm:w-1/2 xs:w-full justify-center text-center ">
                <img src={img2} alt='' className='ml-auto mr-auto mb-5' />
              <h1 className="text-4xl  text-white font-semibold">
            
                <CountUp end={10000} duration={100} separator="," />
              </h1>
              <h6 className="pl-4 font-bold text-white text-sm">LEARNERS EDUCATED</h6>
            </div>
            <div className="md:w-1/4 sm:w-1/2 xs:w-full justify-center  text-center">
            <img src={img3} alt=''className='ml-auto mr-auto mb-5' />

              <h1 className="text-4xl  text-white font-semibold">
              <CountUp end={5000} duration={100} separator="," />

              </h1>
              <h6 className="font-bold text-white text-sm">GRADUATES</h6>
            </div>
            <div className="md:w-1/4 sm:w-1/2 xs:w-full justify-center text-center">
            <img src={img4} alt='' className='ml-auto mr-auto mb-5' />

              <h1 className="text-4xl text-white font-semibold">
              <CountUp end={20000} duration={100} separator="," />

              </h1>
              <h6 className="font-bold text-white text-sm">COURCES PUBLISHED</h6>
            </div>
            <div className="md:w-1/4 sm:w-1/2 xs:w-full justify-center text-center" >
            <img src={img5} alt='' className='ml-auto mr-auto mb-5' />

              <h1 className="text-4xl text-white font-semibold">
              <CountUp end={20000} duration={100} separator="," />

              </h1>
              <h6 className="font-bold text-white text-sm">GLOBAL LEARNERS</h6>
            </div>
          </div>



    </div>
  )
}

export default Usefull