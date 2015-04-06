---
layout: banner
title: About
heading: About Agony Unleashed
id: about
---

## History

At the beginning of 2006, Agony was founded by a small group of players
who wanted to teach new players the basics of PVP.
Since that time, Agony has gone from a ten character corporation that only flew frigates,
to a 250 character corporation that has participated in four alliance tournaments,
fought in countless conflicts all over the EVE universe,
held space, built an outpost, taught thousands and thousands of players about PVP,
and countless other accomplishments.
You can learn more about the history of Agony in our [Agony Empire History] article.

## The Agony Philosophy

<ul>
{% for item in site.data.about.philosophy %}
  <li>{{ item }}</li>
{% endfor %}
</ul>

## Frequently Asked Questions

### Where is Agony's HQ?

### Who is the CEO of Agony?

### What does Agony do?

### How can my corp apply to join the Agony Empire alliance?

### What is Agony's position on blues?

### If you guys live in 0.0 and don't have a ton of blues, how do you ever make ISK?

### Is Agony like EVE University? Do I join in order to take classes?

### Isn't Agony just a new player PVP training corporation?

### Are you pirates?

### Do you accept contracts from other corporations or alliances? Are you mercenaries for hire?

### Do you hold space or intend to?

### Can anyone join Agony? Is it by invite only? By skill points?

{% assign wiki=site.data.internal_links.wiki %}

[Agony Empire History]: {{ wiki.url }}/{{ wiki.page }}The_History_of_AGONY
