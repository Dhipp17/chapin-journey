/* Page rendering */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const ICON = {
  marketing: '<path d="M3 11l18-8-8 18-2-8z"/>',
  sales: '<path d="M4 20V10M10 20V4M16 20v-7M2 20h20"/>',
  mulesoft: '<path d="M3 12h5M16 12h5M8 8h8v8H8z"/>',
  service: '<path d="M4 5h16v11H9l-5 4z"/>',
  slack: '<path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18"/>',
  premier: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  factory: '<path d="M3 21V10l6 4V10l6 4V6h6v15zM7 21v-3M12 21v-3M17 21v-3"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"/>',
  spark: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/>',
  plug: '<path d="M9 3v5M15 3v5M6 8h12v4a6 6 0 0 1-12 0zM12 18v3"/>',
  shield: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.5 3-6 6-6s6 2.5 6 6M17 11a3 3 0 1 0 0-6M21 20c0-2.5-1.5-4.5-4-5"/>'
};
const svg = (name, cls = "") => `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICON[name] || ""}</svg>`;

/* Logo fallback */
$(".chapin-logo").addEventListener("error", e => {
  const w = document.createElement("span"); w.className = "chapin-wordmark"; w.textContent = "CHAPIN"; e.target.replaceWith(w);
}, { once: true });

$("#hero-suggest").innerHTML = SUGGESTED.slice(0, 4).map(s => `<button type="button" class="sug" data-q="${s}">${s}</button>`).join("");

/* ---------- Journey ---------- */
$("#persona").textContent = PERSONA;
const jmap = $("#jmap"), chapterEl = $("#chapter");
jmap.innerHTML = TABS.map((t, i) => `<li><button type="button" class="stop" role="tab" id="stop-${t.id}" data-id="${t.id}" aria-selected="false">
  <span class="sn">${svg(t.id)}<em>${i + 1}</em></span><b>${t.verb}</b><small>${t.label}${t.badge ? " · proposed" : ""}</small></button></li>`).join("");

let cur = { id: TABS[0].id, step: 0 };

function compareBlock(c) {
  const col = (x, cls) => `<div class="ccol ${cls}"><h4>${x.title}</h4><p class="csub">${x.sub}</p>
      <dl>${x.items.map(i => `<dt>${i[0]}</dt><dd>${i[1]}</dd>`).join("")}</dl>
      ${x.src ? `<a class="srclink" href="${x.src}" target="_blank" rel="noopener">Read more on salesforce.com &#8599;</a>` : ""}</div>`;
  const list = (title, arr, cls = "") => `<div class="mini ${cls}"><h5>${title}</h5><ul>${arr.map(i => `<li>${i}</li>`).join("")}</ul></div>`;
  return `<div class="compare">
    <h4 class="blk-h">Premier Success vs. Acquis implementation</h4>
    <div class="ccols">${col(c.acquis, "acq")}${col(c.premier, "prem")}</div>
    <details class="more" open><summary>What's in the Acquis statement of work</summary>
      <div class="sow">${c.sow.map(s => list(s[0], s[1])).join("")}</div>
      <div class="sow">${list("What Chapin provides", c.chapin, "chapin")}${list("Governance", c.governance, "gov")}${list("Not in phase one", c.notIncluded, "out")}</div>
    </details></div>`;
}

