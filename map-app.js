// ========== STORY (Christian thread stressed) ==========
const CHAPTERS = [
  {
    id: "origins",
    era: "c. 500 BCE – 400 CE",
    title: "Samhain’s Fires",
    summary: "Celtic communities marked summer’s end with fire, harvest, and a sense of thin thresholds — the seasonal ground later seasons would build on.",
    story: "In early Ireland and neighboring Celtic lands, <strong>Samhain</strong> closed the harvest and opened winter. Bonfires, livestock rites, and stories of a permeable boundary between living and dead shaped the emotional weather of late autumn. This is the folk deep background — real, important, and not the whole of what Halloween became.",
    christianCallout: "What comes next is not a simple ‘pagan holiday stolen by the Church.’ It is a long negotiation: Christian calendar, prayer for the dead, and local custom sharing the same darkening weeks.",
    plate: { class: "samhain", icons: "🔥 🌑 🍂", caption: "Seasonal hinge: fire, harvest’s end, threshold night" },
    center: [-7.5, 53.5],
    zoom: 5.8,
    highlight: ["ireland-samhain"],
    christianHeavy: false
  },
  {
    id: "christian",
    era: "600 – 1000 CE",
    title: "Allhallowtide Arrives",
    summary: "The Church set a universal feast of All Saints and, with All Souls, gave the season a Christian spine of holy memory.",
    story: "As Christianity spread, the Church gave late autumn a formal sacred structure. <strong>All Saints’ Day</strong> (1 November) and later <strong>All Souls’ Day</strong> created <strong>Allhallowtide</strong> — a season focused on the saints in glory and the faithful departed. The night before became <strong>All Hallows’ Eve</strong>. In Rome the calendar was clarified; in local churches, candles, vigils, and Masses for the dead took root. This is the Christian toe-hold — and more than a toe-hold: for many communities it became the main meaning of the season.",
    christianCallout: "Allhallowtide is not a footnote. It is a deliberate liturgical answer to human memory of the dead: pray, remember, hope. Halloween’s name itself — All Hallows’ Eve — is a Christian name.",
    plate: { class: "christian", icons: "✝ 🕯️ ⛪", caption: "All Saints · All Souls · vigils and prayer for the dead" },
    center: [12.5, 42],
    zoom: 4.5,
    highlight: ["rome-saints"],
    christianHeavy: true
  },
  {
    id: "medieval",
    era: "1000 – 1500",
    title: "Sacred & Folk Entwined",
    summary: "Souling, church bells, and Masses lived beside guising and lanterns — Christian duty and folk custom on the same threshold.",
    story: "In medieval Britain the season was a <strong>braid</strong>, not a replacement. <strong>Souling</strong> sent people door to door offering prayers for the dead in exchange for soul cakes — explicitly Christian intercession. Church bells and Allhallowtide liturgies marked the days. At the same time, guising and hollowed turnip lanterns kept folk energy in the streets. Sacred obligation and neighborhood custom met at the same doors.",
    christianCallout: "Souling is a clear Christian practice: prayer for souls, alms, and remembrance. When we only tell the ‘pagan origin’ story, we erase this living medieval Christianity.",
    plate: { class: "blend", icons: "⛪ 🍞 🎃", caption: "Soul cakes & prayers · lanterns & guising — same night" },
    center: [-2, 52.8],
    zoom: 5.5,
    highlight: ["britain-souling", "britain-guising"],
    christianHeavy: true
  },
  {
    id: "early-modern",
    era: "1500 – 1800",
    title: "Reformation Pressure, Enduring Memory",
    summary: "Reformers challenged ‘popish’ rites; Catholic and folk memory of the dead still shaped the calendar.",
    story: "Protestant reformers often treated Halloween customs and some Allhallowtide practices as superstition or residual Catholicism. In places the public face of the season narrowed. Yet <strong>Catholic communities kept the feasts</strong>, and folk practices — fire, games, mischief — persisted across Britain and Ireland. The Christian thread did not vanish; it was contested, localized, and sometimes pushed into quieter forms of remembrance.",
    christianCallout: "Even where Reformation critique was strong, the older Christian instinct — that the dead are not disposable and the calendar should make room for them — did not disappear overnight.",
    plate: { class: "christian", icons: "✝ 📜 🔥", caption: "Contested calendar · retained feasts · stubborn folk night" },
    center: [-4, 54],
    zoom: 5,
    highlight: ["ireland-christian", "britain-guising"],
    christianHeavy: true
  },
  {
    id: "america",
    era: "1800 – 1950",
    title: "Across the Atlantic",
    summary: "Immigrants carried both folk Halloween and Christian November feasts. Pumpkins rose; parishes kept saints and souls.",
    story: "Irish and Scottish migration brought autumn customs to North America. The <strong>pumpkin</strong> replaced the turnip. Community parties and, later, trick-or-treating reshaped the public night. At the same time, Catholic and other Christian communities continued <strong>All Saints’ and All Souls’</strong> observance — Masses, cemetery visits, prayers for the dead. The American story is not only commercialization; it is also parish life beside the porch light.",
    christianCallout: "Trunk-or-treat, harvest festivals, and All Souls’ remembrances in churches are part of the same long Christian negotiation with the season — still visible today.",
    plate: { class: "modern", icons: "🎃 🍬 ✝", caption: "Immigrant folk night · parish Allhallowtide · new American script" },
    center: [-74, 41],
    zoom: 5,
    highlight: ["boston-modern", "nyc-modern"],
    christianHeavy: false
  },
  {
    id: "global",
    era: "1950 – Present",
    title: "Many October Nights",
    summary: "Global pop-Halloween spreads — while Christian remembrance and traditions like Día de los Muertos keep sacred memory alive.",
    story: "Media and retail exported a commercial Halloween of costumes and candy worldwide. Yet the Christian thread continues: All Saints’ and All Souls’ liturgies, prayers for the dead, and local church alternatives to pure spectacle. <strong>Día de los Muertos</strong> in Mexico stands as a powerful related tradition — Indigenous remembrance braided with Catholic All Saints/All Souls practice. The season still holds more than one truth at once.",
    christianCallout: "To stress only ‘pagan roots’ or only ‘candy capitalism’ is to miss the Christian middle: a calendar that still asks the living to remember the dead before God.",
    plate: { class: "blend", icons: "💀 🕯️ 🎃", caption: "Global costume night · living Christian & familial remembrance" },
    center: [-40, 25],
    zoom: 2.4,
    highlight: ["mexico-dotd", "nyc-modern"],
    christianHeavy: true
  }
];

