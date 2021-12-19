## Projects

{% for project in site.projects %}
  <h2>
    <a href="{{ project.url }}">
      {{ project.title }} - {{ project.date }}
    </a>
  </h2>
  <p>{{ staff_member.content | markdownify }}</p>
{% endfor %}