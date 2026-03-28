/* ╔═══════════════════════════════════════════════════════════════╗
   ║  ✏️  EDIT KONTEN LO DI SINI — SATU TEMPAT, SEMUA UPDATE      ║
   ║  Jangan ubah apapun di luar blok CONFIG ini.                  ║
   ╚═══════════════════════════════════════════════════════════════╝ */

const CONFIG = {
  /* ─── IDENTITAS ──────────────────────────────────────────────── */
  name: "Devtective", // Nama / brand (navbar & footer)
  title: "Junior Software Engineer", // Profesi (tab browser)
  available: true, // true = badge hijau "Available"

  /* ─── HERO ───────────────────────────────────────────────────── */
  hero: {
    headline: "Saya membangun website yang",
    headlineEm: "benar-benar bermanfaat", // Kata italic
    headlineEnd: "untuk bisnis Anda.",
    sub: "Junior Software Engineer dan pengembang web yang fokus membangun produk digital yang bersih, cepat, dan fungsional. Melayani klien di Indonesia maupun internasional.",
    cvLink: "CV_Abdi_Devtective.pdf",
    stats: [{ num: "5", label: "Proyek Selesai" }],
  },

  /* ─── ABOUT ──────────────────────────────────────────────────── */
  about: {
    heading: "Developer dengan pola pikir problem-solving.",
    bio: [
      "Saya adalah seorang Junior Software Engineer yang berbasis di Indonesia, fokus membangun website dan aplikasi web yang bersih dan berperforma tinggi. Baru terjun ke dunia profesional, namun sudah berpengalaman dalam membangun sistem yang andal.",
      "Saya sangat peduli pada detail — kecepatan akses, responsivitas mobile, kode yang bersih, dan antarmuka yang intuitif. Bukan sekadar website yang bagus dilihat, tapi juga nyaman digunakan.",
      "Tersedia untuk pengerjaan berbasis proyek untuk klien di Indonesia maupun internasional. Saya berkomunikasi dengan jelas dan menjamin pengiriman tepat waktu.",
    ],
    skills: [
      {
        category: "KEAHLIAN TEKNIS",
        subgroups: [
          {
            title: "Bahasa Pemrograman & Framework",
            tags: [
              "Python",
              "JavaScript / TypeScript",
              "React.js / Next.js",
              "Node.js",
              "Express.js",
              "HTML",
              "CSS (Tailwind / Bootstrap)",
              "Zustand / Redux",
              "Framer Motion",
              "GraphQL",
              "SQL (PostgreSQL, MySQL)",
              "Prisma ORM",
              "MongoDB",
            ],
          },
          {
            title: "Alat & Platform",
            tags: [
              "Git & GitHub",
              "Docker (dasar)",
              "Desain & integrasi REST API",
              "Linux CLI",
              "Sanity CMS",
              "Postman",
              "Figma",
            ],
          },
          {
            title: "Cloud & DevOps (dasar)",
            tags: [
              "AWS / GCP fundamentals",
              "CI/CD pipeline (GitHub Actions)",
              "Vercel / DigitalOcean deployment",
            ],
          },
        ],
      },
      {
        category: "AI & OTOMATISASI",
        tags: [
          "Prompt engineering (Claude, ChatGPT, Gemini)",
          "Integrasi LLM API (OpenAI, Anthropic)",
          "Pengembangan berbantu AI (Cursor, GitHub Copilot, Claude Code)",
          "Otomatisasi alur kerja (dasar n8n / Zapier)",
          "RAG pipeline (dasar)",
        ],
      },
      {
        category: "PENGEMBANGAN WEB",
        tags: [
          "Pengembangan aplikasi web full-stack",
          "Desain responsif & mobile-first",
          "Pembuatan E-commerce & landing page",
          "Optimasi performa (Core Web Vitals)",
          "Dasar teknik SEO",
        ],
      },
      {
        category: "SOFT SKILL & GAYA KERJA",
        tags: [
          "Siap kerja remote: komunikasi asinkron & mandiri",
          "Dokumentasi teknis (Notion, Markdown)",
          "Dekomposisi masalah & berpikir sistem",
          "Cepat belajar — alur kerja berbasis AI",
          "Kolaboratif via Slack / Linear / Figma",
        ],
      },
      {
        category: "BAHASA",
        tags: ["🇮🇩 Indonesia (Native)", "🇺🇸 Inggris (Percakapan)"],
      },
    ],
  },

  /* ─── EXPERIENCE ─────────────────────────────────────────────── */
  experience: [
    {
      company: "PT. Global Tehnikatama Indonesia",
      role: "Fullstack Engineer (Magang)",
      period: "Jan 2026 — Sekarang",
      desc: "Mengembangkan 'AI Research Assistant' (SaaS). Mengintegrasikan OpenClaw, agen AI proaktif dengan memori percakapan dan kemampuan eksekusi tugas, untuk mengotomatisasi alur kerja produktivitas pengguna.",
      tech: [
        "Next.js",
        "PostgreSQL",
        "OpenClaw AI",
        "TypeScript",
        "Tailwind CSS",
      ],
    },

    {
      company: "Fakultas Sains dan Teknologi UIN Raden Fatah Palembang",
      role: "Frontend Engineer (Magang)",
      period: "Agu 2025 — Des 2025",
      desc: "Membangun Sistem Informasi Penelitian Mahasiswa khusus untuk fakultas. Berkolaborasi dengan tim pengembang dan stakeholder untuk menyederhanakan alur kerja penelitian akademik.",
      tech: [
        "React.js (Next.js)",
        "Tailwind CSS v4",
        "JavaScript (ES6+)",
        "REST API",
      ],
    },
  ],

  /* ─── PROJECTS ───────────────────────────────────────────────── */
  // featured:true  → card besar (hanya 1). Sisanya card normal.
  // Tambah project: copy satu blok { ... }, paste di bawahnya, isi ulang.
  projects: [
    {
      title: "AI Research Assistant (SaaS)",
      role: "Fullstack Engineer",
      desc: "Platform riset canggih yang terintegrasi dengan OpenClaw—agen AI proaktif dengan memori percakapan dan kemampuan otomatisasi sistem untuk produktivitas personal.",
      tech: ["Next.js", "PostgreSQL", "OpenClaw AI", "Tailwind CSS"],
      link: null,
      linkText: "Segera Hadir",
      emoji: "<i class='ph ph-robot'></i>",
      img: null,
      bgFrom: "#F5F3FF",
      bgTo: "#EDE9FE",
      emojiColor: "#7C3AED",
      featured: true,
    },
    {
      title: "Business Summit 2026",
      role: "Fullstack Engineer",
      desc: "Website konferensi lengkap dengan fitur pendaftaran real-time, manajemen pembicara, dan paket sponsor. Terintegrasi dengan Sanity CMS untuk pembaruan konten yang mudah.",
      tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Zod"],
      link: "https://business-summit-2026.vercel.app/",
      linkText: "Lihat Website",
      emoji: "<i class='ph ph-buildings'></i>",
      img: "images/thumbnails/business-summit-2026.png",
      bgFrom: "#FFF7ED",
      bgTo: "#FFEDD5",
      emojiColor: "#EA580C",
      featured: true,
    },
    {
      title: "NewsBlog",
      role: "Fullstack Engineer",
      desc: "Platform berita editorial full-stack dengan headless CMS, auto-revalidasi ISR, dan UI premium. Dilengkapi 15 halaman termasuk detail artikel, kategori, penulis, tag, pencarian, dan RSS feed.",
      tech: [
        "Next.js 16",
        "Tailwind CSS v4",
        "Sanity CMS",
        "TypeScript",
        "Vercel",
      ],
      link: "https://devbloq.vercel.app/",
      linkText: "Lihat Website",
      emoji: "<i class='ph ph-newspaper'></i>",
      img: "images/thumbnails/news-blog.png",
      bgFrom: "#FFF1F2",
      bgTo: "#FFE4E6",
      emojiColor: "#C1121F",
      featured: true,
    },
    {
      title: "GoSkripsi",
      role: "Frontend Engineer",
      desc: "Sistem manajemen penelitian dan skripsi mahasiswa di UIN Raden Fatah Palembang. Dibangun untuk menyederhanakan alur kerja akademik bagi mahasiswa dan admin fakultas.",
      tech: ["Next.js", "Tailwind CSS v4", "React Query", "REST API"],
      link: "https://goskripsi.rafanovation.cloud",
      linkText: "Buka GoSkripsi",
      emoji: "<i class='ph ph-graduation-cap'></i>",
      img: "images/thumbnails/goskripsi.png",
      bgFrom: "#EFF6FF",
      bgTo: "#DBEAFE",
      emojiColor: "#2563EB",
      featured: true,
    },
    {
      title: "Lumière Skincare",
      role: "Fullstack Engineer",
      desc: "Brand skincare lokal premium yang menggunakan bahan alami Indonesia. Dibangun dengan fokus pada desain editorial yang bersih dan alami serta responsivitas mobile.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "https://lumiere-skincare-seven.vercel.app/",
      linkText: "Lihat Website",
      emoji: "<i class='ph ph-sparkle'></i>",
      img: "images/thumbnails/lumiere-skincare.png",
      bgFrom: "#ECFDF5",
      bgTo: "#D1FAE5",
      emojiColor: "#047857",
      featured: true,
    },
    {
      title: "Dapur Sari",
      role: "Fullstack Engineer",
      desc: "Layanan katering profesional dan masakan rumah di Palembang. Menyediakan katalog menu dan layanan pemesanan langsung untuk acara korporat maupun personal.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "https://dapur-sari.vercel.app/",
      linkText: "Lihat Website",
      emoji: "<i class='ph ph-cooking-pot'></i>",
      img: "images/thumbnails/dapur-sari.png",
      bgFrom: "#FFF7ED",
      bgTo: "#FFEDD5",
      emojiColor: "#C2410C",
      featured: true,
    },
  ],

  /* ─── DIGITAL PRODUCTS ───────────────────────────────────────── */
  // Produk digital yang bisa dibeli langsung via WhatsApp.
  digitalProducts: [
    {
      title: "Selama Ini Kamu Cuma Nyia-nyiain AI",
      desc: "Panduan praktis prompt engineering untuk mahasiswa — biar output AI-mu berhenti jadi biasa-biasa saja. <br><br><strong>Yang kamu dapat:</strong><br>• E-book 40+ halaman<br>• 30 template prompt siap pakai<br>• Konsultasi gratis seputar prompt engineer",
      price: "Rp 39.000 <small style='text-decoration: line-through; opacity: 0.6; font-size: 0.8em;'>Rp 50.000</small>",
      img: "images/products/ebook-ai.png",
      badge: "Untuk semua jurusan · One-time · PDF",
      link: "https://wa.me/6285788141307?text=Halo%20Devtective,%20saya%20ingin%20membeli%20Ebook%3A%20Selama%20Ini%20Kamu%20Cuma%20Nyia-nyiain%20AI",
    },
  ],

  /* ─── SERVICES ───────────────────────────────────────────────── */
  // Tambah service: copy satu baris { ... }, paste di bawahnya, isi ulang.
  services: [
    {
      icon: "<i class='ph ph-globe'></i>",
      title: "Pembuatan Website",
      desc: "Profil perusahaan, landing page, atau portofolio. Cepat, responsif, dan optimal untuk SEO.",
      price: "Mulai dari Rp 3.000.000",
    },
    {
      icon: "<i class='ph ph-shopping-cart'></i>",
      title: "Toko Online (E-Commerce)",
      desc: "Toko online dengan katalog, keranjang keranjang belanja, gerbang pembayaran (Midtrans/Stripe), dan manajemen pesanan.",
      price: "Mulai dari Rp 8.000.000",
    },
    {
      icon: "<i class='ph ph-gear'></i>",
      title: "Aplikasi Web & Dashboard",
      desc: "Aplikasi web kustom, panel admin, atau alat internal yang disesuaikan dengan alur bisnis Anda.",
      price: "Mulai dari Rp 12.000.000",
    },
    {
      icon: "<i class='ph ph-plugs'></i>",
      title: "Integrasi API",
      desc: "Menghubungkan website Anda ke API WhatsApp, layanan Google, gerbang pembayaran, atau API kustom lainnya.",
      price: "Mulai dari Rp 2.000.000",
    },
    {
      icon: "<i class='ph ph-device-mobile'></i>",
      title: "Redesain Responsif",
      desc: "Website Anda tidak ramah ponsel? Saya akan mendesain ulang dan membangunnya kembali dengan benar tanpa menghilangkan konten Anda.",
      price: "Mulai dari Rp 4.000.000",
    },
  ],

  /* ─── PROCESS ────────────────────────────────────────────────── */
  process: [
    {
      title: "Konsultasi Awal",
      desc: "Kita diskusikan tujuan, lini masa (timeline), dan anggaran Anda. Tanpa komitmen — cukup penjelasan yang jelas.",
    },
    {
      title: "Proposal & Penawaran",
      desc: "Saya kirimkan rincian pengerjaan dan harga tetap. Tanpa biaya tersembunyi atau kejutan biaya di akhir.",
    },
    {
      title: "Pengerjaan & Update",
      desc: "Saya membangun secara bertahap dengan update rutin. Feedback Anda diperlukan di setiap tahap.",
    },
    {
      title: "Peluncuran & Penyerahan",
      desc: "Website siap online, plus panduan singkat agar Anda bisa mengelola website secara mandiri.",
    },
  ],

  /* ─── TESTIMONIALS ───────────────────────────────────────────── */
  // Tambah testimonial: copy satu blok { ... }, paste di bawahnya, isi ulang.
  testimonials: [],

  /* ─── CONTACT ────────────────────────────────────────────────── */
  contact: {
    heading: "Mari bangun sesuatu yang hebat bersama.",
    sub: "Punya rencana proyek? Ceritakan kepada saya. Saya akan merespons dalam 24 jam — bukan dengan pesan otomatis, tapi jawaban nyata.",
    email: "abdodyssey@gmail.com",
    whatsapp: "6285788141307",
    whatsappLabel: "+62 85788141307",
    linkedin: "https://www.linkedin.com/in/m-abdi-nugroho/",
    github: "https://github.com/abdodyssey",
    serviceOptions: [
      "Pembuatan Website",
      "Toko Online (E-Commerce)",
      "Aplikasi Web / Dashboard",
      "Integrasi API",
      "Lainnya",
    ],
    budgetOptions: [
      "< Rp 3.000.000",
      "Rp 3.000.000 – 10.000.000",
      "Rp 10.000.000 – 25.000.000",
      "> Rp 25.000.000",
      "Mari diskusikan",
    ],
  },

  /* ─── FOOTER ─────────────────────────────────────────────────── */
  footer: { text: "Dibangun dengan sepenuh hati, selesai tepat waktu.", year: 2025 },

  /* ─── EMAILJS (Isi di sini agar fitur kontak jalan) ───────────── */
  emailjs: {
    publicKey: "XMMorRU34Z64vIHYL", // Ganti dengan Public Key EmailJS lo
    serviceId: "service_ejlhuhg", // Ganti dengan Service ID EmailJS lo
    templateId: "template_uigc7b9", // Ganti dengan Template ID EmailJS lo
  },
};
