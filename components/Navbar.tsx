'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { menuItem } from '@/constants/menu';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Head from 'next/head'; 

const Navbar = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // Mobil menü açma-kapama durumu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
        <nav className="flex items-center justify-between w-full px-5 py-6 bg-transparent relative z-10">
            {/* Logo ve Menü Butonu */}
            <div className="flex items-center gap-5">
    {/* Menü Butonu - Mobilde Görünür */}
    <div className="block md:hidden" onClick={toggleMenu}>
      <Image src="/menu.svg" alt="menu-icon" width={25} height={25} />
    </div>
    {/* Logo Tıklanabilir hale getirildi */}
    <Link href="/">
      
        <h1 className="font-semibold text-2xl md:text-3xl">
          <Image src="/novasominelogo.webp" alt="logo" width={120} height={120} />
        </h1>
      
    </Link>
  </div>

            {/* Menü Linkleri - Masaüstü için */}
            <div className="hidden md:flex px-1 gap-5 font-semibold text-lg">
                {menuItem.map((item) => (
                    <Link
                        href={item.href}
                        key={item.name}
                        className="flex items-center gap-2 hover:text-[#F06B1C]"
                    >
                        <p>{item.name}</p>
                    </Link>
                ))}
            </div>

            {/* Teklif Al Butonu (Masaüstü) */}
            <div className="hidden md:flex gap-3">
                <Link
                    href="/"
                    className="bg-[#F06B1C] px-3 py-1 rounded-2xl text-sm md:text-xl text-white flex items-center gap-2 font-medium hover:bg-[#ff975a]"
                    onClick={() => window.location.href = "https://wa.me/+905336929890"}
                >
                    Teklif Al
                    <Image src="/wp.svg" alt="wp" width={16} height={16} />
                </Link>
            </div>

            {/* Mobil Menü (Soldan açılır) */}
            <div
                className={`fixed top-0 left-0 min-h-screen w-[250px] bg-white shadow-lg transition-transform duration-300 z-20 ${
                    isMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'
                } md:hidden`}
            >
                <div className="flex justify-between items-center p-5">
                    <h1 className="font-semibold text-2xl">
                        <Image src="/novasominelogo.webp" alt="logo" width={120} height={120} />
                    </h1>
                    <button onClick={toggleMenu} className="text-xl text-black">X</button>
                </div>

                <div className="flex flex-col items-start p-5">
                    {menuItem.map((item) => (
                        <Link
                            href={item.href}
                            key={item.name}
                            className={`py-3 text-lg font-semibold text-gray-800 hover:text-[#F06B1C] w-full`}
                            onClick={() => setIsMenuOpen(false)}  // Menü öğesine tıklanınca menüyü kapat
                        >
                            {item.name}
                        </Link>
                    ))}
                    
                    {/* Teklif Al Butonu - Mobilde Menü Altına Eklendi */}
                    <Link
    href="https://wa.me/+905336929890"
    className="bg-[#F06B1C] px-3 py-2 rounded-2xl text-sm text-white flex items-center gap-2 font-medium mt-5 hover:bg-[#ff975a]"
    onClick={() => window.location.href = "https://wa.me/+905336929890"}  // Buraya kendi WhatsApp numaranızı yazın
>
    Teklif Al
    <Image src="/wp.svg" alt="wp" width={16} height={16} />
</Link>
                </div>
            </div>

            {/* Sayfa açıldığında, menü açıkken arka planı kilitle */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-10 ${
                    isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                } md:hidden`}
                onClick={toggleMenu}  // Arka plana tıklandığında menüyü kapat
            ></div>
        </nav>
        </>
    );
};

export default Navbar;
