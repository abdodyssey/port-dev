
      /* ╔═══════════════════════════════════════════════════════════════╗
   ║  ⛔ JANGAN EDIT DI BAWAH INI                                   ║
   ╚═══════════════════════════════════════════════════════════════╝ */
      document.addEventListener("DOMContentLoaded", () => {
        const C = CONFIG;
        const $ = (id) => document.getElementById(id);
        const set = (id, html) => {
          const el = $(id);
          if (el) el.innerHTML = html;
        };
        const href = (id, url) => {
          const el = $(id);
          if (el) el.href = url;
        };

        document.title = `${C.name} — ${C.title}`;
        set("nav-logo", C.name);
        if (!C.available) {
          const t = $("hero-tag");
          if (t) t.style.display = "none";
        }

        // Hero
        set(
          "hero-h1",
          `${C.hero.headline}<br><em>${C.hero.headlineEm}</em><br>${C.hero.headlineEnd}`,
        );
        set("hero-sub", C.hero.sub);
        if (C.hero.cvLink) {
          const cv = $("cv-btn");
          if (cv) {
            cv.href = C.hero.cvLink;
            cv.style.display = "inline-flex";
          }
        }
        set(
          "hero-stats",
          C.hero.stats
            .map(
              (s) =>
                `<div><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></div>`,
            )
            .join(""),
        );

        // About
        set("about-h2", C.about.heading);
        set("about-bio", C.about.bio.map((p) => `<p>${p}</p>`).join(""));
        // Skills
        set(
          "skills-grid",
          C.about.skills
            .map(
              (cat) => `
    <div class="skill-category">
      <h3>${cat.category}</h3>
      ${
        cat.subgroups
          ? cat.subgroups
              .map(
                (sub) => `
        <div class="skill-subgroup">
          <span class="skill-subgroup-title">${sub.title}</span>
          <div class="skill-tags">${sub.tags.map((t) => `<span class="skill-tag">${t}</span>`).join("")}</div>
        </div>`,
              )
              .join("")
          : `<div class="skill-tags">${cat.tags.map((t) => `<span class="skill-tag">${t}</span>`).join("")}</div>`
      }
    </div>`,
            )
            .join(""),
        );

        // Experience
        set(
          "experience-list",
          C.experience
            .map(
              (ex) => `
    <div class="experience-item">
      <div class="experience-header">
        <div>
          <h3>${ex.role}</h3>
          <p class="experience-company">${ex.company}</p>
        </div>
        <span class="experience-date">${ex.period}</span>
      </div>
      <p class="experience-desc">${ex.desc}</p>
      <div class="experience-tech">
        ${ex.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    </div>`,
            )
            .join(""),
        );

        // Projects
        const feats = C.projects.filter((p) => p.featured);
        const rest = C.projects.filter((p) => !p.featured);
        const pCard = (p, i, f) => `
    <div class="project-card${f ? " featured" : ""}">
      <div>
        <p class="project-number">0${i + 1}${f ? " — Unggulan" : ""}</p>
        <h3>${p.title}</h3>
        ${p.role ? `<p class="project-role" style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink-muted); margin-bottom: 8px; font-weight: 600;">${p.role}</p>` : ""}
        <p>${p.desc}</p>
        <div class="project-tech">${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}</div>
        <a href="${p.link}" class="project-link">${p.linkText} →</a>
      </div>
      <div class="project-visual" style="background:linear-gradient(135deg,${p.bgFrom},${p.bgTo}); ${p.img ? "" : `color:${p.emojiColor};`}height:${f ? 200 : 140}px${f ? "" : ";margin-top:20px"}">
        ${
          p.img
            ? `
          <div class="browser-mock">
            <div class="browser-bar">
              <div class="dot"></div><div class="dot"></div><div class="dot"></div>
            </div>
            <img src="${p.img}" alt="${p.title}">
          </div>`
            : p.emoji
        }
      </div>
    </div>`;
        set(
          "project-grid",
          feats.map((p, i) => pCard(p, i, true)).join("") +
            rest.map((p, i) => pCard(p, feats.length + i, false)).join(""),
        );

        // Digital Products
        if (C.digitalProducts && C.digitalProducts.length > 0) {
            set(
              "product-list",
              C.digitalProducts
                .map(
                  (p) => `
            <div class="product-item">
              <div class="product-img">
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
                <img src="${p.img || 'https://placehold.co/600x400'}" alt="${p.title}">
              </div>
              <div class="product-info">
                <h3>${p.title}</h3>
                <p>${p.desc}</p>
                <div class="product-footer">
                  <span class="product-price">${p.price}</span>
                  <a href="${p.link}" class="btn-buy" target="_blank">Beli Sekarang <i class="ph-fill ph-whatsapp-logo"></i></a>
                </div>
              </div>
            </div>`,
                )
                .join(""),
            );
        } else {
            const dp = $("digital-products");
            if (dp) dp.style.display = "none";
            const navDp = document.querySelector('a[href="#digital-products"]');
            if (navDp) navDp.parentElement.style.display = "none";
        }

        // Services
        set(
          "services-grid",
          C.services
            .map(
              (s) => `
    <div class="service-item">
      <div class="service-icon">${s.icon}</div>
      <h3>${s.title}</h3>
      <p class="service-desc">${s.desc}</p>
    </div>`,
            )
            .join(""),
        );

        // Process
        set(
          "process-steps",
          C.process
            .map(
              (p, i) => `
    <div class="process-step">
      <div class="step-num">0${i + 1}</div>
      <h3>${p.title}</h3><p>${p.desc}</p>
    </div>`,
            )
            .join(""),
        );

        // Testimonials
        set(
          "testimonial-grid",
          C.testimonials
            .map(
              (t) => `
      <div class="testimonial-card">
        <blockquote>"${t.quote}"</blockquote>
        <div class="testimonial-author">
          <div class="author-avatar" style="background:${t.avatarBg};color:${t.avatarColor}">${t.initials}</div>
          <div><p class="author-name">${t.name}</p><p class="author-role">${t.role}</p></div>
        </div>
      </div>`,
            )
            .join("") +
            `<div class="testimonial-placeholder">
      <span style="font-size:1.5rem"><i class="ph ph-sparkle"></i></span>
      <p>Proyek Anda bisa ditampilkan di sini. Mari bangun sesuatu bersama.</p>
      <a href="#contact" class="btn-primary" style="margin-top:8px;font-size:.8rem;padding:8px 18px;">Hubungi Saya</a>
    </div>`,
        );

        // Contact
        const ct = C.contact;
        set("contact-h2", ct.heading);
        set("contact-sub", ct.sub);
        href("c-email", `mailto:${ct.email}`);
        set("c-email", ct.email);
        href("c-wa", `https://wa.me/${ct.whatsapp}`);
        set("c-wa", ct.whatsappLabel);
        href("c-li", ct.linkedin);
        set("c-li", ct.linkedin.replace("https://", ""));
        href("c-gh", ct.github);
        set("c-gh", ct.github.replace("https://", ""));
        set(
          "svc-opts",
          '<option value="">Pilih layanan...</option>' +
            ct.serviceOptions.map((o) => `<option>${o}</option>`).join(""),
        );


        // Footer
        set("footer-text", `© ${C.footer.year} ${C.name} — ${C.footer.text}`);
        href("f-gh", ct.github);
        href("f-li", ct.linkedin);
        if (ct.upwork) {
          href("f-up", ct.upwork);
        } else {
          const el = $("f-up");
          if (el) el.style.display = "none";
        }

        // Scroll reveal
        const obs = new IntersectionObserver(
          (e) =>
            e.forEach((x) => {
              if (x.isIntersecting) x.target.classList.add("visible");
            }),
          { threshold: 0.1 },
        );
        document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));

        // Theme Logic
        const themeBtn = $("theme-btn");
        const getPreferredTheme = () => {
          const stored = localStorage.getItem("theme");
          if (stored) return stored;
          return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
        };

        const setTheme = (theme) => {
          document.documentElement.setAttribute("data-theme", theme);
          localStorage.setItem("theme", theme);
          themeBtn.innerHTML = theme === "dark" ? "<i class='ph ph-sun'></i>" : "<i class='ph ph-moon'></i>";
        };

        setTheme(getPreferredTheme());

        themeBtn.addEventListener("click", () => {
          const current = document.documentElement.getAttribute("data-theme");
          setTheme(current === "dark" ? "light" : "dark");
        });

        // EmailJS Integration
        const showToast = (msg, isError = false) => {
          const t = document.createElement("div");
          t.className = `toast ${isError ? "toast-error" : "toast-success"}`;
          t.innerHTML = `<i class="ph ${isError ? "ph-warning-circle" : "ph-check-circle"}" style="font-size:1.25rem;color:${isError ? "#ef4444" : "var(--green)"}"></i><span>${msg}</span>`;
          document.body.appendChild(t);
          requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add("show")));
          setTimeout(() => {
            t.classList.remove("show");
            setTimeout(() => t.remove(), 400);
          }, 3000);
        };

        if (C.emailjs && C.emailjs.publicKey !== "YOUR_PUBLIC_KEY") {
          emailjs.init({
            publicKey: C.emailjs.publicKey,
          });

          const contactForm = $("contact-form");
          const submitBtn = document.querySelector(".btn-submit");

          if (contactForm) {
            contactForm.addEventListener("submit", (e) => {
              e.preventDefault();

              submitBtn.innerText = "Mengirim...";
              submitBtn.disabled = true;

              emailjs
                .sendForm(
                  C.emailjs.serviceId,
                  C.emailjs.templateId,
                  contactForm,
                )
                .then(
                  () => {
                    showToast("Pesan berhasil dikirim!");
                    contactForm.reset();
                    submitBtn.innerText = "Kirim Pesan →";
                    submitBtn.disabled = false;
                  },
                  (error) => {
                    showToast("Gagal mengirim pesan. Silakan coba lagi nanti.", true);
                    console.error("EmailJS Error:", error);
                    submitBtn.innerText = "Kirim Pesan →";
                    submitBtn.disabled = false;
                  },
                );
            });
          }
        } else {
          // Fallback if not configured
          const contactForm = $("contact-form");
          if (contactForm) {
            contactForm.addEventListener("submit", (e) => {
              e.preventDefault();
              showToast(
                "EmailJS belum dikonfigurasi. Silakan perbarui CONFIG dengan key Anda.",
                true
              );
            });
          }
        }

        // Custom Translate Dropdown Logic
        const langToggle = $("lang-toggle-btn");
        const langMenu = $("lang-menu");
        if (langToggle && langMenu) {
          langToggle.addEventListener("click", () => {
            langMenu.classList.toggle("active");
          });
          document.addEventListener("click", (e) => {
            if (!langToggle.contains(e.target) && !langMenu.contains(e.target)) {
              langMenu.classList.remove("active");
            }
          });
          document.querySelectorAll(".lang-option").forEach(btn => {
            btn.addEventListener("click", (e) => {
              const lang = btn.getAttribute("data-lang");
              const select = document.querySelector(".goog-te-combo");
              if (select) {
                select.value = lang;
                select.dispatchEvent(new Event("change"));
              }
              langMenu.classList.remove("active");
            });
          });
        }
      });
