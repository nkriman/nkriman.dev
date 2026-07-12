---
title: "The Edge Is What's Missing"
description: "The models are ready. The binding constraint is getting a specific firm's judgment out of three to five senior heads, and that's an elicitation problem."
pubDate: 2026-07-12
draft: false
lang: en
---

In plenty of knowledge-work domains the capability question is settled. Models already read documents, spot inconsistencies, and draft analysis well enough. The binding constraint on agentic automation is loading them with the judgment that makes a specific firm good: judgment that lives in three to five senior heads, resists being written down, and decays. Getting it out is an elicitation problem. It has known methods, a known price, and known failure modes. The interesting engineering sits upstream of the model.

An expert's advantage over a smart generalist is knowing where to look: which situation-type this is, which question to ask next, when to stop asking and decide. Recognition and localization carry the skill. Reasoning inside the frame, once it's set, is close to a commodity now.

I'll work one example in detail, because I've actually built the first half of it: private-equity deal sourcing.

## The bottleneck

A mid-market PE firm's deal-sourcing capacity is set by senior judgment, and senior judgment is scarce by construction. Evaluating a deal properly costs senior attention, and that cost sets two numbers that define the business: how many deals the firm can evaluate per month, and the minimum deal size worth evaluating at all.

The same teaser gets a 20-minute kill from a senior partner and a six-hour "maybe" from a capable VP. The partner saw something familiar and disqualifying. The VP saw a plausible company and started building a model. That delta, multiplied across every deal in the funnel, is the firm's real cost structure. Everything else is overhead on top of it.

<figure class="fig">
  <div class="fig-frame">
    <span class="fig-label">fig 1 · the cost of a look</span>
    <div class="chip">one teaser</div>
    <div class="bar-row">
      <div class="bar-who"><strong>Senior partner</strong><span>recognized a disqualifying pattern</span></div>
      <div class="bar-track"><div class="bar" style="width:6%;"></div><span class="bar-time">20 min</span><span class="chip chip-ink">kill</span></div>
    </div>
    <div class="bar-row">
      <div class="bar-who"><strong>Capable VP</strong><span>started building a model</span></div>
      <div class="bar-track"><div class="bar" style="width:78%;"></div><span class="bar-time">6 hours</span><span class="chip">maybe</span></div>
    </div>
    <div class="fig-note">delta × every deal in the funnel = the firm's evaluation cost structure → sets the deals-per-month ceiling · sets the minimum-deal-size floor</div>
  </div>
  <figcaption>One teaser, two costs. The delta, multiplied across the funnel, is the firm's real cost structure.</figcaption>
</figure>

## The skeleton

I wanted to know how much of that partner's 20-minute kill sits in the public record. So I mined it: the Stanford and Yale search-fund studies, IESE's research on failed acquisitions, practitioner playbooks, buyer forums. In hours, this produced a skeleton pattern library for screening sub-$5M EBITDA services businesses. Six patterns, each a triple: cues, expectancy, default action.

1. **The owner is the business.** Customer relationships run through the owner; there's no second management layer. Expect revenue to leave with the owner. Pass, or price the transition risk with a long earnout.
2. **The disguised single customer.** Apparently diverse customers turn out to be subsidiaries of one parent, or concentrated in one cyclical industry. Demand customer-level revenue before LOI; stress-test losing the top two.
3. **The reluctant seller.** Prior failed sale attempts, slow document responses. Expect wasted diligence or post-close interference.
4. **The numbers don't deposit.** Bank deposits fail to reconcile with reported revenue. Aggressive add-backs. A revenue spike in the final six months before sale. Default action: rebuild revenue from 24 months of bank statements, and walk if it stays unresolved.
5. **The deal you've fallen for.** After a long search, confirmation bias converts structural problems into fixable ones. Disciplined buyers walk away from 80 to 90 percent of signed LOIs. The pattern to recognize is in the buyer, and it's the hardest one to see.
6. **The re-trade fork.** Diligence surfaces a material problem; the reflexive move is renegotiating price. Experienced investors often convert the finding into better terms while protecting the post-close relationship.

