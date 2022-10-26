---
layout: ../../layouts/ProjectLayout.astro
title: Clock ORC
date: 2019/10
sumary: Image recognition tool by machine learning to recognize the time on a clock.
tags: 
  - automation
  - machine learning
  - orc
stack: 
  - python
  - matplotlib
  - numpy
  - opencv
  - knearest model
value: 3
thumbnails: 
  - https://github.com/CodyAdam/Machine-learning-OCR/raw/main/FinalResult.png
repo: https://github.com/CodyAdam/Machine-learning-OCR#readme
---


# Machine-learning-OCR

Machine learning Optical Character Recognition (OCR) project. Read the time on a digital clock by inputting an image.

- [Machine-learning-OCR](#machine-learning-ocr)
- [The process](#the-process)
  - [Step 0 : The input image](#step-0--the-input-image)
  - [Step 1 : Homographic transformation](#step-1--homographic-transformation)
  - [Step 2 : Output from the homography](#step-2--output-from-the-homography)
  - [Step 3 : Masking the image](#step-3--masking-the-image)
  - [Step 4 : Process of analysis](#step-4--process-of-analysis)
- [The trainning process](#the-trainning-process)

# The process

## Step 0 : The input image

![](https://github.com/CodyAdam/Machine-learning-OCR/raw/main/Original.png)

We want to extract the time from an image.

## Step 1 : Homographic transformation

![](https://github.com/CodyAdam/Machine-learning-OCR/raw/main/HomographyMatches.png)

Look for the similarity between the reference image and the input image. The goal here is to revert the effect of perspective distortion in order to get a flat image and getting rid of the useless parts of the image.

## Step 2 : Output from the homography

![](https://github.com/CodyAdam/Machine-learning-OCR/raw/main/WrapedImage.png)

If the homography is a success then the image is wrapped and transformed according to the reference homography else the image is the input image.

## Step 3 : Masking the image

![](https://github.com/CodyAdam/Machine-learning-OCR/raw/main/BinaryMask.png)

We create a binary image from the previous image according to a color threshold

## Step 4 : Process of analysis

![](https://github.com/CodyAdam/Machine-learning-OCR/raw/main/FinalResult.png)

We extract each element of the binary image, then the trained model compare these shapes with a bank of images of digits. Then the algorithm returns the corresponding digit.

# The trainning process

![](https://github.com/CodyAdam/Machine-learning-OCR/raw/main/training%20roi.png)

To train ou model we have a bank of images of digits sorted and labeled. We can then use a classification algorithm to train the model.
