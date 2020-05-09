---
title: "[4] Fine-Grained Vehicle Classification with Channel Max Pooling Modified CNNs"
collection: publications
permalink: /publication/2019-02-21-paper-title-number-4
excerpt: ''
date: 2019-2-21
venue: 'February 21 '
paperurl: ''
citation: 'Ma Z, <b>Chang D</b>, Xie J, et al. Fine-grained vehicle classification with channel max pooling modified CNNs[J]. IEEE Transactions on Vehicular Technology, 2019, 68(4): 3224-3233.'
---
<p style="text-align:justify; text-justify:inter-ideograph;">
Abstract: Convolutional neural networks (CNNs) have recently shown excellent performance on the task of fine-grained vehicle classification, where the motivation is to identify the fine-grained categories of the given vehicles. Generally speaking, the main motivation of the conventional back-propagation algorithm is to optimize the loss function. The algorithm itself does not guarantee if the extracted features are discriminative for the task of classification. Intuitively, if we can learn more discriminative features with a relatively small number of feature maps, the generalization ability of the CNNs will be significantly improved. Therefore, we propose a channel max pooling (CMP) scheme, where a new layer is inserted between the fully connected layers and the convolutional layers. The proposed CMP scheme divides the feature maps into to several sub-groups. Then, it compresses the feature maps within each sub-group into a new one. The compression is carried out by selecting the maximum value among the same locations from different feature maps. Moreover, the proposed CMP layer has the advantage that it can reduce the number of parameters via reducing the number of channels in the CNNs. Experimental results on two fine-grained vehicle datasets demonstrate that the CMP modified CNNs can improve the classification accuracies on the task of fine-grained vehicle classification while a massive amount of parameters are reduced. Moreover, it has competitive performance when comparing with the-state-of-the-art methods.
</p>

[Download paper here](https://ieeexplore.ieee.org/document/8648206/)
