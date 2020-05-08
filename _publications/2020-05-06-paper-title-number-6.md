---
title: "[6] OSLNet: Deep Small-Sample Classification with an Orthogonal Softmax Layer"
collection: publications
permalink: /publication/2020-05-06-paper-title-number-6
excerpt: ''
date: 2020-05-06
venue: 'May 06'
paperurl: ''
citation: 'Li X, <b>Chang D</b>, Ma Z, et al. OSLNet: Deep Small-Sample Classification with an Orthogonal Softmax Layer[J]. arXiv preprint arXiv:2004.09033, 2020.'
---
Abstract: A deep neural network of multiple nonlinear layers forms a large function space, which can easily lead to overfitting when it encounters small-sample data. To mitigate overfitting in small-sample classification, learning more discriminative features from small-sample data is becoming a new trend. To this end, this paper aims to find a subspace of neural networks that can facilitate a large decision margin. Specifically, we propose the Orthogonal Softmax Layer (OSL), which makes the weight vectors in the classification layer remain orthogonal during both the training and test processes. The Rademacher complexity of a network using the OSL is only 1K, where K is the number of classes, of that of a network using the fully connected classification layer, leading to a tighter generalization error bound. Experimental results demonstrate that the proposed OSL has better performance than the methods used for comparison on four small-sample benchmark datasets, as well as its applicability to large-sample datasets. 

[Download paper here](https://doi.org/10.1109/TIP.2020.2990277)
[Download code here](https://github.com/dongliangchang/OSLNet/)


