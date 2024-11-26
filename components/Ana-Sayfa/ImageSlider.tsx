import { useState, useEffect } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import image1 from "@/public/banner.webp";
import image2 from "@/public/banner2.jpg";
import image3 from "@/public/banner3.jpg";
import image4 from "@/public/deneme.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Head from 'next/head'; 

// Interface for image data
interface ImageData {
  src: StaticImageData;
}

// Image data array
const images: ImageData[] = [
  {
    src: image1,
  },
  {
    src: image2,
  },
  {
    src: image3,
  },
  {
    src: image4,
  },
];

export default function ImageSlider(): JSX.Element {
  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // State to determine if the image is being hovered over
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Function to show the previous slide
  const prevSlide = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Function to show the next slide
  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // useEffect hook to handle automatic slide transition
  useEffect(() => {
    // Start interval for automatic slide change if not hovered
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);

      // Cleanup the interval on component unmount
      return () => {
        clearInterval(interval);
      };
    }
  }, [isHovered]);

  // Handle mouse over event
  const handleMouseOver = (): void => {
    setIsHovered(true);
  };

  // Handle mouse leave event
  const handleMouseLeave = (): void => {
    setIsHovered(false);
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

    <div className="relative w-full mx-auto mt-4">
      <div
        className="relative h-[460px] mx-12 group"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Image
          src={images[currentIndex].src}
          alt={`Slider Image ${currentIndex + 1}`}
          layout="fill"
          objectFit="cover"
          className="rounded-xl transition-all duration-500 ease-in-out cursor-pointer hover:scale-105" // hover efekti için scale ekledik
        />
      </div>
      <button
        className="absolute left-0 top-1/2 transform h-[459px] rounded-xl  mx-1 -mt-[10px] -translate-y-1/2 text-black p-2 group"
        onClick={prevSlide}
      >
        <ChevronLeft className="text-gray-600 group-hover:text-gray-400" />
      </button>
      <button
        className="absolute right-0 top-1/2 transform h-[459px] rounded-xl  mx-1 -mt-[10px] -translate-y-1/2 text-black p-2 group"
        onClick={nextSlide}
      >
        <ChevronRight className="text-gray-600 group-hover:text-gray-400" />
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-1 w-10 mx-1 ${
              index === currentIndex
                ? "bg-[#F06B1C] rounded-xl"
                : "bg-gray-300 rounded-xl"
            } transition-all duration-500 ease-in-out`}
          ></div>
        ))}
      </div>
    </div>
    </>
  );
}
