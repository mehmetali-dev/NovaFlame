import React from 'react'
import { Logo } from "@/constants/logo";
import Image from 'next/image';

function slider() {


  return (
    <div className='my-36'>
      <div className="mx-auto max-w-4xl lg:text-center max-md:text-center max-xl:text-center mb-28">
        <h2 className="text-base font-semibold leading-7 text-indigo-600 ">Nova Şömine</h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Sektöre Değer Katan Ortaklar</p>
        <p className="mt-6 text-lg leading-8 text-gray-600">Nova Şömine, yenilikçi tasarımları ve kaliteli ürünleriyle sektöre değer katıyor. Ortaklarımızla birlikte, estetik ve enerji verimliliğini birleştirerek müşteri memnuniyetini ön planda tutuyoruz.</p>
      </div>
      <div className=" relative m-auto w-[1530px] max-md:w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(230px*10)] gap-16">
          {Logo.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center "
              key={index}
            >
              <Image src={logo.svg} alt='logo' width={500} height={500} className='opacity-50 hover:opacity-100'/>
            </div>
          ))}
          {Logo.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center "
              key={index}
            >
<Image src={logo.svg} alt='logo' width={500} height={500} className='opacity-50 hover:opacity-100'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default slider