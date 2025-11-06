import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { articles, articleContents } from '@/data/articles';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);
  
  if (!article) {
    return {
      title: 'Makale Bulunamadı',
    };
  }

  return {
    title: `${article.title} | Avcılar Sürücü Kursu Blog`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const content = articleContents[slug] || {
    sections: [
      {
        title: "İçerik",
        content: [
          "Bu makalenin içeriği yakında eklenecektir. Sürücü kursu eğitimleri, sınav hazırlığı ve güvenli sürüş hakkında en güncel bilgileri sizlerle paylaşmaya devam edeceğiz."
        ]
      }
    ]
  };

  // Diğer makaleler (mevcut makale hariç, 3 tane)
  const relatedArticles = articles.filter(a => a.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen">
      <Header />

      <main id="main-content" className="mx-auto w-full max-w-4xl px-6 py-20">
        <Breadcrumbs items={[
          { label: 'Blog', href: '/blog' },
          { label: article.title }
        ]} />

        {/* Article Header */}
        <article className="mb-20">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accent mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl font-bold text-white mb-6 md:text-5xl">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/80">
              <span className="flex items-center gap-2">
                👤 {article.author}
              </span>
              <span className="flex items-center gap-2">
                📅 {article.date}
              </span>
              <span className="flex items-center gap-2">
                ⏱️ {article.readingTime}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative overflow-hidden rounded-[30px] mb-12 shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              width={1200}
              height={600}
              className="w-full h-[400px] object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-white/80 backdrop-blur-sm p-8 shadow-sm">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary to-secondary p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Bu yazıyı faydalı buldunuz mu?</h3>
              <p className="text-white/90 mb-6">
                Arkadaşlarınızla paylaşın ve onların da faydalanmasını sağlayın!
              </p>
              <div className="flex gap-4">
                <button className="inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 px-6 py-3 text-sm font-semibold transition">
                  🔗 Paylaş
                </button>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center rounded-full bg-white text-primary hover:bg-white/90 px-6 py-3 text-sm font-semibold transition"
                >
                  ← Tüm Yazılar
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-white mb-8">İlgili Yazılar</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.slug}
                  href={`/blog/${relatedArticle.slug}`}
                  className="group relative overflow-hidden rounded-[20px] border border-border/60 bg-white/80 backdrop-blur-sm shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-[160px] overflow-hidden">
                    <Image
                      src={relatedArticle.image}
                      alt={relatedArticle.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-gray-900 group-hover:text-primary transition line-clamp-2 mb-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-xs text-gray-900 font-medium">⏱️ {relatedArticle.readingTime}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
