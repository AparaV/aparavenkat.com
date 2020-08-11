---
layout: post
title: Estimating the Number of Free Bike Racks
description: What is the probability that there is no space on the bike racks when you want to carry your bike on the bus?
subtitle:
published: true
comments: true
---

If you have ever carried your bike on a RTD bus in Colorado, or even if you have just travelled in one, you will know that each bus has two bike racks at the front. Placing and retrieving your bike from these racks is almost effortless. If these racks are full, then you will have to store your bike in the storage compartment. Now, this can be really messy. Especially if someone else stores their bike after you (so your bike gets pushed back) and you get off before them (so you will need to take their bike out; take your bike out and; put their bike back in).

<!--excerpt_ends-->

Luckily, only a small number of passengers bring their bike on the bus. So, unless you are riding with your bike during rush hour, there is usually space in the bike racks. One morning, I noticed that the bike racks were full. Naturally, I assumed that this was a rush hour and it would be difficult for me to find a seat in the bus. However, there were only 8 passengers! This intrigued me. What are the odds that out of 8 passengers, 2 of them brought their bikes?

I immediately got down to solving something that resembled a classic example taken from a probability textbook.

### A Binomial Distribution

> Let the probability that each passenger carries their bike on the bus be $$p$$. Now, suppose there are $$N \geq 2$$ passengers. What is the probability that at least two of them bring their bike?

This is simply a [Binomial distribution](https://en.wikipedia.org/wiki/Binomial_distribution){:target="_blank"}. Let $$X$$ denote the number of bikes. Then $$X \sim Binom(n, p)$$. And we have:

\\[Pr(X = k \| N = n) = \binom{n}{k} p^{k} (1-p)^{n-k} \\]
\\[Pr(X \geq 2 \| N = n) = \sum_{k=2}^{n} \binom{n}{k} p^{k} (1-p)^{n-k} \\]

### A Generative Process

If I know how many passengers are on the bus, I have a quantitative estimate of the number of free bike racks. However, while I am still waiting for the bus and cranking out probabilities, I do not have any prior knowledge about the number of passengers. This is where we have the liberty to make the problem interesting by coming up with a generative process for the number of passengers, $$N$$. Here are some basic facts to get started:

- $$N$$ is a discrete variable.
- There are different bus stops where passengers can get on (or get off). Think of these bus stops as discrete time intervals, and each passenger getting on at a bus stop as a single event.
- The number of passengers getting on at each bus stop can be considered independent of the number of passengers getting on at the previous stop.

This almost looks to me like a [Poisson process](https://en.wikipedia.org/wiki/Poisson_distribution){:target="_blank"}. The only hiccup is that, more passengers may get on at a larger bus stop i.e., the rate at which events occur is not constant (something that is fundamental to a Poisson distribution). But, we can still approximate $$N$$ using a Poisson distribution, hoping that the difference in rates of events cancel each other. So, $$N \sim Poisson(\lambda)$$ where $$\lambda$$ is the average number of passengers getting on a particular bus stop.

\\[Pr(N = n) = e^{-\lambda} \frac{\lambda^n}{n!} \\]

### Putting everything together

The Law of Total Probability gives a way to directly estimate the likelihood of $$X$$:

\\[Pr(X = x) = \sum_{n} Pr(X = x \| N = n) Pr(N = n) \\]

Since we want to know $$Pr (X \geq 2)$$, we have $$n \geq 2$$. Further, the seating capacity of a bus is $$N_{max}$$. So, $$2 \leq n \leq N_{max}$$. Putting everything together, we have:

\\[Pr(X \geq 2) = \sum\_{n=2}^{N\_{max}} Pr(X \geq 2 \| N = n) Pr(N = n) \\]
\\[Pr(X \geq 2) = \sum\_{n=2}^{N\_{max}} \Big(\sum_{k=2}^{n} \binom{n}{k} p^{k} (1-p)^{n-k} e^{-\lambda}\Big) \frac{\lambda^n}{n!} \\]


### More Data

There is some neat math going on here. But, how much of what has been proposed is actually valid? This is where data can help validate (or discard) this model.

We can get a crude estimate of $$p$$ relatively easily. Just set $$p$$ to be the fraction of people in Colorado who own a bike (which can be estimated with the number of bikes sold and the population). Fancier techniques can be used to polish this estimate, but this will suffice as a good starting point. Estimating $$\lambda$$ is the difficult part. We need data about how many people use the public bus. While I am sure this information is collected by the RTD, getting access to it is a different problem.

<hr />

If you know where I can get access to such data, or have ideas to overcome this limitation, you should definitely [contact me]({{ site_url }}/contact)!