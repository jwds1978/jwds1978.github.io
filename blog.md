---
---

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}" rel="me" title="{{ post.title }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
