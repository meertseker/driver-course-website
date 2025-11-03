import { SITE_URL, SITE_CONFIG } from './config';

interface FAQ {
  question: string;
  answer: string;
}

interface Service {
  name: string;
  description: string;
  url?: string;
}

interface BreadcrumbItem {
  name: string;
  url?: string;
  position: number;
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": SITE_CONFIG.name
    },
    "areaServed": {
      "@type": "City",
      "name": "İstanbul"
    },
    "url": service.url || SITE_URL
  };
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item) => ({
      "@type": "ListItem",
      "position": item.position,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function generateDrivingSchoolSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": `${SITE_URL}/#organization`,
    "name": SITE_CONFIG.name,
    "description": SITE_CONFIG.description,
    "url": SITE_URL,
    "telephone": SITE_CONFIG.phone.avcilar,
    "email": SITE_CONFIG.email,
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.address.avcilar.street,
        "addressLocality": SITE_CONFIG.address.avcilar.city,
        "addressRegion": SITE_CONFIG.address.avcilar.region,
        "postalCode": SITE_CONFIG.address.avcilar.postalCode,
        "addressCountry": SITE_CONFIG.address.avcilar.country
      },
      {
        "@type": "PostalAddress",
        "streetAddress": SITE_CONFIG.address.buyukcekmece.street,
        "addressLocality": SITE_CONFIG.address.buyukcekmece.city,
        "addressRegion": SITE_CONFIG.address.buyukcekmece.region,
        "postalCode": SITE_CONFIG.address.buyukcekmece.postalCode,
        "addressCountry": SITE_CONFIG.address.buyukcekmece.country
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      SITE_CONFIG.social.facebook,
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.twitter,
    ].filter(Boolean)
  };
}

export function generateCourseSchema(courseName: string, courseDescription: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseName,
    "description": courseDescription,
    "provider": {
      "@type": "EducationalOrganization",
      "name": SITE_CONFIG.name,
      "url": SITE_URL
    }
  };
}

