---
layout: page
title: Archive
---

<p>Jump to <a href="#news-archive">news archive</a> or <a href="#blog-archive">blog archive</a>.</p>

<hr>

<section class="archive-post-list">
    
    <a name="news-archive"></a>
    <h2>News</h2>
    <p>Jump to <a href="#blog-archive">blog archive</a>.</p>
    <ul>
      {% assign events = site.data.news | sort: 'date' | reverse %}
      {% for event in events %}
          <li>
            {{ event.date | date_to_string }} - {{ event.description }}
          </li>
      {% endfor %}
    </ul>

<hr>

    <a name="blog-archive"></a>
    <h2>Blog</h2> 
    <p>Jump to <a href="#news-archive">news archive</a>.</p>
    {% for post in site.posts %}
        {% assign currentDate = post.date | date: "%Y" %}
        {% if currentDate != myDate %}
            {% unless forloop.first %}</ul>{% endunless %}
            <h3>{{ currentDate }}</h3>
            <ul>
            {% assign myDate = currentDate %}
        {% endif %}
        <li><span>{{ post.date | date: "%B %-d, %Y" }} - <a href="{{ post.url }}">{{ post.title }}</a></span></li>
        {% if forloop.last %}</ul>{% endif %}
    {% endfor %}

</section>
