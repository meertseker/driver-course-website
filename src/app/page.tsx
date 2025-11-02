import Link from "next/link";
import { ProgramTabs } from "@/components/program-tabs";

const navLinks = [
  { label: "Hakkımızda", href: "#about" },
  { label: "Şubelerimiz", href: "#branches" },
  { label: "Programlar", href: "#programs" },
  { label: "SSS", href: "#faq" },
  { label: "İletişim", href: "#kayit" },
];

const branches = [
  {
    name: "Avcılar Şubesi",
    address: "Ambarlı Mahallesi, Rıfat Ilgaz Sokak No:15/A, Avcılar / İstanbul",
    phone: "+90 (212) 000 00 00",
    whatsapp: "https://wa.me/902120000000",
    email: "avcilar@efesurucukursu.com",
    hours: "Hafta içi: 09:00 - 21:00 | Cumartesi: 10:00 - 20:00",
    features: ["Modern sınıflar", "Otopark imkanı", "Metrobüs yakını"]
  },
  {
    name: "Büyükçekmece Şubesi",
    address: "Kumburgaz Mahallesi, Sahil Yolu Caddesi No:28, Büyükçekmece / İstanbul",
    phone: "+90 (212) 000 00 01",
    whatsapp: "https://wa.me/902120000001",
    email: "buyukcekmece@efesurucukursu.com",
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

const licenseClasses = [
  { code: "M", name: "M Moped", minAge: "16", desc: "Azami 45 km/s mopedler." },
  { code: "A1", name: "A1 Motosiklet", minAge: "16", desc: "125 cc / 11 kW’a kadar." },
  { code: "A2", name: "A2 Motosiklet", minAge: "18", desc: "35 kW’a kadar motosiklet." },
  { code: "A", name: "A Motosiklet", minAge: "20/24", desc: "Tüm motosikletler." },
  { code: "B1", name: "B1 Dört Tekerlekli", minAge: "16", desc: "Quad/dört tekerlekli." },
  { code: "B", name: "B Otomobil", minAge: "18", desc: "Otomobil/kamyonet ≤ 3.500 kg." },
  { code: "BE", name: "BE Römorklu", minAge: "18", desc: "B sınıfı + römork." },
  { code: "C1", name: "C1 Kamyon", minAge: "18", desc: "3.5–7.5 ton arası." },
  { code: "C", name: "C Kamyon", minAge: "21", desc: "> 7.5 ton kamyon/çekici." },
  { code: "CE", name: "CE Çekici", minAge: "21", desc: "Römorklu ağır vasıta." },
  { code: "D1", name: "D1 Minibüs", minAge: "21", desc: "16+1 yolcu." },
  { code: "D", name: "D Otobüs", minAge: "24", desc: "> 16 yolcu." },
  { code: "F", name: "F Traktör", minAge: "18", desc: "Tarımsal traktör." },
  { code: "G", name: "G İş Makinesi", minAge: "18", desc: "Motorlu iş makineleri." },
];

const faqs = [
  {
    q: "Kurs ücreti ne kadar?",
    a: "Sınıfa ve kampanyalara göre değişir. Güncel fiyat ve taksit seçenekleri için hemen arayın veya formu doldurun.",
  },
  {
    q: "Teorik e‑sınavdan geçme puanı nedir?",
    a: "70 puan ve üzeri başarıdır. Kursumuzda gerçek formatta deneme sınavları ile hazırlanırsınız.",
  },
  {
    q: "Direksiyon dersleri nasıl planlanır?",
    a: "Çalışma saatlerinize göre esnek takvim oluştururuz. Sınav rotalarında birebir ders yapılır.",
  },
  {
    q: "A2’den A’ya geçiş şartı nedir?",
    a: "En az 2 yıl A2 deneyimi ile 20 yaşında A sınıfına geçiş mümkündür; deneyim yoksa 24 yaş.",
  },
  {
    q: "Yabancı ehliyetimi kullanabilir miyim?",
    a: "Türkiye’ye girişten itibaren 6 aya kadar kullanılabilir. Süre sonunda Türk ehliyetine dönüştürme gerekir.",
  },
];

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
    href: "#",
    readingTime: "6 dakikalık okuma",
  },
  {
    title: "Direksiyon Sınavında Stresi Azaltmanın 5 Yolu",
    category: "Sınav Taktikleri",
    href: "#",
    readingTime: "4 dakikalık okuma",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(79,158,248,0.08)_0%,_transparent_50%),_radial-gradient(circle_at_bottom_left,_rgba(255,169,77,0.08)_0%,_transparent_50%)]" />

      <div className="relative z-10 mx-auto flex w-full flex-col">
        <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-border/50">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-500 text-lg font-semibold text-primary-foreground shadow-[0_10px_30px_rgba(79,158,248,0.3)]">
                SK
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                  Efe Sürücü Kursu
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Güvenli sürüşe hazırsınız
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="relative text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                  <span className="pointer-events-none absolute inset-x-0 -bottom-2 hidden h-0.5 rounded-full bg-primary md:block" />
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="tel:+902120000000"
                className="rounded-full border border-border px-5 py-2 text-sm font-medium text-foreground transition hover:border-primary hover:text-primary"
              >
                +90 (212) 000 00 00
              </Link>
              <Link
                href="#kayit"
                className="rounded-full bg-gradient-to-r from-accent to-orange-400 px-5 py-2 text-sm font-semibold text-accent-foreground shadow-[0_10px_25px_rgba(255,169,77,0.4)] transition hover:shadow-[0_12px_30px_rgba(255,169,77,0.5)]"
              >
                Hemen Kayıt Ol
              </Link>
            </div>

            <div className="md:hidden">
              <Link
                href="#kayit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-orange-400 px-4 py-2 text-sm font-semibold text-accent-foreground shadow-lg"
              >
                Kayıt Ol
              </Link>
            </div>
          </div>
        </header>

        <main>
          <section className="mx-auto w-full max-w-7xl px-6 pb-20 pt-10 lg:pt-16">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-3 text-sm font-medium text-accent">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-accent">
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    2025 kayıtları açıldı
                  </span>
                  <span className="hidden text-foreground md:inline">
                    Haziran grubuna %15 erken kayıt indirimi
                  </span>
                </div>
                <h1 className="text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                  Avcılar ve Büyükçekmece'de MEB onaylı sürücü kursu: A'dan D'ye tüm sınıflar
                </h1>
                <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
                  İstanbul Avrupa Yakası'nın iki stratejik noktasında; teorik e‑sınav ve direksiyon sınavında yüksek başarı için kişiye özel program, gerçek sınav rotaları ve profesyonel eğitmen kadrosu.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="#kayit"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-orange-400 px-7 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-[0_18px_45px_rgba(255,169,77,0.4)] transition hover:shadow-[0_20px_50px_rgba(255,169,77,0.5)]"
                  >
                    Hemen Kayıt Ol
                  </Link>
                  <Link
                    href="#trial"
                    className="inline-flex items-center justify-center rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-primary-foreground"
                  >
                    Deneme Sınavını Çöz
                  </Link>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]">
                    <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                    <div className="relative">
                      <p className="text-3xl font-bold text-primary">+3500</p>
                      <p className="text-sm font-medium text-foreground">mezun sürücü</p>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]">
                    <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                    <div className="relative">
                      <p className="text-3xl font-bold text-primary">%94</p>
                      <p className="text-sm font-medium text-foreground">ilk seferde başarı oranı</p>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]">
                    <div className="absolute right-0 top-0 h-16 w-16 translate-x-6 -translate-y-6 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                    <div className="relative">
                      <p className="text-3xl font-bold text-primary">7/24</p>
                      <p className="text-sm font-medium text-foreground">WhatsApp desteği</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 -translate-y-4 translate-x-4 rounded-[32px] bg-[radial-gradient(circle,_rgba(79,158,248,0.2)_0%,_rgba(79,158,248,0)_70%)] blur-xl" />
                <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-white/80 shadow-[0_30px_80px_rgba(79,158,248,0.15)] backdrop-blur-md">
                  <div className="flex flex-col gap-8 p-10">
                    <div className="space-y-4">
                      <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary/70">
                        Başarı Formülümüz
                      </p>
                      <h2 className="text-2xl font-bold text-foreground">
                        4 adımda ehliyet sahibi olun
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Kanıtlanmış eğitim metodumuz ile kısa sürede, güvenle sınava hazırlanın ve ilk denemede başarılı olun.
                      </p>
                    </div>
                    <div className="relative grid gap-6">
                      <div className="absolute left-4 top-6 bottom-6 w-px bg-border hidden sm:block" />
                      
                      <div className="flex items-start gap-4">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-white text-sm font-semibold text-muted-foreground">
                            1
                          </div>
                        </div>
                        <div className="flex-1 pt-0.5">
                          <p className="font-semibold text-foreground mb-1">Ücretsiz Ön Değerlendirme</p>
                          <p className="text-sm text-muted-foreground">Bireysel ihtiyaçlarınızı belirleyip özel program oluşturuyoruz</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-white text-sm font-semibold text-muted-foreground">
                            2
                          </div>
                        </div>
                        <div className="flex-1 pt-0.5">
                          <p className="font-semibold text-foreground mb-1">Yoğun Teorik Hazırlık</p>
                          <p className="text-sm text-muted-foreground">Güncel müfredat, deneme sınavları ve interaktif içerikler</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-white text-sm font-semibold text-muted-foreground">
                            3
                          </div>
                        </div>
                        <div className="flex-1 pt-0.5">
                          <p className="font-semibold text-foreground mb-1">Gerçek Rotada Pratik</p>
                          <p className="text-sm text-muted-foreground">Sınav güzergahlarında birebir direksiyon eğitimi</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="relative z-10 flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-border bg-white text-sm font-semibold text-muted-foreground">
                            4
                          </div>
                        </div>
                        <div className="flex-1 pt-0.5">
                          <p className="font-semibold text-foreground mb-1">Sınav Provası & Başarı</p>
                          <p className="text-sm text-muted-foreground">Son kontroller ile özgüvenle sınava girin</p>
                        </div>
                      </div>
                    </div>
                    <Link
                      href="#branches"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
                    >
                      Size En Yakın Şubeyi Seçin
                      <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 pb-16" id="resources">
            <div className="grid gap-4 md:grid-cols-3">
              {quickActions.map((item) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]"
                >
                  <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                  <div className="relative space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                      {item.action}
                    </p>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3"
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
            <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Güvenilirlik
                </span>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Başarı hikayeleri ile kanıtlanan uzman eğitim yaklaşımı
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  2009'dan bu yana Avcılar ve Büyükçekmece şubelerimizde, sadece ehliyet kazandırmakla kalmıyor; trafikte doğru reflekslere sahip, sorumlu sürücüler yetiştiriyoruz. Eğitmenlerimiz ileri sürüş ve ilk yardım konusunda düzenli eğitim alırken, öğrencilerimize gerçek sınav şartlarında prova yapma imkânı sağlıyoruz.
                </p>
                <p className="text-base leading-relaxed text-muted-foreground">
                  Her iki şubemizde de aynı kaliteli eğitim standartları, modern araç filosu ve deneyimli kadro ile hizmet veriyoruz. İstanbul Avrupa Yakası'nın en kolay ulaşılabilir noktalarında, size en yakın şubemizden profesyonel eğitim alın.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {strengths.map((item) => (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]"
                  >
                    <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                    <div className="relative space-y-3">
                      <div className="inline-flex items-center justify-center rounded-full bg-success/10 p-2.5">
                        <span className="text-xl font-bold text-success">✓</span>
                      </div>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-orange-50/30 to-transparent py-20" id="branches">
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="mb-12 flex flex-col items-center gap-4 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Şubelerimiz
                </span>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  İstanbul Avrupa Yakası'nda 2 Şube
                </h2>
                <p className="max-w-3xl text-base text-muted-foreground">
                  Size en yakın şubemizden profesyonel eğitim alın. Her iki şubemizde de aynı kaliteli hizmet ve modern olanaklar.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2">
                {branches.map((branch) => (
                  <div
                    key={branch.name}
                    className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-white/80 backdrop-blur-sm p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(79,158,248,0.15)]"
                  >
                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-12 -translate-y-12 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                    <div className="relative space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-foreground">{branch.name}</h3>
                        <p className="text-sm text-muted-foreground">{branch.address}</p>
                      </div>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">📞</span>
                          <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="text-foreground hover:text-primary transition">
                            {branch.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-success/10 text-success">💬</span>
                          <a href={branch.whatsapp} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-success transition">
                            WhatsApp ile iletişime geç
                          </a>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">✉️</span>
                          <a href={`mailto:${branch.email}`} className="text-foreground hover:text-accent transition">
                            {branch.email}
                          </a>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-border/60">
                        <p className="text-sm font-semibold text-foreground mb-3">Çalışma Saatleri</p>
                        <p className="text-sm text-muted-foreground">{branch.hours}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {branch.features.map((feature) => (
                          <span key={feature} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                            ✓ {feature}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="#kayit"
                        className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_15px_40px_rgba(79,158,248,0.3)] transition hover:shadow-[0_18px_45px_rgba(79,158,248,0.4)]"
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
              <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary md:self-start">
                Programlar
              </span>
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                    İhtiyacınıza göre ölçeklenen program yapısı
                  </h2>
                  <p className="max-w-2xl text-base text-muted-foreground">
                    Kişisel hızınıza, mevcut deneyiminize ve takvim ihtiyaçlarınıza göre düzenlenen program modüllerini seçin; kalanını eğitim danışmanlarımız planlasın.
                  </p>
                </div>
                <Link
                  href="#kayit"
                  className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                >
                  Kayıt danışmanı ile konuş
                </Link>
              </div>
            </div>

            <ProgramTabs programs={programs} />
          </section>

          <section className="bg-gradient-to-br from-orange-50/30 to-transparent py-20" id="success">
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="mb-12 flex flex-col items-center gap-4 text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Süreç
                </span>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Başarıyı garantileyen şeffaf yol haritası
                </h2>
                <p className="max-w-3xl text-base text-muted-foreground">
                  Eğitim yolculuğunuzun her adımını netleştirdik. CNRLOGISTIC’te gördüğünüz kurumsal disiplin ve raporlamayı bireysel kurs deneyimine uyarladık.
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-4">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="group relative overflow-hidden flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]"
                  >
                    <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                    <div className="relative flex flex-col gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                        0{index + 1}
                      </span>
                      <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <span className="absolute right-3 top-1/2 hidden h-px w-20 -translate-y-1/2 bg-linear-to-r from-primary/60 to-transparent md:block" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto w-full max-w-7xl px-6 py-20" id="trial">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Sosyal Kanıt
                </span>
                <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                  Kursiyerlerimiz neler söylüyor?
                </h2>
                <p className="text-base text-muted-foreground">
                  Her mezunumuzdan aldığımız geri bildirimleri programlarımızı sürekli geliştirmek için kullanıyoruz. İşte son mezunlarımızdan bazıları:
                </p>
                <div className="grid gap-6 sm:grid-cols-3">
                  {testimonials.map((item) => (
                    <div
                      key={item.name}
                      className="group relative overflow-hidden flex h-full flex-col gap-3 rounded-3xl border border-border bg-card/90 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(15,23,42,0.1)]"
                    >
                      <div className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                      <div className="relative flex flex-col gap-3">
                        <p className="text-sm text-muted-foreground">"{item.quote}"</p>
                        <div>
                          <p className="text-sm font-bold text-foreground">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-white/80 shadow-[0_25px_70px_rgba(79,158,248,0.15)] backdrop-blur-md">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
                <div className="relative flex flex-col gap-6 p-10">
                  <h3 className="text-2xl font-bold text-foreground">
                    Online deneme sınavı ile seviyeni ölç
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Resmî teorik sınav formatıyla birebir aynı yapıda hazırlanmış 20 soruluk quiz, sonuç raporu ve eksik kaldığın konulara göre çalışma önerileri.
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        ✓
                      </span>
                      10 dakikada tamamlanır, anlık skor alırsın.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        ✓
                      </span>
                      Eksik olduğun konu başlıkları için blog önerileri gelir.
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                        ✓
                      </span>
                      İstersen sonuç raporunu danışmanına iletebilirsin.
                    </li>
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-primary to-blue-500 px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_15px_40px_rgba(79,158,248,0.3)] transition hover:shadow-[0_18px_45px_rgba(79,158,248,0.4)]"
                  >
                    Deneme Sınavını Başlat
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-blue-50/20 to-transparent py-20">
            <div className="mx-auto w-full max-w-7xl px-6">
              <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
                <span className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary md:self-start">
                  İçgörüler
                </span>
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-foreground md:text-4xl">
                    Trafik değişikliklerinden haberdar olun
                  </h2>
                    <p className="max-w-2xl text-base text-muted-foreground">
                      En güncel yasa değişiklikleri, sürüş ipuçları ve sınav taktikleri düzenli blog gönderilerimizde.
                    </p>
                  </div>
                  <Link
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground"
                  >
                    Tüm yazıları gör
                  </Link>
                </div>
              </div>
              <div className="grid gap-6 md:grid-cols-2">
                {articles.map((article) => (
                  <Link
                    key={article.title}
                    href={article.href}
                    className="group relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-8 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]"
                  >
                    <div className="absolute right-0 top-0 h-28 w-28 translate-x-10 -translate-y-10 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.12)_0%,_rgba(79,158,248,0)_70%)]" />
                    <div className="relative space-y-3">
                      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                        {article.category}
                      </span>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary">
                        {article.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{article.readingTime}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:gap-3">
                        Yazıyı oku <span aria-hidden>→</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden py-20" id="kayit">
            <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 rounded-[40px] border border-primary/20 bg-gradient-to-br from-primary via-blue-400 to-blue-300 px-8 py-16 text-center text-white shadow-[0_35px_90px_rgba(79,158,248,0.25)] lg:px-16">
              <span className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
                Hazırsanız başlayalım
              </span>
              <h2 className="text-3xl font-semibold lg:text-4xl">
                Uzman danışmanlarımız hemen sizi arasın
              </h2>
              <p className="max-w-2xl text-base text-white/70">
                Telefon numaranızı bırakın, 15 dakika içinde size dönüş yapalım. Program seçimi, ödeme seçenekleri ve gerekli belgeler hakkında net bir yol haritası paylaşalım.
              </p>
              <form className="flex w-full flex-col gap-4 text-left sm:flex-row sm:items-center sm:justify-center">
                <input
                  type="tel"
                  placeholder="Telefon numaranız"
                  className="w-full rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary/10"
                >
                  Beni Arayın
                </button>
              </form>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                KVKK kapsamında bilgileriniz güvende
              </p>
            </div>
          </section>
        </main>

        <footer className="border-t border-border bg-gradient-to-br from-slate-50 to-blue-50/20 py-12">
          <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-blue-500 text-lg font-semibold text-primary-foreground shadow-lg">
                SK
              </span>
              <p className="text-sm text-muted-foreground">
                Efe Sürücü Kursu, profesyonel sürüş eğitimiyle güvenli sürücü yetiştirmenin en hızlı yolu.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground mb-4">Avcılar Şubesi</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+90 (212) 000 00 00</li>
                <li>avcilar@efesurucukursu.com</li>
                <li>Ambarlı Mah. Rıfat Ilgaz Sk. No:15/A Avcılar</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground mb-4">Büyükçekmece Şubesi</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+90 (212) 000 00 01</li>
                <li>buyukcekmece@efesurucukursu.com</li>
                <li>Kumburgaz Mah. Sahil Yolu Cad. No:28</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-foreground">Hızlı Linkler</h4>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#about" className="transition hover:text-primary">
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link href="#branches" className="transition hover:text-primary">
                    Şubelerimiz
                  </Link>
                </li>
                <li>
                  <Link href="#programs" className="transition hover:text-primary">
                    Programlar
                  </Link>
                </li>
                <li>
                  <Link href="#kayit" className="transition hover:text-primary">
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col items-center gap-3 px-6 text-center text-xs text-muted-foreground sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} Efe Sürücü Kursu. Tüm hakları saklıdır.</p>
            <div className="flex gap-4">
              <Link href="#" className="transition hover:text-primary">
                KVKK
              </Link>
              <Link href="#" className="transition hover:text-primary">
                Gizlilik Politikası
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
