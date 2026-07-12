# nkriman.dev — personal site and blog

Astro 5 static site, typography-first, zero client JS. Deploys via Vercel Git integration
on push to main.

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
- Typography over decoration: measure ~68ch, generous rhythm, restrained palette, light/dark.
- No AI-generated hero art, no glassmorphism, no badges/widgets. Fast pages are a design feature.
- Design direction decisions belong to Nicolás.

## Private context
If a file `CLAUDE.local.md` exists (gitignored), read it — it holds local pointers not for
the public repo.
