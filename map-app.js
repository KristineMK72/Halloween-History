// Halloween History — amazing edition
// GSAP motion · Turf journey paths · layered ambient · MapLibre

const CHAPTERS = [
  {
    id: "origins",
    era: "c. 500 BCE – 400 CE",
    title: "Samhain’s Fires",
    summary: "Celtic communities marked summer’s end with fire, harvest, and thin thresholds.",
    story: "In early Ireland and neighboring Celtic lands, <strong>Samhain</strong> closed the harvest and opened winter. Bonfires, livestock rites, and stories of a permeable boundary between living and dead shaped the emotional weather of late autumn.",
    christianCallout: "What comes next is not a simple ‘pagan holiday stolen by the Church.’ It is a long negotiation: Christian calendar, prayer for the dead, and local custom sharing the same darkening weeks.",
    plate: { class: "samhain", icons: "🔥 🌑 🍂", caption: "Seasonal hinge: fire, harvest’s end, threshold night" },
    center: [-7.5, 53.5],
    zoom: 5.8,
    pitch: 45,
    highlight: ["ireland-samhain", "scotland-samhain"],
    path: ["ireland-samhain", "scotland-samhain"],
    christianHeavy: false
  },
  {
    id: "christian",
    era: "600 – 1000 CE",
    title: "Allhallowtide Arrives",
    summary: "The Church set All Saints and All Souls — a Christian spine of holy memory.",
    story: "As Christianity spread, the Church gave late autumn a formal sacred structure. <strong>All Saints’ Day</strong> (1 November) and later <strong>All Souls’ Day</strong> created <strong>Allhallowtide</strong>. The night before became <strong>All Hallows’ Eve</strong>.",
    christianCallout: "Allhallowtide is not a footnote. Halloween’s name itself — All Hallows’ Eve — is a Christian name.",
    plate: { class: "christian", icons: "✝ 🕯️ ⛪", caption: "All Saints · All Souls · vigils and prayer for the dead" },
    center: [12.5, 42],
    zoom: 4.8,
    pitch: 40,
    highlight: ["rome-saints", "ireland-christian"],
    path: ["rome-saints", "ireland-christian", "britain-souling"],
    christianHeavy: true
  },
  {
    id: "medieval",
    era: "1000 – 1500",
    title: "Sacred & Folk Entwined",
    summary: "Souling, church bells, and Masses lived beside guising and lanterns.",
    story: "In medieval Britain the season was a <strong>braid</strong>. <strong>Souling</strong> sent people door to door offering prayers for the dead in exchange for soul cakes — explicitly Christian intercession — while guising and turnip lanterns kept folk energy in the streets.",
    christianCallout: "Souling is clear Christian practice: prayer for souls, alms, and remembrance.",
    plate: { class: "blend", icons: "⛪ 🍞 🎃", caption: "Soul cakes & prayers · lanterns & guising — same night" },
    center: [-2, 52.8],
    zoom: 5.6,
    pitch: 50,
    highlight: ["britain-souling", "britain-guising"],
    path: ["britain-souling", "britain-guising", "ireland-christian"],
    christianHeavy: true
  },
  {
    id: "early-modern",
    era: "1500 – 1800",
    title: "Reformation Pressure, Enduring Memory",
    summary: "Reformers challenged ‘popish’ rites; Catholic and folk memory of the dead endured.",
    story: "Protestant reformers often treated Halloween customs as superstition or residual Catholicism. Yet <strong>Catholic communities kept the feasts</strong>, and folk practices persisted across Britain and Ireland.",
    christianCallout: "The instinct that the dead are not disposable — and the calendar should make room for them — did not vanish overnight.",
    plate: { class: "christian", icons: "✝ 📜 🔥", caption: "Contested calendar · retained feasts · stubborn folk night" },
    center: [-4, 54],
    zoom: 5.2,
    pitch: 42,
    highlight: ["ireland-christian", "britain-guising"],
    path: ["ireland-samhain", "britain-guising", "ireland-christian"],
    christianHeavy: true
  },
  {
    id: "america",
    era: "1800 – 1950",
    title: "Across the Atlantic",
    summary: "Immigrants carried folk Halloween and Christian November feasts. Pumpkins rose; parishes kept saints and souls.",
    story: "Irish and Scottish migration brought autumn customs to North America. The <strong>pumpkin</strong> replaced the turnip. Trick-or-treating reshaped the public night — while Catholic and other Christian communities continued <strong>All Saints’ and All Souls’</strong> observance.",
    christianCallout: "Trunk-or-treat and All Souls’ remembrances are part of the same long Christian negotiation with the season.",
    plate: { class: "modern", icons: "🎃 🍬 ✝", caption: "Immigrant folk night · parish Allhallowtide · new American script" },
    center: [-74, 41],
    zoom: 5,
    pitch: 35,
    highlight: ["boston-modern", "nyc-modern"],
    path: ["ireland-samhain", "boston-modern", "nyc-modern"],
    christianHeavy: false
  },
  {
    id: "global",
    era: "1950 – Present",
    title: "Many October Nights",
    summary: "Global pop-Halloween spreads — while Christian remembrance and Día de los Muertos keep sacred memory alive.",
    story: "Media and retail exported commercial Halloween worldwide. The Christian thread continues in liturgy and local church practice. <strong>Día de los Muertos</strong> stands as a powerful related tradition — Indigenous remembrance braided with Catholic All Saints/All Souls.",
    christianCallout: "To stress only ‘pagan roots’ or only ‘candy capitalism’ misses the Christian middle: remember the dead before God.",
    plate: { class: "blend", icons: "💀 🕯️ 🎃", caption: "Global costume night · living Christian & familial remembrance" },
    center: [-40, 25],
    zoom: 2.5,
    pitch: 20,
    highlight: ["mexico-dotd", "nyc-modern", "japan-modern"],
    path: ["nyc-modern", "mexico-dotd", "japan-modern"],
    christianHeavy: true
  }
];

