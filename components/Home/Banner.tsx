import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className=' w-full h-12 bg-[#F06B1C] text-white flex items-center justify-center text-lg font-semibold'>
      <Image src="/indirim_icon.png" alt='indirim_icon' width={25} height={25} className='mr-3 '/>
      30% varan indirim — Sınırlı Sayıda! 
    </div>
  )
}

export default Banner