import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Hakkımızda',
  description: '2009\'dan bu yana Avcılar ve Büyükçekmece\'de profesyonel sürücü eğitimi veren Efe Sürücü Kursu hakkında bilgi edinin.',
  url: '/hakkimizda',
  keywords: ['efe sürücü kursu', 'hakkımızda', 'sürücü kursu tarihi', 'profesyonel eğitim']
});

const values = [
  {
    title: "Güvenlik Öncelikli Eğitim",
    description: "Sadece ehliyet kazandırmakla kalmıyor; trafikte doğru reflekslere sahip, sorumlu sürücüler yetiştiriyoruz.",
    icon: "🛡️"
  },
  {
    title: "Deneyimli Kadro",
    description: "15+ profesyonel eğitmen kadromuz, ortalama 12 yıl sürüş deneyimine sahip ve düzenli eğitim alan uzmanlardan oluşuyor.",
    icon: "👥"
  },
  {
    title: "Modern Altyapı",
    description: "Son model araç filomuz, güncel müfredat ve gerçek sınav rotalarında pratik imkanı sunuyoruz.",
    icon: "🚗"
  },
  {
    title: "Şeffaf Süreç",
    description: "Kayıttan ehliyet teslimine kadar tüm süreçlerde net bilgilendirme ve rehberlik sağlıyoruz.",
    icon: "📋"
  }
];

const milestones = [
  { year: "2009", event: "Avcılar şubemizle kurumsal yolculuğumuza başladık" },
  { year: "2015", event: "Büyükçekmece şubemizi açarak hizmet ağımızı genişlettik" },
  { year: "2020", event: "Online teorik eğitim sistemini devreye aldık" },
  { year: "2023", event: "3500+ mezun sürücü sayısına ulaştık" },
  { year: "2024", event: "%94 ilk seferde başarı oranıyla sektör lideri olduk" }
];

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" className="mx-auto w-full max-w-7xl px-6 py-20">
        <Breadcrumbs items={[{ label: 'Hakkımızda' }]} />

        {/* Hero Section */}
        <div className="mb-20 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-6">
            Biz Kimiz?
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-6 md:text-5xl">
            15 yıldır güvenli sürücü yetiştiriyoruz
          </h1>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed font-medium">
            2009 yılından bu yana Avcılar ve Büyükçekmece&apos;de faaliyet gösteren Efe Sürücü Kursu, 
            sadece ehliyet kazandırmakla kalmayıp, trafikte doğru reflekslere sahip, sorumlu ve 
            güvenli sürücüler yetiştirme misyonuyla hizmet vermektedir.
          </p>
        </div>

        {/* Values Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center drop-shadow-sm">
            Değerlerimiz
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                <div className="relative space-y-4">
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 drop-shadow-sm">{value.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Yolculuğumuz
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="group relative overflow-hidden rounded-2xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative">
                        <span className="inline-block text-3xl font-bold text-primary mb-2">
                          {milestone.year}
                        </span>
                        <p className="text-gray-600">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold shadow-lg z-10">
                    {index + 1}
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-20">
          <div className="relative overflow-hidden rounded-[32px] border border-primary/20 bg-gradient-to-br from-primary via-secondary to-primary/80 px-8 py-16 text-white shadow-[0_30px_80px_rgba(29,104,169,0.25)]">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-center mb-12">Rakamlarla Efe Sürücü Kursu</h2>
              <div className="grid gap-8 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">+3500</div>
                  <div className="text-white/80">Mezun Sürücü</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">%94</div>
                  <div className="text-white/80">İlk Seferde Başarı</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">15+</div>
                  <div className="text-white/80">Profesyonel Eğitmen</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">2</div>
                  <div className="text-white/80">Modern Şube</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Siz de aramıza katılın!
          </h2>
          <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto font-medium">
            15 yıllık deneyimimiz ve başarı odaklı eğitim yaklaşımımızla güvenli sürücü olma yolculuğunuzda yanınızdayız.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#kayit"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-red to-accent-dark text-white px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Hemen Kayıt Ol
            </Link>
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-full bg-accent text-white px-8 py-4 text-sm font-semibold hover:bg-accent-dark shadow-lg hover:shadow-xl transition-all"
            >
              İletişime Geç
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

