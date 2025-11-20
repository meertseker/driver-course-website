import Link from "next/link";
import Image from "next/image";
import { ProgramTabs } from "@/components/program-tabs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const branches = [
  {
    name: "Avcılar Şubesi",
    address: "Merkez Mahallesi Namık Kemal Caddesi Umut İş Merkezi No:23 Kat:2, Avcılar / İstanbul",
    phone: "+90 (212) 590 23 25",
    phoneMobile: "+90 (546) 940 22 00",
    whatsapp: "https://wa.me/905469402200",
    email: "avcilar@avcilarsurucukursu.com",
    hours: "Hafta içi: 09:00 - 21:00 | Cumartesi: 10:00 - 20:00",
    features: ["Modern sınıflar", "Otopark imkanı", "Metrobüs yakını"]
  },
  {
    name: "Büyükçekmece Şubesi",
    address: "19 Mayıs Mahallesi D100 Karayolu Caddesi No:1079 Daire:4, Büyükçekmece / İstanbul",
    phone: "+90 (212) 883 08 83",
    whatsapp: "https://wa.me/902128830883",
    email: "buyukcekmece@avcilarsurucukursu.com",
    hours: "Hafta içi: 09:00 - 21:00 | Cumartesi: 10:00 - 20:00",
    features: ["Geniş parkur alanı", "Sahil kenarı", "Ücretsiz otopark"]
  }
];

const quickActions = [
  {
    title: "2025 Kayıt Takvimi",
    description: "Teorik ve direksiyon ders başlangıç tarihlerini görün.",
    href: "#programs",
    action: "Takvimi İncele",
  },
  {
    title: "WhatsApp ile Hızlı Destek",
    description: "Evrak ve kayıt süreçleri için anlık yanıt alın.",
    href: "https://wa.me/900000000000",
    action: "Mesaj Gönder",
  },
  {
    title: "Ücretsiz Deneme Sınavı",
    description: "Gerçek sınav formatında online test çözün.",
    href: "#trial",
    action: "Teste Başla",
  },
];

const strengths = [
  {
    title: "%92 İlk Sınav Başarısı",
    description:
      "Gerçek sınav simülasyonları ve kişiselleştirilmiş programlar sayesinde öğrencilerimizin büyük çoğunluğu ilk denemede başarılı oluyor.",
  },
  {
    title: "15+ Profesyonel Eğitmen",
    description:
      "Direksiyon başında ortalama 12 yıl deneyime sahip, ileri sürüş teknikleri eğitimi almış kadromuz ile güven verdiğinizden emin olun.",
  },
  {
    title: "Modern Araç Filosunun Rahatlığı",
    description:
      "Son model, düzenli bakımlı ve konforlu araçlarımızla farklı sürüş koşullarına güvenle hazırlanın.",
  },
];

const processSteps = [
  {
    title: "Danışmanlık & Kayıt",
    description: "İhtiyaç analizi, belge kontrolü ve kişiselleştirilmiş ders planı.",
  },
  {
    title: "Teorik Hazırlık",
    description: "Canlı dersler, interaktif içerikler ve sınav provası oturumları.",
  },
  {
    title: "Direksiyon Eğitimleri",
    description: "Şehir içi, uzun yol ve park manevraları ile tamamlanan 1:1 dersler.",
  },
  {
    title: "Sınav Sonrası Destek",
    description: "Belge teslim sürecinde rehberlik ve ileri sürüş önerileri.",
  },
];

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
    href: "#kayit",
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
    href: "#kayit",
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
      "A2’den A’ya geçiş danışmanlığı",
      "Sınav parkuru provaları",
    ],
    href: "#kayit",
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
    href: "#kayit",
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
    href: "#kayit",
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
    href: "#kayit",
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
    href: "#iletisim",
    cta: "Teklif Al",
  },
];

// Note: licenseClasses and faqs are defined here for future use
// They can be used for a license info section or FAQ section on the homepage

