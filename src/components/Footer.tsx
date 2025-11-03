import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gradient-to-br from-blue-50/30 to-slate-50 py-12">
      <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Image
            src="/avcilarlogo.png"
            alt="Avcılar Sürücü Kursu Logo"
            width={200}
            height={66}
            className="h-12 w-auto mb-4"
          />
          <p className="text-sm text-gray-600">
            Avcılar Sürücü Kursu, İstanbul'da profesyonel sürüş eğitimiyle güvenli sürücü yetiştirmenin en hızlı yolu.
          </p>
        </div>
        
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Avcılar Şubesi</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="tel:+902120000000" className="hover:text-primary transition">
                +90 (212) 000 00 00
              </a>
            </li>
            <li>
              <a href="mailto:avcilar@avcilarsurucukursu.com" className="hover:text-primary transition">
                avcilar@avcilarsurucukursu.com
              </a>
            </li>
            <li>Ambarlı Mah. Rıfat Ilgaz Sk. No:15/A Avcılar</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Büyükçekmece Şubesi</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <a href="tel:+902120000001" className="hover:text-primary transition">
                +90 (212) 000 00 01
              </a>
            </li>
            <li>
              <a href="mailto:buyukcekmece@avcilarsurucukursu.com" className="hover:text-primary transition">
                buyukcekmece@avcilarsurucukursu.com
              </a>
            </li>
            <li>Kumburgaz Mah. Sahil Yolu Cad. No:28</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">Hızlı Linkler</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/hakkimizda" className="transition hover:text-primary">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link href="/subelerimiz" className="transition hover:text-primary">
                Şubelerimiz
              </Link>
            </li>
            <li>
              <Link href="/programlar" className="transition hover:text-primary">
                Programlar
              </Link>
            </li>
            <li>
              <Link href="/sss" className="transition hover:text-primary">
                SSS
              </Link>
            </li>
            <li>
              <Link href="/iletisim" className="transition hover:text-primary">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mx-auto mt-10 flex w-full max-w-7xl flex-col items-center gap-3 px-6 text-center text-xs text-gray-600 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Avcılar Sürücü Kursu. Tüm hakları saklıdır.</p>
        <div className="flex gap-4">
          <Link href="/kvkk" className="transition hover:text-primary">
            KVKK
          </Link>
          <Link href="/gizlilik" className="transition hover:text-primary">
            Gizlilik Politikası
          </Link>
        </div>
      </div>
    </footer>
  );
}

