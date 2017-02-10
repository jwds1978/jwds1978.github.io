---
comments: true
wdcyvdsgrmupffee: true
---

<style>
  .post-tag {
    background: rgba(79, 94, 104, 0.15);
    border-radius: 4px;
    color: rgb(255, 204, 0);
    display: inline-block;
    font-size: 90%;
    margin-right: .5rem;
    padding: 0 .5rem;
  }
  .post-tag:before {
    content: "\f02b";
    font-family: FontAwesome;
    padding-right: .5em;
  }
  .post-tag:hover {
    background: rgb(79, 94, 104);
    color: #ffffff;
    text-decoration: none;
  }
</style>

<p style="text-align: center;">
  Filter by:&nbsp;
  <a href="{{ site.github.url }}/blog" rel="me">All</a>
  &bull;&nbsp; Category&nbsp;
  &bull;&nbsp; <a href="{{ site.github.url }}/blog/tags" rel="me">Tag</a>
</p>

<div class="tags-expo">
  <div class="tags-expo-list">
    {% for tag in site.categories %}
    <a class="post-tag" href="#{{ tag[0] | slugify }}" rel="me">{{ tag[0] }}</a>
    {% endfor %}
  </div>
  <br />
  <div class="tags-expo-section">
    {% for tag in site.categories %}
    <h3 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h3>
    <ul class="tags-expo-posts">
      {% for post in tag[1] %}
      <li>
        {% if post.comments %}
        <span style="float: right;">
          <span style="font-size: larger;">&nbsp;</span><br />
          <span style="font-size: smaller;">
            <a data-disqus-identifier="{{ post.url }}" href="{{ site.github.url }}{{ post.url }}#disqus_thread" rel="me"></a>
          </span>
        </span>
        {% endif %}
        <span style="font-size: larger;"><a class="post-link" href="{{ site.github.url }}{{ post.url }}" rel="me">{{ post.title | escape }}</a></span><br />
        <span class="post-meta" style="font-size: smaller;">{{ post.date | date: "%d %B %Y @ %T %Z" }}</span>
      </li>
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</div>

<p class="rss-subscribe">
  Subscribe <a href="{{ site.github.url }}/feed.xml">via RSS</a>.
</p>
