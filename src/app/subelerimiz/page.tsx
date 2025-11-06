import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Şubelerimiz',
  description: 'Avcılar Sürücü Kursu Avcılar ve Büyükçekmece şubeleri. İstanbul Avrupa Yakası&apos;nda 2 modern şubemizle hizmetinizdeyiz.',
  url: '/subelerimiz',
  keywords: ['avcılar şube', 'büyükçekmece şube', 'şubelerimiz', 'adres', 'konum']
});

const branches = [
  {
    name: "Avcılar Şubesi",
    address: "Ambarlı Mahallesi, Rıfat Ilgaz Sokak No:15/A",
    city: "Avcılar / İstanbul",
    phone: "+90 (212) 000 00 00",
    email: "avcilar@avcilarsurucukursu.com",
    whatsapp: "https://wa.me/902120000000",
    mapUrl: "#",
    features: [
      "Modern sınıflar ve simülatör",
      "Ücretsiz otopark imkanı",
      "Metrobüs durağına 5 dakika",
      "Deneyimli 8 eğitmen kadrosu",
      "Günlük 50+ ders kapasitesi"
    ],
    hours: [
      { day: "Pazartesi - Cuma", time: "09:00 - 21:00" },
      { day: "Cumartesi", time: "10:00 - 20:00" },
      { day: "Pazar", time: "Kapalı" }
    ]
  },
  {
    name: "Büyükçekmece Şubesi",
    address: "Kumburgaz Mahallesi, Sahil Yolu Caddesi No:28",
    city: "Büyükçekmece / İstanbul",
    phone: "+90 (212) 000 00 01",
    email: "buyukcekmece@avcilarsurucukursu.com",
    whatsapp: "https://wa.me/902120000001",
    mapUrl: "#",
    features: [
      "Geniş parkur alanı",
      "Sahil kenarı lokasyon",
      "Ücretsiz otopark",
      "7 profesyonel eğitmen",
      "Esnek ders saatleri"
    ],
    hours: [
      { day: "Pazartesi - Cuma", time: "09:00 - 21:00" },
      { day: "Cumartesi", time: "10:00 - 20:00" },
      { day: "Pazar", time: "Kapalı" }
    ]
  }
];

export default function SubelerimizPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" className="mx-auto w-full max-w-7xl px-6 py-20">
        <Breadcrumbs items={[{ label: 'Şubelerimiz' }]} />

        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-6">
            Konumlarımız
          </span>
          <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl">
            İstanbul Avrupa Yakası&apos;nda 2 Şube
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
            Size en yakın şubemizden profesyonel eğitim alın. Her iki şubemizde de aynı kaliteli hizmet ve modern olanaklar.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 mb-20">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="group relative overflow-hidden rounded-[32px] border border-gray-200/60 bg-white/80 backdrop-blur-sm shadow-[0_25px_70px_rgba(79,158,248,0.15)]"
            >
              <div className="absolute right-0 top-0 h-40 w-40 translate-x-16 -translate-y-16 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
              
              <div className="relative p-8 space-y-6">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-gray-900">{branch.name}</h2>
                  <div className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary">📍</span>
                    <div>
                      <p>{branch.address}</p>
                      <p>{branch.city}</p>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-4 pt-6 border-t border-gray-200/60">
                  <h3 className="font-semibold text-gray-900">İletişim</h3>
                  <div className="grid gap-3 text-sm">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                        📞
                      </span>
                      <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-gray-900 hover:text-primary transition">
                        {branch.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success flex-shrink-0">
                        💬
                      </span>
                      <a href={branch.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-success transition">
                        WhatsApp ile iletişime geç
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent flex-shrink-0">
                        ✉️
                      </span>
                      <a href={`mailto:${branch.email}`} className="text-gray-900 hover:text-accent transition">
                        {branch.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="space-y-3 pt-6 border-t border-gray-200/60">
                  <h3 className="font-semibold text-gray-900">Çalışma Saatleri</h3>
                  <div className="space-y-2 text-sm">
                    {branch.hours.map((schedule) => (
                      <div key={schedule.day} className="flex justify-between">
                        <span className="text-gray-600">{schedule.day}</span>
                        <span className="font-medium text-gray-900">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 pt-6 border-t border-gray-200/60">
                  <h3 className="font-semibold text-gray-900">Özellikler</h3>
                  <div className="flex flex-wrap gap-2">
                    {branch.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Link
                  href="/iletisim"
                  className="block mt-6 text-center rounded-full bg-gradient-to-r from-accent-red to-accent-dark px-6 py-4 text-sm font-semibold text-white shadow-[0_15px_40px_rgba(226,51,51,0.3)] transition hover:shadow-[0_18px_45px_rgba(226,51,51,0.4)]"
                >
                  Bu Şubeye Kayıt Ol
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="relative overflow-hidden rounded-[32px] border border-primary/20 bg-gradient-to-br from-primary via-secondary to-primary/80 px-8 py-16 text-white shadow-[0_30px_80px_rgba(29,104,169,0.25)]">
          <div className="relative z-10 text-center space-y-6">
            <h2 className="text-3xl font-bold">Hangi şubeyi seçmeliyim?</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Her iki şubemizde de aynı kalitede eğitim veriyoruz. Size en yakın şubeyi seçerek zaman kazanabilir, 
              iş veya okul yolunuz üzerindeki şubeyi tercih edebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-dark text-white px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                İletişime Geç
              </Link>
              <Link
                href="/programlar"
                className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-4 text-sm font-semibold hover:bg-white hover:text-primary transition-all"
              >
                Programları İncele
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

