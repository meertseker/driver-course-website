import { getBlogPostBySlug, getAllBlogSlugs } from '@/lib/mdx';
import { getSiteSettings } from '@/lib/content';
import { formatDate } from '@/lib/utils';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: 'Yazı Bulunamadı' };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  const settings = getSiteSettings();

  if (!post) notFound();

  const breadcrumbs = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: post.title },
  ];

  return (
    <div className="min-h-screen">
      <Navigation siteName={settings.siteName} />
      <div className="h-28" />

      <article className="container mx-auto px-4 py-16 max-w-3xl">
        <Breadcrumbs items={breadcrumbs} />

        <div className="mt-8 mb-6">
          <span className="inline-block bg-primary-red/20 border border-primary-red/30 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {post.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-white/50 text-sm mb-10 pb-6 border-b border-white/10">
          <span>{post.author}</span>
          <span>·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          {post.tags?.length > 0 && (
            <>
              <span>·</span>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-blue-300">#{tag}</span>
                ))}
              </div>
            </>
          )}
        </div>

        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-p:text-blue-100 prose-p:leading-relaxed
            prose-a:text-secondary-orange prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white
            prose-ul:text-blue-100 prose-ol:text-blue-100
            prose-li:marker:text-secondary-orange
            prose-blockquote:border-l-secondary-orange prose-blockquote:text-blue-200
            prose-code:text-secondary-gold prose-code:bg-white/10 prose-code:px-1 prose-code:rounded"
        >
          {post.content}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary-orange hover:text-secondary-amber transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tüm Blog Yazıları
          </Link>
        </div>
      </article>

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
