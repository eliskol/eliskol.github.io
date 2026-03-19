---
layout: post
title: the open mapping principle
date: 2026-03-18 19:20:16
description: proving the open mapping principle
tags: complex-analysis
categories: math
---

# Statement of the Principle
Let $\Omega \subseteq \mathbb{C}$ be open.
Then let $f \colon \Omega \to \mathbb{C}$ be analytic and nonconstant.
Then $f(\Omega)$ is open in $\mathbb{C}$.

## Proof
Let $a \in \Omega$.
It suffices to show that $f(\Omega)$ contains an open ball centered at $f(a)$.

Without loss of generality we assume that $f(a) = 0$.
Then since $f$ is nonconstant and has a power series expansion about $a$, we may factor $f(z) = (z - a)^k h(z)$ for some $k$ and $h(z)$ analytic such that $h(a) \neq 0$ (the factorization is valid in the domain of convergence of the power series expansion about $a$).
Similar to the Uniqueness Theorem, this tells us that there is some ball about $a$ where $f(z) \neq 0.$
We may also take the radius $r > 0$ of this ball to be small enough such that $f(z) \neq 0$ for $|z-a|=r.$

Now consider the boundary of this ball: $C(a, r)$.
$|f(z)| \neq 0$ on this circle, and it is a bounded set.
So $|f(z)|$ achieves a (positive) minimum on the circle.
Therefore we may consider $\varepsilon = \min_{|z-a| = r} |f(z)| > 0$.
We claim that $B(0, \varepsilon) \subseteq f(\Omega)$.
Observe that $f(|z-a|=r)$ has the same winding number about $w \in B(0, \varepsilon)$ as it does about $0$.
But the winding number about $0$ is nonzero, because $f$ achieves the value $0$ in $|z-a|<r$.
So $f(z)$ also achieves the value $w$ in $|z-a|<r$, i.e., $B(0, \varepsilon) \subseteq f(\Omega)$.

<span style="float:right">$\square$</span>