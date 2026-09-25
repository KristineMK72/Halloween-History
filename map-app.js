// Halloween History — amazing edition
// GSAP motion · Turf journey paths · layered ambient · MapLibre
// CHAPTERS and PLACES load from chapters-data.js

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
      goToChapter(0, false);
    }
  });
});

let map;
let chapterIndex = 0;
const layerVisible = { samhain: true, christian: true, modern: true };
let pathsOn = true;
let audioOn = false;
let audioCtx;

function initMap() {
  map = new maplibregl.Map({
    container: "map",
    style: "https://tiles.openfreemap.org/styles/dark",
    center: [-7.5, 53.5],
    zoom: 4.5,
    pitch: 30,
    attributionControl: true
  });
  map.addControl(new maplibregl.NavigationControl({ visualizePitch: true }), "top-right");
  map.on("load", () => {
    map.addSource("journey", { type: "geojson", data: { type: "FeatureCollection", features: [] } });
    map.addLayer({
      id: "journey-line",
      type: "line",
      source: "journey",
      paint: {
        "line-color": "#f97316",
        "line-width": 3,
        "line-opacity": 0.85
      }
    });
    PLACES.forEach((place) => addMarker(place));
    buildChapterCards();
    goToChapter(0, false);
  });
}

function addMarker(place) {
  const el = document.createElement("div");
  el.className = "marker-wrap";
  el.dataset.layer = place.layer;
  el.innerHTML = `<div class="marker-pulse"></div><div class="marker-inner">${place.emoji}</div>`;
  el.addEventListener("click", (e) => {
    e.stopPropagation();
    openPlace(place.id);
  });
  new maplibregl.Marker({ element: el }).setLngLat(place.coords).addTo(map);
}

function openPlace(id) {
  const place = placeById[id];
  if (!place) return;
  const html = `<div class="popup-card"><h4>${place.emoji} ${place.title}</h4><p>${place.body}</p><div class="src">${place.source || ""}</div></div>`;
  new maplibregl.Popup({ maxWidth: "280px" }).setLngLat(place.coords).setHTML(html).addTo(map);
}

function drawJourneyPath(ch) {
  if (!pathsOn || !ch.path || ch.path.length < 2) {
    map.getSource("journey")?.setData({ type: "FeatureCollection", features: [] });
    return;
  }
  const coords = ch.path.map((id) => placeById[id]?.coords).filter(Boolean);
  if (coords.length < 2) return;
  const line = turf.lineString(coords);
  const curved = turf.bezierSpline(line, { sharpness: 0.85 });
  map.getSource("journey").setData(curved);
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

function buildChapterCards() {
  storyPanel.innerHTML = "";
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
    </div>`;
    card.addEventListener("click", () => goToChapter(i));
    storyPanel.appendChild(card);
  });
  gsap.from(".chapter-card", { opacity: 0, y: 12, stagger: 0.06, duration: 0.45, ease: "power2.out" });
}

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
  if (map && map.loaded()) {
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

document.querySelectorAll(".layer-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const layer = btn.dataset.layer;
    layerVisible[layer] = !layerVisible[layer];
    btn.classList.toggle("on", layerVisible[layer]);
    document.querySelectorAll(`.marker-wrap[data-layer="${layer}"]`).forEach((el) => {
      el.style.display = layerVisible[layer] ? "" : "none";
    });
  });
});

document.getElementById("btnAudio").addEventListener("click", () => {
  audioOn = !audioOn;
  document.getElementById("btnAudio").classList.toggle("on", audioOn);
  document.getElementById("btnAudio").textContent = audioOn ? "Sound on" : "Sound";
  if (audioOn && !audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = 110;
      gain.gain.value = 0.02;
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
    } catch (_) {}
  }
});

window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" || e.key === "ArrowDown") {
    e.preventDefault();
    goToChapter(chapterIndex + 1);
  } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
    e.preventDefault();
    goToChapter(chapterIndex - 1);
  }
});

initMap();
