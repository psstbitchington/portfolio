/* ============================================================
   RENDER HELPERS
   ============================================================ */
// Fetches a Vimeo video's real thumbnail (YouTube's is a predictable
// URL and doesn't need this — see the video() helper in data.js).
// Explicitly requesting a width matters: with no width param, Vimeo's
// oEmbed defaults to a tiny 100x75 thumbnail that's letterboxed to
// 4:3 regardless of the video's real shape — too small to read and
// wrong-shaped for a vertical video. Requesting a wide thumbnail
// makes Vimeo return it scaled to the video's true aspect ratio.
function loadVimeoThumbnail(vimeoId, imgEl) {
  fetch(`https://vimeo.com/api/oembed.json?url=https://vimeo.com/${vimeoId}&width=960`)
    .then((r) => r.json())
    .then((data) => {
      if (data.thumbnail_url) imgEl.src = data.thumbnail_url;
    })
    .catch(() => {});
}

// Used for grid/section tiles. Real videos render as an actual
// thumbnail with a play button — not a generic placeholder — but
// stay a static image (not a live iframe): an iframe swallows its
// own clicks, which would break "tap to enlarge", and loading
// several YouTube/Vimeo players at once on one page is wasteful.
// The real player only exists inside the lightbox (buildLightboxMedia).
function placeholderTile(m) {
  if (m.embedUrl) {
    const tile = document.createElement("div");
    tile.className = "video-tile";
    const img = document.createElement("img");
    img.className = "video-tile__thumb";
    img.alt = m.title || "Video thumbnail";
    img.loading = "lazy";
    // The tile defaults to a 16:9 shape (see CSS) so it doesn't
    // flash empty before the thumbnail loads, but a vertical video
    // has a vertical thumbnail — forcing 16:9 on it would crop it
    // into a horizontal-looking sliver. Once the real image loads,
    // resize the tile to match its actual dimensions.
    img.addEventListener("load", () => {
      if (img.naturalWidth && img.naturalHeight) {
        tile.style.aspectRatio = `${img.naturalWidth} / ${img.naturalHeight}`;
      }
    });
    if (m.thumbnail) {
      img.src = m.thumbnail;
    } else if (m.vimeoId) {
      loadVimeoThumbnail(m.vimeoId, img);
    }
    tile.appendChild(img);
    const play = document.createElement("span");
    play.className = "video-tile__play";
    play.setAttribute("aria-hidden", "true");
    play.textContent = "▶";
    tile.appendChild(play);
    return tile;
  }
  if (m.src) {
    const img = document.createElement("img");
    img.className = "media-fill";
    img.src = encodeURI(m.src);
    img.alt = m.alt || "";
    img.loading = "lazy";
    return img;
  }
  const icon = m.type === "video" ? "▶" : "▤";
  const div = document.createElement("div");
  div.className = "placeholder";
  div.setAttribute("data-icon", icon);
  div.setAttribute("data-label", m.label);
  return div;
}

// Used only inside the lightbox — this is where a video actually
// becomes a live embed, and an image is shown at full size.
function buildLightboxMedia(m) {
  if (m.embedUrl) {
    const wrap = document.createElement("div");
    wrap.className = "video-embed";
    const iframe = document.createElement("iframe");
    iframe.src = m.embedUrl;
    iframe.title = m.title || "Video";
    iframe.frameBorder = "0";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    wrap.appendChild(iframe);
    return wrap;
  }
  const img = document.createElement("img");
  img.className = "lightbox__img";
  img.src = m.src;
  img.alt = m.alt || "";
  return img;
}

// A project's full gallery, in display order: hero, then each
// section's media in turn, then the copy-column filler (if any),
// then any extraGallery breakout images. Only real assets
// (image/video) are enlargeable — plain placeholder tiles aren't
// part of the gallery.
function collectProjectMedia(project) {
  const list = [];
  if (project.hero && (project.hero.src || project.hero.embedUrl)) list.push(project.hero);
  SECTION_LABELS.forEach(([key]) => {
    const data = project[key];
    if (data && data.media) {
      data.media.forEach((m) => {
        if (m.src || m.embedUrl) list.push(m);
      });
    }
  });
  if (project.copyFiller) {
    const fillers = Array.isArray(project.copyFiller) ? project.copyFiller : [project.copyFiller];
    fillers.forEach((m) => {
      if (m.src || m.embedUrl) list.push(m);
    });
  }
  if (project.extraGallery) {
    project.extraGallery.forEach((m) => {
      if (m.src || m.embedUrl) list.push(m);
    });
  }
  return list;
}

// Wires a rendered tile to open the lightbox at its position within
// the project's gallery. No-ops for plain placeholders (nothing to enlarge).
function makeEnlargeable(tileEl, item, galleryList) {
  if (!item || (!item.src && !item.embedUrl)) return;
  const index = galleryList.indexOf(item);
  if (index === -1) return;
  tileEl.classList.add("is-clickable");
  tileEl.addEventListener("click", (e) => {
    e.stopPropagation();
    openLightbox(galleryList, index);
  });
}

