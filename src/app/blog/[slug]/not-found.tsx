import Link from 'next/link';
import { ArrowLeft, Search, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogPostNotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12">
      <div className="max-w-md mx-auto text-center px-4">
        {/* Icon */}
        <div className="w-24 h-24 mx-auto mb-6 text-gray-300">
          <Search className="w-full h-full" />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Artikel Tidak Ditemukan
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-8">
          Maaf, artikel yang Anda cari tidak dapat ditemukan. 
          Mungkin artikel tersebut telah dihapus atau URL yang salah.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Blog
            </Link>
          </Button>
          
          <Button asChild variant="outline">
            <Link href="/">
              <Home className="w-4 h-4 mr-2" />
              Beranda
            </Link>
          </Button>
        </div>

        {/* Search Suggestion */}
        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="text-sm text-gray-600 mb-3">
            Coba cari artikel lain yang mungkin menarik:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link
              href="/blog"
              className="px-3 py-1 bg-white text-sm text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
            >
              ChatGPT Tips
            </Link>
            <Link
              href="/blog"
              className="px-3 py-1 bg-white text-sm text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
            >
              AI Workflow
            </Link>
            <Link
              href="/blog"
              className="px-3 py-1 bg-white text-sm text-gray-700 rounded-full hover:bg-gray-50 transition-colors"
            >
              Productivity
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
