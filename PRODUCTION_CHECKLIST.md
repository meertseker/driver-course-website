# 🚀 PRODUCTION HAZIRLIK KONTROL LİSTESİ

## ✅ TAMAMLANAN İYİLEŞTİRMELER

### 1. ✅ Linter Hatası Düzeltildi
- **Dosya:** `src/components/Footer.tsx`
- **Düzeltme:** Apostrophe karakteri `&apos;` ile değiştirildi
- **Durum:** ✅ Tamamlandı - Linter hatasız çalışıyor

### 2. ✅ API Endpoint Oluşturuldu
- **Dosya:** `src/app/api/contact/route.ts`
- **Özellikler:**
  - ✅ Form validasyonu (email, telefon, required fields)
  - ✅ Rate limiting (IP başına 5 istek/15 dakika)
  - ✅ Honeypot spam koruması
  - ✅ Error handling
  - ✅ Security headers
  - 📋 3 farklı email servisi entegrasyonu hazır (Formspree, Resend, SendGrid)

### 3. ✅ Yasal Sayfalar Eklendi
- **KVKK Sayfası:** `/kvkk` ✅
  - Kişisel verilerin korunması
  - Veri işleme politikası
  - Kullanıcı hakları
  
- **Gizlilik Politikası:** `/gizlilik` ✅
  - Çerez politikası
  - Google Analytics kullanımı
  - Veri güvenliği
  - Kullanıcı hakları

### 4. ✅ SEO İyileştirmeleri
- **Sitemap:** Tüm sayfalar eklendi (15 URL)
  - ✅ Ana sayfalar
  - ✅ Blog sayfaları (6 makale)
  - ✅ Yasal sayfalar (KVKK, Gizlilik)
- **robots.txt:** Mevcut ve yapılandırılmış

---

## 🔴 KRİTİK: PRODUCTION'A ÇIKMADAN ÖNCE YAPILMASI GEREKENLER

### 1. 🔴 Environment Variables Oluşturulması
**Dosya:** `.env.local` (root dizinde oluşturun)

```bash
# .env.local dosyası için gerekli içerik aşağıda listelenmiştir:
# Bu dosyayı manuel olarak oluşturun (.gitignore'da olduğu için)

# ============================================
# ZORUNLU AYARLAR
# ============================================

# 1. Site URL'i (trailing slash OLMADAN)
NEXT_PUBLIC_SITE_URL=https://www.avcilarsurucukursu.com

# 2. Google Analytics ID
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
# Nasıl alınır: https://analytics.google.com/
# Analytics > Admin > Property > Data Streams

# ============================================
# İLETİŞİM FORMU - Aşağıdakilerden BİRİNİ seçin
# ============================================

# SEÇENEK 1: Formspree (En Kolay - Önerilen)
# https://formspree.io/ - Ücretsiz plan: 50 form/ay
FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID

# SEÇENEK 2: Resend (Email API)
# https://resend.com/ - Ücretsiz plan: 100 email/gün
# RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
# CONTACT_EMAIL=info@avcilarsurucukursu.com

# SEÇENEK 3: SendGrid (Email API)
# https://sendgrid.com/ - Ücretsiz plan: 100 email/gün
# SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxx
# CONTACT_EMAIL=info@avcilarsurucukursu.com

# ============================================
# OPSIYONEL
# ============================================

# Google Search Console Verification
NEXT_PUBLIC_GOOGLE_VERIFICATION=your-verification-code
```

**Adımlar:**
1. ✅ Root dizinde `.env.local` dosyası oluşturun
2. ✅ Yukarıdaki içeriği kopyalayın
3. ✅ Gerçek değerlerinizi doldurun
4. ✅ `.env.local` dosyasının `.gitignore`'da olduğundan emin olun (zaten ekli)

### 2. 🔴 Gerçek Veriler Güncellenmeli

#### 2.1. Telefon Numaraları
**Şu anki durum:** Placeholder (+90 212 000 00 00)

**Değiştirilmesi gereken dosyalar:**
- `src/lib/config.ts` (satır 16-19)
- `src/app/layout.tsx` (satır 170, 196)
- `src/components/Footer.tsx` (satır 25-26, 42-43)
- `src/app/kvkk/page.tsx` (satır 142)
- `src/app/gizlilik/page.tsx` (satır 175-176)

**Aranacak pattern:**
```bash
# Tüm placeholder telefon numaralarını bulmak için:
grep -r "+90 212 000 00 0" src/
```

#### 2.2. Email Adresleri
**Şu anki durum:** Generic email adresleri

**Değiştirilmesi gereken dosyalar:**
- `src/lib/config.ts` (satır 20)
- `src/components/Footer.tsx` (satır 30-31, 47-48)
- `src/app/kvkk/page.tsx` (satır 141)
- `src/app/gizlilik/page.tsx` (satır 174)

