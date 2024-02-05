import React from 'react'
import Headersection from "../components/header/Headersection";
import Footer from "../components/footer/Footer";
import Events from "../components/events/Events";
import Testimonial from '../components/testimonial/Testimonial';


const Events1 = () => {
  return (
    <div>
        <Headersection/>
        <div className='mt-20'>
          <Events/>
          <Testimonial/>
        </div>
        <Footer/>
        
    </div>
  )
}

export default Events1