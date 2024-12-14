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
    description: "Modern ve estetik şömine çözümleri. Güneydoğu Bölgesindeki kaliteli şömine hizmetleri.",
    url: "https://novasomine.com", // Gerçek URL'nizi buraya yazın
    type: "website",
    images: [
      {
        url: "/public/novasominelogo.webp", // SEO için görsel (bu resmin URL'si önemli)
        width: 1200,
        height: 630,
        alt: "Nova Şömine - Modern Şömine Tasarımı",
      },
    ],
  },

  
  // Meta Etiketleri (SEO için kritik)
  keywords: [
   "Nova şömine",
    "Gaziantep Şömine",
     "Adana Şömine",
     " Şanlıurfa Şömine",
     "Hatay Şömine",
     "Adıyaman Şömine",
      "Güneydoğu Şömine",
      "gaziantep elektrikli şömine",
      "adana elektrikli şömine",
      "hatay elektrikli şömine",
      "şanlıurfa elektrikli şömine",
      "adıyaman elektrikli şömine",
      "kahramanmaraş elektrikli şömine",
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
           "pelet soba",
           "pelet sobası",
           "pelet soba çeşitleri",
           "pelet soba modelleri",
           "pelet soba fiyatları",
           "pelet sobasi",
           "alev lambası pelet soba",
           "cam borulu pelet soba",
           "manuel fanlı pelet soba",
           "odunlu şömine",
           "doğalgazlı şömine",
           "bioethanol şömine",
           "etanol şömine",
           "şömine hazneleri",     
           "odunlu şömine fiyatları",
           "şömine fiyatları odunlu",     
           "odun şömine fiyatları",
           "ethanol şömine",
           "doğalgazlı şömine fiyatları",
           "şömine kazanı",
           "doğalgazlı şömine modelleri ve fiyatları",
           "invicta şömine",
           "doğalgaz şömine",
          "70 lik şömine",
           "70 lik şömine fiyatları",
           "70 lik şömine haznesi",
           "asansörlü şömine haznesi",     
           "asansörlü şömine modelleri",
          "bacasız doğalgazlı şömine",
          "bacasız odunlu şömine",
          "bacasız şömine bioethanol",
          "bio ethanol şömine fiyatları",
          "bio yakıtlı şömine fiyatları",
           "bioethanol masaüstü şömine",
           "bioethanol yakıtlı şömine",
           "bioethanol şömine haznesi",
           "bioethanol şömine masaüstü",
            "dogalgazli somine",
            "dogalgazli somine modelleri",
            "dogalgazli somine fiyatlari",
            "doğalgaz ile çalışan şömine",
            "doğalgaz şömine bacasız",
            "doğalgaz şömine fiyatları",
            "doğalgaz şömine modelleri",
            "doğalgaz şömine soba",
           "doğalgaz şöminesi modelleri",
           "doğalgazla çalışan şömine",       
           "doğalgazlı bacasız şömine fiyatları",

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
