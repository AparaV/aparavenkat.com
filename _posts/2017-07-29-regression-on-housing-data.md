---
layout: post
title: Regression on House Prices
subtitle:
description:
published: true
comments: true
---

Linear regression is perhaps the heart of machine learning. At least where it all started.
And predicting the price of houses is the equivalent of the "Hello World" exercise in starting with linear regression.
This article gives an overview of applying linear regression techniques (and neural networks) to predict house prices using the [Ames dataset](https://ww2.amstat.org/publications/jse/v19n3/decock.pdf).
<!--excerpt_ends-->
This is a very simple (and perhaps naive) attempt at one of the beginner level Kaggle competition.
Nevertheless, it is highly effective and demonstrates the power of linear regression.

## Pre-requisites

This article assumes the reader to be fluent in Python to understand the code snippets.
At least a strong background in other programming languages should be necessary.
We will build our models using Tensorflow.
So basic knowledge Tensorflow would be helpful, but is not a necessity.
The tutorial also assumes the reader is familiar with how Kaggle competitions work.

## The Raw Data

First off, we will need the data. The dataset we will be using is the Ames Housing dataset and can be downloaded from [here](https://www.kaggle.com/c/house-prices-advanced-regression-techniques/data).
Opening up the `train.csv`, you will notice nearly 52 features of 1460 houses.
What each of these features represent is described in `data_description.txt`.
The file `test.csv` differs from `train.csv` in that there are fewer houses and the prices for each of the houses is not present.
We will use the `train.csv` file to train and build our model.
Then, using that model, we will predict the prices for each of the houses in `test.csv`.

You might want to spend some time studying this data by graphing charts, etc. to gain a better understanding of the data.
This will definitely be helpful, but we will not do that.

## Cleaning Data

The cleaning of data refers to many operations. Here we will be performing feature engineering (creating new features),
filling in missing values, feature scaling, and feature encoding.

<script src="https://gist.github.com/AparaV/f47e8054f44547f812788a6aa41233aa.js"></script>

52 features is a bit overwhelming.
And if you have spent time studying what each of these features represent,
you'd probably say that many of the features are redundant to some extent i.e., they play a very small role in the price of a house.
So the first thing we will do is remove these features and make life simpler.
The code snippet describes the features we want to get rid off.
But, before we remove them forever, notice that the total porch area and total number of bathrooms is split into 2 columns.
Again, to make life simpler, we will combine them into a single total porch area and a single total number of bathrooms.
Now, we can go ahead and get rid off all these unwanted features.

The next thing we want to do is handle missing values. There are various ways to tackle this problem.
An aggressive approach is to remove that entire training example.
This can be bad if there are lots of missing values because you will lose too much data.
But then, why would you train a model if you think you don't have enough data?
A simple and effective approach is to replace the missing value with mode (the most frequent value taken by that feature).
A more sophisticated (and maybe better) technique is to study the other features and determine the missing value using probability and statistics.
You might have guessed it - we are going to deal with missing values be replacing it with the mode.

The next thing we want to do is scale down the features.
The motivation behind this is that some of our features have a large range of values.
And this makes it difficult for our optimizer to converge. But, more on that later.
We will use the following method for rescaling.

\\[ x'\_i = \frac{x\_i - min(X)}{max(X) - min(X)}\\]

Here, \\(x\_i\\) is the \\(i^{th}\\) example of the feature \\(X\\) and, \\(min(X)\\) and \\(max(X)\\) refer to the minimum and maximum values the feature \\(X\\) takes respectively.
An important thing to note is that you do not want to scale the output i.e., the Sale Price.
This can lead to large errors in output and leave you clueless for a long time.

In machine learning, we almost always deal with numbers.
But many of the features have letters for values where each letter (or sequence of letters) refer to a particular category.
This is true for many datasets. And it also makes life difficult for us. And we do not like it when life becomes difficult.
So, we will encode each of these features i.e., we will map a one-to-one correspondence from each of these categories to a number.
The code snippet demonstrates how we achieve this.

The data we have now is almost ready for training.

## Splitting Dataset

A standard practice is to split the data into 3 parts - training, validation and test datasets.
We will use the training dataset alone to actually train the model.
Then we will use the errors the model gives on the validation dataset to tune our hyperparamters.
But now, the model we trained has "seen" the validation dataset.
This means that if we were to report the error the model produced using either the training or validation datasets, our real error would be biased because this model has been exposed and modified to minimize the error on these datasets.
This is where the test dataset comes into play.
Its purpose is to serve as an unbiased judge and report the error on the model.

Usually, the dataset is divided as 60% training, 20% validation and 20% testing. And we will follow that fashion.
We will also shuffle the dataset to make sure data is equally distributed across the 3 datasets.

So far we have been dealing with `pandas` dataframes. Tensorflow likes `numpy` arrays better.
So, we will convert the dataframes into matrices. While doing so, we will also separate the inputs, \\(X\\), and outputs, \\(y\\).

<script src="https://gist.github.com/AparaV/902692e441c06604703dbc7ffd2d3680.js"></script>

## Linear Regression

 - Algorithm
 - Implementation
 - Results

## Neural Network

 - Algorithm
 - Implementation
 - Results

## Improvements

 - Regularization
 - Less cleaning up
 - Bins to prevent overfitting

## Final Words
