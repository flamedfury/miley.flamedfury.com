---
title: Vanity Fair 2019
---

<div class="container">
<div class="grid">
{% for image in 2019-vanity-fair %}
<div class="cell">
<a href="{{ image.src }}">
<img src="{{ image.src }}" alt="{{ image.alt }}" title="{{ img.title }}">
</a>
</div>
{% endfor %}
</div>
</div>