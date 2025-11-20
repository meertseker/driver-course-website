import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ProgramTabs } from '@/components/program-tabs';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Programlar',
  description: 'Avcılar Sürücü Kursu eğitim programları: B Otomobil, A Motosiklet, BE Römorklu, C Kamyon, D Otobüs sınıfları ve kurumsal eğitimler. İstanbul Avcılar ve Büyükçekmece.',
  url: '/programlar',
  keywords: ['b ehliyet programı', 'a2 ehliyet', 'motosiklet kursu', 'kamyon ehliyeti', 'otobüs ehliyeti', 'kurumsal eğitim']
});

const programs = [
  {
    id: "b",
    name: "B Sınıfı Otomobil (Manuel/Otomatik)",
    summary:
      "6 haftada teori + şehir içi/sınav rotası odaklı direksiyon eğitimleri.",
    badge: "En popüler",
    duration: "Haftada 3 teori · 2 direksiyon",
    price: "Güncel fiyat için arayın",
    features: [
      "Gerçek sınav rotalarında pratik",
      "Park ve manevra yoğun program",
      "Sınav öncesi birebir prova",
    ],
    href: "/iletisim",
    cta: "Programa Katıl",
  },
  {
    id: "a2",
    name: "A2 Motosiklet",
    summary: "Denge, koni ve pist çalışmaları ile güvenli sürüş temelleri.",
    badge: "Motosiklet",
    duration: "4 hafta · Haftada 3 pratik",
    price: "Güncel fiyat için arayın",
    features: [
      "Pist ve şehir içi sürüş",
      "Ekipman bilgilendirme",
      "Islak zemin simülasyonu",
    ],
    href: "/iletisim",
    cta: "Detayları Gör",
  },
  {
    id: "a",
    name: "A Sınıfı (Tüm motosikletler)",
    summary:
      "Güçlü motosikletlere geçiş için ileri denge, fren ve viraj teknikleri.",
    badge: "Motosiklet",
    duration: "Yoğun pratik program",
    price: "Güncel fiyat için arayın",
    features: [
      "İleri sürüş teknikleri",
      "A2&apos;den A&apos;ya geçiş danışmanlığı",
      "Sınav parkuru provaları",
    ],
    href: "/iletisim",
    cta: "Detayları Gör",
  },
  {
    id: "be",
    name: "BE Sınıfı (Römorklu)",
    summary:
      "Römorkla geri manevra, park ve denge eğitimleri ile sınav hazırlığı.",
    badge: "Otomobil + Römork",
    duration: "Özel ders planı",
    price: "Güncel fiyat için arayın",
    features: [
      "Römork manevra eğitimi",
      "Güvenli bağlantı kontrolleri",
      "Sınav parkuru çalışmaları",
    ],
    href: "/iletisim",
    cta: "Detayları Gör",
  },
  {
    id: "c-ce",
    name: "C / CE Sınıfı (Kamyon / Çekici)",
    summary:
      "Ağır vasıta için kapsamlı güvenlik, kör nokta ve fren mesafesi yönetimi.",
    badge: "Ağır Vasıta",
    duration: "Kişiye özel plan",
    price: "Güncel fiyat için arayın",
    features: [
      "Yük güvenliği ve fren tekniği",
      "Geniş dönüş ve parkur uygulamaları",
      "Sınav prosedürü hazırlığı",
    ],
    href: "/iletisim",
    cta: "Detayları Gör",
  },
  {
    id: "d",
    name: "D / D1 Sınıfı (Otobüs / Minibüs)",
    summary: "Yolcu güvenliği, durak yaklaşma ve profesyonel sürüş standartları.",
    badge: "Yolcu Taşımacılığı",
    duration: "Kişiye özel plan",
    price: "Güncel fiyat için arayın",
    features: [
      "Yolcu odaklı sürüş",
      "Güzergâh ve durak yaklaşma",
      "Sınav parkuru uygulamaları",
    ],
    href: "/iletisim",
    cta: "Detayları Gör",
  },
  {
    id: "kurumsal",
    name: "Kurumsal (SRC + Psikoteknik)",
    summary: "Filo ve ticari ekipler için uçtan uca sertifikasyon süreci.",
    badge: "Kurumsal",
    duration: "Planlama kurum özelinde",
    price: "Özel teklif için iletişime geçin",
    features: [
      "İhtiyaç analizi ve raporlama",
      "SRC sınav hazırlığı",
      "Defansif sürüş eğitimleri",
    ],
    href: "/iletisim",
    cta: "Teklif Al",
  },
];

export default function ProgramlarPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" className="mx-auto w-full max-w-7xl px-6 py-20">
        <Breadcrumbs items={[{ label: 'Programlar' }]} />

        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-6">
            Eğitim Programları
          </span>
          <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl">
            İhtiyacınıza göre ölçeklenen program yapısı
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
            Kişisel hızınıza, mevcut deneyiminize ve takvim ihtiyaçlarınıza göre düzenlenen program 
            modüllerini seçin; kalanını eğitim danışmanlarımız planlasın.
          </p>
        </div>

        {/* Program Tabs */}
        <ProgramTabs programs={programs} />

        {/* Info Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-sm">
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
            <div className="relative space-y-4">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900">Esnek Ders Saatleri</h3>
              <p className="text-sm text-gray-600">
                Çalışma saatlerinize göre teorik ve direksiyon derslerinizi planlayın. 
                Hafta içi ve Cumartesi günleri esnek saatler.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-sm">
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
            <div className="relative space-y-4">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="text-xl font-bold text-gray-900">Taksit İmkanı</h3>
              <p className="text-sm text-gray-600">
                Kredi kartı ile 6 taksit, anlaşmalı bankalar ile düşük faizli ödeme seçenekleri mevcuttur.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-sm">
            <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
            <div className="relative space-y-4">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900">Başarı Garantisi</h3>
              <p className="text-sm text-gray-600">
                Teorik veya direksiyon sınavında kalanlara ücretsiz ek ders ve danışmanlık desteği sağlıyoruz.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative overflow-hidden rounded-[32px] border border-primary/20 bg-gradient-to-br from-primary via-secondary to-primary/80 px-8 py-16 text-white shadow-[0_30px_80px_rgba(29,104,169,0.25)]">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold">Programa kayıt olmak için</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Size uygun programı seçmek ve kayıt işlemlerini tamamlamak için hemen bizimle iletişime geçin!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-red to-accent-dark text-white px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  İletişim Formu
                </Link>
                <a
                  href="tel:+902125902325"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-4 text-sm font-semibold hover:bg-white hover:text-primary transition-all"
                >
                  Hemen Ara
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

