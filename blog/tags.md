---
comments: true
title: "Blog (Tags)"
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
    background: rgb(143, 200, 71);
    color: rgb(79, 94, 104);
    font-weight: bolder;
    text-decoration: none;
  }
</style>

<p style="text-align: center;">
  Filter by:&nbsp;
  <a href="{{ site.url }}/blog" rel="me">All</a>&nbsp;
  &bull;&nbsp; <a href="{{ site.url }}/blog/categories" rel="me">Category</a>&nbsp;
  &bull;&nbsp; <span style="color: rgb(143, 200, 71);">Tag</span>
</p>

<div class="tags-expo">
  <div class="tags-expo-list">
    {% for tag in site.tags %}
    <a class="post-tag" href="{{ site.url }}{{ page.url }}#{{ tag[0] | slugify }}" rel="me">{{ tag[0] }}</a>
    {% endfor %}
  </div>
  <br />
  <div class="h-feed tags-expo-section">
    <div style="display: none;">
      <p class="p-name">{% if page.title %}{{ page.title }} :: {% endif %}{{ site.title | default: site.github.repository_name }}</p>
      <a class="u-url" href="{{ site.url }}{{ page.url }}" rel="me">{{ site.url }}{{ page.url }}</a>
    </div>
    {% for tag in site.tags %}
    <h3 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h3>
    <ul class="tags-expo-posts">
      {% for post in tag[1] %}
      {% capture postDatePublished %}
      {{ post.date | replace: '-0400', 'America/Toronto' | replace: '-0500', 'America/Toronto' }}
      {% endcapture %}
      {% capture postDateModified %}
      {{ post.dateModified | replace: '-0400', 'America/Toronto' | replace: '-0500', 'America/Toronto' }}
      {% endcapture %}
      <li>
        <article class="h-entry">
          <div style="display: none;">
            <p class="p-name">{{ post.title | escape }}</p>
            <p class="u-uid">{{ post.url }}</p>
          </div>
          <span style="font-size: larger;">
            <a class="u-url" href="{{ site.url }}{{ post.url }}" rel="me">{{ post.title | escape }}</a>
          </span>
          <h6>
            <span style="float: right;">
              by <span class="p-author" style="font-size: larger; font-style: italic;">{{ post.author | default: site.author | escape }}</span>{% if post.comments %}<br />
              <a data-disqus-identifier="{{ post.url }}" href="{{ site.url }}{{ post.url }}#disqus_thread" rel="me"></a>{% endif %}
            </span>
            Published:&nbsp; <time class="dt-published" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %B %Y @ %T %Z" }}</time><br />
            Updated:&nbsp; {% if postDatePublished != postDateModified %}<time class="dt-updated" datetime="{{ post.dateModified | date_to_xmlschema }}">{{ post.dateModified | date: "%d %B %Y @ %T %Z" }}</time>{% else %}N/A{% endif %}
          </h6>
          <blockquote class="p-summary">
            {{ post.excerpt | replace: '<p>', '' | replace: '</p>', '' }}
          </blockquote>
          <div style="font-size: xx-small; text-align: right;">
            &nbsp;<br />
            <a href="{{ site.url }}{{ post.url }}" rel="me">&hellip; Read More &hellip;</a><br />
            &nbsp;
          </div>
        </article>
      </li>
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</div>

<p class="rss-subscribe">
  Subscribe <a href="{{ site.url }}/feed.xml">via RSS</a>.
</p>
