/* ============================================================
   SITE CONTENT — edit anything in this file to update the site.
   Nothing here touches layout or design, just words + media refs.
   Media (images/videos) are still placeholder tiles — swap the
   media() calls for real assets whenever those are ready.
   ============================================================ */

// ---- Core identity (hero + about) ----
const SITE = {
  name: "Santine Pillay",
  namePronunciation: "~ sun • tee • nee ~",
  role: "Creative Strategist",
  heroBio:
    "10 years in the biz of crafting brand narratives that blend distinct copy with strategic performance. Big budget or no budget, I build decadent worlds from traditional to innovative mediums designed to give brands an unfair advantage.",
  heroAka: "Call me Bitchington after hours. It's an alter ego for my pop culture newsletter.",
  bitchingtonUrl: "https://bitchington.substack.com",
  aboutBio: [
    "Who runs the world? Beyoncé, surely. But also, stories.",
    "As a 10-year creative veteran, I've only ever cared about one thing: narrative. Focus on the story first, and the medium to express it second. Yeah, we could do OOH. But we could also delight with a song, a game, an escape room, an interactive art experience.",
    "I specialise in flavourful brand voice so you'll always beat the AI allegations, but plot twist… AI will be a part of the process.",
    "As a writer, I inform, entertain, enthrall. As a strategist, I'll Leverage Data To Drive Actionable Insights With Meaningful Impact. Translation: my stellar Meta ads track record speaks for itself. Iteration after iteration with a healthy nCAC till I know 50-year-old men a little too intimately.",
    "Online, offline, a million dollars, or one dollar… I'll still give you an unfair advantage.",
  ],
  aboutBitchington: {
    heading: "After hours as Bitchington",
    text: "On weekends, I go by Bitchington. It's my pop culture newsletter where I bring readers new music, trends and gossip that shook my world. Bitchington is fuelled by an obsession to relate to the unrelatable lives of the rich and famous. It's a passion project that nourishes my soul and inspires my 9-to-5.",
  },
  // Aspect ratios (w/h) are the real pixel dimensions of each photo —
  // the justified-gallery layout below needs them upfront to size
  // rows without waiting on image load.
  occupationalPleasures: (() => {
    const ASPECT = {
      1: 1.3333, 2: 0.75, 3: 1.3333, 4: 0.75, 5: 1.5504, 6: 1.3675,
      7: 0.75, 8: 1.0, 9: 0.75, 10: 1.5009, 11: 0.75, 12: 1.3333,
      13: 1.7786, 14: 0.7505, 15: 1.5009, 16: 0.5625, 17: 0.75,
      18: 0.75, 19: 1.3333, 20: 1.3333, 21: 1.3333, 22: 0.75, 23: 1.4995,
    };
    const items = {};
    Object.keys(ASPECT).forEach((n) => {
      items[n] = {
        src: `assets/images/occupational-pleasures/op-${n}.jpg`,
        alt: "Occupational pleasures",
        aspect: ASPECT[n],
      };
    });
    return items;
  })(),
  // Curated justified-gallery rows (image numbers, top to bottom,
  // left to right) — hand-picked to feature the best shots bigger
  // and mix vertical/horizontal photos within each row.
  occupationalPleasuresRows: [
    [8, 15, 16, 23],
    [10, 14, 4, 1, 12],
    [9, 11, 17, 18, 6],
    [2, 7, 22, 3, 19, 5, 13, 20, 21],
  ],
  workExperience: [
    {
      years: "2024–Present",
      title: "Senior Copywriter",
      company: "Ordinary Folk (noah & zoey)",
      type: "Telehealth start-up",
      intro: "Somehow, I persuaded an erectile dysfunction clinic that yes, indeed, they should hire a lesbian to convince men to put their shame aside and seek help. Here's how I rose to the occasion:",
      bullets: [
        "**Brand Vision & Voice:** Dismantled the stigma of erectile dysfunction through an unapologetically witty brand voice that used humour to normalise men's healthcare.",
        "**Strategy:** Drove 7+ product rollouts (SG, HK, JP) and maintained strict nCAC targets by translating complex medical data into high-volume Meta ads, landing pages, and eDMs.",
        "**CRM & AI:** Cut production time by 40% via AI workflows; drove 6-month subscription upgrades through data-driven APAC retention flows with 50k+ active users.",
      ],
    },
    {
      years: "2022–2024",
      title: "Senior Copywriter",
      company: "Gush",
      type: "Air-purifying paint start-up",
      intro: "Some say they could sell ice to an eskimo. Well, I convinced people that watching air-purifying wall paint dry was the ultimate romantic gesture for your relationship, and the planet. Here's how I pulled that off:",
      bullets: [
        "**Verbal Identity:** Spearheaded the tone of voice for a wellness and science rebrand, translating complex R&D into a romantic language tone and developing core taglines like \"a love letter to your walls\".",
        "**Content Strategy:** Captured local wellness market share via full-funnel content calendars across web, eDMs, and social campaigns driven by competitor benchmarking.",
      ],
    },
    {
      years: "2021–2022",
      title: "Copywriter",
      company: "UltraSuperNew",
      type: "Creative agency & art gallery",
      intro: "I was courted by the GM and CD of this boutique agency-slash-gallery for my perfectly niche set of skills — subversive yet versatile ad copywriting, with the street cred of urban art. Here's how it came together:",
      bullets: [
        "**Creative Ideation & Execution:** Delivered full-scale campaign concepts and pitch decks for diverse demographics (Gen Z to families) through high-level ideation and distinct copywriting.",
      ],
    },
    {
      years: "2018–2021",
      title: "Content Lead",
      company: "Kult Studio & Art Gallery",
      type: "Experiential agency & art gallery",
      intro: "Kult is the defining agency and gallery of its era, responsible for groundbreaking experimental (and experiential) work Singapore has ever seen. I had the absolute privilege of leading that creative chaos:",
      bullets: [
        "**The 5-in-1 Creative:** Launched immersive physical exhibitions and digital activations as a hybrid creative leading conceptualisation, writing, physical builds, and client liaison. All while cementing Kult's cult status with a truly inimitable brand voice. And of course, building a Shopify store from nothing (manual stocktaking included).",
      ],
    },
    {
      years: "2016–2018",
      title: "Junior Content Strategist",
      company: "PROTOCOL",
      type: "Social media agency",
      intro: "Here's where I first discovered I was a natural strategist, but arguably an even better writer.",
      bullets: [
        "**Content Strategy & Copy:** Ran 8+ brand social media pages with end-to-end project and community management, content strategy, copywriting and driving strong collaboration alongside designers.",
      ],
    },
  ],
  education: [
    { years: "2013–2016", title: "Bachelor of Arts in Mass Communication & Public Relations (Double Major)", school: "Northumbria University, Newcastle" },
    { years: "2011–2012", title: "A-Levels", school: "Tampines Junior College" },
  ],
  skills: {
    items: [
      "Copywriting",
      "Creative/brand strategy",
      "Social media content strategy",
      "Performance/paid social",
      "Project management",
      "AI workflows",
      "Production (events & video)",
      "CRM flows (Customer.io, Mailchimp)",
    ],
    aside: "+ Unnaturally in-depth pop culture knowledge",
  },
  clients: [
    { name: "Aldo", logo: "assets/images/clients/aldo.png" },
    { name: "AMC Asia", logo: "assets/images/clients/amc-asia.png" },
    { name: "Anlene", logo: "assets/images/clients/anlene.png" },
    { name: "Club Med", logo: "assets/images/clients/club-med.png" },
    { name: "Cyber Security Agency", logo: "assets/images/clients/csa.png" },
    { name: "Gush", logo: "assets/images/clients/gush.png" },
    { name: "HUGO", logo: "assets/images/clients/hugo.png", logoScale: 1.4 },
    { name: "Leica", logo: "assets/images/clients/leica.png", logoScale: 1.8 },
    { name: "MCCY", logo: "assets/images/clients/mccy.png" },
    { name: "Munich Automobiles", logo: "assets/images/clients/munich-automobiles.png", logoScale: 1.4 },
    { name: "noah", logo: "assets/images/clients/noah.png", logoScale: 0.75 },
    { name: "Renault", logo: "assets/images/clients/renault.png", logoScale: 2 },
    { name: "Resorts World Sentosa", logo: "assets/images/clients/resorts-world-sentosa.png" },
    { name: "Samsung", logo: "assets/images/clients/samsung.png" },
    { name: "SEASONS", logo: "assets/images/clients/seasons.png" },
    { name: "Sembawang GRC", logo: "assets/images/clients/sembawang-grc.png", logoScale: 2 },
    { name: "Standard Chartered", logo: "assets/images/clients/standard-chartered.png", logoScale: 1.6 },
    { name: "Sundance Asia", logo: "assets/images/clients/sundance-asia.png", logoScale: 1.8 },
    { name: "zoey", logo: "assets/images/clients/zoey.png" },
  ],
  contact: {
    email: "santinepillay@gmail.com",
    linkedin: "https://www.linkedin.com/in/santinepillay/",
    substack: "bitchington.substack.com",
  },
};

