---
image:
  height: 386
  path: "https://assets.forces.army/naked/images/hotlink-ok/art-gallery_393x386.png"
  width: 393
title: Gallery
---

{% assign sortedArtsy = site.data.gallery['artsy'] | sort: 'name', 'first' | sort: 'date', 'first' | reverse %}
{% assign sortedMe = site.data.gallery['me'] | sort: 'name', 'first' | sort: 'date', 'first' | reverse %}

{% if page.adSense != false %}
{% include adsense_responsive.htm %}
{% endif %}
<p>
  &nbsp;
</p>
<h3 id="artsy">
  <i aria-hidden="true" class="fa fa-paint-brush"></i>&nbsp; Artsy
</h3>
<p style="text-align: justify;">
  {% for artsyObject in sortedArtsy %}
  <a href="{{ site.uri.assets }}/gallery/artsy/{{ artsyObject.image.full.file }}" rel="me" target="_blank" title="{{ artsyObject.name }}"><img
    alt="{{ artsyObject.name }}" height="{{ artsyObject.image.thumb.height }}" src="{{ site.uri.assets }}/gallery/artsy/{{ artsyObject.image.thumb.file }}"
    style="border: 0px; margin-bottom: 10px; margin-top: 10px; vertical-align: middle;" width="{{ artsyObject.image.thumb.width }}" /></a>{% unless forloop.last %}&nbsp;{% endunless %}
  {% endfor %}
</p>
<p>
  &nbsp;
</p>
<h3 id="artsy">
  Me, Myself, and I
</h3>
<p style="text-align: justify;">
  {% for meObject in sortedMe %}
  <a href="{{ site.uri.assets }}/gallery/me-myself-and-i/{{ meObject.image.full.file }}" rel="me" target="_blank" title="{{ meObject.name }}"><img
    alt="{{ meObject.name }}" height="{{ meObject.image.thumb.height }}" src="{{ site.uri.assets }}/gallery/me-myself-and-i/{{ meObject.image.thumb.file }}"
    style="border: 0px; margin-bottom: 10px; margin-top: 10px; vertical-align: middle;" width="{{ meObject.image.thumb.width }}" /></a>{% unless forloop.last %}&nbsp;{% endunless %}
  {% endfor %}
</p>
<p>
  &nbsp;
</p>
{% if page.adSense != false %}
{% include adsense_responsive.htm %}
{% endif %}
