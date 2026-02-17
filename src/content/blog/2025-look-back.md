---
title: "A Look Back at 2025: Building Better Systems (And Trusting Them)"
description: "Reflecting on the tension between AI acceleration in MBSE and the need for rigorous human-autonomy risk analysis."
pubDate: 2026-02-15
tags: ["Systems Engineering", "MBSE", "AI", "Human Factors", "Research"]
image: "/blog/2025-look-back-cover.svg"
---

2025 was a bit of a whirlwind year for the research. Looking back at the last few months, two specific pieces of work stand out to me—not just because they took a lot of coffee to get over the line, but because they represent the two tensions I’m constantly wrestling with: how do we build complex systems faster, and how do we make sure they don’t break when humans actually have to use them?

It’s effectively a push and pull between acceleration and assurance. Here is a bit of a recap of where my head was at in the latter half of the year, along with some other reading that has helped shape my thinking.

## 1. The Accelerator: MBSE Co-Pilot

*Published September 2025 in Systems Engineering (INCOSE / Wiley)*

In September, we published **"[MBSE Co-Pilot: A Research Roadmap](https://repository.lboro.ac.uk/articles/journal_contribution/MBSE_Co_Pilot_a_research_roadmap/30069697)."**

The reality is that Model-Based Systems Engineering (MBSE) is incredibly powerful, but it can also be painfully slow and resource-heavy. We wanted to look past the AI hype and figure out a concrete roadmap for how AI agents—specifically LLMs—could actually act as "co-pilots" in this workflow.

We focused on the practical integration: how do you get an AI to help derive requirements or check consistency without wrecking the semantic integrity of the model? It’s about moving AI from a text generator to a genuine engineering assistant.

**If you want to dig deeper into the debate, check these out:**

* **For the "Cautionary" View:** *[On the Dangers of Stochastic Parrots](https://dl.acm.org/doi/10.1145/3442188.3445922) (Bender et al., 2021).*
  I always go back to this when I feel too optimistic. It’s a necessary reminder that LLMs are probabilistic, not logical. It challenges us to think hard about whether we can ever fully trust an AI to handle the rigid logic required in systems engineering.
* **For the "Foundational" View:** *[Large Language Model for Requirements Engineering: A Systematic Literature Review](https://doi.org/10.21203/rs.3.rs-5589929/v1?urlappend=%3Futm_source%3Dresearchgate.net%26utm_medium%3Darticle) (Khan et al., 2024).*
  There has been a lot of work recently (like this survey) on using NLP for requirements traceability. Our roadmap builds on this—taking that text-based capability and forcing it into the structured world of MBSE.

## 2. The Brake Check: Left-Shifting Human-Autonomy Risk

*Published December 2025 (arXiv Preprint)*

On the flip side, in December we put out **"[Left Shifting Analysis of Human-Autonomous Team Interactions](https://arxiv.org/abs/2512.03524)."**

While the first paper was about building, this one was about control. When we put autonomy into high-stakes environments—like defence or healthcare—things rarely fail because the code crashes; they fail because the human and the machine confuse each other.

We argued for "left shifting" this analysis. Instead of waiting until the system is built to test how humans handle it, we developed a framework to characterise those risks—like automation bias or mode confusion—right at the start of the design phase. It’s about treating the human-machine relationship as a distinct design element, not an afterthought.

**Two classic papers I’d recommend reading alongside this:**

* **The "Why This Matters" Read:** *[The Ironies of Automation](https://davidjusth.com/s/Ironies-of-Automation_Bainbridge_1983.pdf) (Lisanne Bainbridge, 1983).*
  This is an absolute classic. Bainbridge argued decades ago that the more we automate, the *harder* the remaining tasks become for the human operator. It’s the foundational counter-argument to the idea that autonomy simply "reduces workload."
* **The "Methodological" Read:** *[Engineering a Safer World](https://direct.mit.edu/books/oa-monograph/2908/Engineering-a-Safer-WorldSystems-Thinking-Applied) (Nancy Leveson).*
  If you haven't read Leveson’s work on STPA (System-Theoretic Process Analysis), you should. Our work on "left shifting" owes a lot to the systems thinking mindset she champions—viewing safety as a control problem, not a component failure problem.

## Final Thoughts

Heading into 2026, I think the sweet spot lies right in the middle of these two papers. We need the speed of the Co-Pilot to handle the complexity, but we need the rigorous, human-centric risk analysis to ensure we aren't just designing unsafe systems faster.
