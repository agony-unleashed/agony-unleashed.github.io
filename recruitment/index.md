---
layout: banner
---

{% assign recruitment = site.data.recruitment %}
{% assign text = site.data.recruitment.text %}

# {{ site.name }} Recruitment

<ul class="squadrons">
{% for squadron in recruitment.squadrons %}
  <li class="squadron-{{ squadron[1].open }} icon fi-torsos-all">
    {{ squadron[1].region }} {{ squadron[1].timezone | join:'-' }}:
    <span class="status">
      {{ squadron[0] | capitalize }}
      {{ text.recruitment }}
    {% if squadron[1].open %}
      {{ text.open }}
    {% else %}
      {{ text.closed }}
    {% endif %}
    </span>
  </li>
{% endfor %}
</ul>

Please note that Agony is not a training corp,
and you should not be applying to Agony to "learn to PVP".
For that, simply attend one of our public PVP classes:
these are available to anyone, and you do **not** have
to be a member of Agony to attend them.

For questions regarding recruitment you can post on the forum,
inquire in our in-game public channel `Agony Public`,
or contact one of our recruiters.