<figure class="fig">
  <div class="fig-frame">
    <span class="fig-label">fig 2 · anatomy of a pattern</span>
    <div class="anatomy">
      <div class="anatomy-head">P4 · the numbers don't deposit</div>
      <div class="anatomy-field"><strong>cues</strong><span>deposits ≠ reported revenue · aggressive add-backs · revenue spike in the final 6 months</span></div>
      <div class="anatomy-field"><strong>expectancy</strong><span>earnings are dressed for sale</span></div>
      <div class="anatomy-field"><strong>default action</strong><span>rebuild revenue from 24 months of bank statements; walk if unresolved</span></div>
    </div>
  </div>
  <figcaption>The artifact format every captured pattern takes: judgment becomes a card, an inspectable object.</figcaption>
</figure>

The skeleton took hours, and that speed cuts both ways. Anyone can have this list by Friday; I'd bet every competent competitor already carries a version of it in their heads. I reconstructed the industry's shared knowledge from public sources between breakfast and dinner.

A firm's edge is precisely what's absent from that list. The seventh pattern. The override a partner applies when all six official criteria say yes and something still smells wrong. Generic AI ships with the textbook, and the textbook is the part with no edge in it.

<figure class="fig">
  <div class="fig-frame">
    <span class="fig-label">fig 3 · the edge is what's missing</span>
    <div class="pcard-grid">
      <div class="pcard"><strong>P1</strong><span>the owner is the business</span></div>
      <div class="pcard"><strong>P2</strong><span>the disguised single customer</span></div>
      <div class="pcard"><strong>P3</strong><span>the reluctant seller</span></div>
      <div class="pcard"><strong>P4</strong><span>the numbers don't deposit</span></div>
      <div class="pcard"><strong>P5</strong><span>the deal you've fallen for</span></div>
      <div class="pcard"><strong>P6</strong><span>the re-trade fork</span></div>
    </div>
    <div class="pcard-group-label">public · reconstructed in hours · every competitor has these</div>
    <div class="pcard-grid">
      <div class="pcard pcard-dashed"><strong>P7</strong><span>?</span></div>
      <div class="pcard pcard-dashed"><strong>P8</strong><span>?</span></div>
      <div class="pcard pcard-dashed"><strong>Pn</strong><span>?</span></div>
    </div>
    <div class="pcard-group-label">the firm's edge: exists only in senior heads, absent from every public source → what the engagement captures</div>
  </div>
  <figcaption>P1 through P6 are public. The empty slots are the valuable part.</figcaption>
</figure>

## Getting at the seventh pattern

The obvious move fails. Ask a partner "how do you evaluate deals?" and you get the training-manual version: team, market, unit economics, the stuff already on the firm's website. Experts cannot accurately self-report their own decision process. Zacharakis and Meyer showed this with venture capitalists: the criteria investors said they used diverged substantially from the criteria that statistically explained their actual decisions. Any capture effort that just asks experts what they do will faithfully automate the training manual and miss the edge entirely. I'd bet this is the standard failure mode of most "AI transformation" projects in knowledge work, and I'd bet most of them never find out.

The working method is Gary Klein's Critical Decision Method: incident-based expert interviews. You walk the partner through specific real deals. The one killed in 30 minutes. The pass a competitor later won big on. The one that fooled them. At each step you probe: what did you notice, what did you expect, what did you ask for next, what answer would have changed your mind. The knowledge surfaces case by case, because that's how it's stored.

The honest price: 30 to 40 hours per senior expert, and I don't think it compresses. The incidents are where the judgment lives, and nobody has found a shortcut through them.

## What capture produces

Done properly, elicitation yields three layers.

The firm's pattern library: the situation-types its best people recognize on sight, including the ones missing from my public skeleton. The cue inventory: early signals like how a seller answers a document request, or the timing of a sale process; experts flatly deny having these until you walk them through incidents and the cues fall out of their own retellings. And the acquisition map: expert evaluation is a loop (read, notice what's missing or suspicious, request specific information, re-read, repeat until conviction or kill), and a large share of senior skill is knowing the next request, plus knowing when to stop and decide.