#### 2.3. Site URL
**Şu anki durum:** `https://efesurucukursu.example`

**Değiştirilmesi gereken dosyalar:**
- `src/lib/config.ts` (satır 2)
- `src/app/layout.tsx` (satır 34, 91, 164)
- `scripts/generate-sitemap.js` (satır 6)
- `public/robots.txt` (satır 5)

**Güncelleme komutu:**
```bash
# Site URL'i toplu değiştirmek için (gerçek domain ile):
find src/ -type f -exec sed -i 's|efesurucukursu.example|www.avcilarsurucukursu.com|g' {} +
```

#### 2.4. Sosyal Medya Linkleri (Opsiyonel)
**Dosya:** `src/lib/config.ts` (satır 37-41)

Sosyal medya hesaplarınız varsa ekleyin:
```typescript
social: {
  facebook: 'https://facebook.com/avcilarsurucukursu',
  instagram: 'https://instagram.com/avcilarsurucukursu',
  twitter: 'https://twitter.com/avcilarkursu',
},
```

### 3. 🔴 İletişim Formu Email Servisi Seçimi

**Dosya:** `src/app/api/contact/route.ts`

**3 seçenek mevcut:**

#### Seçenek 1: Formspree (ÖNERİLEN - En Kolay)
1. https://formspree.io/ adresine gidin
2. Ücretsiz hesap oluşturun
3. Yeni form oluşturun
4. Form endpoint URL'ini alın: `https://formspree.io/f/YOUR_FORM_ID`
5. `.env.local` dosyasına ekleyin:
   ```
   FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
   ```
6. `route.ts` dosyasında OPTION 1'i uncomment edin (satır 68-87)

#### Seçenek 2: Resend
1. https://resend.com/ hesap oluşturun
2. API key alın
3. `.env.local` dosyasına ekleyin:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   CONTACT_EMAIL=info@avcilarsurucukursu.com
   ```
4. `npm install resend` çalıştırın
5. `route.ts` dosyasında OPTION 2'yi uncomment edin (satır 90-109)

#### Seçenek 3: SendGrid
1. https://sendgrid.com/ hesap oluşturun
2. API key alın
3. `.env.local` dosyasına ekleyin
4. SendGrid package yükleyin
5. `route.ts` dosyasında kodu uyarlayın

### 4. 🔴 Google Analytics Kurulumu

**Adımlar:**
1. ✅ https://analytics.google.com/ adresine gidin
2. ✅ Yeni property oluşturun
3. ✅ Web Data Stream oluşturun
4. ✅ Measurement ID'yi alın (G-XXXXXXXXXX formatında)
5. ✅ `.env.local` dosyasına ekleyin:
   ```
   NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
   ```

### 5. 🟡 Google Search Console (Önerilen)

**Adımlar:**
1. https://search.google.com/search-console/ adresine gidin
2. Property ekleyin (domain veya URL prefix)
3. Verification code alın
4. `.env.local` dosyasına ekleyin:
   ```
   NEXT_PUBLIC_GOOGLE_VERIFICATION=your-code-here
   ```
5. `src/app/layout.tsx` dosyasına meta tag ekleyin (gerekirse)

### 6. 🟡 PWA İyileştirmeleri (Opsiyonel ama Önerilen)

**Gerekli iconlar:**
- `public/icon-192.png` (192x192 px)
- `public/icon-512.png` (512x512 px)
- `public/favicon.ico` (already exists ✅)
- `public/apple-touch-icon.png` (180x180 px)

**Şu anda:** Sadece logo var (`avcilarlogo.png`)

**Yapılacaklar:**
1. Logo'dan farklı boyutlarda iconlar oluşturun
2. `public/` klasörüne ekleyin
3. `public/manifest.json` dosyasını güncelleyin

---

## 📋 DEPLOYMENT ÖNCESİ KONTROL LİSTESİ

### Build & Test
- [ ] `npm run build` başarıyla çalışıyor mu?
- [ ] `npm run start` ile production build test edildi mi?
- [ ] Tüm sayfalar yükleniyor mu?
- [ ] İletişim formu çalışıyor mu?
- [ ] Mobile responsive kontrol edildi mi?
- [ ] Tüm linkler çalışıyor mu?

### Güvenlik
- [ ] `.env.local` dosyası `.gitignore`'da mı? ✅
- [ ] API keys public değil mi? ✅
- [ ] Security headers aktif mi? ✅
- [ ] HTTPS zorlaması yapılandırıldı mı? (hosting sağlayıcısında)
- [ ] Rate limiting test edildi mi? ✅

### SEO
- [ ] Sitemap güncel mi? ✅
- [ ] robots.txt doğru mu? ✅
- [ ] Meta descriptions her sayfada var mı? ✅
- [ ] OpenGraph tags ekli mi? ✅
- [ ] Schema.org markup'ları mevcut mu? ✅
- [ ] Canonical URL'ler doğru mu? ✅

### Performance
- [ ] Images optimize edilmiş mi? ✅ (WebP, AVIF support)
- [ ] Fonts optimize edilmiş mi? ✅ (display: swap)
- [ ] Cache headers yapılandırılmış mı? ✅
- [ ] Lighthouse score > 90? (test edin)

### Analytics
- [ ] Google Analytics çalışıyor mu?
- [ ] Event tracking test edildi mi?
- [ ] Form submission tracking çalışıyor mu?

### Legal
- [ ] KVKK sayfası tamamlandı mı? ✅
- [ ] Gizlilik politikası tamamlandı mı? ✅
- [ ] İletişim bilgileri doğru mu?
- [ ] KVKK onay checkbox formlarda mevcut mu? ✅

---

## 🚀 DEPLOYMENT PLATFORMLARI

### Vercel (Önerilen)
```bash
# 1. Vercel CLI yükleyin
npm i -g vercel

