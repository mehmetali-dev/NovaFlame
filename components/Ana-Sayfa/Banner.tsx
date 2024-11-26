import Image from 'next/image'
import React from 'react'
import Head from 'next/head'; 

const Banner = () => {
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
    </>
  );
};

export default Banner;
