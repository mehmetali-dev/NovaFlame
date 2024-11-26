"use client";

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { FaExpand } from 'react-icons/fa';
import Head from 'next/head';
import { pdfjs } from 'react-pdf'; // pdfjs'i import ediyoruz

// Worker'ın yolunu ayarlıyoruz
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PostContentProps {
    title: string;
    content: string;
    images: string[];
    pdf: string;
}

const Header: React.FC<PostContentProps> = ({ title, content, images, pdf }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPdfOpen, setIsPdfOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    // Slider için otomatik kaydırma
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Mobilde auto-slide
        let slideInterval: NodeJS.Timeout;
        if (isMobile) {
            slideInterval = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000); // 3 saniyede bir geçiş yapacak

            // Temizleme işlemi
            return () => clearInterval(slideInterval);
        }

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, [images.length, isMobile]);

    const nextSlide = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    const prevSlide = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);

    const openPdf = () => setIsPdfOpen(true);
    const closePdf = () => setIsPdfOpen(false);

    const toggleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <>
            {/* SEO Meta Tagleri */}
            <Head>
                <title>Anasayfa - Nova Flame</title>
                <meta name="description" content="Gaziantep, Adana, Mersin, Kahramanmaraş, Şanlıurfa, Malatya, Adıyaman, Hatay ve Tüm Güneydoğu Bölgesinde Odunlu şömine, barbekü, elektrikli şömine, ekmek fırınları, biogazlı şömine çeşitlerimiz ile sektörde siz müşterilerimize kaliteli, güvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="keywords" content="Gaziantep Şömine, Adana Şömine, Şanlıurfa Şömine, Hatay Şömine, Adıyaman Şömine, Güneydoğu Şömine, Elektrikli Şömine, Elektrikli Şömine Modelleri, bioethanol şömineler, bioethanol şömine hazneleri etanol şömine, odunlu şömineler, klasik şömine hazneleri, U tipi Şömine Hazneleri, L tipi Şömine Hazneleri, elektrikli şömine aksesuraları, barbekü şömineler, klasik şömine modelleri, barbekü şömine hazneleri, elektronik şömine," />
                <link rel="canonical" href="https://novasomine.com/" />
                <meta name="robots" content="index, follow" />
            </Head>

            <div className="flex flex-col items-center my-20 space-y-8 px-4 md:px-0">
                <div id="controls-carousel" className="relative w-full max-w-6xl" data-carousel="static">
                    <div className="relative h-64 sm:h-80 md:h-[600px] overflow-hidden rounded-lg">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                                data-carousel-item
                            >
                                <Image 
                                    src={src} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    alt={`Carousel Item ${index + 1}`} 
                                />
                            </div>
                        ))}
                    </div>

                    {/* Sol Buton - Sadece masaüstünde */}
                    {!isMobile && (
                        <button 
                            type="button" 
                            onClick={prevSlide} 
                            className="absolute top-1/2 left-4 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-gray-300 hover:bg-orange-500 transition-colors duration-200 -translate-y-1/2"
                            data-carousel-prev
                        >
                            <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </button>
                    )}

                    {/* Sağ Buton - Sadece masaüstünde */}
                    {!isMobile && (
                        <button 
                            type="button" 
                            onClick={nextSlide} 
                            className="absolute top-1/2 right-4 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-gray-300 hover:bg-orange-500 transition-colors duration-200 -translate-y-1/2"
                            data-carousel-next
                        >
                            <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span className="sr-only">Next</span>
                        </button>
                    )}
                </div>

                <div className="flex flex-col md:flex-row md:space-x-8 mt-8 w-full max-w-6xl">
                    <div className="flex-1 p-4">
                        <h3 className="font-bold text-2xl md:text-3xl">{title}</h3>
                        <p className="mt-4 text-gray-600 text-lg md:text-3xl font-roboto-slab min-h-[200px]">
                            {content}
                        </p>
                    </div>

                    {/* PDF Kartı */}
                    <div className="w-full md:w-1/4 p-4 bg-gray-200 rounded-lg shadow-lg cursor-pointer flex flex-col">
                        <div className="flex justify-between items-center">
                            <h4 className="font-semibold text-lg">Ürün Kataloğu</h4>
                            <button onClick={toggleFullScreen} className="text-gray-600 hover:text-black">
                                <FaExpand className="w-5 h-5" />
                            </button>
                        </div>
                        <div id="Pdfline" className="mt-2 flex-grow h-60 overflow-hidden">
                            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                                <Page pageNumber={pageNumber} />
                            </Document>
                        </div>
                        <a 
                            href="/katalog.pdf" 
                            download 
                            className="mt-4 inline-block text-center bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-2 px-4 rounded transition-colors duration-200"
                        >
                            PDF İndir
                        </a>
                    </div>
                </div>

                {/* PDF Tam Ekran Görüntüleyici */}
                {isPdfOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="relative w-full max-w-4xl h-[80vh] bg-white rounded-lg p-4 overflow-auto">
                            <button onClick={closePdf} className="absolute top-2 right-2 text-gray-600 hover:text-black">
                                Kapat
                            </button>
                            <div className="h-full">
                                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pageNumber} />
                                </Document>
                            </div>
                        </div>
                    </div>
                )}

                {/* Tam Ekran Açma Durumu */}
                {isFullScreen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="relative w-[80%] max-w-[900px] h-[80%] bg-white rounded-lg p-4 overflow-auto shadow-lg">
                            <button
                                onClick={toggleFullScreen}
                                className="absolute top-2 right-2 text-gray-600 hover:text-orange-500 transition-colors duration-200 text-sm font-semibold z-50"
                            >
                                Kapat
                            </button>
                            <div className="h-full z-10">
                                <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
                                    <Page pageNumber={pageNumber} />
                                </Document>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