function renderChapter(id, opts = {}) {
  const idx = Math.max(0, TABS.findIndex(t => t.id === id)), t = TABS[idx];
  cur = { id: t.id, step: opts.step || 0 };
  $$(".stop", jmap).forEach((b, i) => {
    b.setAttribute("aria-selected", b.dataset.id === t.id);
    b.parentElement.classList.toggle("passed", i < idx);
  });
  jmap.style.setProperty("--prog", idx / (TABS.length - 1));
  const nextT = TABS[idx + 1];
  chapterEl.innerHTML = `
    <div class="ch-head">
      <span class="badge ${t.badge ? "proposed" : ""}">Chapter ${idx + 1} of ${TABS.length} · ${t.badge || t.kicker}</span>
      <h3>${t.title}</h3>
      <p>${t.intro}</p>
    </div>
    <div class="ba">
      <div class="ba-toggle" role="group" aria-label="Compare today and with Salesforce">
        <button type="button" class="bt" data-ba="today">Today</button>
        <button type="button" class="bt on" data-ba="future">With Salesforce</button>
      </div>
      <ul class="ba-list future">${t.after.map(x => `<li>${x}</li>`).join("")}</ul>
      <ul class="ba-list today" hidden>${t.before.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>
    <div class="stepper">
      <ol class="steps">${t.steps.map((s, i) => `<li><button type="button" class="stp" data-i="${i}"><span class="st-t">${s.time}</span><span class="st-n">${s.title}</span><span class="st-w">${s.who}</span></button></li>`).join("")}</ol>
      <div class="stage">
        <div class="stage-screen" id="stage-screen"></div>
        <div class="stage-cap" id="stage-cap"></div>
        <div class="stage-nav">
          <button type="button" class="nav-b" id="st-prev">&larr; Back</button>
          <div class="pdots" id="pdots">${t.steps.map((_, i) => `<i data-i="${i}"></i>`).join("")}</div>
          <button type="button" class="nav-b pri" id="st-next">Next &rarr;</button>
        </div>
      </div>
    </div>
    ${t.compare ? compareBlock(t.compare) : ""}
    ${t.quotes.length ? `<div class="quotes">${t.quotes.map(q => `<blockquote>${q[0]}<cite>${q[1]}</cite></blockquote>`).join("")}</div>` : ""}
    <div class="ch-foot">
      <div class="outcomes">${t.outcomes.map(o => `<span class="outcome">${o}</span>`).join("")}</div>
      <details class="more"><summary>What's in phase one, and what's next</summary>
        <h5>Phase one</h5><div class="chips">${t.scope.now.map(c => `<span class="chip">${c}</span>`).join("")}</div>
        <h5>On the roadmap</h5><div class="chips">${t.scope.later.map(c => `<span class="chip later">${c}</span>`).join("")}</div>
      </details>
      <div class="ch-actions">
        <button class="ask-inline" type="button" data-q="Tell me more about ${t.kicker}"><span class="spark" aria-hidden="true"></span>Ask about ${t.label}</button>
        ${nextT ? `<button class="next-ch" type="button" data-next="${nextT.id}">Next chapter: ${nextT.verb} &rarr;</button>` : `<a class="next-ch" href="#simple">See why it stays simple &darr;</a>`}
      </div>
    </div>`;
  showStep(cur.step);
  if (opts.hash !== false) history.replaceState(null, "", "#" + t.id);
}

function showStep(i) {
  const t = TABS.find(x => x.id === cur.id), n = t.steps.length;
  i = Math.max(0, Math.min(n - 1, i)); cur.step = i;
  const s = t.steps[i];
  const scr = $("#stage-screen");
  scr.classList.remove("in"); void scr.offsetWidth;
  const file = `assets/screens/${t.id}-${i + 1}.png`;
  scr.innerHTML = `<div class="shot-wrap"><img class="shot" src="${file}" alt="${s.title}"></div>`;
  const img = $("img", scr);
  img.addEventListener("error", () => { scr.innerHTML = mockScreen(s.ui); }, { once: true });
  scr.classList.add("in");
  $("#stage-cap").innerHTML = `<div class="cap-top"><span class="cap-time">${s.time}</span><span class="cap-who">${s.who}</span><span class="ease">${s.ease}</span></div>
    <h4>${s.title}</h4><p>${s.text}</p>`;
  $$(".stp", chapterEl).forEach((b, k) => { b.classList.toggle("on", k === i); b.classList.toggle("done", k < i); b.setAttribute("aria-current", k === i ? "step" : "false"); });
  $$("#pdots i").forEach((d, k) => d.classList.toggle("on", k === i));
  $("#st-prev").disabled = i === 0;
  const next = $("#st-next"), idx = TABS.findIndex(x => x.id === cur.id);
  if (i === n - 1) { next.textContent = TABS[idx + 1] ? `Next chapter: ${TABS[idx + 1].verb} →` : "Done ✓"; next.dataset.end = "1"; }
  else { next.textContent = "Next →"; delete next.dataset.end; }
}

function goNextChapter() {
  const idx = TABS.findIndex(x => x.id === cur.id);
  if (TABS[idx + 1]) { renderChapter(TABS[idx + 1].id); $("#journey").scrollIntoView({ behavior: "smooth" }); }
  else $("#simple").scrollIntoView({ behavior: "smooth" });
}

