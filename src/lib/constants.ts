export const WHATSAPP_CONFIG = {
  number: process.env.WHATSAPP_NUMBER || "6285946885571",
  message: "Halo, saya tertarik dengan E-book Skripsi 7 Hari.",
};

export const getWhatsAppUrl = (customMessage?: string) => {
  const configuredNumber = WHATSAPP_CONFIG.number;
  const sanitizedNumber = String(configuredNumber).replace(/[^0-9]/g, "");
  const message = encodeURIComponent(customMessage || WHATSAPP_CONFIG.message);
  return `https://wa.me/${sanitizedNumber}?text=${message}`;
};
