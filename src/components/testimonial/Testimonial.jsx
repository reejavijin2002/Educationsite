import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/image/quotation.png';
import img2 from '../../assets/image/man1.jpg'
import img3 from '../../assets/image/man2.jpg'
import img4 from '../../assets/image/man3.jpg'




const Testimonial = () => {
  return (
    <div className="mt-16 mb-14">
      <h3 className="text-center text-gray-400 font-serif">The Best Choice</h3>
      <h1 className="text-center font-bold">What Our Clients Say</h1>
      <div className="align-top justify-center mr-auto ml-auto w-14 h-0.5 bg-green-500 mt-6 mb-5"></div>
      <Carousel className="custom-z-index">
      <Carousel.Item interval={1000}>
        <img src={img1} alt="" className="mr-auto ml-auto" height='32px' width='32px'/>
        <p className="text-center mt-10 mb-10 font-light text-xl px-16 font-serif ">"This education site provided me with the flexibility I needed as a working professional, offering a diverse range of courses and an intuitive interface that made learning enjoyable and rewarding."</p>
        <h5 className="text-center font-bold text-xl mb-6">Sabith</h5>
        <p className="text-center font-bold text-sm text-gray-400 mb-6 mt-[-10px]">Manager</p>
        <img src={img2} alt="" className="h-[100px] w-[100px] rounded-[100%] mr-auto ml-auto custom-z-index"/>

       
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img src={img1} alt="" className="mr-auto ml-auto" height='32px' width='32px'/>
      <p className="text-center mt-10 mb-10 font-light text-xl px-16 font-serif">"Thanks to this platform, I could pursue personal growth as a stay-at-home parent, accessing courses conveniently online and benefiting from knowledgeable instructors, fostering an interactive learning environment."</p>
      <h5 className="text-center font-bold text-xl mb-6">Shaham</h5>
      <p className="text-center font-bold text-sm text-gray-400 mb-6 mt-[-10px]">Business</p>
      <img src={img3} alt="" className="h-[100px] w-[100px] rounded-[100%] mr-auto ml-auto custom-z-index"/>



      
      </Carousel.Item>
      <Carousel.Item>
      <img src={img1} alt="" className="mr-auto ml-auto" height='32px' width='32px'/>
      <p className="text-center mt-10 mb-10 font-light text-xl px-16 font-serif">"Enrolling in courses on this education site was a career-changing experience, offering comprehensive material, interactive features, and valuable certifications that gave me a competitive edge in the job market."</p>
      <h5 className="text-center font-bold text-xl mb-6">Ajmal</h5>
      <p className="text-center font-bold text-sm text-gray-400 mb-6 mt-[-10px]">Techniqal</p>
      <img src={img4} alt="" className="h-[100px] w-[100px] rounded-[100%] mr-auto ml-auto custom-z-index"/>



       
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Testimonial;
