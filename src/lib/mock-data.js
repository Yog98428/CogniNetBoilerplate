export const MOCK_POSTS = [
  {
    id: "p1",
    author: "signal.orchard",
    did: "did:key:z6Mk…a91f",
    createdAt: "12m",
    body: "AI can flood a feed with volume. Provenance and quality scoring are what keep signal from drowning in synthetic noise.",
    tags: ["ai", "provenance"],
    ai: {
      quality: 0.91,
      originality: 0.84,
      botRisk: 0.08,
      summary: "High information density; low synthetic-engagement risk.",
    },
  },
  {
    id: "p2",
    author: "north.lattice",
    did: "did:key:z6Mk…c2e0",
    createdAt: "41m",
    body: "Pseudonymous identities should be cheap to create and expensive to abuse. Reputation without real-name surveillance is the hard part.",
    tags: ["identity", "privacy"],
    ai: {
      quality: 0.86,
      originality: 0.79,
      botRisk: 0.12,
      summary: "Clear thesis; strong relevance to privacy-preserving social design.",
    },
  },
  {
    id: "p3",
    author: "ember.relay",
    did: "did:key:z6Mk…77b4",
    createdAt: "2h",
    body: "Hot take but unverified: every post on every chain will somehow make moderation obsolete overnight!!!!!!!!!!!!!",
    tags: ["spam-ish"],
    ai: {
      quality: 0.28,
      originality: 0.22,
      botRisk: 0.74,
      summary: "Low substance, high repetition markers, elevated bot-risk score.",
    },
  },
  {
    id: "p4",
    author: "quiet.harbor",
    did: "did:key:z6Mk…d0aa",
    createdAt: "5h",
    body: "Hybrid Web3 works when the chain verifies ownership and the feed stays off-chain. Users should publish without learning gas.",
    tags: ["web3", "ux"],
    ai: {
      quality: 0.88,
      originality: 0.81,
      botRisk: 0.09,
      summary: "Practical architecture framing aligned with hybrid design.",
    },
  },
];

export const MOCK_INTELLIGENCE = [
  {
    id: "i1",
    title: "Information quality",
    detail: "Ranks posts by factual consistency, context, and duplication — not by real-world identity.",
  },
  {
    id: "i2",
    title: "Synthetic activity",
    detail: "Flags engagement farming, coordinated bursts, and repetitive AI-generated interactions.",
  },
  {
    id: "i3",
    title: "Content relationships",
    detail: "Tracks lineage across originals, derivatives, citations, and modified copies.",
  },
  {
    id: "i4",
    title: "Personalized feed",
    detail: "Relevance without exporting a full behavioral profile to advertisers.",
  },
];

export const ROADMAP = [
  { phase: 1, name: "AI Social Platform", status: "active" },
  { phase: 2, name: "Web3 Identity", status: "planned" },
  { phase: 3, name: "Decentralized Content", status: "planned" },
  { phase: 4, name: "Privacy Layer", status: "planned" },
  { phase: 5, name: "Decentralized Communities", status: "planned" },
  { phase: 6, name: "Open Ecosystem", status: "planned" },
];