function renderCards(container, projects) {
  container.innerHTML = "";
  projects.forEach((p) => {
    const card = document.createElement("button");
    card.className = "card";
    card.type = "button";

    const mediaWrap = document.createElement("div");
    mediaWrap.className = "card__media";
    mediaWrap.appendChild(placeholderTile(p.hero));

    const body = document.createElement("div");
    body.className = "card__body";
    body.innerHTML = `
      <span class="card__tag">${p.tag}</span>
      <h3 class="card__title">${p.title}</h3>
    `;

    card.appendChild(mediaWrap);
    card.appendChild(body);
    card.addEventListener("click", () => openProject(p));
    container.appendChild(card);
  });
}

/* ============================================================
   PROJECT CARD — shared template builder
   (Headache / Strategy / Hustle / Flex), used by both the
   top-3-projects modal and the inline randomiser results.
   ============================================================ */
const SECTION_LABELS = [
  ["headache", "The Headache"],
  ["hack", "The Hack"],
  ["hustle", "The Hustle"],
  ["flex", "The Flex"],
];

function buildProjectCard(project) {
  const card = document.createElement("div");
  card.className = "proj";
  const galleryList = collectProjectMedia(project);

  const hero = document.createElement("div");
  hero.className = "proj__hero";
  const heroTile = placeholderTile(project.hero);
  hero.appendChild(heroTile);
  makeEnlargeable(heroTile, project.hero, galleryList);
  card.appendChild(hero);

  const body = document.createElement("div");
  body.className = "proj__body";

  // One shared copy column (client name/title/role, then every
  // section's heading + text, stacked) and one shared media column
  // (every section's images/videos, in the same order) running
  // alongside it. Both start at the same height — the media column
  // begins level with the client-name tag, not further down. */
  const columns = document.createElement("div");
  columns.className = "proj__columns";

  const copyCol = document.createElement("div");
  copyCol.className = "proj__copy-col";

  const header = document.createElement("div");
  header.className = "proj__header";

  const tag = document.createElement("span");
  tag.className = "proj__tag";
  tag.textContent = project.year ? `${project.tag} — ${project.year}` : project.tag;
  header.appendChild(tag);

  const title = document.createElement("h3");
  title.className = "proj__title";
  title.textContent = project.title;
  header.appendChild(title);

  if (project.role) {
    const role = document.createElement("p");
    role.className = "proj__role";
    role.textContent = `Role: ${project.role}`;
    header.appendChild(role);
  }

  copyCol.appendChild(header);

  const mediaCol = document.createElement("div");
  mediaCol.className = "proj__media-col";

  SECTION_LABELS.forEach(([key, label]) => {
    const data = project[key];
    if (!data) return;

    const block = document.createElement("div");
    block.className = "proj__block";

    const heading = document.createElement("p");
    heading.className = "proj__section-title";
    heading.textContent = label;

    const text = document.createElement("p");
    text.className = "proj__section-text";
    text.textContent = data.text;

    block.appendChild(heading);
    block.appendChild(text);
    copyCol.appendChild(block);

    if (data.media && data.media.length) {
      data.media.forEach((m) => {
        const tile = placeholderTile(m);
        tile.classList.add("proj__media-item");
        mediaCol.appendChild(tile);
        makeEnlargeable(tile, m, galleryList);
      });
    }
  });

  // Fills the empty space left at the bottom of the copy column when
  // the media column (photos) runs taller than the copy (paragraphs).
  // Accepts either a single media item or an array, stacked in order.
  if (project.copyFiller) {
    const fillers = Array.isArray(project.copyFiller) ? project.copyFiller : [project.copyFiller];
    fillers.forEach((m) => {
      const fillerTile = placeholderTile(m);
      fillerTile.classList.add("proj__media-item", "proj__copy-filler");
      copyCol.appendChild(fillerTile);
      makeEnlargeable(fillerTile, m, galleryList);
    });
  }

  columns.appendChild(copyCol);
  if (mediaCol.children.length) {
    columns.appendChild(mediaCol);
  } else {
    columns.classList.add("proj__columns--text-only");
  }
  body.appendChild(columns);

  // Optional full-width breakout gallery (see extraGallery on the
  // project) — a side-by-side pair for when the copy runs out
  // before the media column does, instead of leaving the left side
  // empty while the right column keeps scrolling. Falls back to a
  // single full-width image if there's only one left over.
  if (project.extraGallery && project.extraGallery.length) {
    const extra = document.createElement("div");
    extra.className = "proj__extra-gallery";
    if (project.extraGallery.length === 1) {
      extra.classList.add("proj__extra-gallery--single");
    }
    project.extraGallery.forEach((m) => {
      const tile = placeholderTile(m);
      tile.classList.add("proj__media-item");
      extra.appendChild(tile);
      makeEnlargeable(tile, m, galleryList);
    });
    body.appendChild(extra);
  }

  card.appendChild(body);
  return card;
}

