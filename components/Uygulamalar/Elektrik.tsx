import React, { useState } from "react";
import db from "@/app/db/gallery.json";
import Image from "next/image";
import "/app/globals.css";

const Elektrik = () => {
  const [selectedImg, setSelectedImg] = useState<number>(0);
  const [imgPop, setImgPop] = useState<boolean>(false);
  const filteredData = db.gallery.filter((item) => item.id === 1);

  const handleRightClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Sağ tıklama menüsünü engeller
    console.log("Sağ tıklama engellendi");
  };

  const swipeImg = (moveType: string) => {
    const totalImages = filteredData.length;

    if (moveType === "prv") {
      setSelectedImg(selectedImg === 0 ? totalImages - 1 : selectedImg - 1);
    }

    if (moveType === "nxt") {
      setSelectedImg(selectedImg === totalImages - 1 ? 0 : selectedImg + 1);
    }
  };

  const handleSwipe = (e: React.TouchEvent) => {
  const touchStart = e.touches[0].clientX;

  // "moveEvent" parametresinin türünü 'Event' yerine 'TouchEvent' olarak değiştirmek yerine 
  // 'EventListener' ile uyumlu hale getireceğiz.
  const handleTouchMove = (moveEvent: Event) => { // Parametreyi Event olarak güncelledik
    // moveEvent'in tipini doğru şekilde TouchEvent olarak belirtiyoruz
    const touchMoveEvent = moveEvent as TouchEvent;  // TypeScript'e türü belirtiyoruz
    const touchEnd = touchMoveEvent.touches[0].clientX;

    if (touchStart - touchEnd > 50) {
      swipeImg("nxt");
    } else if (touchEnd - touchStart > 50) {
      swipeImg("prv");
    }
  };

  // 'e.target' tipinin 'EventTarget' olduğunu biliyoruz, bu yüzden onu HTML elementine çeviriyoruz
  const target = e.target as HTMLElement; // Target'ın HTML element olduğunu belirtiyoruz

  target.addEventListener("touchmove", handleTouchMove, { passive: true });
  target.addEventListener("touchend", () => {
    target.removeEventListener("touchmove", handleTouchMove);
  });
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
            <div className="relative">
              <Image
                className="rounded-t-lg w-full h-72 object-cover"
                src={`/galleryimg/${loc.img}`}
                alt={loc.location}
                width={400}
                height={300}
                onContextMenu={handleRightClick}
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/novasominelogo.webp"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="opacity-100"
                />
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center">
                <Image
                  src="/location.svg"
                  alt="Location icon"
                  width={24}
                  height={24}
                  className="mr-2 mb-3"
                />
                <h5 className="mb-2 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 ">
                  {loc.location}
                </h5>
              </div>
              <p className="mb-3 text-sm sm:text-base font-normal text-gray-700">
                {loc.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Resim Pop-up Görüntüleme */}
      {imgPop && (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-85 z-50 flex justify-between items-center p-4 ${
            imgPop ? "flex" : "hidden"
          }`}
        >
          {/* Kapatma Butonu */}
          <a
            onClick={() => setImgPop(false)}
            className="absolute top-2 right-2 cursor-pointer hover:bg-red-600 rounded-full p-1 transition-all ease-linear"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="w-6 h-6"
            >
              <path
                d="m100.3,90.4l-26.4-26.4,26.3-26.4c.4-.4.4-1,0-1.4l-8.5-8.5c-.4-.4-1-.4-1.4,0l-26.3,26.4-26.3-26.3c-.4-.4-1-.4-1.4,0l-8.5,8.5c-.4.4-.4,1,0,1.4l26.2,26.3-26.3,26.3c-.4.4-.4,1,0,1.4l8.5,8.5c.4.4,1.1.4,1.4.1l26.4-26.3,26.3,26.3c.4.4,1.1.4,1.5.1l8.5-8.5c.4-.4.4-1,0-1.4Z"
                fill="#fff"
              />
            </svg>
          </a>

          {/* Sol Buton (Sadece Masaüstünde Görünsün) */}
          <a
            onClick={() => swipeImg("prv")}
            className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 lg:p-3 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full cursor-pointer sm:block hidden"
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
                fill="#FFA500"
                fillRule="evenodd"
              />
            </svg>
          </a>

          {/* Resim */}
          <div
            className="flex flex-col items-center w-full h-full"
            onTouchStart={handleSwipe}
          >
            <Image
              src={`/galleryimg/${filteredData[selectedImg].img}`}
              alt={filteredData[selectedImg].location}
              width={1200}
              height={900}
              className="w-full h-full object-contain z lg:h-[85vh] " // Masaüstü için daha büyük yükseklik
              onContextMenu={handleRightClick}
            />

{/* Ortada Logo */}
<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/novasominelogo.webp"  // Logo yolunu belirtin
                alt="Logo"
                width={150} // Logo boyutunu ihtiyaca göre ayarlayın
                height={150}
                className="opacity-50"  // Şeffaflık
              />
            </div>

            {/* Resim Açıklaması */}
            <p className="text-white text-sm sm:text-base mt-4 text-center">
              {filteredData[selectedImg].description}
            </p>

            {/* Altta Küçük Resim Galerisi */}
            <div className="flex mt-4 gap-2 overflow-x-auto">
              {filteredData.map((img, index) => (
                <Image
                  key={index}
                  src={`/galleryimg/${img.img}`}
                  alt={img.location}
                  width={80}
                  height={60}
                  className={`cursor-pointer rounded-lg border ${
                    selectedImg === index
                      ? "border-yellow-400"
                      : "border-gray-700 hover:border-gray-400"
                  }`}
                  onClick={() => setSelectedImg(index)}
                />
              ))}
            </div>
          </div>

          {/* Sağ Buton (Sadece Masaüstünde Görünsün) */}
<a
  onClick={() => swipeImg("nxt")}
  className="absolute right-2 sm:right-5 top-1/2 transform -translate-y-1/2 p-1 sm:p-2 lg:p-3 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 rounded-full cursor-pointer sm:block hidden"
>
  <svg
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
  >
    <path
      clipRule="evenodd"
      d="M8.96967 6.46967C8.67678 6.17678 8.17678 6.17678 7.88388 6.46967C7.59099 6.76256 7.59099 7.23744 7.88388 7.53033L12.3536 12L7.88388 16.4697C7.59099 16.7626 7.59099 17.2374 7.88388 17.5303C8.17678 17.8232 8.67678 17.8232 8.96967 17.5303L13.9697 12.5303C14.2626 12.2374 14.2626 11.7626 13.9697 11.4697L8.96967 6.46967Z"
      fill="#FFA500" // Turuncu renk
      fillRule="evenodd"
    />
  </svg>
</a>
        </div>
      )}
    </>
  );
};

export default Elektrik;
