// Site configuration
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://efesurucukursu.example';
export const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '';

export const buildAbsoluteUrl = (path: string = '/') => {
  if (!path) return SITE_URL;
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};

export const SITE_CONFIG = {
  name: 'Avcılar Sürücü Kursu',
  shortName: 'Avcılar Sürücü Kursu',
  description: 'İstanbul Avcılar ve Büyükçekmece\'de MEB onaylı profesyonel sürücü kursu',
  logo: '/avcilarlogo.png',
  phone: {
    avcilar: '+90 (212) 590 23 25',
    avcilarMobile: '+90 (546) 940 22 00',
    buyukcekmece: '+90 (212) 883 08 83',
  },
  email: 'info@avcilarsurucukursu.com',
  address: {
    avcilar: {
      street: 'Merkez Mahallesi Namık Kemal Caddesi Umut İş Merkezi No:23 Kat:2',
      city: 'Avcılar',
      region: 'İstanbul',
      country: 'TR',
      postalCode: '34310',
    },
    buyukcekmece: {
      street: '19 Mayıs Mahallesi D100 Karayolu Caddesi No:1079 Daire:4',
      city: 'Büyükçekmece',
      region: 'İstanbul',
      country: 'TR',
      postalCode: '34500',
    },
  },
  social: {
    facebook: '',
    instagram: '',
    twitter: '',
  },
  openingHours: 'Pazartesi-Cuma: 09:00-21:00, Cumartesi: 10:00-20:00',
};

