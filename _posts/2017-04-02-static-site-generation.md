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
last_modified_at: "2017-04-02 10:14:26 America/Toronto"
layout: post
location:
  altitude: 259
  latitude: 46.49145069999999
  longitude: -80.9899049
  text: "200 Larch St., Sudbury, Ontario, P3E 1C5, Canada"
tags:
  - "How to"
  - Tech
title: "Static Site Generation"
---

### What is static site generation?

* Use a program to produce HTML pages.
  * Analogous to compiling computer programs.
  * Source Code&nbsp; &rarr;&nbsp; Machine Code
* Development Cycle
  * Write the Source
  * Compile
  * Inspect and/or Test the Result
* Examples
  * <a href="#cite-jekyll" rel="me" title="Jekyll">Jekyll</a>
    * Transform your plain text into static Web sites and blogs.
    * Used by GitHub Pages.
  * <a href="#cite-middleman" rel="me" title="Middleman">Middleman</a>
    * Build static Web sites with an easy-to-use framework.&nbsp; Middleman is a static site generator using all the shortcuts and tools in modern Web development.
  * More&hellip;
    * <a href="#cite-static-site-generators" rel="me" title="Static Site Generators">Static Site Generators</a>
      * The definitive listing of static site generators.

<p>&nbsp;</p>
### Middleman:&nbsp; A Ruby Gem

* Project is a directory (i.e. &quot;myproj&quot;)
  * `$ middleman init myproj`
    * Configuration files, README, Gemfile, etc.
* Create source files in &quot;myproj/source&quot;.
  * Sub-directries for CSS. images, etc.
* Compile all of the source files.
  * `$ bundle exec middleman build`
* Result is placed in &quot;myproj/build&quot;.
* Copy the site to some visible location.
  * `$ rsync -avz --del myproj/build ~/WWW`
* Or, preview locally (i.e. live reload, no build).
  * `$ bundle exec middleman server`

<p>&nbsp;</p>
### Why bother?

1. Code reuse and single-point-of-control over change.
2. Authoring of content in a language that's more human-friendly.
3. Parameterized generation of markup and content.

Let's look at each of these benefits in turn&hellip;

<p>&nbsp;</p>
### Motivation #1:&nbsp; Visual Identity

* Common headers &amp; footers.
* Duplication of code is EVIL.
  * Corollary:&nbsp; Cut-and-paste is EVIL.
  * Destroys single-point-of-control over change.
* Solution:
  * Put common HTML in one file (a &quot;partial&quot;).
  * Every document includes that file.

<p>&nbsp;</p>
### ERb: Embedded Ruby

* General templating mechanism.
  * A string (usually contents of a file, &quot;template&quot;).
  * Escaped bits of ruby.
    * `<% code %>`&nbsp; Execute ruby code (i.e. &quot;scriplet&quot;).
  * `<%= expr %>`&nbsp; Replace with result of expr.
  * `<%# text %>`&nbsp; Ignore (i.e. a comment).
* Example:&nbsp; A text file.
  * ```
    This is some text.
    <% 5.times do %>
    Current Time is <%= Time.now%>!
    <% end %>
    ```
* Process using erbtool to generate result.
  * `$ erb example.txt.erb > example.txt`
* Naming Convention:&nbsp; filename.outputlang.erb
  * Example:&nbsp; index.html.erb
* Many alternatives (i.e. HAML).

<p>&nbsp;</p>
### Generation of Site

* Source files in &quot;myproj/source&quot;.
  * ```
    $ ls source
    index.html.erb    syll.html.erb
    meet.html.erb
    ```
* Compile.
  * `$ bundle exec middleman build`
* Result after building.
  * ```
    $ ls build
    index.html    meet.html    syll.html
    ```

<p>&nbsp;</p>
### Partials

* A document fragment included in other documents.
* Include in erbusing the `partial` function.
  * ```
    <body>
      <%= partial"navigation" %>
      ...
    </body>
    ```
* Partial's filename begins with &quot;_&quot;.
  * i.e. _navigation.erb
    * ```
      <div class="navbar">
        <ul id="site-nav"><li>...</li></ul>
      </div>
      ```
    * Note:&nbsp; &quot;_&quot; omitted in argument to function.

<p>&nbsp;</p>
### Generation of Site with Partials

* Source files in myproj/source.
  * ```
    $ ls source
    _footer.erb        meet.html.erb
    _navigation.erb    syll.html.erb
    index.html.erb 
    ```
* Compile.
  * `$ bundle exec middleman build`
* Result after building.
  * ```
    $ ls build
    index.html    meet.html    syll.html
    ```

<p>&nbsp;</p>
### Tricks with Partials

* Content of partial can be customized by passing arguments in call.
* In Calling ERb:&nbsp; Pass a hash.
  * ```
    <%= partial "banner",
      :locals => { :name => "Syllabus",
                   :amount => 34 } %>
    ```
