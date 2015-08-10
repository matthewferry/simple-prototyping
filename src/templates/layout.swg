<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>{% block title %}My Site{% endblock %}</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  <div class="page-wrap">
    <div class="table-row">
      {% block header %}
        {% include "./partials/header.swg" %}
      {% endblock %}
    </div>
    <div class="table-row table-row-expand">
      {% block content %}{% endblock %}
    </div>
    <div class="table-row">
      {% block footer %}
        {% include "./partials/footer.swg" %}
      {% endblock %}
    </div>
  </div>

  {% block scripts %}
    <script src="/app.js"></script>
  {% endblock %}
</body>
</html>
