---
comments: true
facebook: true
image:
  height: 73
  path: "https://assets.forces.army/naked/images/hotlink-ok/suck-my-words_482x073.png"
  width: 482
liMarquee: true
title: "Blog (Tags)"
---

{% assign sortedTags = site.tags | sort %}

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
<p class="liMarquee mWrap" style="font-size: larger; text-align: center;">
  This is my view, from my foxhole.&nbsp; Everybody has their own war&hellip;&nbsp; Take what you need &#8212; leave the rest.&nbsp; And, most importantly, I
  reserve the right to change and evolve my opinions over time&hellip;&nbsp; That's what good conversations do &#8212; blogs, inherently, are conversations.
</p>
<img
  alt="" height="73" src="{{ site.uri.assets }}/naked/images/suck-my-words_482x073.png"
  style="border: 0px; display: block; margin-left: auto; margin-right: auto;" width="482" />
<p>
  &nbsp;
</p>
<p style="text-align: center;">
  <i aria-hidden="true" class="fa fa-filter"></i> Filter the Things by:&nbsp;
  <a href="{{ site.url }}/blog" rel="me" title="">All</a>&nbsp;
  &bull;&nbsp; <a href="{{ site.url }}/blog/categories" rel="me" title="">Category</a>&nbsp;
  &bull;&nbsp; <span style="color: rgb(143, 200, 71);">Tag</span>
</p>
<p>
  &nbsp;
</p>
<div class="tags-expo">
  <div class="tags-expo-list">
    {% for tag in sortedTags %}
    <a class="post-tag" href="{{ site.url }}{{ page.url }}#{{ tag[0] | slugify }}" rel="me" title="">{{ tag[0] }}</a>
    {% endfor %}
  </div>
  {% if page.adSense != false %}
  <p>
    &nbsp;
  </p>
  {% include adsense_responsive.htm %}
  {% endif %}
  <p>
    &nbsp;
  </p>
  <div class="h-feed tags-expo-section">
    <div style="display: none;">
      <p class="p-name">
        {% if page.title %}{{ page.title }} :: {% endif %}{{ site.title | default: site.github.repository_name }}
      </p>
      <a class="u-url" href="{{ site.url }}{{ page.url }}" rel="me">{{ site.url }}{{ page.url }}</a>
    </div>
    {% for tag in sortedTags %}
    <p>
      &nbsp;
    </p>
    <h3 id="{{ tag[0] | slugify }}">
      {{ tag[0] }}
    </h3>
    <ul class="tags-expo-posts">
      {% for post in tag[1] %}
      {% capture postAuthors %}{{ post.author | default: site.author }}{% endcapture %}
      {% capture postDatePublished %}{{ post.date | replace: '-0400', 'America/Toronto' | replace: '-0500', 'America/Toronto' }}{% endcapture %}
      {% capture postDateModified %}{{ post.last_modified_at | replace: '-0400', 'America/Toronto' | replace: '-0500', 'America/Toronto' }}{% endcapture %}
      {% assign postAuthor = site.data.authors[postAuthors] %}
      {% assign postLocation = site.data.gps[post.location] %}
      {% if post.tags contains "Sponsored" %}{% assign postSponsored = true %}{% else %}{% assign postSponsored = false %}{% endif %}
      <li>
        <article class="h-entry" data-readingTarget=".readingContent" data-readingURI="{{ site.url }}{{ post.url }}">
          <div style="display: none;">
            <p class="p-name">
              {{ post.title | escape }}
            </p>
            <p class="u-uid">
              {{ post.url }}
            </p>
          </div>
          <span style="font-size: larger;">
            {% if postSponsored %}<i aria-hidden="true" class="fa fa-handshake-o" style="float: right; margin-left: 10px;" title="Sponsored"></i>{% endif %}
            <a class="u-url" href="{{ site.url }}{{ post.url }}" rel="me">{{ post.title | escape }}</a>
          </span>
          <h6>
            <span style="float: right;">
              <span class="readingCount">Count</span> Words &#8212; <span class="readingTime">Reading Time</span><br />
              by {% if postAuthor.hyperlink.uri %}<a {% if postAuthor.hyperlink.hcard %}class="h-card p-author" {% endif %}href="{{ postAuthor.hyperlink.uri }}" {% if postAuthors != "jwds" %}{% if postAuthor.hyperlink.hcard %}rel="author external" {% endif %}target="_blank"{% else %}rel="author me"{% endif %} title="{{ postAuthor.hyperlink.title | escape }}">{% endif %}<span {% if postAuthor.hyperlink.hcard != true %}class="p-author" {% endif %}style="font-size: larger;">{{ postAuthor.name | escape }}</span>{% if postAuthor.hyperlink.uri %}</a>{% endif %}{% if post.comments %}<br />
              <a data-disqus-identifier="{{ post.disqusIdentifier }}" href="{{ site.url }}{{ post.url }}#disqus_thread" rel="me" title=""></a>{% endif %}
            </span>
            <i aria-hidden="true" class="fa fa-plus"></i> Published:&nbsp; <time class="dt-published" datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%d %B %Y @ %T %Z" }}</time><br />
            <i aria-hidden="true" class="fa fa-pencil"></i> Updated:&nbsp; {% if postDatePublished != postDateModified %}<time class="dt-updated" datetime="{{ post.last_modified_at | date_to_xmlschema }}">{{ post.last_modified_at | date: "%d %B %Y @ %T %Z" }}</time>{% if post.modifiedReason and post.modifiedReason != blank %}&nbsp; <sup>{{ post.modifiedReason | escape }}</sup>{% endif %}{% else %}N/A{% endif %}<br />
            <i aria-hidden="true" class="fa fa-map-marker"></i> Location:&nbsp; {% if post.location and post.location != blank%}<span class="h-geo p-location"><data class="p-altitude" value="{{ postLocation.altitude }}"></data><data class="p-latitude" value="{{ postLocation.dd.latitude }}"></data><data class="p-longitude" value="{{ postLocation.dd.longitude }}"></data><a href="{{ site.uri.googleMaps }}{{ postLocation.dd.latitude }},{{ postLocation.dd.longitude }}" rel="external" target="_blank" title="Altitude: {{ postLocation.altitude }} Meter{% if postLocation.altitude != 1 %}s{% endif %}, Latitude: {{ postLocation.dd.latitude }}, Longitude: {{ postLocation.dd.longitude }}">{{ postLocation.text | escape }}</a></span>{% else %}N/A{% endif %}
          </h6>
          {% if post.facebook %}
          <div style="text-align: center;">
            <div class="fb-like" data-action="recommend" data-href="{{ site.url }}{{ post.url }}" data-layout="button_count" data-share="false"
              data-show-faces="true" data-size="small"></div>
          </div>
          {% endif %}
          <blockquote cite="{{ site.url }}{{ post.url }}" class="p-summary">
            {{ post.excerpt }}
          </blockquote>
          <div style="font-size: smaller; text-align: right;">
            &nbsp;<br />
            <a href="{{ site.url }}{{ post.url }}" rel="me" title="">&hellip;&nbsp; Read More&nbsp; &hellip;</a><br />
            &nbsp;
          </div>
        </article>
      </li>
      {% endfor %}
    </ul>
    {% endfor %}
  </div>
</div>
{% if page.adSense != false %}
<p>
  &nbsp;
</p>
{% include adsense_responsive.htm %}
{% endif %}
<p>
  &nbsp;
</p>
<p class="rss-subscribe">
  Subscribe <a href="{{ site.url }}/feed.xml" rel="alternate me" title="">via RSS</a>.
</p>
