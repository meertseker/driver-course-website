import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'Gizlilik Politikası',
  description: 'Avcılar Sürücü Kursu gizlilik politikası, çerez kullanımı ve veri koruma uygulamaları hakkında bilgiler.',
  url: '/gizlilik',
});

export default function GizlilikPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" className="mx-auto w-full max-w-4xl px-6 py-20">
        <Breadcrumbs items={[{ label: 'Gizlilik Politikası' }]} />

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Gizlilik Politikası
          </h1>
          <p className="text-lg text-white/90">
            Web Sitesi ve Veri Güvenliği
          </p>
        </div>

        <div className="prose prose-lg max-w-none bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Giriş</h2>
            <p className="text-gray-700 leading-relaxed">
              Avcılar Sürücü Kursu olarak, gizliliğinize saygı duyuyor ve kişisel bilgilerinizi korumayı 
              taahhüt ediyoruz. Bu gizlilik politikası, web sitemizi ziyaret ettiğinizde toplanan bilgilerin 
              nasıl kullanıldığını ve korunduğunu açıklamaktadır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Toplanan Bilgiler</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1. Doğrudan Toplanan Bilgiler</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Web sitemiz üzerinden iletişim formlarını doldurduğunuzda veya kayıt olduğunuzda aşağıdaki 
              bilgiler toplanabilir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Ad ve soyad</li>
              <li>E-posta adresi</li>
              <li>Telefon numarası</li>
              <li>Mesaj içeriği</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">2.2. Otomatik Olarak Toplanan Bilgiler</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Web sitemizi ziyaret ettiğinizde, aşağıdaki bilgiler otomatik olarak toplanabilir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>IP adresi</li>
              <li>Tarayıcı türü ve versiyonu</li>
              <li>İşletim sistemi</li>
              <li>Ziyaret edilen sayfalar</li>
              <li>Ziyaret tarihi ve saati</li>
              <li>Referans URL (hangi siteden geldiğiniz)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Bilgilerin Kullanım Amaçları</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Toplanan bilgiler aşağıdaki amaçlarla kullanılmaktadır:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Hizmet taleplerinize yanıt vermek</li>
              <li>Müşteri desteği sağlamak</li>
              <li>Web sitesinin performansını iyileştirmek</li>
              <li>Kullanıcı deneyimini geliştirmek</li>
              <li>İstatistiksel analizler yapmak</li>
              <li>Yasal yükümlülükleri yerine getirmek</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Çerezler (Cookies)</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Web sitemiz, kullanıcı deneyimini iyileştirmek ve site performansını analiz etmek için çerezler 
              kullanmaktadır.
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1. Kullanılan Çerez Türleri</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Zorunlu Çerezler</h4>
                <p className="text-gray-700 text-sm">
                  Web sitesinin düzgün çalışması için gerekli temel çerezlerdir. Bu çerezler devre dışı 
                  bırakılamaz.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Analitik Çerezler</h4>
                <p className="text-gray-700 text-sm">
                  Google Analytics gibi araçlar kullanılarak ziyaretçi davranışları analiz edilir. Bu veriler 
                  anonim olarak toplanır ve sadece istatistiksel amaçlarla kullanılır.
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">Performans Çerezleri</h4>
                <p className="text-gray-700 text-sm">
                  Web sitesinin performansını ölçmek ve iyileştirmek için kullanılır.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">4.2. Çerezleri Yönetme</h3>
            <p className="text-gray-700 leading-relaxed">
              Tarayıcı ayarlarınızdan çerezleri kabul etmeme, sınırlama veya silme seçeneklerini 
              kullanabilirsiniz. Ancak, çerezleri devre dışı bırakmak web sitesinin bazı özelliklerinin 
              çalışmamasına neden olabilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Google Analytics</h2>
            <p className="text-gray-700 leading-relaxed">
              Web sitemiz, ziyaretçi istatistiklerini toplamak için Google Analytics kullanmaktadır. 
              Google Analytics, anonim IP adresleri kullanarak veri toplar ve bu veriler Google&apos;ın 
              gizlilik politikasına tabidir. Google Analytics kullanımı hakkında daha fazla bilgi için 
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                Google Gizlilik Politikası
              </a>
              &apos;nı ziyaret edebilirsiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Üçüncü Taraf Paylaşımı</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel bilgileriniz, yasal bir zorunluluk olmadıkça veya açık rızanız olmaksızın üçüncü 
              taraflarla paylaşılmaz. Hizmet sağlayıcılarımız (örneğin, e-posta servisleri, hosting 
              sağlayıcıları) sadece hizmet sunumu için gerekli olan bilgilere erişebilir ve bu bilgileri 
              gizli tutmakla yükümlüdür.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Veri Güvenliği</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel bilgilerinizin güvenliğini sağlamak için endüstri standardı güvenlik önlemleri 
              kullanmaktayız. Bunlar şunları içerir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
              <li>SSL/TLS şifreleme ile güvenli veri iletimi</li>
              <li>Güvenli sunucu altyapısı</li>
              <li>Düzenli güvenlik güncellemeleri</li>
              <li>Yetkisiz erişime karşı koruma</li>
              <li>Veri yedekleme sistemleri</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Veri Saklama Süresi</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verileriniz, toplama amacı için gerekli olan süre boyunca veya yasal saklama 
              yükümlülüklerimiz gereği saklanır. Bu süre sonunda veriler güvenli bir şekilde silinir 
              veya anonim hale getirilir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Haklarınız</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Hangi kişisel verilerin toplandığını öğrenme</li>
              <li>Kişisel verilerinize erişim talep etme</li>
              <li>Yanlış veya eksik verilerin düzeltilmesini isteme</li>
              <li>Kişisel verilerinizin silinmesini talep etme</li>
              <li>Veri işleme faaliyetlerine itiraz etme</li>
              <li>Verilerinizin taşınabilirliğini talep etme</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              Bu haklarınızı kullanmak için info@avcilarsurucukursu.com adresinden bizimle iletişime 
              geçebilirsiniz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Çocukların Gizliliği</h2>
            <p className="text-gray-700 leading-relaxed">
              Web sitemiz 18 yaşından küçük kişilerden bilerek kişisel bilgi toplamaz. Eğer bir ebeveyn 
              veya vasi olarak çocuğunuzun bize kişisel bilgi verdiğini düşünüyorsanız, lütfen bizimle 
              iletişime geçin.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Dış Bağlantılar</h2>
            <p className="text-gray-700 leading-relaxed">
              Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin gizlilik 
              uygulamalarından sorumlu değiliz. Bu siteleri ziyaret ettiğinizde kendi gizlilik politikalarını 
              incelemenizi öneririz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Politika Değişiklikleri</h2>
            <p className="text-gray-700 leading-relaxed">
              Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler yapıldığında, 
              web sitemizdeki güncelleme tarihini değiştirerek sizi bilgilendireceğiz. Politikayı düzenli 
              olarak gözden geçirmenizi öneririz.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. İletişim</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Gizlilik politikamız hakkında sorularınız varsa veya haklarınızı kullanmak istiyorsanız, 
              bizimle aşağıdaki yollarla iletişime geçebilirsiniz:
            </p>
            <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>E-posta:</strong> info@avcilarsurucukursu.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Telefon:</strong> +90 (212) 590 23 25 - +90 (546) 940 22 00 (Avcılar Şubesi)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Telefon:</strong> +90 (212) 883 08 83 (Büyükçekmece Şubesi)
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Adres (Avcılar):</strong> Merkez Mahallesi Namık Kemal Caddesi Umut İş Merkezi No:23 Kat:2, Avcılar/İstanbul
              </p>
              <p className="text-gray-700">
                <strong>Adres (Büyükçekmece):</strong> 19 Mayıs Mahallesi D100 Karayolu Caddesi No:1079 Daire:4, Büyükçekmece/İstanbul
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              Bu gizlilik politikası {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })} 
              tarihinde yürürlüğe girmiştir.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