const PLACES = [
  { id: "ireland-samhain", coords: [-6.2603, 53.3498], layer: "samhain", emoji: "🔥", title: "Ireland — Samhain Ground", body: "Early Irish seasonal practice around Samhain — fire, harvest’s end, threshold anxiety — forms the folk deep background. Later Christian Allhallowtide would occupy the same weeks of the year.", source: "Hutton, Stations of the Sun" },
  { id: "scotland-samhain", coords: [-4.2026, 56.4907], layer: "samhain", emoji: "🔥", title: "Scotland — Fire & Guising", body: "Scottish fire customs and guising kept folk seasonal energy strong. These practices traveled with migrants and fed what Americans later called Halloween.", source: "Hutton; Rogers" },
  { id: "rome-saints", coords: [12.4964, 41.9028], layer: "christian", emoji: "✝", title: "Rome — All Saints’ Day", body: "The Roman calendar’s emphasis on a universal All Saints’ feast (associated with the 8th century development of 1 November) helped lock in Allhallowtide. This is institutional Christianity giving the season a sacred spine.", source: "Church histories" },
  { id: "ireland-christian", coords: [-7.8, 53.2], layer: "christian", emoji: "🕯️", title: "Ireland — All Hallows’ Eve", body: "The very name Halloween — All Hallows’ Eve — is Christian. Irish Christian practice held vigils and prayers for saints and souls in the same seasonal window as older folk custom.", source: "Santino; Hutton" },
  { id: "britain-souling", coords: [-1.8904, 52.4862], layer: "christian", emoji: "⛪", title: "England — Souling", body: "Souling: door-to-door prayer for the dead in exchange for soul cakes. Explicit Christian intercession and charity — not a pagan leftover, but medieval Christian practice.", source: "Hutton, 1996" },
  { id: "britain-guising", coords: [-2.2426, 53.4808], layer: "samhain", emoji: "🎃", title: "Britain — Guising & Lanterns", body: "Guising and turnip lanterns kept folk play in the season. They shared streets and calendars with souling and church observance — a mixed night, not a single origin.", source: "Rogers, 2002" },
  { id: "boston-modern", coords: [-71.0589, 42.3601], layer: "modern", emoji: "🎃", title: "New England — Immigrant Roots", body: "Irish and Scottish communities planted Halloween customs in the Northeast. Parish life and November Christian feasts arrived in the same migrations.", source: "Skal, 2002" },
  { id: "nyc-modern", coords: [-74.006, 40.7128], layer: "modern", emoji: "🍬", title: "United States — Costume & Parish", body: "Trick-or-treat and commercial Halloween grew fast — while churches continued All Saints/All Souls and, later, alternatives like trunk-or-treat and harvest festivals.", source: "Skal; parish practice" },
  { id: "mexico-dotd", coords: [-99.1332, 19.4326], layer: "modern", emoji: "💀", title: "Mexico — Día de los Muertos", body: "A living tradition of family remembrance braided with Catholic All Saints and All Souls. Not ‘Mexican Halloween’ — a related, distinct Christian-and-Indigenous season of the dead.", source: "Brandes, 2006" },
  { id: "japan-modern", coords: [139.6503, 35.6762], layer: "modern", emoji: "🎃", title: "Japan & Global Pop-Halloween", body: "Commercial Halloween spread through media and retail even where folk or parish Allhallowtide roots were thin — one more layer in a crowded global October.", source: "Contemporary reporting" }
];