/* ============================================================
   MODAL — used only for the Top 3 Projects cards
   ============================================================ */
let modalBackdrop, modalContent;

function initModal() {
  modalBackdrop = document.getElementById("modal-backdrop");
  modalContent = document.getElementById("modal-content");

  document.getElementById("modal-close").addEventListener("click", closeProject);
  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeProject();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeProject();
  });
}

function openProject(project) {
  modalContent.innerHTML = "";
  modalContent.appendChild(buildProjectCard(project));
  modalBackdrop.classList.add("is-open");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  modalBackdrop.classList.remove("is-open");
  document.body.style.overflow = "";
}

/* ============================================================
   LIGHTBOX — tap any real image/video in a project to enlarge it.
   Arrows step through every asset in that project (hero + all four
   sections, in order); closing the lightbox drops you back on the
   project card/modal underneath, exactly where you left it.
   ============================================================ */
let lightboxEl, lightboxContent, lightboxPrev, lightboxNext;
let lightboxMedia = [];
let lightboxIndex = 0;

function initLightbox() {
  lightboxEl = document.getElementById("lightbox");
  lightboxContent = document.getElementById("lightbox-content");
  lightboxPrev = document.getElementById("lightbox-prev");
  lightboxNext = document.getElementById("lightbox-next");
  if (!lightboxEl) return;

  document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
  lightboxEl.addEventListener("click", (e) => {
    if (e.target === lightboxEl) closeLightbox();
  });
  lightboxPrev.addEventListener("click", () => showLightboxItem(lightboxIndex - 1));
  lightboxNext.addEventListener("click", () => showLightboxItem(lightboxIndex + 1));
  document.addEventListener("keydown", (e) => {
    if (!lightboxEl.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showLightboxItem(lightboxIndex - 1);
    if (e.key === "ArrowRight") showLightboxItem(lightboxIndex + 1);
  });
}

function openLightbox(mediaList, startIndex) {
  lightboxMedia = mediaList;
  showLightboxItem(startIndex);
  lightboxEl.classList.add("is-open");
}

function showLightboxItem(index) {
  if (index < 0 || index >= lightboxMedia.length) return;
  lightboxIndex = index;
  lightboxContent.innerHTML = "";
  lightboxContent.appendChild(buildLightboxMedia(lightboxMedia[index]));
  lightboxPrev.disabled = index === 0;
  lightboxNext.disabled = index === lightboxMedia.length - 1;
}

function closeLightbox() {
  lightboxEl.classList.remove("is-open");
  lightboxContent.innerHTML = "";
}

/* ============================================================
   OCCUPATIONAL PLEASURES — justified gallery
   Rows are hand-curated (SITE.occupationalPleasuresRows); each row's
   height is derived from the container width divided by the sum of
   its photos' aspect ratios, so rows always fill edge-to-edge with
   zero leftover gap. Fewer photos per row (or a lower aspect-ratio
   sum, e.g. portraits) naturally produces a taller row — that's what
   creates the big/medium/small hero-ish variation, no manual sizing
   needed. Recomputes on resize so it stays gapless responsively.
   ============================================================ */
function layoutJustifiedGallery(container, rows, items, gap) {
  const containerWidth = container.clientWidth;
  if (!containerWidth) return;
  container.querySelectorAll(".op-grid__row").forEach((row) => {
    const sumAspect = Array.from(row.children).reduce(
      (sum, tile) => sum + Number(tile.dataset.aspect),
      0
    );
    const rowGap = gap * (row.children.length - 1);
    const rowHeight = (containerWidth - rowGap) / sumAspect;
    row.style.height = `${rowHeight}px`;
    Array.from(row.children).forEach((tile) => {
      tile.style.width = `${rowHeight * Number(tile.dataset.aspect)}px`;
    });
  });
}

function initOccupationalPleasures() {
  const opGrid = document.getElementById("op-grid");
  if (!opGrid || !SITE.occupationalPleasures || !SITE.occupationalPleasuresRows) return;

  const itemsByNumber = SITE.occupationalPleasures;
  const rows = SITE.occupationalPleasuresRows;
  const gap = 8;

  // Flat reading-order list (matches row layout) so the lightbox's
  // prev/next steps through the gallery the same way it's displayed.
  const gallery = rows.flat().map((n) => itemsByNumber[n]);
  let galleryIndex = 0;

  opGrid.innerHTML = "";
  rows.forEach((rowNumbers) => {
    const rowEl = document.createElement("div");
    rowEl.className = "op-grid__row";
    rowNumbers.forEach((n) => {
      const item = itemsByNumber[n];
      const tile = document.createElement("div");
      tile.className = "op-grid__tile is-clickable";
      tile.dataset.aspect = item.aspect;
      const img = document.createElement("img");
      img.src = encodeURI(item.src);
      img.alt = item.alt || "";
      img.loading = "lazy";
      tile.appendChild(img);
      const thisIndex = galleryIndex++;
      tile.addEventListener("click", () => openLightbox(gallery, thisIndex));
      rowEl.appendChild(tile);
    });
    opGrid.appendChild(rowEl);
  });

  layoutJustifiedGallery(opGrid, rows, itemsByNumber, gap);
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => layoutJustifiedGallery(opGrid, rows, itemsByNumber, gap), 100);
  });
}

