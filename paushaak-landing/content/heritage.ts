// Content for the /heritage design concept — a Mughal/Rajput-miniature-styled
// retelling of the same PAUSHAAK story. Devanagari carries every Hindi word
// (never Romanized); English proper nouns are woven in via Devanagari
// transliteration where natural ("devnagrified English"), plain Latin
// where a code/number reads better (e.g. "SIH26197"). All Hindi text here
// is an original composition, not a reproduction of any existing poet's work.

export const hero = {
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
  primaryCta: { label: "कथा आरम्भ", sub: "Begin the tale", href: "#watch" },
} as const;

export const links = {
  github: "https://github.com/Pranay-Chopra/Paushaak_SIH26197",
  // [CONFIRM] hosted YouTube video/channel URL
  youtube: "#",
} as const;

export const introVideo = {
  eyebrowHi: "परिचय",
  eyebrowEn: "Introduction",
  heading: "देखिए, सुनिए",
  headingEn: "Watch the Introduction",
  caption: "A short walkthrough of PAUSHAAK — the problem, the craft, the solution.",
  // [CONFIRM] a direct video file (e.g. /heritage/intro.mp4, dropped into
  // public/heritage/). Must be a real file, not a YouTube/Vimeo page — an
  // iframe embed's controls belong to that platform and can't be re-themed,
  // which is the whole point of the custom player below. Left blank renders
  // a placeholder frame instead of an empty player.
  videoSrc: "/heritage/intro.mp4",
  poster: "",
  confirm: true,
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
    { value: "6.4–6.9M", labelHi: "कारीगर", sub: "handloom and handicraft artisans across India — nearly two-thirds women" },
    { value: "30–40%", labelHi: "बेरोज़गारी", sub: "of design graduates go unemployed every year" },
    { value: "₹20–30K", labelHi: "मासिक आय", sub: "average monthly pay for a graduate — even once placed in a formal role" },
  ],
} as const;

export const solution = {
  eyebrowHi: "समाधान",
  eyebrowEn: "Discover India",
  heading: "Four Steps",
  steps: [
    { labelHi: "बोलो", labelEn: "Speak", body: "Describe your craft aloud, in your own tongue." },
    { labelHi: "रचना", labelEn: "Creation", body: "The voice becomes a polished, market-ready listing." },
    { labelHi: "दर्शन", labelEn: "Vision", body: "A buyer sees it worn on their own form — before they ever buy." },
    { labelHi: "मेल", labelEn: "Match", body: "AI matches each buyer with the artisan and design suited to their taste, region and budget." },
  ],
} as const;

export const differentiation = {
  eyebrowHi: "विशिष्टता",
  eyebrowEn: "Innovation & Uniqueness",
  heading: "Why This Is Different",
  points: [
    {
      labelHi: "अपने रूप में",
      labelEn: "Seen on Your Own Form",
      body: "An AI body model previews how a garment sits on your own height, build and colouring — before you ever buy.",
    },
    {
      labelHi: "भरोसे का बाज़ार",
      labelEn: "A Marketplace Built on Trust",
      body: "One trusted marketplace serves individual buyers and fashion brands alike — verified sellers, verified craft.",
    },
    {
      labelHi: "दूर तक पहुँच",
      labelEn: "Reaching Where Networks Don't",
      body: "Regional-language support and cached content mean artisans in low-connectivity regions are never left offline.",
    },
    {
      labelHi: "बातचीत से मेल",
      labelEn: "Matched Through Conversation",
      body: "A simple conversation is enough to match a buyer with the artisan and design suited to their taste, region and budget.",
    },
  ],
} as const;

export const impact = {
  eyebrowHi: "प्रभाव",
  eyebrowEn: "Impact & Numbers",
  heading: "Impact, in Figures",
  stats: [
    { value: 5, prefix: "3–", suffix: "×", label: "Target income growth for onboarded artisans" },
    { value: 64, prefix: "", suffix: "%", label: "Artisan workforce who are women" },
    { value: 55, prefix: "", suffix: "%", label: "Design graduates in formal industry roles" },
    { value: 30, prefix: "", suffix: "%", label: "Design graduates unemployed or off-track" },
  ],
  disclaimer:
    "Artisan and design-graduate figures drawn from Ministry of Textiles data, PIB reporting, and independent coverage in The Hindu and Drishti IAS.",
} as const;

export const team = {
  eyebrowHi: "दरबार",
  eyebrowEn: "The Court",
  heading: "पी-जन",
  headingEn: "P-JANN",
  members: [
    { name: "ओजस्व Koolwal", role: "Leader" },
    { name: "हर्ष Kumar", role: "Co-Leader" },
    { name: "प्रणय Chopra", role: "Technical Lead" },
    { name: "रुद्राक्ष Malav", role: "Ideator" },
    { name: "श्रेया Singh", role: "Creative Designer" },
    { name: "माही Shah", role: "UI Designer" },
  ],
} as const;

export const footer = {
  colophonHi: "इति पौशाक कथा",
  colophonEn: "Thus ends this telling of the PAUSHAAK tale.",
  tag: "Smart India Hackathon 2026 · AICTE · Heritage & Culture · SIH26197",
} as const;

export const bard = {
  label: "दरबारी",
  labelEn: "Ask the Court Bard",
  note: "Coming soon — the bard is still tuning his tanpura.",
} as const;
