import { Metadata } from 'next';
import { getAllBlogPosts, getFeaturedBlogPosts, getRecentBlogPosts } from '@/lib/blog';
import BlogList from '@/components/blog/BlogList';
import BlogCard from '@/components/blog/BlogCard';

export const metadata: Metadata = {
  title: 'Blog - Artikel AI, Produktivitas & Tips Tools AI',
  description: 'Temukan artikel terbaru tentang AI, produktivitas, dan tips menggunakan tools AI untuk meningkatkan kinerja Anda. Dari ChatGPT hingga Midjourney.',
  keywords: [
    'blog AI',
    'artikel AI',
    'tips ChatGPT',
    'tutorial Midjourney',
    'produktivitas AI',
    'AI workflow',
    'tools AI Indonesia'
  ],
  openGraph: {
    title: 'Blog - Artikel AI, Produktivitas & Tips Tools AI',
    description: 'Temukan artikel terbaru tentang AI, produktivitas, dan tips menggunakan tools AI untuk meningkatkan kinerja Anda.',
    url: 'https://bantuanaiq.id/blog',
    type: 'website',
  },
};

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const featuredPosts = getFeaturedBlogPosts();
  const recentPosts = getRecentBlogPosts(3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog Bantuan AI
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Temukan artikel terbaru tentang AI, produktivitas, dan tips menggunakan tools AI 
            untuk meningkatkan kinerja Anda dalam pekerjaan sehari-hari.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              {allPosts.length} Artikel
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              AI Learning
            </span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
              Productivity Tips
            </span>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Artikel Unggulan
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Artikel pilihan yang wajib dibaca untuk memahami AI dan meningkatkan produktivitas
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <BlogList posts={allPosts} title="Semua Artikel" />
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Artikel Terbaru
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Artikel terbaru yang baru saja dipublikasikan
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
