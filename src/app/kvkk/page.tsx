import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getPageMetadata } from '@/lib/seo';

export const metadata: Metadata = getPageMetadata({
  title: 'KVKK Aydınlatma Metni',
  description: 'Avcılar Sürücü Kursu KVKK (Kişisel Verilerin Korunması Kanunu) aydınlatma metni ve kişisel veri işleme politikası.',
  url: '/kvkk',
});

export default function KVKKPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" className="mx-auto w-full max-w-4xl px-6 py-20">
        <Breadcrumbs items={[{ label: 'KVKK' }]} />

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            KVKK Aydınlatma Metni
          </h1>
          <p className="text-lg text-white/90">
            Kişisel Verilerin Korunması ve İşlenmesi
          </p>
        </div>

        <div className="prose prose-lg max-w-none bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Veri Sorumlusu</h2>
            <p className="text-gray-700 leading-relaxed">
              6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, kişisel verileriniz; 
              veri sorumlusu olarak <strong>Avcılar Sürücü Kursu</strong> tarafından aşağıda açıklanan 
              kapsamda işlenebilecektir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Kişisel Verilerin İşlenme Amacı</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Toplanan kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Sürücü kursu eğitim hizmetlerinin sunulması</li>
              <li>Eğitim kayıt işlemlerinin gerçekleştirilmesi</li>
              <li>İletişim faaliyetlerinin yürütülmesi</li>
              <li>Müşteri memnuniyetinin artırılması</li>
              <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              <li>Finans ve muhasebe işlemlerinin yürütülmesi</li>
              <li>MEB ve ilgili resmi kurumlarla gerekli bildirimlerin yapılması</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. İşlenen Kişisel Veriler</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kurumumuz tarafından işlenen kişisel veriler şunlardır:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası, doğum tarihi, doğum yeri</li>
              <li><strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta adresi, adres</li>
              <li><strong>Eğitim Bilgileri:</strong> Eğitim seviyesi, katılınan kurslar, sınav sonuçları</li>
              <li><strong>Finansal Bilgiler:</strong> Ödeme bilgileri, fatura bilgileri</li>
              <li><strong>Görsel ve İşitsel Kayıtlar:</strong> Fotoğraf, güvenlik kamera kayıtları</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kişisel Verilerin Toplanma Yöntemi</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verileriniz, kayıt formları, web sitesi iletişim formları, telefon görüşmeleri, 
              e-posta, güvenlik kameraları ve benzeri yöntemlerle sözlü, yazılı veya elektronik ortamda 
              toplanmaktadır.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Kişisel Verilerin Aktarılması</h2>
            <p className="text-gray-700 leading-relaxed">
              Toplanan kişisel verileriniz, KVKK&apos;nın 8. ve 9. maddelerinde belirtilen şartlar 
              çerçevesinde, yasal yükümlülüklerin yerine getirilmesi amacıyla MEB (Milli Eğitim Bakanlığı), 
              Emniyet Genel Müdürlüğü ve diğer yetkili kamu kurumları ile paylaşılabilecektir.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Kişisel Veri Sahibinin Hakları</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              KVKK&apos;nın 11. maddesi uyarınca, kişisel veri sahipleri olarak aşağıdaki haklara sahipsiniz:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme</li>
              <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme</li>
              <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme</li>
              <li>KVKK&apos;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme</li>
              <li>Kişisel verilerin düzeltilmesi, silinmesi veya yok edilmesi halinde bu işlemlerin kişisel verilerin aktarıldığı üçüncü kişilere bildirilmesini isteme</li>
              <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
              <li>Kişisel verilerin kanuna aykırı olarak işlenmesi sebebiyle zarara uğraması hâlinde zararın giderilmesini talep etme</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Başvuru Yöntemi</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle başvuruda bulunabilirsiniz:
            </p>
            <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-gray-700 mb-2">
                <strong>E-posta:</strong> info@avcilarsurucukursu.com
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Posta Adresi:</strong> Merkez Mahallesi Namık Kemal Caddesi Umut İş Merkezi No:23 Kat:2, Avcılar/İstanbul
              </p>
              <p className="text-gray-700">
                <strong>Telefon:</strong> +90 (212) 590 23 25 - +90 (546) 940 22 00 (Avcılar) | +90 (212) 883 08 83 (Büyükçekmece)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Veri Güvenliği</h2>
            <p className="text-gray-700 leading-relaxed">
              Kişisel verilerinizin güvenliğini sağlamak için gerekli teknik ve idari tedbirler alınmıştır. 
              Verileriniz yetkisiz erişime, kaybolmaya veya değiştirilmeye karşı korunmaktadır.
            </p>
          </section>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 italic">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

