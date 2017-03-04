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
  <a href="{{ site.url }}/blog" rel="me" title="">All</a>&nbsp;
  &bull;&nbsp; <a href="{{ site.url }}/blog/categories" rel="me" title="">Category</a>&nbsp;
  &bull;&nbsp; <span style="color: rgb(143, 200, 71);">Tag</span>
</p>
<p>&nbsp;</p>
<div class="tags-expo">
  <div class="tags-expo-list">
    {% for tag in site.tags %}
    <a class="post-tag" href="{{ site.url }}{{ page.url }}#{{ tag[0] | slugify }}" rel="me" title="">{{ tag[0] }}</a>
    {% endfor %}
  </div>
  <p>&nbsp;</p>
  <div class="h-feed tags-expo-section">
    <div style="display: none;">
      <p class="p-name">{% if page.title %}{{ page.title }} :: {% endif %}{{ site.title | default: site.github.repository_name }}</p>
      <a class="u-url" href="{{ site.url }}{{ page.url }}" rel="me">{{ site.url }}{{ page.url }}</a>
    </div>
    {% for tag in site.tags %}
    <p>&nbsp;</p>
    <h3 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h3>
    <ul class="tags-expo-posts">
      {% for post in tag[1] %}
      {% capture postAuthors %}{{ post.author | default: site.author }}{% endcapture %}
      {% capture postDatePublished %}{{ post.date | replace: '-0400', 'America/Toronto' | replace: '-0500', 'America/Toronto' }}{% endcapture %}
      {% capture postDateModified %}{{ post.last_modified_at | replace: '-0400', 'America/Toronto' | replace: '-0500', 'America/Toronto' }}{% endcapture %}
      {% assign postAuthor = site.data.authors[postAuthors] %}
      <li>
        <article class="h-entry" data-file="{{ site.url }}{{ post.url }}" data-target="article">
          <div style="display: none;">
            <p class="p-name">{{ post.title | escape }}</p>
            <p class="u-uid">{{ post.url }}</p>
          </div>
          <span style="font-size: larger;">
            <a class="u-url" href="{{ site.url }}{{ post.url }}" rel="me">{{ post.title | escape }}</a>
          </span>
          <h6>
            <span style="float: right;">
              <span class="word-count"></span> Words&nbsp; (<span class="reading-time"></span>)<br />
              by <span class="p-author" style="font-size: larger;">{% if postAuthor.hyperlink.uri %}<a href="{{ postAuthor.hyperlink.uri }}" {% if postAuthors != "jwds" %}target="_blank"{% else %}rel="me"{% endif %} title="{{ postAuthor.hyperlink.title | escape }}">{% endif %}{{ postAuthor.name | escape }}{% if postAuthor.hyperlink.uri %}</a>{% endif %}</span>{% if post.comments %}<br />
              <a data-disqus-identifier="{{ post.url }}" href="{{ site.url }}{{ post.url }}#disqus_thread" rel="me" title=""></a>{% endif %}
            </span>
            Published:&nbsp; <time class="dt-published" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %B %Y @ %T %Z" }}</time><br />
            Updated:&nbsp; {% if postDatePublished != postDateModified %}<time class="dt-updated" datetime="{{ post.last_modified_at | date_to_xmlschema }}">{{ post.last_modified_at | date: "%d %B %Y @ %T %Z" }}</time>{% else %}N/A{% endif %}<br />
            Location:&nbsp; {% if post.location.text %}<span class="h-geo p-location"><data class="p-altitude" value="{{ post.location.altitude }}"></data><data class="p-latitude" value="{{ post.location.latitude }}"></data><data class="p-longitude" value="{{ post.location.longitude }}"></data><a href="{{ site.uri.googleMaps }}/{{ post.location.latitude }},{{ post.location.longitude }}" target="_blank" title="{{ post.location.latitude }}, {{ post.location.longitude }}">{{ post.location.text }}</a></span>{% else %}N/A{% endif %}
          </h6>
          <blockquote class="p-summary">
            {{ post.excerpt | replace: '<p>', '' | replace: '</p>', '' }}
          </blockquote>
          <div style="font-size: xx-small; text-align: right;">
            &nbsp;<br />
            <a href="{{ site.url }}{{ post.url }}" rel="me" title="">&hellip; Read More &hellip;</a><br />
            &nbsp;
          </div>
        </article>
      </li>
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</div>
<p>&nbsp;</p>
<p class="rss-subscribe">
  Subscribe <a href="{{ site.url }}/feed.xml" rel="me" title="">via RSS</a>.
</p>
<script>
  $(function () {
    $("article").each(function () {
      $(this).readingTime({
        readingTimeTarget: $(this).find(".reading-time"),
        wordCountTarget: $(this).find(".word-count"),
        remotePath: $(this).attr("data-file"),
        remoteTarget: $(this).attr("data-target")
      })
    })
  });
</script>
