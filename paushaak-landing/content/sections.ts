// Central content store. Editing copy here never requires touching layout/component code.
// Anything derived from the PRD's [CONFIRM] placeholders is labeled `confirm: true`
// so it's easy to grep for and swap once the stakeholder supplies final values.

export const meta = {
  title: "PAUSHAAK — AI-Driven Market Linkage for Marginalized Artisans",
  description:
    "PAUSHAAK turns a marginalized artisan's spoken description of their product into a polished, market-ready listing, matches them with buyers they'd otherwise never reach, and helps them capture more of the value their work creates. Built for Smart India Hackathon 2026, SIH26197.",
  ogImage: "/brand/wordmark-light.svg",
} as const;

export const hero = {
  tagline: "Smart India Hackathon 2026 · Problem Statement SIH26197 · AICTE · Heritage & Culture",
  headline: "AI-Driven Market Linkage for Marginalized Artisans",
  subhead:
    "PAUSHAAK is an AI-driven mobile marketplace that turns a marginalized artisan's spoken description of their product — in their own language — into a polished, market-ready listing, matches them with buyers they'd otherwise never reach, and helps them capture more of the value their work actually creates.",
  primaryCta: {
    label: "View Pitch Deck",
    href: "#", // [CONFIRM] hosted PDF/PPT URL
    confirm: true,
  },
  secondaryCta: {
    label: "See How It Works",
    href: "#solution",
  },
} as const;

export const marquee = [
  "SMART INDIA HACKATHON 2026",
  "PROBLEM STATEMENT SIH26197",
  "AICTE · HERITAGE & CULTURE",
  "TEAM P-JANN",
] as const;

export const problem = {
  eyebrow: "The Problem",
  heading: "Skilled work, capped income",
  body:
    "Artisans face three compounding barriers — limited digital literacy, language exclusion from most e-commerce platforms, and no visibility into fair pricing — which together cap their income far below what their work is worth.",
  stats: [
    {
      value: "3.2–3.7M",
      label: "artisans reliant on limited, local-only market access",
      confirm: true,
    },
    {
      value: "30–40%",
      label: "of craft-family graduates unemployed despite inherited skill",
      confirm: true,
    },
    {
      value: "₹20–30K",
      label: "typical average monthly income — well below fair value for skilled handmade work",
      confirm: true,
    },
  ],
} as const;

export const solution = {
  eyebrow: "The Solution",
  heading: "How It Works",
  steps: [
    {
      title: "Speak, don't type.",
      body: "Artisan describes their product by voice, in their own language/dialect.",
    },
    {
      title: "AI builds the listing.",
      body: "Voice + photo are turned into a polished, translated, market-ready product listing automatically.",
    },
    {
      title: "Buyers see it their way.",
      body: "A 3D fit/visualization model lets buyers preview apparel and textile items realistically before purchase, building trust across distance.",
    },
    {
      title: "Fair value protected.",
      body: "AI-assisted pricing guidance helps artisans price their work fairly instead of guessing or underpricing from lack of market information.",
    },
  ],
} as const;

export const differentiation = {
  eyebrow: "Innovation & Uniqueness",
  heading: "What Makes This Different",
  points: [
    {
      title: "Fairness-constrained discovery.",
      body: "Unlike marketplace algorithms that optimize purely for conversion (which concentrates visibility on top sellers), PAUSHAAK's ranking guarantees rotating discovery exposure across all registered artisans — visibility isn't just won by whoever already sells the most.",
    },
    {
      title: "Voice-first, not just multilingual.",
      body: "Cataloging and onboarding work entirely by spoken language, removing the literacy barrier that text-translation-only platforms still leave in place.",
    },
    {
      title: "Revenue beyond the sale.",
      body: "Artisans can license their designs as digital patterns or host live paid workshops teaching their craft — income that scales independent of how many physical hours they can work.",
    },
  ],
} as const;

export const impact = {
  eyebrow: "Impact & Numbers",
  heading: "Impact & Numbers",
  // [CONFIRM] exact Slide 5 pie-chart data (labels + percentages)
  pieChartConfirm: true,
  stats: [
    { value: 53.8, prefix: "", suffix: "%", label: "Gross margin per order" },
    { value: 11.7, prefix: "", suffix: "x", label: "LTV : CAC — sellers" },
    { value: 6.66, prefix: "", suffix: "x", label: "LTV : CAC — B2B buyers" },
    { value: 9, prefix: "Month ", suffix: "", label: "Break-even reached by" },
  ],
  disclaimer:
    "Illustrative, based on model assumptions — not audited or real figures.",
} as const;

export const marketBusiness = {
  eyebrow: "Market & Business Model",
  heading: "Market & Business Model",
  fundingStages: [
    {
      stage: "Pilot",
      mechanism: "Grants & CSR",
      note: "Non-dilutive capital to prove the model without pressure to monetize artisans prematurely.",
    },
    {
      stage: "Growth",
      mechanism: "Revenue-Share / RBF",
      note: "Capital repaid from revenue growth, protecting founder ownership while scaling reach.",
    },
    {
      stage: "Scale",
      mechanism: "Equity",
      note: "Traditional equity once unit economics are proven, for full-speed national scale-up.",
    },
  ],
  revenueModel: {
    heading: "Revenue Model",
    current: "Commission on sales + B2B subscription fees.",
    expansion: "Near-term expansion: digital pattern licensing and paid live workshops.",
  },
} as const;

export const team = {
  eyebrow: "Team",
  heading: "P-JANN",
  // [CONFIRM] member names, roles/photos
  membersConfirm: true,
  members: [
    { name: "Team Member", role: "Role — TBD" },
    { name: "Team Member", role: "Role — TBD" },
    { name: "Team Member", role: "Role — TBD" },
    { name: "Team Member", role: "Role — TBD" },
    { name: "Team Member", role: "Role — TBD" },
    { name: "Team Member", role: "Role — TBD" },
  ],
} as const;

export const footer = {
  mission:
    "PAUSHAAK helps marginalized artisans reach fair markets, in their own language, on their own terms.",
  links: {
    pitchDeck: { label: "Pitch Deck", href: "#", confirm: true },
    contact: { label: "Contact", href: "mailto:", confirm: true },
    repo: { label: "GitHub", href: "#", confirm: true },
  },
  tag: "Built for Smart India Hackathon 2026 · SIH26197 · AICTE · Heritage & Culture",
} as const;
