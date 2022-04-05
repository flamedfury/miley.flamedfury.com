---
title: Vogue Magazine 2018
---

<div class="container">
<div class="grid">
{% for image in 2018-vogue %}
<div class="cell">
<a href="{{ image.src }}">
<img src="{{ image.src }}" alt="{{ image.alt }}" title="{{ img.title }}">
</a>
</div>
{% endfor %}
</div>
</div>