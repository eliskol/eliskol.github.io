---
layout: post
title: cauchy's integral formula
date: 2026-03-17 22:33:16
description: proving cauchy's integral formula
tags: complex-analysis
categories: math
---

I've been reviewing for my Complex Analysis final, and making sure I know how to prove the big theorems we've covered.
I figured I might like to post this on my website so that I can make sure I have my understanding down pat.

# Statement of the Theorem

Let $f$ be an analytic function on an open set $U \subseteq \mathbb{C}$.
Let $W \subseteq U$ be relatively compact.
Then if $a \in W$ and $r > 0$ such that $D(a, r)$[^1] $\subseteq W$, we have $f(a) = \frac{1}{2 \pi i} \int_{\partial W} \frac{f(z)}{z-a} dz$.

[^1]: Here, <span class="math inline">\$D(a, r) = \\{z \in \mathbb{C} \colon |z-a| < r\\}\$.</span>
## Proof

Define $W_r = W \setminus D(a, r)$.
Then the function $\frac{f}{z-a}$ is analytic on $W_r$, since $a \not\in W_r$.
Now let's consider the integral $\int_{\partial W_r} \frac{f(z)}{z-a} dz.$
By Stokes' Theorem, we have that
\\[\int_{\partial W_r} \frac{f(z)}{z-a} dz = \int_{W_r} d \left(\frac{f(z)}{z-a} dz \right).\\]
But this is $0$ because $\frac{f(z)}{z-a}$ is analytic.
Now,
\\[0 = \int_{\partial W_r} \frac{f(z)}{z-a} dz = \int_{\partial W} \frac{f(z)}{z-a} dz - \int_{|z-a|=r} \frac{f(z)}{z-a} dz.\\]

So we just need to show that $\int_{|z-a|=r} \frac{f(z)}{z-a} dz = 2 \pi i f(a)$.
Parametrize $|z-a|=r$ as $z = a + r e^{i \theta}$ for $\theta \in [0, 2 \pi]$.
Then we have $dz = i r e^{i \theta} d\theta$.
Our integral becomes
\\[i \int_0^{2 \pi} f(a + r e^{i \theta}) d\theta.\\]

Now notice that $f$ is continuous since it's analytic, and since $W$ was relatively compact, we have that $f(a + r e^{i \theta})$ converges uniformly to $f(a)$ as we take $r \to 0$.
Since our integral expression holds for any $r$ small enough, we pass through the limit to find that
\\[\int_{\partial W} \frac{f(z)}{z-a} dz = i \int_0^{2 \pi} f(a)d\theta = 2 \pi i f(a),\\]
which proves the theorem.

<span style="float:right">$\square$</span>

Note that while we proved this theorem, we also proved Gauss' MVT!

Thanks to Mihai Putinar for the proof from MATH CS 122A.