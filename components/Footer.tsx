import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'; 

const Footer = () => {
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

    <footer className="bg-[#f2f2f2]">
      <div className="mx-auto max-w-screen-xl space-y-8 px-2 py-16 sm:px-6 lg:space-y-16 lg:px-4">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="text-teal-600 mb-8">
            <Link href="/">
  <Image
    src="/novasominelogo.webp"
    alt="menu-icon"
    width={250}
    height={150}
    className="transition-transform duration-300 ease-in-out hover:scale-110"
  />
</Link>
            </div>


            <p className="mt-4 max-w-xs text-gray-500">
              Odunlu şömine, barbekü, elektrikli şömine, ekmek fırınları, biogazlı şömine çeşitlerimiz ile sektörde siz müşterilerimize kaliteli, güvenilir ve ekonomik hizmetler sunmaya kararlılıkla devam etmekteyiz.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <Link
                  href="https://www.facebook.com/share/2oG5jo6SfQHKLxbJ/?mibextid=LQQJ4d"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>

              <li>
                <Link
                  href="https://www.instagram.com/novasomine?igsh=MWNyN2dtODJ1Z3Exeg=="
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/@flamelinesomine8117"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >
                  <span className="sr-only">Youtube</span>

                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg>
                </Link>
              </li>

              <li>
                <Link
                  href="#"
                  rel="noreferrer"
                  target="_blank"
                  className="text-gray-700 transition hover:opacity-75"
                >

                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">Hizmetlerimiz</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a className="text-gray-700 transition hover:opacity-75"> Ücretsiz Kurulum </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:opacity-75"> Garanti Ve Bakım </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:opacity-75">Teknik Servis  </a>
                </li>

                <li>
                  <a className="text-gray-700 transition hover:opacity-75"> Kolay İade </a>
                </li>


              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Şömine Grupları</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/somine-gruplari/Elektrikli-Somine" className="text-gray-700 transition hover:opacity-75"> Elektrikli Şömineler </Link>
                </li>

                <li>
                  <Link href="/somine-gruplari/Orta-Somine" className="text-gray-700 transition hover:opacity-75"> Orta Şömine Hazneleri</Link>
                </li>

                <li>
                  <Link href="/somine-gruplari/Klasik-Somine" className="text-gray-700 transition hover:opacity-75"> Klasik Şömine Hazneleri  </Link>
                </li>
               
                <li>
                  <Link href="/somine-gruplari/Barbeku" className="text-gray-700 transition hover:opacity-75"> Barbekü Şömineler  </Link>
                </li>
                <li>
                  <Link href="/somine-gruplari/Bioetanol-Somine" className="text-gray-700 transition hover:opacity-75"> etanol Şömine Hazneleri  </Link>
                </li>
                <li>
                  <Link href="/somine-gruplari/Somine-Aksesuarlari" className="text-gray-700 transition hover:opacity-75"> Şömine Aksesuarları   </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Bağlantılar</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link href="/" className="text-gray-700 transition hover:opacity-75"> Anasayfa </Link>
                </li>

                <li>
                  <Link href="/#hakkimizda" className="text-gray-700 transition hover:opacity-75"> Hakkımızda </Link>
                </li>

                <li>
                  <Link href="/somine-gruplari" className="text-gray-700 transition hover:opacity-75"> Şömine Grupları  </Link>
                </li>
                <li>
                  <Link href="/pelet-sobalari" className="text-gray-700 transition hover:opacity-75"> Pelet Sobaları  </Link>
                </li>
                <li>
                  <Link href="/uygulamalar" className="text-gray-700 transition hover:opacity-75"> Uygulamalarımız  </Link>
                </li>
                <li>
                  <Link href="/iletisim" className="text-gray-700 transition hover:opacity-75"> İletişim  </Link>
                </li>
              </ul>
            </div>

            <div>
              <div>
                <p className="font-medium text-gray-900">İletişim Bilgileri</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link href="tel:05336929890" className="text-gray-700 transition hover:opacity-75 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} className="mr-2">
                        <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
                      </svg>
                      +90 533 692 98 90
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="https://maps.app.goo.gl/TQLU6PMQKguhoHew7"
                      className="text-gray-700 transition hover:opacity-75 flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        width={100}  // Masaüstü için varsayılan genişlik
                        className="mr-5 sm:w-16 md:w-16 lg:w-16 xl:w-16 2xl:w-16 w-8"  // Masaüstü boyutu aynı kalacak, mobilde küçülme
                      >
                        <g data-name="Search Map">
                          <path d="M30.58 4.19a.995.995 0 0 0-.9-.14l-8.7 2.9-9.61-2.88-.08-.03a.7.7 0 0 0-.14-.03 1.064 1.064 0 0 0-.47.04l-9 3A1.014 1.014 0 0 0 1 8v19a.983.983 0 0 0 .42.81A.939.939 0 0 0 2 28a1.185 1.185 0 0 0 .32-.05l8.7-2.9 9.69 2.91c.03.01.05.01.08.02A1.492 1.492 0 0 0 21 28a1.185 1.185 0 0 0 .32-.05l9-3A1.014 1.014 0 0 0 31 24V5a.983.983 0 0 0-.42-.81zM10 23.28l-7 2.33V8.72l7-2.33zm19 0-7 2.33v-2.7a5.634 5.634 0 0 1-1 .09 6 6 0 0 1 0-12 5.47 5.47 0 0 1 1 .09V8.72l7-2.33z" />
                          <path d="M17 17a4.004 4.004 0 0 0 4 4 3.955 3.955 0 0 0 2.02-.567l1.273 1.274a1 1 0 0 0 1.414-1.414l-1.274-1.274A3.956 3.956 0 0 0 25 17a4 4 0 0 0-8 0zm6 0a2 2 0 1 1-2-2 2.002 2.002 0 0 1 2 2z" />
                        </g>
                      </svg>
                      Adres: Fatih Mh. Maraşal Fevzi Çakmak Blv. No: 95 Şehitkamil / Gaziantep
                    </Link>
                  </li>



                  <li>
                    <Link href="mailto:info@novasomine.com" className="text-gray-700 transition hover:opacity-75 flex items-center">
                      <svg data-name="1-Mail" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={20} className="mr-2">
                        <path d="M28 28H4a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4zM4 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2z" />
                        <path d="M16 18a1 1 0 0 1-.618-.214l-14-11a1 1 0 1 1 1.236-1.572L16 15.728 29.382 5.214a1 1 0 1 1 1.236 1.572l-14 11A1 1 0 0 1 16 18z" />
                        <path d="M2 27a1 1 0 0 1-.707-1.707l11-11a1 1 0 0 1 1.414 1.414l-11 11A1 1 0 0 1 2 27zM30 27a1 1 0 0 1-.707-.293l-11-11a1 1 0 0 1 1.414-1.414l11 11A1 1 0 0 1 30 27z" />
                      </svg>
                      info@novasomine.com
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Harita Bölümü - Masaüstünde sola al */}
              <div className="my-4 sm:block hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.1581515931784!2d37.354368!3d37.07754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e1658c7ee491%3A0xbfcdd963407d7a0b!2zTk9WQSDFnsOWTcSwTkUgR0FaxLBBTlRFUA!5e0!3m2!1str!2str!4v1729076847542!5m2!1str!2str"
                  width="600"
                  height="350"
                  style={{
                    border: 0,
                    marginTop: 70,
                    marginLeft: 'calc(50% - 410px)', // Masaüstü için sola alındı
                    transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
                  }}
                  className="transition-transform duration-700 hover:scale-110 hover:translate-y-2 hover:rotate-1 shadow-lg hover:shadow-2xl"
                  loading="lazy"
                ></iframe>
              </div>

              {/* Harita Bölümü - Mobilde Görünür ve Küçültülmüş */}
              <div className="my-4 sm:hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3183.1581515931784!2d37.354368!3d37.07754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e1658c7ee491%3A0xbfcdd963407d7a0b!2zTk9WQSDFnsOWTcSwTkUgR0FaxLBBTlRFUA!5e0!3m2!1str!2str!4v1729076847542!5m2!1str!2str"
                  width="95%" // Mobilde yüzde 100 genişlikte
                  height="250" // Mobilde yüksekliği biraz daha küçültüyoruz
                  style={{
                    marginTop: 30,
                    border: 0,
                    transition: 'transform 0.5s ease-in-out, box-shadow 0.5s ease-in-out',
                  }}
                  className="transition-transform duration-700 hover:scale-110 hover:translate-y-2 hover:rotate-1 shadow-lg hover:shadow-2xl"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div>
  <p className="text-xs text-gray-500 mb-2">
    &copy; 2024. Nova Şömine. Tüm Hakları Saklıdır.
  </p>
  <p className="text-xs text-gray-500">
    Designed By 
    <Link className="font-extrabold ml-1" href="https://www.linkedin.com/in/erkanndemirr/" target="_blank">
      Erkan Demir
    </Link>  
    <Link className="font-extrabold ml-2" href="https://www.linkedin.com/in/mehmet-ali-%C3%A7akmak-5a575a230" target="_blank">
      Mehmet Ali Çakmak
    </Link>
  </p>
</div>


      </div>
    
    </footer>
    </>
  );
}


export default Footer