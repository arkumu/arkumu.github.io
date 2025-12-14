---
layout: arkumu-docs
title: ❗ Relationales Modell
order: 3.1.2
permalink: /documentation/data-model/relational-model
---

```Relational Model```

<br/>

## Actor

```Akteur:in```

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ----------- | ----------- | ----------- | ----------- | ------------ | ----------- | ----------- |
| Deutscher Name | German Name | 1 | ⨉ | | Der deutsche Name der Person, der Gruppe oder Körperschaft | The German name of the person, group or legal body | <details><summary>Show German Note</summary>Wir erfassen anstelle von Nachname und Vorname den vollen Namen in "natürlicher" Reihenfolge; z.B. fiddk und musiconn.performance sind dabei Vorbild. Der Name sollte dabei widerspiegeln, wie die Person selbst genannt werden möchte. Das ist z.B. wichtig im Fall eines Künstlernamens oder einer Namenänderung. Der Name sollte die lateinisierte Version sein, wenn der native Name einen anderen Zeichensatz benutzt. Das gilt auch für Körperschaften. Wenn der Englische Name nicht ausgefüllt ist, wird dort automatisch der Deutsche Name gesetzt.</details> | <details><summary>Show English Note</summary>Instead of last name and first name, we enter the full name in “natural” order; e.g. fiddk and musiconn.performance are a model for this. The name should reflect what the person themselves would like to be called. This is important, for example, in the case of a pen name, screen name or stage name, or in the case of a name change. The name should be the Latinized version if the native name uses a different character set. This also applies to legal bodies. If the English name is not filled in, the German name will be automatically set there.</detail> |
| Englischer Name | English Name | 1 | ⨉ | | Der englische Name der Person, der Gruppe oder Körperschaft | The English name of the person, group or legal body | | |
| Alternative Name(n) | Alternative Name(s) | 0-1 | ✓<br/>(linebreak separated) | | Ein oder mehrere alternative Namen der Akteur:in | One or more alternative names of the Actor | | |
| Nicht-öffentliche Name(n) | Non-public Names | 0-1 | ✓<br/>(linebreak separated) | | Ein oder mehrere nicht-öffentliche Namen der Akteur:in | One or more non-public names of the actor | | |
| Nicht-öffentliche Namen (Begründung) | Non-public Names (Reason) | 0-1 | ✓<br/>(linebreak separated)<br/>one for each non-public name | | Eine interne Begründung, weswegen der oder die Namen nicht veröffentlicht werden können | An internal reason why the name(s) cannot be published | |
| Vorangestellter Titel | Preceding Title | 0-1 | ✓<br/>(comma separated) | | Ein vorangestellter Titel der Akteur:in | A preceding title of the Actor | <details><summary>Show German Note</summary>Z.B. "Prof", "Dr."</details> | <details><summary>Show English Note</summary>E.G. "Prof", "Dr."</details> |
| Nachgestellter Titel | Trailing Title | 0-1 | ✓<br/>(comma separated) | | Ein nachgestellter Titel der Akteur:in | A trailing title of the Actor | <details><summary>Show German Note</summary>Z.B. "Ph.D."</details> | <details><summary>Show English Note</summary>E.G. "Ph.D."</details> |
| Geschlecht | Gender | 0-1 | ⨉ | | Das Geschlecht einer Person. Bei Gruppen und Körperschaften bleibt dieses Feld leer | The gender of a person. The field can remain empty for groups and legal bodies | | |
| Geburtsdatum | Date of Birth | 0-1 | ⨉ | | Das (nicht-geschätzte oder geschätzte) Geburtsdatum oder eine (nicht-geschätzte oder geschätzte) Geburtsdatums-Spanne der Akteur:in | The (non-estimated or estimated ) birth date or a birth date timespan of the Actor | <details><summary>Show German Note</summary>In LIDO müssen zwei Daten angegeben werden: *earliest* und *latest*, zusätzlich ein Typ, entwerder *Estimated date* oder *Exact date*. Zur Behandlung von Zeitangabe, siehe "Erfassung und Interpretation von Zeitangaben". Die Erfassung wird unverfälscht gespeichert, eine Interpretation des Werts wird in einem separaten Feld gespeichert, um SQL-Datumsabfragen zu ermöglichen. Dieses Feld ist simultan in seiner Funktionsweise mit dem Feld "Ereignisbeginn".</details> | <details><summary>Show English Note</summary>Two dates must be specified in LIDO: *earliest* and *latest*, plus a type, either *Estimated date* or *Exact date*. For the handling of time data, see “Recording and interpreting time data”. The entry is saved unaltered, an interpretation of the value is saved in a separate field to enable SQL date queries. This field functions similarly to the “Event Begin” field.</details> |
| Sterbedatum | Date of Death | 0-1 | ⨉ | | Das (nicht-geschätzte oder geschätzte) Sterbedatum oder eine (nicht-geschätzte oder geschätzte) Sterbedatum-Spanne der Akteur:in | The (non-estimated or estimated ) death date or a death date timespan of the Actor | <details><summary>Show German Note</summary>In LIDO müssen zwei Daten angegeben werden: *earliest* und *latest*, zusätzlich ein Typ, entwerder *Estimated date* oder *Exact date*. Zur Behandlung von Zeitangabe, siehe "Erfassung und Interpretation von Zeitangaben". Die Erfassung wird unverfälscht gespeichert, eine Interpretation des Werts wird in einem separaten Feld gespeichert, um SQL-Datumsabfragen zu ermöglichen. Dieses Feld ist simultan in seiner Funktionsweise mit dem Feld "Ereignisende".</details> | <details><summary>Show English Note</summary>Two dates must be specified in LIDO: *earliest* and *latest*, plus a type, either *Estimated date* or *Exact date*. For the handling of time data, see “Recording and interpreting time data”. The entry is saved unaltered, an interpretation of the value is saved in a separate field to enable SQL date queries. This field functions similarly to the “Event End” field.</details> |
| Wirkungsbeginn | Begin of Avtivity | 0-1 | ⨉ | | Das früheste Wirkungsdatum einer Akteur:in | The earliest active date of an actor | | |
| Wirkungsende | End of Avtivity | 0-1 | ⨉ | | Das späteste Wirkungsdatum einer Akteur:in | The latest active date of an actor | | |
| Geburtsort | Place of Birth | 0-1 | ⨉ | [Place](#place) | Der Geburtsort des/der Akteur:in | The place of birth of the actor | | |
| Sterbeort | Place of Death | 0-1 | ⨉ | [Place](#place) | Der Sterbeort des/der Akteur:in | The place of death of the actor | | |
| Sterbeort | Place of Death | 0-1 | ⨉ | [Place](#place) | Der Sterbeort des/der Akteur:in | The place of death of the actor | | |
| Wirkungsorte | Places of Activity | 0-n | ✓<br/>(multiselect) | [Place](#place) | Ein oder mehrere Wirkungsorte der Akteur:in | One or more places of activity of the actor | | |
| Gründungsort | Place of Foundation | 0-1 | ⨉ | [Place](#place) | Der Gründungsort einer Gruppe oder Körperschaft. Gruppen und Körperschaften sind bei uns Akteur:innen | The place where a group or a legal body was founded. Groups and legal bodies are actors in our model | | |
| Auslösungsort | Places of Dissolution | 0-1 | ⨉ | [Place](#place) | Der Auflösungsort einer Gruppe oder Körperschaft. Gruppen und Körperschaften sind bei uns Akteur:innen | The place where a group or a legal body was dissoluted. Groups and legal bodies are actors in our model | | |
| Deutsche Kurzbiografie | German Short Biography | 0-1 | ⨉ | | Die deutsche Kurzbiografie des/der Akteur:in | The german short biography | <details><summary>Show German Note</summary>Freitext</details> | <details><summary>Show English Note</summary>free text</details> |
| Englische Kurzbiografie | English Short Biography | 0-1 | ⨉ | | Die englische Kurzbiografie des/der Akteur:in | The english short biography | <details><summary>Show German Note</summary>Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen</details> | <details><summary>Show English Note</summary>free text. It is recommended that both fields be filled in if possible.</details> |
| Deutscher Kommentar | German Commentary | 0-1 | ⨉ | | Ein deutscher Kommentar zu dem/der Akteur:in | A german commentary on the actor | | |
| Englischer Kommentar | English Commentary | 0-1 | ⨉ | | Ein englischer Kommentar zu dem/der Akteur:in | An english commentary on the actor | | |
| Interner Kommentar | Internal Commentary | 0-1 | ⨉ | | Ein interner Kommentar, nur sichtbar innerhalb des arkumu.nrw-Erfassungssystems und in den Langzeiterhaltungs-Metadaten | An internal comment, only visible within the arkumu.nrw ingest system and in the long-term preservation metadata  | | |
| Berufe und Tätigkeiten | Professions and Activities | 0-1 | ⨉ | | Ein interner Kommentar, nur sichtbar innerhalb des arkumu.nrw-Erfassungssystems und in den Langzeiterhaltungs-Metadaten | An internal comment, only visible within the arkumu.nrw ingest system and in the long-term preservation metadata  | | |
| Berufe und Tätigkeiten | Professions and Activities | 0-n | ✓<br/>(multiselect) | [Role](#role) | Eine Auswahl von Berufen und Tätigkeiten, die eine Person identifizieren | A selection of professions and activities that identify a person  | | |
| ORCID | ORCID | 0-1 | ⨉ | | | | | |
| Wikidata-ID | Wikidata ID | 0-1 | ⨉ | | | | | |
| GND-Nummer (männlich) | GND ID (male) | 0-1 | ⨉ | | | | | |
| GND-Nummer (weiblich) | GND ID (female) | 0-1 | ⨉ | | | | | |
| GND-Nummer (Gruppe) | GND ID (group) | 0-1 | ⨉ | | | | | |
| VIAF-ID | VIAF ID | 0-1 | ⨉ | | | | | |
| LCCN-ID | LCCN ID | 0-1 | ⨉ | | | | | |
| Webseiten | Websites | 0-1 | ✓<br/>(linebreak separated) | | | | | |
| Kontakt (E-Mail) | Contact (E-Mail) | 0-1 | ⨉ | | | | | |
| Kontakt (Telefon) | Contact (Phone) | 0-1 | ⨉ | | | | | |
| Kontakt (Postanschrift) | Contact (Postal Address) | 0-1 | ⨉ | | | | | |
| Verknüpfte Akteur:innen | Realted Actors | 0-n | ✓<br/>(multicreate) | [Actor-Actor Junction Table](#actor-actor-junction-table) | | | | |
| Dataset at Depositor | Datensatz beim Einlieferer | 0-n | ✓<br/>(multicreate) | [Dataset at Depositor](#dataset-at-depositor) | | | | |

<br/>
<br/>

---

<br/>
<br/>

## Alternative Title Set

```Alternativer Titel-Set```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Alternativer Titel | Alternative Title | 0-1 | | ⨉ | Ein möglicher alternativer Titel des Projekts | A possible alternative title for the Project | | |
| Sprachauszeichnung des Alternativen Titels | Language Markup of Alternative Title | [1] | [Language](#language) | ⨉ | Eine Sprachauszeichnung samt ISO639-2-Code für den alternativen Titel des Projekts | An ISO639-2 language markup for the alternative title of the Project | | |
| Alternativer Untertitel | Alternative Subtitle | 0-1 | | ⨉ | Ein möglicher alternativer Titel des Projekts | A possible alternative title for the Project | | |
| Sprachauszeichnung des Alternativen Untertitels | Language Markup of Alternative Subtitle | [1] | [Language](#language) | ⨉ | Eine Sprachauszeichnung samt ISO639-2-Code für den alternativen Titel des Projekts | An ISO639-2 language markup for the alternative title of the Project | | |
| Sortierungs-Nummer | Sorting Number | 1 | | ⨉<br/>(automatically handled) | Eine Nummer, die die Anzeigereihenfolge des Alternativen Titel-Sets innerhalb eines Projektes regelt | A number that handles the displayed order of the Alternative Title Sets inside of a Project | | |

<br/>
<br/>

---

<br/>
<br/>

## Collection

```Sammlung```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Name der Sammlung | German Collection Title | 1 |  |  | Der deutsche Name der Sammlung | | | |
| Englischer Name der Sammlung | English Collection Title | 1 |  |  | englische Übersetzung, Feld-Label: Collection Title | | | |
| Sammlungsart | Collection Type | 1 |  |  | Auswahl zwischen "Sammlung" und "Reihe" | | | |
| Deutsche Beschreibung | German Description | 1 |  |  | Beschreibung des Entstehungszusammenhangs und des Inhalts der Sammlung | | | |
| Englische Beschreibung | English Description | 1 |  |  | englische Übersetzung, Feld-Label: Description | | | |
| Verknüpfte Projekte | Linked Projects | 0-u |  |  | Die Projekte in dieser Sammlung oder Reihe | | | |
| Verknüpfte Ereignisse | Linked Events | 0-u |  |  |  |  | | |
| Verknüpftes Equipment und Software | Linked Equipment and Software | 0-u |  |  |  |  |  |  |
| Verknüpfte Physische Objekte | Linked Physical Objects | 0-u |  |  |  |  |  |  |
| Verknüpfte Informationsträger | Linked Information Storage Medium | 0-u |  |  |  |  |  |  |
| Verknüpfte Digitale Objekte | Linked Digital Objects | 0-u |  |  |  |  |  |  |
| Erstellt am | Created | 1 |  |  | Zeitstempel |  |  |  |
| Erstellt von | Created by | 1 |  |  |  |  |  |  |
| Zuletzt geändert am | Last Modification | 1 |  |  | Zeitstempel |  |  |  |
| Zuletzt geändert von | Last modified by | 1 |  |  |  |  |  |  |


<br/>
<br/>

---

<br/>
<br/>

## Depositing University

```Einliefernde Hochschule```

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Name | German Name | 1 | ⨉ | | Die deutsche Bezeichnung der Einliefernden Hochschule | The German appelation of the depositing university | | |
| Englischer Name | English Name | 1 | ⨉ | | Die englische Bezeichnung der Einliefernden Hochschule | The English appelation of the depositing university | | |
| Wikidata-ID | Wikidata ID | 1 | ⨉ | | ID des Wikidata-Eintrag für die Einliefernde Hochschule | ID of the Wikidata entry for the Depositing University | | |
| GND-Nummer | GND ID | 1 | ⨉ | | ID des GND-Körperschaftseintrag für die einliefernde Hochschule | ID of the GND institutional record for Depositing University | | |

<br/>
<br/>

---

<br/>
<br/>

## Digital Object

```Digitales Objekt```

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Prüfsumme | Checksum | 1 | ⨉<br/>(automatically handled on import) | | | | | |
| Prüfsumme beim Einlieferer | Checksum at Depositor | 0-1 | ⨉ | | | | | |
| Dateipfad | File Path | 1 | ⨉<br/>(automatically handled on import) | | | | | |
| Dateiname | File Name | 1 | ⨉<br/>(automatically handled on import) | | | | | |
| Dateigröße | File Size | 1 | ⨉<br/>(automatically handled on import) | | | | | |
| Dateierstellungsdatum | File Creation Date | 1 | ⨉ | | | | | |
| Letztes Dateiänderungsdatum | File Last Modification Date | 1 | ⨉<br/>(automatically handled on import) | | | | | |
| MIME Type | MIME Type | 1 | ⨉<br/>(automatically handled on import) | | | | | |
| Medientyp | Media Type | 1 | ⨉ | | | | | |
| Erhaltungstyp | Genesis Type | 1 | ⨉ | | | | | |
| Derivatkopie-Nummer | Derivative Copy Number | [1]<br/>(If Genesis Type is "Derivate Copy") | ⨉<br/>(automatically handled on import) | | | | | |
| ist arkumu Preview | is arkumu Preview | 0-1 | ⨉ | | | | | |
| Dateipaket | File Package | 0-1 | ⨉ | | | | | |
| Digitales Objekt-Schlagwort | Digital Object Keyword | 0-n | ✓<br/>(multiselect) | [Keyword](#keyword) | | | | |
| Digitales Objekt-Lizenz | Digital Object Licence | 1 | ⨉ | [Digital Object License](#digital-object-license) | | | | |
| Deutsche inhaltliche Beschreibung | German Content Description | 0-1 | ⨉ | | | | | |
| Englische inhaltliche Beschreibung | English Content Description | 0-1 | ⨉ | | | | | |
| Deutsche Bildbeschreibung | German Image Description | 0-1 | ⨉ | | | | | |
| Englische Bildbeschreibung | English Image Description | 0-1 | ⨉ | | | | | |
| Deutscher Kommentar | German Commentary | 0-1 | ⨉ | | | | | |
| Englischer Kommentar | English Commentary | 0-1 | ⨉ | | | | | |
| Interner Kommentar | Internal Commentary | 0-1 | ⨉ | | | | | |
| Wesentliche Eigenschaften (deutsch) | Significant Properties (German) | 0-1 | ⨉ | | | | | |
| Wesentliche Eigenschaften (englisch) | Significant Properties (English) | 0-1 | ⨉ | | | | | |
| Systemvoraussetzungen | System Requirements | 1 (for Code) | ⨉ | | | | | |
| Originalsprachen | Original Languages | 0-n | ✓<br/>(multiselect) | [Languages](#language) | | | | |
| Sprachversionen | Language Versions | 0-n | ✓<br/>(multiselect) | [Languages](#language) | | | | |
| Subtitle Languages | Untertitelsprachen | 0-n | ✓<br/>(multiselect) | [Languages](#language) | | | | |
| Tonmischfassung | Dubbing Version | 0-n | ⨉ | | | | | |
| Tonformat | Sound Format | 0-n | ⨉ | | | | | |
| DCP-Art | DCP Type | 0-n | ⨉ | | | | | |
| JHOVE-Dateistatus | JHOVE Status | 1 | ⨉<br/>(automatically handled) | | | | | |
| DROID-PUID | DROID-PUID | 1 | ⨉<br/>(automatically handled) | | | | | |
| MediaInfo-Track-Format | MediaInfo-Track-Format | 1 | ⨉<br/>(automatically handled) | | | | | |
| JHOVE-Metadaten | JHOVE Metadata | 1 | ⨉<br/>(automatically handled) | | | | | |
| DROID-Metadaten | DROID Metadata | 1 | ⨉<br/>(automatically handled) | | | | | |
| ExifTool-Metadaten | ExifTool Metadata | 1 | ⨉<br/>(automatically handled) | | | | | |
| MediaInfo-Metadaten | MediaInfo Metadata | 1 |⨉<br/>(automatically handled) | | | | | |


<br/>
<br/>

---

<br/>
<br/>

## Digital Object Licence

```Digitales-Objekt-Lizenz```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Name der Lizenz | German Name of Individual Licence | 1 |  |  | z.B. "Digi-Kunst A", "Digi-Kunst A+B" | | | |
| Englischer Name der Lizenz | English Name of Individual Licence | 1 |  |  |  | | | |
| Deutscher Lizenztext | German Wording | 0-1 |  |  |  | | | |
| Englischer Lizenztext | English Wording | 0-1 |  |  |  | | | |
| Deutscher Anzeige-Text | German Display Text | 1 |  |  | Feld, wie die Lizenz im Dateiupload angezeigt werden soll | | | |
| Englischer Anzeige-Text | English Display Text | 1 |  |  | Feld, wie die Lizenz im Dateiupload angezeigt werden soll | | | |
| URI | URI | 1 |  |  | | | | |
| Zugehöriges Rechtestatement | Connected Rights Statement | 1 |  |  | | | | |


<br/>
<br/>

---

<br/>
<br/>

## Equipment Type

```Equipmentart```

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| URI | URI | 1 | ⨉ | | | | | |
| Deutscher Name | German Name | 1 | ⨉ | | Die deutsche Bezeichnung der Equipmentart | The German appelation of the Equipment Type | | |
| Englischer Name | English Name | 1 | ⨉ | | Die englische Bezeichnung der Equipmentart | The English appelation of the Equipment Type | | |
| Deutsche Synonyme | German Synonyms | 0-1 | ✓<br/>(comma separated) | | Deutsche Synonyme der Equipmentart | German Synonyms of the Equipment Type | | |
| Englische Synonyme | English Synonyms | 0-1 | ✓<br/>(comma separated) | | Englische Synonyme der Equipmentart | English Synonyms of the Equipment Type | | |
| Wikidata-ID | Wikidata ID | 1 | ⨉ | | ID des Wikidata-Eintrags der Equipmentart | ID of the Wikidata entry for the Equipment Type | | |
| GND-Nummer | GND ID | 0-1 | ⨉ | | Nummer des GND-Eintrags der Equipmentart | ID of the GND entry for the Equipment Type | | |
| AAT-ID | AAT ID | 0-1 | ⨉ | | ID des AAT-Eintrags der Equipmentart | ID of the AAT entry for the Equipment Type | | |


<br/>
<br/>

---

<br/>
<br/>

## Equipment and Software

```Equipment and Software```

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutsche Produktbezeichnung | German Product Name | 1 |  | | Deutsche (Produkt-) Bezeichnung. Eine Produkt- oder sonstige Bezeichnung (mit den notwendigen Nummern), die angeben, um welch ein Modell oder was für eine Sache es sich handelt. | | | |
| Englische Produktbezeichnung | English Product Name | 1 |  | | Englische (Produkt-) Bezeichnung | | | |
| Hersteller | Producer | 0-1 |  | | Freitext | | | |
| Deutsche Beschreibung | German Description | 0-1 |  | | Freitext | | | |
| Englische Beschreibung | Englisch Description | 0-1 |  | | Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen. | | | |
| Wikidata ID | Wikidata ID | 0-u |  | | Wikidata-ID | | | |
| GND-Nummer | GND ID | 0-1 |  | |  | | | |
| Verknüpfte Sammlung | Linked Collection | 0-u | | | | | | |
| Equipmentart | Equipment Type | 1 | | | Auswahlliste , z.b. Mikrofon, Mischpult, Verstärker, Filmkamera, Fotokamera, Videokamera, 3D-Scanner, 3D-Drucker, SBC, Software, Zubehör (allgemein), Audiorecorder, Licht, Aufnahmegerät (allgemein). | | | |


<br/>
<br/>

---

<br/>
<br/>

## Event

```Ereignis```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Ereignistyp | Event Type | 1 | [Event Type](#event-type) | | | | |
| Deutscher Ereignisname | Event Name | 1 | | | | | |
| Ereignisbeginn | Event Start | 0-1 | | | | | |
| Ereignisbeginn geschätzt | Estimated Event Start | 0-1 | | | | | 
| Ereignisende | Event End | 0-1 | | | | | 
| Ereignisende geschätzt | Estimated Event End | 0-1 | | | | | |
| Konvertierter Ereigniszeitraum (deutsch) | Converted Event Timespan (German) | 0-1 | | | | <details><summary>Show German Note</summary>automatisch erzeugt</details> | |
| Konvertierter Ereigniszeitraum (englisch) | Converted Event Timespan (English) | 0-1 | | | | <details><summary>Show German Note</summary>automatisch erzeugt</details> | |
| Ereignisort | Event Place | 0-n | [Place](#place) | | | | |
| Ereignisbeschreibung | Event Description | 0-n | [Ereignisbeschreibung](#event-description) | | | | |
| Spezifische Eigenschaft | Specific Property | 0-n | [Specific Property](#specific-property) | | | | |
| Wikidata-ID | Wikidata ID | 0-1 | | | | | |
| GND-ID | GND ID | 0-1 | | | | | |
| Akteur:in | Actor | 0-u | [Event Actor](#event-actor) | | | | |
| Equipment und Software | Equipment and Software | 0-u | [Equipment and Software](#equipment-and-software) | | | | |
| Physisches Objekt | Physical Object | 0-u | [Physical Object](#physical-object) | | | | |
| Informationsträger | Information Carrier | 0-u | [Information Storage Medium](#information-storage-medium) | | | | |
| Digitales Objekt | Digital Object | 0-u | [Digital Object](#digital-object) | | | | |
| Zugehöriges Ereignis | Related Event | 0-u | | | | | |
| Datensatz-ID beim Einlieferer | ID at Depositor | 0-u | | | | | |
| Einlieferer | Depositor | [1] | [Organisationseinheit](#organisational-unit) | | | | |
| Datum Datensatz-Erstellung beim Einlieferer | Data Set Created at Depositor | 0-1 | | | | | |
| Datum Datensatz-Modifikation beim Einlieferer | Data Set Last Modified at Depositor | 0-1 | | | | | |

<br/>
<br/>

---

<br/>
<br/>

## Event Description

```Ereignisbeschreibung```

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Connection | Points to Entity| German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Beschreibungstext | Description Text | 1 | ⨉ | | |  Eine Beschreibung des Ereignisses | A description of the Event | | |
| Sprachauszeichung der Ereignisbeschreibung | Language Markup of Event Description | 1 | ⨉ | many-to-one<br/><sub>(each Description has exactly one Language Markup; the same Language can be used for multiple Descriptions)</sub> | [Language](#language) | Eine Sprachauszeichnung samt ISO-Code für die Beschreibung des Ereignisses | A language markup for the description of the Event, including the ISO code | | |
| Sortierungsnummer | Sorting Number | 1<br/>(handled through user interaction/ separate field) | ⨉ | | | Sortierung der Beschreibung innerhalb eines Ereignisses | Sorting of the Description inside of a Event | | |
| Ereignis | Event | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each Description is assigned to exactly one Event; each Event may have multiple Descriptions)</sub> | [Event](#event) | Das zugehörige Ereignis | The associated Event | | |

<br/>
<br/>

---

<br/>
<br/>

## Event Type

```Ereignistyp```

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| URI | URI | 1 | ⨉ | | URI des Ereignistyps | URI des Ereignistyps | | | 
| Deutscher Name | German Name | 1 | ⨉ | | Die deutsche Bezeichnung des Ereignistyps | The German appelation of the Event Type | | |
| Englischer Name | English Name | 1 | ⨉ | | Die englische Bezeichnung der Ereignistyps | The English appelation of the Event Type | | |
| Deutsche Synonyme | German Synonyms | 0-1 | ✓<br/>(comma separated) | | Deutsche Synonyme des Ereignistyps | German Synonyms of the Event Type | | |
| Englische Synonyme | English Synonyms | 0-1 | ✓<br/>(comma separated) | | Englische Synonyme des Ereignistyps | English Synonyms of the Event Type | | |
| Wikidata-ID | Wikidata ID | 1 | ⨉ | | ID des Wikidata-Eintrags des Ereignistyps | ID of the Wikidata entry for the Event Type | | |
| GND-Nummer | GND ID | 0-1 | ⨉ | | Nummer des GND-Eintrags des Ereignistyps | ID of the GND entry for the Event Type | | |
| AAT-ID | AAT ID | 0-1 | ⨉ | | ID des AAT-Eintrags des Ereignistyps | ID of the AAT entry for the Event Type | | |
| LIDO-Terminlogogie-ID | LIDO Terminology ID | 0-1 | ⨉ | | ID des LIDO-Terminologie-Eintrags des Ereignistyps | ID of the LIDO Terminology entry for the Event Type | | |

<br/>
<br/>

---

<br/>
<br/>

## Existing Licence Agreement

```Bestehender Lizenzvertrag```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Name | German Name | 1 | | ⨉ | Die deutsche Bezeichnung des bestehenden Lizenzvertrages | | | |
| Englischer Name | English Name | 1 | | ⨉ | Die englische Bezeichnung des bestehenden Lizenzvertrages | <details><summary>Show German Note</summary>Für die englische Sprachversion die deutsche Bezeichnung übernehmen, falls keine englische angegeben wurde</details> | <details><summary>Show English Note</summary>For the English language version, use the German term if no English term is specified.</details> |
| Verantwortliche Hochschule | Accountable University | 1 | [Depositing University](#depositing-university) | ⨉ | | | |
| Deutscher Vertragstext | German Wording | 0-1 | | ⨉ | | | |
| Englischer Vertragstext | English Wording | 0-1 | | ⨉ | | | |
| PDF | PDF | 0-1 | | ⨉ | | | |
| URI | URI | 0-1 | | ⨉ | | | |
| Wählt automatisch folgenden Lizenzstatus aus | Pre-selects following Licence State  | 0-1 | | ⨉ | | | |
| Wählt automatisch folgenden Anzeigestatus aus | Pre-selects following Display State  | 0-1 | | ⨉ | | | |

<br/>
<br/>

---

<br/>
<br/>

## Information Storage Medium 

```Informationsträger```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Name | German Name | 0-1 |  |  | im Sinne von Handelsname. Beispiele sammeln. Sammlung Karsten? Bei selbstbespielbaren Informationsträgern z.b. BASF C-90, Verbatim DVD-R Gold - überhaupt nötig? |  |  |  |
| Englischer Name | English Name | 0-1 |  |  |  |  |  |  |
| Label | Label | 0-1 |  |  | z.B Plattenlabel (Auch Hersteller Datenträger?)  |  |  |  |
| Informationsträgertyp | Information Storage Media Type | 1 |  |  | Auswahl aus "Informationsträger-Tax" |  |  |  |
| Produkt-ID-Typ (Nummernart) | Product ID Type | 0-u |  |  | Auswahlliste z.B. Katalog-Nr Seite 1, Katalog-Nr Seite 2, Matrizen-Nr Seite 1, Matrizen-Nr Seite 2,Bestellnummer. Barcode-Nr, ISBN, Masternummer, Seriennummer. Englisch: Barcode, Master Number, Catalogue Number/Order Code |  |  |  |
| Produkt-ID-Wert (Nummernart) | Product ID Value | [1] |  |  | Zu jeder Auswahl ein dazugehöriger Wert |  |  |  |
| GND-Nummer | GND ID | 0-1 |  |  | wenn vorhanden, z.B.für historische Tonträger, GND, DNB-Tonträger-Nr, VIAF, LOC, ISNI, DBpedia |  |  |  |
| Wikidata ID | Wikidata ID | 0-1 |  |  |  |  |  |  |
| Externe Inventar-Signaturnummer | External Inventory Number | 1-u |  |  | Signatur bei Einlieferer-Hochschule |  |  |  |
| Aufbewahrungsort | Depository | 0-1 |  |  |  |  |  |  |
| (hat Besitzer:in) | (has owner) | 0-u |  |  |  |  |  |  |
| (hat Eigentümer:in) | (has legal rights holder) | 0-u |  |  |  |  |  |  |
| Provenienz | Provenance | 0-1 |  |  | Freitext-Feld z.b. "von 1950-1990 Frau Meyer, ab 1990 Herr Schulze" |  |  |  |
| Deutsche Beschreibung | German Description | 0-1 |  |  | Freitext |  |  |  |
| Englische Beschreibung | English Description | 0-1 |  |  | Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen. |  |  |  |
| Deutscher Kommentar | German Commentary | 0-1 |  |  | Freitext |  |  |  |
| Englischer Kommentar | English Commentary | 0-1 |  |  | Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen. |  |  |  |
| Interner Kommentar | Internal Commentary | 0-1 |  |  |  |  |  |  |
| Materialschlagwort | Material Keyword | 0-u |  |  |  |  |  |  |
| Maße | Dimensions | 0-1 |  |  | Freitext |  |  |  |
| Erhaltungszustand (deutsch) | Condition State (German) | 0-1 |  |  | z.B. im Original vorhanden, zerstört, verschollen |  |  |  |
| Erhaltungszustand (englisch) | Condition State (English) | 0-1 |  |  |  |  |  |
| Kompilation | Compilation | 0/1 |  |  | ja/nein/keine Aussage (null); z.B. Filmkompilations-Bänder KHM |  |  |
| Kompilationstitel | Compilation Title | [0-1] |  |  |  |  |  |
| Kompilations-Reihennummer | Compilation Series Number | [0-1] |  |  | KHM-interne ID für Kompilationen |  |  |
| Originalsprache | Original Language | 0-u |  |  | trifft auf Video- und Audiodateien zu; alle Sprachangaben kodiert in ISO 639 (in KHM-DB: Sprache der Originalfassung) |  |  |
| Untertitelsprache | Subtitle Language | 0-u |  |  |  |  |  |
| Sprachversion | Language Version | 0-u |  |  | analog zu DCP-Sprachfassungen, in KHM DB "Synchronisationsfassung". 0-u weil auch Informationsträger wie DVDs mehrere Sprachfassungen beinhalten können |  |  |
| Persistenter Identifikator (PI) | Persistenter Identifikator (PI) | 1 |  |  | Eindeutiger, standortunabhängiger Identifikator für ein Objekt in einer digitalen Umgebung. Persistente Identifikatoren gewährleisten über lange Zeiträume und eventuelle Systemwechsel hinaus zuverlässigen Zugriff auf die bezeichneten Objekte. Beispiele sind der Unified Resource Name (URN) oder der Digital Object Identifier (DOI). - auch GND Einträge z.B. für historische Tonträger. https://pro.deutsche-digitale-bibliothek.de/glossar/persistenter-identifikator-pi |  |  |
| Informationsträgereigenschaft | Information Storage Medium Property | 0-u |  |  | Auswahl aus Informationsträgereigenschaft, z.B. Bildfrequenz |  |  |
| Informationsträgereigenschaft-Wert | Information Storage Medium Property Value | [1] |  |  | im o.g. Beispiel dann z.b. "25 fps" |  |  |
| Verknüpfte Sammlung | Linked Collection | 0-u |  |  |  |  |  |
| Erstellt am | Created | 1 |  |  | Zeitstempel, in ISO 8601 |  |  |
| Erstellt von | Created by | 1 |  |  |  |  |  |
| Zuletzt geändert am | Last Modification | 1 |  |  | Zeitstempel, in ISO 8601 |  |  |
| Zuletzt geändert von | Last modified by | 1 |  |  |  |  |  |


<br/>
<br/>

---

<br/>
<br/>

## Information Storage Medium Type

```Informationsträgertyp```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Name | German Name | 1 |  |  |  |  |  |  |  |
| Englischer Name | English Name | 1 |  |  |  |  |  |  | |
| Deutsche Synonyme | German Synonyms | 0-u |  |  |  |  |  |  |  |
| Englische Synonyme | English Synonyms | 0-u |  |  |  |  |  |  | |
| Wikidata ID | Wikidata ID | 1 |  |  |  |  |  |  | |
| GND-Nummer | GND ID | 0-1 |  |  |  |  |  |  | |
| AAT ID | AAT ID | 0-1 |  |  |  |  |  |  | |
| PBCore-Link | PBCore Link | 0-1 |  |  |  |  |  |  | |
| hat übergeordneten Informationsträgertyp  | has broader information storage medium type |  |  |  |  |  |  |  | |

<br/>
<br/>

---

<br/>
<br/>

## Keyword

```Schlagwort```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutsches Wikidata-Label | German Wikidata Label | 0-1 |  |  | Das deutsche Schlagwort | | | |
| Englisches Wikidata-Label | English Wikidata Label | 0-1 |  |  | Das englische Schlagwort | | | |
| Deutsche Synonyme | German Synonyms | 0-u |  |  | Die deutschen Synonyme des Schlagworts | | | |
| Englische Synonyme | English Synonyms | 0-u |  |  | Die englischen Synonyme des Schlagworts | | | |
| Deutsche Beschreibung | German Description | 1 |  |  | Die deutsche Beschreibung des Schlagworts | | | |
| Englische Beschreibung | English Description | 1 |  |  | Die englische Beschreibung des Schlagworts | | | |
| Wikidata ID | Wikidata ID | 1 |  |  | Die englische Beschreibung des Schlagworts | | | |
| GND-Nummer | GND ID | 0-1 |  |  |  |  |  |  |
| Abgerufen am | | 1 |  |  | Zeitstempel der Abfrage |  |  |  |
| Zuletzt geändert am | | 1 |  |  | Zeitstempel der letzten Änderung |  |  |  |

<br/>
<br/>

---

<br/>
<br/>

## Language

```Sprache```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Name | German Name | 1 | | ⨉ | Die deutsche, genormte Bezeichnung der Sprache nach ISO 693-2 | The German appelation of the language, in accordance to ISO 639-2 | | |
| Englischer Name | English Name | 1 | | ⨉ | Die englisch, genormte Bezeichnung der Sprache nach ISO 693-2 | The English appelation of the language, in accordance to ISO 639-2 | | |
| ISO 639-2(B)-Code | ISO 639-2(B) Code | 1 | | ⨉ | Der entsprechende bibliografische Identifikator | The according bibliographic identifier | | |
| ISO 639-2(T)-Code | ISO 639-2(T) Code | 1 | | ⨉ | Der entsprechende terminologische Identifikator | The according terminologic identifier | | |
| ISO 639-1-Code | ISO 639-1 Code | 0-1 | | ⨉ | Der ältere Idenfikator aus Kompatibilitätsgründen | The older identifier for compatibility reasons | | |

<br/>
<br/>

---

<br/>
<br/>

## Number Type

```Nummernart```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Name der Nummernart | German Name of Number Type | 1 |  |  |  |  |  |
| Englischer Name der Nummernart | English Name of Number Type | 1 |  |  |  |  |  |
| Wikidata ID | Wikidata ID | 1 |  |  |  |  |  |
| GND-Nummer | GND ID | 0-1 |  |  |  |  |  |


<br/>
<br/>

---

<br/>
<br/>

## Organisational Unit

```Organisationseinheit```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Name der Organisationseinheit | German Name of Organisational Unit | 0-1 | |  | Der deutsche Name der Organisationseinheit | | | |
| Englischer Name der Organisationseinheit | English Name of Organisational Unit | 0-1 | |  | Der englische Name der Organisationseinheitt | | | |
| Deutsche Beschreibung der Organisationseinheit | German Description of Organisational Unit | 0-1 | | |Freitext; wenn's das eine gibt muss es auch das andere geben | | |
| Englische Beschreibung der Organisationseinheit | English Description of Organisational Unit | 0-1 | | | Freitext; wenn's das eine gibt muss es auch das andere geben | | |
| Hochschule | University | 1 | | | | | |
| Verknüpfte Projekte | Linked Projects | 0-u | | | Eine Liste der mit der Organisationseinheit verknüpften Projekte | | |

<br/>
<br/>

---

<br/>
<br/>

## Physical Object

```Physisches Objekt```

<br/>

**German Note on Entity** Zentrale Verzeichnungseinheit in arkumu.nrw.\
**English Note on Entity:** Central indexing unit of arkumu.nrw.

<br/>

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutsche Bezeichnung | German Name | 1 | | | Bezeichner für den Datensatz, z.B. "Hauptteil der Skulptur", "rechte Hälfte", "linke Hälfte", etc. | | | |
| Englische Bezeichnung | English Name | 1 | | | Bezeichner für den Datensatz, z.B. "Hauptteil der Skulptur", "rechte Hälfte", "linke Hälfte", etc. | | | |
| Externe Inventar-Signaturnummer | External Inventory Number | 0-u | | | Signatur bei Einlieferer-Hochschule | | | |
| Aufbewahrungsort | Depository | 0-1 | | | (könnte auch sensible Info sein, teilw. verstecken nötig? Im Zweifel besser nicht erfassen/Dieses  Feld sollte nur ausgefüllt werden, wenn der Aufbewahrungsort öffentlich sein soll.) | | | |
| Besitzer:in | Owner | 0-u | | | | | | |
| Eigentümer:in | Legal Rights Holder | 0-u | | | | | | |
| Provenienz | Provenance | 0-1 | | | Freitext-Feld z.b. "von 1950-1990 Frau Meyer, ab 1990 Herr Schulze" (Niemals veröffentlichen. Müssten sonst abfragen, ob  Name genannt werden darf, auch Grad der Vertraulichkeit: öffentlich?, für wiss. Forschung OK?, nie nennen?) | | | |
| Deutsche Beschreibung | German Description | 0-1 | | | Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen.) | | | |
| Englische Beschreibung | English Description | 0-1 | | | Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen.) | | | |
| Deutscher Kommentar | German Commentary | 0-1 | | | Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen.) | | | |
| Englischer Kommentar | English Commentary | 0-1 | | | Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen.) | | | |
| Klassifizierendes Schlagwort | Classification Keyword to Physical Object | 0-u | | | Teil der Sacherschließung/Beschreibung, z.B. "Barco Monitor". Antwort auf die Frage: Was ist das? | | | |
| Materialschlagwort | Material Keyword | 0-u | | | Material aus dem Objekt gefertigt ist. z.B. "C-Print", "Polypropylen", ganz offen über Verweis auf Wikidata-Seite, genau wie bei Genre-Schlagwörtern | | | |
| Technischer Kommentar deutsch | Technique Commentary German | 0-1 | | | Freitext. Verwendete künstlerische Technik, z.B. C-Print auf Alu Dibond, Aquarell auf Hahnemühle 300g, Monotypie und Bleistift, etc. | | | |
| Technischer Kommentar englisch | Technique Commentary English | 0-1 | | | Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen. | | | |
| Technikschlagwort | Technique Keyword | 0-1 | | | verwendete künstlerische Technik (Wikidata-Schlagwort), z.B. C-Print, Alu Dibond, Aquarell, Hahnemühle-Papier, Monotypie, Bleistift, etc. | | | |
| Maße | Measurements | 0-1 | | | Freitext-Feld <br/> Konventionen zum Gebrauch von Maßangaben,siehe:	https://de.wikipedia.org/wiki/Abmessungen <br/>	"Bei quaderförmigen Objekten, welche eine eindeutige Zuordnung einer Abmessung zur Senkrechten (Höhe) haben, wie z. B. Transportbehälter, wird diese stets zuletzt gelistet."; Länge (L) × Breite (B) × Höhe (H). <br/> "Bei (annähernd) zylindrischen Objekten erfolgt die Angabe üblicherweise in Länge und Durchmesser, wenn die Lage unbestimmt oder mit horizontaler Mittelachse ist" <br/> "Bei zweidimensionalen Objekten ...: Papiermaße: Breite × Höhe. 210 mm × 297 mm bedeutet DIN A4 Hochformat und 297 mm × 210 mm bedeutet A4 Querformat. <br/><br/> Bei Publikationen kann hier ein Seitenumfang angegeben werden. | | | |
| Erhaltungszustand (deutsch) | Conservation State (German) | 0-u | | | z.B. im Original vorhanden, zerstört, verschollen. Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen. | | | |
| Erhaltungszustand (englisch) | Conservation State (English) | 0-u | | | Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen. | | | |
| Verknüpfte Sammlung | Linked Collection | 0-u | | | | | | |
| Erstellt am | Created | 1 | | | Zeitstempel, in ISO 8601 | | | |
| Erstellt von | Created by | 1 | | | | | | |
| Zuletzt geändert am | Last Modification | 1 | | | Zeitstempel, in ISO 8601 | | | |
| Zuletzt geändert von | Last modified by | 1 | | | | | | |
| Persistenter Identifikator (PI) | Persistenter Identifikator (PI) | 0-1 | | | Eindeutiger, standortunabhängiger Identifikator für ein Objekt in einer digitalen Umgebung. Persistente Identifikatoren gewährleisten über lange Zeiträume und eventuelle Systemwechsel hinaus zuverlässigen Zugriff auf die bezeichneten Objekte. Beispiele sind der Unified Resource Name (URN) oder der Digital Object Identifier (DOI).  - auch GND Einträge z.B. für historische Tonträger. https://pro.deutsche-digitale-bibliothek.de/glossar/persistenter-identifikator-pi | | | |


<br/>
<br/>

---

<br/>
<br/>

## Place

```Ort```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutsches Wikidata-Label ODER Deutscher Name des Ortes ODER Deutscher Name | German Wikidata Label | 1 | | | aus Wikidata auslesen | | | |
| Englisches Wikidata-Label | English Wikidata Label | 1 | | | aus Wikidata auslesen | | | |
| Ortart | Place Type | 1 | | | entweder: Kontinent (Q5107) <br/> Land (Q6256) <br/> Region Q82794 <br/> Stadt (Q515) <br/> Genauer Ort <br/> Interner Ort; heißt momentan "Kategorie" | | | |
| Wikidata ID | Wikidata ID | 1 | | | Wikidata "Q-Nummer" | | | |
| GND-Nummer | GND ID | 0-1 | | | GND-ID aus Wikidata auslesen, wenn vorhanden | | | |
| VIAF ID | VIAF ID | 0-1 | | | VIAF-ID aus Wikidata auslesen, wenn vorhanden | | | |
| Längengrad | Longitude | 1 | | | aus Wikidata auslesen | | | |
| Breitengrad | Latitude | 1 | | | aus Wikidata auslesen | | | |
| Übergeordneter Ort | Superordinate Place | 0-u | | | aus Wikidata auslesen, wenn vorhanden. Verweis auf anderen lokal gespeicherten Ort; heißt momentan "liegt in" | | | |
| Untergeordneter Ort | Subordinate Place | 0-u | | | aus Wikidata auslesen, wenn vorhanden. Verweis auf anderen lokal gespeicherten Ort; heißt momentan "besteht aus" | | | |
| Vollständiger Breadcrumb | Full Breadcrumb | 1 | | | Vollständiger Breadcrumb des Ortes | | | |


<br/>
<br/>

---

<br/>
<br/>

## Project

```Projekt```

<br/>

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Connection | Points to Entity| German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Bearbeitungs-Status | Processing Status | 1 | ⨉ | | | Ein Feld, welches den aktuellen Bearbeitungs-Status des Projekts wiedergibt. Der Kommentar ist zu beachten! | A field that shows the current processing status of the project. Please note the comment! | <details><summary>Show German Note</summary>Es enthält folgende Optionen:<br/>1. Automatisch importiert (nicht per Hand auswählbar)<br/>2. in Bearbeitung (Daten werden aus Quellsystem übertragen, werden angereichert)<br/>3. Daten eingetragen und angereichert, zu prüfen (durch Manager:in, ggf. Rechteinhaber:in/Künstler:in)<br/>4. Daten werden geprüft (dazu kurze Info zu Details im internen Kommentar: wer prüft, was wurde unternommen, worauf warten wir)<br/>5. Prüfung durch alle Parteien abgeschlossen, Ingest kann veranlasst werden<br/>6. Rosetta Ingest durchgeführt<br/><br/>Wenn nach dem Ingest ndie Daten neu editiert werden, sollte man den Status zurücksetzen auf Schritt "in Bearbeitung". Dies könnte auch automatisch erfolgen. Ebenfalls bitte internen Kommentar hinterlegen, was die Änderungen sind (z.B. "Name war falsch geschrieben")</details> | <details><summary>Show English Note</summary>It contains the following options:<br/>1. Automatically imported (cannot be selected manually)<br/>2. In progress (data is transferred from the source system and is being enriched)<br/>3. Data entered and enriched, to be checked (by manager, rights holder/artist if applicable)<br/>4. Data is being checked (with brief information on details in Internal Commentary: who is checking, what has been done, what are we waiting for)<br/>5. Checking by all parties completed, ingest can be initiated<br/>6. Rosetta ingest completed<br/><br/>If the data is re-edited after ingest, the status should be reset to "In progress". This could also be done automatically. Please also add an Internal Commentary explaining what the changes are (e.g. "name was misspelled").</details> |
| arkumu-ID | arkumu ID | 1<br/>(created automatically) | ⨉ | | | Die interne arkumu-Signatur des Projekts, die auch Teil der Seiten-URL werden soll | The internal arkumu signature of the project, which should also be part of the page URL | | |
| Archival Resource Key (ARK) |  Archival Resource Key (ARK) | 1<br/>(planned; created automatically) | ⨉ | | | Ein eindeutiger, internationaler Archiv-Identifikator des Projekts | A unique, international archive identifier for the project | | |
| Vorschaubild | Poster Picture | 0-1 | ⨉ | many-to-one<br/><sub>(each Project can have at most one Poster Picture; the same Digital Object can be used as the Poster Picture for multiple Projects)</sub> | [Digital Object](#digital-object) | Ein Digitales Objekt vom Medientyp "Bild", welches prominent und repräsentativ als erstes in der Detailansicht und in Suchergebnissen zu diesem Projekt angezeigt wird | A digital object of the Media Type "Image" that is prominently and representatively displayed first in the detailed view for this Project and in search results | | |
| Bevorzugter Titel | Preferred Title | 1 | ⨉ | | | Der bevorzugte Haupttitel des Projekts | The preferred main title of the Project | | |
| Sprachauszeichnung des Bevorzugten Titels | Language Markup of Preferred Title | 1 | ⨉ | many-to-one<br/><sub>(each Project has exactly one Language Markup for the Preferred Title; the same Language can be used as the Language Markup for multiple Preferred Titles)</sub> | [Language](#language) | Eine Sprachauszeichnung samt ISO639-2-Code für den Haupttitel des Projekts | An ISO639-2 language markup for the main title of the Project | | |
| Bevorzugter Untertitel | Preferred Subtitle | 0-1 | ⨉ | | | Der bevorzugte Hauptuntertitel des Projekts | The preferred main subtitle of the Project | | |
| Sprachauszeichnung des Bevorzugten Untertitels | Language Markup of Preferred Subtitle | [1] | ⨉ | many-to-one<br/><sub>(each Project has at most one Language Markup for the Preferred Subtitle; the same Language can be used as the Language Markup for multiple Preferred Subtitles)</sub> | [Language](#language) | Eine Sprachauszeichnung samt ISO639-2-Code für den Hauptuntertitel des Projekts | An ISO639-2 language markup for the main subtitle of the Project | | |
| Alternative Titel-Set(s) | Alternative Title Set(s) | 0-n | ✓<br/>(multicreate) | one-to-many<br/><sub>(each Project may contain multiple Alternative Title Sets; each Alternative Title Set belongs to exactly one Project)</sub> | [Alternative Title Set](#alternative-title-set) | Ein Set aus einem möglichen alternativen Titel und einem möglichen alternativen Untertitel für das Projekt, samt ihren Sprachauszeichnungen | A set consisting of a possible alternative title and a possible alternative subtitle for the project, including their language markups | | |
| Einliefernde Hochschule | Depositing University | 1 | ⨉ | many-to-one<br/><sub>(each Project has exactly one Depositing University; the same Depositing University can be the Univerversity for many Projects)</sub> | [Depositing University](#depositing-university)<br/>(Derived from [User](#user)) | Die Hochschule, von der das eingelieferte Projekt kommt oder die für das eingelieferte Projekt (entfernt) verantwortlich ist. Die Einliefernde Hochschule ergibt sich aus der Hochschule der einliefernden Nutzer:in | The university from which the submitted project originates or which university is (remotely) responsible for the submitted project. The Depositing University is determined by the university of the depositing User | | |
| Organisationseinheit(en) | Organisational Unit(s) | 0-n | ✓<br/>(multiselect) | many-to-many<br/><sub>(each Project may be linked to multiple Organisational Units; each Organisational Unit may be linked to multiple Projects)</sub> |[Organisational Unit](#organisational-unit) | Akademischer Kontext, in dem Projekt entstanden ist bzw. aus dem es stammt, z. B. Studiengang, Lehrgebiet, Fotoarchiv Folkwang, Studio für Digitalisierung historischer Tonträger RSH, Projektarchiv KHM | Academic context in which the Project was created or from which it originates, e.g. a study programme, a teaching filed,the Folkwang photo archive,the RSH Studio for Digitising Historical Sound Recordings, KHM Project Archive | | |
| Projektart(en) | Project Type(s) | 1-n | ✓<br/>(multiselect) | many-to-many<br/><sub>(each Project must be linked to at least one Project Type and can be linked to multiple; each Project Type may be linked to multiple Projects)</sub> | [Project Type](#project-type) | Die Art einer wissenschaftlichen oder künstlerischen Arbeit, die einen Abschluss oder sonstige Qualifikation oder Tätigkeit ausweist, sowie eine allgemeine Kategorisierung des Projekts. Siehe Werteliste [„Projekteart-Werte“](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/controlled-vocabularies/project-types) | The type of a scientific or artistic work that leads to a degree, or identify another qualification or activity, as well as a general categorisation of the project. See the value list of ["Project Type Values"](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/controlled-vocabularies/project-types) | | |
| Projektkategorie(n) | Project Categorie(s) | 1-n | ✓<br/>(multiselect) | many-to-many<br/><sub>(each Project must be linked to at least one Project Category and can be linked to multiple; each Project Category may be linked to multiple Projects)</sub> | [Project Category](#project-category) | Künstlerische oder nichtkünstlerische Kategorien, zu der dieses Projekt gehört oder in der dieses sich einordnen lässt | Artistic or non-artistic categories to which this project belongs to or in which it can be categorised | | |
| Schlagwort(e) | Keyword(s) | 0-n | ✓<br/>(multiselect) | many-to-many<br/><sub>(each Project may be linked to multiple Keywords; each Keyword may be linked to multiple Projects)</sub> | [Keyword](#keyword) | Prägnante Begriffe, die das Projekt/Werk inhaltlich, künstlerisch oder in der Gattung und Form beschreiben und genauer klassifizieren | Concise terms that describe the project/work in terms of content, artistic merit or genre and form, and classify it more precisely | | |
| Projektbeschreibung(en) | Project Description(s) | 0-n | ✓<br/>(multicreate) | one-to-many<br/>(each Project may have multiple Project Descriptions; each Project Description belongs to exactly one Project) | [Project Description](#project-description) | Freitext mit eigener Sprachauszeichnung, angezeigt nach Wertigkeit | Free text with own language markup, displayed according to the provided sorting | | |
| Deutscher Kommentar | German Commentary | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte inhaltlich relevante Bemerkungen/Kommentare zum Projekt gegeben werden können | A field in which specific comments/remarks relevant to the project's content can be provided | | |
| Englischer Kommentar | English Commentary | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte inhaltlich relevante Bemerkungen/Kommentare zum Projekt gegeben werden können | A field in which an English comment on the project can be provided | | |
| Interner Kommentar | Internal Commentary | 0-1 | ⨉ | | | Ein Kommentar, der nur innerhalb des arkumu.nrw-Erfassungssystems für höhere Nutzer:innen angezeigt wird, aber nie öffentlich | A comment that is only displayed within the arkumu.nrw ingest system for higher-level users, but never publicly | <details><summary>Show German Note</summary>Nicht-öffentliche, z. B. Team-interne Bearbeitungsnotizen oder interne Bearbeitungsnotizen aus der Quelldatenbank des Einlieferers</details> | <details><summary>Show English Note</summary>Non-public, e.g. internal team processing notes or internal processing notes from the depositor's source database</details> |
| Werkverzeichnisnummer(n) | Catalog Raisonné Reference Number(s) | 0-1 | ✓<br/>(semicolon separated) | | | Eine feste Nummer aus einem wissenschaftlich oder von der Künstler:in erstellten Werkverzeichnis.  | A fixed number from a scientific or artist-created catalogue raisonné | | |
| Wikidata-ID | Wikidata ID | 0-1 | ⨉ | | | Ein Feld, in dem man die Wikidata Q-ID dieses Projekts angeben kann, falls vorhanden | A field where one can enter the Wikidata Q-ID of this Project, if available | | |
| GND-Nummer | GND ID | 0-1 | ⨉ | | | Ein Feld, in dem man die GND-Nummer dieses Projekts angeben kann, falls vorhanden | A field where one can enter the GND ID of this Project, if available | | |
| Externe Projekt-Webseite(n) | External Project Website(s) | 0-1 | ✓<br/>(linebreak separated; comma separated on import) | | | Ein großes mehrzeiliges Textfeld, in dem man eine oder mehrere URLs zu externen Projektseiten eingeben kann | A large multi-line text field where you can enter one or more URLs to external project pages | | |
| Ereignis(se) | Event(s) | 0-n | ✓<br/>(multiselect) | many-to-many<br/><sub>(each Project may be linked to multiple Events; each Event may be linked to multiple Projects)</sub> | [Event](#event) | Eine Entität, die Informationen zu ihrem Typ, ihrem Zeitraum, beteiligten Akteur:innen und deren Rollen, die Digitalen Objekte, etc., enthält | An entity that contains information about its type, time period, Actors involved and their Roles, Digital Objects, etc. | | |
| Speizifische Eigenschaft(en) | Specific Property | 0-n | ✓<br/>(multicreate) | many-to-many<br/><sub>(each Project may be linked to multiple Properties, including a certain value solely for this Project; each Property may be used in multiple Projects)</sub> | See [Project-Property Junction Table](#project-property-junction-table) | Eine Eigenschaft des Projekts, z.B. Dauer, Tonart oder ähnliches | A property of the project, e.g. duration, key or similar | | |
| Verknüpfte Projekt(e) | Related Project(s) | 0-n | ✓<br/>(multicreate) | many-to-many<br/><sub>(each Project may be linked to multiple other Projects, including a unique relation to aech of these Projects)</sub> | See [Project-Project Junction Table](#project-project-junction-table) | Eine Verknüpfung zu anderen Projekten, die in einer bestimmten reziproken Relation stehen | A connection to other projects that have a specific reciprocal relationship | | |
| Rechtsstatus | Rights Status | 1 | ⨉ | | | Feld, das den Rechtsstatus des Projektes angibt. Die Auswahlmöglichkeiten sind vorerst: „Urheberrechts- und leistungsschutzrechts-frei“ und „Urheberrechtlich und/oder leistungsschutzrechtlich geschützt“ | Field indicating the legal status of the project. The options currently available are: "Free of German Urheberrecht and Leistungsschutzrecht protection" and "Protected by German Urhebrrecht and/or Leistungsschutzrecht" | | |
| Art des Lizenzvertrages | Type of License Agreement | [1]<br/>(If Rights Status is "Protected by German Urhebrrecht and/or Leistungsschutzrecht"; deactivated for import) | ⨉ | | | Feld, das regelt, in welcher Form diese Rechte vorliegen. Die Auswahlmöglichkeiten sind vorerst: „Bestehender Lizenzvertrag“, „Neuer Lizenzvertrag (arkumu-Formular)“ | Field that regulates the form in which these rights are presented. The options are currently: "Existing Licence Agreement", "New Licence Agreement (arkumu form)" | | |
| Bestehender Lizenzvertrag | Existing Licence Agreement | [1]<br/>(If Type of Licence Agreement is "Existing Licence Agreement"; deactivated for import) | ⨉ | many-to-one<br/><sub>(each Project may be subject to just one Existing Licence Agreement; the same Existing Licence Agreement can be the legal base for multiple Projects)</sub> | [Existing Licence Agreement](#existing-licence-agreement) | Feld, das die Grundlage der Lizenzvereinbarung zwischen Hochschule und dem/der rechtehabenden Person angibt, z.B. Standard KHM Projektvertrag Version 1990 | Field specifying the basis of the licence agreement between the university and the rights holder, e.g. Standard KHM Project Agreement Version 1990 | | |
| Dokumentation des bestehenden Lizenzvertrages | Documentation of Existing Licence Agreement | [0-n]<br/>(If Type of Licence Agreement is "Existing Licence Agreement"; deactivated for Import) | ✓<br/>(multi file upload) | | | Unterzeichnetes Lizenz-Dokument, welches der Hochschule vorliegt, die das Lizenzrecht mir dem/der rechteinhabenden Person regelt | Signed licence document, which is available to the university, regulating the licence rights with the rights holder | | |
| Neuer Lizenzvertrag (arkumu-Formular) | New Licence Agreement (arkumu form) | [1]<br/>(If Type of Licence Agreement is "New Licence Agreement (arkumu form)"; deactivated for Import)<br/><br/>[0-n]<br/>(If Type of Licence Agreement is "Existing Licence Agreement"; also deactivated for Import) | ⨉ | | | Feld, das angibt, wie - vermittelnd über arkumu.nrw - die Hochschule und der/die rechteinhabende Person verblieben sind | Field indicating how the university and the rights holder have agreed through arkumu.nrw | | |
| Dokumentation des Neuen Lizenzvertrages (arkumu-Formular) | Documentation of Existing Licence Agreement | [1]<br/>(If Type of Licence Agreement is "New Licence Agreement (arkumu form)"; deactivated for Import)<br/><br/>[0-n] (If Type of Licence Agreement is "Existing Licence Agreement"; also deactivated for Import) | ✓<br/>(multi file upload) | | | Dokumentation des neuen Lizenzabschlusses zwischen des/der rechteinhabenden Person und der Hochschule in Verwendung des arkumu-Formulars | Documentation of the new licence agreement between the rights holder and the university using the arkumu form | | |
| Weitere Rechtsdokument(e) | Additional Rights Document(s) | [0-n]  | ✓<br/>(multi file upload) | | | Sonstige Rechtsdokumente, die für urheberrechtliche oder leistungsschutzrechtliche Fragen relevant sind | Other legal documents relevant to Urheberrecht orLeistungsschutzrecht issues | | |
| Dateiabfrage-Dokument(e) | File Licences Document(s) | [0-n]  | ✓<br/>(multi file upload) | | | Ein oder mehrere Dokumente, die festhalten, welche Lizenz auf zusätzlich einzelne Dateien angewendet werden sollen | One or more documents specifying which licence should be applied additionally to individual files | | |
| Signatur(en) beim Einlieferer | Signature(s) at Depositor | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von Signaturen, die das Projekt beim Einlieferer identifizieren | A series of signatures identifying the project at the depositor | | |
| Datensatz-Erstellungsdatum beim Einlieferer | Dataset Creation Date at Depositor | 0-1 | ⨉ | | | Datumsfeld, das den Zeitpunkt der Datensatzerstellung bei der einliefernden Hochschule erfasst | Date field that records the date on which the data record was created at the depositing university | | |
| Datensatz-Letztes-Änderungsdatum beim Einlieferer | Dataset Last Modification Date at Depositor | 0-1 | ⨉ | | | Datumsfeld, das den Zeitpunkt der letzten Datensatzmodifikation bei der einliefernden Hochschule erfasst | Date field that records the date on which the data record was las modified at the depositing university | | |
| Inhaltswarnung(en) | Content Warning(s) | 0-n | ✓<br/>(multiselect) | many-to-many<br/><sub>(each Project may be linked to multiple Content Warnings; each Content Warning may be linked to multiple Projects)</sub> | [Content Warning](#content-warning) | Kennzeichnung von sensiblen Inhalten und Themen. Dies können z.B. sexualisierte Gewalt, Gewaltdarstellung, Suizid, häusliche Gewalt, Trans- und Homophobie, Rassismus usw. sein | Labelling of sensitive content and topics. These may include sexualised violence, depictions of violence, suicide, domestic violence, transphobia and homophobia, racism, etc. | | |

<br/>
<br/>

---

<br/>
<br/>

## Project Category

```Projektkategorie```

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Connection | Points to Entity| German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| URI | URI | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI der Projektkategorie, für ihren Eintrag in das kontrollierte Vokabular. | The automatically generated URI of the Project category for its entry in the controlled vocabulary. | | |
| Deutscher Name | German Name | 1 | ⨉ | | | Die deutsche Bezeichnung der Projektkategorie | The German appelation of the Project Category | | |
| Englischer Name | English Name | 1 | ⨉ | | | Die englische Bezeichnung der Projektkategorie | The English appelation of the Project Category | | |
| Deutsche Synonyme | German Synonyms | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten deutschen Synonymen der Projektkategorie | A series of comma-separated German synonyms of the Project Category | | |
| Englishe Synonyme | English Synonyms | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten englischen Synonymen der Projektkategorie | A series of comma-separated English synonyms of the Project Category | | |
| Wikidata-ID | Wikidata ID | 1 | ⨉ | | | Wikidata-ID der Projektkategorie | Wikidata ID of the Project Category | | |
| GND-Nummer | GND ID | 0-1 | ⨉ | | | GND-Nummer der Projektkategorie | GND ID of the Project Category | | |
| AAT ID | AAT ID | 0-1 | ⨉ | | | AAT-ID der Projektkategorie | AAT ID of the Project Category | | |
| filmportal.de-Kategorie-ID | filmportal.de Category ID | 0-1 | ⨉ | | | filmportal.de-Kategorie-ID zur Projektkategorie | filmportal.de Category ID  of the Project Category | | |
| Übergeordnete Projektkategorie | Parent Project Category | 0-1 | ⨉ | many-to-one<br/><sub>(each Project Category can have at most one Parent Project Category; a Project Category can be the parent of many children)</sub> | [Project Category](#project-category) | Eine bereits angelegte, direkt übergordnete Projektkategorie | An already created, directly superordinate Project Category | | |

<br/>

**Additional Technical Fields**<br/>
```Weitere technische Felder```

**English:**<br/>
The following fields should be added to reduce the processing load.<br/>
**Deutsch:**<br/>
Die folgenden Felder sollten hinzugefügt werden um die Rechenlast zu mindern.

<br/>

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Points to Entity| German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Breadcrumb | German Breadcrumb| 1<br/>(handled automatically) | ⨉ |  | Der zusammengesetze deutsche Breadcrumb mit allen übergeordneten Projektkategorien | The composite German Breadcrumb with all Parent Project Categories  | | |
| Englischer Breadcrumb | English Breadcrumb| 1<br/>(handled automatically) | ⨉ |  | Der zusammengesetze englische Breadcrumb mit allen übergeordneten Projektkategorien | The composite English Breadcrumb with all Parent Project Categories  | | |



<br/>
<br/>

---

<br/>
<br/>

## Project Description

```Projektbeschreibung```

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Connection | Points to Entity| German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Beschreibungstext | Description Text | 1 | ⨉ | | |  Eine Beschreibung des Projekts | A description of the Project | | |
| Sprachauszeichung der Projektbeschreibung | Language Markup of Project Description | 1 | ⨉ | many-to-one<br/><sub>(each Description has exactly one Language Markup; the same Language can be used for multiple Descriptions)</sub> | [Language](#language) | Eine Sprachauszeichnung samt ISO-Code für die Beschreibung des Projekts | A language markup for the description of the Project, including the ISO code | | |
| Sortierungsnummer | Sorting Number | 1<br/>(handled through user interaction/ separate field) | ⨉ | | | Sortierung der Beschreibung innerhalb eines Projekts | Sorting of the Description inside of a Project | | |
| Projekt | Project | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each Description is assigned to exactly one Project; each Project may have multiple Descriptions)</sub> | [Project](#project) | Das zugehörige Projekt | The associated Project | | |

<br/>
<br/>

---

<br/>
<br/>

## Project Type

```Projektart```

<br/>

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Connection | Points to Entity| German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#uri) | [URI](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI der Projektart, für ihren Eintrag in das kontrollierte Vokabular. | The automatically generated URI of the Project Type for its entry in the controlled vocabulary. | | |
| [Deutscher Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#german-name) | [German Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#german-name) | 1 | ⨉ | | | Die deutsche Bezeichnung der Projektart | The German appelation of the Project Type | | |
| [Englischer Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#english-name) | [English Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#english-name) | 1 | ⨉ | | | Die englisch Bezeichnung der Projektart | The English appelation of the Project Type | | |
| [Wikidata-ID](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#wikidata-id) | [Wikidata ID](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#wikidata-id) | 1 | ⨉ | | | Wikidata-ID zur Projektart | Wikidata ID of the Project Type | | |

<br/>
<br/>

---

<br/>
<br/>

## Property

```Eigenschaft```

<br/>

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Connection | Points to Entity| German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#german-name) | [German Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#german-name) | 1 | ⨉ | | | Die deutsche Bezeichnung der Eigenschaft | The German appelation of the Property | | |
| [Englischer Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#english-name) | [English Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#english-name) | 1 | ⨉ | | | Die englische Bezeichnung der Eigenschaft | The English appelation of the Property | | |
| Erläuterung (deutsch) | German Explanation | 1 | ⨉ | | | Eine deutschsprachige Erläuterung, wozu ein Eigenschaftswert benutzt werden sollte | A German explanation of what a property value should be used for | | |
| Erläuterung (englisch) | English Explanation | 1  | ⨉ | | | Eine englischsprachige Erläuterung, wozu ein Eigenschaftswert benutzt werden sollte | An English explanation of what a property value should be used for | | |
| Typ | Type | 0-1  | ⨉ | | | wird benötigt, um für manche Werte eine Formatierung bzw. Syntax validieren zu können. Zum Beispiel: Eigenschaft "Dauer" hat Typ "Time (HH:mm:ss)" | is needed to validate formatting or syntax for some values. For example: The "Duration" property has the type "Time (HH:mm:ss)" | | |
| [Wikidata-ID](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#wikidata-id) | [Wikidata ID](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#wikidata-id) | 1  | ⨉ | | | Wikidata-ID der Eigenschaft | Wikidata ID of the Property | | |
| [GND-Nummer](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#gnd-id) | [GND ID](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#gnd-id) | 0-1  | ⨉ | | | GND-Nummer der Eigenschaft | GND ID of the Property | | |

<br/>

**Mentions on this Entity**<br/>
```Bemerkungen zu dieser Entität```

**English:**<br/>
This entity is used in [Project](#project), [Event](#event) and [Information Storage Medium](#information-storage-medium). It can be used as a central Entity or split up in three separate entites, namely **Project Property**, **Event Property** and **Information Storage Medium Property**.<br/>
**Deutsch:**<br/>
Diese Entität wird in [Projekt](#project), [Ereignis](#event) und [Informationsträger](#information-storage-medium) verwendet. Sie kann als zentrale Einheit verwendet oder in drei separate Entitäten aufgeteilt werden, nämlich **Projekteigenschaft**, **Ereigniseigenschaft** und **Informationsträgereigenschaft**.

<br/>
<br/>

---

<br/>
<br/>

## Role

```Rolle```

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Connection | Points to Entity| German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#uri) | [URI](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI der Rolle, für ihren Eintrag in das kontrollierte Vokabular. | The automatically generated URI of the role for its entry in the controlled vocabulary. | | |
| [Deutscher Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#german-name) | [German Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#german-name) | 1 | ⨉ |  | | Die deutsche Bezeichnung der Rolle | The German appelation of the Role | | |
| [Englischer Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#english-name) | [English Name](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#english-name) | 1 | ⨉ | | | Die englische Bezeichnung der Rolle | The German appelation of the Role | | |
| [Deutsche Synonyme](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#german-synonym) | [German Synonyms](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#german-synonym) | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten deutschen Synonymen der Rolle | A series of comma-separated German synonyms of the Role | | |
| [Englishe Synonyme](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#english-synonym) | [English Synonyms](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#english-synonym) | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten english Synonymen der Rolle | A series of comma-separated English synonyms of the Role | | |
| [Wikidata-ID](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#wikidata-id) | [Wikidata ID](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#wikidata-id) | 1 | ⨉ | | | Wikidata-ID der Rolle | Wikidata ID of the Role | | |
| [GND-Nummer (männlich)](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#gnd-id-male) | [GND ID (male)](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#gnd-id-male) | 0-1 | ⨉ | | | GND-Nummer für den männlichen Eintrag der Rolle | GND ID of the male entry for the role | | |
| [GND-Nummer (weiblich)](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#gnd-id-female) | [GND ID (female)](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#gnd-id-female) | 0-1 | ⨉ | | | GND-Nummer für den weiblichen Eintrag der Rolle | GND ID of the female entry for the role | | |
| [GND-Nummer (Gruppe)](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#gnd-id-group) | [GND ID (Group)](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#gnd-id-group) | 0-1 | ⨉ | | | GND-Nummer eines Eintrag zur Gruppe oder Körperschaft | GND ID of an entry for a group or body | | | |
| [AAT-ID](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#aat-id) | [AAT ID](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#aat-id) | 0-1 | ⨉ | | | AAT-ID der Rolle | AAT ID of the Role | | |
| wählt "ist Urheber:in" automatisch aus | automatically pre-selects "ist Urheber:in" | 0/1 | ⨉ | | | "ja" ist vorausgewählt bei Rollen, die mit großer Sicherheit immer Urheber:innen (bedingt durch ein Ereignis) nach sich ziehen. Dies ist jedoch manuell an- und abwählbar. | "yes" is pre-selected for roles that are highly likely to always produce "Urheber:innen" (due to an event). However, this can be selected or deselected manually. | | |
| wählt "besitzt Leistungsschutzrechte" automatisch aus | automatically pre-selects "besitzt Leistungsschutzrechte" | 0/1 | ⨉ | | | "ja" ist vorausgewählt bei Rollen, die mit großer Sicherheit immer Leistungsschutzreche für Akteur:innen (bedingt durch ein Ereignis) nach sich ziehen. Dies ist jedoch manuell an- und abwählbar. | "yes" is pre-selected for roles that are highly likely to always result in "Leistungsschutzrechte" for Actors (due to an event). However, this can be selected or deselected manually. | | |
| [Übergeordnete Rolle](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#role) | [Parent Role](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/data-model/classes-and-properties#role) | 0-1 | ⨉ | many-to-one<br/><sub>(each Role can have at most one Parent Role; a Role can be the parent of many children)</sub> | [Role](#role) | Eine bereits angelegte, direkt übergordnete Rolle | An already created, directly superordinate role | | |

<br/>

**Additional Technical Fields**<br/>
```Weitere technische Felder```

**English:**<br/>
The following fields should be added to reduce the processing load.<br/>
**Deutsch:**<br/>
Die folgenden Felder sollten hinzugefügt werden um die Rechenlast zu mindern.

<br/>

| German Name of Field | English Name of Field | Min-Max Occurence | Multi Value | Points to Entity| German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Breadcrumb] | German Breadcrumb| 1<br/>(handled automatically) | ⨉ |  | Der zusammengesetze deutsche Breadcrumb mit allen übergeordneten Rollen | The composite German breadcrumb with all Parent Roles  | | |
| Englischer Breadcrumb | English Breadcrumb| 1<br/>(handled automatically) | ⨉ |  | Der zusammengesetze englische Breadcrumb mit allen übergeordneten Rollen | The composite English Breadcrumb with all Parent Roles  | | |

<br/>
<br/>

---

<br/>
<br/>

## Fields required for Archiving, Technical and User Rights Purposes

```Archivarisch, technsich und Nutzer:innen-rechtlich bedingte Felder```

| German Name of Field | English Name of Field | Min-Max Occurence | Points to Entity | Multi Value | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Einliefernde Hochschule | Depositing University | 1 | [Depositing University](#depositing-university)<br/>(Derived from [User](#user)) | ⨉ | Die Hochschule, von der das eingelieferte Projekt kommt oder die für das eingelieferte Projekt (entfernt) verantwortlich ist. Die Einliefernde Hochschule ergibt sich aus der Hochschule der einliefernden User:in | The university from which the submitted project originates or which university is (remotely) responsible for the submitted project. The Depoting University is determined by the university of the depositing User | | |
| Created at |  Erstellt am | 1 | | ⨉ | Ein Zeitstempel, der das erste speichern eines Datensatzes erfasst |  A timestamp that records the first time a data record is saved | | |
| Created by |  Erstellt von | 1 | [User](#user) | ⨉ | Die Anzeige der Benutzerkennung der erstspeichernden Person | Display of the user ID of the person who first saved the data record | | |
| Created in User Role |  Erstellt in Nutzer:innen-Rolle | 1 | Derived from [User](#user) | ⨉ | Die Benutzer:innen-Rolle der erstspeichernden Person  | The user role of the person who first saved the data record | | |
| Last modified at | Zuletzt geändert am | 1 | | ⨉ | Ein Zeitstempel, der das aktuelle speichern eines Projekts erfasst | A timestamp that records the current saving of a project | | |
| Last modified by | Zuletzt geändert von | 1 | [User](#user) | ⨉ | Die Anzeige der Benutzerkennung der letztspeichernden Person | Display of the user ID of the person who last saved the data record | | |
| Last modified in User Role | Zuletzt geändert in Nutzer:innen-Rolle | 1 |  | ⨉ | Die Benutzer:innen-Rolle der aktuell speicehernden Person | The user role of the person who last saved the data record | | |