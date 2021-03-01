---
title: "[5] Mind the Gap: Enlarging the Domain Gap in Open Set Domain Adaptation"
collection: publications
permalink: /publication/2030-01-01-paper-title-number-5
excerpt: ''
date: 2030-01-01	
venue: 'January 01'
paperurl: ''
citation: '<b><u><i>Dongliang Chang</i></u></b>, Aneeshan Sain, Zhanyu Ma\*, Yi-Zhe Song, Jun Guo. Mind the Gap: Enlarging the Domain Gap in Open Set Domain Adaptation[J]. arXiv preprint arXiv:2003.03787, 2020.'
---
<center><img src="https://www.dongliangchang.cn/files/MTS.jpg" class="img-responsive img-rounded" alt="MTS" width="800"></center>
<br/>
<p style="text-align:justify; text-justify:inter-ideograph;">
Unsupervised domain adaptation aims to leverage labeled data from a source domain to learn a classifier for an unlabeled target domain. Among its many variants, open set domain adaptation (OSDA) is perhaps the most challenging, as it further assumes the presence of unknown classes in the target domain. In this paper, we study OSDA with a particular focus on enriching its ability to traverse across larger domain gaps. Firstly, we show that existing state-of-the-art methods suffer a considerable performance drop in the presence of larger domain gaps, especially on a new dataset (PACS) that we re-purposed for OSDA. We then propose a novel framework to specifically address the larger domain gaps. The key insight lies with how we exploit the mutually beneficial information between two networks; (a) to separate samples of known and unknown classes, (b) to maximize the domain confusion between source and target domain without the influence of unknown samples. It follows that (a) and (b) will mutually supervise each other and alternate until convergence. Extensive experiments are conducted on Office-31, Office-Home, and PACS datasets, demonstrating the superiority of our method in comparison to other state-of-the-arts. 
</p>

[Download paper here](https://arxiv.org/abs/2003.03787)<br/>
[Download code here](https://github.com/PRIS-CV/Mutual-to-Separate/) <img src="https://img.shields.io/github/stars/PRIS-CV/Mutual-to-Separate" class="img-responsive img-rounded" >


