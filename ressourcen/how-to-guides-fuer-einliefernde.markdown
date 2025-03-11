---
layout: arkumu-docs
title: How-To-Guides für Einliefernde an den Hochschulen
order: 2.2
---

----

## Vorbereitende Arbeiten zur Datenaufbereitung

Bevor mit der Erfassung der Daten begonnen werden kann, empfehlen wir, einige grundlegende Schritte durchzuführen.


- **Sichern** Sie Ihre Dateien vor Verlust. Sie sollten mindestens zwei, besser drei Kopien Ihrer (Medien-)Daten haben – am besten auf unterschiedlichen Speichermedien, aufbewahrt an unterschiedlichen Orten. Die National Digital Stewardship Alliance gibt Empfehlungen, wie man auch lokal seine Speichersysteme besser sichern Schritt für Schritt in Richtung Langzeitverfügbarkeit entwickeln kann ([deutsch](https://osf.io/3na96)/[englisch](https://ndsa.org//publications/levels-of-digital-preservation/)).
- Wir empfehlen, zum Beginn eine **Inventarliste** der digitalen Inhalte und der aktuellen Speicherorte anzulegen, um einen Überblick zu gewinnen. Auf Windows kann dafür z.B. [abeMeda](https:www.abemeda.com) benutzt werden. Für Mac OS empfiehlt sich [NeoFinder](https:cdfinder.de). Diese Programme erstellen detaillierte Kataloge der Inhalte von Datenträgern, lesen grundlegende Metadaten der Dateien aus und können die Ergebnisse in gebräuchliche Tabellenformate exportieren. Selbstverständlich können auch andere entsprechende Digital-Asset-Management-Programme benutzt werden.

Professionelle Lösungen sind diese Programme:

- [MediaInfo](https://mediaarea.net/de/MediaInfo) kann benutzt werden, um auch von einer großen Menge von Dateien detaillierte technische Metadaten auszulesen. Das Ergebnis kann einfach geteilt werden und ermöglicht eine genaue Statistik über die in Mediendateien verwendeten Audio-, Video- und Bildcodecs – Informationen, die eine Aussage über die Langzeitstabilität ermöglichen.
- [DROID](https://www.nationalarchives.gov.uk/information-management/manage-information/preserving-digital-records/droid/) wird vom Nationalarchiv Großbritanniens kostenfrei zur Verfügung gestellt. Es ist weniger bequem zu benutzen, aber sehr leistungsstark. Mit DROID ist es auch möglich, Dateitypen zu identifizieren, auf falsche oder fehlende Datei-Suffixe zu prüfen und Prüfsummen zu berechnen (siehe [weiterführende Lektüre zur Langzeitverfügbarkeit]({{ site.baseurl }}/ressourcen/weiterfuehrende-informationen)).

----

## Vorstrukturieren der Daten: Pflichtfelder für Metadaten

Sorgen Sie bitte dafür, dass mindestens folgende beschreibende **Metadaten** vorhanden sind:

|:--|:--|
| Titel | Jedes Werk oder Projekt muss mindestens einen Titel haben.| 
| Projektkategorie | Zur Klassifikation wird im Erfassungs-Formular eine [Taxonomie aller Kunstgattungen]({{ site.baseurl }}/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/projektkategorien) und deren Unterkategorien bereitgestellt, aus der Einträge ausgewählt werden können. Beispiele: *Kunst/Videokunst/Videoinstallation* oder *Musik/Tanzmusik*. Man muss mindestens eine und kann beliebig viele Kategorien zuweisen. |
| Schlagwörter zu Genre und Inhalt | Mit Schlagwörtern können Projekte über die Projektkategorien hinaus inhaltlich erschlossen werden. Beispiel: Ein Projekt wurde bereits als *Musik/Klassische Musik/Bühnenmusik* klassifiziert und bekommt zur weiteren Beschreibung die Schlagwörter [Oper](https://www.wikidata.org/entity/Q1344) und (aufgrund z.B. einer thematischen Ausrichtung) [griechische Mythologie](https://www.wikidata.org/entity/Q34726) zugewiesen. Durch Verweise auf Wikidata, ein externes kontrolliertes Vokabular, werden automatisch zweisprachig deutsch-englisch Synonyme und Definitionen ausgelesen und abgespeichert. | 
| Inhaltliche Beschreibung im Freitext | Bitte geben Sie an dieser Stelle alle weiteren, ggf. unstrukturierten Informationen an, die benötigt werden, um ihre Archivalien Dritten zu erschließen.|
|[Ereignisse]({{ site.baseurl }}/ressourcen/entitaeten_und_attribute_des_datenmodells)| Projekte sind mit Ereignissen verbunden. Beispiele: Aufführung, Ausstellung, Konzert, Bearbeitung. Hier finden Sie eine [Liste der verschiedenen Ereignistypen]({{ site.baseurl }}/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/ereignistypen), die bei der Erfassung benutzt werden können. Wenn nichts Genaueres bekannt ist, kann man einem Werk meistens zumindest das Ereignis Herstellung zuweisen. | 
|Datum | Zeitpunkt oder Zeitraum, in dem Ereignisse stattgefunden haben. | 
| [Akteur:innen]({{ site.baseurl }}/ressourcen/entitaeten_und_attribute_des_datenmodells.html#ereignis-akteurinnen-rollen-und-rechteangaben) und deren Rollen | Jedem Ereignis sollte idealerweise mindestens ein:e Akteur:in zugeordnet sein. Das sind meistens Personen, können aber auch Künstler:innengruppen oder Körperschaften sein. Personen haben im Rahmen eines Ereignisses mindestens eine Rolle inne (z.B. beim Ereignis Herstellung die Rolle Künstler:in, bei einer Aufführung die Rolle Interpret:in usw.). Hier findet sich eine [Liste von möglichen Rollen]({{ site.baseurl }}/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/rollen). | 
| Rechteangaben | Haben die Rechteinhaber:innen Ihrer Hochschule das einfache Nutzungsrecht zur Übernahme in das Archiv eingeräumt? Dürfen Sie darüber hinaus eine Lizenz zur Veröffentlichung im Netz vergeben, und wenn ja, welche? Wir stellen an dieser Stelle demnächst einen Entwurf für Abfrage und Einräumung der Nutzungsrechte bereit. Wenn die Archivalien bereits gemeinfrei sind, benötigen Sie kein Einverständnis der Urheber:innen. |
|Digitales Objekt|Die zu archivierende Datei oder das Dateibündel.|

Diese Informationen können schon vor Beginn der formellen Erfassung gesammelt und zusammengeführt werden, auch wenn diese bisher nicht (oder nicht alle) strukturiert erfasst wurden. Als Hilfestellung kann dieses [vereinfachte tabellarische Formular]({{ site.baseurl }}/assets/documents/2023-04-26-Datenaufbereitung-Digi-Kunst.xlsx) benutzt werden, das am Anfang des arkumu.nrw-Projekts erstellt wurde. Es enthält einige Beispieldatensätze, anhand derer die Funktion der einzelnen Felder erklärt wird. Selbstverständlich kann das Formular nach Bedarf erweitert werden, um über die Mindestanforderungen hinaus weitere relevante Metadaten zu sammeln und festzuhalten. 

Die von arkumu.nrw entwickelten Informationen zu den wichtigsten Feldern decken sich mit der von der Deutschen Digitalen Bibliothek entwickelten, 2024 veröffentlichten [Minimaldatensatz-Empfehlung für Museen und Sammlungen](https://www.minimaldatensatz.de/). 

Weitere Informationen zu den Feldern im System von arkumu.nrw finden sich unter dem Punkten [Ressourcen]({{ site.baseurl }}/ressourcen) und [Technische Dokumentation]({{ site.baseurl }}/technische-dokumentation). 
