---
layout: post
title: "A lesson in speed and math abstraction"
description: Abstract away the details. Reduce the noise. Let the equations settle down. Now, breathe to see a clearer picture.
subtitle: 
published: true
comments: true
---

When simulating a model, it is easier to take a teleological perspective. It is easier to approach the problem with the end in mind and work backwards, writing code how we would describe the model in words. This is definitely a good start. Sometimes though, as you may have guessed, this does not give the most efficient code.

<!--excerpt_ends-->

I encountered this problem when I was implementing a network SIR model. My original implementation took upwards of 3 hours to complete a single iteration. This is not very ideal, especially when running the model for different parameters to compare results.

There were two bottlenecks in my implementation. To my surprise, when I tried to strip the details away from these bottlenecks, I was left with what resembled a textbook problem from an introductory probability course. And solving these problems in their raw and uncouth form, seeming to have no purpose without the application, I reduced the runtime of a single iteration to less than 2 seconds.

## Bottleneck #01: Infecting people

In the traditional SIR model, there is an infection stage where already infected individuals try to infect the people they come in contact with. In our version of the network SIR model, $$n$$ infected people travel to a different state and try to infect the $$m$$ uninfected people at the destination with probability $$p$$.

My initial thought was to infect every uninfected person with each of the infected $$n$$ people. If at least one of them is successful, then this person becomes infected. So, I naively wrote the following code:

```
infected_possibility = np.random.binomial(n, p, m)
infected_possibility[infected_possibility > 0] = 1
num_infected = np.sum(infected_possibility)
```

Basically, every element in the `infected_possibility` vector tells the number of successful infections inflicted upon that person (after $$n$$ attempts, where each attempt is an independent Bernoulli trial). Then, I binarize the vector and sum it to get the total number of infected people. Clearly, this was super slow.

### A binomial of a binomial

Taking a step back, all I care about is that there is at least one successful infection out of $$n$$ attempts. So, if $$X_i$$ is the total number of successful infections upon person $$i$$, then $$X_i \sim Binomial(n, p)$$. So,

\\[ P(X_i > 0) = 1 - P(X_i = 0)	= 1 - (1-p)^n. \\]

This is the probability that there is at least one successful infection. Now, if I am treating each uninfected individual independently, then I essentially have another set of Bernoulli trials with probability $$1 - (1-p)^n$$. Together, this becomes another binomial. In the end, all I care about is the random variable $$Y \sim Binomial(m, 1 - (1-p)^n)$$.

This interesting turn of events leads to the following code:

```
prob = 1 - (1 - p)**n
num_infected = np.random.binomial(m, prob)
```

Needless to say, this is extremely fast. For $$n = 10, p = 0.1, m = 5000$$, the naive version took $$ 795 \mu s$$ while the mathematically intelligent version took only $$ 9.69 \mu s$$.

## Bottleneck #02: Recovering the infected

Another important step in the SIR model is the recovery step. There are different versions of this stage. In our version, and most other commonly used versions, each infected person can either recover, die, or stay infected with some probabilities $$p_r, p_d, p_i$$ (that sum to 1).

In my first implementation, I decided to use `numpy.random.choice` where my choices were 0 (recovered), 1 (stay infected), and 2 (dead). After randomly choosing from these options, I calculated their respective frequencies like:

```
x = np.random.choice([0, 1, 2], m, p=[p_r, p_i, p_d])
recovered = len(x[x == 0])
dead = len(x[x == 2])
```

While this doesn't seem bad at first glance, numpy's random choice generator can be slow. Besides, there is the masking operation after which I compute the size of the vectors. This made the code really slow. With $$m = 5000$$, it took $$ 529 \mu s$$.

### Uniformly simulate the choices

My initial reaction to fix this problem was to manually simulate the choices with a $$Uniform(0, 1)$$ distribution like:

```
x = np.random.uniform(0, 1, m)
recovered = len(np.asarray(x < p_r).nonzero()[0])
dead = len(np.asarray(x < p_d).nonzero()[0])
```

This improved the performance to $$ 250 \mu s$$. But this was still the bottleneck taking the simulation close to 1 hour to complete a single iteration.

### A multinomial?

Abstract away the details. Now, breathe. What am I trying to do?

I have $$m$$ objects. I want to assign each object to one of three groups. And I only care about the final counts in each group, not the assignment itself. This smells oddly so familiar. Can this be... a multinomial?

Turns out it is as simple as a multinomial distribution, and I was just wasting my energy worrying about the details!

```
x = np.random.multinomial(m, [p_r, p_i, p_d])
recovered = x[0]
dead = x[2]
```

This took an insane 3 hours to realize the connection and only $$ 8.77 \mu s$$ to run.

<hr/> 

In the end, each iteration of this efficient simulation took less than 2 seconds to finish. With this, searching the parameter space and generating results should be very fast.

If you are interested in running the results yourself, the [test notebook](https://gist.github.com/AparaV/11ea3e2b338876ad6fc1aae67fbebad3){:target="_blank"} is available on [GitHub](https://gist.github.com/AparaV/11ea3e2b338876ad6fc1aae67fbebad3){:target="_blank"}. The notebook also has some interesting failed alternate versions not discussed here. One version worth noting is realizing that Bottleneck #01 can also be re-imagined as a geometric distribution 😉

## The Lesson

The lesson here is somewhat of a case for pure mathematics to applied mathematicians. As computer scientists and applied mathematicians, we often focus more on the applications. It becomes easy to get lost in the details of the system that we tend to miss the simplicity and beauty of the underlying mathematics. When we remove the details one by one and reduce the noise, the equations settle down leaving us with a simple, and maybe cute, textbook problem. And if it isn't as simple as that, _then_ you've got some work cut out for you!