jmap.addEventListener("click", e => { const b = e.target.closest(".stop"); if (b) renderChapter(b.dataset.id); });
chapterEl.addEventListener("click", e => {
  const st = e.target.closest(".stp"); if (st) return showStep(+st.dataset.i);
  const d = e.target.closest("#pdots i"); if (d) return showStep(+d.dataset.i);
  if (e.target.closest("#st-prev")) return showStep(cur.step - 1);
  const nx = e.target.closest("#st-next"); if (nx) return nx.dataset.end ? goNextChapter() : showStep(cur.step + 1);
  if (e.target.closest("[data-next]")) return goNextChapter();
  const bt = e.target.closest(".bt");
  if (bt) {
    $$(".bt", chapterEl).forEach(x => x.classList.toggle("on", x === bt));
    $$(".ba-list", chapterEl).forEach(l => l.hidden = !l.classList.contains(bt.dataset.ba));
  }
});
chapterEl.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") { e.preventDefault(); showStep(cur.step + 1); }
  if (e.key === "ArrowLeft") { e.preventDefault(); showStep(cur.step - 1); }
});
function openTab(id) { renderChapter(id); $("#journey").scrollIntoView({ behavior: "smooth" }); }
const startId = location.hash.slice(1);
renderChapter(TABS.some(t => t.id === startId) ? startId : TABS[0].id, { hash: false });

/* ---------- Simple by design ---------- */
$("#simple-h").textContent = SIMPLE.headline;
$("#simple-sub").textContent = SIMPLE.sub;
$("#simple-quote").innerHTML = `<blockquote>${SIMPLE.quote[0]}</blockquote><figcaption>${SIMPLE.quote[1]}</figcaption>`;
$("#simple-cards").innerHTML = SIMPLE.cards.map(c => `<article class="scard2"><div class="svis">${MINI[c.visual] || ""}</div><h3>${svg(c.icon, "si")}${c.title}</h3><p>${c.text}</p></article>`).join("");
$("#simple-tasks").innerHTML = SIMPLE.tasks.map((t, i) => `<div class="task"><span class="tn">${i + 1}</span><b>${t[0]}</b><span>${t[1]}</span></div>`).join("");

/* ---------- Why + proof ---------- */
$("#why-eyebrow").textContent = WHY.eyebrow;
$("#why-headline").textContent = WHY.headline;
$("#why-text").innerHTML = WHY.paras.map(p => `<p>${p}</p>`).join("");
$("#why-pull").innerHTML = `<div class="pull-mark" aria-hidden="true">&ldquo;</div><p>${WHY.closer}</p>`;
$("#pillars").innerHTML = PILLARS.map(p => `<article class="pillar">${svg(p.icon, "pi")}<h3>${p.title}</h3><p>${p.text}</p></article>`).join("");
const pcard = i => `<div class="pcard ${i.tag.toLowerCase()}${i.featured ? "" : " extra"}"${i.featured ? "" : " hidden"}><span class="ptag">${i.tag}</span>
  <div class="pval"><span data-count="${i.value}" data-suffix="${i.suffix}">${i.value.toLocaleString()}${i.suffix}</span></div>
  <p class="plabel">${i.label}</p><p class="pwho">${i.who}</p></div>`;
$("#proof-cards").innerHTML = PROOF.map(pcard).join("");
$("#proof-note").textContent = PROOF_NOTE;
$("#proof-more").addEventListener("click", e => {
  const ex = $$(".pcard.extra"), show = ex[0].hidden;
  ex.forEach(x => { x.hidden = !show; if (show) $$("[data-count]", x).forEach(countUp); });
  e.target.textContent = show ? "Show fewer" : "See all results";
});

