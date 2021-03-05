---
title: "[2] Your Labrador is My Dog: Fine-Grained, or Not"
collection: publications
permalink: /publication/2021-06-21-paper-title-number-2
excerpt: ''
date: 2021-06-21	
venue: 'Jun 02'
paperurl: ''
citation: '<b><u><i>Dongliang Chang</i></u></b>, Kaiyue Pang, Yixiao Zheng, Zhanyu Ma\*, Yi-Zhe Song, Jun Guo. Your Labrador is My Dog: Fine-Grained, or Not[C]. <b><u><i>Computer Vision and Pattern Recognition (CVPR)</i></u></b>, Oral, 2021.'
---
<center><img src="https://www.dongliangchang.cn/files/labrador.jpg" class="img-responsive img-rounded" alt="labrador" width="800"></center>
<br/>
<p style="text-align:justify; text-justify:inter-ideograph;">
Whether what you see in Figure 1 is a "labrador" or a "dog", is the question we ask in this paper. While fine-grained visual classification (FGVC) strives to arrive at the former, for the majority of us non-experts just "dog" would probably suffice. The real question is therefore -- how can we tailor for different fine-grained definitions under divergent levels of expertise. For that, we re-envisage the traditional setting of FGVC, from single-label classification, to that of top-down traversal of a pre-defined coarse-to-fine label hierarchy -- so that our answer becomes "dog"-->"gun dog"-->"retriever"-->"labrador". To approach this new problem, we first conduct a comprehensive human study where we confirm that most participants prefer multi-granularity labels, regardless whether they consider themselves experts. We then discover the key intuition that: coarse-level label prediction exacerbates fine-grained feature learning, yet fine-level feature betters the learning of coarse-level classifier. This discovery enables us to design a very simple albeit surprisingly effective solution to our new problem, where we (i) leverage level-specific classification heads to disentangle coarse-level features with fine-grained ones, and (ii) allow finer-grained features to participate in coarser-grained label predictions, which in turn helps with better disentanglement. Experiments show that our method achieves superior performance in the new FGVC setting, and performs better than state-of-the-art on traditional single-label FGVC problem as well. Thanks to its simplicity, our method can be easily implemented on top of any existing FGVC frameworks and is parameter-free. 
</p>

[Download paper here](https://arxiv.org/abs/2011.09040)<br/>
[Download code here](https://) 