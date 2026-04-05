import { getSiteSettings } from '@/lib/content';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'İletişim - Avcılar Sürücü Kursu',
  description: 'Avcılar Sürücü Kursu ile iletişime geçin. Kayıt, fiyat, evrak ve ders planı hakkında bilgi alın.',
};

export default function ContactPage() {
  const settings = getSiteSettings();

  return (
    <div className="min-h-screen">
      <Navigation siteName={settings.siteName} />
      
      <div className="h-28"></div>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-red via-primary-red-dark to-accent-burgundy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-secondary-gold/20 via-transparent to-transparent animate-pulse-slow"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            İletişim
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Kurs seçimi, kayıt evrakları, fiyat çerçevesi ve ders planı için bize ulaşın
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-glass-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-white">İletişim Bilgileri</h2>
                <p className="text-gray-300 mb-6">
                  Hızlı bilgi almak isterseniz telefonla, detay bırakmak isterseniz form üzerinden bize ulaşabilirsiniz.
                </p>
                <div className="space-y-6">
                  {/* WhatsApp - prominent */}
                  <a
                    href="https://wa.me/905469402200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#25D366]/20 border border-[#25D366]/40 rounded-2xl hover:bg-[#25D366]/30 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-[#25D366] rounded-xl">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-bold text-white text-base">WhatsApp ile Yazın</div>
                      <div className="text-[#25D366] font-semibold text-lg">+90 (546) 940 22 00</div>
                      <div className="text-white/50 text-xs">Hızlı yanıt · 7/24</div>
                    </div>
                    <svg className="w-5 h-5 text-white/40 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </a>

                  {/* Avcılar branch */}
                  <div>
                    <div className="text-xs uppercase tracking-wide text-secondary-orange font-semibold mb-2">Avcılar Şubesi</div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-red/20 rounded-xl border border-primary-red/30">
                        <svg className="w-6 h-6 text-secondary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <a href="tel:+902125902325" className="text-secondary-orange hover:text-secondary-amber hover:underline transition-colors font-bold text-lg block">
                          +90 (212) 590 23 25
                        </a>
                        <a href="tel:+905469402200" className="text-secondary-orange/70 hover:text-secondary-amber text-sm transition-colors">
                          +90 (546) 940 22 00 (cep)
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Büyükçekmece branch */}
                  <div>
                    <div className="text-xs uppercase tracking-wide text-secondary-orange font-semibold mb-2">Büyükçekmece Şubesi</div>
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary-red/20 rounded-xl border border-primary-red/30">
                        <svg className="w-6 h-6 text-secondary-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <a href="tel:+902128830883" className="text-secondary-orange hover:text-secondary-amber hover:underline transition-colors font-bold text-lg block">
                          +90 (212) 883 08 83
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-rose/20 rounded-xl border border-accent-rose/30">
                      <svg className="w-6 h-6 text-secondary-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">E-posta</div>
                      <a href={`mailto:${settings.contact.email}`} className="text-secondary-amber hover:text-secondary-gold hover:underline transition-colors">
                        {settings.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-secondary-orange/20 rounded-xl border border-secondary-orange/30">
                      <svg
                        className="w-6 h-6 text-accent-coral"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-white mb-1">Adres</div>
                      <p className="text-gray-300">{settings.contact.fullAddress}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <h3 className="font-semibold text-white mb-4">Çalışma Saatleri</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Hafta İçi:</span>
                      <span className="font-medium text-white">{settings.workingHours.weekdays}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Cumartesi:</span>
                      <span className="font-medium text-white">{settings.workingHours.saturday}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Pazar:</span>
                      <span className="font-medium text-white">{settings.workingHours.sunday}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-glass-xl overflow-hidden">
                <iframe
                  src={settings.contact.mapEmbed}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Avcılar Sürücü Kursu Lokasyon"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

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
