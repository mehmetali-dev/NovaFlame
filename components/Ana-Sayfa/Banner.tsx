'use client'; 

import Image from 'next/image'
import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import '/app/globals.css';

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

    {/* Sol ve Sağ Sabit Bilgiler */}
<div className="w-full bg-white py-2 px-4 flex flex-wrap justify-between items-center text-gray-950">
  {/* Sol Tarafta Sosyal Medya İkonları */}
  <div className="flex flex-row space-x-4 mb-2 md:mb-0 justify-center">
    <Link href="https://www.facebook.com/share/2oG5jo6SfQHKLxbJ/?mibextid=LQQJ4d" passHref>
      <span className="sr-only">Facebook</span>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className="social-icon">
        <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2aa4f4"></stop>
          <stop offset="1" stopColor="#007ad9"></stop>
        </linearGradient>
        <path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path>
        <path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
      </svg>
    </Link>
    <Link href="https://www.instagram.com/novasomine?igsh=MWNyN2dtODJ1Z3Exeg==" passHref>
      <span className="sr-only">İnstagram</span>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
</svg>
    </Link>
    <Link href="https://www.youtube.com/@flamelinesomine8117" passHref>
      <span className="sr-only">Youtube</span>
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48" className="social-icon">
        <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path>
        <path fill="#FFF" d="M20 31L20 17 32 24z"></path>
      </svg>
    </Link>
  </div>

  <div className="contact-info flex space-x-4 mb-2 md:mb-0">
    <div className="phone-email-container">
      <Link href="tel:05336929890" className="text-gray-700 transition hover:opacity-75 flex items-center text-sm justify-center md:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} className="mr-2">
          <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
        </svg>
        +90 533 692 98 90
      </Link>
      <Link href="mailto:info@novasomine.com" className="text-gray-700 transition hover:opacity-75 flex items-center text-sm justify-center md:justify-start">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={20} className="mr-2">
          <path d="M28 28H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4zM4 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
          <path d="M16 18a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 15.728 29.382 5.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 18z" />
        </svg>
        info@novasomine.com
      </Link>
    </div>
  </div>
</div>

{/* Patlayan Flaş Animasyonu (Yalnızca Yazıyla) */}
<div className="w-full bg-[#F06B1C] text-white text-center py-2 overflow-hidden">
  <div className="flash-animation flex items-center justify-center">
  <span className="text-sm md:text-lg flash-text">
  🏷️ Büyük Kış Kampanyası Başladı! Elektrikli Şöminelerde %20&#39;ye Varan İndirim Fırsatını Kaçırmayın! 🔥
</span>
  </div>
</div>




    </>
  );
};

export default Banner;
