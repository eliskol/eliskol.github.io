---
layout: post
title: the maximum modulus principle
date: 2026-03-18 13:03:16
description: proving the maximum modulus principle
tags: complex-analysis
categories: math
---

# Statement of the Principle
Let $\Omega \subseteq \mathbb{C}$ be open, and $f \colon \Omega \to \mathbb{C}$ an analytic, nonconstant function.
Then $f$ does not attain a maximum on $\Omega$.

## Proof
Let $a \in \Omega$.
Then we know by Cauchy's integral formula that $f(a) = \frac{1}{2 \pi i} \int_{|z-a|=r} \frac{f(z)}{z-a} dz$, for $r > 0$ such that the closed disc of radius $r$ about $a$ is contained in $\Omega$.
If we parametrize with $z = a + r e^{i \theta}$, we find that $dz = i r e^{i \theta} d\theta$ and the integral becomes
\\[f(a) = \frac{1}{2 \pi} \int_0^{2\pi} f(a + re^{i \theta}) d\theta.\\]
Then we apply the modulus bound on the integral:
\\[|f(a)| \leq \max_{|z-a|=r} |f(z)|.\\]
If we have strict inequality for some $r$, then we have that $f(a)$ cannot be a maximum of $f$.

So suppose that we have equality for all $r$ small enough for the disc condition to hold.
This means that $f(z)$ must be constant for $|z-a|=r$.
And since we can make $r$ as small as we want and $f(z)$ is still constant on that circle, this means that $f(z)$ is constant in a neighborhood of $a$.
Hence by the Uniqueness Principle, $f$ is constant in $\Omega$, contradicting our assumption that $f$ is nonconstant.
So $f$ cannot have a maximum modulus in $\Omega$.

<span style="float: right">$\square$</span>