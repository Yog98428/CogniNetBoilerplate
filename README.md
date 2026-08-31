# CogniNet

AI-native, privacy-first, hybrid Web3 social platform — **Phase 1 UI boilerplate**.

Based on the CogniNet concept white paper: AI filters noise, Web3 protects ownership later, privacy protects the person.

## What’s included

- Next.js (JavaScript) App Router + Tailwind CSS
- Landing page (brand-first)
- Phase 1 app surfaces:
  - `/feed` — mock social feed with AI quality scores
  - `/compose` — local draft + live AI score preview
  - `/intelligence` — AI layer overview + ranking preview
  - `/profile` — pseudonymous local identity stub
- Architecture folder stubs for AI / identity / storage / privacy
- LocalStorage identity stub (not production crypto)

## What’s intentionally missing

Real ZK, IPFS, wallets, chains, E2EE messaging, LLM APIs, tokens, gas abstraction.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Roadmap mapping

| Phase | Focus | In this repo |
|------:|-------|--------------|
| 1 | AI social platform | UI + mocks |
| 2 | Web3 identity | stub only |
| 3 | Decentralized content | stub only |
| 4 | Privacy layer | stub only |
| 5 | Decentralized communities | not started |
| 6 | Open ecosystem | not started |

## Stack

- Next.js 16 / React 19
- Tailwind CSS 4
- Plain JavaScript (no TypeScript)
