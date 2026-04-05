import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { getSiteSettings } from "@/lib/content";
import { getLocalBusinessSchema } from "@/lib/structured-data";
import Analytics from "@/components/Analytics";
import AnalyticsRouteTracker from "@/components/AnalyticsRouteTracker";
import WebVitals from "@/components/WebVitals";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Toaster from "@/components/ui/Toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const settings = getSiteSettings();
const siteUrl = 'https://avcilarehliyetkursu.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: settings.seo.title,
    template: '%s | Avcılar Sürücü Kursu',
  },
  description: settings.seo.description,
  keywords: settings.seo.keywords,
  applicationName: settings.siteName,
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Avcılar Sürücü Kursu' }],
  creator: 'Avcılar Sürücü Kursu',
  publisher: 'Avcılar Sürücü Kursu',
  icons: {
    icon: [
      { url: '/avcilarlogo.png', type: 'image/png' },
    ],
    shortcut: ['/avcilarlogo.png'],
    apple: [
      { url: '/avcilarlogo.png', type: 'image/png' },
    ],
  },
  openGraph: {
    title: settings.seo.title,
    description: settings.seo.description,
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: settings.siteName,
    images: [
      {
        url: '/avcilarlogo.png',
        width: 1200,
        height: 630,
        alt: settings.siteName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: settings.seo.title,
    description: settings.seo.description,
    images: ['/avcilarlogo.png'],
  },
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = getLocalBusinessSchema();

  return (
    <html lang="tr" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* PWA Meta Tags */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/avcilarlogo.png" type="image/png" />
        <link rel="shortcut icon" href="/avcilarlogo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/avcilarlogo.png" />
        <meta name="theme-color" content="#1d68a9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Avcılar Sürücü Kursu" />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-sans antialiased`}>
        {/* Skip to content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-6 py-3 rounded-lg z-50 font-semibold"
        >
          Ana içeriğe atla
        </a>

        <Analytics />
        <Suspense fallback={null}>
          <AnalyticsRouteTracker />
        </Suspense>
        <WebVitals />
        <Toaster />
        
        <main id="main-content">
          {children}
        </main>
        
        <ScrollToTop />

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/905469402200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp ile iletişime geçin"
          className="fixed bottom-8 right-24 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:shadow-[0_6px_30px_rgba(37,211,102,0.7)] flex items-center justify-center transition-all duration-300 hover:scale-110"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
