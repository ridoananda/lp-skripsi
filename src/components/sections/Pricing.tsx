"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/constants";

// Single pricing package based on the image
const pricingData = {
  dealTitle: "Limited Time Deal",
  dealSubtitle: "Untuk 25 orang tercepat !!",
  ebookTitle: "SKRIPSI BERES ANTI STRESSS",
  ebookSubtitle: "7 Hari Selesai dengan AI",
  discountText: "Dapatkan Diskon",
  discountPercentage: "20%",
  originalPrice: "Rp. 99.000",
  newPrice: "Rp. 79.000,-",
  features: [
    "No AI Detection",
    "Anti Plagiat", 
    "Referensi Jurnal Bereputasi"
  ],
  bonus: "Grup Telegram",
  whatsappMessage: "Halo, saya tertarik dengan E-book Skripsi 7 Hari (Limited Time Deal).",
};

export default function Pricing() {
  const handleWhatsAppClick = () => {
    const url = getWhatsAppUrl(pricingData.whatsappMessage);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.section
      id="harga"
      className="w-full bg-solution py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            variants={fadeUp}
            className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]"
          >
            {pricingData.dealTitle}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-[#1B3C53]/70 font-hero-sub italic"
          >
            {pricingData.dealSubtitle}
          </motion.p>
        </div>

        <div className="mt-12 flex justify-center">
          {/* Single Card with Features and Pricing */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl bg-gradient-to-br from-[#1B3C53] to-[#2a5e7d] border-2 border-[#1B3C53] p-8 shadow-xl max-w-2xl w-full"
          >
            <div className="text-center text-white">
              {/* E-book Title */}
              <h3 className="text-3xl font-bold mb-2">
                {pricingData.ebookTitle}
              </h3>
              <p className="text-lg text-white/70 mb-8">
                {pricingData.ebookSubtitle}
              </p>
              
              {/* Features */}
              <div className="space-y-4 mb-8">
                <div className="text-sm text-white/70">
                  Features:
                </div>
                {pricingData.features.map((feature, index) => (
                  <div key={index} className="flex items-center justify-center gap-3 text-white">
                    <span className="text-green-300 text-xl">✓</span>
                    <span className="text-lg">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Bonus */}
              <div className="bg-red-500 text-white px-6 py-3 rounded-full inline-block mb-8">
                <span className="font-bold">BONUS: </span>
                {pricingData.bonus}
              </div>

              {/* Pricing Section */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
                <h4 className="text-2xl font-bold mb-4">
                  {pricingData.discountText}
                </h4>
                <div className="text-7xl font-extrabold mb-4 text-yellow-300">
                  {pricingData.discountPercentage}
                </div>
                
                <div className="space-y-2">
                  <div className="text-gray-300 text-2xl line-through">
                    {pricingData.originalPrice}
                  </div>
                  <div className="text-5xl font-bold">
                    {pricingData.newPrice}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                type="button"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors text-lg"
                onClick={handleWhatsAppClick}
              >
                💬 Beli Sekarang via WhatsApp
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
