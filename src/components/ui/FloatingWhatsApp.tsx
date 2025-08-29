"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
  className?: string;
}

export default function FloatingWhatsApp({ 
  phoneNumber = "6285946885571", 
  message = "Halo, saya tertarik dengan E-book Skripsi 7 Hari.",
  className = ""
}: FloatingWhatsAppProps) {
  const sanitizedNumber = String(phoneNumber).replace(/[^0-9]/g, "");
  const whatsAppHref = `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsAppHref}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className={`fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group ${className}`}
      aria-label="Hubungi kami via WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm font-medium">
        Hubungi WhatsApp
      </div>
    </motion.a>
  );
}
