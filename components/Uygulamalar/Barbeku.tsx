import React, { useState } from 'react';
import db from "@/app/db/gallery.json";
import Image from 'next/image';
import '/app/globals.css';

const Barbekü = () => {
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [imgPop, setImgPop] = useState<boolean>(false);
  const filteredData = db.gallery.filter(item => item.id === 2);

  // Resmi değiştirme fonksiyonu
  const swipeImg = (moveType: string) => {
    const totalImages = filteredData.length;  // Filtrelenmiş verinin uzunluğunu alıyoruz

    if (moveType === "prv") {
      // İlk resimden önceki resme gitmek için son resme dönüyoruz
      if (selectedImg === 0) setSelectedImg(totalImages - 1);
      else setSelectedImg(selectedImg - 1);
    }

    if (moveType === "nxt") {
      // Son resimden sonra ilk resme gitmek için başa dönüyoruz
      if (selectedImg === totalImages - 1) setSelectedImg(0);
      else setSelectedImg(selectedImg + 1);
    }
  };

  // Sağ tıklamayı engelleyen fonksiyon
  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Sağ tıklama menüsünü engelle
  };

  return (
    <>
      {/* Galeri Kartları */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 mb-20 px-6 sm:px-12">
        {filteredData.map((loc, i) => (
          <div
            onClick={() => {
              setSelectedImg(i);
              setImgPop(true);
            }}
            key={i}
            className="w-full max-w-[500px] bg-white border border-gray-200 rounded-lg shadow cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gray-50"
          >
            <a href="#">
              <div className="relative">
                <Image
                  className="rounded-t-lg w-full h-72 object-cover"
                  src={`/galleryimg/${loc.img}`} // Görsel yolunu buradan alıyoruz
                  alt={loc.location}
                  width={400}
                  height={300}
                  onContextMenu={handleRightClick} // Sağ tıklama engellemeyi sadece bu resme ekliyoruz
                />
                {/* Logo Eklemek */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Image
                    src="/novasominelogo.webp" // Logo görselinin yolu
                    alt="Logo"
                    width={100}
                    height={100}
                    className="opacity-50"
                  />
                </div>
              </div>
            </a>
            <div className="p-5">
              <a href="#" className="flex items-center">
                <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-950">
                  {loc.location}
                </h5>
              </a>
              <p className="mb-3 text-sm sm:text-base font-normal text-gray-700 dark:text-gray-400">
                {loc.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Resim Pop-up Görüntüleme */}
      {imgPop && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-85 z-50 flex justify-between items-center p-4">
          <a
            onClick={() => setImgPop(false)}
            className="absolute top-2 right-2 cursor-pointer hover:bg-red-600 rounded-full p-1 transition-all ease-linear"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" className="w-6 h-6">
              <circle cx="64" cy="64" r="64" fill="transparent" />
              <path
                d="m100.3,90.4l-26.4-26.4,26.3-26.4c.4-.4.4-1,0-1.4l-8.5-8.5c-.4-.4-1-.4-1.4,0l-26.3,26.4-26.3-26.3c-.4-.4-1-.4-1.4,0l-8.5,8.5c-.4.4-.4,1,0,1.4l26.2,26.3-26.3,26.3c-.4.4-.4,1,0,1.4l8.5,8.5c.4.4,1.1.4,1.4.1l26.4-26.3,26.3,26.3c.4.4,1.1.4,1.5.1l8.5-8.5c.4-.4.4-1,0-1.4Z"
                fill="#fff"
              />
            </svg>
          </a>

          <a
            onClick={() => swipeImg("prv")}
            className="rounded-full p-2 hover:bg-orange-500 transition-all ease-linear cursor-pointer"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-white"
            >
              <path
                clipRule="evenodd"
                d="M15.0303 6.46967C15.3232 6.76256 15.3232 7.23744 15.0303 7.53033L10.5607 12L15.0303 16.4697C15.3232 16.7626 15.3232 17.2374 15.0303 17.5303C14.7374 17.8232 14.2626 17.8232 13.9697 17.5303L8.96967 12.5303C8.82902 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.82902 11.6103 8.96967 11.4697L13.9697 6.46967C14.2626 6.17678 14.7374 6.17678 15.0303 6.46967Z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <div className="flex flex-col items-center">
            <Image
              src={`/galleryimg/${filteredData[selectedImg].img}`} // Burada da doğru yolu kullanıyoruz
              alt={filteredData[selectedImg].location}
              width={1200}
              height={600}
              className="w-full max-w-[1200px] h-auto mb-4 relative"
              onContextMenu={handleRightClick}
            />
            {/* Ortada Logo */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/novasominelogo.webp"
                alt="Logo"
                width={150}
                height={150}
                className="opacity-100"
              />
            </div>

            <div className="flex items-center justify-center gap-4 w-full mb-4">
              <h3 className="text-center text-white font-medium uppercase text-sm sm:text-base">
                {filteredData[selectedImg].location}
              </h3>
              <p className="text-center text-white text-xs sm:text-sm">
                {filteredData[selectedImg].description}
              </p>
            </div>
          </div>

          <a
            onClick={() => swipeImg("nxt")}
            className="rounded-full p-2 hover:bg-orange-500 transition-all ease-linear cursor-pointer"
          >
            <svg
              fill="none"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 fill-white"
            >
              <path
                clipRule="evenodd"
                d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
                fillRule="evenodd"
              />
            </svg>
          </a>

          <nav className="absolute left-0 right-0 bottom-1 flex justify-center gap-3 px-5">
            {filteredData.map((loc, i) => (
              <a
                onClick={() => setSelectedImg(i)}
                className={`hover:-translate-y-2 transition-all ease-linear cursor-pointer ${
                  selectedImg === i ? "-translate-y-2" : ""
                }`}
                key={i}
              >
                <Image
                  src={`/galleryimg/${loc.img}`}  // Görsel yolu burada da doğru olmalı
                  alt={loc.location}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Barbekü;
