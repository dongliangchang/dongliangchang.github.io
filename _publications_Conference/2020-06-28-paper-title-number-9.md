---
title: "[9] Attention-guided dropout for image classification"
collection: publications
permalink: /publication/2020-06-28-paper-title-number-9
excerpt: ''
date: 2020-06-28	
venue: 'June 28'
paperurl: ''
citation: ' <b><u><i>Dongliang Chang</i></u></b>, Junhui Yin, Jiyang Xie, and Zhanyu Ma\*. Attention-guided dropout for image classification[c]. 全国图象图形学学术会议(NCIG), 2020.'
---
<p style="text-align:justify; text-justify:inter-ideograph;">
Abstract: When a large scale neural network is trained on a small training set, it typically yields "overfitting", i.e., the model performs poorly on held-out test data. Therefore, various dropout techniques have been proposed to alleviate this problem. These techniques randomly focus on (or drop) some features to alleviate the co-adaptation of feature detectors. Hence, it will potentially increase the classification accuracy of models. However, the aforementioned methods cannot directly encourage the model to learn less discriminative parts, which is also important to reduce overfitting. To address this problem, we propose an Attention- guided Dropout (AD), which utilizes the self-attention mechanism to alleviate the co-adaptation of feature detectors in a more effective way. The AD has two distinctive components, the importance measure mechanism for feature maps and the dropout with a learnable probability. The importance measure mechanism calculates the importance for each feature map in whole by a Squeeze-and-Excitation block. The dropout with a learnable probability can force the "bad" neurons to learn a better representation by dropping the "good" neurons. Therefore, it will diminish the co-adaptation and encourage model to learn the less discriminative part. The experimental results show that the proposed method can be easily applied to various convolutional neural network (CNN) architectures. Meanwhile, we also demonstrate that the proposed method with a proper dropout rate can prevent overfitting. The proposed strategy is better than some existing methods, when the number of training samples is drastically reduced.
</p>

[Download paper here](https://)
