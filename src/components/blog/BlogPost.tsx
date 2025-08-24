'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, Share2, Bookmark, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost as BlogPostType, formatDate } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface BlogPostProps {
  post: BlogPostType;
}

export default function BlogPost({ post }: BlogPostProps) {
  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">{line.substring(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">{line.substring(4)}</h3>;
      }
      if (line.startsWith('1. **') || line.startsWith('2. **') || line.startsWith('3. **') || line.startsWith('4. **') || line.startsWith('5. **')) {
        return <li key={index} className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
      }
      if (line.startsWith('- **')) {
        return <li key={index} className="text-gray-700 mb-2" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      if (line.includes('**')) {
        return <p key={index} className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
      }
      return <p key={index} className="text-gray-700 mb-4">{line}</p>;
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      {/* Back Button */}
      <div className="mb-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Blog
        </Link>
      </div>

      {/* Header */}
      <header className="mb-8">
        {/* Category */}
        <div className="mb-4">
          <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
            {post.category}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="font-medium">{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span>{formatDate(post.publishedAt)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="inline-flex items-center gap-1"
            >
              <Tag className="w-4 h-4" />
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      {/* Featured Image */}
      <div className="relative h-96 mb-8 rounded-2xl overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
        />
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none">
        <div className="text-gray-800 leading-relaxed">
          {formatContent(post.content)}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Share Buttons */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Bagikan:</span>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>

          {/* Author Info */}
          <div className="text-right">
            <p className="text-sm text-gray-600">Ditulis oleh</p>
            <p className="font-medium text-gray-900">{post.author}</p>
          </div>
        </div>
      </div>

      {/* Related Posts Suggestion */}
      <div className="mt-16 p-6 bg-gray-50 rounded-2xl">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Ingin belajar lebih lanjut?
        </h3>
        <p className="text-gray-600 mb-4">
          Temukan artikel lain tentang AI, produktivitas, dan tips menggunakan tools AI untuk meningkatkan kinerja Anda.
        </p>
        <Button asChild size="lg">
          <Link href="/blog">
            Lihat Semua Artikel
            <ArrowLeft className="w-4 h-4 rotate-180 ml-2" />
          </Link>
        </Button>
      </div>
    </motion.article>
  );
}
