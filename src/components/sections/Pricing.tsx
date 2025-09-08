"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { getWhatsAppUrl } from "@/lib/constants";

const pricingTiers = [
  {
    name: "BASIC",
    price: "49K",
    features: ["E-Book", "Prompt", "Jadwal"],
    gradient: "from-amber-50 to-yellow-100",
    borderColor: "border-amber-200",
    iconColor: "from-blue-500 to-indigo-600",
    buttonStyle: "bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90",
    message: "Halo, saya tertarik dengan paket BASIC E-book Skripsi 7 Hari (39K).",
  },
  {
    name: "PRO",
    price: "59K",
    features: ["Basic", "PPT Sidang", "Checklist", "Jadwal"],
    gradient: "from-[#1B3C53] to-[#2a5e7d]",
    borderColor: "border-[#1B3C53]",
    iconColor: "from-yellow-400 to-orange-500",
    buttonStyle: "bg-white text-[#1B3C53] border-2 border-[#1B3C53] hover:bg-[#1B3C53] hover:text-white",
    message: "Halo, saya tertarik dengan paket PRO E-book Skripsi 7 Hari (59K).",
    isPopular: true,
    scale: "transform scale-105",
  },
  {
    name: "ULTIMATE",
    price: "89K",
    features: ["Semua Bonus", "Grup Telegram", "Extra Template Skripsi"],
    gradient: "from-amber-50 to-yellow-100",
    borderColor: "border-amber-200",
    iconColor: "from-purple-500 to-pink-600",
    buttonStyle: "bg-[#1B3C53] text-white hover:bg-[#1B3C53]/90",
    message: "Halo, saya tertarik dengan paket ULTIMATE E-book Skripsi 7 Hari (89K).",
  },
];

export default function Pricing() {
  const handleWhatsAppClick = (message: string) => {
    const url = getWhatsAppUrl(message);
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
            Paket Bundle
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base sm:text-lg text-[#1B3C53]/70 font-hero-sub italic"
          >
            ~Biar AI yang kerja, kamu tinggal wisuda~
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative rounded-2xl bg-gradient-to-br ${tier.gradient} border-2 ${tier.borderColor} p-6 shadow-xl hover:shadow-2xl transition-all duration-300 ${tier.scale || ""}`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    POPULAR
                  </div>
                </div>
              )}
              
              {!tier.isPopular && (
                <div className="absolute -top-4 left-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${tier.iconColor} rounded-full flex items-center justify-center shadow-lg`}>
                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                      <div className={`w-4 h-4 ${tier.iconColor.includes('blue') ? 'bg-blue-500' : 'bg-purple-500'} rounded-full`}></div>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-center pt-4">
                <h3 className={`text-2xl font-bold ${tier.isPopular ? 'text-white' : 'text-[#1B3C53]'} mb-4`}>
                  {tier.name}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className={`text-sm ${tier.isPopular ? 'text-white/70' : 'text-[#1B3C53]/70'}`}>
                    Feature:
                  </div>
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className={`flex items-center justify-center gap-2 ${tier.isPopular ? 'text-white' : 'text-[#1B3C53]'}`}>
                      <span className={tier.isPopular ? 'text-green-300' : 'text-blue-500'}>✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mb-6">
                  <div className={`text-sm ${tier.isPopular ? 'text-white/70' : 'text-[#1B3C53]/70'} mb-2`}>
                    Harga
                  </div>
                  <div className={`text-4xl font-bold ${tier.isPopular ? 'text-white' : 'text-[#1B3C53]'}`}>
                    {tier.price}
                  </div>
                </div>
                <motion.button
                  type="button"
                  whileHover={{ y: -2, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full font-semibold py-3 px-4 rounded-xl transition-colors ${tier.buttonStyle}`}
                  onClick={() => handleWhatsAppClick(tier.message)}
                >
                  💬 Pesan Sekarang
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
