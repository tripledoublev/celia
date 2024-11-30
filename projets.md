---
layout: page
title: Projects
permalink: /projets/
lang: fr

---

<ul class="project-list" style="margin-top:5rem;">
  {% for project in site.projects %}
  <li>
    <h2>
      <a href="{{ project.url }}">{{ project.title }} ({{ project.year }})</a>
    </h2>
  </li>
  {% endfor %}
</ul>