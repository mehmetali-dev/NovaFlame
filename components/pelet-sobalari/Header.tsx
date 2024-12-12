'use client'

import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'; 



const Header: React.FC = () => {
    const [open, setOpen] = useState<{ id: number | null; isOpen: boolean }>({ id: null, isOpen: false });
    const [selectedOption, setSelectedOption] = useState('yes'); // Default selected option

    const handleChange = (event:any) => {
      setSelectedOption(event.target.value); // Update state when selection changes
    };


    
    return (
        <>

        
        {/* SEO Meta Tagleri */}
        <Head>
        <title>Anasayfa - Nova Flame</title>
        <meta name="description" content=" Gaziantep, Adana, Mersin, Kahramanmaraş, Şanlıurfa, Malatya, Adıyaman, Hatay Ve Tüm Güneydoğu Bölgesinde Odunlu şömine, barbekü, elektrikli şömine, ekmek fırınları, biogazlı şömine çeşitlerimiz ile sektörde siz müşterilerimize kaliteli, güvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Gaziantep Şömine, Adana Şömine, Şanlıurfa Şömine, Hatay Şömine, Adıyaman Şömine, Güneydoğu Şömine, Elektrikli Şömine, Elektrikli Şömine Modelleri, elektrikli somine, elektrikli şömine üreticileri, elektrikli şömine modelleri ve fiyatları, elektrikli şömine 150cm, tektes şömine, elektrikli şömine malatya, elektrikli şömine çeşitleri, elektrikli somine modelleri, hazır şömine modelleri, şömine fiyatları, şömine elektrik, zaya şömine, , flameline şömine, dekoratif şömine, 150cm elektrikli şömine, hazir sömine, odun şömine fiyatları, elektrikli şömine tasarımları, elektrikli şömine dekorasyon, elektrikli şömine haznesi, dlc şömine, şömine elektrikli, portatif elektrikli şömine, elk şömine, taşınılabilir elektrikli şömine, elektrikli şömine görselleri, elektronik şömine, salon elektrikli şömine,   " />
        <link rel="canonical" href="https://novasomine.com/somine-grupları" />
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

        <div className="bg-gray-50 py-24 sm:py-32">
 
            
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-orange-600">Nova Şömine</h2>
                <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    Pelet Sobaları
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2 transition-transform duration-300 hover:scale-105" >
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <a href='#'>Alev Lambası Pelet Soba</a>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                Alev Lambalı Pelet Sobalar şık ve verimli ısıtma çözümü sunar.
                                </p>
                            </div>
                            <div className="flex flex-1">
    <Image
        className="object-cover object-center w-full h-full" // İstediğiniz stil sınıflarını burada kullanabilirsiniz
        src="/alevlambası.jpeg" // Görselin yolu
        alt="" // Alternatif metin
        width={500} // Görselin genişliği (istediğiniz boyuta göre ayarlayın)
        height={300} // Görselin yüksekliği (istediğiniz boyuta göre ayarlayın)
    />
</div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1 transition-transform duration-300 hover:scale-105" >
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <Link href='#'> 3 Camlı Şömine Tipi Pelet Soba</Link>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                3 camlı pelet soba, estetik ve yüksek verimli ısıtma sağlar.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center h-full">
            <Image
                className="max-w-[80%] max-h-[100%] object-cover object-center"
                src="/3cam.jpeg"
                alt="Elektrikli Şömineler"
                width={500} // İhtiyaca göre ayar yapabilirsiniz
                height={500} // İhtiyaca göre ayar yapabilirsiniz
            />
        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 transition-transform duration-300 hover:scale-105" >
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <a href="#">Manuel Fırınlı Odunlu  Pelet Soba</a>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                Manuel fırınlı odunlu pelet soba, güçlü ve ekonomik ısıtma sunar.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center h-full">
            <Image
                className="w-[min(300px,65cqw)] h-full object-contain"
                src="/manuelf.jpeg"
                alt="Bioethanol Şömine Hazneleri"
                width={500} // İhtiyaca göre ayar yapabilirsiniz
                height={300} // İhtiyaca göre ayar yapabilirsiniz
            />
        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2 transition-transform duration-300 hover:scale-105" >
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <a href="#">Ekonomik Manuel Fanlı Pelet Soba</a>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                Ekonomik manuel fanlı pelet soba, güçlü ve verimli ısınma sunar.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center h-full">
            <Image
                className=""
                src="/p (1).jpeg"
                alt="Barbeküler"
                width={500} // İhtiyaca göre ayar yapabilirsiniz
                height={300} // İhtiyaca göre ayar yapabilirsiniz
            />
        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>


        </div>
        </div>
        </>
    );
};



export default Header;