/* ============================================================
   RANDOMISERS
   ============================================================ */
function rollButton(btn) {
  btn.classList.add("is-rolling");
  setTimeout(() => btn.classList.remove("is-rolling"), 500);
}

// After the first click, a randomise button's label switches to
// "X again" and stays that way — a quiet nudge that it's re-rollable.
function setAgainLabel(btn, text) {
  const label = btn.querySelector(".btn-label");
  if (label) label.textContent = text;
}

// A simple prev/next image carousel — one image visible at a time,
// used inside the branded-experience result (not a grid, and not the
// lightbox — the write-up + gallery need to live in the same
// scrollable box together).
// Warms the browser cache for the images on either side of the
// current index, so clicking prev/next feels instant instead of
// waiting on a fresh network fetch each time.
function preloadNeighbors(items, index, getSrc) {
  [index - 1, index + 1].forEach((i) => {
    const item = items[(i + items.length) % items.length];
    if (!item) return;
    const src = getSrc(item);
    if (!src) return;
    const preloadImg = new Image();
    preloadImg.src = encodeURI(src);
  });
}

function buildImageCarousel(images) {
  const wrap = document.createElement("div");
  wrap.className = "img-carousel";

  const viewport = document.createElement("div");
  viewport.className = "img-carousel__viewport";
  const img = document.createElement("img");
  img.className = "img-carousel__img is-clickable";
  img.addEventListener("click", () => openLightbox(images, index));
  viewport.appendChild(img);
  wrap.appendChild(viewport);

  const controls = document.createElement("div");
  controls.className = "img-carousel__controls";
  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "img-carousel__arrow";
  prev.setAttribute("aria-label", "Previous image");
  prev.textContent = "‹";
  const counter = document.createElement("span");
  counter.className = "img-carousel__counter";
  const next = document.createElement("button");
  next.type = "button";
  next.className = "img-carousel__arrow";
  next.setAttribute("aria-label", "Next image");
  next.textContent = "›";
  controls.appendChild(prev);
  controls.appendChild(counter);
  controls.appendChild(next);
  wrap.appendChild(controls);

  let index = 0;
  function render() {
    const m = images[index];
    img.src = encodeURI(m.src);
    img.alt = m.alt || "";
    counter.textContent = `${index + 1} / ${images.length}`;
    preloadNeighbors(images, index, (m) => m.src);
  }
  prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    render();
  });
  next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    render();
  });
  render();

  return wrap;
}

// A slide is the colour photo on one side and its name + copy large
// and readable on the other — the copy is the actual point of this
// piece, not the photo, so it needs to read easily at a glance
// rather than being buried in a tiny full-page screenshot.
function buildColourSlideshow(slides) {
  const wrap = document.createElement("div");
  wrap.className = "colour-slideshow";

  const stage = document.createElement("div");
  stage.className = "colour-slideshow__stage";

  const img = document.createElement("img");
  img.className = "colour-slideshow__image is-clickable";
  const slideImages = slides.map((s) => s.image);
  img.addEventListener("click", () => openLightbox(slideImages, index));

  const textCol = document.createElement("div");
  textCol.className = "colour-slideshow__text-col";
  const name = document.createElement("h4");
  name.className = "colour-slideshow__name";
  const desc = document.createElement("p");
  desc.className = "colour-slideshow__description";
  textCol.appendChild(name);
  textCol.appendChild(desc);

  stage.appendChild(img);
  stage.appendChild(textCol);
  wrap.appendChild(stage);

  const controls = document.createElement("div");
  controls.className = "img-carousel__controls";
  const prev = document.createElement("button");
  prev.type = "button";
  prev.className = "img-carousel__arrow";
  prev.setAttribute("aria-label", "Previous colour");
  prev.textContent = "‹";
  const counter = document.createElement("span");
  counter.className = "img-carousel__counter";
  const next = document.createElement("button");
  next.type = "button";
  next.className = "img-carousel__arrow";
  next.setAttribute("aria-label", "Next colour");
  next.textContent = "›";
  controls.appendChild(prev);
  controls.appendChild(counter);
  controls.appendChild(next);
  wrap.appendChild(controls);

  let index = 0;
  function render() {
    const s = slides[index];
    img.src = encodeURI(s.image.src);
    img.alt = s.image.alt || "";
    name.textContent = s.name;
    desc.textContent = s.description;
    counter.textContent = `${index + 1} / ${slides.length}`;
    preloadNeighbors(slides, index, (s) => s.image.src);
  }
  prev.addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    render();
  });
  next.addEventListener("click", () => {
    index = (index + 1) % slides.length;
    render();
  });
  render();

  return wrap;
}

