import { getSiteSettings } from '@/lib/content';
import Navigation from '@/components/ui/Navigation';
import Hero from '@/components/ui/Hero';
import TargetAudience from '@/components/ui/TargetAudience';
import WhyUs from '@/components/ui/WhyUs';
import StatsCard from '@/components/ui/StatsCard';
import HowItWorks from '@/components/ui/HowItWorks';
import EmotionalConnection from '@/components/ui/EmotionalConnection';
import SocialProof from '@/components/ui/SocialProof';
import StrongCTA from '@/components/ui/StrongCTA';
import UrgencyBanner from '@/components/ui/UrgencyBanner';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const settings = getSiteSettings();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation siteName={settings.siteName} />

      <div className="h-28"></div>

      {/* Main Content */}
      <main>
        {/* 1. HERO SECTION */}
        <Hero
          title="İlk direksiyon sınavında geç — yoksa ekstra ders bizden."
          subtitle="Avcılar & Büyükçekmece’de gerçek sınav parkurunda birebir eğitim. Son 12 ayda 1.200+ öğrencinin %94’ü ilk denemede geçti."
          primaryCta={{ text: 'Ücretsiz Deneme Dersi Al', href: '/iletisim' }}
          ctaSubtext="Zorunluluk yok. Önce dene, sonra karar ver."
          trustIcons={[
            { icon: '🛡️', label: 'MEB Onaylı' },
            { icon: '👥', label: '1.200+ Öğrenci' },
            { icon: '⭐', label: '4.8/5 Puan' },
          ]}
        />

        {/* 2. HEDEF KİTLE */}
        <TargetAudience
          title="Kimler için uygun?"
          items={[
            { icon: '🚗', text: 'İlk kez direksiyon başına geçecekler' },
            { icon: '🔄', text: 'Daha önce sınavdan kalanlar' },
            { icon: '⚡', text: 'Ehliyeti hızlı almak isteyenler' },
          ]}
        />

        {/* 3. NEDEN BİZ? */}
        <WhyUs
          title="Sadece öğretmiyoruz — sınavı kazandırıyoruz."
          image="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=compress&cs=tinysrgb&w=800"
          items={[
            {
              icon: '📍',
              title: 'Gerçek sınav parkurunda birebir eğitim',
              description: 'Sınavın yapılacağı yollarda çalışarak sürprizlere yer bırakmıyoruz.',
            },
            {
              icon: '🎓',
              title: 'Eski sınav komiserlerinden teknikler',
              description: 'Müfettişlerin neye dikkat ettiğini bilen uzman kadro.',
            },
            {
              icon: '📊',
              title: 'Her dersten sonra performans analizi',
              description: 'Zayıf yönlerinizi anında tespit edip üzerine gidiyoruz.',
            },
            {
              icon: '🗺️',
              title: 'Kişiye özel gelişim planı',
              description: 'Öğrenme hızınıza göre optimize edilmiş müfredat.',
            },
          ]}
        />

        {/* 4. GÜVEN / İSTATİSTİK */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-[1200px]">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Rakamlarla sonuçlar
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <StatsCard value={1200} suffix="+" label="Öğrenci (son 12 ay)" delay={0.1} />
              <StatsCard value={94} suffix="%" label="İlk sınav başarı oranı" delay={0.2} />
              <StatsCard value={15000} suffix="+" label="Mezun" delay={0.3} />
              <StatsCard value={4.8} suffix="" prefix="" label="Ortalama Puan" delay={0.4} />
            </div>
          </div>
        </section>

        {/* 5. NASIL ÇALIŞIR? */}
        <HowItWorks
          title="3 adımda ehliyet"
          steps={[
            { number: '01', title: 'Kayıt ol', description: 'Hızlı ve kolay başvuru süreciyle yerinizi ayırtın.' },
            { number: '02', title: 'Derslere katıl', description: 'Teorik ve uygulamalı derslerle kendinizi geliştirin.' },
            { number: '03', title: 'Sınavı geç', description: 'Özgüvenle sınava girin ve ehliyetinizi alın.' },
          ]}
        />

        {/* 6. DUYGUSAL BAĞ */}
        <EmotionalConnection
          text="Direksiyon sınavında panik yapıyorsan yalnız değilsin."
          subtext="Biz seni özgüvenli bir sürücü yapıyoruz."
          backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=compress&cs=tinysrgb&w=1200"
        />

        {/* 7. YORUMLAR / SOSYAL KANIT */}
        <SocialProof
          title="Bizimle geçenler"
          reviews={[
            {
              name: 'Ayşe K.',
              course: 'B Sınıfı',
              rating: 5,
              text: '2 kez kalmıştım, burada ilkinde geçtim. Eğitmenler çok sabırlı.',
            },
            {
              name: 'Mehmet T.',
              course: 'B Sınıfı Manuel',
              rating: 5,
              text: 'Sınav parkurundaki çalışmalar sayesinde hiç heyecanlanmadan geçtim.',
            },
            {
              name: 'Fatma Ş.',
              course: 'B Sınıfı Otomatik',
              rating: 5,
              text: 'Performans analizleri gerçekten fark yaratıyor. Eksiklerimi hemen kapattım.',
            },
          ]}
        />

        {/* 8. GÜÇLÜ CTA */}
        <StrongCTA
          title="Dersi dene, sonra karar ver"
          buttonText="Ücretsiz Deneme Dersi Al"
          buttonHref="/iletisim"
          subtext="Risk yok. Zorunluluk yok."
        />

        {/* 9. ACİLİYET */}
        <UrgencyBanner text="Nisan dönemi için sadece 18 kontenjan kaldı" />
      </main>

      {/* Footer */}
      <Footer
        siteName={settings.siteName}
        phone={settings.contact.phone}
        email={settings.contact.email}
        address={settings.contact.fullAddress}
        socialMedia={settings.socialMedia}
      />
    </div>
  );
}