# 2. Deploy edin
vercel

# 3. Environment variables ekleyin (Vercel dashboard'dan)
# - NEXT_PUBLIC_SITE_URL
# - NEXT_PUBLIC_GA_TRACKING_ID
# - FORMSPREE_ENDPOINT (veya diğer email servis)
```

### AWS Amplify
**Dosya:** `amplify.yml` ✅ zaten mevcut

```bash
# AWS Amplify Console'dan:
# 1. Repository bağlayın
# 2. amplify.yml otomatik algılanır
# 3. Environment variables ekleyin
# 4. Deploy edin
```

### Netlify
```bash
# netlify.toml oluşturun:
[build]
  command = "npm run build"
  publish = ".next"

[build.environment]
  NODE_VERSION = "20"
```

---

## 📊 PERFORMANS HEDEFLERİ

### Lighthouse Scores
- **Performance:** 90+ ✅
- **Accessibility:** 90+ ✅
- **Best Practices:** 100 ✅
- **SEO:** 100 ✅

### Core Web Vitals
- **LCP:** < 2.5s ⚡
- **FID:** < 100ms ⚡
- **CLS:** < 0.1 ⚡

### Test Araçları
- https://pagespeed.web.dev/
- https://gtmetrix.com/
- https://webpagetest.org/

---

## 🔧 PRODUCTION'DA İZLENMESİ GEREKENLER

### İlk 24 Saat
- [ ] Tüm sayfalar erişilebilir mi?
- [ ] Form gönderimleri geliyor mu?
- [ ] Analytics veri topluyor mu?
- [ ] Error log'ları kontrol et
- [ ] Performance monitoring

### İlk Hafta
- [ ] Google Search Console'a site ekle
- [ ] Sitemap submit et
- [ ] Analytics raporlarını kontrol et
- [ ] Form conversion rate'i izle
- [ ] User feedback topla

### Sürekli
- [ ] Haftalık analytics raporu
- [ ] Aylık SEO performans kontrolü
- [ ] Güvenlik güncellemeleri (`npm audit`)
- [ ] Dependency güncellemeleri
- [ ] Backup stratejisi

---

## 📞 DESTEK & KAYNAKLAR

### Dokümantasyon
- Next.js: https://nextjs.org/docs
- React: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/docs

### Güvenlik
- KVKK: https://kvkk.gov.tr/
- Security Headers: https://securityheaders.com/
- SSL Test: https://www.ssllabs.com/ssltest/

### SEO Araçları
- Google Search Console: https://search.google.com/search-console
- Google Analytics: https://analytics.google.com/
- Schema Validator: https://validator.schema.org/

---

## ✨ SONRAKİ ADIMLAR (Post-Launch)

### Kısa Vadeli (1-3 ay)
- [ ] Google Ads entegrasyonu
- [ ] WhatsApp Business API
- [ ] Online ödeme sistemi
- [ ] Öğrenci paneli
- [ ] Blog içeriği genişletme

### Uzun Vadeli (3-12 ay)
- [ ] Mobil uygulama
- [ ] Online teorik sınav sistemi
- [ ] Randevu yönetim sistemi
- [ ] CRM entegrasyonu
- [ ] Multilanguage support

---

**Son Güncelleme:** 6 Kasım 2025
**Versiyon:** 1.0
**Durum:** Production'a hazır (environment variables ayarlandıktan sonra)

---

## 🎯 HIZLI BAŞLANGIÇ KOMUTU

```bash
# 1. .env.local oluştur ve doldur
cp .env.example .env.local
nano .env.local

# 2. Build test et
npm run build

# 3. Production modda test et
npm run start

# 4. Lint kontrol
npm run lint

# 5. Deploy (Vercel örneği)
vercel --prod
```

**BAŞARILAR! 🚀**