// -- Branded experience result: write-up first, then either a photo
// gallery with prev/next, or (for projects that carry colourSlides)
// a dedicated colour-and-copy slideshow. --
function buildBrandedExperienceResult(project) {
  const wrap = document.createElement("div");
  wrap.className = "writing-result";

  const label = document.createElement("p");
  label.className = "social-post__label";
  label.textContent = project.agency
    ? `${project.title} — ${project.client} x ${project.agency}`
    : `${project.title} — ${project.client}`;
  wrap.appendChild(label);

  const text = document.createElement("p");
  text.className = "social-post__text";
  text.textContent = project.text;
  wrap.appendChild(text);

  if (project.colourSlides && project.colourSlides.length) {
    wrap.appendChild(buildColourSlideshow(project.colourSlides));
  } else if (project.images && project.images.length) {
    wrap.appendChild(buildImageCarousel(project.images));
  }

  return wrap;
}

// -- Content writing result: the real article, hosted locally —
// heading/paragraph blocks in original order, then the article's
// own images as a simple gallery underneath. --
function buildContentWritingResult(article) {
  const wrap = document.createElement("div");
  wrap.className = "writing-result";

  const title = document.createElement("h3");
  title.className = "content-article__title";
  title.textContent = article.title;
  wrap.appendChild(title);

  // Images sit inline, at the same position they appear in the
  // original article — not dumped in a gallery at the end.
  article.blocks.forEach((block) => {
    if (block.type === "heading") {
      const h = document.createElement("h4");
      h.className = "content-article__heading";
      h.textContent = block.text;
      wrap.appendChild(h);
      return;
    }
    if (block.type === "image") {
      const img = document.createElement("img");
      img.className = "content-article__inline-image";
      img.src = encodeURI(block.src);
      img.alt = block.alt || "";
      img.loading = "lazy";
      wrap.appendChild(img);
      return;
    }
    if (block.type === "attribution") {
      const p = document.createElement("p");
      p.className = "content-article__attribution";
      p.appendChild(document.createTextNode(block.text + " "));
      const link = document.createElement("a");
      link.href = block.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = block.linkText;
      p.appendChild(link);
      wrap.appendChild(p);
      return;
    }
    const p = document.createElement("p");
    p.className = "content-article__paragraph";
    const lines = block.text.split("\n");
    lines.forEach((line, i) => {
      if (i > 0) p.appendChild(document.createElement("br"));
      p.appendChild(document.createTextNode(line));
    });
    wrap.appendChild(p);
  });

  return wrap;
}

// -- Writing randomiser (Brand experiences / Content writing toggle + shuffle) --
// Brand experiences sits on the left and is the default — "is-short"
// (thumb slid right) now means Content writing is selected instead.
let writingMode = "brand";

function initWritingRandomiser() {
  const toggle = document.getElementById("length-toggle");
  const btn = document.getElementById("writing-randomise-btn");
  const container = document.getElementById("writing-result");
  if (!toggle || !btn || !container) return;

  const nextContent = createFlatRotator(CONTENT_WRITING_POOL);
  const nextBrand = createFlatRotator(BRANDED_EXPERIENCE_POOL);

  toggle.addEventListener("click", () => {
    const isContent = toggle.classList.toggle("is-short");
    toggle.setAttribute("aria-checked", String(isContent));
    writingMode = isContent ? "content" : "brand";
    // Switching filters invalidates whatever's on screen — close the
    // result and reset the button label so it's obvious a fresh
    // shuffle is needed, instead of leaving a stale result up from
    // the filter that's no longer selected.
    container.classList.remove("is-visible");
    container.innerHTML = "";
    setAgainLabel(btn, "Shuffle");
  });

  btn.addEventListener("click", () => {
    rollButton(btn);
    const choice = writingMode === "brand" ? nextBrand() : nextContent();
    container.innerHTML = "";
    container.appendChild(
      writingMode === "brand" ? buildBrandedExperienceResult(choice) : buildContentWritingResult(choice)
    );
    // Brand experience posts (write-up + one image) are much shorter
    // than a full article — give them a taller cap so they fit without
    // scrolling, while long-form articles keep the shorter, intentionally
    // scrollable box.
    container.classList.toggle("randomiser__result--scroll-tall", writingMode === "brand");
    container.classList.add("is-visible");
    container.scrollTop = 0;
    setAgainLabel(btn, "Shuffle again");
  });
}

