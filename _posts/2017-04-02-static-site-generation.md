---
categories:
  - Art
  - "Business and Tech"
citations:
  - author: "Innominate"
    date:
      accessed: "2017-04-01 15:17:49 America/Toronto"
    href: "https://jekyllrb.com"
    name: "Jekyll"
    slug: "jekyll"
  - author: "Thomas Reynolds"
    date:
      accessed: "2017-04-01 15:13:19 America/Toronto"
    href: "https://middlemanapp.com"
    name: "Middleman"
    slug: "middleman"
  - author: "Innominate"
    date:
      accessed: "2017-04-01 15:21:27 America/Toronto"
    href: "https://staticsitegenerators.net"
    name: "Static Site Generators"
    slug: "static-site-generators"
comments: true
date: "2017-04-02 01:11:47 America/Toronto"
last_modified_at: "2017-04-02 10:45:29 America/Toronto"
layout: post
location:
  altitude: 259
  latitude: 46.49145069999999
  longitude: -80.9899049
  text: "200 Larch St., Sudbury, Ontario, P3E 1C5, Canada"
syndications:
  - href: "https://www.facebook.com/jwds1978/posts/10154189566007084"
    text: Facebook
    title: Facebook
  - href: "https://twitter.com/jwds1978/status/848921113845432321"
    text: Twitter
    title: Twitter
tags:
  - "How to"
  - Tech
title: "Static Site Generation"
---

<h3>
  What is static site generation?
</h3>
<!-- excerptBreak -->
<ul>
  <li>
    Use a program to produce HTML pages.
    <ul>
      <li>
        Analogous to compiling computer programs.
      </li>
      <li>
        Source Code&nbsp; &rarr;&nbsp; Machine Code
      </li>
    </ul>
  </li>
  <li>
    Development Cycle
    <ul>
      <li>
        Write the Source
      </li>
      <li>
        Compile
      </li>
      <li>
        Inspect and/or Test the Result
      </li>
    </ul>
  </li>
  <li>
    Examples
    <ul>
      <li>
        <a href="{{ site.url }}{{ page.url }}/#cite-jekyll" rel="me" title="Jekyll">Jekyll</a>
        <ul>
          <li>
            Transform your plain text into static Web sites and blogs.
          </li>
          <li>
            Used by GitHub Pages.
          </li>
        </ul>
      </li>
      <li>
        <a href="{{ site.url }}{{ page.url }}/#cite-middleman" rel="me" title="Middleman">Middleman</a>
        <ul>
          <li>
            Build static Web sites with an easy-to-use framework.&nbsp; Middleman is a static site generator using all the shortcuts and tools in modern Web
            development.
          </li>
        </ul>
      </li>
      <li>
        More&hellip;
        <ul>
          <li>
            <a href="{{ site.url }}{{ page.url }}/#cite-static-site-generators" rel="me" title="Static Site Generators">Static Site Generators</a>
            <ul>
              <li>
                The definitive listing of static site generators.
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Middleman:&nbsp; A Ruby Gem
</h3>
<ul>
  <li>
    Project is a directory (i.e. &quot;myproj&quot;)
    {% highlight shell_session %}
    $ middleman init myproj
    {% endhighlight %}
    <ul>
      <li>
        Configuration files, README, Gemfile, etc.
      </li>
    </ul>
  </li>
  <li>
    Create source files in &quot;myproj/source&quot;.
    <ul>
      <li>
        Sub-directries for CSS. images, etc.
      </li>
    </ul>
  </li>
  <li>
    Compile all of the source files.
    {% highlight shell_session %}
    $ bundle exec middleman build
    {% endhighlight %}
  </li>
  <li>
    Result is placed in &quot;myproj/build&quot;.
  </li>
  <li>
    Copy the site to some visible location.
    {% highlight shell_session %}
    $ rsync -avz --del myproj/build ~/WWW
    {% endhighlight %}
  </li>
  <li>
    Or, preview locally (i.e. live reload, no build).
    {% highlight shell_session %}
    $ bundle exec middleman server
    {% endhighlight %}
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Why bother?
</h3>
<ol>
  <li>
    Code reuse and single-point-of-control over change.
  </li>
  <li>
    Authoring of content in a language that's more human-friendly.
  </li>
  <li>
    Parameterized generation of markup and content.
  </li>
