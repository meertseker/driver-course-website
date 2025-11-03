import { buildAbsoluteUrl } from './config';

interface PageMetadataProps {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
  lang?: string;
  keywords?: string[];
}

export function getPageMetadata({
  title,
  description,
  url,
  image,
  lang = 'tr',
  keywords = []
}: PageMetadataProps) {
  const siteName = "Avcılar Sürücü Kursu";
  const defaultDescription = "İstanbul Avcılar ve Büyükçekmece'de MEB onaylı profesyonel sürücü kursu - Tüm sınıflarda ehliyet eğitimi ve direksiyon dersleri";
  const defaultImage = buildAbsoluteUrl('/avcilarlogo.png');
  const canonicalUrl = url ? buildAbsoluteUrl(url) : undefined;

  return {
    title: title ? `${title} | ${siteName}` : siteName,
    description: description || defaultDescription,
    keywords: keywords.join(', '),
    alternates: canonicalUrl
      ? {
          canonical: canonicalUrl,
        }
      : undefined,
    openGraph: {
      title: title || siteName,
      description: description || defaultDescription,
      url: canonicalUrl,
      siteName: siteName,
      images: [
        {
          url: image ? buildAbsoluteUrl(image) : defaultImage,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
      locale: lang === 'tr' ? 'tr_TR' : lang,
      type: 'website' as const,
    },
    twitter: {
      card: "summary_large_image" as const,
      title: title || siteName,
      description: description || defaultDescription,
      images: [image ? buildAbsoluteUrl(image) : defaultImage],
    },
  };
}

