import React from 'react';
import { Logo } from "@/constants/logo"; // Logo sabitini doğru şekilde import edin
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Slider = () => {
  return (
    <>
      {/* SEO Meta Tagleri */}
      <Head>
        <title>Anasayfa - Nova Flame</title>
        <meta name="description" content=" Gaziantep, Adana, Mersin, Kahramanmaraş, Şanlıurfa, Malatya, Adıyaman, Hatay Ve Tüm Güneydoğu Bölgesinde Odunlu şömine, barbekü, elektrikli şömine, ekmek fırınları, biogazlı şömine çeşitlerimiz ile sektörde siz müşterilerimize kaliteli, güvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Gaziantep Şömine, Adana Şömine, Şanlıurfa Şömine, Hatay Şömine, Adıyaman Şömine, Güneydoğu Şömine, Elektrikli Şömine, Elektrikli Şömine Modelleri, elektrikli somine, elektrikli şömine üreticileri, elektrikli şömine modelleri ve fiyatları, elektrikli şömine 150cm, tektes şömine, elektrikli şömine malatya, elektrikli şömine çeşitleri, elektrikli somine modelleri, hazır şömine modelleri, şömine fiyatları, şömine elektrik, zaya şömine, , flameline şömine, dekoratif şömine, 150cm elektrikli şömine, hazir sömine, odun şömine fiyatları, elektrikli şömine tasarımları, elektrikli şömine dekorasyon, elektrikli şömine haznesi, dlc şömine, şömine elektrikli, portatif elektrikli şömine, elk şömine, taşınılabilir elektrikli şömine, elektrikli şömine görselleri, elektronik şömine, salon elektrikli şömine," />
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

      <div className="my-36">
        <div className="mx-auto max-w-4xl lg:text-center max-md:text-center max-xl:text-center mb-28">
          <h2 className="text-base font-semibold leading-7 text-[#F06B1C] ">Nova Şömine</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Sektöre Değer Katan Ortaklar</p>
          <p className="mt-6 text-lg leading-8 text-gray-600">Nova Şömine, yenilikçi tasarımları ve kaliteli ürünleriyle sektöre değer katıyor. Ortaklarımızla birlikte, estetik ve enerji verimliliğini birleştirerek müşteri memnuniyetini ön planda tutuyoruz.</p>
        </div>

        <div className="relative m-auto w-[1530px] max-md:w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(230px*10)] gap-16">
            {Logo.map((logo, index) => (
              <div
                className="slide flex w-[125px] items-center justify-center"
                key={index}
              >
                <Link href={logo.href}>
                  <a>
                    <Image src={logo.svg} alt={logo.name} width={500} height={500} className="opacity-50 hover:opacity-100" />
                  </a>
                </Link>
              </div>
            ))}
            {Logo.map((logo, index) => (
              <div
                className="slide flex w-[125px] items-center justify-center"
                key={index}
              >
                <Link href={logo.href}>
                  <a>
                    <Image src={logo.svg} alt={logo.name} width={500} height={500} className="opacity-50 hover:opacity-100" />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Slider;
