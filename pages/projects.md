## Projects

{% for project in site.projects %}
  <h2>
    <a href="{{ project.url }}">
      {{ project.title }} - {{ project.daterange }}
    </a>
  </h2>
  <p>{{ project.content | markdownify }}</p>
{% endfor %}