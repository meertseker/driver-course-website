import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getPageMetadata } from '@/lib/seo';
import { generateFAQSchema } from '@/lib/advanced-schema';

const faqs = [
  {
    question: "Kurs ücreti ne kadar?",
    answer: "Sınıfa ve kampanyalara göre değişir. B sınıfı otomobil ehliyeti için yaklaşık 8.000-12.000 TL arasında değişmektedir. Güncel fiyat ve taksit seçenekleri için hemen arayın veya formu doldurun. Erken kayıt indirimleri ve özel kampanyalarımız mevcuttur."
  },
  {
    question: "Teorik e‑sınavdan geçme puanı nedir?",
    answer: "70 puan ve üzeri başarıdır. Sınav 50 sorudan oluşur ve en az 35 doğru cevap vermeniz gerekmektedir. Kursumuzda gerçek formatta deneme sınavları ile hazırlanırsınız ve öğrencilerimizin %94'ü ilk seferde başarılı olur."
  },
  {
    question: "Direksiyon dersleri nasıl planlanır?",
    answer: "Çalışma saatlerinize göre esnek takvim oluştururuz. Sınav rotalarında birebir ders yapılır. Hafta içi 09:00-21:00, Cumartesi 10:00-20:00 saatleri arasında ders alabilirsiniz. Eğitmeninizle uygun saatleri belirleyebilirsiniz."
  },
  {
    question: "A2'den A'ya geçiş şartı nedir?",
    answer: "En az 2 yıl A2 deneyimi ile 20 yaşında A sınıfına geçiş mümkündür; deneyim yoksa 24 yaş şartı aranır. Geçiş için yeniden teorik sınava girmeniz gerekmez, sadece direksiyon sınavı yeterlidir."
  },
  {
    question: "Yabancı ehliyetimi kullanabilir miyim?",
    answer: "Türkiye'ye girişten itibaren 6 aya kadar kullanılabilir. Süre sonunda Türk ehliyetine dönüştürme gerekir. Bazı ülke ehliyetleri direkt çevrilirken, bazıları için sınav gerekebilir. Detaylı bilgi için şubelerimize başvurabilirsiniz."
  },
  {
    question: "Hangi yaştan itibaren ehliyet alabilirim?",
    answer: "B sınıfı otomobil ehliyeti için minimum 18 yaş, A1 motosiklet için 16 yaş, A2 motosiklet için 18 yaş gereklidir. C-D gibi ticari sınıflar için 21-24 yaş aralığında olmanız gerekmektedir."
  },
  {
    question: "Sınavda kalırsam ne olur?",
    answer: "Teorik sınavda kalırsanız 1 hafta sonra tekrar girebilirsiniz. Direksiyon sınavında kalırsanız en az 1 ay beklemek zorundasınız. Kursumuzda kalanlara ücretsiz ek ders ve danışmanlık desteği sağlıyoruz."
  },
  {
    question: "Kaç ders direksiyon eğitimi alacağım?",
    answer: "B sınıfı için minimum 12 saat direksiyon dersi zorunludur. Ancak öğrencilerimizin çoğu 16-20 saat arasında ders alarak kendilerini daha güvende hissediyor. Eğitmeniniz ihtiyacınıza göre öneride bulunacaktır."
  },
  {
    question: "Hangi belgeler gerekli?",
    answer: "Nüfus cüzdanı fotokopisi, 4 adet biyometrik fotoğraf, sağlık raporu (psikoteknik dahil) ve ikametgah belgesi gerekmektedir. Belgelerle ilgili detaylı bilgi kayıt sırasında verilecektir."
  },
  {
    question: "Taksitle ödeme yapabilir miyim?",
    answer: "Evet, kredi kartı ile taksit imkanı sunuyoruz. Ayrıca belirli banka ve finans kuruluşları ile anlaşmalı olarak düşük faizli taksit seçenekleri mevcuttur. Detaylar için danışmanlarımızla görüşebilirsiniz."
  },
  {
    question: "Ara sınav var mı?",
    answer: "Evet, kurs süresince düzenli olarak ara değerlendirme sınavları yapıyoruz. Bu sınavlar sizin gelişiminizi takip etmek ve eksiklerinizi belirlemek için yapılır. Gerçek sınav formatında deneme sınavlarımız da mevcuttur."
  },
  {
    question: "Ehliyet ne zaman elimde olur?",
    answer: "Teorik ve direksiyon sınavlarını başarıyla tamamladıktan sonra yaklaşık 7-10 iş günü içinde ehliyetiniz PTT aracılığıyla adresinize gönderilir. Daha hızlı almak isterseniz şahsen Nüfus Müdürlüğü'nden de alabilirsiniz."
  }
];

export const metadata: Metadata = getPageMetadata({
  title: 'Sıkça Sorulan Sorular',
  description: 'Avcılar Sürücü Kursu hakkında en çok merak edilen sorular ve cevapları. Kurs ücreti, sınav süreci, gerekli belgeler ve daha fazlası.',
  url: '/sss',
  keywords: ['sürücü kursu SSS', 'ehliyet sınavı soruları', 'kurs ücreti', 'direksiyon dersi', 'ehliyet başvurusu']
});

const faqSchema = generateFAQSchema(faqs.map(faq => ({
  question: faq.question,
  answer: faq.answer
})));

export default function SSSPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main id="main-content" className="mx-auto w-full max-w-7xl px-6 py-20">
        <Breadcrumbs items={[{ label: 'Sıkça Sorulan Sorular' }]} />

        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-6">
            Yardım & Destek
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 md:text-5xl">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto font-medium">
            Avcılar Sürücü Kursu hakkında en çok merak edilen soruların cevaplarını burada bulabilirsiniz. 
            Daha fazla bilgi için bizimle <Link href="/iletisim" className="text-accent hover:underline font-semibold">iletişime</Link> geçebilirsiniz.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-gray-200/60 bg-white/80 backdrop-blur-sm p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,158,248,0.15)]"
            >
              <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[radial-gradient(circle,_rgba(79,158,248,0.15)_0%,_rgba(79,158,248,0)_70%)]" />
              <div className="relative space-y-4">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary flex-shrink-0">
                    {index + 1}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-3">
                      {faq.question}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="relative overflow-hidden rounded-[32px] border border-primary/20 bg-gradient-to-br from-primary via-secondary to-primary/80 px-8 py-16 text-white shadow-[0_30px_80px_rgba(29,104,169,0.25)]">
            <div className="relative z-10 space-y-6">
              <h2 className="text-3xl font-bold">Sorunuzun cevabını bulamadınız mı?</h2>
              <p className="text-white/80 max-w-2xl mx-auto">
                Danışmanlarımız size yardımcı olmak için hazır. Hemen iletişime geçin!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-dark text-white px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl transition-all"
                >
                  İletişime Geç
                </Link>
                <a
                  href="tel:+902120000000"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white text-white px-8 py-4 text-sm font-semibold hover:bg-white hover:text-primary transition-all"
                >
                  Hemen Ara: +90 (212) 000 00 00
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

