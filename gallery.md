---
title: Gallery
---

{% assign sortedArtsy = site.data.gallery['artsy'] | sort: 'date' %}

<h3 id="artsy">
  <i aria-hidden="true" class="fa fa-paint-brush"></i>&nbsp; Artsy
</h3>
<p style="text-align: justify; vertical-align: middle;">
  {% for artsyObject in sortedArtsy %}
  <a href="{{ site.uri.assets }}/gallery/artsy/{{ artsyObject.image.full.file }}" rel="me" target="_blank" title="{{ artsyObject.name }}"><img
    alt="{{ artsyObject.name }}" height="{{ artsyObject.image.thumb.height }}" src="{{ site.uri.assets }}/gallery/artsy/{{ artsyObject.image.thumb.file }}"
    style="border: 0px;" width="{{ artsyObject.image.thumb.width }}" /></a>{% unless forloop.last %}&nbsp;{% endunless %}
  {% endfor %}
</p>
