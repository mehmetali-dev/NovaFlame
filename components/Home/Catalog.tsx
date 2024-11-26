import React from 'react'
import ImageSlider from './ImageSlider'
import Link from 'next/link'

const Catalog = () => {
    return (
        <section className='w-full px-36 mt-16 max-sm:px-8'>
            <div className='flex items-center justify-center gap-5 max-sm:flex-col'>
                {/* Sol Kategori */}
                <div className=" w-full h-[40rem] flex flex-col items-center justify-center rounded-3xl bg-custom-image1">
                    <div className='pt-10 flex flex-col h-full w-full text-left font-medium text-3xl px-20  '>
                        <p className='text-lg'>Şömine Grupları</p>
                        <p className='text-5xl font-semibold mt-4'>Elektrikli Şömineler</p>
                        <p className='text-xl  font-semibold mt-5 text-[#7c7c7c]'>* Elektrikli şömineler, ısıtan ve dekoratif etkisi olan pratik cihazlardır. Kolay kurulum ve temiz kullanım sunarlar.</p>
                        <Link href="#" className='py-1 w-36 flex items-center justify-center border border-black rounded-3xl text-xl mt-5'>Katalog</Link>
                    </div>

                </div>
                {/* Sağ Kategori */}
                <div className='w-full h-[40rem] flex flex-col gap-4 '>
                    {/* Sağ Üst Kategori */}
                    <div className='w-ful h-1/2  rounded-3xl bg-custom-image2 flex flex-col items-center'>
                        <div className='pt-2 justify-center flex flex-col h-full w-full text-left font-medium text-3xl px-12  '>
                            <p className='text-lg text-white'>Şömine Grupları</p>
                            <p className='text-3xl font-semibold mt-4 text-white'>Bahçe Şömineleri</p>
                            <p className='text-base  font-semibold mt-5 text-[#acacac]'>* Bahçe şömineleri, açık alanda ısınma ve atmosfer yaratan taş veya metal yapılar. Sosyal etkinlikler için idealdir.</p>
                            <Link href="#" className='text-white border-white py-1 w-36 flex items-center justify-center border rounded-3xl text-lg mt-5'>Katalog</Link>
                        </div>
                    </div>
                    {/* Sağ Alt Kategori */}
                    <div className='w-ful h-1/2 '>
                    <div className='pt-2 justify-center flex flex-col h-full rounded-3xl bg-custom-image3 w-full text-left font-medium text-3xl px-12'>
                            <p className='text-lg text-[#353535]'>Şömine Grupları</p>
                            <p className='text-3xl font-semibold mt-4 text-[#2c2c2c]'>Barbekü Şömineler</p>
                            <p className='text-base  font-semibold mt-5 text-[#464646]'>*Barbekü şömineleri, açık alanda et pişirme ve sosyalleşme için kullanılan taş veya metal yapılar.</p>
                            <Link href="#" className='text-[#292929] border-[#4b4b4b] py-1 w-36 flex items-center justify-center border rounded-3xl text-lg mt-5'>Katalog</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catalog