const PLACES = [
  { id: "ireland-samhain", coords: [-6.2603, 53.3498], layer: "samhain", emoji: "🔥", title: "Ireland — Samhain Ground", body: "Early Irish seasonal practice around Samhain forms the folk deep background. Later Christian Allhallowtide would occupy the same weeks of the year.", source: "Hutton, Stations of the Sun" },
  { id: "scotland-samhain", coords: [-4.2026, 56.4907], layer: "samhain", emoji: "🔥", title: "Scotland — Fire & Guising", body: "Scottish fire customs and guising kept folk seasonal energy strong and traveled with migrants to America.", source: "Hutton; Rogers" },
  { id: "rome-saints", coords: [12.4964, 41.9028], layer: "christian", emoji: "✝", title: "Rome — All Saints’ Day", body: "The Roman calendar’s emphasis on a universal All Saints’ feast helped lock in Allhallowtide — institutional Christianity giving the season a sacred spine.", source: "Church histories" },
  { id: "ireland-christian", coords: [-7.8, 53.2], layer: "christian", emoji: "🕯️", title: "Ireland — All Hallows’ Eve", body: "The very name Halloween — All Hallows’ Eve — is Christian. Vigils and prayers for saints and souls shared the seasonal window with older folk custom.", source: "Santino; Hutton" },
  { id: "britain-souling", coords: [-1.8904, 52.4862], layer: "christian", emoji: "⛪", title: "England — Souling", body: "Door-to-door prayer for the dead in exchange for soul cakes — explicit Christian intercession and charity.", source: "Hutton, 1996" },
  { id: "britain-guising", coords: [-2.2426, 53.4808], layer: "samhain", emoji: "🎃", title: "Britain — Guising & Lanterns", body: "Guising and turnip lanterns kept folk play in the season — a mixed night shared with souling and church observance.", source: "Rogers, 2002" },
  { id: "boston-modern", coords: [-71.0589, 42.3601], layer: "modern", emoji: "🎃", title: "New England — Immigrant Roots", body: "Irish and Scottish communities planted Halloween customs in the Northeast. Parish life and November Christian feasts arrived in the same migrations.", source: "Skal, 2002" },
  { id: "nyc-modern", coords: [-74.006, 40.7128], layer: "modern", emoji: "🍬", title: "United States — Costume & Parish", body: "Trick-or-treat grew fast — while churches continued All Saints/All Souls and later alternatives like trunk-or-treat.", source: "Skal; parish practice" },
  { id: "mexico-dotd", coords: [-99.1332, 19.4326], layer: "modern", emoji: "💀", title: "Mexico — Día de los Muertos", body: "A living tradition of family remembrance braided with Catholic All Saints and All Souls — related to, but not the same as, commercial Halloween.", source: "Brandes, 2006" },
  { id: "japan-modern", coords: [139.6503, 35.6762], layer: "modern", emoji: "🎃", title: "Japan & Global Pop-Halloween", body: "Commercial Halloween spread through media and retail even where folk or parish Allhallowtide roots were thin.", source: "Contemporary reporting" }
];

const placeById = Object.fromEntries(PLACES.map((p) => [p.id, p]));

