'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Head from 'next/head'; 
import "@fontsource/londrina-shadow"; // Defaults to weight 400
import '/app/globals.css';

const About = () => {
    const [isOn, setIsOn] = useState(false);

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

            {/* İçerik */}
            <section className='w-full h-full flex items-center justify-center mb-40 px-10 mt-40'>
                <div className='flex flex-col items-center justify-center'>

                    {/* Toggle Button */}
                    <div className="flex items-center space-x-2 mb-4z">
                        {isOn ? <span className="text-gray-700 max-sm:text-xs">Şömineyi Kapat</span> : <span className="text-gray-700 max-sm:text-xs">Şömineyi Aç</span>}
                        <div
                            className={`relative w-12 h-6 rounded-full cursor-pointer transition-colors duration-300 ease-in-out ${isOn ? 'bg-orange-500' : 'bg-gray-400'}`}
                            onClick={() => setIsOn(!isOn)}
                        >
                            <div
                                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : 'translate-x-0'
                                    }`}
                            ></div>
                        </div>
                    </div>

                    {/* Nova Flame Text */}
                    <div
                        className={`text-[12rem] max-sm:text-[4.8rem] max-md:text-[6rem] font-semibold londrina-shadow-regular -mb-44 max-sm:-mb-[5.4rem] max-md:-mb-40 opacity-25 text-[#000000] ${isOn ? 'flame-effect' : ''}`}
                    >
                        Nova Flame
                    </div>

                    {/* Image Container */}
                    <div className="relative w-full max-w-[1050px] h-[400px] max-sm:w-[48vh] max-sm:h-[200px] max-md:w-[90%] max-md:h-[250px] ">
                        {/* Image shown when isOn is true */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isOn ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <Image src="/galleryimg/açık.png" alt="açık" layout="fill" objectFit="cover" />
                        </div>

                        {/* Image shown when isOn is false */}
                        <div
                            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${isOn ? 'opacity-0' : 'opacity-100'}`}
                        >
                            <Image src="/galleryimg/kapalı.png" alt="kapalı" layout="fill" objectFit="cover" />
                        </div>
                    </div>

                </div>
                
            </section>
        </>
    );
};

export default About;
