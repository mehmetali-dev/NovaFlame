'use client'; 

import Image from 'next/image'
import React from 'react'
import Head from 'next/head';

const Banner = () => {
  return (
    <>
      {/* SEO Meta Tagleri */}
      <Head>
        <title>Anasayfa - Nova Flame</title>
        <meta name="description" content="Gaziantep, Adana, Mersin, Kahramanmaraş, Şanlıurfa, Malatya, Adıyaman, Hatay Ve Tüm Güneydoğu Bölgesinde Odunlu şömine, barbekü, elektrikli şömine, ekmek fırınları, biogazlı şömine çeşitlerimiz ile sektörde siz müşterilerimize kaliteli, güvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Gaziantep Şömine, Adana Şömine, Şanlıurfa Şömine, Hatay Şömine, Adıyaman Şömine, Güneydoğu Şömine, Elektrikli Şömine, Elektrikli Şömine Modelleri..." />
        <link rel="canonical" href="https://novasomine.com/" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Kayan Yazı */}
      <div className="w-full bg-white text-gray-600 text-center py-2 overflow-hidden">
        <p className="animate-marquee whitespace-nowrap">
        Web sitemizde iyileştirme çalışmaları devam etmektedir. Anlayışınız için teşekkür ederiz!
        </p>
      </div>

      {/* Mevcut Banner */}
      <div className="w-full h-auto py-2 bg-[#F06B1C] text-white flex items-center justify-center text-base font-semibold md:py-4 md:h-12">
        <Image
          src="/indirim_icon.png"
          alt="indirim_icon"
          width={25}
          height={25}
          className="mr-2"
          style={{ minWidth: '20px', minHeight: '20px' }}
        />
        <span className="text-center text-sm md:text-lg">
          30% varan indirim — Sınırlı Sayıda!
        </span>
      </div>

      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 10s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </>
  );
};

export default Banner;
