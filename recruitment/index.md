---
layout: banner-page
title: Agony Unleashed Recruitment
id: recruitment
---

{% assign recruitment = site.data.recruitment %}
{% assign text = site.data.recruitment.text %}

{% capture apply_button %}
  <a class="apply icon {{ recruitment.apply_icon }}">{{ text.apply }}</a>
{% endcapture %}

{% capture faq_button %}
  <a class="faq icon {{ recruitment.faq_icon }}">{{ text.faq }}</a>
{% endcapture %}

<ul class="squadrons">
{% for squadron in recruitment.squadrons %}
  <li class="squadron-{{ squadron[1].open }} icon {{ recruitment.icon }}">
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

<div>
  {{ apply_button }}
  {{ faq_button }}
</div>

## About Agony

Agony Unleashed is a Nullsec PVP corp, specializing in small gang combat.

Agony was formed in 2006 and is a single-corp alliance with a strong cultural identity
focused on PVP self-improvement, both for the pilots in Agony as well as thousands of students
that have been trained via the PVP University that Agony runs as a side project.

Agony has lived in almost every NPC Nullsec region from Venal to Great Wildlands,
has briefly dabbled at Sov-holding in Providence (while it was an -A- set up Fight Club back in 2010),
and tried a bit of Faction Warfare.

We are currently living in E-YJ8G, Catch as part of the HERO Coalition.
This provides us with access one of the most volatile and active Nullsec regions in the game,
as well as easy access to Providence.
As usual, we're running frequent small gang roams through the neighborhood,
but our members are also able to join other Coalition fleets and participate
in the larger battles taking place throughout Catch.
There are no mandatory ops to attend but there's almost always something going on!

### The Agony Philosophy

- PvP is fun, enjoy it and don't be a jerk.
- PvP is a challenge, pay attention and fly smart.
- Honour your word: you stand to gain more by keeping it than you do by breaking it.
- There are no enemies, only opponents.
- If you're going to do something, do it well.
- Knowledge should be shared, not hoarded:
  smarter opponents will force you to up your game.
- SP and ISK don't make you a better PVPer: they make you a better target.
- Winning through superior tactics is more satisfying
  than winning through superior numbers.

### What does Agony offer?

Agony offers a strong social environment for like-minded pilots that like to pew spaceships.
From solo, duo, and decentralized fleets in cheap frigates and cruisers,
to 20+ person fleets with more advanced doctrines such as TWEED (TWin EnginE Deimos),
what we dub TaloSHAG (Talos Shield Attack Gang—with Recon support),
or multi-timezone cap-supported BS gangs.

Agony also offers active forums where fleet ideas,
ship fittings and tactics are discussed and an extensive wiki
where knowledge is disseminated between players of all levels of experience.

We also have logistical services for our members to keep those hangars full of ships and modules.
This is especially useful since Agony loves change,
and gets itchy when being in the same spot for too long.
As such, we move around fairly frequently to go and see new places,
and meet new people to shoot in the face.

Agony regularly competes in the Alliance Tournament with varying success.

### What is Agony looking for?

Agony looks for pilots that aim to excel in PVP and constantly improve their skills.
We try to accept people that will fit into our corp culture but we have no real SP requirement:
instead focusing on attitude, desire to PVP, and willingness to improve.
Agony pilots should be PVP focused, pro-active, and willing to try new things.

Agony has a Trial period so that both parties can test out the waters,
and determine if the corp is a good fit for the individual.
In this period we ensure that the Trial fits in with the corp socially and has,
or is developing passable PVP skills.
We aren't looking for elite PVPers, but some basic skill should be developed during the Trial
by even the greenest of recruits.
Conversely, the Trial period is for the individual to see whether Agony’s play style
and culture are right for them.

In terms of activity levels, we are not a hardcore gaming corp,
and understand that Real Life is more important than EVE.
That said, we do expect pilots to play with us regularly,
particularly during the Trial so we can get to know them!

We have recently, significantly reduced our application process.
It shouldn't take more than ten to fifteen minutes to answer the handful of questions.
Your application will be transferred to a restricted area of the forum as soon as possible,
after which we will begin processing it.

If you are unsure if you are the kind of pilot we are looking for,
or whether or not Agony would be the right corp for you,
feel free to contact us via our public in-game chat `Agony Public` or via our forums.
Another option is to join one of our PVP-U classes or public roams.
This allows you to get a feel for the way Agony operates.
Join the `Agony PVP Uni` mailing list for notifications of these events,
or check out our forums.

<div>
  {{ apply_button }}
  {{ faq_button }}
</div>