* In Partial:&nbsp; Access variables.
  * ```
    <h3><%= :name %></h3>
    <p>Costs <%= "$#{:amount}.00" %></p>
    ```

<p>&nbsp;</p>
### Problem

* How to guarantee every page includes partial(s).
  * Partials don't ensure one page structure across the site.
* Every page should look like:
  * ```
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Meetings</title>
        <link rel="stylesheet" type="text/css" href="osu_style.css">
      </head>
      <body>
        <%= partial "navigation" %>
        ...  <!--different on each page -->
      </body>
    </html>
    ```

<p>&nbsp;</p>
### Solution:&nbsp; Layout

* HTML formed from:&nbsp; Layout + Template
* Layout is the overall structure of the HTML page.
* File:&nbsp; layout.erb
  * ```
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>  ...  etc
      </head>
      <body>
        <%= yield =>
      </body>
    ```
* Template replaces layout's yield.
* Layout is where you put site-wide styling.
  * i.e. navigation bar, div's with CSS classes, footers

<p>&nbsp;</p>
### Page-Specific Data in Layout

* Some layout content is page-specific.
  * Example:&nbsp; `<title>` in document's head.
* Solution:&nbsp; Ruby variable `current_page`
  * Example:&nbsp; `current_page.path`
* Template contains &quot;frontmatter&quot; that sets the value of current_page.data.
  * In template (contact.html.erb)
    * ```
      ;;;
      "title": "Contact Information"
      ;;;
      ```
  * In layout (layout.erb)
    * `<title><%= current_page.data.title %></title>`

<p>&nbsp;</p>
### Generation of Site with Layouts

* Default layout in &quot;source/layouts/layouts.erb&quot;.
  * ```
    $ ls –F source
    index.html.erb    meet.html.erb
    layouts/          syll.html.erb
    
    $ ls source/layouts
    _footer.erb    _navigation.erb    layout.erb
    ```
* Result after building.
  * ```
    $ ls build
    index.html    meet.html    syll.html
    ```

<p>&nbsp;</p>
### Motive #2:&nbsp; Improved Syntax

* HTML tags make content hard to read.
  * &lt;p&gt;, &lt;h2&gt;, &lt;em&gt;, &lt;a href='&hellip;'&gt; etc
  * Versus plain text, which is easier to read.
* Common plain text conventions:
  * Blank lines between paragraphs.
  * Underline titles with –'s or ='s.
  * Emphasize &lowast;words&lowast;, &lowbar;words&lowbar;, &lowast;&lowast;words&lowast;&lowast;.
  * Links in ( )'s.
  * Unordered lists with bullets using * or -.
  * Numbered lists with 1., 2., 3.

<p>&nbsp;</p>
### Markdown

* Formalizes these ASCII conventions.
  * Filename Extension:&nbsp; .md
  * Adds some less familiar ones (i.e. \`\`\`).
* Tools generate corresponding HTML.
  * Examples:&nbsp; GitHub readme's, user-posted comments on Web boards (i.e. StackOverflow).
* Other target languages possible too.
* See Markdown's README.md
* Warning:&nbsp; Many Markdown dialects.

<p>&nbsp;</p>
### CSS Limitations

* Literals are common.
  * ```
    h1 { background-color: #ff14a6; }
    h2 { color: #ff14a6; }
    ```
* Result:&nbsp; Lack of single-point-of-control.
* Solution:&nbsp; SASS, allows variables.
  * ```
    $primary: #ff14a6;
    h1 { background-color: $primary; }
    h2 { color: $primary; }
    ```
* Preprocessor generates CSS from SASS.

<p>&nbsp;</p>
### Motive #3:&nbsp; Content Generation

* Iterate over an array to create content.
  * Example:&nbsp; Rows of a table.
  * See course Web site.
  * Partial could be used for (every) row.
* Placeholder text and images.
  * `<%= lorem.sentence %>`
  * Many versions of this &quot;helper&quot; are available.
    * ```
      lorem.paragraphs 2
      lorem.date
      lorem.last_name
      lorem.image('300x400')
        #=> http://placehold.it/300x400
      ```

<p>&nbsp;</p>
### More Helper Functions

* Links.
  * `<%= link_to 'About', '/about.html' %>`
    * #=&gt;&nbsp; `<a href='/about/'>About</a>`
* Assets.
  * ```
    <%= stylesheet_link_tag 'all' %>
    <%= javascript_include_tag 'jquery' %>
    <%= favicon_tag 'images/favicon.png' %>
    <%= link_to 'Blog', '/blog', :class => 'example' %>
    <%= image_tag 'padrino.png', :width => '35', :class => 'logo' %>
    ```

<p>&nbsp;</p>
### Summary

* ERb
  * Template for generating HTML.
  * Scriplets and expressions.
* Reuse of views with partials.
  * Included with partial (eg &lt;%= partial&hellip;).
  * Filename is prepended with underscore.
  * Parameter passing from parent template.
* Layouts and templates.
* Markdown, SASS.
* Content generation and helpers.
