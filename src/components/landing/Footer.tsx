"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <motion.footer
      className="w-full bg-[#0f172a] text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div variants={fadeUp} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.webp"
                width={44}
                height={44}
                alt="Bantuan AI logo"
                className="w-10 h-10 object-cover rounded-lg"
                quality={100}
                sizes="44px"
              />
              <span className="text-lg font-semibold">Bantuan AI</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Wadah edukasi digital yang menghadirkan e-book dan E-Course interaktif berbasis AI untuk membantu pembelajaran yang lebih efektif dan menyenangkan.
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com/bantuanai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Facebook Bantuan AI"
              >
                <Facebook className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://instagram.com/bantuanai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram Bantuan AI"
              >
                <Instagram className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://twitter.com/bantuanai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Twitter Bantuan AI"
              >
                <Twitter className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://youtube.com/@bantuanai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
                aria-label="YouTube Bantuan AI"
              >
                <Youtube className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="https://linkedin.com/company/bantuanai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
                aria-label="LinkedIn Bantuan AI"
              >
                <Linkedin className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-lg mb-4">Produk</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/ai-skripsi-7-hari" className="text-white/70 hover:text-white transition-colors">E-book Skripsi</a></li>
              <li><a href="#ecourse" className="text-white/70 hover:text-white transition-colors">E-Course AI</a></li>
              <li><a href="#fitur" className="text-white/70 hover:text-white transition-colors">Fitur</a></li>
              <li><a href="#keuntungan" className="text-white/70 hover:text-white transition-colors">Keuntungan</a></li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-lg mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">Email: info@bantuanai.com</li>
              <li className="text-white/70">WhatsApp: +62 859-4688-5571</li>
              <li className="text-white/70">Jam Kerja: Senin-Jumat 9:00-17:00</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          variants={fadeUp}
          className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="text-sm text-white/60">
            © 2024 Bantuan AI. Semua hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
