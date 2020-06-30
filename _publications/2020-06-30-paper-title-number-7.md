---
title: "[7] OSLNet: Deep Small-Sample Classification with an Orthogonal Softmax Layer"
collection: publications
permalink: /publication/2020-06-30-paper-title-number-7
excerpt: ''
date: 2020-06-30
venue: 'June 30'
paperurl: ''
citation: 'Xiaoxu Li, <b><u><i>Dongliang Chang</i></u></b>, Zhanyu Ma\*, Zheng-Hua Tan, Jing-Hao Xue, Jie Cao, and Jun Guo. OSLNet: Deep Small-Sample Classification with an Orthogonal Softmax Layer[J]. <b><u><i>IEEE Transactions on Image Processing</i></u></b>, 2020.'
---
<!-- <center><img src="https://www.dongliangchang.cn/files/OSLNet.jpg" class="img-responsive img-rounded" alt="OSLNet" width="800"></center> -->


<p style="text-align:justify; text-justify:inter-ideograph;">
Abstract: Deep neural networks have recently shown excellent performance on numerous image classification tasks. These networks often need to estimate a large number of parameters and require much training data. When the amount of training data is small, however, a network with high flexibility quickly overfits the training data, resulting in a large model variance and poor generalization. To address this problem, we propose a new, simple yet effective ensemble method called InterBoost for small-sample image classification. In the training phase, InterBoost first randomly generates two sets of complementary weights for training data, which are used for separately training two base networks of the same structure, and then the two sets of complementary weights are updated for refining the training of the networks through interaction between the two base networks previously trained. This interactive training process continues iteratively until a stop criterion is met. In the testing phase, the outputs of the two networks are combined to obtain one final score for classification. Experimental results on four small-sample datasets, UIUC-Sports, LabelMe, 15Scenes and Caltech101, demonstrate that the proposed ensemble method outperforms existing ones. Moreover, results from the Wilcoxon signed-rank tests show that our method is statistically significantly better than the methods compared. Detailed analysis is also provided for an in-depth understanding of the proposed method. Keywords: Ensemble learning, Deep neural network, Small-sample image classification, Overfitting. 
</p>

[Download paper here](https://)<br/>
[Download code here](https://) <img src="https://img.shields.io/github/stars/PRIS-CV/OSLNet" class="img-responsive img-rounded" >


