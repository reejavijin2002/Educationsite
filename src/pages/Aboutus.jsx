import React from 'react'
import Headersection from '../components/header/Headersection'
import Footer from '../components/footer/Footer'
import Future from '../components/futurewitheducation/Future'
import Team from '../components/meetheteam/Team'
import Testimonial from '../components/testimonial/Testimonial'
import Usefull from '../components/useful/Usefull'
import Whystudeon from '../components/whystudeon/Whystudeon'

const Aboutus = () => {
  return (
    <div>
        <Headersection/>
        <h2 className="mt-20 text-center font-bold text-4xl font-sans ">About Us</h2>
        <p className="text-center mb-10 text-xs text-gray-400">Home / Aboutus</p>
        <Future/>
        <Team/>
        {/* <Whystudeon/> */}
        <Testimonial/>
        <Usefull/>

        
        
        <Footer/>
    </div>
  )
}

export default Aboutus