<figure class="fig">
  <div class="fig-frame">
    <span class="fig-label">fig 4 · the evaluation loop</span>
    <div class="loop-line">
      <span class="chip">read the material</span>
      <span class="fig-arrow">→</span>
      <div class="loop-cycle">
        <span class="chip">notice what's missing or suspicious</span>
        <span class="fig-arrow">→</span>
        <span class="chip">request specific information</span>
        <span class="fig-arrow">→</span>
        <span class="chip">re-read</span>
        <span class="fig-arrow">↺</span>
      </div>
      <span class="fig-arrow">→</span>
      <span class="chip chip-lime">conviction</span>
      <span class="fig-arrow">/</span>
      <span class="chip chip-ink">kill</span>
    </div>
    <div class="fig-note">senior skill sits in two places → on the request arrow: knowing the next question · on the exits: knowing when to stop asking and decide</div>
  </div>
  <figcaption>Evaluation is a loop, and the loop's control policy is the captured asset: a checklist scores documents once; this decides what to look at next.</figcaption>
</figure>

Public sources, meanwhile, overflow with explicit rules and thresholds: "no customer over 20 percent of revenue" appears in every playbook I read. The scarce layers, the ones worth the elicitation bill, are the patterns, the cues, and the overrides.

Deployment follows one principle: scale the no, slow the yes. Fast rejection is pure gain. Every teaser killed in an hour on captured patterns, when it used to take a week of VP time, returns senior attention to the funnel. A fast automated yes is exactly where pattern-matching fails: deal sourcing gives slow, noisy feedback, the condition under which expert intuition is least trustworthy. So the system prepares, flags, and kills. Humans decide the yes.

<figure class="fig">
  <div class="fig-frame">
    <span class="fig-label">fig 5 · scale the no, slow the yes</span>
    <div class="funnel-stage"><div class="funnel-band" style="width:100%;">incoming teasers</div></div>
    <div class="funnel-stage">
      <div class="funnel-kill">← ✕ automated kills · hours, on captured patterns</div>
      <div class="funnel-band" style="width:56%;">survivors → prepare</div>
    </div>
    <div class="funnel-stage">
      <div class="funnel-kill">← ✕ automated kills</div>
      <div class="funnel-band" style="width:36%;">survivors → flag</div>
    </div>
    <div class="funnel-stage">
      <div class="funnel-kill">← ✕ automated kills</div>
      <div class="funnel-band" style="width:24%;">senior review</div>
    </div>
    <div class="funnel-stage">
      <div class="funnel-band chip-ink" style="width:24%; margin-left:auto; background:var(--color-ink); color:var(--color-surface);">humans decide the yes</div>
    </div>
    <div class="fig-note">slow, noisy feedback makes a fast automated yes the failure mode → exits are fast and wide, the descent is deliberately narrow and slow</div>
  </div>
  <figcaption>Exits are fast and wide; the descent is deliberately narrow and slow.</figcaption>
</figure>

The economics follow too. Make evaluation an order of magnitude cheaper and the minimum viable deal size drops. A long tail of smaller companies, currently unservable because evaluating them costs more than the position justifies, becomes addressable. That's market expansion stacked on top of the throughput gain.

## Backtesting the judgment

There's a validation step available here that most knowledge-work automation never gets. A firm with decent records is sitting on a labeled dataset: years of teasers, CIMs, diligence files, and the decision made on each one. Replay them. Give the captured system each deal as it looked on the day it arrived, and compare its call to what the firm did and, where it's known, to what happened after.

The agreement rate is the boring output. The disagreements are the product. Every deal where the system and the partner split points at one of two gaps: the system was missing context the partner had (a phone call that never made it into the file), or the partner was running a pattern nobody captured. Both are elicitation leads. Take the disagreement back into the interview room, walk the incident again, and either the intake spec gains a new context requirement or the library gains its seventh pattern. Backtesting turns capture from a one-shot interview project into a loop that finds its own holes.

