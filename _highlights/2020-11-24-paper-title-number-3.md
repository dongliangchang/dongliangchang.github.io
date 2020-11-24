---
title: "[3] Your" Labrador" is My" Dog": Fine-Grained, or Not"
collection: highlights
permalink: /highlights/2020-11-24-paper-title-number-3
excerpt: ''
date: 2020-11-24
venue: 'November 24'
paperurl: ''
citation: '<b><u><i>Dongliang Chang</i></u></b> and Pang, Kaiyue and Zheng, Yixiao and Ma, Zhanyu and Song, Yi-Zhe and Guo, Jun. Your" Labrador" is My" Dog": Fine-Grained, or Not. <b><u><i>arXiv preprint arXiv:2011.09040</i></u></b>, 2020.'
---

<center><img src="https://www.dongliangchang.cn/files/labrador.jpg" class="img-responsive img-rounded" alt="labrador" width="800"></center>


<p style="text-align:justify; text-justify:inter-ideograph;">
Whether what you see in Figure 1 is a “labrador” or a “dog”, is the question we ask in this paper. While fine-grained visual classification (FGVC) strives to arrive at the former, for the majority ofus non-experts just “dog” would probably suffice. The real question is therefore – how can we tailor for different fine-grained definitions under divergent levels of expertise. For that, we re-envisage the traditional setting of FGVC, from single-label classification, to that oftop-down traversal of a pre-defined coarse-to-fine label hierarchy – so that our answer becomes “dog”⇒“gun dog”⇒“retriever”⇒“labrador”. <br/>
To approach this new problem, we first conduct a comprehensive human study where we confirm that most participants prefer multi-granularity labels, regardless whether they consider themselves experts. We then discover the key intuition that: coarse-level label prediction exacerbates fine-grained feature learning, yet fine-level feature betters the learning of coarse-level classifier. This discovery enables us to design a very simple albeit surprisingly effective solution to our new problem, where we (i) leverage level specific classification heads to disentangle coarse-level features with fine-grained ones, and (ii) allow finer-grained features to participate in coarser-grained label predictions, which in turn helps with better disentanglement. Experiments show that our method achieves superior performance in the new FGVC setting, and performs better than state-of-the-art on the traditional single-label FGVC problem as well. Thanks to its simplicity, our method can be easily implemented on top of any existing FGVC frameworks and is parameter-free. 
</p>

[Download paper here](https://arxiv.org/abs/2011.09040)<br/>
[Download code here](https://github.com/dongliangchang) 