const splash = document.getElementById("splash");
document.getElementById("splashStart").addEventListener("click", () => {
  gsap.to(splash, {
    opacity: 0,
    duration: 0.7,
    ease: "power2.inOut",
    onComplete: () => {
      splash.classList.add("hide");
      splash.style.pointerEvents = "none";
    }
  });
});

const particlesEl = document.getElementById("particles");
for (let i = 0; i < 22; i++) {
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.animationDuration = 7 + Math.random() * 16 + "s";
  p.style.animationDelay = Math.random() * 12 + "s";
  p.style.width = p.style.height = 2 + Math.random() * 3.5 + "px";
  particlesEl.appendChild(p);
}

let audioCtx = null;
let audioNodes = [];
let audioOn = false;
let pathsOn = true;

function startAmbient() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
  const master = audioCtx.createGain();
  master.gain.value = 0;
  master.connect(audioCtx.destination);
  gsap.to(master.gain, { value: 0.04, duration: 2 });
  [49, 73.5, 98].forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    osc.type = i === 0 ? "sine" : "triangle";
    osc.frequency.value = freq;
    filter.type = "lowpass";
    filter.frequency.value = 400;
    g.gain.value = i === 0 ? 0.85 : 0.22;
    osc.connect(filter);
    filter.connect(g);
    g.connect(master);
    osc.start();
    audioNodes.push(osc, g, filter);
  });
  const shimmer = audioCtx.createOscillator();
  const sg = audioCtx.createGain();
  shimmer.type = "sine";
  shimmer.frequency.value = 392;
  sg.gain.value = 0.03;
  shimmer.connect(sg);
  sg.connect(master);
  shimmer.start();
  const lfo = audioCtx.createOscillator();
  const lfoG = audioCtx.createGain();
  lfo.frequency.value = 0.08;
  lfoG.gain.value = 0.02;
  lfo.connect(lfoG);
  lfoG.connect(sg.gain);
  lfo.start();
  audioNodes.push(shimmer, sg, lfo, lfoG, master);
  audioOn = true;
  document.getElementById("audioBtn").classList.add("on");
  document.getElementById("audioBtn").textContent = "🔊 Ambient on";
}

function stopAmbient() {
  audioNodes.forEach((n) => {
    try {
      if (n.gain) gsap.to(n.gain, { value: 0, duration: 0.8 });
      if (n.stop) setTimeout(() => { try { n.stop(); } catch (_) {} }, 900);
      setTimeout(() => { try { n.disconnect(); } catch (_) {} }, 1000);
    } catch (_) {}
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

document.getElementById("pathBtn").addEventListener("click", () => {
  pathsOn = !pathsOn;
  const btn = document.getElementById("pathBtn");
  btn.classList.toggle("on", pathsOn);
  btn.textContent = pathsOn ? "🛤️ Paths on" : "🛤️ Paths off";
  if (!pathsOn) clearJourneyPath();
  else if (typeof chapterIndex === "number") drawJourneyPath(CHAPTERS[chapterIndex]);
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
  pitch: 0,
  attributionControl: true
});
map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "bottom-right");

document.querySelectorAll(".style-chip").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.dataset.style;
    if (!STYLES[key]) return;
    document.querySelectorAll(".style-chip").forEach((b) => b.classList.remove("on"));
    btn.classList.add("on");
    const center = map.getCenter();
    const zoom = map.getZoom();
    const pitch = map.getPitch();
    map.setStyle(STYLES[key]);
    map.once("style.load", () => {
      map.setCenter(center);
      map.setZoom(zoom);
      map.setPitch(pitch);
      readdPathLayers();
      if (pathsOn) drawJourneyPath(CHAPTERS[chapterIndex]);
    });
  });
});

const markers = {};
const layerVisible = { samhain: true, christian: true, modern: true };
let activePopup = null;
let chapterIndex = 0;

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

function setupMarkers() {
  PLACES.forEach((place) => {
    if (markers[place.id]) return;
    const el = createMarkerEl(place);
    const marker = new maplibregl.Marker({ element: el, anchor: "center" })
      .setLngLat(place.coords)
      .addTo(map);
    markers[place.id] = { marker, place, el };
  });
}