document.getElementById("splashStart").addEventListener("click", () => {
  document.getElementById("splash").classList.add("hide");
});

const particlesEl = document.getElementById("particles");
for (let i = 0; i < 16; i++) {
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.animationDuration = 8 + Math.random() * 14 + "s";
  p.style.animationDelay = Math.random() * 10 + "s";
  p.style.width = p.style.height = 2 + Math.random() * 3 + "px";
  particlesEl.appendChild(p);
}

let audioCtx = null;
let audioNodes = [];
let audioOn = false;

function startAmbient() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  const master = audioCtx.createGain();
  master.gain.value = 0.035;
  master.connect(audioCtx.destination);
  [55, 82.5, 110].forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    osc.type = i === 0 ? "sine" : "triangle";
    osc.frequency.value = freq;
    g.gain.value = i === 0 ? 0.9 : 0.25;
    osc.connect(g);
    g.connect(master);
    osc.start();
    audioNodes.push(osc, g);
  });
  audioNodes.push(master);
  audioOn = true;
  document.getElementById("audioBtn").classList.add("on");
  document.getElementById("audioBtn").textContent = "🔊 Ambient on";
}

function stopAmbient() {
  audioNodes.forEach((n) => {
    try { if (n.stop) n.stop(); n.disconnect(); } catch (_) {}
  });
  audioNodes = [];
  audioOn = false;
  document.getElementById("audioBtn").classList.remove("on");
  document.getElementById("audioBtn").textContent = "🔊 Ambient off";
}

document.getElementById("audioBtn").addEventListener("click", () => {
  if (audioOn) stopAmbient();
  else startAmbient();
});

const STYLES = {
  fiord: "https://tiles.openfreemap.org/styles/fiord",
  dark: "https://tiles.openfreemap.org/styles/dark",
  liberty: "https://tiles.openfreemap.org/styles/liberty"
};

const map = new maplibregl.Map({
  container: "map",
  style: STYLES.fiord,
  center: [-20, 30],
  zoom: 1.6,
  attributionControl: true
});
map.addControl(new maplibregl.NavigationControl({ visualizePitch: false }), "bottom-right");

document.querySelectorAll(".style-chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.style;
    if (!STYLES[key]) return;
    document.querySelectorAll(".style-chip").forEach((b) => b.classList.remove("on"));
    btn.classList.add("on");
    const center = map.getCenter();
    const zoom = map.getZoom();
    map.setStyle(STYLES[key]);
    map.once("style.load", () => {
      map.setCenter(center);
      map.setZoom(zoom);
    });
  });
});

const markers = {};
const layerVisible = { samhain: true, christian: true, modern: true };
let activePopup = null;

