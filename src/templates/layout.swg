<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>{% block title %}My Site{% endblock %}</title>
  <link rel="stylesheet" href="/styles.css">
</head>
<body>
  {% block content %}{% endblock %}

  {% block scripts %}
    <script src="/app.js"></script>
  {% endblock %}
</body>
</html>