// -- Shared rotation engine for the socials + real-world randomisers --
// Every asset (post) shows exactly once before any repeat — not just
// "not the same one twice in a row," but a full no-repeat pass across
// every client's every post — while still avoiding the same client
// back-to-back wherever that's structurally possible. Classic
// "reorganize so no two adjacent are equal" problem: at each step,
// greedily take the next post from whichever remaining client has
// the most posts left (excluding the client just used, if possible).
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function buildNoRepeatSequence(clients) {
  const pools = clients.map((client) => ({ client, items: shuffleArray(client.posts.slice()) }));
  const sequence = [];
  let lastClientId = null;
  let remaining = pools.reduce((sum, p) => sum + p.items.length, 0);

  while (remaining > 0) {
    let candidates = pools.filter((p) => p.items.length > 0 && p.client.id !== lastClientId);
    if (candidates.length === 0) candidates = pools.filter((p) => p.items.length > 0);
    candidates.sort((a, b) => b.items.length - a.items.length);
    const chosen = candidates[0];
    sequence.push({ client: chosen.client, post: chosen.items.shift() });
    lastClientId = chosen.client.id;
    remaining--;
  }
  return sequence;
}

// Wraps buildNoRepeatSequence in a stateful "give me the next one"
// function, regenerating a fresh no-repeat pass once the current one
// is exhausted, and guarding the seam between passes so the last
// item of one pass can't be immediately followed by the same client
// (or the exact same post, if that client only has one).
function createRotator(clients) {
  let sequence = [];
  let lastClientId = null;

  return function next() {
    if (sequence.length === 0) {
      sequence = buildNoRepeatSequence(clients);
      if (sequence.length > 1 && sequence[0].client.id === lastClientId) {
        const idx = sequence.findIndex((s) => s.client.id !== lastClientId);
        if (idx > 0) [sequence[0], sequence[idx]] = [sequence[idx], sequence[0]];
      }
    }
    const item = sequence.shift();
    lastClientId = item.client.id;
    return item;
  };
}

// Same no-repeat-until-exhausted guarantee as createRotator, but for
// a flat pool (no client grouping) — used by the writing randomiser's
// two pools. A fresh shuffled pass is drawn once the current one runs
// out, with a seam guard so the last item of one pass can't
// immediately repeat as the first of the next.
function createFlatRotator(items) {
  let sequence = [];
  let lastId = null;

  return function next() {
    if (sequence.length === 0) {
      sequence = shuffleArray(items.slice());
      if (sequence.length > 1 && sequence[0].id === lastId) {
        const idx = sequence.findIndex((s) => s.id !== lastId);
        if (idx > 0) [sequence[0], sequence[idx]] = [sequence[idx], sequence[0]];
      }
    }
    const item = sequence.shift();
    lastId = item.id;
    return item;
  };
}

// A post's media renders as one big tile (single post) or every
// item in the campaign shown together (campaign post) — either way,
// each real image/video is enlargeable and steps through just that
// post's own items in the lightbox, not the client's whole archive.
function buildSocialPost(client, post) {
  const wrap = document.createElement("div");
  wrap.className = "social-post";

  const label = document.createElement("p");
  label.className = "social-post__label";
  label.textContent = post.label ? `${client.name} — ${post.label}` : client.name;
  wrap.appendChild(label);

  const galleryList = post.media.filter((m) => m.src || m.embedUrl);
  const grid = document.createElement("div");
  grid.className = post.media.length > 1 ? "social-post__grid" : "social-post__single";
  post.media.forEach((m) => {
    const tile = placeholderTile(m);
    tile.classList.add("social-post__item");
    grid.appendChild(tile);
    makeEnlargeable(tile, m, galleryList);
  });
  wrap.appendChild(grid);

  return wrap;
}

