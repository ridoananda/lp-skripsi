export default function Head() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const pagePath = "/ai-skripsi-7-hari";
  const url = baseUrl ? `${baseUrl}${pagePath}` : undefined;
  const imagePath = "/images/section1.png";
  const imageUrl = baseUrl ? `${baseUrl}${imagePath}` : imagePath;

  const title = "AI Skripsi 7 Hari – Selesaikan Skripsi Lebih Cepat dengan AI";
  const description =
    "Panduan langkah demi langkah untuk menyelesaikan skripsi dalam 7 hari dengan bantuan AI. Termasuk template siap pakai, kumpulan prompt, dan tips anti plagiarisme.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "eBook Skripsi 7 Hari Berbasis AI",
    description,
    inLanguage: "id-ID",
    ...(url ? { url } : {}),
    brand: {
      "@type": "Brand",
      name: "eBook Skripsi",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "IDR",
      price: "99000",
      availability: "https://schema.org/InStock",
    },
  } as const;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="skripsi AI, skripsi 7 hari, menulis skripsi, penelitian, template skripsi, prompt AI, anti plagiarisme, ebook skripsi"
      />
      <meta name="robots" content="index,follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {url ? <link rel="canonical" href={url} /> : null}

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url ? <meta property="og:url" content={url} /> : null}
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content="Pratinjau eBook Skripsi Berbasis AI" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}


