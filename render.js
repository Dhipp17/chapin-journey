/* Page rendering */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const ICON = {
  sales: '<path d="M4 20V10M10 20V4M16 20v-7M2 20h20"/>',
  service: '<path d="M4 5h16v11H9l-5 4z"/>',
  marketing: '<path d="M3 11l18-8-8 18-2-8z"/>',
  slack: '<path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>',
  premier: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/>',
  mulesoft: '<path d="M3 12h5M16 12h5M8 8h8v8H8z"/>',
  factory: '<path d="M3 21V10l6 4V10l6 4V6h6v15zM7 21v-3M12 21v-3M17 21v-3"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>',
  spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
  plug: '<path d="M9 3v5M15 3v5M6 8h12v4a6 6 0 0 1-12 0zM12 18v3"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 3-6 6-6s6 2.5 6 6M17 11a3 3 0 1 0 0-6M21 20c0-2.5-1.5-4.5-4-5"/>'
};
const svg = (name, cls = "") => `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[name] || ""}</svg>`;

/* Chapin logo fallback */
(function () {
  const img = $(".chapin-logo");
  img.addEventListener("error", () => {
    const w = document.createElement("span");
    w.className = "chapin-wordmark"; w.textContent = "CHAPIN";
    img.replaceWith(w);
  }, { once: true });
})();

/* Hero suggestions */
$("#hero-suggest").innerHTML = SUGGESTED.map(s => `<button type="button" class="sug" data-q="${s}">${s}</button>`).join("");

/* Why Salesforce */
$("#why-eyebrow").textContent = WHY.eyebrow;
$("#why-headline").textContent = WHY.headline;
$("#why-text").innerHTML = WHY.paras.map(p => `<p>${p}</p>`).join("");
$("#why-pull").innerHTML = `<div class="pull-mark" aria-hidden="true">&ldquo;</div><p>${WHY.closer}</p>`;
$("#pillars").innerHTML = PILLARS.map(p => `<article class="pillar">${svg(p.icon, "pi")}<h3>${p.title}</h3><p>${p.text}</p></article>`).join("");

/* Proof */
$("#proof-groups").innerHTML = PROOF.map(g => `
  <div class="pgroup"><h3>${g.area}</h3><div class="pcards">${g.items.map(i => `
    <div class="pcard ${i.tag.toLowerCase()}">
      <span class="ptag">${i.tag}</span>
      <div class="pval"><span data-count="${i.value}" data-suffix="${i.suffix}">${i.value.toLocaleString()}${i.suffix}</span></div>
      <p class="plabel">${i.label}</p>
      <p class="pwho">${i.who}</p>
    </div>`).join("")}</div></div>`).join("");
$("#proof-note").textContent = PROOF_NOTE;

/* Roadmap / next */
$("#roadmap-list").innerHTML = ROADMAP.map((r, i) =>
  `<li><span class="rn">${i + 1}</span><div class="when">${r.when}</div><h3>${r.title}</h3><p>${r.text}</p></li>`).join("");
$("#next-list").innerHTML = NEXT.map(n => `<div class="card"><h3>${n[0]}</h3><p>${n[1]}</p></div>`).join("");

/* Tabs */
const tabsEl = $("#tabs"), panel = $("#panel");
tabsEl.innerHTML = TABS.map(t =>
  `<button class="tab" role="tab" id="tab-${t.id}" aria-selected="false" aria-controls="panel" data-id="${t.id}">${svg(t.id)}<span>${t.label}</span></button>`).join("");

