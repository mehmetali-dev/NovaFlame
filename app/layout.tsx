import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nova Şömine | Güneydoğu Bölgesinde Şömine Hizmeti",
  description: "Güneydoğu Anadolu bölgesinde yüksek kaliteli odunlu ve elektrikli şömine hizmetleri sunan Nova Şömine. Modern tasarım, kaliteli işçilik ve estetik şömine çözümleri.",

  // Arama motoru görünürlüğü ve başlık optimizasyonu
  openGraph: {
    title: "Nova Şömine - Elektrikli Ve Odunlu Şömine Hizmeti",
    description: "Modern ve estetik şömine çözümleri. Güneydoğu Bölgesindeki en kaliteli şömine hizmetleri.",
    url: "https://novasomine.com", // Gerçek URL'nizi buraya yazın
    type: "website",
    images: [
      {
        url: "/public/seo-image.jpg", // SEO için görsel (bu resmin URL'si önemli)
        width: 1200,
        height: 630,
        alt: "Nova Şömine - Modern Şömine Tasarımı",
      },
    ],
  },

  
  // Meta Etiketleri (SEO için kritik)
  keywords: [
    "Gaziantep Şömine",
     "Adana Şömine",
     " Şanlıurfa Şömine",
     "Hatay Şömine",
     "Adıyaman Şömine",
      "Güneydoğu Şömine",
      "Elektrikli Şömine",
      "Elektrikli Şömine Modelleri", 
      "elektrikli somine",
      "elektrikli şömine üreticileri", 
      "elektrikli şömine modelleri ve fiyatları", 
      "elektrikli şömine 150cm", 
      "tektes şömine", 
      "elektrikli şömine malatya", 
      "elektrikli şömine çeşitleri", 
      "elektrikli somine modelleri", 
      "hazır şömine modelleri", 
      "şömine fiyatları", 
      "şömine elektrik", 
      "zaya şömine",  
      "flameline şömine", 
      "dekoratif şömine", 
      "150cm elektrikli şömine", 
      "hazir sömine", 
      "odun şömine fiyatları",
       "elektrikli şömine tasarımları",
      "elektrikli şömine dekorasyon",
      " elektrikli şömine haznesi",
       "dlc şömine",
        "şömine elektrikli",
        "portatif elektrikli şömine", 
        "elk şömine",
        "taşınılabilir elektrikli şömine",
         "elektrikli şömine görselleri",
          "elektronik şömine",
           "salon elektrikli şömine",    
  ],
  robots: "index, follow", // Sayfanın indekslenmesini ve bağlantıların takip edilmesini sağlar
  authors: [{ name: "Nova Şömine", url: "https://novasomine.com" }], // author yerine authors array formatında yazılır
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />

        
      </body>
    </html>
  );
}
