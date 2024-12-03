"use client";

import Image from 'next/image';
import React from 'react';
import { product } from "@/constants/product";
import Head from 'next/head'; 
import Link from 'next/link';

const Products = () => {
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

            <section className="py-2 mt-10">
                <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 px-28 max-sm:px-5 ">
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl" href="#">
                                Popüler Ürünler 
                            </a>
                            <div className="flex items-center" id="store-nav-content">
                                <a className="pl-3 inline-block no-underline hover:text-black" href="#"></a>
                            </div>
                        </div>
                    </nav>

                    {/* Ürünler Listesi */}
                    {product.map((productItem, index) => (
                        <div key={index} className="w-full md:w-1/2 xl:w-1/3 p-6 flex flex-col">
                                    <p className="pt-1 text-gray-900">{productItem.price}</p>
                                <Image alt='img' width={500} height={500} className="hover:grow hover:shadow-lg" src={productItem.src} />
                                <div className="pt-3 flex items-center justify-between">
                                    <p className="">{productItem.name}</p>
                                   
                                    
                                </div>
                        
                            
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}

export default Products;
