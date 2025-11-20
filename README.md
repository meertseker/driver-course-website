# Avcılar Sürücü Kursu - Modern Web Sitesi

İstanbul Avcılar ve Büyükçekmece'de faaliyet gösteren Avcılar Sürücü Kursu'nun resmi web sitesi. Next.js 16, React 19 ve TypeScript ile geliştirilmiş, modern ve performanslı bir web uygulaması.

## 🚀 Özellikler

### ✅ Performans Optimizasyonları
- ⚡ Next.js 16 ile en son performans iyileştirmeleri
- 🖼️ WebP ve AVIF görsel formatları desteği
- 📦 SWC minification ve tree shaking
- 💾 Agresif caching stratejisi (static assets için 1 yıl)
- 🎯 Production'da console.log temizleme

### ✅ SEO Optimizasyonları
- 🔍 Gelişmiş meta tags (title, description, keywords)
- 📊 Schema.org yapılandırılmış veri (Organization, DrivingSchool, EducationalOrganization)
- 🗺️ Otomatik sitemap.xml oluşturma
- 🤖 robots.txt yapılandırması
- 🌐 Open Graph ve Twitter Cards desteği

### ✅ Güvenlik
- 🔒 Content Security Policy (CSP)
- 🛡️ Security headers (HSTS, X-Frame-Options, X-Content-Type-Options)
- 🚫 XSS ve clickjacking koruması
- 🔐 Permissions Policy

### ✅ Analytics & Tracking
- 📈 Google Analytics 4 entegrasyonu
- 📊 Sayfa görüntüleme tracking
- 🎯 Özel event tracking (program clicks, phone calls, form submissions)
- 🔄 Route değişikliği tracking

### ✅ Accessibility (Erişilebilirlik)
- ♿ WCAG 2.1 uyumlu
- ⌨️ Klavye navigasyonu desteği
- 👁️ Gelişmiş focus visible stilleri
- 🔗 "Skip to content" linki
- 🎨 Prefers-reduced-motion desteği

### ✅ UX Components
- ⬆️ Scroll to top butonu
- 🍞 Breadcrumbs navigasyonu
- 🎭 Client-side hydration wrapper
- 📱 Responsive tasarım

### ✅ PWA Ready
- 📱 manifest.json konfigürasyonu
- 🎨 Theme color ve icons
- 📲 Standalone app mode desteği

## 📁 Proje Yapısı

