import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import ClientOnly from '@/components/ClientOnly';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'İletişim',
  description: 'Avcılar Sürücü Kursu ile iletişime geçin. İstanbul Avcılar ve Büyükçekmece şubelerimizden bize ulaşabilirsiniz.',
  url: '/iletisim',
  keywords: ['iletişim', 'adres', 'telefon', 'sürücü kursu iletişim', 'avcılar şube', 'büyükçekmece şube']
});

const branches = [
  {
    name: "Avcılar Şubesi",
    address: "Merkez Mahallesi Namık Kemal Caddesi Umut İş Merkezi No:23 Kat:2",
    city: "Avcılar / İstanbul",
    phone: "+90 (212) 590 23 25",
    phoneMobile: "+90 (546) 940 22 00",
    email: "avcilar@avcilarsurucukursu.com",
    whatsapp: "https://wa.me/905469402200",
    hours: "Hafta içi: 09:00 - 21:00<br/>Cumartesi: 10:00 - 20:00<br/>Pazar: Kapalı",
    features: ["Modern sınıflar", "Otopark imkanı", "Metrobüs yakını"]
  },
  {
    name: "Büyükçekmece Şubesi",
    address: "19 Mayıs Mahallesi D100 Karayolu Caddesi No:1079 Daire:4",
    city: "Büyükçekmece / İstanbul",
    phone: "+90 (212) 883 08 83",
    email: "buyukcekmece@avcilarsurucukursu.com",
    whatsapp: "https://wa.me/902128830883",
    hours: "Hafta içi: 09:00 - 21:00<br/>Cumartesi: 10:00 - 20:00<br/>Pazar: Kapalı",
    features: ["Geniş parkur alanı", "Sahil kenarı", "Ücretsiz otopark"]
  }
];

export default function IletisimPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" className="mx-auto w-full max-w-7xl px-6 py-20">
        <Breadcrumbs items={[{ label: 'İletişim' }]} />

        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-6">
            Bize Ulaşın
          </span>
          <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl">
            İletişime Geçin
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
            Sorularınız için bizimle iletişime geçebilir, WhatsApp üzerinden anlık destek alabilir 
            veya formu doldurarak bize ulaşabilirsiniz.
          </p>
        </div>

        {/* Contact Form and Info Grid */}
        <div className="grid gap-12 lg:grid-cols-2 mb-20">
          {/* Contact Form */}
          <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-white/80 backdrop-blur-sm p-8 shadow-[0_25px_70px_rgba(79,158,248,0.15)]">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
            <div className="relative">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Mesaj Gönderin
              </h2>
              <ClientOnly>
                <ContactForm />
              </ClientOnly>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Hızlı İletişim
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Telefon</div>
                    <a href="tel:+902125902325" className="text-gray-600 hover:text-primary transition">
                      Avcılar: +90 (212) 590 23 25
                    </a>
                    <br />
                    <a href="tel:+902128830883" className="text-gray-600 hover:text-primary transition">
                      Büyükçekmece: +90 (212) 883 08 83
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success flex-shrink-0">
                    💬
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">WhatsApp</div>
                    <a href="https://wa.me/905469402200" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-success transition">
                      7/24 anlık destek
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">E-posta</div>
                    <a href="mailto:info@avcilarsurucukursu.com" className="text-gray-600 hover:text-accent transition">
                      info@avcilarsurucukursu.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                    🕐
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Çalışma Saatleri</div>
                    <p className="text-gray-600 text-sm">
                      Pazartesi - Cuma: 09:00 - 21:00<br />
                      Cumartesi: 10:00 - 20:00<br />
                      Pazar: Kapalı
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="relative overflow-hidden rounded-3xl border border-accent-red/20 bg-gradient-to-br from-accent-red via-accent to-accent-dark p-8 text-white shadow-lg">
              <h3 className="text-xl font-bold mb-4">Hemen Kayıt Olun</h3>
              <p className="text-white/80 mb-6 text-sm">
                Kayıt olmak için formu doldurun veya şubelerimizi arayın. Uzman danışmanlarımız size yardımcı olacaktır.
              </p>
              <Link
                href="/#kayit"
                className="inline-flex items-center justify-center rounded-full bg-white text-accent-red px-6 py-3 text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Kayıt Formu
              </Link>
            </div>
          </div>
        </div>

        {/* Branches */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Şubelerimiz
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {branches.map((branch) => (
              <div
                key={branch.name}
                className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-white/80 backdrop-blur-sm p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(79,158,248,0.15)]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                <div className="relative space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">{branch.name}</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-3">
                      <span className="text-primary">📍</span>
                      <div>
                        <div className="text-gray-900">{branch.address}</div>
                        <div className="text-gray-600">{branch.city}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-primary">📞</span>
                      <div className="flex flex-col gap-1">
                        <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-gray-900 hover:text-primary transition">
                          {branch.phone}
                        </a>
                        {branch.phoneMobile && (
                          <a href={`tel:${branch.phoneMobile.replace(/\s/g, '')}`} className="text-gray-900 hover:text-primary transition">
                            {branch.phoneMobile}
                          </a>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-success">💬</span>
                      <a href={branch.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-success transition">
                        WhatsApp ile iletişime geç
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-accent">✉️</span>
                      <a href={`mailto:${branch.email}`} className="text-gray-900 hover:text-accent transition">
                        {branch.email}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200/60">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Çalışma Saatleri</p>
                    <div 
                      className="text-sm text-gray-600" 
                      dangerouslySetInnerHTML={{ __html: branch.hours }}
                    />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {branch.features.map((feature) => (
                      <span key={feature} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        ✓ {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

