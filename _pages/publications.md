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

permalink: /publications_Conference/
{% include base_path %}

International Conference
====
{% for post in site.publications_Conference reversed %}
  {% include archive-single.html %}
{% endfor %}

permalink: /publications_Arxiv/
{% include base_path %}

Arxiv4
====
{% for post in site.publications_Arxiv reversed %}
  {% include archive-single.html %}
{% endfor %}