import { Metadata } from 'next';
import BlogNavbar from '@/components/blog/BlogNavbar';
import BlogFooter from '@/components/blog/BlogFooter';

export const metadata: Metadata = {
  title: {
    default: 'Blog - Bantuan AI',
    template: '%s | Blog Bantuan AI'
  },
  description: 'Temukan artikel terbaru tentang AI, produktivitas, dan tips menggunakan tools AI untuk meningkatkan kinerja Anda.',
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
    title: 'Blog - Bantuan AI',
    description: 'Temukan artikel terbaru tentang AI, produktivitas, dan tips menggunakan tools AI untuk meningkatkan kinerja Anda.',
    url: 'https://bantuanaiq.id/blog',
    type: 'website',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <BlogNavbar />
      <main>
        {children}
      </main>
      <BlogFooter />
    </div>
  );
}
