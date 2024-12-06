---
layout: page
title: Projects
permalink: /projets/
lang: fr

---

<ul class="project-list" style="margin-top:5rem;">
  {% assign sorted_projects = site.projects | sort: 'year' | reverse %}
  {% for project in sorted_projects %}
  {% assign first_year = project.year | split: '-' | first %}
  <li>
    <h2>
      <a href="{{ site.baseurl }}{{ project.url }}">{{ project.title }} ({{ project.year }})</a>
    </h2>
  </li>
  {% endfor %}
</ul>