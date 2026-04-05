import { getSiteSettings, getCourses } from '@/lib/content';
import { getRecentBlogPosts } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';
import Hero from '@/components/ui/Hero';
import Navigation from '@/components/ui/Navigation';
import StatsCard from '@/components/ui/StatsCard';
import FeatureCard from '@/components/ui/FeatureCard';
import CourseCard from '@/components/ui/CourseCard';
import BlogCard from '@/components/ui/BlogCard';
import Footer from '@/components/ui/Footer';

export default function Home() {
  const settings = getSiteSettings();
  const courses = getCourses();
  const recentPosts = getRecentBlogPosts();
  const stats = settings.stats;
  const homeStats = [
    { value: settings.stats.totalStudents, label: 'Başarılı mezun', suffix: '+', delay: 0 },
    { value: stats.successRate, label: 'İlk sınav başarı oranı', suffix: '%', delay: 0.1 },
    { value: stats.instructors, label: 'Kişilik eğitim ekibi', suffix: '', delay: 0.2 },
  ];
  const trustPoints = [
    {
      title: 'Tüm Ehliyet Sınıfları',
      text: 'A1, A2, A motosiklet; B, BE otomobil; C, CE kamyon; D, D1 minibüs ve daha fazlası için eğitim veriyoruz.',
    },
    {
      title: '22 Kişilik Sınıf Kontenjanı',
      text: 'Küçük sınıf gruplarıyla her öğrenciye bireysel ilgi gösteriliyor. Erken kayıt ile yer güvencesi sağlanır.',
    },
    {
      title: 'Esnek Ders Programı',
      text: 'Hafta içi ve cumartesi esnek ders saatleri ile çalışma hayatınızı aksatmadan ehliyetinizi alabilirsiniz.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation siteName={settings.siteName} />

      {/* Add padding for fixed nav */}
      <div className="h-28"></div>

      {/* Hero Section */}
      <Hero
        title="Avcılar'da Profesyonel Ehliyet Eğitimi"
        subtitle={`${stats.yearsOfExperience} yılı aşkın tecrübemiz ve %${stats.successRate} başarı oranımızla A1'den D sınıfına tüm ehliyet kategorilerinde teorik ve direksiyon eğitimi veriyoruz. İstanbul Avcılar'da hizmetinizdeyiz.`}
        primaryCta={{ text: 'Bilgi ve Fiyat Al', href: '/iletisim' }}
        secondaryCta={{ text: 'Telefonla Ulaşın', href: `tel:${settings.contact.phone.replace(/\s/g, '').replace(/[()]/g, '')}` }}
        stats={[
          { value: `%${stats.successRate}`, label: 'Başarı oranı' },
          { value: '20.000+', label: 'Başarılı mezun' },
          { value: `${stats.yearsOfExperience}+`, label: 'Yıl tecrübe' },
        ]}
      />

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatsCard
              value={homeStats[0].value}
              label={homeStats[0].label}
              suffix={homeStats[0].suffix}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              delay={homeStats[0].delay}
            />
            <StatsCard
              value={homeStats[1].value}
              label={homeStats[1].label}
              suffix={homeStats[1].suffix}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              }
              delay={homeStats[1].delay}
            />
            <StatsCard
              value={homeStats[2].value}
              label={homeStats[2].label}
              suffix={homeStats[2].suffix}
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              delay={homeStats[2].delay}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-white mb-4">
              Ehliyet Aşamaları
            </h2>
            <p className="text-xl text-blue-100">
              Kayıttan sınav ve belge teslimine kadar süreci adım adım görün
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {settings.features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                }
                title={feature.name}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-red/10 via-transparent to-secondary-orange/10"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Size uygun eğitim başlıkları
            </h2>
            <p className="text-xl text-blue-100">
              A1'den D sınıfına tüm ehliyet kategorilerini karşılaştırın
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.slice(0, 3).map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.description}
                price={course.price}
                duration={course.duration}
                features={course.features}
                popular={course.popular}
                image={course.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-h2 font-bold text-white mb-4">
              Neden Avcılar Sürücü Kursu?
            </h2>
            <p className="text-xl text-blue-100">
              15.000'den fazla mezunumuzun tercih ettiği güvenilir adres
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {trustPoints.map((item, index) => (
              <div
                key={item.title}
                className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 shadow-glass-lg border border-white/20"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-r from-primary-red to-secondary-orange text-white font-bold mb-5">
                  0{index + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-4">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-white font-semibold text-sm">Google Yorumları</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
              <span className="text-white/80 text-sm">4.9 · 200+ yorum</span>
            </div>
            <h2 className="text-h2 font-bold text-white mb-4">Mezunlarımız Ne Diyor?</h2>
            <p className="text-xl text-blue-100">Google&apos;da gerçek öğrenci değerlendirmeleri</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: 'Ayşe K.',
                rating: 5,
                text: 'Eğitmenler çok sabırlı ve ilgili. Teorik dersler online seçeneğiyle çok daha esnek oldu. İlk sınavda geçtim, teşekkürler!',
                date: '2 hafta önce',
                course: 'B Sınıfı',
              },
              {
                name: 'Mehmet T.',
                rating: 5,
                text: 'Büyükçekmece şubesine kaydoldum. 14 ders boyunca çok iyi eğitim aldım. Sınıf atmosferi süper, 22 kişilik sınıf tam verimli.',
                date: '1 ay önce',
                course: 'B Sınıfı Manuel',
              },
              {
                name: 'Fatma Ş.',
                rating: 5,
                text: 'Avcılar şubesi muhteşem. Danışmanlar çok yardımcı. Teorik eğitimi online tamamladım, 34 saatlik içerik gayet kapsamlı.',
                date: '3 hafta önce',
                course: 'B Sınıfı Otomatik',
              },
            ].map((review) => (
              <div key={review.name} className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 shadow-glass-lg border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-red to-secondary-orange flex items-center justify-center text-white font-bold text-sm">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{review.name}</p>
                      <p className="text-white/50 text-xs">{review.date}</p>
                    </div>
                  </div>
                  <svg className="w-6 h-6 opacity-60" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <div className="flex mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-blue-100 text-sm leading-relaxed mb-3">{review.text}</p>
                <span className="text-xs bg-primary-red/20 text-blue-200 px-2 py-1 rounded-full border border-primary-red/30">{review.course}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=Avcılar+Sürücü+Kursu+yorumlar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 text-white rounded-2xl px-6 py-3 font-medium transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Tüm Google Yorumlarını Gör
            </a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      {recentPosts.length > 0 && (
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-bl from-accent-rose/10 via-transparent to-primary-red/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-h2 font-bold text-white mb-4">
                Blog Yazılarımız
              </h2>
              <p className="text-xl text-blue-100">
                Sık sorulan konular için kısa ve somut rehberler
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {recentPosts.map((post, index) => (
                <BlogCard
                  key={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={formatDate(post.date)}
                  slug={post.slug}
                  tags={post.tags}
                  image={post.image}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-orange via-primary-red-light to-primary-red"></div>
        
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-secondary-gold/20 via-transparent to-transparent animate-pulse-slow"></div>
        </div>
        
        <div className="absolute inset-0 backdrop-blur-sm bg-black/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-h2 font-bold mb-4 text-white drop-shadow-lg">
            Danışmanlarımızı Hemen Arayın
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Kurs seçimi, kayıt evrakları ve ücret bilgisi için danışmanlarımız sizi bekliyor.
          </p>

          {/* Branch Call Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a
              href="tel:+902125902325"
              className="flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/95 text-primary-red rounded-2xl font-semibold text-lg shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 border border-white/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-left">
                <div className="text-xs font-normal text-primary-red/70">Avcılar Şubesi</div>
                <div className="font-bold">+90 (212) 590 23 25</div>
              </div>
            </a>
            <a
              href="tel:+902128830883"
              className="flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-white/95 text-primary-red rounded-2xl font-semibold text-lg shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 border border-white/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <div className="text-left">
                <div className="text-xs font-normal text-primary-red/70">Büyükçekmece Şubesi</div>
                <div className="font-bold">+90 (212) 883 08 83</div>
              </div>
            </a>
            <a
              href="https://wa.me/905469402200"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-2xl font-semibold text-lg shadow-[0_10px_40px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs font-normal text-white/70">WhatsApp</div>
                <div className="font-bold">+90 (546) 940 22 00</div>
              </div>
            </a>
          </div>

          <a
            href="/iletisim"
            className="inline-block px-8 py-3 backdrop-blur-xl bg-white/10 border border-white/30 hover:bg-white/20 text-white rounded-2xl font-medium text-base transition-all duration-300 hover:scale-105"
          >
            Bilgi Formu Doldur
          </a>
          
          {/* Branch info */}
          <div className="mt-10 grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-5 border border-white/20 text-left">
              <p className="font-bold text-white mb-1">Avcılar Şubesi</p>
              <p className="text-white/80 text-sm">Merkez Mah. Namık Kemal Cad. Umut İş Merkezi No:23 Kat:2</p>
            </div>
            <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-5 border border-white/20 text-left">
              <p className="font-bold text-white mb-1">Büyükçekmece Şubesi</p>
              <p className="text-white/80 text-sm">19 Mayıs Mah. D100 Karayolu Cad. No:1079 Daire:4</p>
            </div>
          </div>
        </div>
      </section>

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
