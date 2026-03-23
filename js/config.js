/* ╔═══════════════════════════════════════════════════════════════╗
   ║  ✏️  EDIT KONTEN LO DI SINI — SATU TEMPAT, SEMUA UPDATE      ║
   ║  Jangan ubah apapun di luar blok CONFIG ini.                  ║
   ╚═══════════════════════════════════════════════════════════════╝ */

const CONFIG = {
  /* ─── IDENTITAS ──────────────────────────────────────────────── */
  name: "Devtective", // Nama / brand (navbar & footer)
  title: "Freelance Web Developer", // Profesi (tab browser)
  available: true, // true = badge hijau "Available"

  /* ─── HERO ───────────────────────────────────────────────────── */
  hero: {
    headline: "I build websites that",
    headlineEm: "actually work", // Kata italic
    headlineEnd: "for your business.",
    sub: "Web developer focused on clean, fast, and functional digital products. Working with clients in Indonesia and internationally.",
    cvLink: "CV_Abdi_Devtective.pdf",
    stats: [{ num: "2", label: "Projects Completed" }],
  },

  /* ─── ABOUT ──────────────────────────────────────────────────── */
  about: {
    heading: "Developer with a problem-solving mindset.",
    bio: [
      "I'm a web developer based in Indonesia, focused on building clean, performant websites and web applications. Fresh to the freelance world, but not to building things that work.",
      "I care about the details — fast load times, mobile responsiveness, clean code, and interfaces that feel intuitive. Not just websites that look good in screenshots.",
      "Available for project-based work with clients in Indonesia and internationally. I communicate clearly and deliver on time.",
    ],
    skills: [
      {
        group: "Frontend",
        tags: [
          "HTML / CSS",
          "JavaScript",
          "React.js",
          "Tailwind CSS",
          "Typscript",
          "NextJS",
        ],
      },
      {
        group: "Backend",
        tags: ["Node.js", "Express", "MySQL", "REST API"],
      },
      {
        group: "Tools & Others",
        tags: ["Git / GitHub", "Figma", "Vercel"],
      },
      {
        group: "Languages",
        tags: ["🇮🇩 Indonesian (Native)", "🇺🇸 English (Conversation)"],
      },
    ],
  },

  /* ─── PROJECTS ───────────────────────────────────────────────── */
  // featured:true  → card besar (hanya 1). Sisanya card normal.
  // Tambah project: copy satu blok { ... }, paste di bawahnya, isi ulang.
  projects: [
    {
      title: "Business Summit 2026",
      desc: "End-to-end conference website featuring real-time registration, speaker management, and sponsorship packages. Integrated with Sanity CMS for seamless content updates.",
      tech: ["Next.js", "Tailwind CSS", "Sanity CMS", "Zod"],
      link: "https://business-summit-2026.vercel.app/",
      linkText: "View Live Site",
      emoji: "<i class='ph ph-buildings'></i>",
      img: "images/thumbnails/business-summit-2026.png",
      bgFrom: "#FFF7ED",
      bgTo: "#FFEDD5",
      emojiColor: "#EA580C",
      featured: true,
    },
    {
      title: "NewsBlog",
      desc: "Full-stack editorial news platform with headless CMS, ISR auto-revalidation, and premium UI. Features 15 pages including article detail, category, author, tag, search, and RSS feed.",
      tech: [
        "Next.js 15",
        "Tailwind CSS v4",
        "Sanity CMS",
        "TypeScript",
        "Vercel",
      ],
      link: "https://blog-rho-liard-46.vercel.app/",
      linkText: "View Live Site",
      emoji: "<i class='ph ph-newspaper'></i>",
      img: "images/thumbnails/news-blog.png",
      bgFrom: "#FFF1F2",
      bgTo: "#FFE4E6",
      emojiColor: "#C1121F",
      featured: true,
    },
  ],

  /* ─── SERVICES ───────────────────────────────────────────────── */
  // Tambah service: copy satu baris { ... }, paste di bawahnya, isi ulang.
  services: [
    {
      icon: "<i class='ph ph-globe'></i>",
      title: "Website Development",
      desc: "Company profile, landing page, or portfolio. Fast, mobile-first, SEO-optimized.",
      price: "Starting from Rp 3.000.000",
    },
    {
      icon: "<i class='ph ph-shopping-cart'></i>",
      title: "E-Commerce",
      desc: "Online store with catalog, cart, payment gateway (Midtrans/Stripe), and order management.",
      price: "Starting from Rp 8.000.000",
    },
    {
      icon: "<i class='ph ph-gear'></i>",
      title: "Web App & Dashboard",
      desc: "Custom web app, admin panel, or internal tools tailored to your business workflow.",
      price: "Starting from Rp 12.000.000",
    },
    {
      icon: "<i class='ph ph-plugs'></i>",
      title: "API Integration",
      desc: "Connect your site to WhatsApp API, Google services, payment gateways, or custom REST APIs.",
      price: "Starting from Rp 2.000.000",
    },
    {
      icon: "<i class='ph ph-device-mobile'></i>",
      title: "Responsive Redesign",
      desc: "Your site not mobile-friendly? I'll redesign and rebuild it properly without losing your content.",
      price: "Starting from Rp 4.000.000",
    },
  ],

  /* ─── PROCESS ────────────────────────────────────────────────── */
  process: [
    {
      title: "Discovery Call",
      desc: "We discuss your goals, timeline, and budget. No commitment needed — just clarity.",
    },
    {
      title: "Proposal & Quote",
      desc: "I send a clear scope and fixed-price quote. No hidden costs or surprises.",
    },
    {
      title: "Build & Update",
      desc: "I build in stages with regular updates. Feedback at every checkpoint.",
    },
    {
      title: "Launch & Handoff",
      desc: "Go live, plus a walkthrough so you can manage the site independently.",
    },
  ],

  /* ─── TESTIMONIALS ───────────────────────────────────────────── */
  // Tambah testimonial: copy satu blok { ... }, paste di bawahnya, isi ulang.
  testimonials: [],

  /* ─── CONTACT ────────────────────────────────────────────────── */
  contact: {
    heading: "Let's build something together.",
    sub: "Have a project in mind? Tell me about it. I'll get back to you within 24 hours — not with a template, with a real answer.",
    email: "abdodyssey@gmail.com",
    whatsapp: "6285788141307",
    whatsappLabel: "+62 85788141307",
    linkedin: "https://www.linkedin.com/in/m-abdi-nugroho/",
    github: "https://github.com/abdodyssey",
    serviceOptions: [
      "Website Development",
      "E-Commerce",
      "Web App / Dashboard",
      "API Integration",
      "Something else",
    ],
    budgetOptions: [
      "< Rp 3.000.000",
      "Rp 3.000.000 – 10.000.000",
      "Rp 10.000.000 – 25.000.000",
      "> Rp 25.000.000",
      "Let's discuss",
    ],
  },

  /* ─── FOOTER ─────────────────────────────────────────────────── */
  footer: { text: "Built with care, delivered on time.", year: 2025 },

  /* ─── EMAILJS (Isi di sini agar fitur kontak jalan) ───────────── */
  emailjs: {
    publicKey: "XMMorRU34Z64vIHYL", // Ganti dengan Public Key EmailJS lo
    serviceId: "service_ejlhuhg", // Ganti dengan Service ID EmailJS lo
    templateId: "template_uigc7b9", // Ganti dengan Template ID EmailJS lo
  },
};
