---
liMarquee: true
title: "Blog (Search)"
---

<p class="liMarquee mWrap" style="font-size: larger; text-align: center;">
  This is my view, from my foxhole.&nbsp; &quot;Everybody has their own war&quot;&hellip;&nbsp; Take what you need; leaving the rest.&nbsp; And, most
  importantly, I reserve the right to change and evolve my opinions over time&hellip;&nbsp; That's what good conversations do &#8212; and, blogs are
  inherently conversations.
</p>
<p>
  &nbsp;
</p>
<p style="text-align: center;">
  Filter the Things by:&nbsp;
  <a href="{{ site.url }}/blog" rel="me" title="">All</a>&nbsp;
  &bull;&nbsp; <a href="{{ site.url }}/blog/categories" rel="me" title="">Category</a>&nbsp;
  &bull;&nbsp; <span style="color: rgb(143, 200, 71);">Search</span>&nbsp;
  &bull;&nbsp; <a href="{{ site.url }}/blog/tags" rel="me" title="">Tag</a>
</p>
<p>
  &nbsp;
</p>
{% include ads_responsive_468x060.htm %}
<p>
  &nbsp;
</p>
<form action="{{ site.url }}/blog/search" method="get">
  <input id="search-box" name="query" type="text">&nbsp; <input type="submit" value="search">
</form>
<ul id="search-results"></ul>
<script>
  window.store = {
    {% for post in site.posts %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>
<script src="{{ site.url }}/resources/js/search_2017-04-23_14-29_min.js" type="text/javascript"></script>
