---
layout: page
title: courses
permalink: /courses/
description: Some information on the math courses I have taken
nav: true
nav_order: 4
# display_categories: [work, fun]
horizontal: false
---

{% assign course_items = site.courses | sort: 'date' | reverse %}

<ul>
{% for course in site.courses %}
  <li>
    <a href="{{ course.url }}">{{ course.title }}</a>
    — {{ course.code }} ({{ course.semester }})
  </li>
{% endfor %}
</ul>