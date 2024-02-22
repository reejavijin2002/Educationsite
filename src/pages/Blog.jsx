import React from 'react'
import Headersection from '../components/header/Headersection'
import Footer from '../components/footer/Footer'
import img1 from '../assets/image/Screenshot 2024-02-12 123548.png'
import img2 from '../assets/image/Screenshot 2024-02-12 123621.png'
import img3 from '../assets/image/Screenshot 2024-02-12 123706.png'
import { Link, Outlet } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
        <Headersection/>
        <div>
        <h2 className="mt-24 text-center font-bold text-4xl  font-body">Blog</h2>
        <p className="text-center mb-10 text-xs text-gray-400">
          Home / Blog
        </p>
        <div className='md:px-20 md:flex w-full'>
          <div className='md:w-[70%] md:mb-20'>
            <Outlet/>

          </div>
          <div className='md:w-[30%] xs:px-3 md:p-0'>
            <p className='font-bold mb-4'>Recent Posts</p>
            <div className='flex w-full '>
              <div className='w-[25%] px-1'>
                <img src={img1} alt='' width='100px' height='100px' className='mt-[-5px] rounded'   />
              </div>
              <div className='w-[75%] px-2'>
                <Link to='/blog/post1' className='no-underline text-black hover:text-orange-400'><h6 className='text-xs mt-[-10px] hover:text-orange-400'>Facing Your Fears of Returning To School as an Adult</h6></Link>
                <p className='text-[10px] mt-[-10px] text-gray-400'>02.01.2017by Mark Chapman</p>
              </div>
            </div>
            <div className='flex mt-4'>
              <div className='w-[25%] px-1'>
                <img src={img2} alt='' width='100px' height='100px' className='mt-[-5px] rounded' />
              </div>
              <div className='w-[75%] px-2'>
                <Link to='/blog/post2' className='no-underline text-black hover:text-orange-400'><h6 className='text-xs mt-[-10px] hover:text-orange-400'>Analysis: Independents Lead the Way, a North-South Divide and 4 Other Things</h6></Link>
                <p className='text-[10px] mt-[-10px] text-gray-400'>01.28.2017by Mark Chapman</p>
              </div>
            </div>
            <div className='flex mt-4'>
              <div className='w-[25%] px-1'>
                <img src={img3} alt='' width='100px' height='100px' className='mt-[-5px] rounded' />
              </div>
              <div className='w-[75%] px-2'>
              <Link to='/blog/post3' className='no-underline text-black hover:text-orange-400'><h6 className='text-xs mt-[-10px] hover:text-orange-400'>Improve Your Writing Skills with 6 Free Online Lessons</h6></Link>
                <p className='text-[10px] mt-[-10px] text-gray-400'>01.20.2017by Mark Chapman</p>
              </div>
            </div>

          </div>

        </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Blog