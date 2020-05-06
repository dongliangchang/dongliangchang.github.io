---
title: "OSLNet: Deep Small-Sample Classification with an Orthogonal Softmax Layer"
collection: publications
permalink: /publication/2009-10-01-paper-title-number-1
excerpt: ''
date: 2020-2-20
venue: 'February 20'
paperurl: ''
citation: 'Li X, Chang D, Ma Z, et al. OSLNet: Deep Small-Sample Classification with an Orthogonal Softmax Layer[J]. arXiv preprint arXiv:2004.09033, 2020.'
---
The key to solving fine-grained image categorization is finding discriminate and local regions that correspond to subtle visual traits. Great strides have been made, with complex networks designed specifically to learn part-level discriminate feature representations. In this paper, we show that it is possible to cultivate subtle details without the need for overly complicated network designs or training mechanisms - a single loss is all it takes. The main trick lies with how we delve into individual feature channels early on, as opposed to the convention of starting from a consolidated feature map. The proposed loss function, termed as mutual-channel loss (MC-Loss), consists of two channel-specific components: a discriminality component and a diversity component. The discriminality component forces all feature channels belonging to the same class to be discriminative, through a novel channel-wise attention mechanism. The diversity component additionally constraints channels so that they become mutually exclusive across the spatial dimension. The end result is therefore a set of feature channels, each of which reflects different locally discriminative regions for a specific class. The MC-Loss can be trained end-to-end, without the need for any bounding-box/part annotations, and yields highly discriminative regions during inference. Experimental results show our MC-Loss when implemented on top of common base networks can achieve state-of-the-art performance on all four fine-grained categorization datasets (CUB-Birds, FGVC-Aircraft, Flowers-102, and Stanford Cars). Ablative studies further demonstrate the superiority of the MC-Loss when compared with other recently proposed general-purpose losses for visual classification, on two different base networks.

[Download paper here](https://arxiv.org/pdf/2004.09033)
[Download code here](https://github.com/dongliangchang/OSLNet/)