function compareBlock(c) {
  const col = (x, cls) => `<div class="ccol ${cls}">
      <h4>${x.title}</h4><p class="csub">${x.sub}</p>
      <dl>${x.items.map(i => `<dt>${i[0]}</dt><dd>${i[1]}</dd>`).join("")}</dl>
      ${x.src ? `<a class="srclink" href="${x.src}" target="_blank" rel="noopener">Read more on salesforce.com &#8599;</a>` : ""}
    </div>`;
  const list = (title, arr, cls = "") => `<div class="mini ${cls}"><h5>${title}</h5><ul>${arr.map(i => `<li>${i}</li>`).join("")}</ul></div>`;
  return `<div class="compare">
    <h3 class="day-title">Premier Success vs. Acquis implementation</h3>
    <div class="ccols">${col(c.acquis, "acq")}${col(c.premier, "prem")}</div>
    <h3 class="day-title">What's in the Acquis statement of work</h3>
    <div class="sow">${c.sow.map(s => list(s[0], s[1])).join("")}</div>
    <div class="sow three">${list("What Chapin provides", c.chapin, "chapin")}${list("Governance", c.governance, "gov")}${list("Not in phase one", c.notIncluded, "out")}</div>
  </div>`;
}

function renderTab(id, pushHash) {
  const t = TABS.find(x => x.id === id) || TABS[0];
  $$(".tab", tabsEl).forEach(b => b.setAttribute("aria-selected", b.dataset.id === t.id));
  panel.setAttribute("aria-labelledby", "tab-" + t.id);
  panel.innerHTML = `
    <div class="panel-head">
      <span class="badge ${t.badge ? "proposed" : ""}">${t.badge || t.kicker}</span>
      <h3>${t.title}</h3>
      <p>${t.intro}</p>
    </div>
    <div class="ba">
      <div class="today"><h4>Today</h4><ul>${t.before.map(x => `<li>${x}</li>`).join("")}</ul></div>
      <div class="arrow" aria-hidden="true">&rarr;</div>
      <div class="future"><h4>With Salesforce</h4><ul>${t.after.map(x => `<li>${x}</li>`).join("")}</ul></div>
    </div>
    ${t.compare ? compareBlock(t.compare) : ""}
    <h3 class="day-title">${t.dayTitle}</h3>
    <ol class="day">${t.day.map((d, i) => `<li style="--i:${i}"><div class="time">${d[0]}</div><div class="what"><strong>${d[1]}</strong><span>${d[2]}</span></div></li>`).join("")}</ol>
    ${t.quotes.length ? `<div class="quotes">${t.quotes.map(q => `<blockquote>${q[0]}<cite>${q[1]}</cite></blockquote>`).join("")}</div>` : ""}
    <div class="outcomes">${t.outcomes.map(o => `<div class="outcome">${o}</div>`).join("")}</div>
    <div class="scope">
      <h4>Phase one</h4><div class="chips">${t.scope.now.map(c => `<span class="chip">${c}</span>`).join("")}</div>
      <h4>On the roadmap</h4><div class="chips">${t.scope.later.map(c => `<span class="chip later">${c}</span>`).join("")}</div>
    </div>
    <button class="ask-inline" type="button" data-q="Tell me more about ${t.kicker}"><span class="spark" aria-hidden="true"></span>Ask about ${t.kicker}</button>`;
  if (pushHash) history.replaceState(null, "", "#" + t.id);
}
tabsEl.addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) renderTab(b.dataset.id, true); });
tabsEl.addEventListener("keydown", e => {
  const tabs = $$(".tab", tabsEl), i = tabs.indexOf(document.activeElement);
  if (i < 0 || !["ArrowRight", "ArrowLeft"].includes(e.key)) return;
  const n = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length];
  n.focus(); renderTab(n.dataset.id, true);
});
function openTab(id) { renderTab(id, true); $("#journey").scrollIntoView({ behavior: "smooth" }); }
const start = location.hash.slice(1);
renderTab(TABS.some(t => t.id === start) ? start : TABS[0].id, false);

/* Slide cards (shared with the Ask drawer) */
function slideCard(s, compact) {
  const stats = s.stats ? `<div class="sstats">${s.stats.map(x => `<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div>` : "";
  return `<a class="scard ${s.cloud}${compact ? " compact" : ""}" href="${slideUrl(s)}" target="_blank" rel="noopener" data-id="${s.id}">
    <img class="sshot" src="assets/slides/${s.id}.png" alt="" loading="lazy" onerror="this.remove()">
    <div class="sbody">
      <span class="stag">${s.cloud === "mkt" ? "Marketing Cloud" : "Manufacturing Cloud"}</span>
      <h4>${s.title}</h4>
      ${stats}
      <ul>${s.points.slice(0, compact ? 2 : 4).map(p => `<li>${p}</li>`).join("")}</ul>
      <span class="sfoot">From the overview deck &middot; slide ${s.n}${s.source ? " &middot; " + s.source : ""}</span>
    </div></a>`;
}
function renderSlides(f) {
  $("#slide-grid").innerHTML = SLIDES.filter(s => f === "all" || s.cloud === f).map(s => slideCard(s)).join("");
}
renderSlides("all");
$("#slide-filters").addEventListener("click", e => {
  const b = e.target.closest(".fbtn"); if (!b) return;
  $$(".fbtn").forEach(x => x.classList.toggle("on", x === b));
  renderSlides(b.dataset.f);
});

/* FAQ */
let lastGroup = "";
$("#faq-list").innerHTML = FAQS.map(f => {
  const head = f.group !== lastGroup ? `<h3 class="fgroup">${f.group}</h3>` : "";
  lastGroup = f.group;
  const s = SRC[f.src];
  return `${head}<details class="fq"><summary>${f.q}</summary><p>${f.a}</p>${s ? `<a class="srclink fsrc" href="${s.url}" target="_blank" rel="noopener">Source: ${s.label} &#8599;</a>` : ""}</details>`;
}).join("");

/* Scroll reveal + count-up */
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  $$("[data-count]", e.target).forEach(countUp);
  io.unobserve(e.target);
}), { threshold: .12 });
$$(".reveal").forEach(el => io.observe(el));
function countUp(el) {
  if (el.dataset.done) return; el.dataset.done = 1;
  const end = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now(), dur = 1200;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  (function tick(t) {
    const p = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(end * e).toLocaleString() + suf;
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}
$$(".hero [data-count]").forEach(countUp);
