---
title: "Stop tuning prompts. Build the harness."
description: "AI still feels unsteerable. The fix is an engineering discipline borrowed from software's own past."
pubDate: 2026-07-12
draft: false
lang: en
translation: deja-de-ajustar-prompts-construye-el-harness
---

## The problem

For most people, using AI still feels like alchemy. You change a few words in a prompt, the output comes back completely different, and nobody can quite say why. If that's the whole method, quality comes down to luck.

That's not a small problem, because it's no longer only the AI teams. It's the analyst generating a quarterly report, the engineer writing tests, the support lead automating replies. Anyone putting a model into real work hits the same wall: the results are good, then they're wrong, and there's no reliable dial to turn.

The field spent the last two years working out where the dials actually are. They arrived in three stages, and the names are worth knowing, because each one marks a bigger surface you can engineer.

<figure class="fig">
  <div class="nest nest-harness">
    <span class="nest-label">3 · the harness: everything you build around the model</span>
    <div class="nest nest-context">
      <span class="nest-label">2 · the context: everything the model sees</span>
      <div class="nest nest-prompt">
        <span class="nest-label">1 · the prompt</span>
      </div>
    </div>
  </div>
  <figcaption>The three surfaces. Each one contains the last.</figcaption>
</figure>

## Stage one: prompt engineering

Prompt engineering is what everyone tried first: wording the request cleverly to coax a better answer. In code, it's a single line:

```python
answer = model("Summarize our Q3 revenue.")
# read it, hope it's right, reword it when it isn't
```

It works, a little. But the prompt is a shaky surface to build on. Small wording changes swing the results, the same prompt behaves differently next month when the vendor updates the model, and there's no way to test it that an engineer would recognize as testing. Good prompting is a real skill; it just happens to be the kind that lives in one person's head and leaves when they do.

## Stage two: context engineering

The next realization was that the prompt is a sliver of what the model actually sees. Everything else you put in front of it is **context**: the data, the retrieved documents, the examples, the tools it's allowed to call. And context is engineerable:

```python
numbers  = fetch_q3_revenue(source="finance_db")   # real data, not recalled
examples = load_prior_reports(n=2)                  # show the shape you want back
prompt   = assemble(instructions, numbers, examples)
answer   = model(prompt)
```

Andrej Karpathy, a founding member of OpenAI and former head of AI at Tesla, described this as "the delicate art and science of filling the context window with just the right information for the next step." Shopify's CEO Tobi Lütke put it more plainly: "the art of providing all the context for the task to be plausibly solvable by the LLM."

Karpathy's mental model is the one to keep. The model is like a CPU, and its context window is like RAM, a small working memory. Context engineering is the job of deciding what gets loaded into that memory, and in what order, before the model runs. The same model can look brilliant or careless on the identical task, depending on what you loaded in.

## Stage three: harness engineering

Context is what the model sees. Reliability needs more than good inputs. It also needs the checks on the model's way out, and the fixes that keep yesterday's mistake from recurring. That whole apparatus is **the harness**.

The term comes from Mitchell Hashimoto, creator of Terraform and Ghostty, in a February 2026 essay. His formula: Agent = Model + Harness. You rent the model and don't control it. You build and own the harness. His definition of the discipline is a single rule: "anytime you find an agent makes a mistake, you take the time to engineer a solution such that the agent never makes that mistake again."

A recurring mistake, in other words, gets engineered out once, rather than re-prompted around every time it shows up.

## What's actually in a harness

Software has a head start here. It built this exact thing decades ago and called it a test harness: the machinery around a piece of code that feeds it controlled inputs, runs it under known conditions, captures what comes out, and checks it against what should have come out, automatically, the same way every time. The code was the part that kept changing. The harness stayed put, and that fixed apparatus was what made the code safe to depend on.

A model's harness is the same idea, with more of it, because a model is less predictable than code. Put next to the earlier snippets, the model shrinks to a single line and everything around it is the work:

```python
numbers = fetch_q3_revenue(source="finance_db")     # deterministic step: never the model's job
draft   = model(assemble(instructions, numbers))

report  = parse(draft, schema=QuarterlyReport)      # output contract: fail loud, not silent
if not reconciles(report.totals, numbers):          # verification: catch it before the board does
    report = escalate_to_human(draft, "totals off")  # deterministic fallback
```

So a harness is really four things:

- **The context** assembled before the model runs.
- **The output contract** the answer has to satisfy.
- **The verification** that catches a bad answer.
- **The deterministic steps** you keep out of the model's hands.

<figure class="fig">
  <div class="flow-frame">
    <span class="flow-frame-label">the harness: you build and own all of this</span>
    <div class="flow">
      <div class="flow-box"><strong>context</strong><span>data, examples, tools</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-box flow-model"><strong>model</strong><span>rented</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-box"><strong>output contract</strong><span>structure it must satisfy</span></div>
      <div class="flow-arrow" aria-hidden="true"></div>
      <div class="flow-box"><strong>verification</strong><span>checked before anyone acts on it</span></div>
    </div>
  </div>
  <figcaption>The model is the only part you rent. The rest is yours to engineer and test.</figcaption>
</figure>

Hashimoto's own example is a plain text file he keeps in his projects, AGENTS.md, where every line traces back to a specific mistake the agent made once and won't make again:

```
# AGENTS.md: each line is a mistake that happened exactly once
- Run `make verify` before proposing any change.
- Pull revenue from the finance API; do not estimate it.
- New reports must pass the reconciliation check in checks/totals.py.
```

You could read that whole harness in a minute; real ones run to hundreds of such lines.

## Why this isn't only about code

None of this is specific to programming, and that's the part that should interest anyone past the engineering team. A harness is just the engineered, testable system around a model, and any team putting AI into real work is building one, whether they call it that or not.

Take the analyst's quarterly report:

- The **prompt** is "summarize Q3."
- The **context** is which numbers the model is handed, and from where.
- The **output contract** is the structure the report has to follow.
- The **verification** is the check that flags a figure that can't be right before it reaches the board.
- The **deterministic step** is the one you keep away from the model: pulling the real numbers from the system of record instead of letting it recall them.

The prompt is the smallest piece of that. The rest, from the sourcing to the reconciliation check, is the harness, and that's what lets you run the same report next quarter and trust it again.

## Where this leaves your investment

This reframes a decision leaders are making right now. Prompt-tuning is not something you can build a team around. It doesn't accumulate, and it breaks the moment the model changes. A harness is a different kind of asset. It outlives any single model version. It's where your controls and audit trail sit, and it's the part of an AI system you can actually test and improve.

So when someone asks how to make AI reliable, the useful answer points away from the model, since you can rent the same one your competitor has, and toward the harness you build around it.

## Sources

- Mitchell Hashimoto, ["My AI Adoption Journey"](https://mitchellh.com/writing/my-ai-adoption-journey) (Feb 5, 2026)
- Simon Willison, ["Context engineering"](https://simonwillison.net/2025/Jun/27/context-engineering/) (source of the Karpathy and Lütke quotes)
