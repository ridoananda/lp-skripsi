'use client';

import { motion } from 'framer-motion';
import { Menu, X, BookOpen, Home } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function BlogNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/logo.webp"
                alt="Bantuan AI"
                width={32}
                height={32}
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-xl font-bold text-gray-900">Bantuan AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <Home className="w-4 h-4 inline mr-2" />
              Beranda
            </Link>
            <Link
              href="/blog"
              className="text-blue-600 hover:text-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              Blog
            </Link>
            <Link
              href="/ai-skripsi-7-hari"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Mulai Belajar
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <Home className="w-4 h-4 inline mr-2" />
              Beranda
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50"
            >
              <BookOpen className="w-4 h-4 inline mr-2" />
              Blog
            </Link>
            <Link
              href="/ai-skripsi-7-hari"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
            >
              Mulai Belajar
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
