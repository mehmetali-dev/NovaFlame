"use client";

import Image from "next/image";
import db from "@/app/db/gallery.json";


import { useState } from "react";
import Head from 'next/head';
import DynamicTabs from "./ToggleDetails";

const Gallery = () => {

  return (
    <>
      {/* SEO Meta Tagleri */}
      <Head>
        <title>Anasayfa - Nova Flame</title>
        <meta name="description" content=" Gaziantep, Adana, Mersin, Kahramanmaraş, Şanlıurfa, Malatya, Adıyaman, Hatay Ve Tüm Güneydoğu Bölgesinde Odunlu şömine, barbekü, elektrikli şömine, ekmek fırınları, biogazlı şömine çeşitlerimiz ile sektörde siz müşterilerimize kaliteli, güvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Gaziantep Şömine, Adana Şömine, Şanlıurfa Şömine, Hatay Şömine, Adıyaman Şömine, Güneydoğu Şömine, Elektrikli Şömine, Elektrikli Şömine Modelleri, bioethanol şömineler, bioethanol şömine hazneleri etanol şömine, odunlu şömineler, klasik şömine hazneleri, U tipi Şömine Hazneleri, L tipi Şömine Hazneleri, elektrikli şömine aksesuraları, barbekü şömineler, klasik şömine modelleri, barbekü şömine hazneleri, elektronik şömine," />
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

      <div className="mx-auto mt-20 max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-orange-600">Nova Şömine</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-2xl lg:text-6xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
          Uygulamalarımız
        </p>
      </div>
      <div className="flex w-full items-center justify-center mt-10">
        <DynamicTabs />
      </div>

    </>
  );
};

export default Gallery;
