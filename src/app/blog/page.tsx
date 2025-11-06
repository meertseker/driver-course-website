import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getPageMetadata } from '@/lib/seo';
import { articles } from '@/data/articles';

export const metadata: Metadata = getPageMetadata({
  title: 'Blog',
  description: 'Sürücü kursu, ehliyet sınavı, trafik kuralları ve güvenli sürüş hakkında faydalı yazılar, ipuçları ve güncel haberler.',
  url: '/blog',
  keywords: ['sürüş ipuçları', 'ehliyet sınavı', 'trafik kuralları', 'güvenli sürüş', 'sürücü kursu blog']
});

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" className="mx-auto w-full max-w-7xl px-6 py-20">
        <Breadcrumbs items={[{ label: 'Blog' }]} />

        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-6">
            Blog & Haberler
          </span>
          <h1 className="text-4xl font-bold text-white mb-4 md:text-5xl">
            Sürüş İpuçları & Güncel Haberler
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto font-medium">
            Ehliyet sınavı hazırlığından güvenli sürüş tekniklerine kadar her şey hakkında 
            uzman yazıları ve güncel bilgiler.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Link
            href={`/blog/${articles[0].slug}`}
            className="group relative overflow-hidden rounded-[40px] border border-border/60 bg-white/80 backdrop-blur-sm shadow-xl transition hover:-translate-y-1 hover:shadow-2xl block"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-[300px] lg:h-auto overflow-hidden">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  width={800}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden" />
                <div className="absolute top-6 left-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent-red px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    ⭐ Öne Çıkan
                  </span>
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 self-start">
                  {articles[0].category}
                </span>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition">
                  {articles[0].title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {articles[0].excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-900">
                  <div className="flex items-center gap-4">
                    <span>👤 {articles[0].author}</span>
                    <span>📅 {articles[0].date}</span>
                  </div>
                  <span>⏱️ {articles[0].readingTime}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.slice(1).map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group relative overflow-hidden rounded-[30px] border border-border/60 bg-white/80 backdrop-blur-sm shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Article Image */}
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={article.image}
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

              {/* Article Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-900 font-medium pt-2 border-t border-gray-200/60">
                  <span>📅 {article.date}</span>
                  <span>⏱️ {article.readingTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-[32px] border border-primary/20 bg-gradient-to-br from-primary via-secondary to-primary/80 px-8 py-16 text-white shadow-[0_30px_80px_rgba(29,104,169,0.25)]">
            <div className="relative z-10 text-center space-y-6">
              <h2 className="text-3xl font-bold">Yeni yazılardan haberdar olun</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                En son sürüş ipuçları, sınav taktikleri ve trafik güncellemelerini kaçırmayın.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="E-posta adresiniz"
                  className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm text-white placeholder:text-white/70 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent-red to-accent-dark px-8 py-3 text-sm font-semibold text-white transition hover:shadow-lg whitespace-nowrap"
                >
                  Abone Ol
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

