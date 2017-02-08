---
pagination:
  enabled: true
---

{% for post in paginator.posts %}
<h1><a href="{{ post.url }}" rel="me">{{ post.title }}</a></h1>
<p class="author">
  <span class="date">{{ post.date }}</span>
</p>
<div class="content">
  {{ post.content }}
</div>
{% endfor %}

<div class="pagination">
  {% if paginator.previous_page %}
  <a class="previous" href="{{ paginator.previous_page_path }}" rel="me">Previous</a>
  {% else %}
  <span class="previous">Previous</span>
  {% endif %}
  <span class="page_number">Page: {{ paginator.page }} of {{ paginator.total_pages }}</span>
  {% if paginator.next_page %}
  <a class="next" href="{{ paginator.next_page_path }}">Next</a>
  {% else %}
  <span class="next">Next</span>
  {% endif %}
</div>