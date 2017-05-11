---
layout: page
title: Projects
---

Here is a curated list of projects I am/have been a part of:

<div class="posts">
  {% assign sortedProjects = (site.projects | sort: 'number') | reverse %}
  {% for project in sortedProjects %}
  <div class="post">
    <h2 class="post-title">
        {{ project.title }}
    </h2>
    {{ project.content }}
    {% if project.preview %}
      <a href="{{ project.preview }}" target="_blank"><!--_-->Demo</a> <br />
    {% endif %}
    {% if project.source %}
      <a href="{{ project.source }}" target="_blank"><!--_-->Source Code</a> <br />
    {% endif %}
    <br />
  {% endfor %}
</div>
