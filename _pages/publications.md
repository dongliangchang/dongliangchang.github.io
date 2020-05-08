---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

International Journal
====
{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}



International Conference
====
{% for post in site.publications_Conference reversed %}
  {% include archive-single.html %}
{% endfor %}

Arxiv
====

[Find more arxiv papers here.](https://arxiv.org/a/chang_d_1.html/)

<!-- Arxiv
====
{% for post in site.publications_Arxiv reversed %}
  {% include archive-single.html %}
{% endfor %} -->