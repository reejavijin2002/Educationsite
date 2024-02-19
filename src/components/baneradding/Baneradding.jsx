import React, { useState } from 'react'
import img1 from '../../assets/image/cloud-storage_1517985.png'
import { useRef } from 'react'
import img2 from "../../assets/image/jpgindumark.jpg"


const Baneradding = () => {
    const InputRef=useRef(null)
    const [image,setImage]=useState([])
    const handleImageClick =()=>{
        InputRef.current.click();

    }
    const handleViewImage = (e) => {
        const files = e.target.files;
        const newImages = [...image];
        
        for (let i = 0; i < files.length; i++) {
            newImages.push(files[i]);
        }
        
        setImage(newImages);
    };
    const handleDeleteImage = (index) => {
        const newImages = [...image];
        newImages.splice(index, 1);
        setImage(newImages);
    };
  return (
    <div className='bg-stone-50 sticky pb-5   top-0 p-2 mt-2   shadow border-slate-200z-30 w-full h-auto'>
        <h3 className='px-5 pt-5 pb-3 font-bold font-serif'>Banner Image</h3>
        <div className='ml-auto mr-auto border-3  border-dotted border-black mx-5 cursor-pointer' onClick={handleImageClick}>
            <img src={img1} alt='' className='ml-auto mr-auto' />
            <p className='text-center text-lg font-semibold'>Click here</p>

        </div>
        <input type='file' ref={InputRef} onChange={handleViewImage} style={{display:"none"}} multiple/>
        <div className='flex flex-wrap'>
                {image.map((image, index) => (
                    <>
                    <img key={index} src={URL.createObjectURL(image)} alt='' className='w-1/4 h-36 ml-12 mt-4 flex rounded-lg border-2 border-gray-400' />
                    <img src={img2} alt='' className='h-5 ml-[-15px] mt-4 relative rounded-full cursor-pointer' onClick={() => handleDeleteImage(index)} />

                    </>
                ))}
            </div>
    </div>
  )
}

export default Baneradding