---
layout: banner
title: Apply
heading: Apply to Agony
id: recruitment-apply
---

{% assign recruitment = site.data.recruitment %}
{% assign text = site.data.recruitment.text %}

<div>
  {% include recruitment.html %}
</div>

**Our goal for Agony is to be a highly respected PVP alliance.
We do that through the love of a good fight; thinking outside the box;
fighting superior forces with superior tactics;
and knowledge sharing, internally and externally through our PvP university.**

Before you get started, it's worth noting that being able to follow instructions properly
is taken into consideration by the membership of Agony when reading your questionnaire.
It's worth taking that extra moment to pay attention to detail and get your application right.
**Not following instructions can lead to your application being rejected.**

<div>
  {% include button-about.html %}
  {% include button-faq.html %}
</div>

## Instructions

1. Download or copy and paste the questionnaire below into a text editor to edit,
   e.g., [Atom], [Notepad++], [Vim], [Emacs], [Textmate], etc.
   Do not use a word processor like Microsoft Word
   because it will add a lot of formatting to the file.
   Alternatively, you can edit the questionnaire directly in the forum,
   but you run the risk of losing your work if anything goes wrong!
2. Edit the file and remove the `-- Your answer here --` and replace it with your answer.
   **Do not edit the file in any other way, or you will mess up the formatting.**
3. After you have filled out the questionnaire, create a thread in the Public Chat Forum forum.
   Title your thread: `[APPLICANT] Your Character's Name`.
   For Example, Gizznitt's application would be: `[APPLICANT] Gizznitt Malikite`.
4. In the body of your new thread, copy the entire text of the application, and paste it in the thread.
5. Proofread your application to see that you haven't accidentally missed or erased any questions.
6. Submit the post.
   Do not worry about it being public, it will be moved to the internal section of the forums quickly.

Note: if you have trouble with written English, but can converse English just fine,
please contact a recruiter for assistance with the written part.

[Atom]: https://atom.io/
[Emacs]: https://www.gnu.org/software/emacs/
[Notepad++]: http://notepad-plus-plus.org/
[Textmate]: https://macromates.com/
[Vim]: http://www.vim.org/

## Questionnaire

Copy everything inside the box below.
It will wrap properly in Notepad or another text editor.
You can also download the application directly:

<a class="application-button icon {{ recruitment.icons.application }}"
   href="{{ site.baseurl }}/recruitment/agony-application.txt" download>
  {{ text.application-download }}
</a>

```text
{{ recruitment.application }}
```
