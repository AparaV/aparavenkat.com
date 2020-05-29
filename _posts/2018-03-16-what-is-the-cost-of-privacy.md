---
layout: post
title: The Cost of Privacy
description: What would happen if you were able to trade your personal information legally? This paper discusses the mathematics of such a world along with the ethical and philosophical issues that tag along.
subtitle:
published: true
comments: true
---


**UPDATE 4/24/2018** I am pleased to say that our paper was selected as a *Meritorious Winner* (one of the top 10%)!

Every year, the [Consortium for Mathematics and its Applications (COMAP)](http://www.comap.com/undergraduate/contests/){:target="_blank"} hosts an international contest for high school students and college undergraduates where the participants get to work in teams of upto 3 to analyze, and propose solutions to open ended problems. COMAP releases 6 problems (3 of which are mathematical, and the other 3 incorporate interdisciplinary ideas) at the beginning of the contest. The contest itself takes place over 4 days, and at the end, the teams submit a 20 page report on their work.
<!--excerpt_ends-->

## Background

Our team chose to model the cost of privacy. This is a particulatly interesting problem because private information (PI) can reveal a person's personality, ideas, interests, and identity. And, social media networks like Facebook and Google are already using our PI to make profits. However, there is no system in place for the owner to receive financial compensation.

Modelling financial compensation for PI is no simple task. This is a senstive measure and highly dependant on risk and benefits associated with each person sharing their information. This not only varies from person to person, but also varies with what kind of information is being shared. We explored the value of PI and created a model that considers the trade of PI in a free market.

After considering the subjective nature of the task at hand, we are still left with addressing the politicial, cultural and ethical implications of the free trade of PI.

## Problem Summary

The problem can be conquered by dividing it into the following sub-problems:
1. Develop a price point for PI that takes into account the risks and benefits involved in sharing data with an unknown third party
2. With the help of the price point, create a pricing structure for PI
3. Using this pricing structure, develop a pricing system that treats PI as a commodity that could be traded
4. The model we develop should also take into account that human data is highly correlated i.e., the model should effectively capture the network effects of data sharing
5. We also need to consider the political, cultural and ethical implications of PI being available for sale

## Our Model

Without going into the [details](#full-report) of the model, we created a model with the following characteristics:
- To create a price point for PI, we took a weighted average approach. We accounted for characteristics (such as education, age, etc.) that are most relevant to each specific facet of PI (social media, finance, general ID, etc.) and factored in the risk associated with people sharing their PI depending on the characteristics.
- Using this price point, we developed a pricing structure that depends on the actual value of each PI record (name, birthday, bank information, etc.). With this pricing structure we turned PI into a commodity and brought in forces of supply and demand for PI under the assumptions of a free market.
- To effectively capture the network effects of data sharing, we used network ranking algorithms (PageRank) to determine how much influence a person has in their society. We factored this into our pricing structure while also keeping in mind how connected the network is. Further, we also discussed the use of community detection algorithms (SpringRank) to get a better measure of how connected a person is.

It turns out that our model works under the assumptions of a free market and obeys the laws of microeconomics. Therefore, our model can theoretically scale well to real markets with factors such as government regulation and international trade.

## Full Report

The complete discussion of our model is beyond the scope of this blog post. For more details, such as the assumptions of our model; the mathematics of our model; the strengths and weaknesses of our model and; sensitivity analysis and; a closer look at the ethical issues surrounding the trade of PI, do read the actual paper [here](/assets/pdf/cost-of-privacy.pdf){:target="_blank"}

## Acknowledegements

Shout out to my awesome teammates, Johann and Brendan. <br/>
I also want to thank Anne Dougherty, the head of the Applied Math Department at CU Boulder. <br/>
And, of course, I also want to extend my thanks to the Engineering Honors Program for giving us the space and resources to work for 4 straight days on just math.