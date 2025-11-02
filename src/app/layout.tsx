import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Efe Sürücü Kursu | Avcılar & Büyükçekmece Ehliyet Kursu | A1 A2 A B BE C D",
  description:
    "Avcılar ve Büyükçekmece'de MEB onaylı Efe Sürücü Kursu: A1, A2, A motosiklet; B, BE otomobil; C, CE kamyon-çekici; D, D1 minibüs-otobüs, M-F-G sınıflarında teorik ve direksiyon eğitimleri. İstanbul Avrupa Yakası'nda 2 şube, yüksek başarı oranı.",
  metadataBase: new URL("https://efesurucukursu.example"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "sürücü kursu",
    "ehliyet kursu",
    "Avcılar sürücü kursu",
    "Büyükçekmece sürücü kursu",
    "Kumburgaz sürücü kursu",
    "İstanbul sürücü kursu",
    "Avrupa Yakası ehliyet kursu",
    "A1 ehliyet",
    "A2 ehliyet",
    "A ehliyet",
    "B ehliyet",
    "BE ehliyet",
    "C ehliyet",
    "CE ehliyet",
    "D ehliyet",
    "D1 ehliyet",
    "M ehliyet",
    "F ehliyet",
    "G ehliyet",
    "direksiyon dersi",
    "e-sınav",
  ],
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#FFFFFF",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  appleWebApp: {
    statusBarStyle: "default",
    title: "Efe Sürücü Kursu",
  },
  openGraph: {
    title:
      "Efe Sürücü Kursu | Avcılar & Büyükçekmece Ehliyet Kursu | A1 A2 A B BE C D",
    description:
      "Avcılar ve Büyükçekmece'de MEB onaylı Efe Sürücü Kursu: tüm sınıflarda teori ve direksiyon eğitimleri, yüksek başarı ve esnek programlar. İstanbul Avrupa Yakası'nda 2 şube.",
    url: "https://efesurucukursu.example",
    siteName: "Efe Sürücü Kursu",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Efe Sürücü Kursu | Avcılar & Büyükçekmece Ehliyet Kursu | A1 A2 A B BE C D",
    description:
      "Avcılar ve Büyükçekmece'de MEB onaylı Efe Sürücü Kursu: tüm sınıflarda teori ve direksiyon eğitimleri, yüksek başarı ve esnek programlar.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script id="jsonld-localbusiness" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Efe Sürücü Kursu",
            url: "https://efesurucukursu.example/",
            areaServed: "İstanbul",
            sameAs: [],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+90-212-000-00-00",
                contactType: "customer service",
                areaServed: "TR",
                availableLanguage: "Turkish"
              }
            ],
            location: [
              {
                "@type": "DrivingSchool",
                name: "Efe Sürücü Kursu - Avcılar Şubesi",
                telephone: "+90 212 000 00 00",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Ambarlı Mahallesi, Rıfat Ilgaz Sokak No:15/A",
                  addressLocality: "Avcılar",
                  addressRegion: "İstanbul",
                  addressCountry: "TR",
                },
                openingHours: [
                  "Mo-Fr 09:00-21:00",
                  "Sa 10:00-20:00",
                ],
              },
              {
                "@type": "DrivingSchool",
                name: "Efe Sürücü Kursu - Büyükçekmece Şubesi",
                telephone: "+90 212 000 00 01",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Kumburgaz Mahallesi, Sahil Yolu Caddesi No:28",
                  addressLocality: "Büyükçekmece",
                  addressRegion: "İstanbul",
                  addressCountry: "TR",
                },
                openingHours: [
                  "Mo-Fr 09:00-21:00",
                  "Sa 10:00-20:00",
                ],
              }
            ]
          })}
        </Script>
        {children}
      </body>
    </html>
  );
}
