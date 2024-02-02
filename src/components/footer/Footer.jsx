import React from "react";
import img1 from '../../assets/image/man2.jpg'
import img2 from '../../assets/image/man3.jpg'


const Footer = () => {
  return (
    <div className="w-full md:h-[350px] xs:h-auto bg-[#323131] p-10 md:flex">
      <div className="md:w-1/3 xs:w-full pl-2">
        <h3 className=" text-white font-extrabold mb-10">Mellon</h3>
        <p className="text-sm text-stone-400">Omnis iste natus sit voluptatem accusanti dolorem laudantium totam rem aperiam.</p>
        <p className="text-sm text-stone-400">123, New Lenox, Chicago, IL 60606</p>
        <p className="text-sm text-stone-400">info@yoursite.com</p>
        <p className="text-sm text-stone-400">1 (800) 123-4567</p>
      </div>
      <div className="md:w-1/3 xs:w-full pl-2">
      <h5 className=" text-white font-extrabold mb-10">Recent Posts</h5>
      <div className="flex  ">
        <div>
            <img src={img1} alt="" height='70px' width='70px' className="rounded"/>
        </div>
        <div>
          <p className="text-xs text-white font-medium pl-2">Facing Your Fears of Returning To School as an Adult</p>
          <p className="text-xs text-gray-400 font-medium pl-2 mt-[-10px]">02.01.2017by Mark Chapman</p>
        </div>
      </div>
      <div className="flex mt-2">
        <div>
            <img src={img2} alt="" height='70px' width='70px' className="rounded" />
        </div>
        <div>
          <p className="text-xs text-white font-medium pl-2">Facing Your Fears of Returning To School as an Adult</p>
          <p className="text-xs text-gray-400 font-medium pl-2 mt-[-10px]">02.01.2017by Mark Chapman</p>
        </div>
      </div>


      </div>
      <div className="md:w-1/3 xs:w-full">
      <h5 className=" text-white font-extrabold mb-10">Newsletter</h5>
      <div className="flex">

      <input type="email" placeholder="Your email" className="p-2 bg-black md:w-52 xs:w-36" />
      <button className="bg-green-500 text-white font-medium p-2 ">Subscribe</button>
      </div>
    


      </div>
    </div>
  );
};

export default Footer;
