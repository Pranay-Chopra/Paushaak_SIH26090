// Content for the /heritage design concept — a Mughal/Rajput-miniature-styled
// retelling of the same PAUSHAAK story. Devanagari carries every Hindi word
// (never Romanized); English proper nouns are woven in via Devanagari
// transliteration where natural ("devnagrified English"), plain Latin
// where a code/number reads better (e.g. "SIH26090"). All Hindi text here
// is an original composition, not a reproduction of any existing poet's work.

export const hero = {
  eyebrow: "Smart India Hackathon 2026 · Problem Statement SIH26090",
  headingHi: "करघे से बाज़ार तक",
  headingEn: "From the Loom to the Marketplace",
  subhead:
    "Where a weaver's hidden art finally speaks the market's tongue — painted in the spirit of a miniature, told for a hackathon.",
  coupletHi: ["हाथों का हुनर, सदियों पुराना,", "अब ढूंढ रहा है अपना ज़माना।"],
  coupletEn: "A craft as old as centuries themselves — now searching only for an age of its own.",
  painting: {
    src: "/heritage/weaver-loom.webp",
    alt: "Indian weaver at his loom — a gouache Company School painting, 19th century",
    credit: "Wellcome Collection · CC BY 4.0",
  },
  primaryCta: { label: "कथा आरम्भ", sub: "Begin the tale", href: "#plea" },
  secondaryCta: { label: "आधुनिक रूप", sub: "The modern site", href: "/classic" },
} as const;

// Three plates tracing clothing across eras — hung through the page like
// pieces of the tapestry itself.
export const plates = {
  court: {
    src: "/heritage/era-1-court.jpg",
    alt: "A Mughal-era noblewoman in courtly dress, holding a flower — miniature painting",
    caption: "The Mughal Court · 17th century",
  },
  wedding: {
    src: "/heritage/era-2-wedding.jpg",
    alt: "A bride in an embroidered contemporary Indian lehenga",
    caption: "The Wedding · Present day",
  },
  street: {
    src: "/heritage/era-3-street.jpg",
    alt: "Fashion illustration of a contemporary street-style outfit",
    caption: "The Street · Present day",
  },
} as const;

export const plea = {
  eyebrowHi: "फ़रियाद",
  eyebrowEn: "The Plea",
  coupletHi: ["रंग है धागे में, गीत है करघे में,", "पर बाज़ार तक आवाज़ नहीं पहुँचती।"],
  coupletEn: "There is colour in the thread, a song in the loom — but the voice never reaches the market.",
  body:
    "For every hand that has turned yarn into heirloom, there is a distance it cannot cross alone — of language, of literacy, of simply being seen. PAUSHAAK is written to close that distance.",
} as const;

export const problem = {
  eyebrowHi: "व्यथा",
  eyebrowEn: "The Plight",
  heading: "Three Walls",
  stats: [
    { value: "3.2–3.7M", labelHi: "कारीगर", sub: "artisans bound to local, limited markets" },
    { value: "30–40%", labelHi: "बेरोज़गारी", sub: "of craft-family graduates go unemployed" },
    { value: "₹20–30K", labelHi: "मासिक आय", sub: "average monthly income — far below fair value" },
  ],
} as const;

export const solution = {
  eyebrowHi: "समाधान",
  eyebrowEn: "The Remedy",
  heading: "Four Steps",
  steps: [
    { labelHi: "बोलो", labelEn: "Speak", body: "Describe your craft aloud, in your own tongue." },
    { labelHi: "रचना", labelEn: "Creation", body: "The voice becomes a polished, market-ready listing." },
    { labelHi: "दर्शन", labelEn: "Vision", body: "A buyer sees the weave as though it stood before them." },
    { labelHi: "न्याय", labelEn: "Fair Due", body: "A fair price, guided honestly — never a guess." },
  ],
} as const;

export const differentiation = {
  eyebrowHi: "विशिष्टता",
  eyebrowEn: "What Sets It Apart",
  heading: "Why This Is Different",
  points: [
    {
      labelHi: "बारी-बारी से रौशनी",
      labelEn: "Light, in its turn",
      body: "Discovery rotates by design — visibility is not only won by whoever already sells the most.",
    },
    {
      labelHi: "बोली में ही पूरी बात",
      labelEn: "The whole matter, in speech alone",
      body: "Cataloguing works entirely by voice, so literacy is never the price of entry.",
    },
    {
      labelHi: "एक धागे से कई राहें",
      labelEn: "Many paths from a single thread",
      body: "A pattern licensed, a workshop taught live — income that grows beyond the loom's own hours.",
    },
  ],
} as const;

export const impact = {
  eyebrowHi: "प्रभाव",
  eyebrowEn: "Impact & Numbers",
  heading: "Impact, in Figures",
  stats: [
    { value: 53.8, prefix: "", suffix: "%", label: "Gross margin per order" },
    { value: 11.7, prefix: "", suffix: "x", label: "LTV : CAC — sellers" },
    { value: 6.66, prefix: "", suffix: "x", label: "LTV : CAC — B2B buyers" },
    { value: 9, prefix: "Month ", suffix: "", label: "Break-even reached by" },
  ],
  disclaimer: "Illustrative, based on model assumptions — not audited figures.",
} as const;

export const team = {
  eyebrowHi: "दरबार",
  eyebrowEn: "The Court",
  heading: "पी-जन",
  headingEn: "P-JANN",
  members: [
    { name: "ओजस्व Koolwal", role: "Leader" },
    { name: "हर्ष Kumar", role: "Ideator" },
    { name: "प्रणय Chopra", role: "Technical Expert" },
    { name: "रुद्राक्ष Malav", role: "Ideator" },
    { name: "श्रेया Singh", role: "UI Designer" },
    { name: "माही Shah", role: "UI Designer" },
  ],
} as const;

export const footer = {
  colophonHi: "इति पौशाक कथा",
  colophonEn: "Thus ends this telling of the PAUSHAAK tale.",
  tag: "Smart India Hackathon 2026 · Ministry of Social Justice and Empowerment · SIH26090",
} as const;

export const bard = {
  label: "दरबारी",
  labelEn: "Ask the Court Bard",
  note: "Coming soon — the bard is still tuning his tanpura.",
} as const;
