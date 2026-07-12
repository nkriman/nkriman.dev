# nkriman.dev — personal site and blog

Astro 5 static site, typography-first. Client JS is limited to one small inline script for
homepage motion (typewriter + grid pings); everything else ships zero JS. Deploys via Vercel
Git integration on push to main.

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build (must pass before any push)

## Structure
- Posts: markdown in `src/content/blog/` (title/description/pubDate frontmatter; `draft: true` hides)
- Layout: `src/layouts/Base.astro` · Styles: `src/styles/global.css`

## Hard rules — writing process (no exceptions)
1. NEVER write final prose (posts, page copy) without Nicolás's explicit confirmation.
2. ALWAYS start from structure (outline agreed first).
3. ALWAYS ask for confirmation at each stage transition: structure → framework → prose → tone.
   Approving one stage does NOT approve the next.
4. Tone is the hardest stage and comes LAST, as its own stage, with Nicolás in the loop.

## Writing style (summary)
- Proof is the persuasion: underclaim, overprove. Numbers and facts carry force, not adjectives.
- Zero em dashes. Zero "X, not Y" antitheses. No hype lexicon (powerful, seamless, robust,
  leverage, delve, journey...). Rhetorical triads: max 1 per piece. Vary sentence length.
- Less is more: when in doubt, cut. A small real number sells worse than no number.
- Everything published here must survive a skeptical staff engineer reading it aloud.

## Design principles
- Motion system v2 (tokens in `src/styles/tokens.css`): Space Grotesk + IBM Plex Mono, single
  light theme. One ink-bordered frame on darker paper; structural borders 1px ink, hairlines
  #E2E7E0. Lime #C6F211 is the interaction color (instant hover fills), cyan #15C0D6 only for
  the cursor mark and link underlines. No radius, no shadows, no transitions.
- Homepage hero ticker and metric counters from the motion spec are NOT implemented: they need
  real copy and real numbers from Nicolás first. Never ship placeholder metrics.
- No AI-generated hero art, no glassmorphism, no badges/widgets. Fast pages are a design feature.
- Design direction decisions belong to Nicolás.

## Private context
If a file `CLAUDE.local.md` exists (gitignored), read it — it holds local pointers not for
the public repo.