/* ---------- Plan (Gantt) ---------- */
(function () {
  const W = GANTT.weeks;
  const head = `<div class="gr gh"><div class="gl"></div><div class="gtrack" style="--w:${W}">${Array.from({ length: W }, (_, i) => `<span>${i + 1}</span>`).join("")}</div></div>`;
  const rows = GANTT.rows.map(r => `<div class="gr"><div class="gl"><b>${r.label}</b><span>${r.who}</span></div>
    <div class="gtrack" style="--w:${W}"><div class="gbar ${r.cls}${r.milestone ? " ms" : ""}${r.arrow ? " arrow" : ""}" style="grid-column:${r.start} / ${r.end + 1}">${r.ticks ? Array.from({ length: r.ticks }, (_, i) => `<i>S${i + 1}</i>`).join("") : ""}</div></div></div>`).join("");
  $("#gantt").innerHTML = `<div class="gwk">Week</div>${head}${rows}`;
  $("#gantt-note").textContent = GANTT.note;
})();
$("#next-list").innerHTML = NEXT.map((n, i) => `<li><span class="nn">${i + 1}</span><div><b>${n[0]}</b><p>${n[1]}</p></div></li>`).join("");

/* ---------- Go deeper: slides + FAQ ---------- */
function slideCard(s, compact) {
  const stats = s.stats ? `<div class="sstats">${s.stats.map(x => `<div><b>${x[0]}</b><span>${x[1]}</span></div>`).join("")}</div>` : "";
  return `<a class="scard ${s.cloud}${compact ? " compact" : ""}" href="${slideUrl(s)}" target="_blank" rel="noopener" data-id="${s.id}">
    <img class="sshot" src="assets/slides/${s.id}.png" alt="" loading="lazy" onerror="this.remove()">
    <div class="sbody"><span class="stag">${s.cloud === "mkt" ? "Marketing Cloud" : "Manufacturing Cloud"}</span>
      <h4>${s.title}</h4>${stats}
      <ul>${s.points.slice(0, compact ? 2 : 4).map(p => `<li>${p}</li>`).join("")}</ul>
      <span class="sfoot">Overview deck · slide ${s.n}${s.source ? " · " + s.source : ""}</span></div></a>`;
}
function renderSlides(f) { $("#slide-grid").innerHTML = SLIDES.filter(s => f === "all" || s.cloud === f).map(s => slideCard(s)).join(""); }
renderSlides("all");
$("#slide-filters").addEventListener("click", e => {
  const b = e.target.closest(".fbtn"); if (!b) return;
  $$(".fbtn").forEach(x => x.classList.toggle("on", x === b)); renderSlides(b.dataset.f);
});
$$(".segb").forEach(b => b.addEventListener("click", () => {
  $$(".segb").forEach(x => { x.classList.toggle("on", x === b); x.setAttribute("aria-selected", x === b); });
  $("#pane-slides").hidden = b.dataset.pane !== "slides"; $("#pane-faq").hidden = b.dataset.pane !== "faq";
}));
let lastGroup = "";
$("#faq-list").innerHTML = FAQS.map(f => {
  const head = f.group !== lastGroup ? `<h3 class="fgroup" data-g="${f.group}">${f.group}</h3>` : ""; lastGroup = f.group;
  const s = SRC[f.src];
  return `${head}<details class="fq" data-g="${f.group}"><summary>${f.q}</summary><p>${f.a}</p>${s ? `<a class="srclink fsrc" href="${s.url}" target="_blank" rel="noopener">Source: ${s.label} &#8599;</a>` : ""}</details>`;
}).join("") + `<p class="faq-none" hidden>No matching questions. Try Ask for a Chapin-specific answer.</p>`;
$("#faq-search").addEventListener("input", e => {
  const q = e.target.value.toLowerCase().trim(); const vis = new Set();
  $$(".fq").forEach(d => { const m = !q || d.textContent.toLowerCase().includes(q); d.hidden = !m; if (m) vis.add(d.dataset.g); if (q && m) d.open = false; });
  $$(".fgroup").forEach(h => h.hidden = !vis.has(h.dataset.g));
  $(".faq-none").hidden = vis.size > 0;
});

/* ---------- Reveal + count-up ---------- */
function countUp(el) {
  if (el.dataset.done) return; el.dataset.done = 1;
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const end = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now();
  (function tick(t) { const p = Math.min(1, (t - t0) / 1100), e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(end * e).toLocaleString() + suf; if (p < 1) requestAnimationFrame(tick); })(t0);
}
const io = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return; e.target.classList.add("in");
  $$(".pcard:not([hidden]) [data-count]", e.target).forEach(countUp); io.unobserve(e.target);
}), { threshold: .1 });
$$(".reveal").forEach(el => io.observe(el));
