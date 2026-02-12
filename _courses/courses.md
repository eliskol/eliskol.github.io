---
layout: page
title: courses
permalink: /courses/
description: Some information on the math courses I have taken
nav: true
nav_order: 8
# display_categories: [work, fun]
horizontal: false
---

{% assign course_items = site.courses | sort: 'date' | reverse %}

{% for item in course_items %}
  <h3>{{ item.title }}</h3>
  <p>{{ item.content }}</p>
{% endfor %}