</ol>
<p>
  Let's look at each of these benefits in turn&hellip;
</p>
<p>
  &nbsp;
</p>
<h3>
  Motivation <sup>#</sup>1:&nbsp; Visual Identity
</h3>
<ul>
  <li>
    Common headers &amp; footers.
  </li>
  <li>
    Duplication of code is EVIL.
    <ul>
      <li>
        Corollary:&nbsp; Cut-and-paste is EVIL.
      </li>
      <li>
        Destroys single-point-of-control over change.
      </li>
    </ul>
  </li>
  <li>
    Solution:
    <ul>
      <li>
        Put common HTML in one file (a &quot;partial&quot;).
      </li>
      <li>
        Every document includes that file.
      </li>
    </ul>
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  ERb:&nbsp; Embedded Ruby
</h3>
<ul>
  <li>
    General templating mechanism.
    <ul>
      <li>
        A string (usually contents of a file, &quot;template&quot;).
        <ul>
          <li>
            Escaped bits of ruby.
            <ul>
              <li>
                Execute ruby code (i.e. &quot;scriplet&quot;).
                {% highlight liquid %}
                <% code %>
                {% endhighlight %}
              </li>
              <li>
                Replace with result of expr.
                {% highlight liquid %}
                <%= expr %>
                {% endhighlight %}
              </li>
              <li>
                Ignore (i.e. a comment).
                {% highlight liquid %}
                <%# text %>
                {% endhighlight %}
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li>
    Example:&nbsp; A text file.
    {% highlight liquid %}
    This is some text.
    <% 5.times do %>
    Current Time is <%= Time.now %>!
    <% end %>
    {% endhighlight %}
  </li>
  <li>
    Process using erbtool to generate result.
    {% highlight shell_session %}
    $ erb example.txt.erb > example.txt
    {% endhighlight %}
  </li>
  <li>
    Naming Convention:&nbsp; filename.outputlang.erb
    <ul>
      <li>
        Example:&nbsp; index.html.erb
      </li>
    </ul>
  </li>
  <li>
    Many alternatives (i.e. HAML).
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Generation of Site
</h3>
<ul>
  <li>
    Source files in &quot;myproj/source&quot;.
    {% highlight shell_session %}
    $ ls source
    index.html.erb    syll.html.erb
    meet.html.erb
    {% endhighlight %}
  </li>
  <li>
    Compile.
    {% highlight shell_session %}
    $ bundle exec middleman build
    {% endhighlight %}
  </li>
  <li>
    Result after building.
    {% highlight shell_session %}
    $ ls build
    index.html    meet.html    syll.html
    {% endhighlight %}
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Partials
</h3>
<ul>
  <li>
    A document fragment included in other documents.
  </li>
  <li>
    Include in ERb using the <mark>partial</mark> function.
    {% highlight liquid %}
    <body>
      <%= partial "navigation" %>
      ...
    </body>
    {% endhighlight %}
  </li>
  <li>
    Partial's filename begins with &quot;_&quot;.
    <ul>
      <li>
        i.e. _navigation.erb
        {% highlight html %}
        <div class="navbar">
          <ul id="site-nav">
            <li>...</li>
          </ul>
        </div>
        {% endhighlight %}
        <ul>
          <li>
            Note:&nbsp; &quot;_&quot; omitted in argument to function.
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Generation of Site with Partials
</h3>
<ul>
  <li>
    Source files in myproj/source.
    {% highlight shell_session %}
    $ ls source
    _footer.erb        meet.html.erb
    _navigation.erb    syll.html.erb
    index.html.erb 
    {% endhighlight %}
  </li>
  <li>
    Compile.
    {% highlight shell_session %}
    $ bundle exec middleman build
    {% endhighlight %}
  </li>
  <li>
    Result after building.
    {% highlight shell_session %}
    $ ls build
    index.html    meet.html    syll.html
    {% endhighlight %}
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Tricks with Partials
</h3>
<ul>
  <li>
    Content of partial can be customized by passing arguments in call.
  </li>
  <li>
    In Calling ERb:&nbsp; Pass a hash.
    {% highlight liquid %}
    <%= partial "banner", :locals => { :name => "Syllabus", :amount => 34 } %>
    {% endhighlight %}
  </li>
  <li>
    In Partial:&nbsp; Access variables.
    {% highlight liquid %}
    <h3><%= :name %></h3>
    <p>Costs <%= "$#{:amount}.00" %></p>
    {% endhighlight %}
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Problem
</h3>
<ul>
  <li>
    How to guarantee every page includes partial(s).
    <ul>
      <li>
        Partials don't ensure one page structure across the site.
      </li>
    </ul>
  </li>
  <li>
    Every page should look like:
    {% highlight html %}
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Meetings</title>
        <link href="osu_style.css" rel="stylesheet" type="text/css" />
      </head>
      <body>
        <%= partial "navigation" %>
        ...  <!--different on each page-->
      </body>
    </html>
    {% endhighlight %}
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Solution:&nbsp; Layout
</h3>
<ul>
  <li>
    HTML formed from:&nbsp; Layout + Template
  </li>
  <li>
    Layout is the overall structure of the HTML page.
  </li>
  <li>
    File:&nbsp; layout.erb
    {% highlight html %}
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>  ...  etc
      </head>
      <body>
        <%= yield =>
      </body>
    {% endhighlight %}
  </li>
  <li>
    Template replaces layout's yield.
  </li>
  <li>
    Layout is where you put site-wide styling.
    <ul>
      <li>
        i.e. navigation bar, div's with CSS classes, footers
      </li>
    </ul>
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Page-Specific Data in Layout
</h3>
<ul>
  <li>
    Some layout content is page-specific.
    <ul>
      <li>
        Example:&nbsp; <mark>&lt;title&gt;</mark> in document's head.
      </li>
    </ul>
  </li>
  <li>
    Solution:&nbsp; Ruby variable <mark>current_page</mark>
    <ul>
      <li>
        Example:&nbsp; <mark>current_page.path</mark>
      </li>
    </ul>
  </li>
  <li>
    Template contains &quot;frontmatter&quot; that sets the value of current_page.data.
    <ul>
      <li>
        In template (contact.html.erb)
        {% highlight ruby %}
        ;;;
        "title": "Contact Information"
        ;;;
        {% endhighlight %}
      </li>
      <li>
        In layout (layout.erb)
        {% highlight liquid %}
        <title><%= current_page.data.title %></title>
        {% endhighlight %}
      </li>
    </ul>
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Generation of Site with Layouts
</h3>
<ul>
  <li>
    Default layout in &quot;source/layouts/layouts.erb&quot;.
    {% highlight shell_session %}
    $ ls –F source
    index.html.erb    meet.html.erb
    layouts/          syll.html.erb
    
    $ ls source/layouts
    _footer.erb    _navigation.erb    layout.erb
    {% endhighlight %}
  </li>
  <li>
    Result after building.
    {% highlight shell_session %}
    $ ls build
    index.html    meet.html    syll.html
    {% endhighlight %}
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Motive <sup>#</sup>2:&nbsp; Improved Syntax
</h3>
<ul>
  <li>
    HTML tags make content hard to read.
    <ul>
      <li>
        &lt;p&gt;, &lt;h2&gt;, &lt;em&gt;, &lt;a href='&hellip;'&gt; etc
      </li>
      <li>
        Versus plain text, which is easier to read.
      </li>
    </ul>
  </li>
  <li>
    Common plain text conventions:
    <ul>
      <li>
        Blank lines between paragraphs.
      </li>
      <li>
        Underline titles with –'s or ='s.
      </li>
      <li>
        Emphasize &lowast;words&lowast;, &lowbar;words&lowbar;, &lowast;&lowast;words&lowast;&lowast;.
      </li>
      <li>
        Links in ( )'s.
      </li>
      <li>
        Unordered lists with bullets using * or -.
      </li>
      <li>
        Numbered lists with 1., 2., 3.
      </li>
    </ul>
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Markdown
</h3>
<ul>
  <li>
    Formalizes these ASCII conventions.
    <ul>
      <li>
        Filename Extension:&nbsp; .md
      </li>
      <li>
        Adds some less familiar ones (i.e. <mark>```</mark>).
      </li>
    </ul>
  </li>
  <li>
    Tools generate corresponding HTML.
    <ul>
      <li>
        Examples:&nbsp; GitHub readme's, user-posted comments on Web boards (i.e. StackOverflow).
      </li>
    </ul>
  </li>
  <li>
    Other target languages possible too.
  </li>
  <li>
    See Markdown's README.md
  </li>
  <li>
    Warning:&nbsp; Many Markdown dialects.
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  CSS Limitations
</h3>
<ul>
  <li>
    Literals are common.
    {% highlight css %}
    h1 {
      background-color: #ff14a6;
    }

    h2 {
      color: #ff14a6;
    }
    {% endhighlight %}
  </li>
  <li>
    Result:&nbsp; Lack of single-point-of-control.
  </li>
  <li>
    Solution:&nbsp; SASS, allows variables.
    {% highlight css %}
    $primary: #ff14a6;

    h1 {
      background-color: $primary;
    }

    h2 {
      color: $primary;
    }
    {% endhighlight %}
  </li>
  <li>
    Preprocessor generates CSS from SASS.
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Motive <sup>#</sup>3:&nbsp; Content Generation
</h3>
<ul>
  <li>
    Iterate over an array to create content.
    <ul>
      <li>
        Example:&nbsp; Rows of a table.
      </li>
      <li>
        See course Web site.
      </li>
      <li>
        Partial could be used for (every) row.
      </li>
    </ul>
  </li>
  <li>
    Placeholder text and images.
    {% highlight liquid %}
    <%= lorem.sentence %>
    {% endhighlight %}
    <ul>
      <li>
        Many versions of this &quot;helper&quot; are available.
        {% highlight markdown %}
        lorem.paragraphs 2
        lorem.date
        lorem.last_name
        lorem.image('300x400')

          #=>  http://placehold.it/300x400
        {% endhighlight %}
      </li>
    </ul>
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  More Helper Functions
</h3>
<ul>
  <li>
    Links.
    {% highlight liquid %}
    <%= link_to 'About', '/about.html' %>

      #=>  <a href='/about/'>About</a>
    {% endhighlight %}
  </li>
  <li>
    Assets.
    {% highlight liquid %}
    <%= stylesheet_link_tag 'all' %>
    <%= javascript_include_tag 'jquery' %>
    <%= favicon_tag 'images/favicon.png' %>
    <%= link_to 'Blog', '/blog', :class => 'example' %>
    <%= image_tag 'padrino.png', :width => '35', :class => 'logo' %>
    {% endhighlight %}
  </li>
</ul>
<p>
  &nbsp;
</p>
<h3>
  Summary
</h3>
<ul>
  <li>
    ERb
    <ul>
      <li>
        Template for generating HTML.
      </li>
      <li>
        Scriplets and expressions.
      </li>
    </ul>
  </li>
  <li>
    Reuse of views with partials.
    <ul>
      <li>
        Included with partial (eg &lt;%= partial&hellip;).
      </li>
      <li>
        Filename is prepended with underscore.
      </li>
      <li>
        Parameter passing from parent template.
      </li>
    </ul>
  </li>
  <li>
    Layouts and templates.
  </li>
  <li>
    Markdown, SASS.
  </li>
  <li>
    Content generation and helpers.
  </li>
</ul>