// ---- Placeholder media helper ----
// type: "image" | "video", label: what shows on the placeholder tile
function media(type, label) {
  return { type, label };
}

// ---- Real media helper — use once you have an actual file ----
// src: path relative to index.html, e.g. "assets/images/my-photo.jpg"
function image(src, alt) {
  return { type: "image", src, alt };
}

// ---- Real video embed — YouTube or Vimeo ----
// Pass the normal watch/share URL, this converts it to the embed form:
// YouTube: https://www.youtube.com/watch?v=XXXX -> https://www.youtube.com/embed/XXXX
// Vimeo:   https://vimeo.com/XXXX               -> https://player.vimeo.com/video/XXXX
// Also works out a real thumbnail so the tile shows the actual video,
// not a generic placeholder — YouTube's is a predictable URL; Vimeo's
// is fetched at render time (see loadVimeoThumbnail in main.js).
function video(url, title) {
  let embedUrl = url;
  let thumbnail = null;
  let vimeoId = null;
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([\w-]+)/);
  const ytTime = url.match(/[?&]t=(\d+)s?/);
  const vimeo = url.match(/vimeo\.com\/(\d+)/);
  if (yt) {
    // youtube-nocookie.com (privacy-enhanced mode) instead of youtube.com —
    // same embed, but a handful of domain/permission edge cases behave
    // more leniently here.
    embedUrl = `https://www.youtube-nocookie.com/embed/${yt[1]}${ytTime ? `?start=${ytTime[1]}` : ""}`;
    thumbnail = `https://img.youtube.com/vi/${yt[1]}/hqdefault.jpg`;
  } else if (vimeo) {
    embedUrl = `https://player.vimeo.com/video/${vimeo[1]}`;
    vimeoId = vimeo[1];
  }
  return { type: "video", embedUrl, title, thumbnail, vimeoId };
}

/* ============================================================
   PROJECT TEMPLATE SHAPE (used by all three content pools below)
   {
     id, title, tag, year, role (optional),
     hero: media(...),
     headache: { text, media: [media(...), ...] },
     hack:     { text, media: [media(...), ...] },
     hustle:   { text, media: [media(...), ...] },
     flex:     { text, media: [media(...), ...] },
   }
   ============================================================ */

