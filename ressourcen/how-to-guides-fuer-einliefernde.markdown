---
layout: arkumu-docs
title: How-To-Guides für Einliefernde an den Hochschulen
order: 2.1
permalink: /resources/how-to-guides-for-depositors
---

<br/>

---

<br/>

## Vorbereitende Arbeiten zur Datenaufbereitung

Bevor mit der Erfassung der Daten begonnen werden kann, empfehlen wir, einige grundlegende Schritte durchzuführen.


- **Sichern** Sie Ihre Dateien vor Verlust. Sie sollten mindestens zwei, besser drei Kopien Ihrer (Medien-)Daten haben – am besten auf unterschiedlichen Speichermedien, aufbewahrt an unterschiedlichen Orten. Die National Digital Stewardship Alliance gibt Empfehlungen, wie man auch lokal seine Speichersysteme besser sichern Schritt für Schritt in Richtung Langzeitverfügbarkeit entwickeln kann ([deutsch](https://www.hbz-nrw.de/produkte/langzeitverfuegbarkeit/langzeitverfuegbarkeit-fuer-hochschulen/hbz_NDSA_LevelsPreservation.pdf)/[englisch](https://ndsa.org//publications/levels-of-digital-preservation/)).

- Wir empfehlen, zum Beginn eine **Inventarliste** der digitalen Inhalte und der aktuellen Speicherorte anzulegen, um einen Überblick zu gewinnen. 

	- [MediaInfo](https://mediaarea.net/de/MediaInfo) kann benutzt werden, um auch von einer großen Menge von Dateien detaillierte technische Metadaten auszulesen. Das Ergebnis kann einfach geteilt werden und ermöglicht eine genaue Statistik über Dateiformate und die in Mediendateien verwendeten Audio-, Video- und Bildcodecs. Dies sind wichtige Informationen, die eine Aussage über die Langzeitstabilität von Dateien ermöglichen.
	
	- [DROID](https://www.nationalarchives.gov.uk/information-management/manage-information/preserving-digital-records/droid/) wird vom Nationalarchiv Großbritanniens kostenfrei zur Verfügung gestellt. Es ist weniger bequem zu benutzen, aber sehr leistungsstark. Mit DROID ist es auch möglich, Dateitypen zu identifizieren, auf falsche oder fehlende Datei-Suffixe zu prüfen und Prüfsummen zu berechnen. 

	- Benutzerfreundliche Programme für Verbraucher sind z.B. [abeMeda](https://abemeda.com) für Windows oder [NeoFinder](https://cdfinder.de) für Mac OS. Diese erstellen detaillierte Kataloge der Inhalte von Datenträgern, lesen grundlegende Metadaten der Dateien aus und können die Ergebnisse in gebräuchliche Tabellenformate exportieren. Selbstverständlich können auch andere entsprechende Digital-Asset-Management-Programme benutzt werden.

- Siehe [weiterführende Lektüre zur Langzeitverfügbarkeit](/resources/further-readings).

----

## Vorstrukturieren der Daten: Pflichtfelder für Metadaten

Sorgen Sie bitte dafür, dass mindestens folgende<br/>beschreibende **Metadaten** vorhanden sind:

|:--|:--|
| Titel | Jedes Werk oder Projekt muss mindestens einen Titel haben.| 
| Projektkategorie | Zur Klassifikation wird im Erfassungs-Formular eine [Taxonomie aller Kunstgattungen]({{ site.baseurl }}/documentation/controlled-vocabularies/project-categories) und deren Unterkategorien bereitgestellt, aus der Einträge ausgewählt werden können. Beispiele: *Kunst/Videokunst/Videoinstallation* oder *Musik/Tanzmusik*. Man muss mindestens eine und kann beliebig viele Kategorien zuweisen. |
| Schlagwörter zu Genre und Inhalt | Mit Schlagwörtern können Projekte über die Projektkategorien hinaus inhaltlich erschlossen werden. Beispiel: Ein Projekt wurde bereits als *Musik/Klassische Musik/Bühnenmusik* klassifiziert und bekommt zur weiteren Beschreibung die Schlagwörter [Oper](https://www.wikidata.org/entity/Q1344) und (aufgrund z.B. einer thematischen Ausrichtung) [griechische Mythologie](https://www.wikidata.org/entity/Q34726) zugewiesen. Durch Verweise auf Wikidata, ein externes kontrolliertes Vokabular, werden automatisch zweisprachig deutsch-englisch Synonyme und Definitionen ausgelesen und abgespeichert. | 
| Inhaltliche Beschreibung im Freitext | Bitte geben Sie an dieser Stelle alle weiteren, ggf. unstrukturierten Informationen an, die benötigt werden, um ihre Archivalien Dritten zu erschließen.|
|[Ereignisse]({{ site.baseurl }}/resources/entities-and-attributes-of-the-data-model)| Projekte sind mit Ereignissen verbunden. Beispiele: Aufführung, Ausstellung, Konzert, Bearbeitung. Hier finden Sie eine [Liste der verschiedenen Ereignistypen]({{ site.baseurl }}/documentation/controlled-vocabularies/event-types), die bei der Erfassung benutzt werden können. Wenn nichts Genaueres bekannt ist, kann man einem Werk meistens zumindest das Ereignis Herstellung zuweisen. | 
|Datum | Zeitpunkt oder Zeitraum, in dem Ereignisse stattgefunden haben. | 
| [Akteur:innen]({{ site.baseurl }}/resources/entities-and-attributes-of-the-data-model#ereignis-akteurinnen-rollen-und-rechteangaben) und deren Rollen | Jedem Ereignis sollte idealerweise mindestens ein:e Akteur:in zugeordnet sein. Das sind meistens Personen, können aber auch Künstler:innengruppen oder Körperschaften sein. Personen haben im Rahmen eines Ereignisses mindestens eine Rolle inne (z.B. beim Ereignis Herstellung die Rolle Künstler:in, bei einer Aufführung die Rolle Interpret:in usw.). Hier findet sich eine [Liste von möglichen Rollen]({{ site.baseurl }}/documentation/controlled-vocabularies/roles). | 
| Rechteangaben | Haben die Rechteinhaber:innen Ihrer Hochschule das einfache Nutzungsrecht zur Übernahme in das Archiv eingeräumt? Dürfen Sie darüber hinaus eine Lizenz zur Veröffentlichung im Netz vergeben, und wenn ja, welche? Wenn die Archivalien bereits gemeinfrei sind, benötigen Sie kein Einverständnis der Rechteinhaber:innen|
|Digitales Objekt|Die zu archivierende Datei oder das Dateibündel.|

Diese von arkumu.nrw 2023 in einer Handreichung für die Partnerhochschulen veröffentlichen Empfehlungen zu den wichtigsten Feldern decken sich mit der von der Deutschen Digitalen Bibliothek entwickelten, 2024 veröffentlichten [Minimaldatensatz-Empfehlung für Museen und Sammlungen](https://www.minimaldatensatz.de/). 

Diese Informationen sollten gesammelt und zusammengeführt werden, wenn das Ziel eine systematische Archivierung von Kulturgut im weitesten Sinne ist. 

Weitere Informationen zu den Feldern im System von arkumu.nrw finden sich unter dem Punkten [Ressourcen]({{ site.baseurl }}/resources) und [Dokumentation]({{ site.baseurl }}/documentation). 
