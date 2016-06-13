---
layout: banner
title: About
heading: About Agony
id: about
---

## History

At the beginning of 2006, Agony was founded by a small group of players
who wanted to teach new players the basics of PVP.
Since that time, Agony has gone from a ten character corporation
that only flew frigates, to a 250 character corporation
that has participated in four alliance tournaments,
fought in countless conflicts all over the EVE universe,
held space, built an outpost, taught thousands and thousands
of players about PVP, and countless other accomplishments.
You can learn more about the history of Agony
in our [Agony Empire History] article.

## The Agony Philosophy

<ul>
{% for item in site.data.about.philosophy %}
  <li>{{ item }}</li>
{% endfor %}
</ul>

{% include thumbnail.html src="omen-navy-issue-warp.png" type="full" %}

## Frequently Asked Questions

### Where is Agony’s HQ?

Agony currently bases out of Pure Blind.

### Who is the CEO of Agony?

[{{ site.data.text.ceo.name }}]
({{ site.data.internal_links.forum.url }}/{{ site.data.internal_links.forum.paths.user }}{{ site.data.text.ceo.user }}).


### What does Agony do?

We PVP, plain and simple.

We operate nearly exclusively in nullsec, avoid blues,
shoot anything that moves, and generally
try to be pretty damn good at what we do.
We expect our members to always be improving.
We favor tactics and intelligence over numbers and brute force.

### How can my corporation apply to join the Agony Empire alliance?

Agony is a one corporation alliance.
If you’re interested in merging into Agony,
please contact {{ site.data.text.ceo.name }}.

### What is Agony’s position on blues?

We don’t maintain permanent blues.

From time to time, we’ll consider setting positive standings
with a small number of people in order to accomplish a particular objective.
We don’t set defensive blues.

### If you guys live in nullsec and don’t have a ton of blues, how do you ever make ISK?

Agony pilots are mostly independent,
and responsible for making ISK on their own.
Some have trade alts, mission alts, or POS network and industry alts in empire.
Others go ratting or missioning in nullsec.

### Is Agony like EVE University? Do I join in order to take classes?

While Agony and EVE-Uni both teach new players,
there are a few fundamental differences.

First and foremost, Agony as a corporation is distinct from our PvP University.
Agony Unleashed operates as a nullsec PVP corporation day to day,
and only runs classes now and then as a service to the EVE community.
Students do not join Agony in order to take classes,
and not everyone in Agony runs classes.
In addition Agony does not focus solely on teaching new students,
but on teaching and learning PVP in general.
We develop and teach advanced tactics as well as basic ones.

While EVE University provides a broad introduction to the game,
Agony seeks to provide a deep understanding of just PVP.

### Isn’t Agony just a new player PVP training corporation?

No.
Agony is a small gang nullsec PVP corporation.

We offer PvP University and our classes as a service to the EVE community
to promote the game that we love.
EVE PVP is a unique game experience, but it can be formidable as an outsider.
We seek to help ease this transition, and to prepare new players to fight back.

{% include thumbnail.html src="sabre.png" type="full" %}

### Are you pirates?

No.
As per our rules of engagement, we only shoot those in lowsec
who have demonstrated that they are willing to PVP in lowsec.

We operate in nullsec and consider lowsec an uninteresting distraction.
In nullsec on the other hand, we will shoot at anyone
who is not in Agony (or in an Agony gang), or one of our allies.
If you’re in nullsec, you choose to be there
and accept that you will be shot at.

### Do you accept contracts from other corporations or alliances? Are you mercenaries for hire?

We have accepted mercenary contracts in the past,
but it’s a rare occurrence.
If you’re interested, contact {{ site.data.text.ceo.name }}.

### Do you hold space or intend to?

Agony is currently based in the centre of Querious and holds a 
handful of systems as its base of operations. We are not generally 
interested in large scale Sov warfare but we place no articifical 
limits on what we do in search of good content. Querious is a highly 
active region for small gang combat and we've been lucky enough to 
find a home right in its centre.

### Can anyone join Agony? Is it by invite only? By skill points?

<div>
  {% include recruitment.html %}
</div>

{% assign wiki=site.data.internal_links.wiki %}

[Agony Empire History]: {{ wiki.url }}/{{ wiki.paths.page }}The_History_of_AGONY
