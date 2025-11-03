import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";
import { GA_TRACKING_ID } from "@/lib/analytics";
import AnalyticsRouteTracker from "@/components/AnalyticsRouteTracker";
import ScrollToTop from "@/components/ScrollToTop";
import { generateDrivingSchoolSchema } from "@/lib/advanced-schema";

// Font optimization with display swap and preload
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'sans-serif'],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false, // Mono font doesn't need preload
  fallback: ['Courier New', 'monospace'],
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
  authors: [{ name: "Efe Sürücü Kursu" }],
  creator: "Efe Sürücü Kursu",
  publisher: "Efe Sürücü Kursu",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: "#1d68a9",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    viewportFit: "cover",
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

const drivingSchoolSchema = generateDrivingSchoolSchema();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Preconnect for faster loading */}
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Analytics */}
        {GA_TRACKING_ID && GA_TRACKING_ID !== 'G-XXXXXXXXX' && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Skip to Content Link for Accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only"
        >
          Ana içeriğe atla
        </a>

        {/* Structured Data Schema */}
        <Script id="jsonld-organization" type="application/ld+json">
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

        <Script id="jsonld-driving-school" type="application/ld+json">
          {JSON.stringify(drivingSchoolSchema)}
        </Script>

        {/* Analytics Route Tracker */}
        <Suspense fallback={null}>
          <AnalyticsRouteTracker />
        </Suspense>

        {/* Main Content */}
        <main id="main-content">
          {children}
        </main>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </body>
    </html>
  );
}