// ---- Top 3 featured projects (homepage) ----
const TOP_PROJECTS = [
  {
    id: "top-1",
    title: "Kumar's “Man Enough” Podcast",
    tag: "Noah",
    year: "",
    role: "Creative Strategist and Copywriter",
    hero: image("assets/images/kumar-man-enough-podcast.png", "The Impact of Morning Wood podcast episode art with Kumar and host"),
    headache: {
      text: "Meta ads were burning budget. We couldn't reach new audiences without paying a premium, causing our nCACs to spike.",
      media: [],
    },
    hack: {
      text: "We jumped onto comedian Kumar's podcast to humanise the brand and tap a fresh demographic. His built-in credibility made him the perfect guy to talk about erectile dysfunction without the shame.",
      media: [],
    },
    hustle: {
      text: "I took complete creative control of the partnership. I directed the scripts and ad cutdowns to seamlessly blend Noah's clinical goals with Kumar's unapologetic style.",
      media: [
        video("https://www.youtube.com/watch?v=LwigU5GRLek&t=11s", "Kumar's Man Enough podcast clip 1"),
        video("https://www.youtube.com/watch?v=Wcv53iBgkAc", "Kumar's Man Enough podcast clip 2"),
      ],
    },
    flex: {
      text: "The campaign flooded our funnel with fresh eyes, racking up 63,000 organic views on YouTube—even prompting women to get help for their husbands. This successfully slashed our nCAC to under $160 while driving higher overall conversions.",
      media: [],
    },
  },
  {
    id: "top-2",
    title: "The “Better” Campaign",
    tag: "noah",
    year: "",
    role: "Creative Lead",
    hero: image("assets/images/noah-better-campaign-hero.jpg", "Model with a half-shaved mohawk and sunglasses for noah's Better campaign"),
    headache: {
      text: "Men’s health is usually a sea of chiselled models. We needed to genuinely humanise the brand and bring its tagline, ”Better Health, Better You”, to life by proving that progress matters more than perfection.",
      media: [],
    },
    hack: {
      text: "We leaned hard into the absurd reality of the \"everyman.\" We used highly subversive humour Noah is known for to strip away the shame surrounding erectile dysfunction, hair loss, and weight loss.",
      media: [],
    },
    hustle: {
      text: "I cast the talent, procured wardrobe and fully directed this glorious photoshoot. I personally stuffed shorts for a visibly larger bulge, shaved a model's head into increasingly ridiculous styles, and got a middle-aged man to agree to confidently bare his gut in tighty-whities.",
      carousel: true,
      media: [
        image("assets/images/noah-better-sex.jpg", "Better Sex — model in athletic wear for noah's Better campaign"),
        image("assets/images/noah-better-hair-2.jpg", "Better Hair — model mid-shave with a mullet for noah's Better campaign"),
        image("assets/images/noah-better-hair-1.jpg", "Better Hair — model freshly bald for noah's Better campaign"),
        image("assets/images/noah-better-hair-4.jpg", "Better Hair — model freshly bald in the full campaign look for noah's Better campaign"),
        image("assets/images/noah-better-shape.jpg", "Better Shape — model in white underwear for noah's Better campaign"),
      ],
    },
    flex: {
      text: "We completely broke the sterile healthcare mould. While originally conceptualised as a standalone campaign, this unapologetically authentic aesthetic was so effective it successfully pivoted to become the foundational visual library that feeds Noah's entire digital ecosystem today.",
      media: [],
    },
  },
  {
    id: "top-3",
    title: "The noah Man Power Challenge",
    tag: "noah",
    year: "",
    role: "Creative Lead",
    hero: image("assets/images/noah-man-power-challenge.png", "Man Power Challenge retro arcade racing game title screen"),
    headache: {
      text: "Launching testosterone in SG faced strict regulations and a massive education gap. Our 40+ male demographic couldn't pronounce its name, let alone know what it does.",
      media: [],
    },
    hack: {
      text: "We bypassed medical red tape by turning a key symptom — brain fog — into a retro arcade game. We weaponised their competitive energy to legally educate them.",
      media: [],
    },
    hustle: {
      text: "I vibe-coded the game from scratch using Claude (idea to demo in 15 minutes), art-directed the visuals, wrote every word, and led the creative strategy for the influencer campaign.",
      media: [video("https://youtube.com/shorts/sospDZArCdc?feature=share", "Man Power Challenge gameplay demo")],
    },
    flex: {
      text: "We hacked a legal grey area to drive massive awareness. Men fiercely competed for a prize while accidentally learning the signs of low T.",
      media: [],
    },
  },
  {
    id: "top-4",
    title: "Leica Playground 2019",
    tag: "Leica",
    year: "",
    role: "Creative Lead & Producer",
    hero: image("assets/images/leica-playground.png", "Attendee photographing the Leica Playground wall installation with instax prints"),
    headache: {
      text: "Leica needed a massive lifestyle event for their second ‘Leica Playground’. The mandate was clear: break out of their traditional demographic and capture a younger audience.",
      media: [image("assets/images/leica-poster.webp", "Leica Playground event poster with schedule and sponsors")],
    },
    hack: {
      text: "We anchored the event around “Observation,” turning Design Orchard into a photographer's wet dream. We used live music and gamified spaces to get youth living in the moment with their cameras out.",
      media: [image("assets/images/leica-event-umbrellas.webp", "Attendees under branded Leica Playground umbrellas at the event")],
    },
    hustle: {
      text: "I conceptualised and produced the entire experiential ecosystem — weaving together AR treasure hunts, glamping, and art installations.",
      media: [video("https://youtu.be/Tw1ZHRsIoRA", "Leica Playground event film")],
    },
    flex: {
      text: "We successfully transformed a heritage brand into a culturally relevant force for a new generation. In just a single day, the event pulled upwards of 1,000 attendees and saw fully booked workshops. Add to that, our Leica Sofort activation went unexpectedly viral, drawing massive queues of youth ready to test-drive the camera.",
      media: [],
    },
    // The media column runs much taller than the copy column (photos
    // vs. short paragraphs), so the copy side ends with a lot of
    // empty space below "The Flex". This drops one image into the
    // bottom of the copy column itself to fill that gap.
    copyFiller: [
      image("assets/images/leica-photoshoot-bts.webp", "Behind the scenes of the campaign photoshoot"),
      image("assets/images/leica-glamping-lounge.webp", "Glamping lounge zone at the Leica Playground event"),
    ],
  },
];

