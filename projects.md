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
  {% endfor %}
</div>
