import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/image/slide1.jpg';
import img2 from '../../assets/image/slide2.jpg';
import img3 from '../../assets/image/college-colleagues-studying-together.jpg';
import Headersection from '../header/Headersection';

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
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false} interval={1000}>
      <Carousel.Item style={{ backgroundImage: `url(${img1})`,backgroundSize: 'cover' }} className='h-[700px] w-full'>
        <Headersection className="fixed" />
        <Carousel.Caption className='mb-56 '>
        <p className='text-md'>Studeon innovative & successfull</p>

          <h3 className='font-bold text-6xl'>ONLINE COURSES</h3>
          <button className='bg-green-500 px-5 py-3.5 rounded font-semibold mt-6'>More courses</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: `url(${img2})`,backgroundSize: 'cover' }} className='h-[700px] w-full'>
        <Headersection className="fixed"  />
        <Carousel.Caption  className='mb-56 '>
        <p className='text-md'>Studeon innovative & successfull</p>

          <h3 className='font-bold text-6xl'>ANY LEVEL OR DEGREE</h3>
          <button className='bg-green-500 px-5 py-3.5 rounded font-semibold mt-6'>More courses</button>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ backgroundImage: `url(${img3})`,backgroundSize: 'cover' }} className='h-[700px] w-full'>
        <Headersection className="fixed"  />
        <Carousel.Caption  className='mb-56 '>
        <p className='text-md'>Studeon innovative & successfull</p>

          <h3 className='font-bold text-6xl'>CREATIVE APPROACH</h3>
          <button className='bg-green-500 px-5 py-3.5 rounded font-semibold mt-6'>More courses</button>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div class="absolute bottom-0 left-0 right-0 flex flex-col items-center mb-[-30px]">
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
