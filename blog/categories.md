---
wdcyvdsgrmupffee: true
---

<style>
  .post-tag {
    background: rgba(106, 159, 181, 0.15);
    border-radius: 4px;
    color: #6a9fb5;
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
    background: #6a9fb5;
    color: #fff;
    text-decoration: none;
  }
</style>

<div class="tags-expo">
  <div class="tags-expo-list">
    {% for tag in site.categories %}
    <a class="post-tag" href="#{{ tag[0] | slugify }}" rel="me">{{ tag[0] }}</a>
    {% endfor %}
  </div>
  <br />
  <hr />
  <div class="tags-expo-section">
    {% for tag in site.categories %}
    <h3 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h3>
    <ul class="tags-expo-posts">
      {% for post in tag[1] %}
      <li>
        <span style="font-size: larger;"><a class="post-link" href="{{ site.github.url }}{{ post.url }}" rel="me">{{ post.title | escape }}</a></span><br />
        <span class="post-meta">{{ post.date | date: "%d %B %Y @ %T %Z" }}</span>
      </li>
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</div>

<p class="rss-subscribe">
  Subscribe <a href="{{ site.github.url }}/feed.xml">via RSS</a>.
</p>
