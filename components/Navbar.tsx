'use client'

import Link from 'next/link'
import React from 'react'
import { menuItem } from '@/constants/menu'
import Image from 'next/image'
import { usePathname } from 'next/navigation'



const Navbar = () => {

    const pathname = usePathname();
    return (
        <nav className='flex items-center justify-between w-full px-10 py-8 max-md:px-5 bg-transparent'>
            <div className='flex gap-5'>
                <div className='hidden max-md:block'><Image src="/menu.svg" alt='menu-icon' width={25} height={25} /></div>
                <h1 className='font-semibold text-3xl'><Image src="/novasominelogo.webp" alt='menu-icon' width={150} height={150}  /></h1>
            </div>

            <div className="flex px-1 gap-5 font-semibold text-xl max-md:hidden">
                {menuItem.map((item) => (
                    <Link href={item.href} key={item.name} className="flex items-center gap-2 hover:text-[#F06B1C]">
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>
            <div className='flex gap-5 max-md:gap-3'>
                <Link href="/" className='bg-[#F06B1C] px-5 py-2 rounded-3xl text-xl text-white flex gap-3 font-medium hover:bg-[#ff975a] '>Teklif Al
                        <Image src="/wp.svg" alt='wp' width={20} height={20}/>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar