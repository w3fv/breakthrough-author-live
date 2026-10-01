// ============================================================
// Breakthrough Author Live — data-driven content + interactions
// ============================================================

/* ---------- Content data ---------- */

const PAIN_POINTS = [
  "I've been thinking about writing my book for years but I can never find the time",
  "Other coaches in my space have books — and they're getting the clients I should be getting",
  "I'm not a writer, but I know my life experience belongs in a book",
  "I don't know how to turn a book into actual coaching clients",
  "I'm worried I'll write it and nobody will read it",
  "I just don't know where to start",
];

const STATS = [
  { value: "108", label: "Bestsellers Published" },
  { value: "500+", label: "Coaches Through BAL" },
  { value: "11", label: "Cohorts Run" },
  { value: "10+", label: "Years in Business" },
];

const CASE_STUDIES = [
  {
    initials: "M",
    name: "Mynoo",
    desc: "Wasn't a coach before her book. She was in her sixties with decades of wisdom but no platform.",
    results: [
      "$500K coaching business in year one",
      "United Nations speaker — 4 times",
      "Retreat prices went from $5K to $25K",
      "3 invitations to Davos this year alone",
    ],
  },
  {
    initials: "A",
    name: "Aila",
    desc: "Wanted to bring coaching to Albania — a country where it barely existed.",
    results: [
      "4 corporate contracts at $50K each",
      "$200K in one month",
      "Voted second highest rated executive coach in Eastern Europe",
    ],
  },
  {
    initials: "K",
    name: "Kaley",
    desc: "A health and wellness coach focused on helping people live symptom-free.",
    results: [
      "Named one of top 10 inspiring women making waves in the world",
      "Alongside Michelle Obama",
      "Featured in Arianna Huffington's Thrive Global",
    ],
  },
];

const FAIL_BLOCKS = [
  {
    title: "The book doesn't lead anywhere",
    desc: "Most coaches dump everything they know onto pages. No structure. No path. The reader finishes and thinks “that was nice” — and moves on. No call. No client. No money. Your book needs to be built so the reader's last thought is “I need to work with this person.”",
  },
  {
    title: "Nobody ever sees it",
    desc: "Malcolm Gladwell never ran a single ad for his books. Tony Robbins doesn't run ads. They get people with big audiences to promote them. Most coaches skip this entirely. They put the book on Amazon and wait.",
  },
  {
    title: "Author vs BESTSELLING Author",
    desc: "You can get a book on Amazon. But “an author” means nothing — there are over a million of them. A BESTSELLING author? That changes everything. That's what got Mynoo to the United Nations. That's what turned Aila from unknown to $200K in contracts.",
  },
];

const WEEKS = [
  {
    week: "Week 1",
    title: "Your Bestseller Book Idea",
    desc: "We validate it, shape it, and our editing team — people who only work with coaching books — make sure it's built to bring you clients.",
    value: "$495",
  },
  {
    week: "Week 2",
    title: "Your Chapter-by-Chapter Outline",
    desc: "Every chapter set up so the reader goes on a journey — and by the last page, their next move is to work with you.",
    value: "$400",
  },
  {
    week: "Week 3",
    title: "Start Writing",
    desc: "Live coaching plus our editors clean up at least your first chapter. Your words. Your voice. Polished to the point where it's ready to print.",
    value: "$495",
  },
  {
    week: "Week 4",
    title: "Your Bestseller Launch Plan",
    desc: "How to get people with audiences to spread the word. The five-day launch window. Which group to put your book in on Amazon. The full step-by-step to hit number one.",
    value: "$495",
  },
];

const BONUSES = [
  { title: "Expert-Level Editing", desc: "Hands-on editing from our team throughout the challenge. Editors who only work on coaching books.", value: "$2,000" },
  { title: "Breakthrough Author Mastermind", desc: "Ongoing support group with me and other coaches. We don't shut the door after 4 weeks. Questions six months from now? We're still there.", value: "$5,000" },
  { title: "Bestseller Group Database", desc: "Which groups on Amazon work for your coaching niche and what it takes to hit number one in each. Data from 100+ launches.", value: "$4,000" },
  { title: "Podcast Paradise Workshop", desc: "How to get podcast hosts to talk about your book to their listeners. We sold tickets for $1,000. Never released to the public.", value: "$1,000" },
  { title: "Press on Demand Workshop", desc: "How to get media to cover your book and your business. Another $1,000 ticket event.", value: "$1,000" },
  { title: "Real-World Case Studies", desc: "Step by step, how coaches in multiple niches built real businesses from their books. Retreats. Contracts. High-ticket coaching.", value: "$1,000" },
  { title: "Live Listing on Coach Foundation", desc: "100,000 visitors a month. We normally charge $200/month. You get it free when your book is done. Because I want the world to find you.", value: "$2,000/yr" },
];

const FOR_LIST = [
  "You're a coach who wants to use a book to grow your business",
  "You've been thinking about writing a book for years",
  "You want to become a bestselling author",
  "You're willing to show up for 4 weeks and do the work",
  "You coach in any niche — health, wellness, personal development, business, relationships, executive, or any other area",
];

const NOT_FOR_LIST = [
  "You want to write fiction, a children's book, or a memoir unrelated to your business",
  "Your book isn't connected to a coaching or consulting business",
  "You're looking for someone to do 100% of the work with zero involvement from you",
  "You're not willing to put in any effort over the 4 weeks",
];

const FAQS = [
  { q: "Can I attend if I have calendar conflicts with the live sessions?", a: "Yes. We record every session and we support you outside of the live calls too. We have this very often — many coaches go through the replays and still get everything done." },
  { q: "What if I already have a manuscript or a book started?", a: "Great. We'll refine what you have, structure it properly, and build your launch strategy. You're ahead of the game." },
  { q: "What if it takes me longer than 4 weeks?", a: "That's why the Mastermind stays open. Our focus in Breakthrough Author Live is to get the train moving. Many coaches complete their entire book within 6 months. Some finish during the 4 weeks. Either way, we're there for you after." },
  { q: "Is this just training videos or do you actually help me?", a: "Our editing team actively works on your material. They review your book idea, your outline, and edit your first chapter. This is hands-on, not just information." },
  { q: "What coaching niches does this work for?", a: "All of them. We've published bestsellers across health, wellness, personal development, business, finance, relationships, executive coaching, and many others. The system works regardless of niche." },
  { q: "What's the money-back guarantee?", a: "Go through all 4 weeks. If you don't feel it was worth your time, we'll refund every penny. No questions asked. And you keep everything we've done for you." },
  { q: "Are there any hidden fees?", a: "None. $47 is the total investment for the challenge." },
];

/* ---------- Icons (inline SVG, no emoji) ---------- */

const ICON_CHECK = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_X = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
const ICON_CHEVRON = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

/* ---------- Render helpers ---------- */

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content;
}

function renderPainPoints() {
  const list = document.getElementById("pain-points");
  if (!list) return;
  list.append(
    el(
      PAIN_POINTS.map((text) => `<li>${ICON_CHECK}<span>${text}</span></li>`).join("")
    )
  );
}

function renderStats() {
  const grid = document.getElementById("stats");
  if (!grid) return;
  grid.append(
    el(
      STATS.map(
        (s) => `<div class="stat-card"><span class="stat-card__value">${s.value}</span><span class="stat-card__label">${s.label}</span></div>`
      ).join("")
    )
  );
}

function renderCaseStudies() {
  const grid = document.getElementById("case-studies");
  if (!grid) return;
  grid.append(
    el(
      CASE_STUDIES.map(
        (c) => `
        <article class="case-card">
          <div class="case-card__photo" aria-hidden="true">${c.initials}</div>
          <h3 class="case-card__name">${c.name}</h3>
          <p class="case-card__desc">${c.desc}</p>
          <ul class="case-card__results">
            ${c.results.map((r) => `<li>${r}</li>`).join("")}
          </ul>
        </article>`
      ).join("")
    )
  );
}

