'use client'

import Image from 'next/image';
import React, { useState } from 'react'


export const HeaderBanner = () => {

    const data = [
      "/banner2.png",
        "/banner2.png",       
         "/banner2.png",
        "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
      ];

  const [currSlide, setCurrSlide] = useState(0)

  const prevSlide = ()=>{
    setCurrSlide(currSlide === 0 ? 3: currSlide-1 )
  }

  const nextSlide =()=>{
    setCurrSlide(currSlide === 3? 0: currSlide+1)
  }

  return (
    <div className='w-full h-auto overflow-x-hidden bottom-5'>
      <div className='w-screen'>
        <div style={{transform:`translate(-${currSlide * 100}vw)`}} 
          className='w-[400vw] h-full flex transition-transform duration-1000'>
          <img className='w-screen h-full object-cover'  src={data[0]} alt=''/>
          <img className='w-screen h-full object-cover'  src={data[1]} alt=''/>
          <img className='w-screen h-full object-cover'  src={data[2]} alt=''/>
          <img className='w-screen h-full object-cover'  src={data[3]} alt=''/>
          <img className='w-screen h-full object-cover'  src="/banner1.png" alt=''/>
        </div>

        <div className=' absolute bottom-10 left-0 right-0 w-fit mx-auto flex gap-8  '>
          <div onClick={prevSlide} className='w-14 h-12  border-[#acacac] flex items-center justify-center
          hover:cursor-pointer hover:bg-orange-400 hover:text-white active:bg-gray-900 duration-300'> 
            {/* <ArrowBackIcon/> */}
            <Image src="/left_arrow.svg" alt='left_arrow' width={10} height={10} />
          </div>
          <div onClick={nextSlide} className='w-14 h-12  border-[#acacac] flex items-center justify-center
          hover:cursor-pointer hover:bg-orange-400 hover:text-white active:bg-gray-900 duration-300'> 
            {/* <ArrowForwardIcon/> */}
            <Image src="/right_arrow.svg" alt='left_arrow' width={10} height={10} />
          </div>
        </div>
        
      </div>      
    </div>
  )
}
export default HeaderBanner