---
title: Blog
layout: layout.njk
---

<h2>Blog Posts</h2>

<ul>
  {% for post in collections.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.data.title }}</a>
    </li>
  {% endfor %}
</ul>