// ---- "I wanna see how you write" — Brand experience pool: a
// write-up, then a photo gallery (prev/next) per project ----
const BRANDED_EXPERIENCE_POOL = [
  {
    id: "gush-website",
    title: "Gush website",
    client: "Gush",
    agency: null,
    text: "Based on the refreshed creative direction by design agency Pentagram, I rewrote Gush's e-commerce website to be thick on the science yet conversational and easy to understand.",
    images: [
      image("assets/images/writing/gush-website/1.jpg", "Gush website"),
      image("assets/images/writing/gush-website/2.jpg", "Gush website"),
      image("assets/images/writing/gush-website/3.jpg", "Gush website"),
      image("assets/images/writing/gush-website/4.jpg", "Gush website"),
      image("assets/images/writing/gush-website/5.jpg", "Gush website"),
      image("assets/images/writing/gush-website/6.jpg", "Gush website"),
      image("assets/images/writing/gush-website/7.jpg", "Gush website"),
      image("assets/images/writing/gush-website/8.jpg", "Gush website"),
      image("assets/images/writing/gush-website/9.jpg", "Gush website"),
      image("assets/images/writing/gush-website/10.jpg", "Gush website"),
      image("assets/images/writing/gush-website/11.jpg", "Gush website"),
    ],
  },
  {
    id: "odyssey",
    title: "Odyssey",
    client: "Singapore Chinese Cultural Centre",
    agency: "Kult",
    text: "We built an interactive web game experience based on the story of Romance of the Three Kingdoms. Heavily copy led, the process required intensive research about the novel to accurately depict its enduring legacy. I also wrote original poetry for each chapter, intended to be easily digestible for all audience. Chinese copy was then adapted based on the English.",
    images: [
      image("assets/images/writing/odyssey/2.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/3.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/4.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/5.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/6.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/7.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/8.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/9.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/10.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/11.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/12.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/13.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/14.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/15.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/16.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/17.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/18.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/19.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/20.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/21.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/22.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/23.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/24.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/25.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/26.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
      image("assets/images/writing/odyssey/27.jpg", "Odyssey — Singapore Chinese Cultural Centre"),
    ],
  },
  {
    id: "super-xfi",
    title: "This is your brain on Super X-FI",
    client: "Creative",
    agency: "Kult",
    text: "Written for Creative SXFI's rebranding initiative for their website to position the brand as more youthful and approachable. The selling point is its unique headphone technology. This is the first draft, without final visuals.",
    images: [
      image("assets/images/writing/super-xfi/1.jpg", "This is your brain on Super X-FI"),
      image("assets/images/writing/super-xfi/2.jpg", "This is your brain on Super X-FI"),
      image("assets/images/writing/super-xfi/3.jpg", "This is your brain on Super X-FI"),
      image("assets/images/writing/super-xfi/4.jpg", "This is your brain on Super X-FI"),
      image("assets/images/writing/super-xfi/5.jpg", "This is your brain on Super X-FI"),
      image("assets/images/writing/super-xfi/6.jpg", "This is your brain on Super X-FI"),
      image("assets/images/writing/super-xfi/7.jpg", "This is your brain on Super X-FI"),
      image("assets/images/writing/super-xfi/8.jpg", "This is your brain on Super X-FI"),
      image("assets/images/writing/super-xfi/9.jpg", "This is your brain on Super X-FI"),
      image("assets/images/writing/super-xfi/10.jpg", "This is your brain on Super X-FI"),
    ],
  },
  {
    id: "gush-colour-descriptions",
    title: "Colour descriptions",
    client: "Gush",
    agency: null,
    text: "When you're buying paint online, how d'you differentiate between similar shades of white? Gush's online colour descriptions had to capture the viewer's imagination while providing colour pairing suggestions. Below is a curated selection of my personal favourites.",
    // A dedicated slide format instead of the generic image carousel —
    // the colour photo on one side, the name + copy (the actual point
    // of this piece) large and readable on the other.
    colourSlides: [
      { name: "Astral", description: "A dark mauve purple. Channel your inner Prince and astral project to a world where you're the royal. Exudes a mix of mystery and creativity; quiet and confident. Works best with other bold colours, or neutrals.", image: image("assets/images/writing/gush-colours/astral.png", "Astral — a dark mauve purple") },
      { name: "Extract", description: "A lush pastel pink. A generous helping of pink suitable for all genders. Not too light, not too dark — just perfect. Pair with light colours and soft textures for a fairytale come to life.", image: image("assets/images/writing/gush-colours/extract.png", "Extract — a lush pastel pink") },
      { name: "Kindred", description: "If a stark white piece of paper took a trip round the world. Perfect 10 with a perfect tan. Grey and beige in a middle tone. Neutral enough to be paired with just about any colour. Trust yourself.", image: image("assets/images/writing/gush-colours/kindred.png", "Kindred — a beige") },
      { name: "Mamma Mia", description: "A baby pink so delectable, it should be illegal. Fun, feisty but never fierce. Pair with other bright colours like yellow or turquoise for a cheerful, beachy vibe. Or use neutrals to draw focus to the pink.", image: image("assets/images/writing/gush-colours/mamma mia.png", "Mamma Mia — a baby pink") },
      { name: "Ikigai", description: "Good things are bound to come when green meets grey. Walls expand, weekends extend. Mixed with grey, this colour has major zen potential when paired with lighter, airier tones.", image: image("assets/images/writing/gush-colours/ikigai.png", "Ikigai — a green") },
      { name: "Slip N' Suds", description: "Straight out of lavender fields; you can almost smell your anxieties disappear. A light, pastel violet. Pair with darker shades of purple for a monochromatic look, or with neutrals for some lightness.", image: image("assets/images/writing/gush-colours/slip n suds.png", "Slip N' Suds — a lavender purple") },
      { name: "Mango", description: "Rock out your sundress, it's a party. Fruity, luscious and light. There's room for everyone here. Go big — paint with a deep purple to create a colour blocking graphic look. Or stay at home — include neutrals like white, cream or beige for more light and air.", image: image("assets/images/writing/gush-colours/mango.png", "Mango — an orange") },
      { name: "Peeptoe", description: "A luscious red vermillion. Definitely a statement piece for the fiery at heart. Manifest all your passions and purpose through these walls. They're yours to have. To maintain balance, elegance and sophistication, pair with neutrals. Use pastels in green, blue or lilac to incorporate feelings of whimsy and play.", image: image("assets/images/writing/gush-colours/peeptoe.png", "Peeptoe — a red") },
      { name: "Forest Bather", description: "Olive green in grey tones. Washed out in the forest — your eyes adjust through the lens of water droplets. Introduce earthy blends and woods into your home; or go all out with a colour-blocking pink.", image: image("assets/images/writing/gush-colours/forest bather.png", "Forest Bather — an olive green") },
      { name: "Offshore", description: "Now that's swell. Surf's up with this greenish blue — envision yourself in clear waters with the colours of the ocean reflected in your eyes. Accentuate feelings of relaxation with other colours you see at the beach.", image: image("assets/images/writing/gush-colours/offshore.png", "Offshore — a greenish blue") },
      { name: "Beesechurger", description: "A creamy, mustard yellow. You know the type — dripping with freshly grilled cheese. So delectable, you'll get your words jumbled up. Definitely a statement piece to be paired with neutrals.", image: image("assets/images/writing/gush-colours/beesechurger.png", "Beesechurger — a mustard yellow") },
      { name: "Linen", description: "Fluffier than fluffy. Puffier than puffy. Off white with a tinge of grey — so good, you'd want a taste.", image: image("assets/images/writing/gush-colours/linen.png", "Linen — an off-white") },
      { name: "Jellyfish Jelly", description: "A tropical fiesta, where pink meets purple. Sunbathing and sun-kissed amongst the coral reef. Accentuate curves in your home alongside white, or go straight for the jugular with more hues of pink or purple.", image: image("assets/images/writing/gush-colours/jellyfish jelly.png", "Jellyfish Jelly — a pink") },
      { name: "Kondo 101", description: "Put on your birthday suit, it's all you need. Just you, in your purest form. Creamy and nude with a pinch of pink.", image: image("assets/images/writing/gush-colours/kondo101.png", "Kondo 101 — an off-white") },
      { name: "Octane", description: "When real life becomes paradise. An invigorating blend of coral pink to wake the senses and put a smile on your face. You're home. Rich and bold with a red undertone, complement with neutrals to stay sleek and sophisticated; or go with yellows and reds for added harmony, warmth and energy.", image: image("assets/images/writing/gush-colours/octane.png", "Octane — a coral pink") },
      { name: "Ivan Ooze", description: "To infinity and beyond; rich in purple, doused in milk. Ethereal, magical, fantastical. This deep, pigmented purple has a life of its own — good for accent walls and trimming alike.", image: image("assets/images/writing/gush-colours/ivan ooze.png", "Ivan Ooze — a purple") },
    ],
  },
];

// ---- "Now take me offline" — real IRL / experiential work, one write-up + gallery per client ----
const REALWORLD_CLIENTS = [
  {
    id: "singapore-chinese-cultural-centre",
    name: "Singapore Chinese Cultural Centre",
    agency: "Kult",
    posts: [
      {
        text: "We engaged 6 diverse artists to create shrine-like installations with a modern interpretation of Haw Par Villa's stories and lessons on Chinese values. The exhibition experience was multi-sensory in nature — showcasing a tactile installation, 3D modelling, projection mapping, and a motorised installation.",
        media: [
          video("https://youtu.be/-dO_2KOftCY", "Singapore Chinese Cultural Centre — Remix Festival film"),
          image("assets/images/irl/Remix festival/Image from Santine Pillay (2).jpg", "Haw Par Villa Remix — Singapore Chinese Cultural Centre"),
          image("assets/images/irl/Remix festival/Image 7165 from Santine Pillay.jpg", "Image 7165 — Singapore Chinese Cultural Centre"),
          image("assets/images/irl/Remix festival/Image from Santine Pillay (1).jpg", "Image — Singapore Chinese Cultural Centre"),
          image("assets/images/irl/Remix festival/Image from Santine Pillay.jpg", "Image — Singapore Chinese Cultural Centre"),
        ],
      },
    ],
  },
  {
    id: "singapore-writers-festival",
    name: "Singapore Writers Festival",
    agency: "Kult x Fellow",
    posts: [
      {
        text: "A texting-inspired interactive pop-up installation at Arts House that chronicled our relationship with language. Included a cacophonous motion reactive historical walkthrough of internet communications, an arcade machine that personifies emoji connotations, AR filters, an analog polling station, and a voyeuristic peek into personal texts from real people.",
        media: [
          { ...image("assets/images/irl/Text talk/1.png", "1 — Singapore Writers Festival"), kvScale: 0.7 },
          image("assets/images/irl/Text talk/2.jpg", "2 — Singapore Writers Festival"),
          image("assets/images/irl/Text talk/3.jpg", "3 — Singapore Writers Festival"),
          image("assets/images/irl/Text talk/4.jpg", "4 — Singapore Writers Festival"),
          image("assets/images/irl/Text talk/5.jpg", "5 — Singapore Writers Festival"),
        ],
      },
    ],
  },
  {
    id: "rws-sea-aquarium",
    name: "Resorts World Sentosa, SEA Aquarium",
    agency: "Kult",
    posts: [
      {
        text: "Good vibrations! Titled Ocean in Motion, visitors were encouraged to hit sea creature-shaped buttons and watch as illustrated animations do back flips across the screen complete with sounds of pleasure.",
        media: [
          video("https://youtu.be/YBkZfjAeSdM", "RWS SEA Aquarium — Ocean in Motion film"),
          image("assets/images/irl/Ocean in motion/Nov 27 2020 Screenshot from Santine Pillay.png", "Nov 27 2020 Screenshot — RWS SEA Aquarium"),
          image("assets/images/irl/Ocean in motion/Ocean Fest 2019 Screenshot Nov 28 (1).webp", "Ocean Fest 2019 Screenshot Nov 28 — RWS SEA Aquarium"),
          image("assets/images/irl/Ocean in motion/Ocean Fest 2019 Screenshot Nov 28 (2).webp", "Ocean Fest 2019 Screenshot Nov 28 — RWS SEA Aquarium"),
          image("assets/images/irl/Ocean in motion/Ocean Fest 2019 Screenshot Nov 28.webp", "Ocean Fest 2019 Screenshot Nov 28 — RWS SEA Aquarium"),
        ],
      },
    ],
  },
  {
    id: "aldo",
    name: "ALDO",
    agency: "Kult",
    posts: [
      {
        text: "As part of ALDO's Zest for Life campaign, we created an entirely pink roving Instagram set that toured Singapore in a truck.",
        media: [
          image("assets/images/irl/Aldo/Image from Santine Pillay.jpg", "Pink bathtub set — ALDO"),
          image("assets/images/irl/Aldo/Image 8117 from Santine Pillay.jpg", "Image 8117 — ALDO"),
          image("assets/images/irl/Aldo/Image 8119 from Santine Pillay.jpg", "Image 8119 — ALDO"),
        ],
      },
    ],
  },
  {
    id: "singapore-art-museum",
    name: "Singapore Art Museum",
    agency: "Kult",
    posts: [
      {
        text: "As part of Singapore Art Week, we created immersive installations that took creative technology to its absolute limit. The concept was expanded on for the SAM closing party and included many more installations like live music, F&B and anti-Instagram sets.",
        media: [
          video("https://youtu.be/JcJ4E6iXeSU", "Singapore Art Museum film 1"),
          video("https://youtu.be/mI7deZcxwc0", "Singapore Art Museum film 2"),
          image("assets/images/irl/SAM/Instagram Media 2048x2048.jpg", "On the Stranger Side of Things — Singapore Art Museum"),
          image("assets/images/irl/SAM/Emojiland 2.jpg", "Emojiland 2 — Singapore Art Museum"),
          image("assets/images/irl/SAM/Garden of Internet.jpg", "Garden of Internet — Singapore Art Museum"),
          image("assets/images/irl/SAM/Isle of Good Deeds.jpg", "Isle of Good Deeds — Singapore Art Museum"),
          image("assets/images/irl/SAM/52893184_10156467688584086_8580556376290361344_o.jpg", "Singapore Art Museum"),
          image("assets/images/irl/SAM/Media Library Image (1).jpg", "Singapore Art Museum"),
          image("assets/images/irl/SAM/Media Library Image (2).jpg", "Singapore Art Museum"),
          image("assets/images/irl/SAM/Media Library Image (3).jpg", "Singapore Art Museum"),
          image("assets/images/irl/SAM/Media Library Image (4).jpg", "Singapore Art Museum"),
          image("assets/images/irl/SAM/Media Library Image (5).jpg", "Singapore Art Museum"),
          image("assets/images/irl/SAM/Media Library Image.jpg", "Singapore Art Museum"),
        ],
      },
    ],
  },
  {
    id: "mccy",
    name: "MCCY",
    agency: "Tribal x Kult",
    posts: [
      {
        text: "MCCY wanted to foster a collaborative spirit between Singaporeans across generation, age, and background. We created Kult Museum, a roving Escape Room experience that toured around neighbourhoods for 2 months. Visitors were randomly grouped together and join forces to solve the mystery of a stolen painting.",
        media: [
          video("https://youtu.be/jCiMLGUMiEg", "MCCY — Kult Museum film"),
          image("assets/images/irl/MCCY/Image 4205 from Santine Pillay.jpg", "Image 4205 — MCCY"),
          image("assets/images/irl/MCCY/Image from Santine Pillay.jpg", "Image — MCCY"),
        ],
      },
    ],
  },
  {
    id: "sucklord",
    name: "The Super Sucklord Exhibition",
    agency: "Kult",
    posts: [
      {
        text: "New York-based pop-artist The Sucklord came to Singapore with an army of his crudely funny yet awfully bona fide work in tow. As his inaugural solo show in Singapore, Bootleg Toy Supervillain, was a retrospective one that represented the totality of his medium of bootleg through over 40 original toys on display.",
        media: [
          image("assets/images/irl/Sucklord/Media Library Image (2).jpg", "Bootleg Toy Supervillain poster — The Super Sucklord Exhibition"),
          image("assets/images/irl/Sucklord/Media Library Image (1).jpg", "The Super Sucklord Exhibition"),
          image("assets/images/irl/Sucklord/Media Library Image (3).jpg", "The Super Sucklord Exhibition"),
          image("assets/images/irl/Sucklord/Media Library Image (4).jpg", "The Super Sucklord Exhibition"),
          image("assets/images/irl/Sucklord/Media Library Image.jpg", "The Super Sucklord Exhibition"),
        ],
      },
    ],
  },
  {
    id: "gush-studio",
    name: "Gush Studio",
    agency: null,
    posts: [
      {
        text: "Converted Gush's corporate office space into a makeshift showroom to show off the science and colours of their wall paints with minimal budget, and maximum construction restrictions.",
        media: [
          image("assets/images/irl/Gush/Gush studio/1.jpg", "1 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/2.jpg", "2 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/3.jpg", "3 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/4.jpg", "4 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/5.jpg", "5 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/6.jpg", "6 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/7.jpg", "7 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/8.jpg", "8 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/9.jpg", "9 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/10.jpg", "10 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/11.jpg", "11 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/12.jpg", "12 — Gush Studio"),
          image("assets/images/irl/Gush/Gush studio/13.jpg", "13 — Gush Studio"),
        ],
      },
    ],
  },
  {
    id: "gush-paint-packs",
    name: "Gush Paint Packs",
    agency: null,
    posts: [
      {
        text: "Gush launched an innovative new product — the 20ml pocket-sized paint sachets that work just like ketchup: tear, squeeze, and apply. We created a special unboxing experience meant to romanticise the painting experience as sexy and desirable, not cumbersome. (Paint samples may look delicious, but please do not consume.)",
        media: [
          image("assets/images/irl/Gush/Gush paint pack/Card Back from Santine Pillay.jpg", "Card Back — Gush Paint Packs"),
          image("assets/images/irl/Gush/Gush paint pack/Envelope Back.jpg", "Envelope Back — Gush Paint Packs"),
          image("assets/images/irl/Gush/Gush paint pack/Envelope Front.jpg", "Envelope Front — Gush Paint Packs"),
          image("assets/images/irl/Gush/Gush paint pack/Open Envelope Image.jpg", "Open Envelope Image — Gush Paint Packs"),
        ],
      },
    ],
  },
];

// ---- "Show me how you Social" — real client work, grouped by client ----
const SOCIALS_CLIENTS = [
  {
    id: "seasons",
    name: "Seasons",
    posts: [
      { label: null, media: [image("assets/images/socials/SEASONS/infinity.gif", "infinity \u2014 SEASONS social post")] },
      { label: null, media: [image("assets/images/socials/SEASONS/star wars.gif", "star wars \u2014 SEASONS social post")] },
      { label: "tinder campaign", media: [image("assets/images/socials/SEASONS/tinder campaign/Nov 27 2020 Screenshot from Santine Pillay (1).png", "Nov 27 2020 Screenshot from Santine Pillay \u2014 SEASONS social post"), image("assets/images/socials/SEASONS/tinder campaign/Nov 27 2020 Screenshot from Santine Pillay.png", "Nov 27 2020 Screenshot from Santine Pillay \u2014 SEASONS social post"), image("assets/images/socials/SEASONS/tinder campaign/Screenshot Nov 27 2020 from Santine Pillay.png", "Screenshot Nov 27 2020 from Santine Pillay \u2014 SEASONS social post")] },
    ],
  },
  {
    id: "anlene",
    name: "Anlene",
    posts: [
      { label: "funnybone campaign", media: [image("assets/images/socials/anlene/funnybone campaign/Funny Bone 01.png", "Funny Bone 01 \u2014 anlene social post"), image("assets/images/socials/anlene/funnybone campaign/Funny Bone 02.png", "Funny Bone 02 \u2014 anlene social post"), image("assets/images/socials/anlene/funnybone campaign/Funny Bone 03.png", "Funny Bone 03 \u2014 anlene social post"), image("assets/images/socials/anlene/funnybone campaign/Funny Bone Apr 01.png", "Funny Bone Apr 01 \u2014 anlene social post")] },
      { label: "2-in-1 campaign", media: [image("assets/images/socials/anlene/2-in-1 campaign/Anlene Gold Promo 03.png", "Anlene Gold Promo 03 \u2014 anlene social post"), image("assets/images/socials/anlene/2-in-1 campaign/Anlene Gold Promo 04.png", "Anlene Gold Promo 04 \u2014 anlene social post"), image("assets/images/socials/anlene/2-in-1 campaign/Anlene Gold Promo 1 for 1.png", "Anlene Gold Promo 1 for 1 \u2014 anlene social post"), image("assets/images/socials/anlene/2-in-1 campaign/Anlene Gold Promo 1.png", "Anlene Gold Promo 1 \u2014 anlene social post")] },
    ],
  },
  {
    id: "gush",
    name: "Gush",
    posts: [
      { label: null, media: [image("assets/images/socials/gush/Ezgif Media Library.gif", "Ezgif Media Library \u2014 gush social post")] },
      { label: "barbie campaign", media: [image("assets/images/socials/gush/barbie campaign/Barbie 2.png", "Barbie 2 \u2014 gush social post"), image("assets/images/socials/gush/barbie campaign/Barbie Image (1).png", "Barbie Image \u2014 gush social post"), image("assets/images/socials/gush/barbie campaign/Barbie Image.png", "Barbie Image \u2014 gush social post")] },
      { label: null, media: [video("https://youtube.com/shorts/SFkJ9OcpOrY?feature=share", "Gush \u2014 they've broke the mold")] },
      { label: null, media: [video("https://youtube.com/shorts/V7np-R44ZFE?feature=share", "Gush \u2014 fresh air")] },
      { label: null, media: [video("https://youtube.com/shorts/3RJUTnIcsLU?feature=share", "Gush \u2014 paint the town blue")] },
      { label: "food campaign", media: [image("assets/images/socials/gush/food campaign/bao.gif", "Gush food campaign \u2014 bao"), image("assets/images/socials/gush/food campaign/teh tarik.gif", "Gush food campaign \u2014 teh tarik"), image("assets/images/socials/gush/food campaign/tutu kueh.gif", "Gush food campaign \u2014 tutu kueh")] },
      { label: "safe spaces campaign", media: [image("assets/images/socials/gush/safe spaces campaign/Safe Space 1a.png", "Safe Space 1a \u2014 gush social post"), image("assets/images/socials/gush/safe spaces campaign/Safe Space 1b.png", "Safe Space 1b \u2014 gush social post"), image("assets/images/socials/gush/safe spaces campaign/Safe Space 2a.png", "Safe Space 2a \u2014 gush social post"), image("assets/images/socials/gush/safe spaces campaign/Safe Space 2b.png", "Safe Space 2b \u2014 gush social post"), image("assets/images/socials/gush/safe spaces campaign/Safe Space 3a.png", "Safe Space 3a \u2014 gush social post"), image("assets/images/socials/gush/safe spaces campaign/Safe Space 3b.png", "Safe Space 3b \u2014 gush social post")] },
    ],
  },
  {
    id: "kult",
    name: "Kult",
    posts: [
      { label: "cb campaign", media: [image("assets/images/socials/kult/cb campaign/1.jpg", "1 \u2014 kult social post"), image("assets/images/socials/kult/cb campaign/2.jpg", "2 \u2014 kult social post"), image("assets/images/socials/kult/cb campaign/3.jpg", "3 \u2014 kult social post"), image("assets/images/socials/kult/cb campaign/4.jpg", "4 \u2014 kult social post")] },
      { label: "sucklord campaign", media: [image("assets/images/socials/kult/sucklord campaign/Media Library Image (1).jpg", "Media Library Image \u2014 kult social post"), image("assets/images/socials/kult/sucklord campaign/Media Library Image.jpg", "Media Library Image \u2014 kult social post")] },
    ],
  },
  {
    id: "munich-automobiles",
    name: "Munich Automobiles",
    posts: [
      { label: null, media: [image("assets/images/socials/munich automobiles/bare bones.gif", "bare bones \u2014 munich automobiles social post")] },
      { label: null, media: [image("assets/images/socials/munich automobiles/cny.png", "cny \u2014 munich automobiles social post")] },
      { label: null, media: [image("assets/images/socials/munich automobiles/dark horse.gif", "dark horse \u2014 munich automobiles social post")] },
      { label: null, media: [image("assets/images/socials/munich automobiles/double trouble.gif", "double trouble \u2014 munich automobiles social post")] },
      { label: null, media: [image("assets/images/socials/munich automobiles/piping hot.gif", "piping hot \u2014 munich automobiles social post")] },
    ],
  },
  {
    id: "noah",
    name: "noah",
    posts: [
      { label: null, media: [image("assets/images/socials/noah/ED/1 Longer than her ex 4x5.png", "Longer than her ex \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Apple watch 1x1 EN.png", "Apple watch \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Bang buck 4x5.png", "Bang buck \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Crows 1x1.png", "Chinatown crows have beef with bald men \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Doctor 1x1 EN.png", "Doctor \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Downstairs neighbours 1x1 EN.png", "Downstairs neighbours \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/ED group 1x1 EN.png", "ED group \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Early bird 1x1 EN.png", "Early bird \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Emergency 1x1 EN.png", "Emergency \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Fake desire 1x1 EN.png", "Fake desire \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Gravity 1x1 EN.png", "Gravity \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Hard to argue 1x1.png", "Hard to argue \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Hide in plain sight 1x1 EN.png", "Hide in plain sight \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Livin on 4x5.png", "Livin on \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/More thrusting 1x1 EN.png", "More thrusting \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Oops 1x1 EN.png", "Oops \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Score a 10 1x1 EN.png", "Score a 10 \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/She gets offended 1x1 EN.png", "She gets offended \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Standing up for Singapore 1x1 EN.png", "Standing up for Singapore \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Stock 1x1 EN.png", "Stock \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Take balls 1x1 EN.png", "Take balls \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Think about mom 1x1 EN.png", "Think about mom \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Thrust issue 1x1 EN.png", "Thrust issue \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Viagra delivery 1x1 EN.png", "Viagra delivery \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/ED/Win in bed 4x5.png", "Win in bed \u2014 noah social post")] },
      { label: "noah men campaign", media: [image("assets/images/socials/noah/ED/noah men campaign/1 Noah men 4x5.png", "Noah men \u2014 noah social post"), image("assets/images/socials/noah/ED/noah men campaign/2 Noah men 4x5.png", "Noah men \u2014 noah social post"), image("assets/images/socials/noah/ED/noah men campaign/3 Noah men 4x5.png", "Noah men \u2014 noah social post")] },
      { label: "noah men finish strong campaign", media: [image("assets/images/socials/noah/ED/noah men finish strong campaign/Good pump 4x5.png", "Good pump \u2014 noah social post"), image("assets/images/socials/noah/ED/noah men finish strong campaign/Last bro 4x5.png", "Last bro \u2014 noah social post"), image("assets/images/socials/noah/ED/noah men finish strong campaign/Poor form 4x5.png", "Poor form \u2014 noah social post"), image("assets/images/socials/noah/ED/noah men finish strong campaign/Pull out 4x5.png", "Pull out \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/HL/Divorce 4x5.png", "Divorce \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/HL/Reject your family inheritance 4x5.png", "Reject your family inheritance \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/HL/Say no more 4x5.png", "Say no more \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/HL/Star war 1x1.png", "Star war \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/HL/Wear hat to bed 1x1.png", "Wear hat to bed \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/WL/One chin 1x1 EN.png", "One chin \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/WL/Spare tire 4x5.png", "Spare tire \u2014 noah social post")] },
      { label: null, media: [image("assets/images/socials/noah/WL/Wear XL 1x1 EN.png", "Wear XL \u2014 noah social post")] },
      { label: null, media: [video("https://youtu.be/2RHoiz1HwPc", "noah video post")] },
      { label: null, media: [video("https://youtube.com/shorts/vwXDVMwmYqo?feature=share", "noah video post")] },
      { label: null, media: [video("https://youtube.com/shorts/7NrHwAUax_8?feature=share", "noah video post")] },
      { label: null, media: [video("https://youtube.com/shorts/ji1xwp8rfSY?feature=share", "noah video post")] },
      { label: null, media: [video("https://youtube.com/shorts/QY2nCg4S4wo?feature=share", "noah video post")] },
    ],
  },
  {
    id: "sundance",
    name: "Sundance",
    posts: [
      { label: null, media: [image("assets/images/socials/sundance/Children's Day v3.png", "Children's Day v3 \u2014 sundance social post")] },
      { label: null, media: [image("assets/images/socials/sundance/Chinese New Year.png", "Chinese New Year \u2014 sundance social post")] },
      { label: null, media: [image("assets/images/socials/sundance/Hat Day.gif", "Hat Day \u2014 sundance social post")] },
      { label: null, media: [image("assets/images/socials/sundance/New Year's Day.gif", "New Year's Day \u2014 sundance social post")] },
      { label: "rectify campaign", media: [image("assets/images/socials/sundance/rectify campaign/Electric Artwork.png", "Electric Artwork \u2014 sundance social post"), image("assets/images/socials/sundance/rectify campaign/Hanging Media.png", "Hanging Media \u2014 sundance social post"), image("assets/images/socials/sundance/rectify campaign/Lethal.png", "Lethal \u2014 sundance social post"), image("assets/images/socials/sundance/rectify campaign/Shooting v2.png", "Shooting v2 \u2014 sundance social post")] },
    ],
  },
  {
    id: "sembawang-grc",
    name: "Sembawang GRC",
    posts: [
      { label: null, media: [video("https://youtu.be/2WT_cp8W_VQ", "Sembawang GRC video post")] },
      { label: null, media: [video("https://youtu.be/-ljrlrmXcDU", "Sembawang GRC video post")] },
    ],
  },
  {
    id: "club-med",
    name: "Club Med",
    posts: [
      { label: null, media: [video("https://youtu.be/DW8FLHOdMtQ", "Club Med video post")] },
      { label: null, media: [video("https://youtu.be/hwW7LWffFJk", "Club Med video post")] },
    ],
  },
];
