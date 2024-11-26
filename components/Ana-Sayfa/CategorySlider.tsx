import React from 'react'
import { categoryItem } from '@/constants/category'
import Link from 'next/link'
import Image from 'next/image'

const CategorySlider = () => {
    return (
        <div className='w-full flex items-center justify-center'>
            {/* Masaüstü Görünümü */}
            <div className="hidden md:flex px-1 gap-5 font-semibold text-xl">
                {categoryItem.map((item) => (
                    <Link href={item.href} key={item.name} className="text-[#505050] flex border bg-[#f3f3f3] px-8 py-2 text-base rounded-2xl items-center gap-2 hover:text-[#F06B1C]">
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>
            
            {/* Mobil Görünümü */}
            <div className="md:hidden w-full px-4 py-2 flex flex-col gap-3">
                {categoryItem.map((item) => (
                    <Link href={item.href} key={item.name} className="text-[#505050] flex border bg-[#f3f3f3] px-6 py-2 text-sm rounded-2xl items-center gap-2 hover:text-[#F06B1C]">
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default CategorySlider
