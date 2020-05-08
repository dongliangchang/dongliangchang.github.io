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
{% for post in site.publications_Journal reversed %}
  {% include archive-single.html %}
{% endfor %}

International Conference
====
{% for post in site.publications_Conference reversed %}
  {% include archive-single.html %}
{% endfor %}

Arxiv
====
{% for post in site.publications_Arxiv reversed %}
  {% include archive-single.html %}
{% endfor %}