---
layout: post
title: the uniqueness principle
date: 2026-03-18 13:18:16
description: proving the uniqueness principle
tags: complex-analysis
categories: math
---

# Statement of the Principle
Let $f$ be an analytic function on a region $D$.
Then if $f = 0$ on a set of points $\\{z_k\\} \subseteq D$ with an accumulation point in $D$, then $f$ is identically zero on $D$.

## Proof
We prove the contrapositive.
Suppose that $f$ is not identically zero on $D$.
Let $V(f) = \\{z \in D \colon f(z) = 0\\}$.
We will show that this set cannot have any accumulation points.

Suppose that $z_0 \in V(f)$.
Then since $f$ is analytic, it has a power series expansion $f(z) = f(z_0) + c_1 z + \cdots$ convergent for $|z-z_0| < r$ for some $r > 0$.
There must be a first nonzero coefficient since $f$ is not constant, say $c_k$.
We factor:
\\[f(z) = (z - z_0)^k h(z)\\]
where $h(z)$ is analytic and $h(z_0) \neq 0$.

By the analyticity and hence continuity of $h$, there exists some $\delta > 0$ such that $|z-z_0| < \delta$ implies $h(z) \neq 0$.
We also have that for $0 < |z-z_0| < \delta$, $(z-z_0)^k \neq 0$.
So
\\[f(z) \neq 0, \quad\quad 0 < |z-z_0| < \delta.\\]
Therefore the set of zeroes of $f$ cannot have an accumulation point in $D$.

<span style="float:right">$\square$</span>