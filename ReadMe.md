# DSLX
###### Helping Dyslexics [read](http://geon.github.io/programming/2016/03/03/dsxyliea) with ease
---
![ScreenShot](app/assets/images/DSLXSS.png)
In conjunction with HIC2016's Hacking Health (Hackathon), which aimed to mix hackers and unique technical experts with healthcare professionals to solve problems faced by the Medical Industry ,team DSLX embarked upon a journey to build an internet browser extension that reformats web pages so that Dyslexics can read with ease.

Over 2 Million Australians suffers from Dyslexia. Current existing tools fail to offer a complete solution, as they fail to recognize that it comes in many forms, ranging from a wide spectrum. Hence, DSLX offers a personalized approach backed by evidence-based research.


> I am slow, but I'm not lazy. I see things different, but I'm not the problem. I am a symptom of an inadequate system.
>I am dyslexic. I am 700 million. STRONG.

>Who do not have access to the web, the way you do, cannot see the way you do.
>So make me a web tool, like how you make those cool motorized wheelchairs.

This is an ode to dyslexia.

---

# Technical Stand Point (MVP)
* Users can sign up and log in. A secure password is assigned using bcrypt.
* Upon signing up, users are taken through a series of questionnaire to pick their preferences in background color, text color, font type, font size, line length and line spacing, which are then saved to User Presets.
* On the selection progress, CSS changes are implemented to the next question using JQuery, making the questionnaire dynamic as it progresses. For example:

|Questions| 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
|Attributes| Background Color | Font Type | Text Color | Text Size | Text Spacing | Line Height |
|User's Selection| Green | Verdana | Blue | 80px | 30px | 55px |
|CSS Implementation | Green | Green, Verdana | Green, Verdana, Blue | Green, Verdana, Blue, 80px | Green, Verdana, Blue, 80px, 30px | Green, Verdana, Blue, 80px, 30px, 55px |

* Next, these information is stored into the PSQL database using an AJAX call in the form of object. User is notified that the presets are saved.

* When a user enters a url into the search bar, the Nokogiri Gem scraps the raw data (HTML) off the page. The presets stored in the form of CSS is then implemented onto this HTML page and is rendered for readability (best sample website to test this at the moment is http://example.com/).

## Technologies
include:
* SCSS
* JQuery
* HTML / CSS
* Ruby on Rails (bcrypt & nokogiri gem)
* JavaScript
* Materialise
* AJAX
* Postgresql



# Team Members
Name | Role | Contacts
---|---|---|---
Hui Min Yau | Marketing Strategy / Research Lead | [linkedin](https://www.linkedin.com/in/huiminthehappy), [email](huiminthehappy@gmail.com)|
Jessica Wu | Market Feasibility/ Research | [linkedin](https://www.linkedin.com/in/jeswu), [email](jjgqwu@gmail.com)|
Farhang Dehzad | Product Management/ Research | [linkedin](https://www.linkedin.com/in/farhangdehzad),  [github](https://www.github.com/farhang87), [email](farhang87@gmail.com) |
David Liu  | Medical Student / Research | [linkedin](https://www.linkedin.com/in/david-liu-20188443), [github](https://www.github.com/projectwakii), [email](daliuvr@gmail.com)
Cheng Chua | Front End / Digital Design | [linkedin](https://www.linkedin.com/in/chuaccheng), [github](https://www.github.com/chuaccheng), [email](hello@chuaccheng.com) |
Christopher Lee | Full Stack | [linkedin](https://www.linkedin.com/in/hanernlee), [github](https://www.github.com/hanernlee), [email](hanernlee@gmail.com) |
Keith Chong | Full Stack | [linkedin](https://www.linkedin.com/in/keitheous), [github](https://www.github.com/keitheous), [email](keithchongwy@gmail.com) |

---

We won second place and this was an awesome team. Special thanks to all the Judges and Mentors. Without you, non of this is possible.

Thank you for visiting this repo =)
