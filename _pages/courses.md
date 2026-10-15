---
layout: page
title: courses
permalink: /courses/
description: Courses I have completed at UC Santa Barbara
nav: true
nav_order: 4
---

{% assign sorted_courses = site.courses | sort: 'term_id' | reverse %}
{% assign quarters = sorted_courses | group_by: 'term_id' %}

{% for quarter in quarters %}
{% assign first_course = quarter.items | first %}
  <section class="mt-5" aria-labelledby="quarter-{{ quarter.name }}">
    <h2 id="quarter-{{ quarter.name }}" class="h4 mb-3">{{ first_course.term }} {{ first_course.year }}</h2>
    <ul class="list-unstyled">
      {% assign courses = quarter.items | sort_natural: 'course_code' %}
      {% for course in courses %}
        {% assign course_title = course.title | remove_first: course.course_code | strip %}
        <li class="mb-3">
          <strong class="mr-2 text-nowrap">{{ course.course_code }}</strong>
          <a href="{{ course.url | relative_url }}">{{ course.short_title | default: course_title }}</a>
        </li>
      {% endfor %}
    </ul>
  </section>
{% endfor %}