<figure class="fig">
  <div class="fig-frame">
    <span class="fig-label">fig 6 · the backtest loop</span>
    <div class="vflow">
      <div class="vnode"><strong>historical deal files</strong><span>as-of-that-day snapshots · warning: hindsight contamination, files must be rebuilt as-of-arrival</span></div>
      <div class="varrow">↓</div>
      <div class="vnode"><strong>replay</strong><span>each deal through the captured system, as it looked on arrival</span></div>
      <div class="varrow">↓</div>
      <div class="vnode"><strong>compare</strong><span>against the partner's actual call, and the outcome where known</span></div>
      <div class="varrow">↓ on disagreement</div>
      <div class="branches">
        <div class="vnode"><strong>system lacked context</strong><span>the partner had something the file didn't → add an intake requirement</span></div>
        <div class="vnode"><strong>partner ran an uncaptured pattern</strong><span>new elicitation session → new pattern card</span></div>
      </div>
      <div class="varrow">↓ both branches feed</div>
      <div class="vnode"><strong>pattern library</strong><span>which feeds the system · ↺ loop closes</span></div>
    </div>
  </div>
  <figcaption>Disagreements, routed back into elicitation, are the product; the accuracy score is a byproduct.</figcaption>
</figure>

Two honest limits. The deal file the firm kept is contaminated by hindsight (it contains what they learned in month three) so the replay has to be built from as-of-that-day material, which is real work. And the outcomes are lopsided: passes stay unresolved forever (you rarely learn what happened to a deal you walked away from, beyond the ones a competitor won), so the backtest scores the no far better than the yes. That happens to match the deployment principle.

## Where it breaks

Three failure modes, and they generalize well beyond PE.

Incentives. A partner's undocumented judgment is personal leverage inside the firm. It's why they're hard to fire and expensive to poach. Asking them to spend 40 hours externalizing it triggers rational resistance, and the general form is uncomfortable: the people whose judgment you most need captured are the ones with the most to lose from capture. The mitigation is to frame and pay for the work as multiplying the partner: their read applied to more deals than they could personally touch, their standard becoming the house standard. I don't know whether that framing survives contact with an actual partner's actual self-interest. It might. It's the open question I'd watch first.

Decay. Judgment forms inside a market regime. A pattern learned across a decade of cheap credit partly misleads in dear credit; the cues still fire, and some of them now point the wrong way. Captured judgment is a snapshot that starts aging on capture day. The countermeasure is mechanical: annotate each pattern for regime-dependence, refresh on a schedule. So capture becomes a standing pipeline. It has no end date. I'm less sure about this one than anything else here; I have yet to see evidence on how fast the decay runs, and sustaining a refresh pipeline requires the kind of discipline firms usually reserve for things with a P&L line.

Garbage-in at scale. The economics point down-market, and information quality worsens down-market: unaudited financials, owner-kept books, revenue that exists mostly in the owner's telling. If the captured judgment includes the distrust cues (the numbers-don't-deposit material about deposits that fail to reconcile), the system scales the skepticism along with the analysis. If it doesn't, scaling the analysis scales the garbage. Automation amplifies whatever verification discipline was or wasn't captured. The elicitation has to chase the paranoia as hard as it chases the pattern recognition, and paranoia is the part experts articulate worst.

## Upstream of the model

The skeleton library, the CDM protocol, the backtest loop, the scale-the-no architecture: all of it runs on model capability that shipped a while ago. The project's actual substance is 30 to 40 hours per expert of structured disagreement with what those experts believe about their own minds, plus the pipeline to keep the output alive.

Every knowledge-work domain has its version of the minimum viable deal size: the smallest problem worth a senior person's attention. Law has one; so do underwriting and engineering review. Cut the cost of evaluation by ten and that floor drops; a tail of work nobody could afford to judge becomes judgeable. The firms that get there first will be the ones that treated elicitation as the engineering problem. The model was ready before they started.