// Same idea as buildSocialPost, but IRL clients also carry a
// write-up (and sometimes an agency credit), and their media reads
// better as a proper gallery than a grid of equal-sized tiles:
// - images only: the first image is the key visual (KV), shown big,
//   with the rest as a thumbnail strip underneath.
// - images + video: two columns — the image gallery (KV first) on
//   the left, the video(s) on the right.
function buildIRLPost(client, post) {
  const wrap = document.createElement("div");
  wrap.className = "social-post realworld-post";

  const label = document.createElement("p");
  label.className = "social-post__label";
  label.textContent = client.agency ? `${client.name} — ${client.agency}` : client.name;
  wrap.appendChild(label);

  const text = document.createElement("p");
  text.className = "social-post__text";
  text.textContent = post.text;
  wrap.appendChild(text);

  const images = post.media.filter((m) => m.type === "image");
  const videos = post.media.filter((m) => m.type === "video");
  const galleryList = post.media.filter((m) => m.src || m.embedUrl);

  function buildImageGallery() {
    const galleryWrap = document.createElement("div");
    galleryWrap.className = "realworld-post__gallery";
    const [kv, ...rest] = images;
    const kvTile = placeholderTile(kv);
    kvTile.classList.add("realworld-post__kv");
    // Some KV photos (e.g. an unusually square one) read as oversized
    // next to the section's mostly-landscape heroes — kvScale lets a
    // specific image opt into a smaller display width.
    if (kv.kvScale) kvTile.style.width = `${kv.kvScale * 100}%`;
    makeEnlargeable(kvTile, kv, galleryList);
    galleryWrap.appendChild(kvTile);
    if (rest.length) {
      const thumbs = document.createElement("div");
      thumbs.className = "realworld-post__thumbs";
      rest.forEach((m) => {
        const tile = placeholderTile(m);
        tile.classList.add("realworld-post__item");
        makeEnlargeable(tile, m, galleryList);
        thumbs.appendChild(tile);
      });
      galleryWrap.appendChild(thumbs);
    }
    return galleryWrap;
  }

  function buildVideoCol() {
    const videoCol = document.createElement("div");
    videoCol.className = "realworld-post__video-col";
    videos.forEach((v) => {
      const tile = placeholderTile(v);
      tile.classList.add("realworld-post__item");
      makeEnlargeable(tile, v, galleryList);
      videoCol.appendChild(tile);
    });
    return videoCol;
  }

  const mediaWrap = document.createElement("div");
  mediaWrap.className = "realworld-post__media";
  if (images.length && videos.length) {
    mediaWrap.classList.add("realworld-post__split");
    mediaWrap.appendChild(buildImageGallery());
    mediaWrap.appendChild(buildVideoCol());
  } else if (images.length) {
    mediaWrap.appendChild(buildImageGallery());
  } else if (videos.length) {
    mediaWrap.appendChild(buildVideoCol());
  }
  wrap.appendChild(mediaWrap);

  return wrap;
}

// -- Real world randomiser (rotates clients, one write-up + gallery at a time) --
function initRealWorldRandomiser() {
  const btn = document.getElementById("realworld-randomise-btn");
  const container = document.getElementById("realworld-result");
  if (!btn || !container) return;
  const nextRealWorld = createRotator(REALWORLD_CLIENTS);
  btn.addEventListener("click", () => {
    rollButton(btn);
    const { client, post } = nextRealWorld();
    container.innerHTML = "";
    container.appendChild(buildIRLPost(client, post));
    container.classList.add("is-visible");
    setAgainLabel(btn, "Boogie again");
  });
}

// -- Socials randomiser (rotates clients, one post at a time — a post
// is either a single image/video, or every image in a campaign
// folder shown together) --
function initSocialsRandomiser() {
  const btn = document.getElementById("socials-randomise-btn");
  const container = document.getElementById("socials-result");
  if (!btn || !container) return;
  const nextSocial = createRotator(SOCIALS_CLIENTS);
  btn.addEventListener("click", () => {
    rollButton(btn);
    const { client, post } = nextSocial();
    container.innerHTML = "";
    container.appendChild(buildSocialPost(client, post));
    container.classList.add("is-visible");
    setAgainLabel(btn, "Jive again");
  });
}

/* ============================================================
   HERO / IDENTITY
   ============================================================ */
function renderIdentity() {
  document.querySelectorAll("[data-site-name]").forEach((el) => (el.textContent = SITE.name));
  document.querySelectorAll("[data-site-pronunciation]").forEach((el) => (el.textContent = SITE.namePronunciation));
  document.querySelectorAll("[data-site-role]").forEach((el) => (el.textContent = SITE.role));
  document.querySelectorAll("[data-site-hero-bio]").forEach((el) => (el.textContent = SITE.heroBio));
  document.querySelectorAll("[data-bitchington-link]").forEach((el) => (el.href = SITE.bitchingtonUrl));
}

/* ============================================================
   INIT
   ============================================================ */
