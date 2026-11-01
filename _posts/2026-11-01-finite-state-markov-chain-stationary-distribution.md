---
layout: post
title: "A Markov chain with finite state space has at least one stationary distribution"
date: 2026-11-01
description: ""
tags: markov-chains probability
categories: math
related_posts: false
---

I was reading the lecture notes for my PSTAT 160A class when I came across the following:

# Fact
A Markov chain with finite state spce hsa at least one stationary distribution.

Unfortunately, there was no proof included in the lecture notes, but it's pretty easy to prove.
So here's my proof!

# Proof
Let $P$ be the transition matrix for such a Markov chain.
Then the columns of $P^T - I$ must sum to $0$, so $P^T - I$ has a nontrivial left null space.
But since column and row rank are the ssame, $P^T - I$ also has nontrivial right null space.
Therefore there exists some vector $\vec{v}$ such that $P^T \vec{v} = \vec{v}$.
Right now, we don't know that the vector $\vec{v}$ has all positive entries, or that its entries sum to $1$ as needed from a probability vector.

But now we can consider the component-wise absolute value of $\vec{v}$:
\\[|\vec{v}| = |P^T \vec{v}| \leq P^T |\vec{v}|,\\]
where the inequality holds from the triangle inequality.
Let's examine the entries of $P^T |\vec{v}|$:

$$
(P^T |\vec{v}|)_i = \sum_{k} P^T_{ik} |\vec{v}|_k.
$$

And since the columns of $P^T$ sum to $1$, the sum of the entries in $P^T |\vec{v}|$ is the same as the sum of the entries in $|\vec{v}|$.
These are both non-negative vectors so our previous inequality must be equality.

Now that we have shown that $\lvert\vec{v}\rvert$ is a non-negative right eigenvector of $P^T$ with eigenvalue $1$, dividing by the sum of its entries give us a probability vector which is a stationary distribution.

<span style="float:right">$\square$</span>