function createMarkerEl(place) {
  const el = document.createElement("div");
  el.className = `marker ${place.layer}`;
  el.innerHTML = `<div class="marker-pulse"></div><div class="marker-inner">${place.emoji}</div>`;
  el.title = place.title;
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    openPlace(place.id);
  });
  return el;
}

map.on("load", () => {
  PLACES.forEach((place) => {
    const el = createMarkerEl(place);
    const marker = new maplibregl.Marker({ element: el, anchor: "center" })
      .setLngLat(place.coords)
      .addTo(map);
    markers[place.id] = { marker, place, el };
  });
});

function setLayerVisible(layer, on) {
  layerVisible[layer] = on;
  Object.values(markers).forEach(({ place, el }) => {
    if (place.layer === layer) el.style.display = on ? "block" : "none";
  });
}

document.querySelectorAll(".chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    const layer = btn.dataset.layer;
    const on = btn.classList.toggle("on");
    setLayerVisible(layer, on);
  });
});

function openPlace(id) {
  const entry = markers[id];
  if (!entry) return;
  const { place } = entry;
  if (activePopup) activePopup.remove();
  activePopup = new maplibregl.Popup({ offset: 22, maxWidth: "300px" })
    .setLngLat(place.coords)
    .setHTML(`
      <div class="popup-inner">
        <div class="popup-tag ${place.layer}">${place.layer}</div>
        <div class="popup-title">${place.title}</div>
        <div class="popup-body">${place.body}</div>
        <div class="popup-source">${place.source}</div>
      </div>
    `)
    .addTo(map);
}

const storyPanel = document.getElementById("storyPanel");
let chapterIndex = 0;

CHAPTERS.forEach((ch, i) => {
  const card = document.createElement("div");
  card.className = "chapter-card" + (ch.christianHeavy ? " christian-heavy" : "") + (i === 0 ? " active" : "");
  card.dataset.index = i;
  card.innerHTML = `
    <div class="era">${ch.era}</div>
    <h3>${ch.title}</h3>
    <p>${ch.summary}</p>
    <div class="plate">
      <div class="plate-visual ${ch.plate.class}">${ch.plate.icons}</div>
      <div class="plate-caption">${ch.plate.caption}</div>
    </div>
    <div class="story-expand">
      ${ch.story}
      <div class="christian-callout">${ch.christianCallout}</div>
    </div>
  `;
  card.addEventListener("click", () => goToChapter(i));
  storyPanel.appendChild(card);
});

function goToChapter(index, animate = true) {
  chapterIndex = Math.max(0, Math.min(CHAPTERS.length - 1, index));
  const ch = CHAPTERS[chapterIndex];
  document.querySelectorAll(".chapter-card").forEach((el, i) => {
    el.classList.toggle("active", i === chapterIndex);
  });
  const activeCard = storyPanel.querySelector(`.chapter-card[data-index="${chapterIndex}"]`);
  if (activeCard) activeCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
  document.getElementById("progressLabel").textContent = `Chapter ${chapterIndex + 1} of ${CHAPTERS.length}`;
  document.getElementById("progressFill").style.width = `${((chapterIndex + 1) / CHAPTERS.length) * 100}%`;
  document.getElementById("btnPrev").disabled = chapterIndex === 0;
  document.getElementById("btnNext").disabled = chapterIndex === CHAPTERS.length - 1;
  if (map.loaded()) {
    map.flyTo({ center: ch.center, zoom: ch.zoom, duration: animate ? 1800 : 0, essential: true });
    if (ch.highlight && ch.highlight.length) {
      setTimeout(() => openPlace(ch.highlight[0]), animate ? 1100 : 200);
    }
  }
  document.getElementById("hint").classList.add("hide");
}

document.getElementById("btnPrev").addEventListener("click", () => goToChapter(chapterIndex - 1));
document.getElementById("btnNext").addEventListener("click", () => goToChapter(chapterIndex + 1));

window.addEventListener("keydown", (e) => {
  if (document.getElementById("splash").classList.contains("hide") === false) return;
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    goToChapter(chapterIndex + 1);
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    goToChapter(chapterIndex - 1);
  }
});

map.on("load", () => goToChapter(0, false));