document.addEventListener("DOMContentLoaded", () => {
  renderIdentity();

  const scrollCueBtn = document.getElementById("scroll-cue-btn");
  const workSection = document.getElementById("work");
  if (scrollCueBtn && workSection) {
    scrollCueBtn.addEventListener("click", () => {
      workSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  const cardsContainer = document.getElementById("top-projects");
  if (cardsContainer) renderCards(cardsContainer, TOP_PROJECTS);

  initLightbox();

  if (document.getElementById("modal-backdrop")) {
    initModal();
    initWritingRandomiser();
    initRealWorldRandomiser();
    initSocialsRandomiser();
  }

  const aboutBio = document.getElementById("about-bio");
  if (aboutBio) {
    aboutBio.innerHTML = "";
    SITE.aboutBio.forEach((paragraph) => {
      const p = document.createElement("p");
      p.className = "about-bio__paragraph";
      p.textContent = paragraph;
      aboutBio.appendChild(p);
    });
  }

  initOccupationalPleasures();

  const workExperience = document.getElementById("work-experience");
  if (workExperience) {
    workExperience.innerHTML = "";
    SITE.workExperience.forEach((job) => {
      const entry = document.createElement("div");
      entry.className = "job-entry";

      const years = document.createElement("span");
      years.className = "job-entry__years";
      years.textContent = job.years;
      entry.appendChild(years);

      const header = document.createElement("div");
      header.className = "job-entry__header";
      const title = document.createElement("h3");
      title.className = "job-entry__title";
      title.textContent = job.title;
      const company = document.createElement("p");
      company.className = "job-entry__company";
      company.textContent = job.type ? `${job.company} — ${job.type}` : job.company;
      header.appendChild(title);
      header.appendChild(company);

      if (job.intro) {
        const intro = document.createElement("p");
        intro.className = "job-entry__intro";
        intro.textContent = job.intro;
        header.appendChild(intro);
      }

      if (job.bullets && job.bullets.length) {
        const list = document.createElement("ul");
        list.className = "job-entry__bullets";
        job.bullets.forEach((bullet) => {
          const li = document.createElement("li");
          // Bullets can lead with a **bold label** — split it out into
          // its own <strong> so the label reads as a mini-heading.
          const match = bullet.match(/^\*\*(.+?):\*\*\s*(.*)$/);
          if (match) {
            const strong = document.createElement("strong");
            strong.textContent = `${match[1]}: `;
            li.appendChild(strong);
            li.appendChild(document.createTextNode(match[2]));
          } else {
            li.textContent = bullet;
          }
          list.appendChild(li);
        });
        header.appendChild(list);
      }

      entry.appendChild(header);
      workExperience.appendChild(entry);
    });
  }

  const education = document.getElementById("education");
  if (education) {
    education.innerHTML = "";
    SITE.education.forEach((edu) => {
      const entry = document.createElement("div");
      entry.className = "edu-entry";

      const years = document.createElement("span");
      years.className = "edu-entry__years";
      years.textContent = edu.years;
      entry.appendChild(years);

      const header = document.createElement("div");
      header.className = "edu-entry__header";
      const title = document.createElement("h3");
      title.className = "edu-entry__title";
      title.textContent = edu.title;
      const school = document.createElement("p");
      school.className = "edu-entry__school";
      school.textContent = edu.school;
      header.appendChild(title);
      header.appendChild(school);
      entry.appendChild(header);

      education.appendChild(entry);
    });
  }

  const skills = document.getElementById("skills");
  if (skills && SITE.skills) {
    skills.innerHTML = "";
    const list = document.createElement("ul");
    list.className = "skills-list";
    SITE.skills.items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
    skills.appendChild(list);
    if (SITE.skills.aside) {
      const aside = document.createElement("p");
      aside.className = "skills-aside";
      aside.textContent = SITE.skills.aside;
      skills.appendChild(aside);
    }
  }

  const clients = document.getElementById("clients");
  if (clients) {
    clients.innerHTML = "";
    SITE.clients.forEach((client) => {
      const chip = document.createElement("div");
      chip.className = "client-chip";
      if (client.logo) {
        const img = document.createElement("img");
        img.src = client.logo;
        img.alt = client.name;
        img.loading = "lazy";
        if (client.logoScale) {
          img.style.maxHeight = `${40 * client.logoScale}px`;
        }
        chip.appendChild(img);
      } else {
        chip.textContent = client.name;
      }
      clients.appendChild(chip);
    });
    // Padded to a multiple of 20 (divisible by every column count the
    // grid uses across breakpoints — 5, 4, 2) with invisible fillers,
    // so the grid stays a clean rectangle instead of a ragged last row.
    const target = Math.ceil(SITE.clients.length / 20) * 20;
    for (let i = SITE.clients.length; i < target; i++) {
      const filler = document.createElement("div");
      filler.className = "client-chip client-chip--filler";
      filler.setAttribute("aria-hidden", "true");
      clients.appendChild(filler);
    }
  }

  const contactList = document.getElementById("contact-list");
  if (contactList) {
    contactList.innerHTML = `
      <li>Email — <a href="mailto:${SITE.contact.email}">${SITE.contact.email}</a></li>
      <li>LinkedIn — <a href="${SITE.contact.linkedin}" target="_blank" rel="noopener noreferrer">${SITE.contact.linkedin.replace("https://www.", "")}</a></li>
      <li>Substack — <a href="https://${SITE.contact.substack}" target="_blank" rel="noopener noreferrer">${SITE.contact.substack}</a></li>
    `;
  }
});
