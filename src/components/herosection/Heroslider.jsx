import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/image/authentic-book-club-scene.jpg';
import img2 from '../../assets/image/slide2.jpg';
import img3 from '../../assets/image/college-colleagues-studying-together.jpg';
import Headersection from '../header/Headersection';
import Headersection2 from '../header/Headersection2';

function Heroslider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleSlide1Click = () => {
    setIndex(0); 
  };
  const handleSlide1Click1 = () => {
    setIndex(1); 
  };
  const handleSlide1Click2 = () => {
    setIndex(2); 
  };

  return (
    <div class="relative">
          <Headersection className="relative top-0 left-0 right-0 z-20" />

    <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={1000} className='absolute custom-z-index'>


      <Carousel.Item style={{ backgroundImage: `url(${img1})`,backgroundSize: 'cover',backgroundPosition: 'center center' }} className='md:h-[700px] xs:h-[500px] w-full'>
        <Headersection2/>
        <Carousel.Caption className='md:mb-56 xs:mb-32 '>
        <p className='md:text-md font-serif xs:text-sm'>Studeon innovative & successfull</p>

          <h3 className='font-bold md:text-6xl sm:text-4xl xs:text-[1.25rem]'>ONLINE COURSES</h3>
          <button className='bg-green-500 md:px-5 md:py-3.5 xs:px-3 xs:py-2 rounded font-semibold mt-6'>More courses</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: `url(${img2})`,backgroundSize: 'cover',backgroundPosition: 'center center' }} className='md:h-[700px] xs:h-[500px] w-full'>
      <Headersection2/>
        <Carousel.Caption  className='md:mb-56 xs:mb-32'>
        <p className='md:text-md font-serif xs:text-sm'>Studeon innovative & successfull</p>

          <h3 className='font-bold md:text-6xl sm:text-4xl xs:text-[1.25rem]'>ANY LEVEL OR DEGREE</h3>
          <button className='bg-green-500 md:px-5 md:py-3.5 xs:px-3 xs:py-2 rounded font-semibold mt-6'>More courses</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: `url(${img3})`,backgroundSize: 'cover',backgroundPosition: 'center center' }} className='md:h-[700px] xs:h-[500px] w-full'>
      <Headersection2/>
        <Carousel.Caption  className='md:mb-56 xs:mb-32'>
        <p className='md:text-md font-serif xs:text-sm'>Studeon innovative & successfull</p>

          <h3 className='font-bold md:text-6xl sm:text-4xl xs:text-[1.25rem]'>CREATIVE APPROACH</h3>
          <button className='bg-green-500 md:px-5 md:py-3.5 xs:px-3 xs:py-2 rounded font-semibold mt-6'>More courses</button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div class="absolute bottom-0 left-0 right-0 flex flex-col items-center mb-[-30px] hederbottom">
        <p class="text-center text-white font-medium">Explore Now!</p>
        <div class="flex justify-center ">
            <div onClick={handleSlide1Click} class="w-64 h-24 text-left text-white font-medium text-4xl py-3 px-2" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>01</div>
            <div onClick={handleSlide1Click1}  class="w-64 h-24 text-left text-white font-medium text-4xl py-3 px-2" style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}>02</div>
            <div onClick={handleSlide1Click2}  class="w-64 h-24 text-left text-white font-medium text-4xl py-3 px-2" style={{ backgroundImage: `url(${img3})`, backgroundSize: 'cover' }}>03</div>
        </div>
    </div>
</div>
  );
}

export default Heroslider;