map.on("load", () => {
  setupMarkers();
  readdPathLayers();
  goToChapter(0, false);
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
  const { place, el } = entry;
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
  gsap.fromTo(el.querySelector(".marker-inner"),
    { scale: 1 },
    { scale: 1.25, duration: 0.25, yoyo: true, repeat: 1, ease: "power2.out" }
  );
}

function readdPathLayers() {
  if (!map.getSource("journey")) {
    map.addSource("journey", {
      type: "geojson",
      data: { type: "FeatureCollection", features: [] }
    });
  }
  if (!map.getLayer("journey-glow")) {
    map.addLayer({
      id: "journey-glow",
      type: "line",
      source: "journey",
      paint: {
        "line-color": "#fbbf24",
        "line-width": 8,
        "line-opacity": 0.25,
        "line-blur": 4
      }
    });
  }
  if (!map.getLayer("journey-line")) {
    map.addLayer({
      id: "journey-line",
      type: "line",
      source: "journey",
      paint: {
        "line-color": "#f97316",
        "line-width": 2.5,
        "line-opacity": 0.9
      }
    });
  }
}

function clearJourneyPath() {
  if (map.getSource("journey")) {
    map.getSource("journey").setData({ type: "FeatureCollection", features: [] });
  }
}

function drawJourneyPath(ch) {
  if (!pathsOn || !ch.path || ch.path.length < 2) {
    clearJourneyPath();
    return;
  }
  readdPathLayers();
  const coords = ch.path
    .map((id) => placeById[id])
    .filter(Boolean)
    .map((p) => p.coords);
  if (coords.length < 2) return;
  const lineFeatures = [];
  for (let i = 0; i < coords.length - 1; i++) {
    const from = turf.point(coords[i]);
    const to = turf.point(coords[i + 1]);
    const dist = turf.distance(from, to, { units: "kilometers" });
    const steps = Math.max(32, Math.min(120, Math.round(dist / 40)));
    const greatCircle = turf.greatCircle(from, to, { npoints: steps });
    lineFeatures.push(greatCircle);
  }
  const fc = turf.featureCollection(lineFeatures);
  map.getSource("journey").setData(fc);
  const state = { o: 0.3 };
  gsap.to(state, {
    o: 0.95,
    duration: 1.2,
    yoyo: true,
    repeat: 2,
    ease: "sine.inOut",
    onUpdate: () => {
      if (map.getLayer("journey-line")) {
        map.setPaintProperty("journey-line", "line-opacity", state.o);
      }
    }
  });
}

const storyPanel = document.getElementById("storyPanel");

CHAPTERS.forEach((ch, i) => {
  const card = document.createElement("div");
  card.className = "chapter-card" + (ch.christianHeavy ? " christian-heavy" : "");
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

gsap.from(".chapter-card", {
  opacity: 0,
  x: -16,
  duration: 0.5,
  stagger: 0.08,
  ease: "power2.out",
  delay: 0.3
});

function goToChapter(index, animate = true) {
  chapterIndex = Math.max(0, Math.min(CHAPTERS.length - 1, index));
  const ch = CHAPTERS[chapterIndex];
  document.querySelectorAll(".chapter-card").forEach((el, i) => {
    el.classList.toggle("active", i === chapterIndex);
  });
  const activeCard = storyPanel.querySelector(`.chapter-card[data-index="${chapterIndex}"]`);
  if (activeCard) {
    activeCard.scrollIntoView({ behavior: "smooth", block: "nearest" });
    gsap.fromTo(activeCard, { scale: 0.98 }, { scale: 1, duration: 0.35, ease: "back.out(1.4)" });
  }
  document.getElementById("progressLabel").textContent = `Chapter ${chapterIndex + 1} of ${CHAPTERS.length}`;
  gsap.to("#progressFill", {
    width: `${((chapterIndex + 1) / CHAPTERS.length) * 100}%`,
    duration: 0.5,
    ease: "power2.out"
  });
  document.getElementById("btnPrev").disabled = chapterIndex === 0;
  document.getElementById("btnNext").disabled = chapterIndex === CHAPTERS.length - 1;
  if (map.loaded()) {
    map.flyTo({
      center: ch.center,
      zoom: ch.zoom,
      pitch: ch.pitch || 0,
      bearing: chapterIndex % 2 === 0 ? -8 : 8,
      duration: animate ? 2200 : 0,
      essential: true
    });
    drawJourneyPath(ch);
    if (ch.highlight && ch.highlight.length) {
      setTimeout(() => openPlace(ch.highlight[0]), animate ? 1400 : 200);
    }
  }
  document.getElementById("hint").classList.add("hide");
}

document.getElementById("btnPrev").addEventListener("click", () => goToChapter(chapterIndex - 1));
document.getElementById("btnNext").addEventListener("click", () => goToChapter(chapterIndex + 1));

window.addEventListener("keydown", (e) => {
  if (!splash.classList.contains("hide") && splash.style.opacity !== "0") return;
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    goToChapter(chapterIndex + 1);
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    goToChapter(chapterIndex - 1);
  }
});
