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
{% assign sorted_courses = site.courses | sort: "term_id" | reverse %}

{% for course in sorted_courses %}
  <li>
    <a href="{{ course.url }}">{{ course.title }}</a>
    — ({{ course.term }} {{course.year}})
  </li>
{% endfor %}
</ul>