---
layout: arkumu-docs
title: Ereignistypen
order: 3.2.1
permalink: /documentation/controlled-vocabularies/event-types/
---

```Event types```

---
<br/>

**English:**

Event Types are used to further categorise [**Events**](#event) in arkumu.nrw. In CIDOC, Events itself are an instance of [**E7** Activity](http://cidoc-crm.org/cidoc-crm/7.1.3/E7_Activity). There, this entity has a number of subclass-entities, that could furthermore distinguish an activity, like [**E65** Creation](http://cidoc-crm.org/cidoc-crm/7.1.3/E65_Creation) for example. But these entities are quite ontological abstracted and not really suited to express the wide variety of events that are taking place in the art world. Since further CRM properties, in these subclass-etities, are not needed to express an Event in the arkumu-sense, this controlled vocabulary is used to more precisely define of what type of an Event is.

<br/>

---

<br/>

**Deutsch:**

Ereignistypen werden verwendet, um [**Ereignisse**](#event) in arkumu.nrw weiter zu kategorisieren. In CIDOC sind Ereignisse selbst eine Instanz von [**E7** Activity](http://cidoc-crm.org/cidoc-crm/7.1.3/E7_Activity). Dort hat diese Entität eine Reihe von Unterklassen-Entitäten, die eine Aktivität weiter unterscheiden könnten, wie beispielsweise [**E65** Creation](http://cidoc-crm.org/cidoc-crm/7.1.3/E65_Creation). Diese Entitäten sind jedoch ontologisch recht abstrakt und nicht wirklich geeignet, um die große Vielfalt der Ereignisse in der Kunstwelt auszudrücken. Da weitere CRM-Properties aus diesen "Subclass Entities" nicht erforderlich sind, um ein Ereignis im Sinne von arkumu auszudrücken, wird dieses kontrollierte Vokabular verwendet, um genauer zu definieren, um welche Art von Ereignis es sich handelt.

<br/>

---

<br/>
<br/>

| Format | Link | Last Updated |
|-----------|-----------|-----------|
| **CSV** | <https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/blob/main/controlled_vocabularies/Event_Types.csv> | 2025-10-16 |
| **Excel** | <https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/blob/main/controlled_vocabularies/Event_Types.xlsx> | 2025-10-16 |
| **PDF** | <https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/blob/main/controlled_vocabularies/Event_Types.pdf>  | 2025-10-16 |

<br/>
<br/>

---

<br/>
<br/>

<details><summary>Event Types ordered by ID | Ereignistypen nach ID geordnet</summary>
<table>
<tr><th>ID</th><th>German Name</th><th>English Name</th></tr>
<tr><td><a href='#event-type-1'>1</a></td><td><a href='#event-type-1'>Ankauf</a></td><td><a href='#event-type-1'>Purchase</a></td></tr>
<tr><td><a href='#event-type-2'>2</a></td><td><a href='#event-type-2'>Antrittsvorlesung</a></td><td><a href='#event-type-2'>Inaugural Lecture</a></td></tr>
<tr><td><a href='#event-type-3'>3</a></td><td><a href='#event-type-3'>Arrangement</a></td><td><a href='#event-type-3'>Arrangement</a></td></tr>
<tr><td><a href='#event-type-4'>4</a></td><td><a href='#event-type-4'>Aufführung (Darstellende Künste)</a></td><td><a href='#event-type-4'>Performance (Performing Arts)</a></td></tr>
<tr><td><a href='#event-type-5'>5</a></td><td><a href='#event-type-5'>Aufführung (Musik)</a></td><td><a href='#event-type-5'>Musical Performance</a></td></tr>
<tr><td><a href='#event-type-6'>6</a></td><td><a href='#event-type-6'>Ausstellung</a></td><td><a href='#event-type-6'>Exhibition</a></td></tr>
<tr><td><a href='#event-type-7'>7</a></td><td><a href='#event-type-7'>Ausstellungseröffnung</a></td><td><a href='#event-type-7'>Exhibition Opening</a></td></tr>
<tr><td><a href='#event-type-8'>8</a></td><td><a href='#event-type-8'>Auszeichnung</a></td><td><a href='#event-type-8'>Award</a></td></tr>
<tr><td><a href='#event-type-9'>9</a></td><td><a href='#event-type-9'>Beauftragung</a></td><td><a href='#event-type-9'>Commissioning</a></td></tr>
<tr><td><a href='#event-type-10'>10</a></td><td><a href='#event-type-10'>Bearbeitung</a></td><td><a href='#event-type-10'>Modification</a></td></tr>
<tr><td><a href='#event-type-11'>11</a></td><td><a href='#event-type-11'>Datenkonvertierung</a></td><td><a href='#event-type-11'>Data Conversion</a></td></tr>
<tr><td><a href='#event-type-12'>12</a></td><td><a href='#event-type-12'>Digitalisierung</a></td><td><a href='#event-type-12'>Digitisation</a></td></tr>
<tr><td><a href='#event-type-13'>13</a></td><td><a href='#event-type-13'>Entwurf</a></td><td><a href='#event-type-13'>Design</a></td></tr>
<tr><td><a href='#event-type-14'>14</a></td><td><a href='#event-type-14'>Erstausstrahlung</a></td><td><a href='#event-type-14'>TV Première</a></td></tr>
<tr><td><a href='#event-type-15'>15</a></td><td><a href='#event-type-15'>Erwerb</a></td><td><a href='#event-type-15'>Acquisition</a></td></tr>
<tr><td><a href='#event-type-16'>16</a></td><td><a href='#event-type-16'>Festival</a></td><td><a href='#event-type-16'>Festival</a></td></tr>
<tr><td><a href='#event-type-17'>17</a></td><td><a href='#event-type-17'>Filmfestival</a></td><td><a href='#event-type-17'>Film Festival</a></td></tr>
<tr><td><a href='#event-type-18'>18</a></td><td><a href='#event-type-18'>Filmvorführung</a></td><td><a href='#event-type-18'>Film Screening</a></td></tr>
<tr><td><a href='#event-type-19'>19</a></td><td><a href='#event-type-19'>Galvanisierung</a></td><td><a href='#event-type-19'>Electroplating</a></td></tr>
<tr><td><a href='#event-type-20'>20</a></td><td><a href='#event-type-20'>Gast-Performance</a></td><td><a href='#event-type-20'>Guest Performance</a></td></tr>
<tr><td><a href='#event-type-21'>21</a></td><td><a href='#event-type-21'>Geistige Schöpfung</a></td><td><a href='#event-type-21'>Creation</a></td></tr>
<tr><td><a href='#event-type-22'>22</a></td><td><a href='#event-type-22'>Herstellung</a></td><td><a href='#event-type-22'>Production</a></td></tr>
<tr><td><a href='#event-type-23'>23</a></td><td><a href='#event-type-23'>Interview</a></td><td><a href='#event-type-23'>Interview</a></td></tr>
<tr><td><a href='#event-type-24'>24</a></td><td><a href='#event-type-24'>Kolloquium</a></td><td><a href='#event-type-24'>Colloquium</a></td></tr>
<tr><td><a href='#event-type-25'>25</a></td><td><a href='#event-type-25'>Konzert</a></td><td><a href='#event-type-25'>Concert</a></td></tr>
<tr><td><a href='#event-type-26'>26</a></td><td><a href='#event-type-26'>Konzertreihe</a></td><td><a href='#event-type-26'>Concert Series</a></td></tr>
<tr><td><a href='#event-type-27'>27</a></td><td><a href='#event-type-27'>Meisterklasse</a></td><td><a href='#event-type-27'>Master Class</a></td></tr>
<tr><td><a href='#event-type-28'>28</a></td><td><a href='#event-type-28'>Musikalische Komposition</a></td><td><a href='#event-type-28'>Musical Composition</a></td></tr>
<tr><td><a href='#event-type-29'>29</a></td><td><a href='#event-type-29'>Musikfestival</a></td><td><a href='#event-type-29'>Music Festival</a></td></tr>
<tr><td><a href='#event-type-30'>30</a></td><td><a href='#event-type-30'>Performance</a></td><td><a href='#event-type-30'>Performance</a></td></tr>
<tr><td><a href='#event-type-31'>31</a></td><td><a href='#event-type-31'>Planung</a></td><td><a href='#event-type-31'>Planning</a></td></tr>
<tr><td><a href='#event-type-32'>32</a></td><td><a href='#event-type-32'>Podiumsdiskussion</a></td><td><a href='#event-type-32'>Panel Discussion</a></td></tr>
<tr><td><a href='#event-type-33'>33</a></td><td><a href='#event-type-33'>Preisverleihung</a></td><td><a href='#event-type-33'>Award Ceremony</a></td></tr>
<tr><td><a href='#event-type-34'>34</a></td><td><a href='#event-type-34'>Premiere</a></td><td><a href='#event-type-34'>Première</a></td></tr>
<tr><td><a href='#event-type-35'>35</a></td><td><a href='#event-type-35'>Probe</a></td><td><a href='#event-type-35'>Rehearsal</a></td></tr>
<tr><td><a href='#event-type-36'>36</a></td><td><a href='#event-type-36'>Rede</a></td><td><a href='#event-type-36'>Speech</a></td></tr>
<tr><td><a href='#event-type-37'>37</a></td><td><a href='#event-type-37'>Rundgang</a></td><td><a href='#event-type-37'>Annual Exhibition</a></td></tr>
<tr><td><a href='#event-type-38'>38</a></td><td><a href='#event-type-38'>Schnitt</a></td><td><a href='#event-type-38'>Editing (Film/TV/Video)</a></td></tr>
<tr><td><a href='#event-type-39'>39</a></td><td><a href='#event-type-39'>Studienabschluss</a></td><td><a href='#event-type-39'>Graduation</a></td></tr>
<tr><td><a href='#event-type-40'>40</a></td><td><a href='#event-type-40'>Sommerakademie</a></td><td><a href='#event-type-40'>Summer School</a></td></tr>
<tr><td><a href='#event-type-41'>41</a></td><td><a href='#event-type-41'>Symposium</a></td><td><a href='#event-type-41'>Conference</a></td></tr>
<tr><td><a href='#event-type-42'>42</a></td><td><a href='#event-type-42'>Themenwoche</a></td><td><a href='#event-type-42'>Thematic Week</a></td></tr>
<tr><td><a href='#event-type-43'>43</a></td><td><a href='#event-type-43'>Tonaufnahme</a></td><td><a href='#event-type-43'>Sound Recording</a></td></tr>
<tr><td><a href='#event-type-44'>44</a></td><td><a href='#event-type-44'>Umgestaltung</a></td><td><a href='#event-type-44'>Transformation</a></td></tr>
<tr><td><a href='#event-type-45'>45</a></td><td><a href='#event-type-45'>Uraufführung</a></td><td><a href='#event-type-45'>World Première</a></td></tr>
<tr><td><a href='#event-type-46'>46</a></td><td><a href='#event-type-46'>Ursendung</a></td><td><a href='#event-type-46'>Radio Première</a></td></tr>
<tr><td><a href='#event-type-47'>47</a></td><td><a href='#event-type-47'>Veröffentlichung</a></td><td><a href='#event-type-47'>Publishing</a></td></tr>
<tr><td><a href='#event-type-48'>48</a></td><td><a href='#event-type-48'>Vertrieb</a></td><td><a href='#event-type-48'>Marketing</a></td></tr>
<tr><td><a href='#event-type-49'>49</a></td><td><a href='#event-type-49'>Vorlesung</a></td><td><a href='#event-type-49'>Lecture</a></td></tr>
<tr><td><a href='#event-type-50'>50</a></td><td><a href='#event-type-50'>Vortrag</a></td><td><a href='#event-type-50'>Presentation</a></td></tr>
<tr><td><a href='#event-type-51'>51</a></td><td><a href='#event-type-51'>Workshop</a></td><td><a href='#event-type-51'>Workshop</a></td></tr>
<tr><td><a href='#event-type-52'>52</a></td><td><a href='#event-type-52'>Zerstörung</a></td><td><a href='#event-type-52'>Destruction</a></td></tr>
<tr><td><a href='#event-type-53'>53</a></td><td><a href='#event-type-53'>Mastering</a></td><td><a href='#event-type-53'>Mastering</a></td></tr>
<tr><td><a href='#event-type-54'>54</a></td><td><a href='#event-type-54'>Dokumentation</a></td><td><a href='#event-type-54'>Documentation</a></td></tr>
<tr><td><a href='#event-type-55'>55</a></td><td><a href='#event-type-55'>Radiosendung</a></td><td><a href='#event-type-55'>Radio Programme</a></td></tr>
<tr><td><a href='#event-type-56'>56</a></td><td><a href='#event-type-56'>Fernsehausstrahlung</a></td><td><a href='#event-type-56'>Television Programme</a></td></tr>
<tr><td><a href='#event-type-57'>57</a></td><td><a href='#event-type-57'>Lesung</a></td><td><a href='#event-type-57'>Reading</a></td></tr>
<tr><td><a href='#event-type-58'>58</a></td><td><a href='#event-type-58'>Übersetzung</a></td><td><a href='#event-type-58'>Translation</a></td></tr>
<tr><td><a href='#event-type-59'>59</a></td><td><a href='#event-type-59'>Gespräch</a></td><td><a href='#event-type-59'>Conversation</a></td></tr>
<tr><td><a href='#event-type-60'>60</a></td><td><a href='#event-type-60'>Veranstaltung</a></td><td><a href='#event-type-60'>Event</a></td></tr>
<tr><td><a href='#event-type-61'>61</a></td><td><a href='#event-type-61'>Live-Streaming</a></td><td><a href='#event-type-61'>Live Streaming</a></td></tr>
<tr><td><a href='#event-type-62'>62</a></td><td><a href='#event-type-62'>Kurs</a></td><td><a href='#event-type-62'>Course</a></td></tr>
<tr><td><a href='#event-type-63'>63</a></td><td><a href='#event-type-63'>Tag der offenen Tür</a></td><td><a href='#event-type-63'>Open House</a></td></tr>
</table>
</details>

<details><summary>Event Types ordered by German Name | Ereignistypen nach Deutschem Namen geordnet</summary>
<table border='1' cellspacing='0' cellpadding='5'>
<tr><th>German Name</th><th>English Name</th><th>ID</th></tr>
<tr><td><a href='#event-type-1'>Ankauf</a></td><td><a href='#event-type-1'>Purchase</a></td><td><a href='#event-type-1'>1</a></td></tr>
<tr><td><a href='#event-type-2'>Antrittsvorlesung</a></td><td><a href='#event-type-2'>Inaugural Lecture</a></td><td><a href='#event-type-2'>2</a></td></tr>
<tr><td><a href='#event-type-3'>Arrangement</a></td><td><a href='#event-type-3'>Arrangement</a></td><td><a href='#event-type-3'>3</a></td></tr>
<tr><td><a href='#event-type-4'>Aufführung (Darstellende Künste)</a></td><td><a href='#event-type-4'>Performance (Performing Arts)</a></td><td><a href='#event-type-4'>4</a></td></tr>
<tr><td><a href='#event-type-5'>Aufführung (Musik)</a></td><td><a href='#event-type-5'>Musical Performance</a></td><td><a href='#event-type-5'>5</a></td></tr>
<tr><td><a href='#event-type-6'>Ausstellung</a></td><td><a href='#event-type-6'>Exhibition</a></td><td><a href='#event-type-6'>6</a></td></tr>
<tr><td><a href='#event-type-7'>Ausstellungseröffnung</a></td><td><a href='#event-type-7'>Exhibition Opening</a></td><td><a href='#event-type-7'>7</a></td></tr>
<tr><td><a href='#event-type-8'>Auszeichnung</a></td><td><a href='#event-type-8'>Award</a></td><td><a href='#event-type-8'>8</a></td></tr>
<tr><td><a href='#event-type-10'>Bearbeitung</a></td><td><a href='#event-type-10'>Modification</a></td><td><a href='#event-type-10'>10</a></td></tr>
<tr><td><a href='#event-type-9'>Beauftragung</a></td><td><a href='#event-type-9'>Commissioning</a></td><td><a href='#event-type-9'>9</a></td></tr>
<tr><td><a href='#event-type-11'>Datenkonvertierung</a></td><td><a href='#event-type-11'>Data Conversion</a></td><td><a href='#event-type-11'>11</a></td></tr>
<tr><td><a href='#event-type-12'>Digitalisierung</a></td><td><a href='#event-type-12'>Digitisation</a></td><td><a href='#event-type-12'>12</a></td></tr>
<tr><td><a href='#event-type-54'>Dokumentation</a></td><td><a href='#event-type-54'>Documentation</a></td><td><a href='#event-type-54'>54</a></td></tr>
<tr><td><a href='#event-type-13'>Entwurf</a></td><td><a href='#event-type-13'>Design</a></td><td><a href='#event-type-13'>13</a></td></tr>
<tr><td><a href='#event-type-14'>Erstausstrahlung</a></td><td><a href='#event-type-14'>TV Première</a></td><td><a href='#event-type-14'>14</a></td></tr>
<tr><td><a href='#event-type-15'>Erwerb</a></td><td><a href='#event-type-15'>Acquisition</a></td><td><a href='#event-type-15'>15</a></td></tr>
<tr><td><a href='#event-type-56'>Fernsehausstrahlung</a></td><td><a href='#event-type-56'>Television Programme</a></td><td><a href='#event-type-56'>56</a></td></tr>
<tr><td><a href='#event-type-16'>Festival</a></td><td><a href='#event-type-16'>Festival</a></td><td><a href='#event-type-16'>16</a></td></tr>
<tr><td><a href='#event-type-17'>Filmfestival</a></td><td><a href='#event-type-17'>Film Festival</a></td><td><a href='#event-type-17'>17</a></td></tr>
<tr><td><a href='#event-type-18'>Filmvorführung</a></td><td><a href='#event-type-18'>Film Screening</a></td><td><a href='#event-type-18'>18</a></td></tr>
<tr><td><a href='#event-type-19'>Galvanisierung</a></td><td><a href='#event-type-19'>Electroplating</a></td><td><a href='#event-type-19'>19</a></td></tr>
<tr><td><a href='#event-type-20'>Gast-Performance</a></td><td><a href='#event-type-20'>Guest Performance</a></td><td><a href='#event-type-20'>20</a></td></tr>
<tr><td><a href='#event-type-21'>Geistige Schöpfung</a></td><td><a href='#event-type-21'>Creation</a></td><td><a href='#event-type-21'>21</a></td></tr>
<tr><td><a href='#event-type-59'>Gespräch</a></td><td><a href='#event-type-59'>Conversation</a></td><td><a href='#event-type-59'>59</a></td></tr>
<tr><td><a href='#event-type-22'>Herstellung</a></td><td><a href='#event-type-22'>Production</a></td><td><a href='#event-type-22'>22</a></td></tr>
<tr><td><a href='#event-type-23'>Interview</a></td><td><a href='#event-type-23'>Interview</a></td><td><a href='#event-type-23'>23</a></td></tr>
<tr><td><a href='#event-type-24'>Kolloquium</a></td><td><a href='#event-type-24'>Colloquium</a></td><td><a href='#event-type-24'>24</a></td></tr>
<tr><td><a href='#event-type-25'>Konzert</a></td><td><a href='#event-type-25'>Concert</a></td><td><a href='#event-type-25'>25</a></td></tr>
<tr><td><a href='#event-type-26'>Konzertreihe</a></td><td><a href='#event-type-26'>Concert Series</a></td><td><a href='#event-type-26'>26</a></td></tr>
<tr><td><a href='#event-type-62'>Kurs</a></td><td><a href='#event-type-62'>Course</a></td><td><a href='#event-type-62'>62</a></td></tr>
<tr><td><a href='#event-type-57'>Lesung</a></td><td><a href='#event-type-57'>Reading</a></td><td><a href='#event-type-57'>57</a></td></tr>
<tr><td><a href='#event-type-61'>Live-Streaming</a></td><td><a href='#event-type-61'>Live Streaming</a></td><td><a href='#event-type-61'>61</a></td></tr>
<tr><td><a href='#event-type-53'>Mastering</a></td><td><a href='#event-type-53'>Mastering</a></td><td><a href='#event-type-53'>53</a></td></tr>
<tr><td><a href='#event-type-27'>Meisterklasse</a></td><td><a href='#event-type-27'>Master Class</a></td><td><a href='#event-type-27'>27</a></td></tr>
<tr><td><a href='#event-type-28'>Musikalische Komposition</a></td><td><a href='#event-type-28'>Musical Composition</a></td><td><a href='#event-type-28'>28</a></td></tr>
<tr><td><a href='#event-type-29'>Musikfestival</a></td><td><a href='#event-type-29'>Music Festival</a></td><td><a href='#event-type-29'>29</a></td></tr>
<tr><td><a href='#event-type-30'>Performance</a></td><td><a href='#event-type-30'>Performance</a></td><td><a href='#event-type-30'>30</a></td></tr>
<tr><td><a href='#event-type-31'>Planung</a></td><td><a href='#event-type-31'>Planning</a></td><td><a href='#event-type-31'>31</a></td></tr>
<tr><td><a href='#event-type-32'>Podiumsdiskussion</a></td><td><a href='#event-type-32'>Panel Discussion</a></td><td><a href='#event-type-32'>32</a></td></tr>
<tr><td><a href='#event-type-33'>Preisverleihung</a></td><td><a href='#event-type-33'>Award Ceremony</a></td><td><a href='#event-type-33'>33</a></td></tr>
<tr><td><a href='#event-type-34'>Premiere</a></td><td><a href='#event-type-34'>Première</a></td><td><a href='#event-type-34'>34</a></td></tr>
<tr><td><a href='#event-type-35'>Probe</a></td><td><a href='#event-type-35'>Rehearsal</a></td><td><a href='#event-type-35'>35</a></td></tr>
<tr><td><a href='#event-type-55'>Radiosendung</a></td><td><a href='#event-type-55'>Radio Programme</a></td><td><a href='#event-type-55'>55</a></td></tr>
<tr><td><a href='#event-type-36'>Rede</a></td><td><a href='#event-type-36'>Speech</a></td><td><a href='#event-type-36'>36</a></td></tr>
<tr><td><a href='#event-type-37'>Rundgang</a></td><td><a href='#event-type-37'>Annual Exhibition</a></td><td><a href='#event-type-37'>37</a></td></tr>
<tr><td><a href='#event-type-38'>Schnitt</a></td><td><a href='#event-type-38'>Editing (Film/TV/Video)</a></td><td><a href='#event-type-38'>38</a></td></tr>
<tr><td><a href='#event-type-40'>Sommerakademie</a></td><td><a href='#event-type-40'>Summer School</a></td><td><a href='#event-type-40'>40</a></td></tr>
<tr><td><a href='#event-type-39'>Studienabschluss</a></td><td><a href='#event-type-39'>Graduation</a></td><td><a href='#event-type-39'>39</a></td></tr>
<tr><td><a href='#event-type-41'>Symposium</a></td><td><a href='#event-type-41'>Conference</a></td><td><a href='#event-type-41'>41</a></td></tr>
<tr><td><a href='#event-type-63'>Tag der offenen Tür</a></td><td><a href='#event-type-63'>Open House</a></td><td><a href='#event-type-63'>63</a></td></tr>
<tr><td><a href='#event-type-42'>Themenwoche</a></td><td><a href='#event-type-42'>Thematic Week</a></td><td><a href='#event-type-42'>42</a></td></tr>
<tr><td><a href='#event-type-43'>Tonaufnahme</a></td><td><a href='#event-type-43'>Sound Recording</a></td><td><a href='#event-type-43'>43</a></td></tr>
<tr><td><a href='#event-type-44'>Umgestaltung</a></td><td><a href='#event-type-44'>Transformation</a></td><td><a href='#event-type-44'>44</a></td></tr>
<tr><td><a href='#event-type-45'>Uraufführung</a></td><td><a href='#event-type-45'>World Première</a></td><td><a href='#event-type-45'>45</a></td></tr>
<tr><td><a href='#event-type-46'>Ursendung</a></td><td><a href='#event-type-46'>Radio Première</a></td><td><a href='#event-type-46'>46</a></td></tr>
<tr><td><a href='#event-type-60'>Veranstaltung</a></td><td><a href='#event-type-60'>Event</a></td><td><a href='#event-type-60'>60</a></td></tr>
<tr><td><a href='#event-type-48'>Vertrieb</a></td><td><a href='#event-type-48'>Marketing</a></td><td><a href='#event-type-48'>48</a></td></tr>
<tr><td><a href='#event-type-47'>Veröffentlichung</a></td><td><a href='#event-type-47'>Publishing</a></td><td><a href='#event-type-47'>47</a></td></tr>
<tr><td><a href='#event-type-49'>Vorlesung</a></td><td><a href='#event-type-49'>Lecture</a></td><td><a href='#event-type-49'>49</a></td></tr>
<tr><td><a href='#event-type-50'>Vortrag</a></td><td><a href='#event-type-50'>Presentation</a></td><td><a href='#event-type-50'>50</a></td></tr>
<tr><td><a href='#event-type-51'>Workshop</a></td><td><a href='#event-type-51'>Workshop</a></td><td><a href='#event-type-51'>51</a></td></tr>
<tr><td><a href='#event-type-52'>Zerstörung</a></td><td><a href='#event-type-52'>Destruction</a></td><td><a href='#event-type-52'>52</a></td></tr>
<tr><td><a href='#event-type-58'>Übersetzung</a></td><td><a href='#event-type-58'>Translation</a></td><td><a href='#event-type-58'>58</a></td></tr>
</table>
</details>

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-15" id="event-type-15">event-type-15</a>

## Acquisition

|||
|-----------|-----------|
| **ID** | 15 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-15`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-15) |
| **English Name** | Acquisition |
| **English Synonyms** | Transfer of Legal Ownership,Transfer of Title  |
| **German Name** | Erwerb |
| **German Synonyms** | Akquise,Erwerbung,Zugang (Erwerb) |
| **Wikidata ID** | [Q3604747](https://www.wikidata.org/entity/Q3604747) |
| **GND ID** | [4212536-4](https://d-nb.info/gnd/4212536-4) |
| **AAT ID** | [300157782](https://vocab.getty.edu/aat/300157782) |
| **LIDO Terminology ID** | [lido00001](http://terminology.lido-schema.org/lido00001) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-37" id="event-type-37">event-type-37</a>

## Annual Exhibition

|||
|-----------|-----------|
| **ID** | 37 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-37`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-37) |
| **English Name** | Annual Exhibition |
| **German Name** | Rundgang |
| **German Synonyms** | Jahresausstellung |
| **Wikidata ID** | [Q55336815](https://www.wikidata.org/entity/Q55336815) |
| **AAT ID** | [300311622](https://vocab.getty.edu/aat/300311622) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-3" id="event-type-3">event-type-3</a>

## Arrangement

|||
|-----------|-----------|
| **ID** | 3 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-3`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-3) |
| **English Name** | Arrangement |
| **English Synonyms** | Musical Arrangement |
| **German Name** | Arrangement |
| **Wikidata ID** | [Q379755](https://www.wikidata.org/entity/Q379755) |
| **GND ID** | [4285138-5](https://d-nb.info/gnd/4285138-5) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-8" id="event-type-8">event-type-8</a>

## Award

|||
|-----------|-----------|
| **ID** | 8 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-8`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-8) |
| **English Name** | Award |
| **English Synonyms** | Prize |
| **German Name** | Auszeichnung |
| **German Synonyms** | Ehrung,Preis |
| **Wikidata ID** | [Q618779](https://www.wikidata.org/entity/Q618779) |
| **GND ID** | [4338046-3](https://d-nb.info/gnd/4338046-3) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-33" id="event-type-33">event-type-33</a>

## Award Ceremony

|||
|-----------|-----------|
| **ID** | 33 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-33`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-33) |
| **English Name** | Award Ceremony |
| **German Name** | Preisverleihung |
| **Wikidata ID** | [Q4504495](https://www.wikidata.org/entity/Q4504495) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-24" id="event-type-24">event-type-24</a>

## Colloquium

|||
|-----------|-----------|
| **ID** | 24 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-24`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-24) |
| **English Name** | Colloquium |
| **German Name** | Kolloquium |
| **Wikidata ID** | [Q4228029](https://www.wikidata.org/entity/Q4228029) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-9" id="event-type-9">event-type-9</a>

## Commissioning

|||
|-----------|-----------|
| **ID** | 9 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-9`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-9) |
| **English Name** | Commissioning |
| **English Synonyms** | Order |
| **German Name** | Beauftragung |
| **German Synonyms** | Auftrag,Order |
| **Wikidata ID** | [Q566889](https://www.wikidata.org/entity/Q566889) |
| **GND ID** | [4003557-8](https://d-nb.info/gnd/4003557-8) |
| **LIDO Terminology ID** | [lido00226](http://terminology.lido-schema.org/lido00226) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-25" id="event-type-25">event-type-25</a>

## Concert

|||
|-----------|-----------|
| **ID** | 25 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-25`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-25) |
| **English Name** | Concert |
| **German Name** | Konzert |
| **German Synonyms** | Konzertabend |
| **Wikidata ID** | [Q182832](https://www.wikidata.org/entity/Q182832) |
| **GND ID** | [4317474-7](https://d-nb.info/gnd/4317474-7) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-26" id="event-type-26">event-type-26</a>

## Concert Series

|||
|-----------|-----------|
| **ID** | 26 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-26`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-26) |
| **English Name** | Concert Series |
| **English Synonyms** | Series of Concerts |
| **German Name** | Konzertreihe |
| **Wikidata ID** | [Q107736918](https://www.wikidata.org/entity/Q107736918) |
| **GND ID** | [4432417-0](https://d-nb.info/gnd/4432417-0) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-41" id="event-type-41">event-type-41</a>

## Conference

|||
|-----------|-----------|
| **ID** | 41 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-41`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-41) |
| **English Name** | Conference |
| **English Synonyms** | Academic Conference,Scientific Conference,Convention |
| **German Name** | Symposium |
| **German Synonyms** | Wissenschaftliche Konferenz,Konferenz,Kongress |
| **Wikidata ID** | [Q2020153](https://www.wikidata.org/entity/Q2020153) |
| **GND ID** | [4032055-8](https://d-nb.info/gnd/4032055-8) |
| **AAT ID** | [300054789](https://vocab.getty.edu/aat/300054789) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-59" id="event-type-59">event-type-59</a>

## Conversation

|||
|-----------|-----------|
| **ID** | 59 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-59`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-59) |
| **English Name** | Conversation |
| **English Synonyms** | Talk |
| **German Name** | Gespräch |
| **German Synonyms** | Unterhaltung |
| **Wikidata ID** | [Q52943](https://www.wikidata.org/entity/Q52943) |
| **GND ID** | [4020713-4](https://d-nb.info/gnd/4020713-4) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-62" id="event-type-62">event-type-62</a>

## Course

|||
|-----------|-----------|
| **ID** | 62 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-62`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-62) |
| **English Name** | Course |
| **English Synonyms** | Class,Educational Course,Academic Course |
| **German Name** | Kurs |
| **German Synonyms** | Lehrveranstaltung |
| **Wikidata ID** | [Q600134](https://www.wikidata.org/entity/Q600134) |
| **GND ID** | [4166215-5](https://d-nb.info/gnd/4166215-5) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-21" id="event-type-21">event-type-21</a>

## Creation

|||
|-----------|-----------|
| **ID** | 21 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-21`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-21) |
| **English Name** | Creation |
| **English Synonyms** | Conception |
| **German Name** | Geistige Schöpfung |
| **German Synonyms** | Begriffliche Schöpfung,Intellektuelle Schöpfung,Konzeptuelle Schöpfung,Künstlerische Schöpfung |
| **Wikidata ID** | [Q11398090](https://www.wikidata.org/entity/Q11398090) |
| **LIDO Terminology ID** | [lido00012](http://terminology.lido-schema.org/lido00012) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-11" id="event-type-11">event-type-11</a>

## Data Conversion

|||
|-----------|-----------|
| **ID** | 11 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-11`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-11) |
| **English Name** | Data Conversion |
| **German Name** | Datenkonvertierung |
| **German Synonyms** | Konvertierung |
| **Wikidata ID** | [Q1783551](https://www.wikidata.org/entity/Q1783551) |
| **GND ID** | [4138254-7](https://d-nb.info/gnd/4138254-7) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-13" id="event-type-13">event-type-13</a>

## Design

|||
|-----------|-----------|
| **ID** | 13 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-13`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-13) |
| **English Name** | Design |
| **English Synonyms** | Designing |
| **German Name** | Entwurf |
| **German Synonyms** | Entwerfen,Gestaltung |
| **Wikidata ID** | [Q1519454](https://www.wikidata.org/entity/Q1519454) |
| **GND ID** | [4121208-3](https://d-nb.info/gnd/4121208-3) |
| **AAT ID** | [300102051](https://vocab.getty.edu/aat/300102051) |
| **LIDO Terminology ID** | [lido00224](http://terminology.lido-schema.org/lido00224) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-52" id="event-type-52">event-type-52</a>

## Destruction

|||
|-----------|-----------|
| **ID** | 52 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-52`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-52) |
| **English Name** | Destruction |
| **German Name** | Zerstörung |
| **German Synonyms** | Vernichtung |
| **Wikidata ID** | [Q17781833](https://www.wikidata.org/entity/Q17781833) |
| **GND ID** | [4222882-7](https://d-nb.info/gnd/4222882-7) |
| **AAT ID** | [300053087](https://vocab.getty.edu/aat/300053087) |
| **LIDO Terminology ID** | [lido00026](http://terminology.lido-schema.org/lido00026) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-12" id="event-type-12">event-type-12</a>

## Digitisation

|||
|-----------|-----------|
| **ID** | 12 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-12`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-12) |
| **English Name** | Digitisation |
| **English Synonyms** | Retrodigitisation |
| **German Name** | Digitalisierung |
| **German Synonyms** | Retrodigitalisierung |
| **Wikidata ID** | [Q843958](https://www.wikidata.org/entity/Q843958) |
| **GND ID** | [4123065-6](https://d-nb.info/gnd/4123065-6) |
| **AAT ID** | [300202383](https://vocab.getty.edu/aat/300202383) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-54" id="event-type-54">event-type-54</a>

## Documentation

|||
|-----------|-----------|
| **ID** | 54 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-54`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-54) |
| **English Name** | Documentation |
| **German Name** | Dokumentation |
| **German Synonyms** | Fotodokumentation |
| **Wikidata ID** | [Q788790](https://www.wikidata.org/entity/Q788790) |
| **GND ID** | [4012656-0](https://d-nb.info/gnd/4012656-0) |
| **AAT ID** | [300379366](https://vocab.getty.edu/aat/300379366) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-38" id="event-type-38">event-type-38</a>

## Editing (Film/TV/Video)

|||
|-----------|-----------|
| **ID** | 38 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-38`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-38) |
| **English Name** | Editing (Film/TV/Video) |
| **German Name** | Schnitt |
| **German Synonyms** | Montage |
| **Wikidata ID** | [Q237893](https://www.wikidata.org/entity/Q237893) |
| **GND ID** | [4281773-0](https://d-nb.info/gnd/4281773-0) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-19" id="event-type-19">event-type-19</a>

## Electroplating

|||
|-----------|-----------|
| **ID** | 19 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-19`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-19) |
| **English Name** | Electroplating |
| **German Name** | Galvanisierung |
| **German Synonyms** | Galvanotechnik,Galvanische Beschichtung |
| **Wikidata ID** | [Q3503392](https://www.wikidata.org/entity/Q3503392) |
| **GND ID** | [4129892-5](https://d-nb.info/gnd/4129892-5) |
| **AAT ID** | [300054000](https://vocab.getty.edu/aat/300054000) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-60" id="event-type-60">event-type-60</a>

## Event

|||
|-----------|-----------|
| **ID** | 60 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-60`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-60) |
| **English Name** | Event |
| **English Synonyms** | Activity |
| **German Name** | Veranstaltung |
| **Wikidata ID** | [Q1656682](https://www.wikidata.org/entity/Q1656682) |
| **GND ID** | [4125453-3](https://d-nb.info/gnd/4125453-3) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-6" id="event-type-6">event-type-6</a>

## Exhibition

|||
|-----------|-----------|
| **ID** | 6 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-6`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-6) |
| **English Name** | Exhibition |
| **German Name** | Ausstellung |
| **German Synonyms** | Kunstausstellung,Gruppenausstellung,Einzelausstellung |
| **Wikidata ID** | [Q464980](https://www.wikidata.org/entity/Q464980) |
| **GND ID** | [4129601-1](https://d-nb.info/gnd/4129601-1) |
| **AAT ID** | [300054766](https://vocab.getty.edu/aat/300054766) |
| **LIDO Terminology ID** | [lido00225](http://terminology.lido-schema.org/lido00225) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-7" id="event-type-7">event-type-7</a>

## Exhibition Opening

|||
|-----------|-----------|
| **ID** | 7 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-7`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-7) |
| **English Name** | Exhibition Opening |
| **English Synonyms** | Vernissage,Private View,Opening Reception,Gallery Opening,Gallery Reception |
| **German Name** | Ausstellungseröffnung |
| **German Synonyms** | Vernissage |
| **Wikidata ID** | [Q772257](https://www.wikidata.org/entity/Q772257) |
| **GND ID** | [4435671-7](https://d-nb.info/gnd/4435671-7) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-16" id="event-type-16">event-type-16</a>

## Festival

|||
|-----------|-----------|
| **ID** | 16 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-16`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-16) |
| **English Name** | Festival |
| **German Name** | Festival |
| **Wikidata ID** | [Q132241](https://www.wikidata.org/entity/Q132241) |
| **GND ID** | [4154198-4](https://d-nb.info/gnd/4154198-4) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-17" id="event-type-17">event-type-17</a>

## Film Festival

|||
|-----------|-----------|
| **ID** | 17 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-17`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-17) |
| **English Name** | Film Festival |
| **German Name** | Filmfestival |
| **German Synonyms** | Filmfestspiel |
| **Wikidata ID** | [Q220505](https://www.wikidata.org/entity/Q220505) |
| **GND ID** | [4359942-4](https://d-nb.info/gnd/4359942-4) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-18" id="event-type-18">event-type-18</a>

## Film Screening

|||
|-----------|-----------|
| **ID** | 18 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-18`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-18) |
| **English Name** | Film Screening |
| **English Synonyms** | Screening |
| **German Name** | Filmvorführung |
| **German Synonyms** | Vorführung |
| **Wikidata ID** | [Q2295790](https://www.wikidata.org/entity/Q2295790) |
| **GND ID** | [4196355-6](https://d-nb.info/gnd/4196355-6) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-39" id="event-type-39">event-type-39</a>

## Graduation

|||
|-----------|-----------|
| **ID** | 39 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-39`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-39) |
| **English Name** | Graduation |
| **German Name** | Studienabschluss |
| **German Synonyms** | Hochschulabschluss,Graduierung |
| **Wikidata ID** | [Q1054021](https://www.wikidata.org/entity/Q1054021) |
| **GND ID** | [4332831-3](https://d-nb.info/gnd/4332831-3) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-20" id="event-type-20">event-type-20</a>

## Guest Performance

|||
|-----------|-----------|
| **ID** | 20 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-20`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-20) |
| **English Name** | Guest Performance |
| **German Name** | Gast-Performance |
| **German Synonyms** | Gastspiel |
| **Wikidata ID** | [Q40249767](https://www.wikidata.org/entity/Q40249767) |
| **GND ID** | [4255674-0](https://d-nb.info/gnd/4255674-0) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-2" id="event-type-2">event-type-2</a>

## Inaugural Lecture

|||
|-----------|-----------|
| **ID** | 2 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-2`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-2) |
| **English Name** | Inaugural Lecture |
| **German Name** | Antrittsvorlesung |
| **Wikidata ID** | [Q609261](https://www.wikidata.org/entity/Q609261) |
| **GND ID** | [4426602-9](https://d-nb.info/gnd/4426602-9) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-23" id="event-type-23">event-type-23</a>

## Interview

|||
|-----------|-----------|
| **ID** | 23 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-23`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-23) |
| **English Name** | Interview |
| **German Name** | Interview |
| **German Synonyms** | Studiogespräch |
| **Wikidata ID** | [Q178651](https://www.wikidata.org/entity/Q178651) |
| **GND ID** | [4027503-6](https://d-nb.info/gnd/4027503-6) |
| **AAT ID** | [300026392](https://vocab.getty.edu/aat/300026392) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-49" id="event-type-49">event-type-49</a>

## Lecture

|||
|-----------|-----------|
| **ID** | 49 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-49`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-49) |
| **English Name** | Lecture |
| **English Synonyms** | Talk |
| **German Name** | Vorlesung |
| **German Synonyms** | Lehrveranstaltung |
| **Wikidata ID** | [Q603773](https://www.wikidata.org/entity/Q603773) |
| **GND ID** | [4117405-7](https://d-nb.info/gnd/4117405-7) |
| **AAT ID** | [300026673](https://vocab.getty.edu/aat/300026673) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-61" id="event-type-61">event-type-61</a>

## Live Streaming

|||
|-----------|-----------|
| **ID** | 61 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-61`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-61) |
| **English Name** | Live Streaming |
| **English Synonyms** | Live Stream |
| **German Name** | Live-Streaming |
| **German Synonyms** | Live-Stream,Echtzeitübertragung,Live Stream,Livestream |
| **Wikidata ID** | [Q3027665](https://www.wikidata.org/entity/Q3027665) |
| **GND ID** | [4614855-3](https://d-nb.info/gnd/4614855-3) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-48" id="event-type-48">event-type-48</a>

## Marketing

|||
|-----------|-----------|
| **ID** | 48 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-48`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-48) |
| **English Name** | Marketing |
| **German Name** | Vertrieb |
| **German Synonyms** | Vermarktung |
| **Wikidata ID** | [Q39809](https://www.wikidata.org/entity/Q39809) |
| **GND ID** | [4127117-8](https://d-nb.info/gnd/4127117-8) |
| **AAT ID** | [300054673](https://vocab.getty.edu/aat/300054673) |
| **LIDO Terminology ID** | [lido00401](http://terminology.lido-schema.org/lido00401) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-27" id="event-type-27">event-type-27</a>

## Master Class

|||
|-----------|-----------|
| **ID** | 27 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-27`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-27) |
| **English Name** | Master Class |
| **German Name** | Meisterklasse |
| **Wikidata ID** | [Q2537465](https://www.wikidata.org/entity/Q2537465) |
| **GND ID** | [1033761672](https://d-nb.info/gnd/1033761672) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-53" id="event-type-53">event-type-53</a>

## Mastering

|||
|-----------|-----------|
| **ID** | 53 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-53`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-53) |
| **English Name** | Mastering |
| **English Synonyms** | Audio-Mastering |
| **German Name** | Mastering |
| **German Synonyms** | Audio-Mastering |
| **Wikidata ID** | [Q421031](https://www.wikidata.org/entity/Q421031) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-10" id="event-type-10">event-type-10</a>

## Modification

|||
|-----------|-----------|
| **ID** | 10 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-10`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-10) |
| **English Name** | Modification |
| **English Synonyms** | Revision,Edit,Editing,Processing |
| **German Name** | Bearbeitung |
| **German Synonyms** | Revision,Umarbeitung,Adaption |
| **Wikidata ID** | [Q109243379](https://www.wikidata.org/entity/Q109243379) |
| **GND ID** | [4120981-3](https://d-nb.info/gnd/4120981-3) |
| **LIDO Terminology ID** | [lido00006](http://terminology.lido-schema.org/lido00006) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-29" id="event-type-29">event-type-29</a>

## Music Festival

|||
|-----------|-----------|
| **ID** | 29 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-29`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-29) |
| **English Name** | Music Festival |
| **German Name** | Musikfestival |
| **Wikidata ID** | [Q868557](https://www.wikidata.org/entity/Q868557) |
| **GND ID** | [4170821-0](https://d-nb.info/gnd/4170821-0) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-28" id="event-type-28">event-type-28</a>

## Musical Composition

|||
|-----------|-----------|
| **ID** | 28 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-28`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-28) |
| **English Name** | Musical Composition |
| **German Name** | Musikalische Komposition |
| **German Synonyms** | Komposition,Komponieren |
| **Wikidata ID** | [Q11895763](https://www.wikidata.org/entity/Q11895763) |
| **GND ID** | [4133320-2](https://d-nb.info/gnd/4133320-2) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-5" id="event-type-5">event-type-5</a>

## Musical Performance

|||
|-----------|-----------|
| **ID** | 5 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-5`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-5) |
| **English Name** | Musical Performance |
| **German Name** | Aufführung (Musik) |
| **German Synonyms** | Musikaufführung |
| **Wikidata ID** | [Q106805967](https://www.wikidata.org/entity/Q106805967) |
| **GND ID** | [7502757-4](https://d-nb.info/gnd/7502757-4) |
| **LIDO Terminology ID** | [lido00030](http://terminology.lido-schema.org/lido00030) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-63" id="event-type-63">event-type-63</a>

## Open House

|||
|-----------|-----------|
| **ID** | 63 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-63`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-63) |
| **English Name** | Open House |
| **German Name** | Tag der offenen Tür |
| **German Synonyms** | TdoT |
| **Wikidata ID** | [Q1421331](https://www.wikidata.org/entity/Q1421331) |
| **GND ID** | [4193984-0](https://d-nb.info/gnd/4193984-0) |

<br/>
<br/>

<a href="#event-type-32" id="event-type-32">event-type-32</a>

## Panel Discussion

|||
|-----------|-----------|
| **ID** | 32 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-32`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-32) |
| **English Name** | Panel Discussion |
| **German Name** | Podiumsdiskussion |
| **German Synonyms** | Podiumsgespräch |
| **Wikidata ID** | [Q2100278](https://www.wikidata.org/entity/Q2100278) |
| **GND ID** | [4614247-2](https://d-nb.info/gnd/4614247-2) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-30" id="event-type-30">event-type-30</a>

## Performance

|||
|-----------|-----------|
| **ID** | 30 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-30`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-30) |
| **English Name** | Performance |
| **German Name** | Performance |
| **German Synonyms** | Aktion |
| **Wikidata ID** | [Q213156](https://www.wikidata.org/entity/Q213156) |
| **GND ID** | [4173750-7](https://d-nb.info/gnd/4173750-7) |
| **AAT ID** | [300121445](https://vocab.getty.edu/aat/300121445) |
| **LIDO Terminology ID** | [lido00030](http://terminology.lido-schema.org/lido00030) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-4" id="event-type-4">event-type-4</a>

## Performance (Performing Arts)

|||
|-----------|-----------|
| **ID** | 4 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-4`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-4) |
| **English Name** | Performance (Performing Arts) |
| **German Name** | Aufführung (Darstellende Künste) |
| **Wikidata ID** | [Q35140](https://www.wikidata.org/entity/Q35140) |
| **GND ID** | [4143388-9](https://d-nb.info/gnd/4143388-9) |
| **LIDO Terminology ID** | [lido00030](http://terminology.lido-schema.org/lido00030) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-31" id="event-type-31">event-type-31</a>

## Planning

|||
|-----------|-----------|
| **ID** | 31 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-31`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-31) |
| **English Name** | Planning |
| **German Name** | Planung |
| **Wikidata ID** | [Q309100](https://www.wikidata.org/entity/Q309100) |
| **GND ID** | [4046235-3 ](https://d-nb.info/gnd/4046235-3 ) |
| **AAT ID** | [300054425](https://vocab.getty.edu/aat/300054425) |
| **LIDO Terminology ID** | [lido00032](http://terminology.lido-schema.org/lido00032) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-34" id="event-type-34">event-type-34</a>

## Première

|||
|-----------|-----------|
| **ID** | 34 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-34`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-34) |
| **English Name** | Première |
| **German Name** | Premiere |
| **German Synonyms** | Erstaufführung |
| **Wikidata ID** | [Q204854](https://www.wikidata.org/entity/Q204854) |
| **GND ID** | [4519367-8](https://d-nb.info/gnd/4519367-8) |
| **AAT ID** | [300069101](https://vocab.getty.edu/aat/300069101) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-50" id="event-type-50">event-type-50</a>

## Presentation

|||
|-----------|-----------|
| **ID** | 50 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-50`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-50) |
| **English Name** | Presentation |
| **German Name** | Vortrag |
| **German Synonyms** | Fachvortrag,Präsentation,Buchpräsentation |
| **Wikidata ID** | [Q604733](https://www.wikidata.org/entity/Q604733) |
| **GND ID** | [4064035-8](https://d-nb.info/gnd/4064035-8) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-22" id="event-type-22">event-type-22</a>

## Production

|||
|-----------|-----------|
| **ID** | 22 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-22`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-22) |
| **English Name** | Production |
| **English Synonyms** | Manufacturing |
| **German Name** | Herstellung |
| **German Synonyms** | Produktion,Fabrikation,Fertigung |
| **Wikidata ID** | [Q739302](https://www.wikidata.org/entity/Q739302) |
| **GND ID** | [4159653-5](https://d-nb.info/gnd/4159653-5) |
| **AAT ID** | [300054713](https://vocab.getty.edu/aat/300054713) |
| **LIDO Terminology ID** | [lido00007](http://terminology.lido-schema.org/lido00007) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-47" id="event-type-47">event-type-47</a>

## Publishing

|||
|-----------|-----------|
| **ID** | 47 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-47`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-47) |
| **English Name** | Publishing |
| **English Synonyms** | Publication |
| **German Name** | Veröffentlichung |
| **German Synonyms** | Veröffentlichen |
| **Wikidata ID** | [Q3972943](https://www.wikidata.org/entity/Q3972943) |
| **GND ID** | [4187925-9](https://d-nb.info/gnd/4187925-9) |
| **AAT ID** | [300054686](https://vocab.getty.edu/aat/300054686) |
| **LIDO Terminology ID** | [lido00228](http://terminology.lido-schema.org/lido00228) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-1" id="event-type-1">event-type-1</a>

## Purchase

|||
|-----------|-----------|
| **ID** | 1 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-1`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-1) |
| **English Name** | Purchase |
| **German Name** | Ankauf |
| **German Synonyms** | Erwerb |
| **Wikidata ID** | [Q1369832](https://www.wikidata.org/entity/Q1369832) |
| **GND ID** | [4128692-3](https://d-nb.info/gnd/4128692-3) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-46" id="event-type-46">event-type-46</a>

## Radio Première

|||
|-----------|-----------|
| **ID** | 46 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-46`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-46) |
| **English Name** | Radio Première |
| **English Synonyms** | First Radio Broadcast |
| **German Name** | Ursendung |
| **German Synonyms** | Rundfunk-Premiere |
| **Wikidata ID** | [Q118581694](https://www.wikidata.org/entity/Q118581694) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-55" id="event-type-55">event-type-55</a>

## Radio Programme

|||
|-----------|-----------|
| **ID** | 55 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-55`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-55) |
| **English Name** | Radio Programme |
| **English Synonyms** | Radio show,Radio broadcast |
| **German Name** | Radiosendung |
| **German Synonyms** | Hörfunksendung |
| **Wikidata ID** | [Q1555508](https://www.wikidata.org/entity/Q1555508) |
| **GND ID** | [4160384-9](https://d-nb.info/gnd/4160384-9) |
| **AAT ID** | [300387763](https://vocab.getty.edu/aat/300387763) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-57" id="event-type-57">event-type-57</a>

## Reading

|||
|-----------|-----------|
| **ID** | 57 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-57`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-57) |
| **English Name** | Reading |
| **German Name** | Lesung |
| **German Synonyms** | Literarische Lesung |
| **Wikidata ID** | [Q106499608](https://www.wikidata.org/entity/Q106499608) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-35" id="event-type-35">event-type-35</a>

## Rehearsal

|||
|-----------|-----------|
| **ID** | 35 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-35`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-35) |
| **English Name** | Rehearsal |
| **German Name** | Probe |
| **Wikidata ID** | [Q1751775](https://www.wikidata.org/entity/Q1751775) |
| **GND ID** | [7660069-5](https://d-nb.info/gnd/7660069-5) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-43" id="event-type-43">event-type-43</a>

## Sound Recording

|||
|-----------|-----------|
| **ID** | 43 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-43`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-43) |
| **English Name** | Sound Recording |
| **English Synonyms** | Audio Recording |
| **German Name** | Tonaufnahme |
| **German Synonyms** | Tonaufzeichnung,Schallaufnahme,Audioaufzeichnung |
| **Wikidata ID** | [Q5057302](https://www.wikidata.org/entity/Q5057302) |
| **GND ID** | [4052020-1](https://d-nb.info/gnd/4052020-1) |
| **AAT ID** | [300255735](https://vocab.getty.edu/aat/300255735) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-36" id="event-type-36">event-type-36</a>

## Speech

|||
|-----------|-----------|
| **ID** | 36 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-36`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-36) |
| **English Name** | Speech |
| **English Synonyms** | Oration,Address |
| **German Name** | Rede |
| **German Synonyms** | Oration,Ansprache |
| **Wikidata ID** | [Q861911](https://www.wikidata.org/entity/Q861911) |
| **GND ID** | [4048882-2](https://d-nb.info/gnd/4048882-2) |
| **AAT ID** | [300417595](https://vocab.getty.edu/aat/300417595) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-40" id="event-type-40">event-type-40</a>

## Summer School

|||
|-----------|-----------|
| **ID** | 40 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-40`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-40) |
| **English Name** | Summer School |
| **German Name** | Sommerakademie |
| **German Synonyms** | Sommerschule,Sommerhochschule,Sommeruniversität |
| **Wikidata ID** | [Q647882](https://www.wikidata.org/entity/Q647882) |
| **GND ID** | [4331584-7](https://d-nb.info/gnd/4331584-7) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-56" id="event-type-56">event-type-56</a>

## Television Programme

|||
|-----------|-----------|
| **ID** | 56 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-56`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-56) |
| **English Name** | Television Programme |
| **English Synonyms** | TV Programme,TV Broadcast |
| **German Name** | Fernsehausstrahlung |
| **German Synonyms** | Fernsehsendung,TV-Sendung |
| **Wikidata ID** | [Q15416](https://www.wikidata.org/entity/Q15416) |
| **GND ID** | [4016842-6](https://d-nb.info/gnd/4016842-6) |
| **AAT ID** | [300263432](https://vocab.getty.edu/aat/300263432) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-42" id="event-type-42">event-type-42</a>

## Thematic Week

|||
|-----------|-----------|
| **ID** | 42 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-42`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-42) |
| **English Name** | Thematic Week |
| **English Synonyms** | Themed Week |
| **German Name** | Themenwoche |
| **Wikidata ID** | [Q10692570](https://www.wikidata.org/entity/Q10692570) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-44" id="event-type-44">event-type-44</a>

## Transformation

|||
|-----------|-----------|
| **ID** | 44 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-44`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-44) |
| **English Name** | Transformation |
| **German Name** | Umgestaltung |
| **German Synonyms** | Umwandlung |
| **Wikidata ID** | [Q10357784](https://www.wikidata.org/entity/Q10357784) |
| **GND ID** | [4452586-2](https://d-nb.info/gnd/4452586-2) |
| **LIDO Terminology ID** | [lido00029](http://terminology.lido-schema.org/lido00029) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-58" id="event-type-58">event-type-58</a>

## Translation

|||
|-----------|-----------|
| **ID** | 58 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-58`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-58) |
| **English Name** | Translation |
| **German Name** | Übersetzung |
| **Wikidata ID** | [Q7553](https://www.wikidata.org/entity/Q7553) |
| **GND ID** | [4061418-9](https://d-nb.info/gnd/4061418-9) |
| **AAT ID** | [300069831](https://vocab.getty.edu/aat/300069831) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-14" id="event-type-14">event-type-14</a>

## TV Première

|||
|-----------|-----------|
| **ID** | 14 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-14`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-14) |
| **English Name** | TV Première |
| **English Synonyms** | First TV Broadcast |
| **German Name** | Erstausstrahlung |
| **German Synonyms** | Erstsendung |
| **Wikidata ID** | [Q118581977](https://www.wikidata.org/entity/Q118581977) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-51" id="event-type-51">event-type-51</a>

## Workshop

|||
|-----------|-----------|
| **ID** | 51 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-51`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-51) |
| **English Name** | Workshop |
| **German Name** | Workshop |
| **Wikidata ID** | [Q27556165](https://www.wikidata.org/entity/Q27556165) |

<br/>
<br/>

---

<br/>
<br/>

<a href="#event-type-45" id="event-type-45">event-type-45</a>

## World Première

|||
|-----------|-----------|
| **ID** | 45 |
| **URI** | `https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-45`[🔗](https://docs.arkumu.nrw/documentation/controlled-vocabularies/event-types/#event-type-45) |
| **English Name** | World Première |
| **German Name** | Uraufführung |
| **Wikidata ID** | [Q2500107](https://www.wikidata.org/entity/Q2500107) |
| **GND ID** | [4236166-7](https://d-nb.info/gnd/4236166-7) |