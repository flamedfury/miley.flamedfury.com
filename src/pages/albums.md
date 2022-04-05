---
title: Album Discography
date: 2022-04-05
---



<ul>
{% for post in collections.albums %}
<li><a href="{{ post.url }}">{{ post.data.title }}</a> {{ post.data.year }}</li>
{% endfor %}
</ul>