const testimonials = [
  {
    name: "Merve K.",
    role: "Mayıs 2025 mezunu",
    quote:
      "Deneme sınavları ve birebir prova dersleri sayesinde teorik ve direksiyon sınavını ilk girişte verdim. Süreç boyunca hep yanımda oldular.",
  },
  {
    name: "Ahmet D.",
    role: "Kurumsal filo eğitim koordinatörü",
    quote:
      "15 sürücüden oluşan ekibimizi 3 haftada sertifikalandırdık. Hem planlama hem raporlama tarafında kusursuz bir deneyim yaşadık.",
  },
  {
    name: "Seda T.",
    role: "A2 lisans öğrencisi",
    quote:
      "Motosiklet derslerinde güvenlik odaklı yaklaşım beni çok rahatlattı. Zor parkur çalışmaları bile eğlenceli geçti.",
  },
];

const articles = [
  {
    title: "2025 Ehliyet Sınav Sistemindeki Değişiklikler",
    category: "Trafik Güncellemeleri",
    href: "/blog/2025-ehliyet-sinav-sistemindeki-degisiklikler",
    readingTime: "6 dakikalık okuma",
  },
  {
    title: "Direksiyon Sınavında Stresi Azaltmanın 5 Yolu",
    category: "Sınav Taktikleri",
    href: "/blog/direksiyon-sinavinda-stresi-azaltmanin-5-yolu",
    readingTime: "4 dakikalık okuma",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(235,138,76,0.15)_0%,_transparent_50%),_radial-gradient(circle_at_bottom_left,_rgba(226,51,51,0.12)_0%,_transparent_50%)]" />

      <div className="relative z-10 mx-auto flex w-full flex-col">
        <Header />

        <main>
          <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:pt-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              {/* Sol Taraf - Yazılar */}
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3 text-sm font-medium">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-red px-4 py-2 text-white shadow-lg">
                    <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
                    2025 kayıtları açıldı
                  </span>
                  <span className="hidden text-white md:inline">
                    %15 erken kayıt indirimi
                  </span>
                </div>
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-5xl drop-shadow-lg">
                  İstanbul&apos;da MEB onaylı sürücü kursu - Avcılar & Büyükçekmece
                </h1>
                <p className="max-w-xl text-base leading-relaxed text-white/90">
                  İstanbul Avrupa Yakası&apos;nda; teorik e‑sınav ve direksiyon sınavında yüksek başarı için kişiye özel program.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="#kayit"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-red to-accent-dark px-7 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-[0_18px_45px_rgba(226,51,51,0.4)] transition hover:shadow-[0_20px_50px_rgba(226,51,51,0.5)]"
                  >
                    Hemen Kayıt Ol
                  </Link>
                    <Link
                      href="#trial"
                      className="inline-flex items-center justify-center rounded-full border-2 border-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-white hover:text-primary"
                    >
                      Deneme Sınavı
                    </Link>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/95 backdrop-blur-sm p-4 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                    <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 rounded-full bg-[radial-gradient(circle,_rgba(235,100,46,0.2)_0%,_rgba(235,100,46,0)_70%)]" />
                    <div className="relative">
                      <p className="text-2xl font-bold text-accent-red">+3500</p>
                      <p className="text-xs font-medium text-gray-800">mezun sürücü</p>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/95 backdrop-blur-sm p-4 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                    <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 rounded-full bg-[radial-gradient(circle,_rgba(235,138,76,0.2)_0%,_rgba(235,138,76,0)_70%)]" />
                    <div className="relative">
                      <p className="text-2xl font-bold text-accent">%94</p>
                      <p className="text-xs font-medium text-gray-800">başarı oranı</p>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-white/95 backdrop-blur-sm p-4 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
                    <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 rounded-full bg-[radial-gradient(circle,_rgba(226,51,51,0.2)_0%,_rgba(226,51,51,0)_70%)]" />
                    <div className="relative">
                      <p className="text-2xl font-bold text-accent-dark">7/24</p>
                      <p className="text-xs font-medium text-gray-800">Destek</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - Hero Görsel ve Küçük Görseller */}
              <div className="relative flex flex-col gap-6">
                {/* Ana Hero Görsel - İlginç Çerçeve */}
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-accent-red via-accent to-accent-dark rounded-[40px] opacity-60 blur-xl group-hover:opacity-80 transition duration-500" />
                  <div className="relative overflow-hidden rounded-[40px] border-4 border-white shadow-2xl">
                    <Image
                      src="https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=600&h=400&fit=crop&q=80"
                      alt="Avcılar Sürücü Kursu - Direksiyon Eğitimi"
                      width={600}
                      height={400}
                      className="w-full h-[400px] object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-lg font-bold drop-shadow-lg">Modern Araç Filosu</p>
                      <p className="text-sm drop-shadow-lg">Son model araçlarla güvenli eğitim</p>
                    </div>
                  </div>
                </div>

                {/* Alt Görseller - İlginç Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {/* Oval Çerçeve 1 */}
                  <div className="relative group overflow-hidden rounded-[30px] border-3 border-white shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-red/20 to-transparent" />
                    <Image
                      src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=300&h=200&fit=crop&q=80"
                      alt="Profesyonel Eğitmenler"
                      width={200}
                      height={150}
                      className="w-full h-[150px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <p className="text-white text-xs font-bold text-center px-2">Profesyonel Eğitmenler</p>
                    </div>
                  </div>

                  {/* Daire Çerçeve 2 */}
                  <div className="relative group overflow-hidden rounded-full border-4 border-accent shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                    <Image
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=300&h=300&fit=crop&q=80"
                      alt="Sınav Başarısı"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <p className="text-white text-xs font-bold text-center">İlk Sınav Başarısı</p>
                    </div>
                  </div>

                  {/* Kare Çerçeve 3 */}
                  <div className="relative group overflow-hidden rounded-[30px] border-3 border-white shadow-xl transform hover:scale-105 transition duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    <Image
                      src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=300&h=200&fit=crop&q=80"
                      alt="Mutlu Öğrenciler"
                      width={200}
                      height={150}
                      className="w-full h-[150px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <p className="text-white text-xs font-bold text-center px-2">Mutlu Mezunlar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 pb-16" id="resources">
            <div className="grid gap-6 md:grid-cols-3">
              {quickActions.map((item, idx) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-[30px] border border-white/30 bg-white/95 backdrop-blur-sm shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"
                >
                  {/* Üst Görsel Alan */}
                  <div className="relative h-[140px] overflow-hidden">
                    <Image
                      src={
                        idx === 0 ? "https://images.unsplash.com/photo-1506784926709-22f1ec395907?w=400&h=200&fit=crop&q=80" :
                        idx === 1 ? "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop&q=80" :
                        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop&q=80"
                      }
                      alt={item.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-1">
                        {item.action}
                      </p>
                      <h3 className="text-base font-bold text-white">{item.title}</h3>
                    </div>
                  </div>

                  {/* Alt İçerik */}
                  <div className="p-5 space-y-3">
                    <p className="text-xs text-gray-700 line-clamp-2 font-medium">{item.description}</p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition group-hover:gap-3"
                    >
                      İncele
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50/30 to-transparent py-20" id="about">
            <div className="mx-auto w-full max-w-7xl px-6">
              {/* Başlık */}
              <div className="text-center mb-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Güvenilirlik
                </span>
                <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                  Başarı hikayeleri ile kanıtlanan uzman eğitim
                </h2>
              </div>

              {/* Ana İçerik - Görseller ve Başarı Kartları */}
              <div className="grid gap-8 lg:grid-cols-2 mb-12">
                {/* Sol - Araç Filosu Görselleri */}
                <div className="space-y-6">
                  {/* Büyük Araç Görseli */}
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-[30px] opacity-50 blur-lg group-hover:opacity-70 transition" />
                    <div className="relative overflow-hidden rounded-[30px] border-3 border-white shadow-2xl">
                      <Image
                        src="https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&h=400&fit=crop&q=80"
                        alt="Modern Araç Filosu"
                        width={600}
                        height={400}
                        className="w-full h-[300px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-xl font-bold drop-shadow-lg">Modern Araç Filosumuz</p>
                        <p className="text-sm drop-shadow-lg">2023-2024 model, tam donanımlı araçlar</p>
                      </div>
                    </div>
                  </div>

                  {/* Alt Küçük Görseller */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group overflow-hidden rounded-[25px] border-2 border-accent shadow-xl transform hover:rotate-2 transition duration-300">
                      <Image
                        src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=300&h=200&fit=crop&q=80"
                        alt="Otopark Eğitimi"
                        width={300}
                        height={200}
                        className="w-full h-[180px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-accent/90 to-transparent flex items-end p-4">
                        <p className="text-white text-sm font-bold">Park Eğitimi</p>
                      </div>
                    </div>
                    <div className="relative group overflow-hidden rounded-[25px] border-2 border-primary shadow-xl transform hover:-rotate-2 transition duration-300">
                      <Image
                        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=300&h=200&fit=crop&q=80"
                        alt="Şehir İçi Sürüş"
                        width={300}
                        height={200}
                        className="w-full h-[180px] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-4">
                        <p className="text-white text-sm font-bold">Şehir İçi Pratik</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sağ - Başarı Kartları */}
                <div className="grid gap-6 sm:grid-cols-2 content-start">
                  {strengths.map((item, index) => (
                    <div
                      key={item.title}
                      className={`group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)] ${
                        index === 0 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                      <div className="relative space-y-3">
                        <div className="inline-flex items-center justify-center rounded-full bg-success/10 p-2.5">
                          <span className="text-xl font-bold text-success">✓</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Eğitmen Fotoğrafları - Yuvarlak Çerçeveler */}
              <div className="relative py-12 px-8 rounded-[40px] bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border border-gray-200/30">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Profesyonel Eğitmen Kadromuz</h3>
                  <p className="text-sm text-gray-600">15+ yıl deneyimli, sertifikalı eğitmenlerimiz</p>
                </div>
                <div className="flex justify-center items-center gap-6 flex-wrap">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent-red via-accent to-primary rounded-full opacity-60 blur group-hover:opacity-100 transition" />
                      <div className="relative overflow-hidden rounded-full border-4 border-white shadow-xl w-24 h-24 transform hover:scale-110 transition duration-300">
                        <Image
                          src={`https://i.pravatar.cc/150?img=${i + 10}`}
                          alt={`Eğitmen ${i}`}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-orange-50/30 to-transparent py-20" id="branches">
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="mb-12 flex flex-col items-center gap-4 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Şubelerimiz
                </span>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  İstanbul Avrupa Yakası&apos;nda 2 Şube
                </h2>
                <p className="max-w-3xl text-base text-white/90 font-medium">
                  Size en yakın şubemizden profesyonel eğitim alın.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {branches.map((branch, idx) => (
                  <div
                    key={branch.name}
                    className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-white/80 backdrop-blur-sm shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(79,158,248,0.15)]"
                  >
                    {/* Şube Fotoğrafı */}
                    <div className="relative overflow-hidden h-[220px]">
                      <Image
                        src={idx === 0 
                          ? "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=300&fit=crop&q=80"
                          : "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=300&fit=crop&q=80"
                        }
                        alt={branch.name}
                        width={600}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute top-4 right-4 bg-accent-red text-white px-4 py-2 rounded-full text-xs font-bold">
                        {idx === 0 ? "Metrobüs Yakını" : "Sahil Kenarı"}
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="text-2xl font-bold drop-shadow-lg mb-1">{branch.name}</h3>
                        <p className="text-xs drop-shadow-lg opacity-90">{branch.address}</p>
                      </div>
                    </div>

                    {/* Şube Detayları */}
                    <div className="p-6 space-y-4">
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">📞</span>
                          <div className="flex flex-col gap-1">
                            <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-gray-900 hover:text-primary transition font-medium">
                              {branch.phone}
                            </a>
                            {branch.phoneMobile && (
                              <a href={`tel:${branch.phoneMobile.replace(/\s/g, '')}`} className="text-gray-900 hover:text-primary transition font-medium">
                                {branch.phoneMobile}
                              </a>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">💬</span>
                          <a href={branch.whatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-success transition">
                            WhatsApp Destek
                          </a>
                        </div>
                      </div>
                      <div className="pt-3 border-t border-gray-200/60">
                        <p className="text-xs font-semibold text-gray-700 mb-2">Çalışma Saatleri</p>
                        <p className="text-xs text-gray-600">{branch.hours}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {branch.features.map((feature) => (
                          <span key={feature} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/iletisim"
                        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-accent-red to-accent-dark px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_15px_40px_rgba(226,51,51,0.3)] transition hover:shadow-[0_18px_45px_rgba(226,51,51,0.4)]"
                      >
                        Bu Şubeye Kayıt Ol
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-6 py-20" id="programs">
            <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
              <span className="inline-flex items-center justify-center rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent md:self-start">
                Programlar
              </span>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white md:text-4xl">
                    Tüm Sınıflar İçin Eğitim Programları
                  </h2>
                  <p className="max-w-2xl text-sm text-white/90 font-medium">
                    A&apos;dan D&apos;ye, motosiklet ve ağır vasıta dahil tüm ehliyet sınıfları
                  </p>
                </div>
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-full bg-accent text-white px-6 py-3 text-sm font-semibold transition hover:bg-accent-dark shadow-md hover:shadow-lg md:self-start"
                >
                  Danışman İle Konuş
                </Link>
              </div>
            </div>

            <ProgramTabs programs={programs} />
          </section>

          <section className="bg-gradient-to-br from-orange-50/30 to-transparent py-20" id="success">
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="mb-12 flex flex-col items-center gap-4 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Süreç
                </span>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  4 Adımda Ehliyet Sahibi Olun
                </h2>
              </div>
              
              {/* Görsel Timeline */}
              <div className="relative">
                {/* Bağlantı Çizgisi - Desktop */}
                <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-accent via-primary to-accent-red hidden md:block mx-[10%]" />
                
                <div className="grid gap-8 md:grid-cols-4">
                  {processSteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="group relative flex flex-col items-center text-center"
                    >
                      {/* İkon Çerçevesi - Farklı Şekiller */}
                      <div className="relative mb-6 z-10">
                        <div className={`absolute -inset-2 bg-gradient-to-r ${
                          index === 0 ? 'from-accent to-accent-dark' :
                          index === 1 ? 'from-primary to-secondary' :
                          index === 2 ? 'from-accent-red to-accent' :
                          'from-accent-dark to-primary'
                        } opacity-50 blur-lg group-hover:opacity-80 transition ${
                          index % 2 === 0 ? 'rounded-[30px]' : 'rounded-full'
                        }`} />
                        <div className={`relative overflow-hidden border-4 border-white shadow-2xl w-32 h-32 bg-white flex items-center justify-center ${
                          index % 2 === 0 ? 'rounded-[30px]' : 'rounded-full'
                        }`}>
                          <Image
                            src={
                              index === 0 ? "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=150&h=150&fit=crop&q=80" :
                              index === 1 ? "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=150&h=150&fit=crop&q=80" :
                              index === 2 ? "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=150&h=150&fit=crop&q=80" :
                              "https://images.unsplash.com/photo-1515169067868-5387ec356754?w=150&h=150&fit=crop&q=80"
                            }
                            alt={step.title}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-center justify-center">
                            <span className="text-3xl font-bold text-white drop-shadow-lg">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* İçerik */}
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-white">{step.title}</h3>
                        <p className="text-sm text-white/90 font-medium">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-6 py-20" id="trial">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                  Sosyal Kanıt
                </span>
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  Kursiyerlerimiz neler söylüyor?
                </h2>
                <p className="text-base text-white/90 font-medium">
                  Son mezunlarımızdan başarı hikayeleri
                </p>
                
                {/* Testimonials Grid - Fotoğraflı */}
                <div className="grid gap-6 sm:grid-cols-1">
                  {testimonials.map((item, idx) => (
                    <div
                      key={item.name}
                      className="group relative overflow-hidden rounded-[30px] border border-border bg-white/90 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <div className="flex gap-4 items-start">
                        {/* Öğrenci Fotoğrafı - Farklı Şekiller */}
                        <div className={`relative flex-shrink-0 ${idx === 1 ? 'rounded-[20px]' : 'rounded-full'}`}>
                          <div className={`absolute -inset-1 bg-gradient-to-r from-accent via-accent-dark to-accent-red opacity-60 blur ${idx === 1 ? 'rounded-[20px]' : 'rounded-full'}`} />
                          <div className={`relative overflow-hidden border-3 border-white shadow-xl w-16 h-16 ${idx === 1 ? 'rounded-[20px]' : 'rounded-full'}`}>
                            <Image
                              src={`https://i.pravatar.cc/150?img=${idx + 20}`}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        {/* Testimonial İçeriği */}
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <p className="text-sm font-bold text-gray-900">{item.name}</p>
                              <p className="text-xs text-gray-600">{item.role}</p>
                            </div>
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className="text-accent text-sm">⭐</span>
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Başarı Görselleri Galeri */}
                <div className="grid grid-cols-4 gap-3 mt-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative group overflow-hidden rounded-[20px] border-2 border-accent/30 shadow-lg transform hover:scale-105 transition duration-300">
                      <Image
                        src={`https://images.unsplash.com/photo-${1522881193457 + i * 1000}-${i}e9fbae2f5c?w=200&h=200&fit=crop`}
                        alt={`Mutlu Mezun ${i}`}
                        width={150}
                        height={150}
                        className="w-full h-[100px] object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                        <p className="text-white text-xs font-bold">🎉</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Online Deneme Sınavı */}
              <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-white/80 shadow-[0_25px_70px_rgba(79,158,248,0.15)] backdrop-blur-md">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                <div className="relative flex flex-col gap-6 p-8">
                  {/* Sınav İllüstrasyonu */}
                  <div className="relative h-[180px] rounded-[20px] overflow-hidden border-2 border-primary/20">
                    <Image
                      src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=200&fit=crop&q=80"
                      alt="Online Deneme Sınavı"
                      width={400}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-end p-4">
                      <div className="text-white">
                        <p className="text-lg font-bold">Online Deneme Sınavı</p>
                        <p className="text-xs">Ücretsiz - 20 Soru</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      Seviyeni ölç, eksiklerini gör
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          ✓
                        </span>
                        10 dakikada tamamla
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          ✓
                        </span>
                        Anlık sonuç ve rapor
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          ✓
                        </span>
                        Konu bazlı öneriler
                      </li>
                    </ul>
                    <Link
                      href="#"
                      className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-dark px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_15px_40px_rgba(235,138,76,0.3)] transition hover:shadow-[0_18px_45px_rgba(235,138,76,0.4)]"
                    >
                      Teste Başla
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50/20 to-transparent py-20">
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
                <span className="inline-flex items-center justify-center rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent md:self-start">
                  Blog
                </span>
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                      Sürüş İpuçları & Güncel Haberler
                    </h2>
                    <p className="max-w-2xl text-sm text-white/90 font-medium">
                      Sınav taktikleri ve yasa değişiklikleri
                    </p>
                  </div>
                  <Link
                    href="/blog"
                    className="inline-flex items-center justify-center rounded-full border-2 border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-primary md:self-start"
                  >
                    Tüm Yazılar
                  </Link>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {articles.map((article, idx) => (
                  <Link
                    key={article.title}
                    href={article.href}
                    className="group relative overflow-hidden rounded-[30px] border border-border/60 bg-white/80 backdrop-blur-sm shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]"
                  >
                    {/* Blog Görseli */}
                    <div className="relative h-[200px] overflow-hidden">
                      <Image
                        src={idx === 0 
                          ? "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&h=300&fit=crop&q=80"
                          : "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=300&fit=crop&q=80"
                        }
                        alt={article.title}
                        width={600}
                        height={300}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-2 rounded-full bg-accent/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                          {article.category}
                        </span>
                      </div>
                    </div>

                    {/* Blog İçeriği */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition line-clamp-2">
                        {article.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-600">{article.readingTime}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                          Oku <span aria-hidden>→</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden py-20" id="kayit">
            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-6 rounded-[40px] border border-primary/20 bg-gradient-to-br from-primary via-secondary to-primary/80 px-8 py-12 text-center text-white shadow-[0_35px_90px_rgba(29,104,169,0.25)] lg:px-16">
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Kayıt Ol
              </span>
              <h2 className="text-3xl font-semibold lg:text-4xl">
                Danışmanlarımız Sizi Arasın
              </h2>
              <p className="max-w-2xl text-sm text-white/80">
                15 dakika içinde dönüş yapıyoruz
              </p>
              <form className="flex w-full max-w-md flex-col gap-4 text-left sm:flex-row sm:items-center sm:justify-center">
                <input
                  type="tel"
                  placeholder="Telefon numaranız"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/90 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-red to-accent-dark px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:shadow-lg whitespace-nowrap"
                >
                  Beni Arayın
                </button>
              </form>
              <div className="flex flex-col items-center gap-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                  KVKK güvencesi
                </p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-white/70">Diyecekleriniz mi var?</span>
                  <Link 
                    href="/iletisim" 
                    className="text-accent-dark bg-white px-4 py-2 rounded-full font-semibold hover:bg-white/90 transition-all shadow-md"
                  >
                    Detaylı Form
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  );
}
