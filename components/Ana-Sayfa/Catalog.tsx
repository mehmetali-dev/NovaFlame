import React from 'react';
import ImageSlider from './ImageSlider';
import Link from 'next/link';
import Head from 'next/head'; 

const Catalog = () => {
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

        <section className='w-full px-8 mt-16 md:px-36'>
            <div className='flex items-center justify-center gap-5 flex-col md:flex-row'>
                {/* Sol Kategori */}
                <div className="w-full h-[30rem] md:h-[40rem] flex flex-col items-center justify-center rounded-3xl bg-custom-image1 transform transition-transform duration-300 hover:scale-105">
                    <div className='pt-10 flex flex-col h-full w-full text-left font-medium text-xs md:text-3xl px-6 md:px-20'>
                        <p className='text-xs md:text-lg'>Şömine Grupları</p>
                        <p className='text-xl md:text-5xl font-semibold mt-4'>Elektrikli Şömineler</p>
                        <p className='text-[10px] md:text-xl font-semibold mt-4 text-[#7c7c7c]'>
                            * Elektrikli şömineler, ısıtan ve dekoratif etkisi olan pratik cihazlardır. Kolay kurulum ve temiz kullanım sunarlar.
                        </p>
                        <Link href="/somine-gruplari/elektrikli2" className='py-1 w-24 md:w-36 flex items-center justify-center border border-black rounded-3xl text-xs md:text-xl mt-4 transition-colors duration-300 hover:bg-orange-500 hover:text-white'>
                            Katalog
                        </Link>
                    </div>
                </div>
                {/* Sağ Kategori */}
                <div className='w-full h-[30rem] md:h-[40rem] flex flex-col gap-4'>
                    {/* Sağ Üst Kategori */}
                    <div className='w-full h-1/2 rounded-3xl bg-custom-image2 flex flex-col items-center transform transition-transform duration-300 hover:scale-105'>
                        <div className='pt-2 flex flex-col h-full w-full text-left font-medium text-xs md:text-3xl px-6 md:px-12'>
                            <p className='text-xs md:text-lg text-white'>Şömine Grupları</p>
                            <p className='text-lg md:text-3xl font-semibold mt-4 text-white'>U Tipi Şömine Hazneleri</p>
                            <p className='text-[10px] md:text-base font-semibold mt-4 text-gray-400'>
                                * Genellikle taş, mermer veya dökme demir gibi malzemelerle zenginleştirilen bu tasarımlar, odanın dekoruna katkı sağlar.
                            </p>
                            <Link href="/somine-gruplari/elektrikli6" className='text-white border-white py-1 w-24 md:w-36 flex items-center justify-center border rounded-3xl text-xs md:text-lg mt-4 transition-colors duration-300 hover:bg-orange-500 hover:text-white'>
                                Katalog
                            </Link>
                        </div>
                    </div>
                    {/* Sağ Alt Kategori */}
                    <div className='w-full h-1/2'>
                        <div className='pt-2 flex flex-col h-full rounded-3xl bg-custom-image3 w-full text-left font-medium text-xs md:text-3xl px-6 md:px-12 transform transition-transform duration-300 hover:scale-105'>
                            <p className='text-xs md:text-lg text-[#353535]'>Şömine Grupları</p>
                            <p className='text-lg md:text-3xl font-semibold mt-4 text-gray-100'>L Tipi Şömine Hazneleri</p>
                            <p className='text-[10px] md:text-base font-semibold mt-4 text-gray-300'>
                                * L tipi şömine hazneleri, zarif tasarımı ve yüksek ısınma verimliliği ile mükemmel bir ısınma çözümü sunar.
                            </p>
                            <Link href="/somine-gruplari/elektrikli7" className='text-[#292929] border-[#4b4b4b] py-1 w-24 md:w-36 flex items-center justify-center border rounded-3xl text-xs md:text-lg mt-4 transition-colors duration-300 hover:bg-orange-500 hover:text-white'>
                                Katalog
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Catalog;
