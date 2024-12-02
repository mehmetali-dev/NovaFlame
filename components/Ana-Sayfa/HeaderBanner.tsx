'use client'

import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react'
import Head from 'next/head';

export const HeaderBanner = () => {

  const data = [
    "/banner11.png",
    "/banner22.png",       
    "/banner33.png",
    "",
    
  ];

  const [currSlide, setCurrSlide] = useState(0)

  const prevSlide = useCallback(() => {
    setCurrSlide(currSlide === 0 ? 3 : currSlide - 1)
  }, [currSlide]);  // currSlide bağımlılığı ile prevSlide fonksiyonunu memoize ediyoruz.

  const nextSlide = useCallback(() => {
    setCurrSlide(currSlide === 3 ? 0 : currSlide + 1)
  }, [currSlide]);  // currSlide bağımlılığı ile nextSlide fonksiyonunu memoize ediyoruz.

  // Mobilde otomatik geçişi sağlamak için useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide(); // Her 5 saniyede bir slide geçişi yapar
    }, 5000); // 5000 ms = 5 saniye

    return () => clearInterval(intervalId); // Component unmount olduğunda interval temizlenir
  }, [nextSlide]);  // nextSlide fonksiyonuna bağımlı

  return (
    <>
      {/* SEO Meta Tagleri */}
      <Head>
        <title>Anasayfa - Nova Flame</title>
        <meta name="description" content=" Gaziantep, Adana, Mersin, Kahramanmaraş, Şanlıurfa, Malatya, Adıyaman, Hatay Ve Tüm Güneydoğu Bölgesinde Odunlu şömine, barbekü, elektrikli şömine, ekmek fırınları, biogazlı şömine çeşitlerimiz ile sektörde siz müşterilerimize kaliteli, güvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Gaziantep Şömine, Adana Şömine, Şanlıurfa Şömine, Hatay Şömine, Adıyaman Şömine, Güneydoğu Şömine, Elektrikli Şömine, Elektrikli Şömine Modelleri, elektrikli somine, elektrikli şömine üreticileri, elektrikli şömine modelleri ve fiyatları, elektrikli şömine 150cm, tektes şömine, elektrikli şömine malatya, elektrikli şömine çeşitleri, elektrikli somine modelleri, hazır şömine modelleri, şömine fiyatları, şömine elektrik, zaya şömine, , flameline şömine, dekoratif şömine, 150cm elektrikli şömine, hazir sömine, odun şömine fiyatları, elektrikli şömine tasarımları, elektrikli şömine dekorasyon, elektrikli şömine haznesi, dlc şömine, şömine elektrikli, portatif elektrikli şömine, elk şömine, taşınılabilir elektrikli şömine, elektrikli şömine görselleri, elektronik şömine, salon elektrikli şömine,   " />
        <link rel="canonical" href="https://novasomine.com/" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Anasayfa - Nova Flame" />
        <meta property="og:description" content=" Gaziantep, Adana, Mersin, Kahramanmaraş, Şanlıurfa, Malatya, Adıyaman, Hatay Ve Tüm Güneydoğu Bölgesinde Odunlu şömine, barbekü, elektrikli şömine, ekmek fırınları, biogazlı şömine çeşitlerimiz ile sektörde siz müşterilerimize kaliteli, güvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://novasomine.com" />
        <meta property="og:image" content="https://novasomine.com" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Nova Flame" />
        <meta property="og:locale" content="tr_TR" />
      </Head>

      <div className='w-full h-auto overflow-x-hidden bottom-5'>
        <div className='w-screen'>
          <div
            style={{ transform: `translate(-${currSlide * 100}vw)` }}
            className='w-[400vw] h-full flex transition-transform duration-1000'>
            {/* Resimleri layout='intrinsic' ile belirli boyutlarda göstermek */}
            {data.map((src, index) => (
              <div key={index} className="relative w-screen h-full">
                <Image 
                  src={src} 
                  alt={`Slide ${index + 1}`} 
                  width={1920} 
                  height={1080} 
                  objectFit="cover" 
                />
              </div>
            ))}
          </div>

          {/* Butonlar sadece masaüstü için görünür */}
          <div className='absolute top-[calc(100vh-100px)] left-0 right-0 w-fit mx-auto hidden md:flex gap-8'>
            <div onClick={prevSlide} className='w-14 h-12 border-[#acacac] flex items-center justify-center
              hover:cursor-pointer hover:bg-orange-400 hover:text-white active:bg-gray-900 duration-300'>
              <Image src="/left_arrow.svg" alt='left_arrow' width={10} height={10} />
            </div>
            <div onClick={nextSlide} className='w-14 h-12 border-[#acacac] flex items-center justify-center
              hover:cursor-pointer hover:bg-orange-400 hover:text-white active:bg-gray-900 duration-300'>
              <Image src="/right_arrow.svg" alt='right_arrow' width={10} height={10} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderBanner;
