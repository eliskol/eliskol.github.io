---
layout: post
title: liouville's theorem
date: 2026-03-18 13:32:16
description: proving liouville's theorem
tags: complex-analysis
categories: math
---

# Statement of the Theorem
Let $f \colon \mathbb{C} \to \mathbb{C}$ be an entire function.
If $f$ is bounded, then $f$ is constant.

## Proof
Suppose $f$ is an entire bounded function.
Say $|f| \le M$.
Let $a, b \in \mathbb{C}$.
We will show that $f(a) = f(b)$ by calculating the difference.

Let $R > 0$ be large enough so that $\|a\|, \|b\| < R$.
Then since $f$ is entire, we have that $f(a) = \frac{1}{2 \pi i} \int_{|z| = R} \frac{f(z)}{z-a} dz$ and $f(b) = \frac{1}{2 \pi i} \int_{|z| = R} \frac{f(z)}{z-b} dz$.

Then we find that
\\[f(a)-f(b) = \frac{1}{2 \pi i} \int_{|z| = R} \frac{f(z) (a-b)}{(z-a)(z-b)} dz.\\]
We use the modulus bound for integrals:
\\[|f(a)-f(b)| \leq \frac{M R |a-b|}{(R-|a|)(R-|b|)}.\\]
And since we may take $R$ as large as we want, we find that $|f(a)-f(b)|=0$.
Hence $f$ is constant.

<span style="float:right">$\square$</span>