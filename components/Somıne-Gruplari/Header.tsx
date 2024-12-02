'use client'

import React, { useState } from 'react';
import { Button, Modal } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'; 

type ModalContentType = {
    title: string;
    description: string;
    link: string;
};

const Header: React.FC = () => {
    const [open, setOpen] = useState<{ id: number | null; isOpen: boolean }>({ id: null, isOpen: false });
    const [selectedOption, setSelectedOption] = useState('yes'); // Default selected option

    const handleChange = (event:any) => {
      setSelectedOption(event.target.value); // Update state when selection changes
    };


    const handleOpen = (id: number) => setOpen({ id, isOpen: true });
    const handleClose = () => setOpen({ id: null, isOpen: false });

    const modalContent: Record<number, ModalContentType> = {
        1: { title: "Orta Şömine Hazneleri", description: "Orta şömine hazneleri, şık tasarımıyla evinize sıcaklık ve estetik katar.", link: "/somine-gruplari/Orta-Somine" },
        2: { title: "Elektrikli Şömineler", description: "Elektrikli şömineler, pratik ısınma ve modern tasarımlarıyla mekanları güzelleştirir.", link: "/somine-gruplari/Elektrikli-Somine" },
        3: { title: "Bioethanol Şömine Hazneleri", description: "Bioethanol şömine hazneleri, temiz enerjiyle şık ısınma ve ambiyans yaratır.", link: "/somine-gruplari/Bioetanol-Somine" },
        4: { title: "Barbeküler", description: "Barbeküler, açık havada keyifli yemek pişirme ve sosyal anlar sunar.", link: "/somine-gruplari/Barbeku" },
        5: { title: "Klasik Şömine Hazneleri", description: "Klasik şömine hazneleri, geleneksel ısınma ve rustik atmosfer sağlar.",  link: "/somine-gruplari/Klasik-Somine", },
        6: { title: "U Tipi Şömine Hazneleri", description: "U tipi şömine hazneleri, modern tasarımı ve yüksek verimiyle ısınma sağlar.", link: "/somine-gruplari/U-Tipi-Somine" },
        7: { title: "L Tipi Şömine Hazneleri ", description: "L tipi şömine hazneleri, şık tasarımı ve güçlü ısınma performansıyla ideal.", link: "/somine-gruplari/L-Tipi-Somine" },
        8: { title: "Şömine Aksesuarları", description: "Şömine aksesuarları, şöminenizi tamamlar ve kullanım kolaylığı sağlar.", link: "/somine-gruplari/Somine-Aksesuarlari" },
        9: { title: "Gazlı Şömine Hazneleri", description: "Gazlı şömineler, modern tasarımlarla şık ve verimli ısınma sağlar.", link: "/somine-gruplari/Gazli-Somine" },
    };

    return (
        <>
        {/* SEO Meta Tagleri */}
        <Head>
        <title>Anasayfa - Nova Flame</title>
        <meta name="description" content=" Gaziantep, Adana, Mersin, Kahramanmaraş, Şanlıurfa, Malatya, Adıyaman, Hatay Ve Tüm Güneydoğu Bölgesinde Odunlu şömine, barbekü, elektrikli şömine, ekmek fırınları, biogazlı şömine çeşitlerimiz ile sektörde siz müşterilerimize kaliteli, güvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="Gaziantep Şömine, Adana Şömine, Şanlıurfa Şömine, Hatay Şömine, Adıyaman Şömine, Güneydoğu Şömine, Elektrikli Şömine, Elektrikli Şömine Modelleri, bioethanol şömineler, bioethanol şömine hazneleri etanol şömine, odunlu şömineler, klasik şömine hazneleri, U tipi Şömine Hazneleri, L tipi Şömine Hazneleri, elektrikli şömine aksesuraları, barbekü şömineler, klasik şömine modelleri, barbekü şömine hazneleri, elektronik şömine,  " />
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
 
            <div>
                <Modal
                    aria-labelledby="unstyled-modal-title"
                    aria-describedby="unstyled-modal-description"
                    open={open.isOpen}
                    onClose={handleClose}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                >
                    <div style={{ width: 400, padding: 20, backgroundColor: 'white', margin: 'auto', borderRadius: 8 }}>
                        {/* Check if open.id is not null and exists in modalContent */}
                        {open.id !== null && modalContent[open.id] && (
                            <>
                                {/* Başlığı kalınlaştırdık */}
                                <h2 id="unstyled-modal-title" className="font-bold">
                                    {modalContent[open.id].title}
                                </h2>
                                <p id="unstyled-modal-description" className='mb-5'>
                                    {modalContent[open.id].description}
                                </p>
                                <Link href={modalContent[open.id].link} className='border p-2 border-black rounded-md'>
                                    İncele
                                </Link>
                            </>
                        )}
                    </div>
                </Modal>
            </div>
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-orange-600">Nova Şömine</h2>
                <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
                    Şömine Grupları
                </p>
                <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2 transition-transform duration-300 hover:scale-105" onClick={() => handleOpen(1)}>
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <a href='#'>Orta Şömine Hazneleri</a>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
Orta şömine hazneleri, şık tasarımıyla evinize sıcaklık ve estetik katar.
                                </p>
                            </div>
                            <div className="flex flex-1">
    <Image
        className=" " // İstediğiniz stil sınıflarını burada kullanabilirsiniz
        src="/smn1.jpeg" // Görselin yolu
        alt="" // Alternatif metin
        width={500} // Görselin genişliği (istediğiniz boyuta göre ayarlayın)
        height={300} // Görselin yüksekliği (istediğiniz boyuta göre ayarlayın)
    />
</div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1 transition-transform duration-300 hover:scale-105" onClick={() => handleOpen(2)}>
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <Link href='#'> Elektrikli Şömineler</Link>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                Elektrikli şömineler, pratik ısınma ve modern tasarımlarıyla mekanları güzelleştirir.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center h-full">
            <Image
                className="max-w-[80%] max-h-[70%] object-cover object-center"
                src="/VP80.png"
                alt="Elektrikli Şömineler"
                width={500} // İhtiyaca göre ayar yapabilirsiniz
                height={300} // İhtiyaca göre ayar yapabilirsiniz
            />
        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 transition-transform duration-300 hover:scale-105" onClick={() => handleOpen(3)}>
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <a href="#">Bioethanol Şömine Hazneleri</a>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                Bioethanol şömine hazneleri, temiz enerjiyle şık ısınma ve ambiyans yaratır.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center h-full">
            <Image
                className="w-[min(300px,65cqw)] h-full object-contain"
                src="/ethanol.png"
                alt="Bioethanol Şömine Hazneleri"
                width={500} // İhtiyaca göre ayar yapabilirsiniz
                height={300} // İhtiyaca göre ayar yapabilirsiniz
            />
        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2 transition-transform duration-300 hover:scale-105" onClick={() => handleOpen(4)}>
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <a href="#">Barbeküler</a>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                Barbeküler, açık havada keyifli yemek pişirme ve sosyal anlar sunar.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center h-full">
            <Image
                className="object-cover object-center w-full h-full"
                src="/barbekü.jpeg"
                alt="Barbeküler"
                width={500} // İhtiyaca göre ayar yapabilirsiniz
                height={300} // İhtiyaca göre ayar yapabilirsiniz
            />
        </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>

{/* Yeni Eklenen Kısım */}

<div className=" grid gap-4 sm:mt-6 lg:grid-cols-3 lg:grid-rows-2">
                    <div className="relative lg:row-span-2 transition-transform duration-300 hover:scale-105" onClick={() => handleOpen(5)}>
                        <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <Link href='#'>Klasik Şömine Hazneleri</Link>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                Klasik şömine hazneleri, geleneksel ısınma ve rustik atmosfer sağlar.
                                </p>
                            </div>
                            <div className="flex flex-1 w-full h-full">
                <Image
                    className="w-full h-full"
                    src="/düz.jpeg"
                    alt="Klasik Şömine Hazneleri"
                    width={500} // İhtiyaca göre ayar yapabilirsiniz
                    height={300} // İhtiyaca göre ayar yapabilirsiniz
                />
            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-1 transition-transform duration-300 hover:scale-105" onClick={() => handleOpen(6)}>
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <Link href='#'> U Tipi Şömine Hazneleri </Link>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                U tipi şömine hazneleri, modern tasarımı ve yüksek verimiyle ısınma sağlar.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center h-full">
                <Image
                    className="max-w-[80%] max-h-[70%] object-cover object-center"
                    src="/u1.jpeg"
                    alt="U Tipi Elektrikli Şömineler"
                    width={900} // İhtiyaca göre ayar yapabilirsiniz
                    height={300} // İhtiyaca göre ayar yapabilirsiniz
                />
            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]"></div>
                    </div>
                    <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 transition-transform duration-300 hover:scale-105" onClick={() => handleOpen(7)}>
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <a href="#">L Tipi Şömine Hazneleri</a>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                L tipi şömine hazneleri, şık tasarımı ve güçlü ısınma performansıyla ideal.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center h-full">
                <Image
                    className="w-[min(300px,65cqw)] h-full object-contain"
                    src="/l1.jpeg"
                    alt="Bioethanol Şömine Hazneleri"
                    width={500} // İhtiyaca göre ayar yapabilirsiniz
                    height={300} // İhtiyaca göre ayar yapabilirsiniz
                />
            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5"></div>
                    </div>
                    <div className="relative lg:row-span-2 transition-transform duration-300 hover:scale-105" onClick={() => handleOpen(8)}>
                        <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                            <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <Link href="#">Şömine Aksesuarları</Link>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                Şömine aksesuarları, şöminenizi tamamlar ve kullanım kolaylığı sağlar.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center h-full">
                <Image
                    className="object-cover object-center w-full h-full"
                    src="/aksesuar.jpg"
                    alt="Şömine Aksesuarları"
                    width={500} // İhtiyaca göre ayar yapabilirsiniz
                    height={300} // İhtiyaca göre ayar yapabilirsiniz
                />
            </div>
                        </div>
                        <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
                    </div>
                </div>

                <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 transition-transform duration-300 hover:scale-105 mt-3 border border-gray-300 rounded-lg" onClick={() => handleOpen(9)}>
                        <div className="absolute inset-px rounded-lg bg-white"></div>
                        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                            <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                                <p className="mt-2 text-lg/7 font-medium tracking-tight text-gray-950 max-lg:text-center">
                                    <a href="#">Doğalgazlı Şömine Hazneleri</a>
                                </p>
                                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                                DoğalgazlıGazlı şömineler, modern tasarımlarla şık ve verimli ısınma sağlar.
                                </p>
                            </div>
                            <div className="flex flex-1 items-center justify-center h-full ">
    <Image
        className="w-[min(500px,80vw)] h-[50%] object-contain"
        src="/gazlı.jpeg"
        alt="Bioethanol Şömine Hazneleri"
        width={800}  // Bu değeri ihtiyaca göre değiştirebilirsiniz
        height={400} // Bu değeri ihtiyaca göre değiştirebilirsiniz
    />

        </div>
            </div>
        </div>
        </div>
        </div>
        </>
    );
};



export default Header;
