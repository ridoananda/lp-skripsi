import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen w-full bg-hero">
        <header className="w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-md bg-black/80 text-white grid place-items-center font-bold">
              eB
            </div>
            <span className="text-sm font-medium">eBook Skripsi</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#preview" className="hover:underline">
              Preview
            </a>
            <a href="#testimonial" className="hover:underline">
              Testimonial
            </a>
            <a href="#bonus" className="hover:underline">
              Bonus
            </a>
            <a
              href="#beli"
              className="ml-4 btn-primary-hero rounded-full px-4 py-2"
            >
              Beli Sekarang
            </a>
          </nav>
        </header>

        <main className="w-full max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">
          <section>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white border border-white/20 text-xs font-medium mb-5">
              <span>🚀 Fast Track</span>
              <span className="text-white/80">Gen Z Edition</span>
            </div>
            <h1 className="font-hero-heading font-extrabold text-white text-4xl sm:text-5xl md:text-6xl leading-[1.1] tracking-tight">
              Skripsi Kelar 7 Hari? YES, AI Can Do It! 🚀
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-white/80 font-hero-sub">
              Panduan anti-baper & anti-ngaret untuk mahasiswa Gen Z, dari milih
              topik sampai kelar, semua dibantu AI.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <a
                id="beli"
                href="#"
                className="btn-primary-hero rounded-xl px-5 py-3 text-base font-semibold text-center"
              >
                🔥 Dapatkan Sekarang
              </a>
              <a
                href="#preview"
                className="btn-secondary-hero rounded-xl px-5 py-3 text-base font-semibold text-center"
              >
                👀 Lihat Contoh Halaman
              </a>
            </div>
            <div
              id="bonus"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-white/70 border border-black/10"
            >
              <span>🎁 BONUS:</span>
              <span>Template Skripsi + Prompt AI Rahasia</span>
            </div>
          </section>

          <section className="relative">
            <Image
              src="/images/section1.png"
              width={1000}
              height={1000}
              alt="AI Hologram"
              className="mx-auto w-full  rounded-2xl"
            />
            {/* <div className="relative w-full aspect-[4/3] rounded-2xl bg-white/70 border border-black/10 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,255,179,0.25),transparent_40%),_radial-gradient(circle_at_70%_80%,rgba(124,58,237,0.22),transparent_45%)]"></div>
            <div className="absolute inset-0 grid place-items-center p-6">
              <div className="w-full max-w-xs mx-auto text-center">
              </div>
            </div>
          </div> */}
          </section>
        </main>
      </div>

      <section id="problem" className="w-full bg-[#e6eef4] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight">
              Kenapa Skripsi Bikin Stress? 🤯
            </h2>
            <p className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub">
              Ada tiga alasan utama yang bikin skripsi jadi drama panjang:
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            <Image
              src="/images/stress.png"
              width={1000}
              height={1000}
              alt="AI Hologram"
              className="mx-auto w-1/2 rounded-2xl"
            />
            {/* <div className="rounded-2xl bg-white/90 border border-black/10 p-6 md:p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">😮‍💨</div>
                <div className="text-sm text-black/60">
                  Mahasiswa lelah + tumpukan buku
                </div>
              </div>
              <div className="h-40 rounded-xl bg-[linear-gradient(120deg,_#fef3c7_0%,_#ede9fe_50%,_#d1fae5_100%)] border border-black/10 grid place-items-center">
                <div className="w-3/4">
                  <div className="text-center text-sm mb-1 text-black/70">
                    Progress Skripsi
                  </div>
                  <div className="w-full h-3 rounded-full bg-black/10">
                    <div
                      className="h-3 rounded-full bg-[#22d3ee]"
                      style={{ width: "5%" }}
                    ></div>
                  </div>
                  <div className="text-center text-xs mt-1 text-black/50">
                    stuck di 5%
                  </div>
                </div>
              </div>
            </div> */}
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-xl p-5 bg-white border border-black/10">
              <div className="text-3xl">🌀</div>
              <div className="mt-2 font-semibold">Bingung milih topik</div>
              <div className="mt-1 text-sm text-black/70">
                Semua topik keliatan rumit, nggak ada yang cocok sama passion.
              </div>
            </div>
            <div className="rounded-xl p-5 bg-white border border-black/10">
              <div className="text-3xl">📚</div>
              <div className="mt-2 font-semibold">Ribet nyari jurnal</div>
              <div className="mt-1 text-sm text-black/70">
                Waktu habis cuma buat cari referensi yang valid.
              </div>
            </div>
            <div className="rounded-xl p-5 bg-white border border-black/10">
              <div className="text-3xl">📝</div>
              <div className="mt-2 font-semibold">Revisi nggak kelar-kelar</div>
              <div className="mt-1 text-sm text-black/70">
                Baru selesai revisi, eh revisi lagi.
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12">
            <div className="rounded-xl px-5 py-4 bg-white/90 border border-black/10 shadow">
              <div className="text-center font-semibold">
                &quot;Kami paham... makanya eBook ini hadir!&quot;
              </div>
              <div className="text-center text-sm text-black/70 mt-1">
                😌 Tenang… semua ini bisa di-handle sama AI kalau tau caranya.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solution" className="w-full bg-solution py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]">
              Kenalin, Partner Skripsi Baru Kamu: AI 🤖
            </h2>
            <p className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub">
              7 Hari Step-by-Step skripsi kelar, full tutorial + prompt AI siap
              pakai.
            </p>
          </div>

          <div className="mt-8 md:mt-12 grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-10 items-stretch">
            <Image
              src="/images/teaching.png"
              width={1000}
              height={1000}
              alt="AI Hologram"
              className="mx-auto w-full  rounded-2xl"
            />
            {/* <div className="rounded-2xl bg-white border border-black/10 p-6 md:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(124,58,237,0.18),transparent_50%),_radial-gradient(circle_at_20%_80%,rgba(0,255,179,0.2),transparent_45%)]"></div>
              <div className="relative z-[1] grid place-items-center text-center gap-3">
                <Image src="/globe.svg" alt="AI Assistant" width={110} height={110} className="mx-auto opacity-85" />
                <div className="text-sm text-black/60">AI hologram memandu mahasiswa 📚🤖</div>
                <div className="text-xs text-black/50">Ikuti timeline 7 hari sampai beres</div>
              </div>
            </div> */}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              <div className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors">
                <div className="text-lg">
                  🧠{" "}
                  <span className="font-semibold">
                    Hari 1: Mindset & Tools AI
                  </span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Setup mindset produktif & tools AI terbaik
                </div>
              </div>
              <div className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors">
                <div className="text-lg">
                  🎯{" "}
                  <span className="font-semibold">
                    Hari 2: Milih Topik Riset
                  </span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Temukan topik yang relevan & unik
                </div>
              </div>
              <div className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors">
                <div className="text-lg">
                  📚{" "}
                  <span className="font-semibold">
                    Hari 3: Cari Literatur Otomatis
                  </span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Gunakan AI untuk filter jurnal
                </div>
              </div>
              <div className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors">
                <div className="text-lg">
                  ✍️ <span className="font-semibold">Hari 4: Susun BAB 1</span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Struktur pendahuluan yang solid
                </div>
              </div>
              <div className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors">
                <div className="text-lg">
                  📊{" "}
                  <span className="font-semibold">
                    Hari 5: Data & Olah Data
                  </span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Panduan pengumpulan & analisis data
                </div>
              </div>
              <div className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors">
                <div className="text-lg">
                  🛠️{" "}
                  <span className="font-semibold">Hari 6: Susun BAB 3 & 4</span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Metodologi & hasil riset dengan AI
                </div>
              </div>
              <div className="rounded-xl p-5 bg-white/80 border border-black/10 hover:bg-[#a7f3d0]/40 transition-colors sm:col-span-2">
                <div className="text-lg">
                  📝{" "}
                  <span className="font-semibold">
                    Hari 7: Editing & Finalisasi
                  </span>
                </div>
                <div className="mt-1 text-sm text-black/70">
                  Grammar, plagiarisme, layout akhir
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#beli"
              className="btn-primary-hero rounded-xl px-6 py-3 text-base font-semibold text-center"
            >
              🚀 Mulai Skripsi dengan AI
            </a>
          </div>
        </div>
      </section>

      <section id="preview" className="w-full bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]">
              Intip Isi eBook-nya 📖
            </h2>
            <p className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub">
              Lihat cuplikan halaman, template, dan prompt AI yang bakal kamu
              dapatkan.
            </p>
          </div>

          <div className="mt-8 md:mt-12">
            <div className="flex items-center justify-center gap-3 text-sm text-black/60">
              <span>⬅️</span>
              <span>Geser untuk melihat lainnya</span>
              <span>➡️</span>
            </div>
            <div className="mt-5 overflow-x-auto">
              <div className="flex gap-4 md:gap-6 snap-x snap-mandatory">
                <div className="relative rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start">
                  <div className="h-[220px] sm:h-[260px] md:h-[320px] bg-[linear-gradient(120deg,_#dbeafe_0%,_#ede9fe_50%,_#d1fae5_100%)] grid place-items-center">
                    <Image
                      src="/file.svg"
                      alt="Halaman tutorial AI"
                      width={80}
                      height={80}
                      className="opacity-80"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    Halaman tutorial AI
                  </div>
                </div>

                <div className="relative rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start">
                  <div className="h-[220px] sm:h-[260px] md:h-[320px] bg-[linear-gradient(120deg,_#fef3c7_0%,_#ede9fe_50%,_#cffafe_100%)] grid place-items-center">
                    <Image
                      src="/file.svg"
                      alt="Template skripsi siap pakai"
                      width={80}
                      height={80}
                      className="opacity-80"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    Template Skripsi Siap Pakai
                  </div>
                </div>

                <div className="relative rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start">
                  <div className="h-[220px] sm:h-[260px] md:h-[320px] bg-[linear-gradient(120deg,_#ede9fe_0%,_#d1fae5_50%,_#fee2e2_100%)] grid place-items-center">
                    <Image
                      src="/file.svg"
                      alt="Contoh prompt AI untuk BAB 1"
                      width={80}
                      height={80}
                      className="opacity-80"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    Prompt AI untuk BAB 1
                  </div>
                </div>

                <div className="relative rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start">
                  <div className="h-[220px] sm:h-[260px] md:h-[320px] bg-[linear-gradient(120deg,_#bae6fd_0%,_#ede9fe_50%,_#d1fae5_100%)] grid place-items-center">
                    <Image
                      src="/file.svg"
                      alt="Panduan cari jurnal otomatis"
                      width={80}
                      height={80}
                      className="opacity-80"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    Panduan Cari Jurnal Otomatis
                  </div>
                </div>

                <div className="relative rounded-2xl bg-white border border-black/10 shadow-lg overflow-hidden min-w-[280px] sm:min-w-[360px] md:min-w-[420px] snap-start">
                  <div className="h-[220px] sm:h-[260px] md:h-[320px] bg-[linear-gradient(120deg,_#fde68a_0%,_#ede9fe_50%,_#d1fae5_100%)] grid place-items-center">
                    <Image
                      src="/file.svg"
                      alt="Tips bebas plagiarisme"
                      width={80}
                      height={80}
                      className="opacity-80"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-medium bg-black/70 text-white">
                    Tips Bebas Plagiarisme
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="#beli"
              className="btn-primary-hero rounded-xl px-6 py-3 text-base font-semibold text-center"
            >
              📥 Download Sekarang
            </a>
          </div>
        </div>
      </section>

      <section
        id="testimonial"
        className="w-full bg-testimonial py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]">
              Kata Mereka yang Udah Coba… 💬
            </h2>
            <p className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub">
              Cerita nyata dari mahasiswa yang skripsinya kelar lebih cepat
              dengan bantuan AI.
            </p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 bg-[#f1f5f9] grid place-items-center">
                  <span className="text-xl">🧑‍🎓</span>
                </div>
                <div>
                  <div className="font-semibold">Rina</div>
                  <div className="text-sm text-black/60">Universitas A</div>
                </div>
              </div>
              <blockquote className="mt-4 italic text-black/80">
                &quot;Gila sih, skripsi 2 bulan mangkrak, kelar cuma 8
                hari!&quot;
              </blockquote>
              <div className="mt-3 text-amber-400">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 bg-[#f1f5f9] grid place-items-center">
                  <span className="text-xl">🧑‍🎓</span>
                </div>
                <div>
                  <div className="font-semibold">Budi</div>
                  <div className="text-sm text-black/60">Universitas B</div>
                </div>
              </div>
              <blockquote className="mt-4 italic text-black/80">
                &quot;AI-nya beneran bantu, bukan cuma teori.&quot;
              </blockquote>
              <div className="mt-3 text-amber-400">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-black/10 bg-[#f1f5f9] grid place-items-center">
                  <span className="text-xl">🧑‍🎓</span>
                </div>
                <div>
                  <div className="font-semibold">Alya</div>
                  <div className="text-sm text-black/60">Universitas C</div>
                </div>
              </div>
              <blockquote className="mt-4 italic text-black/80">
                &quot;Prompt yang dikasih tinggal pakai, hemat waktu
                banget.&quot;
              </blockquote>
              <div className="mt-3 text-amber-400">⭐⭐⭐⭐⭐</div>
            </div>
          </div>

          <div className="mt-10">
            <div className="rounded-2xl bg-white/90 border border-black/10 p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-semibold text-lg">
                    Tersisa hanya 99K untuk akses semua materi + bonusnya!
                  </div>
                  <div className="text-sm text-black/70">
                    Harga bisa naik kapan saja.
                  </div>
                </div>
                <div>
                  <a
                    href="#beli"
                    className="btn-primary-hero rounded-xl px-6 py-3 text-base font-semibold text-center"
                  >
                    🚀 Mulai Skripsi Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bonus" className="w-full bg-bonus py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-hero-heading font-extrabold text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#1B3C53]">
              Bonus Spesial Buat Kamu 🎁
            </h2>
            <p className="mt-3 text-base sm:text-lg text-black/70 font-hero-sub">
              Semua pembelian eBook ini akan mendapatkan bonus eksklusif yang
              bikin proses skripsi kamu makin gampang.
            </p>
          </div>

          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg text-center">
              <div className="text-4xl">🎯</div>
              <div className="mt-3 font-semibold text-lg">
                Template Skripsi Siap Pakai
              </div>
              <div className="mt-1 text-sm text-black/70">
                Tinggal edit, sesuaiin sama topik skripsi kamu.
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg text-center">
              <div className="text-4xl">💬</div>
              <div className="mt-3 font-semibold text-lg">
                Daftar Prompt AI Skripsi
              </div>
              <div className="mt-1 text-sm text-black/70">
                Prompt siap pakai untuk milih topik, cari jurnal, dan nulis Bab.
              </div>
            </div>
            <div className="rounded-2xl bg-white border border-black/10 p-6 shadow-lg text-center">
              <div className="text-4xl">🛡️</div>
              <div className="mt-3 font-semibold text-lg">
                Panduan Bebas Plagiarisme
              </div>
              <div className="mt-1 text-sm text-black/70">
                Tips & trik lolos uji Turnitin tanpa drama.
              </div>
            </div>
          </div>

          <div className="mt-10">
            <div className="rounded-2xl bg-[#fef08a] border border-black/10 p-6 md:p-8 shadow-xl">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="font-semibold text-lg">
                    💎 Total value Rp 500.000, sekarang cuma 99K!
                  </div>
                  <div className="text-sm text-black/70">
                    Dapatkan semua bonus + eBook dalam sekali beli.
                  </div>
                </div>
                <div>
                  <a
                    href="#beli"
                    className="btn-primary-hero rounded-xl px-6 py-3 text-base font-semibold text-center"
                  >
                    🔥 Ambil Semua Bonus & eBook Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="w-full relative overflow-hidden bg-cta py-16 md:py-24"
      >
        <div className="absolute inset-0 cta-overlay pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-hero-heading font-extrabold text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
              Jangan Tunggu Sampai Deadline Mepet! 🚀
            </h2>
            <p className="mt-3 text-base sm:text-lg text-white/90 font-hero-sub">
              Skripsimu bisa kelar minggu ini juga kalau mulai sekarang.
            </p>
            <ul className="mt-6 space-y-3 text-white/90">
              <li>
                ✅ <span className="font-semibold">eBook Lengkap</span> 7 Hari
                Kelar Skripsi
              </li>
              <li>
                ✅ <span className="font-semibold">Bonus</span> Template, Prompt
                AI, & Panduan Anti Plagiarisme
              </li>
              <li>
                ✅ <span className="font-semibold">Akses Instan</span>
              </li>
            </ul>
            <div className="mt-7">
              <a
                href="#beli"
                className="btn-primary-hero rounded-2xl px-7 py-4 text-lg font-bold inline-block"
              >
                🔥 Mulai Skripsi Sekarang
              </a>
              <div className="text-xs text-white/80 mt-2">
                *Harga promo cuma berlaku hari ini
              </div>
            </div>
          </div>
          <div className="relative">
            <Image
              src="/images/trophy.png"
              width={1000}
              height={1000}
              alt="AI Hologram"
              className="mx-auto w-full  rounded-2xl"
            />
            {/* <div className="relative w-full aspect-[4/3] rounded-2xl bg-white/70 border border-black/10 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.45),transparent_40%),_radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.25),transparent_45%),_radial-gradient(circle_at_60%_20%,rgba(16,185,129,0.22),transparent_45%)]"></div>
              <div className="absolute inset-0 grid place-items-center p-6">
                <div className="w-full max-w-xs mx-auto text-center">
                  <div className="text-6xl">🤖🏆</div>
                  <div className="mt-3 text-sm text-black/60">AI kasih trofi ke mahasiswa yang kelar skripsi 🎉</div>
                  <div className="mt-1 text-xs text-black/50">Aksen confetti lembut di latar</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}
