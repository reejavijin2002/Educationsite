import React from 'react'
import img1 from '../../assets/image/Screenshot 2024-02-12 123548.png'
import img2 from '../../assets/image/Screenshot 2024-02-12 123621.png'
import img3 from '../../assets/image/Screenshot 2024-02-12 123706.png'
import { Link } from 'react-router-dom'

const Blogone = () => {
  return (
    <div>
        <div>
            <img src={img1} alt='' className='w-full h-[400px] md:px-8 xs:px-3'/>
            <p className='text-[15px] md:px-8 xs:px-3 mt-1 text-gray-400'>02.01.2017by Mark Chapman</p>

            <h6 className='md:px-8 xs:px-3 mt-3'>Facing Your Fears of Returning To School as an Adult</h6>
            <p className='md:px-8 xs:px-3 mt-3'>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam, quis nostrud exercitation ullamco laboris nisi…</p>
            <Link to='/blog/post1'><button className="mt-2 mb-4 bg-green-500 h-12 text-white font-semibold md:mx-8 xs:mx-3 px-3 rounded">READ MORE</button></Link>
        </div>
        <div>
            <img src={img2} alt='' className='w-full h-[400px] md:px-8 xs:px-3'/>
            <p className='text-[15px] md:px-8 xs:px-3 mt-1 text-gray-400'>01.28.2017by Mark Chapman</p>

            <h6 className='md:px-8 xs:px-3 mt-3'>Analysis: Independents Lead the Way, a North-South Divide and 4 Other Things</h6>
            <p className='md:px-8 xs:px-3 mt-3'>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam, quis nostrud exercitation ullamco laboris nisi…</p>
            <Link to='/blog/post2'><button className="mt-2 mb-4 bg-green-500 h-12 text-white font-semibold md:mx-8 xs:mx-3 px-3 rounded">READ MORE</button></Link>
        </div>
        <div>
            <img src={img3} alt='' className='w-full h-[400px] md:px-8 xs:px-3'/>
            <p className='text-[15px] mt-1 md:px-8 xs:px-3 text-gray-400'>01.20.2017by Mark Chapman</p>

            <h6 className='md:px-8 xs:px-3 mt-3'>Improve Your Writing Skills with 6 Free Online Lessons</h6>
            <p className='md:px-8 xs:px-3 mt-3'>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quiaolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Minim veniam, quis nostrud exercitation ullamco laboris nisi…</p>
            <Link to='/blog/post3'><button className="mt-2 mb-4 bg-green-500 h-12 text-white font-semibold md:mx-8 xs:mx-3 px-3 rounded">READ MORE</button></Link>
        </div>
    </div>
  )
}

export default Blogone