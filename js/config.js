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
    headline: "I build websites that",
    headlineEm: "actually work", // Kata italic
    headlineEnd: "for your business.",
    sub: "Junior Software Engineer and web developer focused on building clean, fast, and functional digital products. Working with clients in Indonesia and internationally.",
    cvLink: "CV_Abdi_Devtective.pdf",
    stats: [{ num: "5", label: "Projects Completed" }],
  },

  /* ─── ABOUT ──────────────────────────────────────────────────── */
  about: {
    heading: "Developer with a problem-solving mindset.",
    bio: [
      "I'm a Junior Software Engineer based in Indonesia, focused on building clean, performant websites and web applications. Fresh to the professional world, but not to building things that work.",
      "I care about the details — fast load times, mobile responsiveness, clean code, and interfaces that feel intuitive. Not just websites that look good in screenshots.",
      "Available for project-based work with clients in Indonesia and internationally. I communicate clearly and deliver on time.",
    ],
    skills: [
      {
        category: "TECHNICAL SKILLS",
        subgroups: [
          {
            title: "Languages & Frameworks",
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
            title: "Tools & Platforms",
            tags: [
              "Git & GitHub",
              "Docker (basic)",
              "REST API design & integration",
              "Linux CLI",
              "Sanity CMS",
              "Postman",
              "Figma",
            ],
          },
          {
            title: "Cloud & DevOps (basic)",
            tags: [
              "AWS / GCP fundamentals",
              "CI/CD pipeline (GitHub Actions)",
              "Vercel / DigitalOcean deployment",
            ],
          },
        ],
      },
      {
        category: "AI & AUTOMATION",
        tags: [
          "Prompt engineering (Claude, ChatGPT, Gemini)",
          "LLM API integration (OpenAI, Anthropic)",
          "AI-assisted development (Cursor, GitHub Copilot, Claude Code)",
          "Workflow automation (n8n / Zapier basic)",
          "RAG pipeline (basic)",
        ],
      },
      {
        category: "WEB DEVELOPMENT",
        tags: [
          "Full-stack web application development",
          "Responsive & mobile-first design",
          "E-commerce & landing page development",
          "Performance optimization (Core Web Vitals)",
          "SEO technical basic",
        ],
      },
      {
        category: "SOFT SKILLS & WORK STYLE",
        tags: [
          "Remote-ready: async communication, self-managed delivery",
          "Technical documentation (Notion, Markdown)",
          "Problem decomposition & system thinking",
          "Fast learner — AI-native workflow",
          "Collaborative via Slack / Linear / Figma",
        ],
      },
      {
        category: "MODERN LANGUAGES",
        tags: ["🇮🇩 Indonesian (Native)", "🇺🇸 English (Conversation)"],
      },
    ],
  },

  /* ─── EXPERIENCE ─────────────────────────────────────────────── */
  experience: [
    {
      company: "PT. Global Tehnikatama Indonesia",
      role: "Fullstack Engineer (Internship)",
      period: "Jan 2026 — Present",
      desc: "Developing 'AI Research Assistant' (SaaS). Integrated OpenClaw, a proactive AI agent with conversation memory and task execution capabilities, to automate user productivity workflows.",
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
      role: "Frontend Engineer (Internship)",
      period: "Aug 2025 — Dec 2025",
      desc: "Developed a special Student Research Information System (Sistem Informasi Penelitian Mahasiswa) specifically for the faculty. Collaborated with a team of developers and stakeholders to streamline academic research workflows.",
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
      desc: "An advanced research platform integrated with OpenClaw—a proactive AI agent with conversation memory and system automation capabilities for personal productivity.",
      tech: ["Next.js", "PostgreSQL", "OpenClaw AI", "Tailwind CSS"],
      link: null,
      linkText: "Coming Soon",
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
      role: "Fullstack Engineer",
      desc: "Full-stack editorial news platform with headless CMS, ISR auto-revalidation, and premium UI. Features 15 pages including article detail, category, author, tag, search, and RSS feed.",
      tech: [
        "Next.js 16",
        "Tailwind CSS v4",
        "Sanity CMS",
        "TypeScript",
        "Vercel",
      ],
      link: "https://devbloq.vercel.app/",
      linkText: "View Live Site",
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
      desc: "Student research and thesis management system at UIN Raden Fatah Palembang. Built to simplify academic workflow for students and faculty administrators.",
      tech: ["Next.js", "Tailwind CSS v4", "React Query", "REST API"],
      link: "https://goskripsi.rafanovation.cloud",
      linkText: "Launch GoSkripsi",
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
      desc: "Premium local skincare brand utilizing natural Indonesian ingredients. Built with a focus on clean, natural editorial design and mobile responsiveness.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "https://lumiere-skincare-seven.vercel.app/",
      linkText: "View Live Site",
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
      desc: "Professional catering and home-cooked meal service in Palembang. Features menu catalogs and direct service inquiries for corporate and personal events.",
      tech: ["Next.js", "React", "Tailwind CSS"],
      link: "https://dapur-sari.vercel.app/",
      linkText: "View Live Site",
      emoji: "<i class='ph ph-cooking-pot'></i>",
      img: "images/thumbnails/dapur-sari.png",
      bgFrom: "#FFF7ED",
      bgTo: "#FFEDD5",
      emojiColor: "#C2410C",
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