\`\`\`
efesurucukursu/
├── lib/                          # Utility fonksiyonlar
│   ├── analytics.ts             # Google Analytics helpers
│   ├── advanced-schema.ts       # Schema.org generators
│   ├── config.ts                # Site konfigürasyonu
│   └── seo.ts                   # SEO utilities
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Root layout (optimized)
│   │   ├── page.tsx             # Ana sayfa
│   │   └── globals.css          # Global styles + animations
│   └── components/
│       ├── AnalyticsButton.tsx       # Analytics tracked button
│       ├── AnalyticsRouteTracker.tsx # Route change tracker
│       ├── Breadcrumbs.tsx           # Breadcrumb navigation
│       ├── ClientOnly.tsx            # Client-side wrapper
│       ├── program-tabs.tsx          # Program tabs component
│       └── ScrollToTop.tsx           # Scroll to top button
├── public/
│   ├── manifest.json            # PWA manifest
│   ├── robots.txt               # SEO robots file
│   └── ...                      # Static assets
├── scripts/
│   └── generate-sitemap.js      # Sitemap generator
├── .env.example                 # Environment variables template
├── next.config.ts               # Next.js config (optimized)
└── package.json
\`\`\`

## 🛠️ Kurulum

### Gereksinimler
- Node.js 20+
- npm veya yarn

### Adımlar

1. **Repository'yi klonlayın:**
\`\`\`bash
git clone <repository-url>
cd efesurucukursu
\`\`\`

2. **Bağımlılıkları yükleyin:**
\`\`\`bash
npm install
\`\`\`

3. **Environment variables oluşturun:**
\`\`\`bash
cp .env.example .env.local
\`\`\`

4. **.env.local dosyasını düzenleyin:**
\`\`\`bash
# Google Analytics ID'nizi ekleyin
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXX

# Site URL'ini güncelleyin
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
\`\`\`

5. **Development server'ı başlatın:**
\`\`\`bash
npm run dev
\`\`\`

6. **Tarayıcıda açın:**
\`\`\`
http://localhost:3000
\`\`\`

## 📝 Komutlar

\`\`\`bash
npm run dev        # Development server başlat
npm run build      # Production build (sitemap otomatik oluşur)
npm run start      # Production server başlat
npm run lint       # ESLint çalıştır
npm run sitemap    # Manuel sitemap oluştur
\`\`\`

## 🔧 Konfigürasyon

### Google Analytics Kurulumu

1. [Google Analytics](https://analytics.google.com/) hesabınızda yeni property oluşturun
2. Measurement ID'yi (G-XXXXXXXXX) alın
3. \`.env.local\` dosyasına ekleyin:
\`\`\`
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXX
\`\`\`

### Sitemap Güncellemesi

\`scripts/generate-sitemap.js\` dosyasını düzenleyerek sayfalarınızı ekleyin:

\`\`\`javascript
const staticPages = [
  { url: '/', priority: 1.0, changefreq: 'weekly' },
  { url: '/hakkimizda', priority: 0.8, changefreq: 'monthly' },
  // Yeni sayfalarınızı buraya ekleyin
];
\`\`\`

### Schema.org Özelleştirme

\`lib/advanced-schema.ts\` ve \`lib/config.ts\` dosyalarında iletişim bilgilerini güncelleyin.

## 🚀 Deployment

### Vercel (Önerilen)

1. [Vercel](https://vercel.com) hesabınıza giriş yapın
2. Repository'yi import edin
3. Environment variables ekleyin
4. Deploy edin!

### Diğer Platformlar

- **Netlify:** \`netlify.toml\` ekleyip deploy edin
- **AWS Amplify:** \`amplify.yml\` zaten mevcut
- **Self-hosted:** \`npm run build && npm run start\`

## 📊 Performance

### Lighthouse Scores (Hedefler)
- ⚡ Performance: 90+
- ♿ Accessibility: 90+
- 💡 Best Practices: 100
- 🔍 SEO: 100

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## 🔒 Güvenlik

### Security Headers
Tüm önemli security headerlar aktif:
- Content-Security-Policy
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Strict-Transport-Security (HSTS)
- Permissions-Policy

Test etmek için: [securityheaders.com](https://securityheaders.com/)

## 📱 PWA

Progressive Web App desteği için:
1. \`public/manifest.json\` yapılandırılmış
2. 192x192 ve 512x512 iconlar ekleyin (\`icon-192.png\`, \`icon-512.png\`)
3. Service worker eklemek için \`next-pwa\` kullanabilirsiniz (opsiyonel)

## 🎨 Customization

### Renkler

\`src/app/globals.css\` dosyasında CSS variables ile renkleri özelleştirin:

\`\`\`css
:root {
  --color-primary: #4F9EF8;
  --color-accent: #FFA94D;
  /* ... diğer renkler */
}
\`\`\`

### Animasyonlar

\`globals.css\` dosyasında kullanıma hazır animasyonlar:
- \`.animate-fade-in-up\`
- \`.animate-fade-in\`
- \`.animate-slide-in-top\`
- \`.animate-pulse\`
- \`.animate-spin\`

## 📄 Lisans

[Lisans bilgisi buraya]

## 🤝 Katkıda Bulunma

Pull request'ler memnuniyetle karşılanır!

## 📞 İletişim

- 📧 Email: info@avcilarsurucukursu.com
- 📱 Telefon (Avcılar): +90 (212) 590 23 25 - +90 (546) 940 22 00
- 📱 Telefon (Büyükçekmece): +90 (212) 883 08 83

---

**© 2024 Avcılar Sürücü Kursu - Tüm hakları saklıdır.**
