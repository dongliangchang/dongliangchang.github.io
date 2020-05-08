---
title: "[1] The Devil is in the Channels: Mutual-Channel Loss for Fine-Grained Image Classification"
collection: highlights
permalink: /highlights/2020-02-20-paper-title-number-1
excerpt: ''
date: 2020-2-20
venue: 'February 20'
paperurl: ''
citation: '***Chang D***, Ding Y, Xie J, et al. The devil is in the channels: Mutual-channel loss for fine-grained image classification[J]. IEEE Transactions on Image Processing, 2020, 29: 4683-4695.'
---

<center><img src="https://www.dongliangchang.cn/files/MC_Loss.jpg" class="img-responsive img-rounded" alt="MC_Loss" width="400"></center>

Abstract: The key to solving fine-grained image categorization is finding discriminate and local regions that correspond to subtle visual traits. Great strides have been made, with complex networks designed specifically to learn part-level discriminate feature representations. In this paper, we show that it is possible to cultivate subtle details without the need for overly complicated network designs or training mechanisms - a single loss is all it takes. The main trick lies with how we delve into individual feature channels early on, as opposed to the convention of starting from a consolidated feature map. The proposed loss function, termed as mutual-channel loss (MC-Loss), consists of two channel-specific components: a discriminality component and a diversity component. The discriminality component forces all feature channels belonging to the same class to be discriminative, through a novel channel-wise attention mechanism. The diversity component additionally constraints channels so that they become mutually exclusive across the spatial dimension. The end result is therefore a set of feature channels, each of which reflects different locally discriminative regions for a specific class. The MC-Loss can be trained end-to-end, without the need for any bounding-box/part annotations, and yields highly discriminative regions during inference. Experimental results show our MC-Loss when implemented on top of common base networks can achieve state-of-the-art performance on all four fine-grained categorization datasets (CUB-Birds, FGVC-Aircraft, Flowers-102, and Stanford Cars). Ablative studies further demonstrate the superiority of the MC-Loss when compared with other recently proposed general-purpose losses for visual classification, on two different base networks.

[Download paper here](https://ieeexplore.ieee.org/document/9005389/)
[Download code here](https://github.com/dongliangchang/Mutual-Channel-Loss/)