function renderFailBlocks() {
  const grid = document.getElementById("fail-blocks");
  if (!grid) return;
  grid.append(
    el(
      FAIL_BLOCKS.map(
        (b) => `
        <div class="fail-card">
          <div class="fail-card__icon">${ICON_X}</div>
          <h3>${b.title}</h3>
          <p>${b.desc}</p>
        </div>`
      ).join("")
    )
  );
}

function renderWeeks() {
  const list = document.getElementById("weeks");
  if (!list) return;
  list.append(
    el(
      WEEKS.map(
        (w, i) => `
        <div class="week-card">
          <div class="week-card__top">
            <span class="week-card__num">${i + 1}</span>
            <h3 class="week-card__title">${w.title}</h3>
          </div>
          <p class="week-card__desc">${w.desc}</p>
          <span class="week-card__value">Value: ${w.value}</span>
        </div>`
      ).join("")
    )
  );
}

function renderBonuses() {
  const list = document.getElementById("bonuses");
  if (!list) return;
  list.append(
    el(
      BONUSES.map(
        (b) => `
        <div class="bonus-card">
          <div class="bonus-card__head">
            <span class="bonus-card__title">${b.title}</span>
            <span class="bonus-card__value">Value: ${b.value}</span>
          </div>
          <p class="bonus-card__desc">${b.desc}</p>
        </div>`
      ).join("")
    )
  );
}

function renderForNotLists() {
  const forList = document.getElementById("for-list");
  const notForList = document.getElementById("not-for-list");
  if (forList) forList.append(el(FOR_LIST.map((t) => `<li>${t}</li>`).join("")));
  if (notForList) notForList.append(el(NOT_FOR_LIST.map((t) => `<li>${t}</li>`).join("")));
}

function renderFaq() {
  const container = document.getElementById("faq-list");
  if (!container) return;
  container.append(
    el(
      FAQS.map(
        (f, i) => `
        <div class="faq-item" data-open="false">
          <h3 style="margin:0;">
            <button class="faq-item__q" id="faq-q-${i}" aria-expanded="false" aria-controls="faq-a-${i}">
              <span>${f.q}</span>${ICON_CHEVRON}
            </button>
          </h3>
          <div class="faq-item__a" id="faq-a-${i}" role="region" aria-labelledby="faq-q-${i}">
            <p>${f.a}</p>
          </div>
        </div>`
      ).join("")
    )
  );

  container.querySelectorAll(".faq-item").forEach((item) => {
    const btn = item.querySelector(".faq-item__q");
    const answer = item.querySelector(".faq-item__a");
    btn.addEventListener("click", () => {
      const isOpen = item.getAttribute("data-open") === "true";
      item.setAttribute("data-open", String(!isOpen));
      btn.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = isOpen ? "0px" : answer.scrollHeight + "px";
    });
  });
}

/* ---------- Theme toggle ---------- */

function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("bal-theme");
  const initial = stored === "light" || stored === "dark" ? stored : "dark";
  applyTheme(initial);

  toggle.addEventListener("click", () => {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("bal-theme", next);
  });

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    toggle.setAttribute("aria-pressed", String(theme === "light"));
    toggle.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
    const label = toggle.querySelector(".theme-toggle__label");
    if (label) label.textContent = theme === "light" ? "Dark" : "Light";
  }
}

/* ---------- Toast ---------- */

let toastTimer;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 3200);
}

/* ---------- CTA + video placeholder interactions ---------- */

function initInteractions() {
  document.querySelectorAll('a[href="#checkout"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      showToast("Demo page — connect this button to your real checkout link.");
      document.getElementById("offer")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  document.querySelectorAll(".video-placeholder__play").forEach((btn) => {
    btn.addEventListener("click", () => {
      showToast("Video placeholder — drop in your 15-minute VSL here.");
    });
  });
}

/* ---------- Init ---------- */

document.addEventListener("DOMContentLoaded", () => {
  renderPainPoints();
  renderStats();
  renderCaseStudies();
  renderFailBlocks();
  renderWeeks();
  renderBonuses();
  renderForNotLists();
  renderFaq();
  initTheme();
  initInteractions();
});
