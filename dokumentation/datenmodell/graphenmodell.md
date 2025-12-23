---
layout: arkumu-docs
title: Graphenmodell
order: 3.1.2
permalink: /documentation/data-model/graph-model
---

```Graph Model```

<br/>

<div id="information-card-index" class="link-card" style="margin-bottom: 4%">
<sub>🛈 Bitte beachten Sie, dass diese Seite einen Arbeitsstand vom 23.12.2025 zeigt.</sub><br/><sub>🛈 Please note that this page shows the status of work as of December 23, 2025.</sub>
</div>

---

<br/>

**Deutsch:**

Auch wenn das [**Datenmodell von arkumu.nrw**](/documentation/data-model) zwar nicht in einer formal-ontologischen Struktur aufgebaut ist, so ist es doch voll kompatibel mit Metadaten-Standards wie [Rosetta-METS](https://knowledge.exlibrisgroup.com/Rosetta/Product_Documentation/Rosetta_AIP_Data_Model), [MARC21](https://www.dnb.de/DE/Professionell/Metadatendienste/Exportformate/MARC21/marc21_node.html) und [LIDO](https://cidoc.mini.icom.museum/working-groups/lido/lido-overview/about-lido/what-is-lido/) sowie mit ontologischen Meta-Metadaten-Standards wie dem [CIDOC-CRM-Modell](https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html), wie aus dem [**arkumu-nach-CIDOC-Mapping**](/documentation/data-model/cidoc-conversion) hervorgeht. In Anlehnung an CIDOC können die Entitäten und Felder von arkumu.nrw auch in Klassen und Eigenschaften dargestellt werden, sodass sie auch in einem Wissengrpfen dargestellt werden können und dem "Linked Open Data"-Prinzipien folgen. Entitäten und Felder werden daher als "Classes" dargestellt. Zur besseren Übersicht werden sie in "Entity Classes" und "Field Classes" gruppiert. Entsprechend dazu wird ein Satz von "Properties" eingeführt, die diese Klassen verbinden, gemäß dem oben erwähnten arkumu.nrw-Datenmodell.

<br/>

---

<br/>

**English:**

While the [**arkumu.nrw Data Model**](/documentation/data-model) does not present itself in a formal ontological structure,  it is designed to be fully compatible with certain metadata standards, like [Rosetta-METS](https://knowledge.exlibrisgroup.com/Rosetta/Product_Documentation/Rosetta_AIP_Data_Model), [MARC21](https://www.dnb.de/DE/Professionell/Metadatendienste/Exportformate/MARC21/marc21_node.html), and [LIDO](https://cidoc.mini.icom.museum/working-groups/lido/lido-overview/about-lido/what-is-lido/), as well as ontological meta-metadata standards like the [CIDOC CRM Model](https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html), as can be seen in the [**arkumu to CIDOC mapping**](/documentation/data-model/cidoc-conversion). Also, following CIDOC in that matter, the arkumu.nrw entities and fields can be represented in Classes and Properties, so that they can also be displayed in a knowledge graph and follow [Linked Open Data principles](https://data.europa.eu/sites/default/files/d2.1.2_training_module_1.2_introduction_to_linked_data_de_edp.pdf). Entities and fields are therefore represented as Classes. For a better overview, they are grouped in Entity Classes and Field Classes. Corresponding to these, a set of Properties is introduced, which connects these Classes according to the arkumu.nrw Data Model mentioned above.

<br/>
<br/>

## Entity Classes

```Entitätsklassen```

<br/>

**Deutsch:**

Entitätsklassen stellen die unverwechselbaren Kernbausteine des arkumu.nrw-Datenmodells dar. In einer relationalen Struktur würden diese Entitäten auf einer Tabellenebene dargestellt werden.

<br/>

---

<br/>

**English:**

Entity Classes represent the core unique building blocks of the arkumu.nrw Data Model. In a relational structure these entities would be represented at a table level.

<br/>
<br/>


### Actor
---

|||
|-----------|-----------|
| **English Name of Class** | Actor |
| **German Name of Class** | Akteur:in |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#actor> |
| **English Description** | An Actor is either a single living or dead real person, a group of such persons, or a legal body. Fictional Actors or role names, for example, should be recorded as a description or comment in an Event. |
| **German Description** | Ein:e Akteur:in ist entweder eine einzelne lebende oder verstorbene reale Person, eine Gruppe solcher Personen oder eine Körperschaft. Fiktive Akteur:innen oder Rollennamen, zum Beispiel, sollten als Beschreibung oder Kommentar in einem Ereignis verzeichnet werden. |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has alternative name](#has-alternative-name) ⇒ [Alternative Name](#alternative-name)<br/>[has non-public name](#has-non-public-name) ⇒ [Non-public Name](#non-public-name)<br/>[has preceding title](#has-preceding-title) ⇒ [Preceding Title](#preceding-title)<br/>[has trailing title](#has-trailing-title) ⇒ [Trailing Title](#trailing-title)<br/>[has gender](#has-gender) ⇒ [Gender](#gender)<br/>[has date of birth](#has-date-of-birth) ⇒ [Date of Birth](#date-of-birth)<br/>[has date of death](#has-date-of-death) ⇒ [Date of Death](#date-of-death)<br/>[has beginning of activity](#has-beginning-of-activity) ⇒ [Beginning of Activity](#beginning-of-activity)<br/>[has end of activity](#has-end-of-activity) ⇒ [End of Activity](#end-of-activity)<br/>[has place of birth](#has-place-of-birth) ⇒ [Place](#place)<br/>[has place of death](#has-place-of-death) ⇒ [Place](#place)<br/>[has place of activity](#has-place-of-activity) ⇒ [Place](#place)<br/>[has place of foundation](#has-place-of-foundation) ⇒ [Place](#place)<br/>[has place of dissolution](#has-place-of-dissolution) ⇒ [Place](#place)<br/>[has german short biography](#has-german-short-biography) ⇒ [German Short Biography](#german-short-biography)<br/>[has english short biography](#has-english-short-biography) ⇒ [English Short Biography](#english-short-biography)<br/>[has german commentary](#has-german-commentary) ⇒ [German Commentary](#german-commentary)<br/>[has english commentary](#has-english-commentary) ⇒ [English Commentary](#english-commentary)<br/>[has internal commentary](#has-internal-commentary) ⇒ [Internal Commentary](#internal-commentary)<br/>[has profession or activity](#has-profession-or-activity) ⇒ [Role](#role)<br/>[has ORCID](#has-orcid) ⇒ [ORCID](#orcid)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)<br/>[has VIAF ID](#has-viaf-id) ⇒ [VIAF ID](#viaf-id)<br/>[has LCCN ID](#has-lccn-id) ⇒ [LCCN ID](#lccn-id)<br/>[has other authority file](#has-other-authority-file) ⇒ [Other Authority File](#other-authority-file)<br/>[has website](#has-website) ⇒ [Website](#website)<br/>[has contact e-mail](#has-contact-e-mail) ⇒ [Contact (E-Mail)](#contact-e-mail)<br/>[has contact phone number](#has-contact-phone-number) ⇒ [Contact (Phone)](#contact-phone)<br/>[has contact postal address](#has-contact-postal-address) ⇒ [Contact (Postal Address)](#contact-postal-address)<br/>[has dataset ID at depositor](#has-dataset-id-at-depositor) ⇒ [Dataset ID at Depositor](#dataset-id-at-depositor)<br/>[has depositor](#has-depositor) ⇒ [Organisational Unit](#organisational-unit)<br/>[has dataset creation date at depositor](#has-dataset-creation-date-at-depositor) ⇒ [Dataset Creation Date at Depositor](#dataset-creation-date-at-depositor)<br/>[has dataset last modification date at depositor](#has-dataset-last-modification-date-at-depositor) ⇒ [Dataset Last Modification Date at Depositor](#dataset-last-modification-date-at-depositor)<br/>[has related actor](#has-related-actor) ⇒ [Actor](#actor) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat alternativen namen](#has-alternative-name) ⇒ [Alternativer Name](#alternative-name)<br/>[hat nicht-öffentlichen Namen](#has-non-public-name) ⇒ [Nicht-öffentlicher Name](#non-public-name)<br/>[hat vorangestellten titel](#has-preceding-title) ⇒ [Vorangestellter Titel](#preceding-title)<br/>[hat nachgestellten titel](#has-trailing-title) ⇒ [Nachgestellter Titel](#trailing-title)<br/>[hat geschlecht](#has-gender) ⇒ [Geschlecht](#gender)<br/>[hat geburtsdatum](#has-date-of-birth) ⇒ [Geburtsdatum](#date-of-birth)<br/>[hat sterbedatum](#has-date-of-death) ⇒ [Sterbedatum](#date-of-death)<br/>[hat wirkungsbeginn](#has-beginning-of-activity) ⇒ [Wirkungsbeginn](#beginning-of-activity)<br/>[hat wirkungsende](#has-end-of-activity) ⇒ [Wirkungsende](#end-of-activity)<br/>[hat geburtsort](#has-place-of-birth) ⇒ [Ort](#place)<br/>[hat sterbeort](#has-place-of-death) ⇒ [Ort](#place)<br/>[hat wirkungsort](#has-place-of-activity) ⇒ [Ort](#place)<br/>[hat gründungsort](#has-place-of-foundation) ⇒ [Ort](#place)<br/>[hat auflösungsort](#has-place-of-dissolution) ⇒ [Ort](#place)<br/>[hat deutsche kurzbiografie](#has-german-short-biography) ⇒ [Deutsche Kurzbiografie](#german-short-biography)<br/>[hat englische kurzbiografie](#has-english-short-biography) ⇒ [Englische Kurzbiografie](#english-short-biography)<br/>[hat deutschen kommentar](#has-german-commentary) ⇒ [Deutscher Kommentar](#german-commentary)<br/>[hat englischen kommentar](#has-english-commentary) ⇒ [Englischer Kommentar](#english-commentary)<br/>[hat internen kommentar](#has-internal-commentary) ⇒ [Interner Kommentar](#internal-commentary)<br/>[hat beruf oder tätigkeit](#has-profession-or-activity) ⇒ [Rolle](#role)<br/>[hat ORCID](#has-orcid) ⇒ [ORCID](#orcid)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id)<br/>[hat GND-nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id)<br/>[hat VIAF-id](#has-viaf-id) ⇒ [VIAF-ID](#viaf-id)<br/>[hat LCCN-id](#has-lccn-id) ⇒ [LCCN-ID](#lccn-id)<br/>[hat andere normdatei](#has-other-authority-file) ⇒ [Andere Normdatei](#other-authority-file)<br/>[hat webseite](#has-website) ⇒ [Webseite](#website)<br/>[hat kontakt-e-mail](#has-contact-e-mail) ⇒ [Kontakt (E-Mail)](#contact-e-mail)<br/>[hat kontakt telefonnummer](#has-contact-phone-number) ⇒ [Kontakt (Telefon)](#contact-phone)<br/>[hat kontakt postanschrift](#has-contact-postal-address) ⇒ [Kontakt (Postanschrift)](#contact-postal-address)<br/>[hat datensatz-id beim einlieferer](#has-dataset-id-at-depositor) ⇒ [Datensatz-ID beim Einlieferer](#dataset-id-at-depositor)<br/>[hat einlieferer](#has-depositor) ⇒ [Organisationseinheit](#organisational-unit)<br/>[hat datensatz-erstellungsdatum beim einlieferer](#has-dataset-creation-date-at-depositor) ⇒ [Datensatz-Erstellungsdatum beim Einlieferer](#dataset-creation-date-at-depositor)<br/>[hat datensatz-letztes-änderungsdatum beim einlieferer](#has-dataset-last-modification-date-at-depositor) ⇒ [Datensatz-Letztes-Änderungsdatum beim Einlieferer](#dataset-last-modification-date-at-depositor)<br/>[hat verknüpfte:n Akteur:in](#has-related-actor) ⇒ [Akteur:in](#actor) |

<br/>
<br/>

### Alternative Title Set
---

|||
|-----------|-----------|
| **English Name of Class** | Alternative Title Set |
| **German Name of Class** | Alternativer Titel-Set |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#alternative-title-set> |
| **German Description** | A set of a possible alternative title and a possible alternative subtitle. |
| **English Description** | Ein Set aus einem möglichen alternativen Titel und einem möglichen alternativen Untertitel. |
| **Properties (English Naming)** | [has alternative title](#has-alternative-title) ⇒ [Alternative Title](#alternative-title)<br/>[has alternative subtitle](#has-alternative-subtitle) ⇒ [Alternative Subtitle](#alternative-subtitle) |
| **Properties (German Naming)** | [hat alternativen Titel](#has-alternative-title) ⇒ [Alternativer Titel](#alternative-title)<br/>[hat alternativen Untertitel](#has-alternative-subtitle) ⇒ [Alternativer Untertitel](#alternative-subtitle) |

<br/>
<br/>

### Depositing University
---

|||
|-----------|-----------|
| **English Name of Class** | Depositing University |
| **German Name of Class** | Einliefernde Hochschule |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#depositing-university> |
| **English Description** | The university responsible for the data submitted. |
| **German Description** | Die für die eingelieferten Daten verantwortliche Hochschule. |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)  |
| **Properties (German Naming)** | [hat deutschen Namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen Namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat Wikidata-ID](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id)<br/>[hat GND-Nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id) |

<br/>
<br/>

### Digital Object
---

|||
|-----------|-----------|
| **English Name of Class** | Digital Object |
| **German Name of Class** | Digitales Objekt |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#digital-object> |
| **English Description** | A Digital Object is a single file with its corresponding metadata set. Descriptive metadata is data entered by users, technical metadata is automatically read out by software.|
| **German Description** | Ein Digitales Objekt ist eine einzelne Datei mit dazugehörigen Metadaten. Beschreibene Metadaten werden von Nutzer:innen eingegeben, technische Metadaten werden von Software automatisch ausgelesen.|
| **Properties (English Naming)** | [has file path](#has-file-path) ⇒ [File Path](#file-path)<br/>[has file name](#has-file-name) ⇒ [File Name](#file-name)<br/>[has file size](#has-file-size) ⇒ [File Size](#file-size)<br/>[has MIME type](#has-mime-type) ⇒ [MIME Type](#mime-type)<br/>[has media type](#media-type) ⇒ [Media Type](#media-type)<br/>[has genesis type](#has-genesis-type) ⇒ [Genesis Type](#genesis-type)<br/>[is file package](#is-file-package) ⇒ [File Package](#file-package)<br/>[has preservation type](#has-preservation-type) ⇒ [Preservation Type](#preservation-type)<br/>[has derivate copy number](#has-derivate-copy-number) ⇒ [Derivate Copy Number](#derivate-copy-number)<br/>[has digital object keyword](#has-digital-object-keyword) ⇒ [Digital Object Keyword](#digital-object-keyword)<br/>[has digital object licence](#has-digital-object-licence) ⇒ [Digital Object Licence](#digital-object-licence)<br/>[has german content description](#has-german-content-description) ⇒ [German Content Description](#german-content-description)<br/>[has english content description](#has-english-content-description) ⇒ [English Content Description](#english-content-description)<br/>[has german image description](#has-german-image-description) ⇒ [German Image Description](#german-image-description)<br/>[has english image description](#has-english-image-description) ⇒ [English Image Description](#english-image-description)<br/>[has german commentary](#has-german-commentary) ⇒ [German Commentary](#german-commentary)<br/>[has english commentary](#has-english-commentary) ⇒ [English Commentary](#english-commentary)<br/>[has internal commentary](#has-internal-commentary) ⇒ [Internal Commentary](#internal-commentary)<br/>[has significant properties (german)](#has-significant-properties-german) ⇒ [Significant Properties (German)](#significant-properties-german)<br/>[has significant properties (english)](#has-significant-properties-english) ⇒ [Significant Properties (English)](#significant-properties-english)<br/>[has system requirements](#has-system-requirements) ⇒ [System Requirements](#system-requirements)<br/>[has checksum](#has-checksum) ⇒ [Checksum](#checksum)<br/>[has checksum at depositor](#has-checksum-at-depositor) ⇒ [Checksum at Depositor](#checksum-at-depositor)<br/>[has JHOVE status](#has-jhove-status) ⇒  [JHOVE Status](#jhove-status)<br/>[has DROID puid](#has-droid-puid) ⇒ [DROID PUID](#droid-puid)<br/>[has JHOVE metadata](#has-jhove-metadata) ⇒ [JHOVE Metadata](#jhove-metadata)<br/>[has DROID metadata](#has-droid-metadata) ⇒ [DROID Metadata](#droid-metadata)<br/>[has ExifTool metadata](#has-exiftool-metadata) ⇒ [ExifTool Metadata](#exiftool-metadata)<br/>[has MediaInfo metadata](#has-mediainfo-metadata) ⇒ [MediaInfo Metadata](#mediainfo-metadata)<br/>[has dataset ID at depositor](#has-dataset-id-at-depositor) ⇒ [Dataset ID at Depositor](#dataset-id-at-depositor)<br/>[has depositor](#has-depositor) ⇒ [Organisational Unit](#organisational-unit)<br/>[has dataset creation date at depositor](#has-dataset-creation-date-at-depositor) ⇒ [Dataset Creation Date at Depositor](#dataset-creation-date-at-depositor)<br/>[has dataset last modification date at depositor](#has-dataset-last-modification-date-at-depositor) ⇒ [Dataset Last Modification Date at Depositor](#dataset-last-modification-date-at-depositor)<br/>[has is arkumu preview](#has-is-arkumu-preview) ⇒ [is arkumu Preview](#is-arkumu-preview)<br/>[has is poster image](#has-is-poster-image) ⇒ [is Poster Image](#is-poster-image)<br/>[has television standard](#has-television-standard) ⇒ [Television Standard](#television-standard)<br/>[has frame rate](#has-frame-rate) ⇒ [Frame Rate](#frame-rate)<br/>[has aspect ratio](#has-aspect-ratio) ⇒ [Aspect Ratio](#aspect-ratio) <br/>[has language version](#has-language-version) ⇒ [Language Version](#language-version) <br/>[is part of a series](#is-part-of-a-series) ⇒ [Part of a Series](#part-of-a-series)<br/>[has is played in a loop](#has-is-played-in-a-loop) ⇒ [Plays in a Loop](#plays-in-a-loop)|
| **Properties (German Naming)** | [hat Dateipfad](#has-file-path) ⇒ [Dateipfad](#file-path)<br/>[hat Dateiname](#has-file-name) ⇒ [Dateiname](#file-name)<br/>[hat Dateigröße](#has-file-size) ⇒ [Dateigröße](#file-size)<br/>[hat MIME type](#has-mime-type) ⇒ [MIME Type](#mime-type)<br/>[hat Medientyp](#media-type) ⇒ [Medientyp](#media-type)<br/>[hat Entstehungstyp](#has-genesis-type) ⇒ [Entstehungstyp](#genesis-type)<br/>[ist Dateipaket](#is-file-package) ⇒ [Dateipaket](#file-package)<br/>[hat Erhaltungstyp](#has-preservation-type) ⇒ [Erhaltungstyp](#preservation-type)<br/>[hat derivatkopie-nummer](#has-derivate-copy-number) ⇒ [Derivatkopie-Nummer](#derivate-copy-number)<br/>[hat digitales-objekt-schlagwort](#has-digital-object-keyword) ⇒ [Digitales-Objekt-Schlagwort](#digital-object-keyword)<br/>[hat digitales-objekt-lizenz](#has-digital-object-licence) ⇒ [Digitales-Objekt-Lizenz](#digital-object-licence)<br/>[hat deutsche inhaltliche beschreibung](#has-german-content-description) ⇒ [Deutsche Inhaltliche Beschreibung](#german-content-description)<br/>[hat englische inhaltliche beschreibung](#has-english-content-description) ⇒ [Englische Inhaltliche Beschreibung](#english-content-description)<br/>[hat deutsche Bildbeschreibung](#has-german-image-description) ⇒ [Deutsche Bildbeschreibung](#german-image-description)<br/>[hat englische bildbeschreibung](#has-english-image-description) ⇒ [Englische Bildbeschreibung](#english-image-description)<br/>[hat deutschen kommentar](#has-german-commentary) ⇒ [Deutscher Kommentar](#german-commentary)<br/>[hat englischen kommentar](#has-english-commentary) ⇒ [Englischer Kommentar](#english-commentary)<br/>[hat internen kommentar](#has-internal-commentary) ⇒ [Interner Kommentar](#internal-commentary)<br/>[hat wesentliche eigenschaften (deutsch)](#has-significant-properties-german) ⇒ [Wesentliche Eigenschaften (Deutsch)](#significant-properties-german)<br/>[hat wesentliche eigenschaften (englisch)](#has-significant-properties-english) ⇒ [Wesentliche Eigenschaften (Englisch)](#significant-properties-english)<br/>[hat systemvoraussetzungen](#has-system-requirements) ⇒ [Systemvoraussetzungen](#system-requirements)<br/>[hat prüfsumme](#has-checksum) ⇒ [Prüfsumme](#checksum)<br/>[hat prüfsumme beim Einlieferer](#has-checksum-at-depositor) ⇒ [Prüfsumme beim Einlieferer](#checksum-at-depositor)<br/>[hat JHOVE-dateistatus](#has-jhove-status) ⇒  [JHOVE-Dateistatus](#jhove-status)<br/>[hat DROID puid](#has-droid-puid) ⇒ [DROID PUID](#droid-puid)<br/>[hat JHOVE-metadaten](#has-jhove-metadata) ⇒ [JHOVE-Metadaten](#jhove-metadata)<br/>[hat DROID-metadaten](#has-droid-metadata) ⇒ [DROID-Metadaten](#droid-metadata)<br/>[hat ExifTool-metadaten](#has-exiftool-metadata) ⇒ [ExifTool-Metadaten](#exiftool-metadata)<br/>[hat MediaInfo-metadaten](#has-mediainfo-metadata) ⇒ [MediaInfo-Metadaten](#mediainfo-metadata)<br/>[hat datensatz-id beim einlieferer](#has-dataset-id-at-depositor) ⇒ [Datensatz-ID beim Einlieferer](#dataset-id-at-depositor)<br/>[hat einlieferer](#has-depositor) ⇒ [Organisationseinheit](#organisational-unit)<br/>[hat datensatz-erstellungsdatum beim einlieferer](#has-dataset-creation-date-at-depositor) ⇒ [Datensatz-Erstellungsdatum beim Einlieferer](#dataset-creation-date-at-depositor)<br/>[hat datensatz-letztes-änderungsdatum beim einlieferer](#has-dataset-last-modification-date-at-depositor) ⇒ [Datensatz-Letztes-Änderungsdatum beim Einlieferer](#dataset-last-modification-date-at-depositor)<br/>[hat ist arkumu Preview](#has-is-arkumu-preview) ⇒ [ist arkumu Preview](#is-arkumu-preview)<br/>[hat ist Vorschaubild](#has-is-poster-image) ⇒ [ist Vorschaubild](#is-poster-image)<br/>[hat Fernsehnorm](#has-television-standard) ⇒ [Fernsehnorm](#television-standard)<br/>[hat Bildfrequenz](#has-frame-rate) ⇒ [Bildfrequenz](#frame-rate)<br/>[hat Aspect Ratio/Bildseitenverhältnis](#has-aspect-ratio) ⇒ [Aspect Ratio/Bildseitenverhältnis](#aspect-ratio) <br/>[hat Sprachversion](#has-language-version) ⇒ [Sprachversion](#language-version)<br/>[ist Teil einer Serie](#is-part-of-a-series) ⇒ [Teil einer Serie](#part-of-a-series)<br/>[hat wird im Loop abgespielt](#has-is-played-in-a-loop) ⇒ [wird im Loop abgespielt](#plays-in-a-loop)|

<br/>
<br/>




### Equipment and Software
---

|||
|-----------|-----------|
| **English Name of Class** | Equipment and Software |
| **German Name of Class** | Equipment und Software |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#equipment-and-software> |
| **English Description** | Tools and Software that were used during an Event to achieve the result of an activity in question. |
| **German Description** | Werkzeuge und Software, die während eines Ereignisses verwendet wurden, um das Ergebnis einer bestimmten Aktivität zu erreichen. |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has producer](#has-producer) ⇒ [Producer](#producer)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)<br/>[has german description](#has-german-description) ⇒ [German Description](#german-description)<br/>[has english description](#has-english-description) ⇒ [English Description](#english-description)<br/> |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat Hersteller](#has-producer)  ⇒ [Hersteller](#producer)<br/>[hat Wikidata-ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[hat GND-Nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id)<br/>[hat deutsche beschreibung](#has-german-description) ⇒ [Deutsche Beschreibung](#german-description)<br/>[hat englische beschreibung](#has-english-description) ⇒ [Englische Beschreibung](#english-description) |

<br/>
<br/>

### Equipment Type
---

|||
|-----------|-----------|
| **English Name of Class** | Equipment Type |
| **German Name of Class** | Equipmentart |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#equipment-type> |
| **English Description** | An Equipment Type categorises a piece of equipment or a piece of software using a [controlled vocabulary](/controlled-vocabularies/equipment-types). |
| **German Description** | Eine Ereignisart kategorisiert eine Stück Equipment oder ein Stück Software mit Hilfe eines [kontrollierten Vokabulars](/controlled-vocabularies/equipment-types). |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)<br/>[has AAT ID](#has-aat-id) ⇒ [AAT ID](#aat-id) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[hat GND-Nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id)<br/>[hat AAT ID](#has-aat-id) ⇒ [AAT-ID](#aat-id) |

<br/>
<br/>

### Event
---

|||
|-----------|-----------|
| **English Name of Class** | Event |
| **German Name of Class** | Ereignis |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#event> |
| **English Description** | Events represent occurrences in the real world that have happened in connection with a Project and its Actors. Events have a temporal beginning and a temporal end and take place in real Places. Abstract places ('on the internet') or fictional places ('Duckburg') need to be recorded as comments. Events are performed or executed by various actors, which can lead to legal ownership. Events manifest themselves or are documented in Digital Objects (files and their metadata). |
| **German Description** | Ereignisse bilden Geschehnisse in der realen Welt ab, die im Zusammenhang mit einem Projekt und dessen Akteur:innen passiert sind. Ereignisse haben einen zeitlichen Beginn und ein zeitliches Ende und finden an realen Orten statt. Abstrakte Orte ("im Internet") oder fiktive Orte ("Entenhausen") sind als Kommentar zu verzeichnen. Ereignisse werden von verschiedenen Akteur:innen durch- oder aufgeführt, wodurch sich rechtliche Ansprüche ableiten können. Ereignisse manifestieren sich oder werden dokumentiert in Digitalen Objekten (Dateien und ihren Metadaten). |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has event type](#has-event-type) ⇒ [Event Type](#event-type)<br/>[has event beginning](#has-event-beginning) ⇒ [Event Beginning](#event-beginning)<br/>[has event end](#has-event-end) ⇒ [Event End](#event-end)<br/>[has event place](#has-event-place) ⇒ [Place](#place)<br/>[has event description](#has-event-description) ⇒ [Event Description](#event-description)<br/>[has german commentary](#has-german-commentary) ⇒ [German Commentary](#german-commentary)<br/>[has english commentary](#has-english-commentary) ⇒ [English Commentary](#english-commentary)<br/>[has internal commentary](#has-internal-commentary) ⇒ [Internal Commentary](#internal-commentary)<br/>[has event property](#has-event-property) ⇒ [Event Property](#event-property)<br/>[has related event](#has-related-event) ⇒ [Event](#event)<br/>[has actor](#has-actor) ⇒ [Actor](#actor)<br/>[has equipment and software](#has-equipment-and-software) ⇒ [Equipment and Software](#equipment-and-software)<br/>[has physical object](#has-physical-object) ⇒ [Physical Object](#physical-object)<br/>[has information storage medium](#has-information-storage-medium) ⇒ [Information Storage Medium](#information-storage-medium)<br/>[has digital object](#has-digital-object) ⇒ [Digital Object](#digital-object)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)<br/>[has VIAF ID](#has-viaf-id) ⇒ [VIAF ID](#viaf-id)<br/>[has dataset ID at depositor](#has-dataset-id-at-depositor) ⇒ [Dataset ID at Depositor](#dataset-id-at-depositor)<br/>[has depositor](#has-depositor) ⇒ [Organisational Unit](#organisational-unit)<br/>[has dataset creation date at depositor](#has-dataset-creation-date-at-depositor) ⇒ [Dataset Creation Date at Depositor](#dataset-creation-date-at-depositor)<br/>[has dataset last modification date at depositor](#has-dataset-last-modification-date-at-depositor) ⇒ [Dataset Last Modification Date at Depositor](#dataset-last-modification-date-at-depositor) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat ereignistyp](#has-event-type) ⇒ [Ereignistyp](#event-type)<br/>[hat ereignisbeginn](#has-event-beginning) ⇒ [Ereignisbeginn](#event-beginning)<br/>[hat ereignisende](#has-event-end) ⇒ [Ereignisende](#event-end)<br/>[hat ereignisort](#has-event-place) ⇒ [Ort](#place)<br/>[hat ereignisbeschreibung](#has-event-description) ⇒ [Ereignisbeschreibung](#event-description)<br/>[hat deutschen kommentar](#has-german-commentary) ⇒ [Deutscher Kommentar](#german-commentary)<br/>[hat englischen kommentar](#has-english-commentary) ⇒ [Englischer Kommentar](#english-commentary)<br/>[hat internen kommentar](#has-internal-commentary) ⇒ [Interner Kommentar](#internal-commentary)<br/>[hat ereigniseigenschaft](#has-event-property) ⇒ [Ereigniseigenschaft](#event-property)<br/>[hat verknüpftes ereignis](#has-related-event) ⇒ [Ereignis](#event)<br/>[hat akteurin](#has-actor) ⇒ [Akteur:in](#actor)<br/>[hat equipment und software](#has-equipment-and-software) ⇒ [Equipment und Software](#equipment-and-software)<br/>[hat physisches objekt](#has-physical-object) ⇒ [Physisches Objekt](#physical-object)<br/>[hat informationsträger](#has-information-storage-medium) ⇒ [Informationsträger](#information-storage-medium)<br/>[hat digitales objekt](#has-digital-object) ⇒ [Digitales Objekt](#digital-object)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id)<br/>[hat GND-nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id)<br/>[hat VIAF-id](#has-viaf-id) ⇒ [VIAF-ID](#viaf-id)<br/>[hat datensatz-id beim einlieferer](#has-dataset-id-at-depositor) ⇒ [Datensatz-ID beim Einlieferer](#dataset-id-at-depositor)<br/>[hat einlieferer](#has-depositor) ⇒ [Organisationseinheit](#organisational-unit)<br/>[hat datensatz-erstellungsdatum beim einlieferer](#has-dataset-creation-date-at-depositor) ⇒ [Datensatz-Erstellungsdatum beim Einlieferer](#dataset-creation-date-at-depositor)<br/>[hat datensatz-letztes-änderungsdatum beim einlieferer](#has-dataset-last-modification-date-at-depositor) ⇒ [Datensatz-Letztes-Änderungsdatum beim Einlieferer](#dataset-last-modification-date-at-depositor) |

<br/>
<br/>

### Event Description
---

|||
|-----------|-----------|
| **English Name of Class** | Event Description |
| **German Name of Class** | Ereignisbeschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#event-description> |
| **English Description** | A text describing what happened during an Event, or contains additional information to the Event in question. These can be texts written by the artists themselves or by a third person. |
| **German Description** | Ein Text, der beschreibt, was während eines Ereignisses passiert ist oder der zusätzliche Informationen zu dem betreffenden Ereignis enthält. Dabei kann es sich um Texte handeln, die von den Künstlern selbst oder von einer dritten Person verfasst wurden. |
| **Properties (English Naming)** | [has description text](#has-description-text) ⇒ [Description Text](#description-text)<br/>[has sorting number](#has-sorting-number) ⇒ [Sorting Number](#sorting-number) |
| **Properties (German Naming)** | [hat beschreibungstext](#has-description-text) ⇒ [Beschreibungstext](#description-text)<br/>[hat sortiernummre](#has-sorting-number) ⇒ [Sortiernummer](#sorting-number) |

<br/>
<br/>

### Event Type
---

|||
|-----------|-----------|
| **English Name of Class** | Event Type |
| **German Name of Class** | Ereignistyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#event-type> |
| **English Description** | An Event Type categorises an Event with a [controlled vocabulary](/controlled-vocabularies/event-types). |
| **German Description** | Ein Ereignistyp kategorisiert ein Ereignis mit Hilfe eines [kontrollierten Vokabulars](/controlled-vocabularies/event-types). |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has german synonym](#has-german-synonym) ⇒ [German Synonym](#german-synonym)<br/>[has english synonym](#has-english-synonym) ⇒ [English Synonym](#english-synonym)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)<br/>[has AAT ID](#has-aat-id) ⇒ [AAT ID](#aat-id)<br/>[has LIDO Terminology ID](#has-lido-terminology-id) ⇒ [LIDO Terminology ID](#lido-terminology-id) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat deutsches synonym](#has-german-synonym) ⇒ [Deutsches Synonym](#german-synonym)<br/>[hat englisches synonym](#has-english-synonym) ⇒ [Englisches Synonym](#english-synonym)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[hat GND-nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id)<br/>[hat AAT-id](#has-aat-id) ⇒ [AAT ID](#aat-id)<br/>[hat LIDO-Terminologie-id](#has-lido-terminology-id) ⇒ [LIDO-Terminologie-ID](#lido-terminology-id) |

<br/>
<br/>

### Existing Licence Agreement
---

|||
|-----------|-----------|
| **English Name of Class** | Existing Licence Agreement |
| **German Name of Class** | Bestehender Lizenzvertrag |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#existing-licence-agreement> |
| **English Description** | An already existing standard licence form for a project in use at one of the depositing universities. |
| **German Description** | Ein bereits bestehender, standardisierter Lizenzvertrag für ein Projekt, der an einer der einreichenden Universitäten verwendet wird. |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has accountable university](#has-accountable-university) ⇒ [Depositing University](#depositing-university)<br/>[has german wording](#has-german-wording) ⇒ [German Wording](#german-wording)<br/>[has english wording](#has-english-wording) ⇒ [English Wording](#english-wording)<br/>[has pdf](#has-pdf) ⇒ [PDF](#pdf)<br/>[has uri](#has-uri) ⇒ [URI](#uri) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat verantwortliche Hochschule](#has-accountable-university) ⇒ [Einliefernde Hochschule](#depositing-university)<br/>[hat deutschen Vertragstext](#has-german-wording) ⇒ [Deutscher Vertragstext](#german-wording)<br/>[hat englischen vertragstext](#has-english-wording) ⇒ [Englischer Vertragstext](#english-wording)<br/>[has pdf](#has-pdf) ⇒ [PDF](#pdf)<br/>[has uri](#has-uri) ⇒ [URI](#uri) |

<br/>
<br/>

### Information Storage Medium
---

|||
|-----------|-----------|
| **English Name of Class** | Information Storage Medium |
| **German Name of Class** | Informationsträger |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#information-storage-medium> |
| **English Description** | Special type of Physical Object on which data can be saved or extracted from. Synonyms: Storage Medium, Recording Medium, Data Carrier.  |
| **German Description** | Besondere Art eines Physischen Objekts, auf dem Daten gespeichert können. Synonyme: Speichermedium, Aufzeichnungsmedium, Datenträger, Trägermedium. |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has label](#has-label) ⇒ [Label](#label)<br/>[has information storage medium type](#has-information-storage-medium-type) ⇒ [Information Storage Medium Type](#information-storage-medium-type)<br/>[has product ID](#has-product-id) ⇒ [Product ID Value](#product-id-value)<br/>[has external inventory number](#has-external-inventory-number) ⇒ [External Inventory Number](#external-inventory-number)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)<br/>[has depository](#has-depository) ⇒ [Place](#place)<br/>[has owner](#has-owner) ⇒ [Actor](#actor)<br/>[has legal rights holder](#has-legal-rights-holder) ⇒ [Actor](#actor)<br/>[has provenance](#has-provenance)  ⇒ [Provenance](#provenance)<br/>[has german description](#has-german-description) ⇒ [German Description](#german-description)<br/>[has english description](#has-english-description) ⇒ [English Description](#english-description)<br/>[has german commentary](#has-german-commentary) ⇒ [German Commentary](#german-commentary)<br/>[has english commentary](#has-english-commentary) ⇒ [English Commentary](#english-commentary)<br/>[has internal commentary](#has-internal-commentary) ⇒ [Internal Commentary](#internal-commentary)<br/>[has material keyword](#has-material-keyword) ⇒ [Material Keyword](#material-keyword)<br/>[has dimensions](#has-dimensions) ⇒ [Dimensions](#dimensions)<br/>[has condition state (german)](#has-condition-state-german) ⇒ [Condition State (German)](#condition-state-german)<br/>[has condition state (english)](#has-condition-state-english) ⇒ [Condition State (English)](#condition-state-english)<br/>[is compilation](#is-compilation) ⇒ [Compilation](#compilation)<br/>[has compilation title](#has-compilation-title) ⇒ [Compilation Title](#compilation-title)<br/>[has compilation series number](#has-compilation-series-number) ⇒ [Compilation Series Number](#compilation-series-number)<br/>[has original language](#has-original-language) ⇒ [Original Language](#original-language)<br/>[has subtitle language](#has-subtitle-language) ⇒ [Subtitle Language](#subtitle-language)<br/>[has language version](#has-language-version) ⇒ [Language Version](#language-version) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat label](#has-label) ⇒ [Label](#label)<br/>[hat informationsträgertyp](#has-information-storage-medium-type) ⇒ [Informationsträgertyp](#information-storage-medium-type)<br/>[hat produkt-id](#has-product-id) ⇒ [Produkt-ID-Wert](#product-id-value)/[Produkt-ID-Typ](#product-id-type)<br/>[hat externe inventarnummer](#has-external-inventory-number) ⇒ [Externe Inventar Nummer](#external-inventory-number)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id)<br/>[hat GND-nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id)<br/>[hat aufbewahrungsort](#has-depository) ⇒ [Ort](#place)<br/>[hat besitzer:in](#has-owner) ⇒ [Akteur:in](#actor)<br/>[hat eigentümer:in](#has-legal-rights-holder) ⇒ [Eigentümer:in](#actor)<br/>[hat provenienz](#has-provenance)  ⇒ [Provenienz](#provenance)<br/>[hat deutsche beschreibung](#has-german-description) ⇒ [Deutsche Beschreibung](#german-description)<br/>[hat englische beschreibung](#has-english-description) ⇒ [Englische Beschreibung](#english-description)<br/>[hat deutschen kommentar](#has-german-commentary) ⇒ [Deutscher Kommentar](#german-commentary)<br/>[hat englischen kommentar](#has-english-commentary) ⇒ [Englischer Kommentar](#english-commentary)<br/>[hat internen kommentar](#has-internal-commentary) ⇒ [Interner Kommentar](#internal-commentary)<br/>[hat materialschlagwort](#has-material-keyword) ⇒ [Materialschlagwort](#material-keyword)<br/>[hat maße](#has-dimensions) ⇒ [Maße](#dimensions)<br/>[hat erhaltungszustand (deutsch)](#has-condition-state-german) ⇒ [Erhaltungszustand (Deutsch)](#condition-state-german)<br/>[hat erhaltungszustand (english)](#has-condition-state-english) ⇒ [Erhaltungszustand (Englisch)](#condition-state-english)<br/>[ist kompilation](#is-compilation) ⇒ [Kompilation](#compilation)<br/>[hat kompilationstitel](#has-compilation-title) ⇒ [Kompilationstitel](#compilation-title)<br/>[hat kompilatios-reihennummer](#has-compilation-series-number) ⇒ [Kompilations-Reihennummer](#compilation-series-number)<br/>[hat originalsprache](#has-original-language) ⇒ [Originalsprache](#original-language)<br/>[hat untertitelsprache](#has-subtitle-language) ⇒ [Untertitelsprache](#subtitle-language)<br/>[hat Sprachversion](#has-language-version) ⇒ [Sprachversion](#language-version) |

<br/>
<br/>

### Information Storage Medium Type

|||
|-----------|-----------|
| **English Name of Class** | Information Storage Medium Type |
| **German Name of Class** | Informationsträgertyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#information-storage-medium-type> |
| **English Description** | An Information Storage Medium Type categorises an Information Storage medium with a [controlled vocabulary](/controlled-vocabularies/information-storage-medium-types). |
| **German Description** | Ein Informationsträgertyp kategorisiert einen Informationsträger mit Hilfe eines [kontrollierten Vokabulars](/controlled-vocabularies/information-storage-medium-types). |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has german synonym](#has-german-synonym) ⇒ [German Synonym](#german-synonym)<br/>[has english synonym](#has-english-synonym) ⇒ [English Synonym](#english-synonym)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)<br/>[has AAT ID](#has-aat-id) ⇒ [AAT ID](#aat-id)<br/>[has PBCore link](#has-pbcore-link) ⇒ [PBCore Link](#pbcore-link)<br/>[has broader information storage medium type](#has-broader-information-storage-medium-type) ⇒ [Information Storage Medium Type](#information-storage-medium-type) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat deutsches synonym](#has-german-synonym) ⇒ [Deutsches Synonym](#german-synonym)<br/>[hat englisches synonym](#has-english-synonym) ⇒ [Englisches Synonym](#english-synonym)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id)<br/>[hat GND-nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id)<br/>[hat AAT-id](#has-aat-id) ⇒ [AAT-ID](#aat-id)<br/>[hat PBCore-link](#has-pbcore-link) ⇒ [PBCore-Link](#pbcore-link)<br/>[hat übergeordneten informationsträgertyp](#has-broader-information-storage-medium-type) ⇒ [Informationsträgertyp](#information-storage-medium-type) |

<br/>
<br/>

### Keyword
---

|||
|-----------|-----------|
| **English Name of Class** | Keyword |
| **German Name of Class** | Schlagwort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#keyword> |
| **English Description** | A metadata entry from the controlled vocabulary of [Wikidata](https://www.wikidata.org/). |
| **German Description** | Ein Metadaten-Eintrag aus dem kontrollierten Vokabular von [Wikidata](https://www.wikidata.org/). |
| **Properties (English Naming)** | [has german wikidata label](#has-german-wikidata-label) ⇒ [German Wikidata Label](#german-wikidata-label)<br/>[has english wikidata label](#has-english-wikidata-label) ⇒ [English Wikidata Label](#english-wikidata-label)<br/>[has german wikidata synonym](#has-german-wikidata-synonym) ⇒ [German Wikidata Synonym](#german-wikidata-synonym)<br/>[has english wikidata synonym](#has-english-wikidata-synonym) ⇒ [English Wikidata Synonym](#english-wikidata-synonym)<br/>[has german wikidata description](#has-german-wikidata-description) ⇒ [German Wikidata Description](#german-wikidata-description)<br/>[has german wikidata description](#has-german-wikidata-description) ⇒ [German Wikidata Description](#german-wikidata-description)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id) |
| **Properties (German Naming)** | [hat deutsches wikidata-label](#has-german-wikidata-label) ⇒ [Deutsches Wikidata-Label](#german-wikidata-label)<br/>[hat englisches wikidata-label](#has-english-wikidata-label) ⇒ [Englishes Wikidata-Label](#english-wikidata-label)<br/>[hat deutsches wikidata-synonym](#has-german-wikidata-synonym) ⇒ [Deutsches Wikidata-Synonym](#german-wikidata-synonym)<br/>[hat englisches wikidata-synonym](#has-english-wikidata-synonym) ⇒ [Englishes Wikidata-Synonym](#english-wikidata-synonym)<br/>[hat deutsche wikidata-beschreibung](#has-german-wikidata-description) ⇒ [Deutsche Wikidata-Beschreibung](#german-wikidata-description)<br/>[hat englische wikidata-beschreibung](#has-german-wikidata-description) ⇒ [Englische Wikidata-Beschreibung](#german-wikidata-description)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id)<br/>[hat GND-nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id) |

<br/>
<br/>

### Language
---

|||
|-----------|-----------|
| **English Name of Class** | Language |
| **German Name of Class** | Sprache |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#language> |
| **English Description** | A language defined by the [ISO 639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) standard. This standard was chosen to be compatible with all libraries. |
| **German Description** | Eine Sprache, die durch die Norm [ISO 639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) definiert ist. Dieser Standard wurde gewählt, um mit allen Bibliotheken kompatibel zu sein. |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has ISO 639-2(B) code](#has-iso-639-2b-code) ⇒ [ISO 639-2(B) Code](#iso-639-2b-code)<br/>[has ISO 639-2(T) code](#has-iso-639-2t-code) ⇒ [ISO 639-2(T) Code](#iso-639-2t-code)<br/>[has ISO 639-1 code](#has-iso-639-1-code) ⇒ [ISO 639-1 Code](#iso-639-1-code) |
| **Properties (German Naming)** | [hat deutschen Namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen Namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat ISO 639-2(B)-code](#has-iso-639-2b-code) ⇒ [ISO 639-2(B)-Code](#iso-639-2b-code)<br/>[hat ISO 639-2(T)-code](#has-iso-639-2t-code) ⇒ [ISO 639-2(T)-Code](#iso-639-2t-code)<br/>[hat ISO 639-1-code](#has-iso-639-1-code) ⇒ [ISO 639-1-Code](#iso-639-1-code)|

<br/>
<br/>

### Organisational Unit
---

|||
|-----------|-----------|
| **English Name of Class** | Organisational Unit |
| **German Name of Class** | Organisationseinheit |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#organisational-unit> |
| **English Description** | A department, an institute, a study programme, or an artistic/scientific facility. |
| **German Description** | Ein Fachbereich, Institut, ein Studiengang oder eine künstlerisch/wissenschaftliche Einrichtung. |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has german description](#has-german-description) ⇒ [German Description](#german-description)<br/>[has english description](#has-english-description) ⇒ [English Description](#english-description) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat deutsche beschreibung](#has-german-description) ⇒ [Deutsche Beschreibung](#german-description)<br/>[hat englische beschreibung](#has-english-description) ⇒ [Englische Beschreibung](#english-description) |

<br/>
<br/>

### Place
---

|||
|-----------|-----------|
| **English Name of Class** | Place |
| **German Name of Class** | Ort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#place> |
| **English Description** | A place metadata entry from the controlled vocabulary of [Wikidata](https://www.wikidata.org/). Only "real" places are acceptable, i.e. they must be identifiable with geolocation coordinates. |
| **German Description** | Ein Ort-Metadaten-Eintrag aus dem kontrollierten Vokabular von [Wikidata](https://www.wikidata.org/). Nur "reale" Orte sind erlaubt, d.h. sie müssen mit Geokoordinaten identifierbar sein. |
| **Properties (English Naming)** | [has german wikidata label](#has-german-wikidata-label) ⇒ [German Wikidata Label](#german-wikidata-label)<br/>[has english wikidata label](#has-english-wikidata-label) ⇒ [English Wikidata Label](#english-wikidata-label)<br/>[has place type](#has-place-type) ⇒ [Place Type](#place-type)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)<br/>[has VIAF ID](#has-viaf-id) ⇒ [VIAF ID](#viaf-id)<br/>[has longitude](#has-longitude) ⇒ [Longitude](#longitude)<br/>[has latitude](#has-latitude) ⇒ [Latitude](#latitude)<br/>[has broader place](#has-broader-place) ⇒ [Place](#place) |
| **Properties (German Naming)** | [hat deutsches wikidata-label](#has-german-wikidata-label) ⇒ [Deutsches Wikidata-Label](#german-wikidata-label)<br/>[hat englisches wikidata-label](#has-english-wikidata-label) ⇒ [Englishes Wikidata-Label](#english-wikidata-label)<br/>[hat ortart](#has-place-type) ⇒ [Ortart](#place-type)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id)<br/>[hat GND-nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id)<br/>[hat VIAF-id](#has-viaf-id) ⇒ [VIAF-ID](#viaf-id)<br/>[hat längengrad](#has-longitude) ⇒ [Längengrad](#longitude)<br/>[hat breitengrad](#has-latitude) ⇒ [Breitengrad](#latitude)<br/>[hat übergeordneten Ort](#has-broader-place) ⇒ [Ort](#place) |

<br/>
<br/>

### Physical Object
---

|||
|-----------|-----------|
| **English Name of Class** | Phyiscal Object |
| **German Name of Class** | Physisches Objekt |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#physical-object> |
| **English Description** | Ein physisch abgrenzbares Objekt, ein Teil eines solchen oder ein Material, das in einem Ereignis entstanden oder verwendet wurde. |
| **German Description** | A physically delineated object, a part of such, or a material that was created or used in an Event. |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has external inventory number](#has-external-inventory-number) ⇒ [External Inventory Number](#external-inventory-number)<br/>[has depository](#has-depository) ⇒ [Place](#place)<br/>[has owner](#has-owner) ⇒ [Actor](#actor)<br/>[has legal rights holder](#has-legal-rights-holder) ⇒ [Actor](#actor)<br/>[has provenance](#has-provenance)  ⇒ [Provenance](#provenance)<br/>[has german description](#has-german-description) ⇒ [German Description](#german-description)<br/>[has english description](#has-english-description) ⇒ [English Description](#english-description)<br/>[has german commentary](#has-german-commentary) ⇒ [German Commentary](#german-commentary)<br/>[has english commentary](#has-english-commentary) ⇒ [English Commentary](#english-commentary)<br/>[has internal commentary](#has-internal-commentary) ⇒ [Internal Commentary](#internal-commentary)<br/>[has classifying keyword](#has-classifying-keyword) ⇒ [Classifying Keyword](#classifying-keyword)<br/>[has material keyword](#has-material-keyword) ⇒ [Material Keyword](#material-keyword)<br/>[has technique keyword](#has-technique-keyword) ⇒ [Technique Keyword](#technique-keyword)<br/>[has german technique commentary](#has-german-technique-commentary) ⇒ [German Technique Commentary](#german-technique-commentary)<br/>[has english technique commentary](#has-english-technique-commentary) ⇒ [English Technique Commentary](#german-technique-commentary)<br/>[has dimensions](#has-dimensions) ⇒ [Dimensions](#dimensions)<br/>[has condition state (german)](#has-condition-state-german) ⇒ [Condition State (German)](#condition-state-german)<br/>[has condition state (english)](#has-condition-state-english) ⇒ [Condition State (English)](#condition-state-english) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat externe Inventar-Signaturnummer](#has-external-inventory-number) ⇒ [Externe Inventar-Signaturnummer](#external-inventory-number)<br/>[hat aufbewahrungsort](#has-depository) ⇒ [Ort](#place)<br/>[hat besitzer:in](#has-owner) ⇒ [Akteur:in](#actor)<br/>[hat eigentümer:in](#has-legal-rights-holder) ⇒ [Eigentümer:in](#actor)<br/>[hat provenienz](#has-provenance)  ⇒ [Provenienz](#provenance)<br/>[hat deutsche beschreibung](#has-german-description) ⇒ [Deutsche Beschreibung](#german-description)<br/>[hat englische beschreibung](#has-english-description) ⇒ [Englische Beschreibung](#english-description)<br/>[hat deutschen kommentar](#has-german-commentary) ⇒ [Deutscher Kommentar](#german-commentary)<br/>[hat englischen kommentar](#has-english-commentary) ⇒ [Englischer Kommentar](#english-commentary)<br/>[hat internen kommentar](#has-internal-commentary) ⇒ [Interner Kommentar](#internal-commentary)<br/>[hat klassifizierendes schlagwort](#has-classifying-keyword) ⇒ [Klassifizierendes Schlagwort](#classifying-keyword)<br/>[hat materialschlagwort](#has-material-keyword) ⇒ [Materialschlagwort](#material-keyword)<br/>[hat technikschlagwort](#has-technique-keyword) ⇒ [Technikschlagwort](#technique-keyword)<br/>[hat kommentar zur technik (deutsch)](#has-german-technique-commentary) ⇒ [Kommentar zur Technik (Deutsch)](#german-technique-commentary)<br/>[hat kommentar zur technik (englisch)](#has-english-technique-commentary) ⇒ [Kommentar zur Technik (Englisch)](#german-technique-commentary)<br/>[hat maße](#has-dimensions) ⇒ [Maße](#dimensions)<br/>[hat erhaltungszustand (deutsch)](#has-condition-state-german) ⇒ [Erhaltungszustand (Deutsch)](#condition-state-german)<br/>[hat erhaltungszustand (english)](#has-condition-state-english) ⇒ [Erhaltungszustand (Englisch)](#condition-state-english) |

<br/>
<br/>

### Project
---

|||
|-----------|-----------|
| **English Name of Class** | Project |
| **German Name of Class** | Projekt |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#project> |
| **English Description** | A Project is dataset record that is describing art and things related to art, as well as holding its current legal and usage rights status of the intellectual property. A Project is the central cataloguing unit of arkumu.nrw. |
| **German Description** | Ein Projekt ist ein Datensatz, der Kunst und kunstbezogene Dinge beschreibt sowie den aktuellen Rechts- und Nutzungsrechtsstatus dieses geistigen Eigentums enthält. Ein Projekt ist die zentrale Verzeichnungseinheit von arkumu.nrw. |
| **Properties (English Naming)** | [has preferred title](#has-preferred-title) ⇒ [Preferred Title](#preferred-title)<br/>[has preferred subtitle](#has-preferred-subtitle) ⇒ [Preferred Subtitle](#preferred-subtitle)<br/>[has alternative title set](#has-alternative-title-set) ⇒ [Alternative Title Set](#alternative-title-set)<br/>[has depositing university](#has-depositing-university) ⇒ [Depositing University](#depositing-university)<br/>[has organisational unit](#has-organisational-unit) ⇒ [Organisational Unit](#organisational-unit)<br/>[has project type](#has-project-type) ⇒ [Project Type](#project-type)<br/>[has project category](#has-project-category) ⇒ [Project Category](#project-category)<br/>[has keyword](#has-keyword) ⇒ [Keyword](#keyword)<br/>[has project description](#has-project-description) ⇒ [Project Description](#project-description)<br/>[has german commentary](#has-german-commentary) ⇒ [German Commentary](#german-commentary)<br/>[has english commentary](#has-english-commentary) ⇒ [English Commentary](#english-commentary)<br/>[has internal commentary](#has-internal-commentary) ⇒ [Internal Commentary](#internal-commentary)<br/>[has event](#has-event) ⇒ [Event](#event)<br/>[has project property](#has-project-property) ⇒ [Project Property](#project-property)<br/>[has related project](#has-related-project) ⇒ [Project](#project)<br/>[has arkumu ID](#has-arkumu-id) ⇒ [arkumu ID](#arkumu-id)<br/>[has ARK ID](#has-ark-id) ⇒ [ARK ID](#ark-id)<br/>[has ID at depositor](#has-id-at-depositor) ⇒ [ID at Depositor](#id-at-depositor)<br/>[has catalogue raisonné reference number](#has-catalogue-raisonne-reference-number) ⇒ [Catalogue Raisonné Reference Number](#catalogue-raisonne-reference-number)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)<br/>[has website](#has-website) ⇒ [Website](#website)<br/>[has dataset ID at depositor](#has-dataset-id-at-depositor) ⇒ [Dataset ID at Depositor](#dataset-id-at-depositor)<br/>[has depositor](#has-depositor) ⇒ [Organisational Unit](#organisational-unit)<br/>[has dataset creation date at depositor](#has-dataset-creation-date-at-depositor) ⇒ [Dataset Creation Date at Depositor](#dataset-creation-date-at-depositor)<br/>[has dataset last modification date at depositor](#has-dataset-last-modification-date-at-depositor) ⇒ [Dataset Last Modification Date at Depositor](#dataset-last-modification-date-at-depositor)<br/>[has rights status](#has-rights-status) ⇒ [Rights Status](#rights-status)<br/>[has existing licence agreement](#has-existing-licence-agreement) ⇒ [Existing Licence Agreement](#existing-licence-agreement)<br/>[has new arkumu licence agreement](#new-arkumu-licence-agreement) ⇒ [New arkumu Licence Agreement](#new-arkumu-licence-agreement)<br/>[has additional rights document](#has-additional-rights-document) ⇒ [Additional Rights Document](#additional-rights-document)<br/>[has file licence document](#has-file-licence-document) ⇒ [File Licence Document](#file-licence-document) |
| **Properties (German Naming)** | [hat bevorzugten titel](#has-preferred-title) ⇒ [Bevorzugter Titel](#preferred-title)<br/>[hat bevorzugten untertitel](#has-preferred-subtitle) ⇒ [Bevorzugter Untertitel](#preferred-subtitle)<br/>[hat alternativer-titel-set](#has-alternative-title-set) ⇒ [Alternativer-Titel-Set](#alternative-title-set)<br/>[hat einliefernde hochschule](#has-depositing-university) ⇒ [Einliefernde Hochschule](#depositing-university)<br/>[hat organisationseinheit](#has-organisational-unit) ⇒ [Organisationseinheit](#organisational-unit)<br/>[hat projektart](#has-project-type) ⇒ [Projektart](#project-type)<br/>[hat projektkategorie](#has-project-category) ⇒ [Projektkategorie](#project-category)<br/>[hat schlagwort](#has-keyword) ⇒ [Schlagwort](#keyword)<br/>[hat projektbeschreibung](#has-project-description) ⇒ [Projektbeschreibung](#project-description)<br/>[hat deutschen kommentar](#has-german-commentary) ⇒ [Deutscher Kommentar](#german-commentary)<br/>[hat englischen kommentar](#has-english-commentary) ⇒ [Englischer Kommentar](#english-commentary)<br/>[hat internen kommentar](#has-internal-commentary) ⇒ [Interner Kommentar](#internal-commentary)<br/>[hat ereignis](#has-event) ⇒ [Ereignis](#event)<br/>[hat projekteigenschaft](#has-project-property) ⇒ [Projekteigenschaft](#project-property)<br/>[hat verknüpftes projekt](#has-related-project) ⇒ [Projekt](#project)<br/>[hat arkumu ID](#has-arkumu-id) ⇒ [arkumu ID](#arkumu-id)<br/>[hat ARK ID](#has-ark-id) ⇒ [ARK ID](#ark-id)<br/>[hat ID beim einlieferer](#has-id-at-depositor) ⇒ [ID beim Einlieferer](#id-at-depositor)<br/>[hat werkverzeichnisnummer](#has-catalogue-raisonne-reference-number) ⇒ [Werkverzeichnisnummer](#catalogue-raisonne-reference-number)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id)<br/>[hat GND-nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id)<br/>[hat webseite](#has-website) ⇒ [Webseite](#website)<br/>[hat datensatz-id beim einlieferer](#has-dataset-id-at-depositor) ⇒ [Datensatz-ID beim Einlieferer](#dataset-id-at-depositor)<br/>[hat einlieferer](#has-depositor) ⇒ [Organisationseinheit](#organisational-unit)<br/>[hat datensatz-erstellungsdatum beim einlieferer](#has-dataset-creation-date-at-depositor) ⇒ [Datensatz-Erstellungsdatum beim Einlieferer](#dataset-creation-date-at-depositor)<br/>[hat Datensatz-letztes-Änderungsdatum beim Einlieferer](#has-dataset-last-modification-date-at-depositor) ⇒ [Datensatz-Letztes-Änderungsdatum beim Einlieferer](#dataset-last-modification-date-at-depositor)<br/>[hat rechtsstatus](#has-rights-status) ⇒ [Rechtsstatus](#rights-status)<br/>[hat bestehenden lizenzvertrag](#has-existing-licence-agreement) ⇒ [Bestehender Lizenzvertrag](#existing-licence-agreement)<br/>[hat neuen arkumu lizenzvertrag](#new-arkumu-licence-agreement) ⇒ [Neuer arkumu Lizenzvertrag](#new-arkumu-licence-agreement)<br/>[hat weiteres rechtsdokument](#has-additional-rights-document) ⇒ [Weiteres Rechtsdokument](#additional-rights-document)<br/>[hat dateiabfrage-dokument](#has-file-licence-document) ⇒ [Dateiabfrage-Dokument](#file-licence-document) |

<br/>
<br/>

### Project Category
---

|||
|-----------|-----------|
| **English Name of Class** | Project Category |
| **German Name of Class** | Projektkategorie |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#project-category> |
| **English Description** | A Project Category typifies a Project, in an artistic sense, with the help of a [controlled vocabulary](/controlled-vocabularies/project-categories). |
| **German Description** | Eine Projektkategorie typisiert ein Projekt, in einem künstlerischen Sinne, mit Hilfe eines [kontrollierten Vokabulars](/controlled-vocabularies/project-categories). |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has german synonym](#has-german-synonym) ⇒ [German Synonym](#german-synonym)<br/>[has english synonym](#has-english-synonym) ⇒ [English Synonym](#english-synonym)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID](#has-gnd-id) ⇒ [GND ID](#gnd-id)<br/>[has AAT ID](#has-aat-id) ⇒ [AAT ID](#aat-id)<br/>[has filmportal.de category ID](#has-filmportalde-category-id) ⇒ [filmportal.de Category ID](#filmportalde-category-id)<br/>[has broader project category](#has-broader-project-category) ⇒ [Project Category](#project-category) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat deutsches synonym](#has-german-synonym) ⇒ [Deutsches Synonym](#german-synonym)<br/>[hat englisches synonym](#has-english-synonym) ⇒ [Englisches Synonym](#english-synonym)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id)<br/>[hat GND-nummer](#has-gnd-id) ⇒ [GND-Nummer](#gnd-id)<br/>[hat AAT-id](#has-aat-id) ⇒ [AAT-ID](#aat-id)<br/>[hat filmportal.de-kategorie-id](#has-filmportalde-category-id) ⇒ [filmportal.de-Kategorie-ID](#filmportalde-category-id)<br/>[hat übergordnete Projektkategorie](#has-broader-project-category) ⇒ [Projektkategorie](#project-category) |

<br/>
<br/>

### Project Description
---

|||
|-----------|-----------|
| **English Name of Class** | Project Description |
| **German Name of Class** | Projektbeschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#project-description> |
| **English Description** | A text describing the content of the Project, or what the Project in question is. These can be texts written by the artists themselves or written by a third person. |
| **German Description** | Ein Text, der den Inhalt des Projekts beschreibt oder was das Projekt ist. Dabei kann es sich um Texte handeln, die von den Künstler:innen selbst oder von einer dritten Person verfasst wurden. |
| **Properties (English Naming)** | [has description text](#has-description-text) ⇒ [Description Text](#description-text)<br/>[has sorting number](#has-sorting-number) ⇒ [Sorting Number](#sorting-number) |
| **Properties (German Naming)** | [hat beschreibungstext](#has-description-text) ⇒ [Beschreibungstext](#description-text)<br/>[hat sortiernummre](#has-sorting-number) ⇒ [Sortiernummer](#sorting-number) |

<br/>
<br/>

### Project Type
---

|||
|-----------|-----------|
| **English Name of Class** | Project Type |
| **German Name of Class** | Projektart |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#project-type> |
| **English Description** | A Project Type categorises a the academic context of a Project with the help of a [controlled vocabulary](/controlled-vocabularies/project-types). |
| **German Description** | Eine Projektart kategorisiert den akademischen Kontext eines Projekts mit Hilfe eines [kontrollierten Vokabulars](/controlled-vocabularies/project-types). |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id) |
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id) |

<br/>
<br/>

### Role
---

|||
|-----------|-----------|
| **English Name of Class** | Role |
| **German Name of Class** | Rolle |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#role> |
| **English Description** | An artistic or non-artistic role of a person, a group, or legal entity, either as a global role as profession or activity directly bound to the actor, or situational executed in an Event. |
| **German Description** | Eine künstlerische oder nicht-künstlerische Rolle einer Person, einer Gruppe oder einer Körperschaft, entweder als globale Rolle, als Beruf oder Tätigkeit, direkt an eine:n Akteur:in gebunden oder situativ ausgeführt in einem Event. |
| **Properties (English Naming)** | [has german name](#has-german-name) ⇒ [German Name](#german-name)<br/>[has english name](#has-english-name) ⇒ [English Name](#english-name)<br/>[has Wikidata ID](#has-wikidata-id) ⇒ [Wikidata ID](#wikidata-id)<br/>[has GND ID (male)](#has-gnd-id-male) ⇒ [GND ID (male)](#gnd-id-male)<br/>[has GND ID (female)](#has-gnd-id-female) ⇒ [GND ID (female)](#gnd-id-female)<br/>[has GND ID (group)](#has-gnd-id-group) ⇒ [GND ID (group)](#gnd-id-group)<br/>[has AAT ID](#has-aat-id) ⇒ [AAT ID](#aat-id)<br/>[has broader role](#has-broader-role)  ⇒  [Role](#role)|
| **Properties (German Naming)** | [hat deutschen namen](#has-german-name) ⇒ [Deutscher Name](#german-name)<br/>[hat englischen namen](#has-english-name) ⇒ [Englischer Name](#english-name)<br/>[hat Wikidata-id](#has-wikidata-id) ⇒ [Wikidata-ID](#wikidata-id)<br/>[hat GND-nummer (männlich)](#has-gnd-id-male) ⇒ [GND-Nummer (männlich)](#gnd-id-male)<br/>[hat GND-nummer (weiblich)](#has-gnd-id-female) ⇒ [GND-Nummer (weiblich)](#gnd-id-female)<br/>[hat GND-nummer (gruppe)](#has-gnd-id-group) ⇒ [GND-Nummer (Gruppe)](#gnd-id-group)<br/>[hat AAT-id](#has-aat-id) ⇒ [AAT-ID](#aat-id)<br/>[hat übergeordnete rolle](#has-broader-role) ⇒ [Rolle](#role) |

<br/>
<br/>

---

<br/>
<br/>

## Field Classes

```Feldklassen```

<br/>

**Deutsch:**

Feldklassen stellen Teile des arkumu.nrw-Datenmodells dar, die in verschiedenen Entitätsklassen auftauchen können. Auf einer relationalen Ebene würden diese Entitäten auf Feldebene dargestellt werden.

<br/>

---

<br/>

**English:**

Field Classes represent parts of the arkumu.nrw data model that can appear in different entity classes. At a relational level, these entities would be represented at a field level.

<br/>
<br/>

### AAT ID

|||
|-----------|-----------|
| **English Name of Class** | AAT ID |
| **German Name of Class** | AAT-ID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#aat-id> |
| **English Description** | An identification number for an entry in the ["Art & Architecture Thesaurus"](https://www.getty.edu/research/tools/vocabularies/aat/) of the Getty research Institute; e.g. [300054138](http://vocab.getty.edu/page/aat/300054138). |
| **German Description** | Eine Identifikatsnummer eines Eintrags im [„Art & Architecture Thesaurus“](https://www.getty.edu/research/tools/vocabularies/aat/) des Getty Reasearch Institute; z.B. [300054138](http://vocab.getty.edu/page/aat/300054138). |

<br/>
<br/>

### Additional Rights Document

|||
|-----------|-----------|
| **English Name of Class** | Additional Rights Document |
| **German Name of Class** | Weiteres Rechtsdokument |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#additional-rights-document> |
| **English Description** | Links to additionally uploaded documents that are relevant to German *Urheberrecht* or German *Leistungsschutzrecht* issues relating to a [Project](#project) or [Events](#event) associated with the [Project](#project). |
| **German Description** | Links zu weiteren hochgeladenen Dokumenten, die für urheberrechtliche oder leistungsschutzrechtliche Fragen bezüglich eines [Projekts](#project) oder den damit, über das [Projekt](#project) verbundenen, [Ereignissen](#event) relevant ist. |

<br/>
<br/>

### Alternative Name

|||
|-----------|-----------|
| **English Name of Class** | Alternative Name |
| **German Name of Class** | Alternativer Name |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#alternative-name> |
| **English Description** | An alternative appellation for an [Actor](#actor). |
| **German Description** | Eine alternative Bezeichnung für einen/eine [Akteur:in](#actor). |

<br/>
<br/>

### Alternative Subtitle

|||
|-----------|-----------|
| **English Name of Class** | Alternative Subtitle |
| **German Name of Class** | Alternativer Untertitel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#alternative-subtitle> |
| **English Description** | An alternative short, supplementary line of text for a [Project](#project), which is linked to it via an [Alternative Title Set](#alternative-title-set). |
| **German Description** | Ein alternative kurze, ergänzende Textzeile für eine [Projekt](#project), die über ein [Alternatives Titel-Set](#alternative-title-set) verbunden wird. |
| **Properties (English Naming)** | [has language](#has-language) ⇒ [Language](#language) |
| **Properties (German Naming)** | [hat sprache](#has-language) ⇒ [Sprache](#language) |

<br/>
<br/>

### Alternative Title

|||
|-----------|-----------|
| **English Name of Class** | Alternative Title |
| **German Name of Class** | Alternativer Titel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#alternative-title> |
| **English Description** | An alternative appellation for a [Project](#project), which is linked to it via an [Alternative Title Set](#alternative-title-set). |
| **German Description** | Ein alternative Benennung für ein [Projekt](#project), die über ein [Alternatives Titel-Set](#alternative-title-set) verbunden wird. |
| **Properties (English Naming)** | [has language](#has-language) ⇒ [Language](#language) |
| **Properties (German Naming)** | [hat sprache](#has-language) ⇒ [Sprache](#language) |

<br/>
<br/>

### ARK ID

|||
|-----------|-----------|
| **English Name of Class** | ARK |
| **German Name of Class** | ARK |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#ark-id> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### arkumu ID

|||
|-----------|-----------|
| **English Name of Class** | arkumu ID |
| **German Name of Class** | arkumu ID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#arkumu-id> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Aspect Ratio

|||
|-----------|-----------|
| **English Name of Class** | Aspect Ratio |
| **German Name of Class** | Aspect Ratio/Bildseitenverhältnis |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#aspect-ratio> |
| **English Description** | |
| **German Description** | |

<br/>
<br/>

### Beginning of Activity

|||
|-----------|-----------|
| **English Name of Class** | Beginning of Activity |
| **German Name of Class** | Wirkungsbeginn |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#beginning-of-activity> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Catalogue Raisonne Reference Number

|||
|-----------|-----------|
| **English Name of Class** | Catalogue Raisonné Reference Number |
| **German Name of Class** | Werkverzeichnisnummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#catalogue-raisonne-reference-number> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Checksum

|||
|-----------|-----------|
| **English Name of Class** | Checksum |
| **German Name of Class** | Prüfsumme |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#checksum> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Checksum at Depositor

|||
|-----------|-----------|
| **English Name of Class** | Checksum at Depositor |
| **German Name of Class** | Prüfsumme beim Einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#checksum-at-depositor> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Classifying Keyword

|||
|-----------|-----------|
| **English Name of Class** | Classifying Keyword |
| **German Name of Class** | Klassifizierendes Schlagwort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#classifying-keyword> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Compilation

|||
|-----------|-----------|
| **English Name of Class** | Compilation |
| **German Name of Class** | Kompilation |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#compilation> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Compilation Series Number

|||
|-----------|-----------|
| **English Name of Class** | Compilation Series Number |
| **German Name of Class** | Kompilations-Reihennummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#compilation-series-number> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Compilation Title

|||
|-----------|-----------|
| **English Name of Class** | Compilation Title |
| **German Name of Class** | Kompilationstitel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#compilation-title> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Condition State (English)

|||
|-----------|-----------|
| **English Name of Class** | Condition State (English) |
| **German Name of Class** | Erhaltungszustand (Englisch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#condition-state-english> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Condition State (German)

|||
|-----------|-----------|
| **English Name of Class** | Condition State (German) |
| **German Name of Class** | Erhaltungszustand (Deutsch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#condition-state-german> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Contact (E-Mail)

|||
|-----------|-----------|
| **English Name of Class** | Contact (E-Mail) |
| **German Name of Class** | Kontakt (E-Mail) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#contact-e-mail> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Contact (Phone)

|||
|-----------|-----------|
| **English Name of Class** | Contact (Phone) |
| **German Name of Class** | Kontakt (Telefon) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#contact-phone> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Contact (Postal Address)

|||
|-----------|-----------|
| **English Name of Class** | Contact (Postal Address) |
| **German Name of Class** | Kontakt (Postanschrift) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#contact-postal-address> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Dataset Creation Date at Depositor

|||
|-----------|-----------|
| **English Name of Class** | Dataset Creation Date at Depositor |
| **German Name of Class** | Datensatz-Erstellungsdatum beim Einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#dataset-creation-date-at-depositor> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Dataset ID at Depositor

|||
|-----------|-----------|
| **English Name of Class** | Dataset ID at Depositor |
| **German Name of Class** | Datensatz-ID beim Einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#dataset-id-at-depositor> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Dataset Last Modification Date at Depositor

|||
|-----------|-----------|
| **English Name of Class** | Dataset Last Modification Date at Depositor |
| **German Name of Class** | Datensatz-Letztes-Änderungsdatum beim Einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#dataset-last-modification-date-at-depositor> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Date of Birth

|||
|-----------|-----------|
| **English Name of Class** | Date of Birth |
| **German Name of Class** | Geburtsdatum |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#date-of-birth> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Date of Death

|||
|-----------|-----------|
| **English Name of Class** | Date of Death |
| **German Name of Class** | Sterbedatum |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#date-of-death> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Derivate Copy Number

|||
|-----------|-----------|
| **English Name of Class** | Derivate Copy Number |
| **German Name of Class** | Derivatkopie-Nummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#derivate-copy-number> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Description Text

|||
|-----------|-----------|
| **English Name of Class** | Description Text |
| **German Name of Class** | Beschreibungstext |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#description-text> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Digital Object Keyword

|||
|-----------|-----------|
| **English Name of Class** | Digital Object Keyword |
| **German Name of Class** | Digitales-Objekt-Schlagwort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#digital-object-keyword> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Digital Object Licence

|||
|-----------|-----------|
| **English Name of Class** | Digital Object Licence |
| **German Name of Class** | Digitales-Objekt-Lizenz
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#digital-object-licence> |
| **English Description** | When exporting source data to arkumu, the licence status must be specified with one of three possible values: The value `1` corresponds to Lizenz arkumu-A. The value `2` corresponds to Lizenz arkumu-A+B. The value `3` corresponds to Lizenz arkumu-A+B+C |
| **German Description** | Wenn Quelldaten nach arkumu exportiert werden, muss der Lizenzstatus mit einer von drei möglichen Werten angegeben werden: Der Wert `1` entspricht der Lizenz arkumu-A. Der Wert `2` entspricht der Lizenz arkumu-A+B. Der Wert `3` entspricht der Lizenz arkumu-A+B+C  |

<br/>
<br/>

### Dimensions

|||
|-----------|-----------|
| **English Name of Class** | Dimensions |
| **German Name of Class** | Maße |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#dimensions> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### DROID Metadata

|||
|-----------|-----------|
| **English Name of Class** | DROID Metadata |
| **German Name of Class** | DROID-Metadaten |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#droid-metadata> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### DROID PUID

|||
|-----------|-----------|
| **English Name of Class** | DROID PUID |
| **German Name of Class** | DROID PUID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#droid-puid> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### End of Activity

|||
|-----------|-----------|
| **English Name of Class** | End of Activity |
| **German Name of Class** | Wirkungsende |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#end-of-activity> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### English Commentary

|||
|-----------|-----------|
| **English Name of Class** | English Commentary |
| **German Name of Class** | Englischer Kommentar |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-commentary> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### English Content Description

|||
|-----------|-----------|
| **English Name of Class** | English Content Description |
| **German Name of Class** | Englische Inhaltliche Beschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-content-description> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### English Description

|||
|-----------|-----------|
| **English Name of Class** | English Description |
| **German Name of Class** | Englische Beschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-description> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### English Image Description

|||
|-----------|-----------|
| **English Name of Class** | English Image Description |
| **German Name of Class** | Englische Bildbeschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-image-description> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### English Name

|||
|-----------|-----------|
| **English Name of Class** | English Name |
| **German Name of Class** | Englischer Name |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-name> |
| **English Description** | An English appellation of an Event, Actor, or further entity. |
| **German Description** | Eine englische Benennung eines Ereignis, einer Akteur:in oder eine anderen Entität. |

<br/>
<br/>

### English Short Biography

|||
|-----------|-----------|
| **English Name of Class** | English Short Biography |
| **German Name of Class** | Englische Kurzbiografie |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-short-biography> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### English Synonym

|||
|-----------|-----------|
| **English Name of Class** | English Synonym |
| **German Name of Class** | Englisches Synonym |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-synonym> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### English Technique Commentary

|||
|-----------|-----------|
| **English Name of Class** | English Technique Commentary |
| **German Name of Class** | Kommentar zur Technik (Englisch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-technique-commentary> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### English Wikidata Label

|||
|-----------|-----------|
| **English Name of Class** | English Wikidata Label |
| **German Name of Class** | Englishes Wikidata-Label |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-wikidata-label> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### English Wikidata Synonym

|||
|-----------|-----------|
| **English Name of Class** | English Wikidata Synonym |
| **German Name of Class** | Englishes Wikidata-Synonym |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-wikidata-synonym> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### English Wording

|||
|-----------|-----------|
| **English Name of Class** | English Wording |
| **German Name of Class** | Englischer Vertragstext |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#english-wording> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Event Beginning

|||
|-----------|-----------|
| **English Name of Class** | Event Beginning |
| **German Name of Class** | Ereignisbeginn |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#event-beginning> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Event End

|||
|-----------|-----------|
| **English Name of Class** | Event End |
| **German Name of Class** | Ereignisende |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#event-end> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Event Property

|||
|-----------|-----------|
| **English Name of Class** | Event Property |
| **German Name of Class** | Ereigniseigenschaft |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#event-property> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### ExifTool Metadata

|||
|-----------|-----------|
| **English Name of Class** | ExifTool Metadata |
| **German Name of Class** | ExifTool-Metadaten |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#exiftool-metadata> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### External Inventory Number

|||
|-----------|-----------|
| **English Name of Class** | External Inventory Number |
| **German Name of Class** | Externe Inventar-Signaturnummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#external-inventory-number> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### File Licence Document

|||
|-----------|-----------|
| **English Name of Class** | File Licence Document |
| **German Name of Class** | Dateiabfrage-Dokument |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#file-licence-document> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### File Name

|||
|-----------|-----------|
| **English Name of Class** | File Name |
| **German Name of Class** | Dateiname |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#file-name> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### File Package

|||
|-----------|-----------|
| **English Name of Class** | File Package |
| **German Name of Class** | Dateipaket |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#file-package> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### File Path

|||
|-----------|-----------|
| **English Name of Class** | File Path |
| **German Name of Class** | Dateipfad |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#file-path> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### File Size

|||
|-----------|-----------|
| **English Name of Class** | File Size |
| **German Name of Class** | Dateigröße |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#file-size> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### filmportal.de Category ID

|||
|-----------|-----------|
| **English Name of Class** | filmportal.de Category ID |
| **German Name of Class** | filmportal.de-Kategorie-ID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#filmportalde-category-id> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Frame Rate

|||
|-----------|-----------|
| **English Name of Class** | Frame Rate |
| **German Name of Class** | Bildfrequenz |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#frame-rate> |
| **English Description** | Anzahl der Bilder, die pro Sekunde gerendert werden, z. B. 25 fps. |
| **German Description** | Number of frames rendered per second, e.g. 25 fps. |

<br/>
<br/>

### Gender

|||
|-----------|-----------|
| **English Name of Class** | Gender |
| **German Name of Class** | Geschlecht |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#gender> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Genesis Type

|||
|-----------|-----------|
| **English Name of Class** | Genesis Type |
| **German Name of Class** | Entstehungstyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#genesis-type> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Commentary

|||
|-----------|-----------|
| **English Name of Class** | German Commentary |
| **German Name of Class** | Deutscher Kommentar |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-commentary> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Content Description

|||
|-----------|-----------|
| **English Name of Class** | German Content Description |
| **German Name of Class** | Deutsche Inhaltliche Beschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-content-description> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Description

|||
|-----------|-----------|
| **English Name of Class** | German Description |
| **German Name of Class** | Deutsche Beschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-description> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Image Description

|||
|-----------|-----------|
| **English Name of Class** | German Image Description |
| **German Name of Class** | Deutsche Bildbeschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-image-description> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Name

|||
|-----------|-----------|
| **English Name of Class** | German Name |
| **German Name of Class** | Deutscher Name |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-name> |
| **English Description** | An German appellation of an Event, Actor, or further entity. |
| **German Description** | Eine deutsche Benennung eines Ereignis, einer Akteur:in oder eine anderen Entität. |

<br/>
<br/>

### German Short Biography

|||
|-----------|-----------|
| **English Name of Class** | German Short Biography |
| **German Name of Class** | Deutsche Kurzbiografie |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-short-biography> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Synonyms

|||
|-----------|-----------|
| **English Name of Class** | German Synonym |
| **German Name of Class** | Deutsches Synonym |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-synonym> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Technique Commentary

|||
|-----------|-----------|
| **English Name of Class** | German Technique Commentary |
| **German Name of Class** | Kommentar zur Technik (Deutsch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-technique-commentary> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Wikidata Description

|||
|-----------|-----------|
| **English Name of Class** | German Wikidata Description |
| **German Name of Class** | Englische Wikidata-Beschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-wikidata-description> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Wikidata Label

|||
|-----------|-----------|
| **English Name of Class** | German Wikidata Label |
| **German Name of Class** | Deutsches Wikidata-Label |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-wikidata-label> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Wikidata Synonym

|||
|-----------|-----------|
| **English Name of Class** | German Wikidata Synonym |
| **German Name of Class** | Deutsches Wikidata-Synonym |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-wikidata-synonym> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### German Wording

|||
|-----------|-----------|
| **English Name of Class** | German Wording |
| **German Name of Class** | Deutscher Vertragstext |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#german-wording> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### GND ID

|||
|-----------|-----------|
| **English Name of Class** | GND ID |
| **German Name of Class** | GND-Nummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#gnd-id> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### GND ID (female)

|||
|-----------|-----------|
| **English Name of Class** | GND ID (female) |
| **German Name of Class** | GND-Nummer (weiblich) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#gnd-id-female> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### GND ID (group)

|||
|-----------|-----------|
| **English Name of Class** | GND ID (group) |
| **German Name of Class** | GND-Nummer (Gruppe) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#gnd-id-group> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### GND ID (male)

|||
|-----------|-----------|
| **English Name of Class** | GND ID (male) |
| **German Name of Class** | GND-Nummer (männlich) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#gnd-id-male> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### ID at Depositor

|||
|-----------|-----------|
| **English Name of Class** | ID at Depositor |
| **German Name of Class** | ID beim Einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#id-at-depositor> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Internal Commentary

|||
|-----------|-----------|
| **English Name of Class** | Internal Commentary |
| **German Name of Class** | Interner Kommentar |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#internal-commentary> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### is arkumu Preview

|||
|-----------|-----------|
| **English Name of Class** | is arkumu Preview |
| **German Name of Class** | ist arkumu Preview |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#is-arkumu-preview> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### is part of a series

|||
|-----------|-----------|
| **English Name of Class** | is part of a series |
| **German Name of Class** | ist Teil einer Serie |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#is-part-of-a-series> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### is Poster Image

|||
|-----------|-----------|
| **English Name of Class** | is Poster Image |
| **German Name of Class** | ist Vorschaubild |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#is-poster-image> |
| **English Description** |  |
| **German Description** | Eine Bilddatei, die repräsentativ für das ganze Projekt auf der Suchergebnisseite angezeigt wird. Wenn mehrere digitale Objekte eines Projekts Bilder sind, wird eines zum Vorschaubild deklariert. |

<br/>
<br/>

### ISO 639-1 Code

|||
|-----------|-----------|
| **English Name of Class** | ISO 639-1 Code |
| **German Name of Class** | ISO 639-1-Code |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#iso639-1-code> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### ISO 639-2(B) Code

|||
|-----------|-----------|
| **English Name of Class** | ISO 639-2(B) Code |
| **German Name of Class** | ISO 639-2(B)-Code |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#iso639-2b-code> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### ISO 639-2(T) Code

|||
|-----------|-----------|
| **English Name of Class** | ISO 639-2(T) Code |
| **German Name of Class** | ISO 639-2(T)-Code |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#iso639-2t-code> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### JHOVE Metadata

|||
|-----------|-----------|
| **English Name of Class** | JHOVE Metadata |
| **German Name of Class** | JHOVE-Metadaten |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#jhove-metadata> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### JHOVE Status

|||
|-----------|-----------|
| **English Name of Class** | JHOVE Status |
| **German Name of Class** | JHOVE-Dateistatus |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#jhove-status> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Label

|||
|-----------|-----------|
| **English Name of Class** | Label |
| **German Name of Class** | Label |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#label> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Language Version

|||
|-----------|-----------|
| **English Name of Class** | Language Version |
| **German Name of Class** | Sprachversion |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#language-version> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Latitude

|||
|-----------|-----------|
| **English Name of Class** | Latitude |
| **German Name of Class** | Breitengrad |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#latitude> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### LCCN ID

|||
|-----------|-----------|
| **English Name of Class** | LCCN ID |
| **German Name of Class** | LCCN-ID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#lccn-id> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### LIDO Terminology ID

|||
|-----------|-----------|
| **English Name of Class** | LIDO Terminology ID |
| **German Name of Class** | LIDO-Terminologie-ID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#lido-terminology-id> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Longitude

|||
|-----------|-----------|
| **English Name of Class** | Longitude |
| **German Name of Class** | Längengrad |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#longitude> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Material Keyword

|||
|-----------|-----------|
| **English Name of Class** | Material Keyword |
| **German Name of Class** | Materialschlagwort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#material-keyword> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Media Type

|||
|-----------|-----------|
| **English Name of Class** | Media Type |
| **German Name of Class** | Medientyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#media-type> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### MediaInfo Metadata

|||
|-----------|-----------|
| **English Name of Class** | MediaInfo Metadata |
| **German Name of Class** | MediaInfo-Metadaten |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#mediainfo-metadata> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### MIME Type

|||
|-----------|-----------|
| **English Name of Class** | MIME Type |
| **German Name of Class** | MIME Type |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#mime-type> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### New arkumu Licence Agreement

|||
|-----------|-----------|
| **English Name of Class** | New arkumu Licence Agreement |
| **German Name of Class** | Neuer arkumu Lizenzvertrag |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#new-arkumu-licence-agreement> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Non-public Name

|||
|-----------|-----------|
| **English Name of Class** | Non-public Name |
| **German Name of Class** | Nicht-öffentlicher Name |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#non-public-name> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### ORCID

|||
|-----------|-----------|
| **English Name of Class** | ORCID |
| **German Name of Class** | ORCID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#orcid> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Original Language

|||
|-----------|-----------|
| **English Name of Class** | Original Language |
| **German Name of Class** | Originalsprache |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#original-language> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Other Authority File

|||
|-----------|-----------|
| **English Name of Class** | Other Authority File |
| **German Name of Class** | Andere Normdatei |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#other-authority-file> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### PBCore Link

|||
|-----------|-----------|
| **English Name of Class** | PBCore Link |
| **German Name of Class** | PBCore-Link |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#pbcore-link> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### PDF

|||
|-----------|-----------|
| **English Name of Class** | PDF |
| **German Name of Class** | PDF |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#pdf> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Place Type

|||
|-----------|-----------|
| **English Name of Class** | Place Type |
| **German Name of Class** | Ortart |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#place-type> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Preceding Title

|||
|-----------|-----------|
| **English Name of Class** | Preceding Title |
| **German Name of Class** | Vorangestellter Titel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#preceding-title> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Preferred Subtitle

|||
|-----------|-----------|
| **English Name of Class** | Preferred Subtitle |
| **German Name of Class** | Bevorzugter Untertitel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#preferred-subtitle> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Preferred Title

|||
|-----------|-----------|
| **English Name of Class** | Preferred Title |
| **German Name of Class** | Bevorzugter Titel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#preferred-title> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Preservation Type

|||
|-----------|-----------|
| **English Name of Class** | Preservation Type |
| **German Name of Class** | Erhaltungstyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#preservation-type> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Producer

|||
|-----------|-----------|
| **English Name of Class** | Producer |
| **German Name of Class** | Hersteller |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#producer> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Product ID Value

|||
|-----------|-----------|
| **English Name of Class** | Product ID Value |
| **German Name of Class** | Produkt-ID-Wert |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#product-id-value> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Project Property

|||
|-----------|-----------|
| **English Name of Class** | Project Property |
| **German Name of Class** | Projekteigenschaft |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#project-property> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Provenance

|||
|-----------|-----------|
| **English Name of Class** | Provenance |
| **German Name of Class** | Provenienz |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#provenance> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Rights Status

|||
|-----------|-----------|
| **English Name of Class** | Rights Status |
| **German Name of Class** | Rechtsstatus |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#rights-status> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Significant Properties (English)

|||
|-----------|-----------|
| **English Name of Class** | Significant Properties (English) |
| **German Name of Class** | Wesentliche Eigenschaften (Englisch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#significant-properties-english> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Significant Properties (German)

|||
|-----------|-----------|
| **English Name of Class** | Significant Properties (German) |
| **German Name of Class** | Wesentliche Eigenschaften (Deutsch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#significant-properties-german> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Sorting Number

|||
|-----------|-----------|
| **English Name of Class** | Sorting Number |
| **German Name of Class** | Sortiernummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#sorting-number> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Subtitle Language

|||
|-----------|-----------|
| **English Name of Class** | Subtitle Language |
| **German Name of Class** | Untertitelsprache |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#subtitle-language> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### System Requirements

|||
|-----------|-----------|
| **English Name of Class** | System Requirements |
| **German Name of Class** | Systemvoraussetzungen |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#system-requirements> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Technique Keyword

|||
|-----------|-----------|
| **English Name of Class** | Technique Keyword |
| **German Name of Class** | Technikschlagwort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#technique-keyword> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Part of a Series

|||
|-----------|-----------|
| **English Name of Class** | Part of a Series |
| **German Name of Class** | Teil einer Serie |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#part-of-a-series> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Plays in a Loop

|||
|-----------|-----------|
| **English Name of Class** | Plays in a Loop |
| **German Name of Class** | wird im Loop abgespielt |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#plays-in-a-loop> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Television Standard

|||
|-----------|-----------|
| **English Name of Class** | Television Standard |
| **German Name of Class** | Fernsehnorm |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#television-standard> |
| **English Description** | Standard for terrestrial television signals, e.g. PAL or NTSC. |
| **German Description** | Der Standard, nach dem Informationen beim Fernsehen vom Sender zum Empfänger übertragen werden, z. B. PAL oder NTSC. |

<br/>
<br/>

### Trailing Title

|||
|-----------|-----------|
| **English Name of Class** | Trailing Title |
| **German Name of Class** | Nachgestellter Titel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#trailing-title> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### URI

|||
|-----------|-----------|
| **English Name of Class** | URI |
| **German Name of Class** | URI |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#uri> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### VIAF ID

|||
|-----------|-----------|
| **English Name of Class** | VIAF ID |
| **German Name of Class** | VIAF-ID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#viaf-id> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Website

|||
|-----------|-----------|
| **English Name of Class** | Website |
| **German Name of Class** | Webseite |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#website> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

### Wikidata ID

|||
|-----------|-----------|
| **English Name of Class** | Wikidata ID |
| **German Name of Class** | Wikidata-ID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#wikidata-id> |
| **English Description** |  |
| **German Description** |  |

<br/>
<br/>

---

<br/>
<br/>


## Properties

```Eigenschaften```

<br/>

**Deutsch:**

Eigenschaften definieren die Verbindung zwischen Entitätenklassen und Feldklassen, sowie zwischen Feldklassen untereinander. In einer Graphenansicht repräsentieren sie den Text auf einem Pfeil von einer Klasse zur anderen.

<br/>

---

<br/>

**English:**

Properties define the connection between Entity Classes and Field Classes, as well as between field classes among themselves. In a graph view, they represent the text on an arrow from one class to another.

<br/>
<br/>

### has AAT ID

|||
|-----------|-----------|
| **English Name of Property** | has AAT ID |
| **German Name of Property** | hat AAT-id |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-aat-id> |
| **Graph Representation** | arkumu:hasAatId |

<br/>
<br/>

### has accountable university

|||
|-----------|-----------|
| **English Name of Property** | has accountable university |
| **German Name of Property** | hat verantwortliche Hochschule |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-accountable-university> |
| **Graph Representation** | arkumu:hasAccountableUniversity |

<br/>
<br/>

### has actor

|||
|-----------|-----------|
| **English Name of Property** | has actor |
| **German Name of Property** | hat akteurin |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-actor> |
| **Graph Representation** | arkumu:hasActor |

<br/>
<br/>

### has additional rights document

|||
|-----------|-----------|
| **English Name of Property** | has additional rights document |
| **German Name of Property** | hat weiteres rechtsdokument |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-additional-rights-document> |
| **Graph Representation** | arkumu:hasAdditionalRightsDocument |

<br/>
<br/>

### has alternative name

|||
|-----------|-----------|
| **English Name of Property** | has alternative name |
| **German Name of Property** | hat alternativen namen |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-alternative-name> |
| **Graph Representation** | arkumu:hasAlternativeName |

<br/>
<br/>

### has alternative subtitle

|||
|-----------|-----------|
| **English Name of Property** | has alternative subtitle |
| **German Name of Property** | hat alternativen Untertitel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-alternative-subtitle> |
| **Graph Representation** | arkumu:hasAlternativeSubtitle |

<br/>
<br/>

### has alternative title

|||
|-----------|-----------|
| **English Name of Property** | has alternative title |
| **German Name of Property** | hat alternativen Titel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-alternative-title> |
| **Graph Representation** | arkumu:hasAlternativeTitle |

<br/>
<br/>

### has alternative title set

|||
|-----------|-----------|
| **English Name of Property** | has alternative title set |
| **German Name of Property** | hat alternativer-titel-set |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-alternative-title-set> |
| **Graph Representation** | arkumu:hasAlternativeTitleSet |

<br/>
<br/>

### has ARK ID

|||
|-----------|-----------|
| **English Name of Property** | has ARK ID|
| **German Name of Property** | hat ARK ID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-ark-id> |
| **Graph Representation** | arkumu:hasArkId |

<br/>
<br/>

### has arkumu ID

|||
|-----------|-----------|
| **English Name of Property** | has arkumu ID |
| **German Name of Property** | hat arkumu ID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-arkumu-id> |
| **Graph Representation** | arkumu:hasArkumuId |

<br/>
<br/>

### has aspect ratio

|||
|-----------|-----------|
| **English Name of Property** | has aspect ratio |
| **German Name of Property** | hat Aspect Ratio/Bildseitenverhältnis |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-aspect-ratio> |
| **Graph Representation** | arkumu:hasAspectRatio |

<br/>
<br/>

### has beginning of activity

|||
|-----------|-----------|
| **English Name of Property** | has beginning of activity |
| **German Name of Property** | hat wirkungsbeginn |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-beginning-of-activity> |
| **Graph Representation** | arkumu:hasBeginningOfActivity |

<br/>
<br/>

### has broader information storage medium type

|||
|-----------|-----------|
| **English Name of Property** | has broader information storage medium type |
| **German Name of Property** | hat übergeordneten informationsträgertyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-broader-information-storage-medium-type> |
| **Graph Representation** | arkumu:hasBroaderInformationStorageMediumType |

<br/>
<br/>

### has broader place

|||
|-----------|-----------|
| **English Name of Property** | has broader place |
| **German Name of Property** | hat übergeordneten Ort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-broader-place> |
| **Graph Representation** | arkumu:hasBroaderPlace |

<br/>
<br/>

### has broader project category

|||
|-----------|-----------|
| **English Name of Property** | has broader project category |
| **German Name of Property** | hat übergordnete Projektkategorie |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-broader-project-category> |
| **Graph Representation** | arkumu:hasBroaderProjectCategory |

<br/>
<br/>

### has broader role

|||
|-----------|-----------|
| **English Name of Property** | has broader role |
| **German Name of Property** | hat übergeordnete rolle |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-broader-role> |
| **Graph Representation** | arkumu:hasBroaderRole |

<br/>
<br/>

### has catalogue raisonne reference number

|||
|-----------|-----------|
| **English Name of Property** | has catalogue raisonné reference number |
| **German Name of Property** | hat Werkverzeichnisnummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-catalogue-raisonne-reference-number> |
| **Graph Representation** | arkumu:hasCatalogueRaisonneReferenceNumber |

<br/>
<br/>

### has checksum

|||
|-----------|-----------|
| **English Name of Property** | has checksum |
| **German Name of Property** | hat prüfsumme |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-checksum> |
| **Graph Representation** | arkumu:hasChecksum |

<br/>
<br/>

### has checksum at depositor

|||
|-----------|-----------|
| **English Name of Property** | has checksum at depositor |
| **German Name of Property** | hat prüfsumme beim Einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-checksum-at-depositor> |
| **Graph Representation** | arkumu:hasChecksumAtDepositor |

<br/>
<br/>

### has classifying keyword

|||
|-----------|-----------|
| **English Name of Property** | has classifying keyword |
| **German Name of Property** | hat klassifizierendes schlagwort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-classifying-keyword> |
| **Graph Representation** | arkumu:hasClassifyingKeyword |

<br/>
<br/>

### has compilation series number

|||
|-----------|-----------|
| **English Name of Property** | has compilation series number |
| **German Name of Property** | hat kompilatios-reihennummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-compilation-series-number> |
| **Graph Representation** | arkumu:hasCompilationSeriesNumber |

<br/>
<br/>

### has compilation title

|||
|-----------|-----------|
| **English Name of Property** | has compilation title |
| **German Name of Property** | hat kompilationstitel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-compilation-title> |
| **Graph Representation** | arkumu:hasCompilationTitle |

<br/>
<br/>

### has condition state (english)

|||
|-----------|-----------|
| **English Name of Property** | has condition state (english) |
| **German Name of Property** | hat erhaltungszustand (english) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-condition-state-english> |
| **Graph Representation** | arkumu:hasConditionStateEnglish |

<br/>
<br/>

### has condition state (german)

|||
|-----------|-----------|
| **English Name of Property** | has condition state (german) |
| **German Name of Property** | hat erhaltungszustand (deutsch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-condition-state-german> |
| **Graph Representation** | arkumu:hasConditionStateGerman |

<br/>
<br/>

### has contact e-mail

|||
|-----------|-----------|
| **English Name of Property** | has contact e-mail |
| **German Name of Property** | hat kontakt-e-mail |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-contact-e-mail> |
| **Graph Representation** | arkumu:hasContactE-mail |

<br/>
<br/>

### has contact phone number

|||
|-----------|-----------|
| **English Name of Property** | has contact phone number |
| **German Name of Property** | hat kontakt telefonnummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-contact-phone-number> |
| **Graph Representation** | arkumu:hasContactPhoneNumber |

<br/>
<br/>

### has contact postal address

|||
|-----------|-----------|
| **English Name of Property** | has contact postal address |
| **German Name of Property** | hat kontakt postanschrift |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-contact-postal-address> |
| **Graph Representation** | arkumu:hasContactPostalAddress |

<br/>
<br/>

### has dataset creation date at depositor

|||
|-----------|-----------|
| **English Name of Property** | has dataset creation date at depositor |
| **German Name of Property** | hat datensatz-erstellungsdatum beim einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-dataset-creation-date-at-depositor> |
| **Graph Representation** | arkumu:hasDatasetCreationDateAtDepositor |

<br/>
<br/>

### has dataset ID at depositor

|||
|-----------|-----------|
| **English Name of Property** | has dataset ID at depositor |
| **German Name of Property** | hat datensatz-id beim einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-dataset-id-at-depositor> |
| **Graph Representation** | arkumu:hasDatasetIdAtDepositor |

<br/>
<br/>

### has dataset last modification date at depositor

|||
|-----------|-----------|
| **English Name of Property** | has dataset last modification date at depositor |
| **German Name of Property** | hat Datensatz-letztes-Änderungsdatum beim Einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-dataset-last-modification-date-at-depositor> |
| **Graph Representation** | arkumu:hasDatasetLastModificationDateAtDepositor |

<br/>
<br/>

### has date of birth

|||
|-----------|-----------|
| **English Name of Property** | has date of birth |
| **German Name of Property** | hat geburtsdatum |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-date-of-birth> |
| **Graph Representation** | arkumu:hasDateOfBirth |

<br/>
<br/>

### has date of death

|||
|-----------|-----------|
| **English Name of Property** | has date of death |
| **German Name of Property** | hat sterbedatum |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-date-of-death> |
| **Graph Representation** | arkumu:hasDateOfDeath |

<br/>
<br/>

### has depositing university

|||
|-----------|-----------|
| **English Name of Property** | has depositing university |
| **German Name of Property** | hat einliefernde hochschule |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-depositing-university> |
| **Graph Representation** | arkumu:hasDepositingUniversity |

<br/>
<br/>

### has depositor

|||
|-----------|-----------|
| **English Name of Property** | has depositor |
| **German Name of Property** | hat einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-depositor> |
| **Graph Representation** | arkumu:hasDepositor |

<br/>
<br/>

### has depository

|||
|-----------|-----------|
| **English Name of Property** | has depository |
| **German Name of Property** | hat aufbewahrungsort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-depository> |
| **Graph Representation** | arkumu:hasDepository |

<br/>
<br/>

### has derivate copy number

|||
|-----------|-----------|
| **English Name of Property** | has derivate copy number |
| **German Name of Property** | hat derivatkopie-nummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-derivate-copy-number> |
| **Graph Representation** | arkumu:hasDerivateCopyNumber |

<br/>
<br/>

### has description text

|||
|-----------|-----------|
| **English Name of Property** | has description text |
| **German Name of Property** | hat beschreibungstext |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-description-text> |
| **Graph Representation** | arkumu:hasDescriptionText |

<br/>
<br/>

### has digital object

|||
|-----------|-----------|
| **English Name of Property** | has digital object |
| **German Name of Property** | hat digitales objekt |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-digital-object> |
| **Graph Representation** | arkumu:hasDigitalObject |

<br/>
<br/>

### has digital object keyword

|||
|-----------|-----------|
| **English Name of Property** | has digital object keyword |
| **German Name of Property** | hat digitales-objekt-schlagwort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-digital-object-keyword> |
| **Graph Representation** | arkumu:hasDigitalObjectKeyword |

<br/>
<br/>

### has digital object licence

|||
|-----------|-----------|
| **English Name of Property** | has digital object licence |
| **German Name of Property** | hat digitales-objekt-lizenz |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-digital-object-licence> |
| **Graph Representation** | arkumu:hasDigitalObjectLicence |

<br/>
<br/>

### has dimensions

|||
|-----------|-----------|
| **English Name of Property** | has dimensions |
| **German Name of Property** | hat maße |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-dimensions> |
| **Graph Representation** | arkumu:hasDimensions |

<br/>
<br/>

### has DROID metadata

|||
|-----------|-----------|
| **English Name of Property** | has DROID metadata |
| **German Name of Property** | hat DROID-metadaten |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-droid-metadata> |
| **Graph Representation** | arkumu:hasDroidMetadata |

<br/>
<br/>

### has DROID puid

|||
|-----------|-----------|
| **English Name of Property** | has DROID puid |
| **German Name of Property** | hat DROID puid |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-droid-puid> |
| **Graph Representation** | arkumu:hasDroidPuid |

<br/>
<br/>

### has end of activity

|||
|-----------|-----------|
| **English Name of Property** | has end of activity |
| **German Name of Property** | hat wirkungsende |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-end-of-activity> |
| **Graph Representation** | arkumu:hasEndOfActivity |

<br/>
<br/>

### has english commentary

|||
|-----------|-----------|
| **English Name of Property** | has english commentary |
| **German Name of Property** | hat englischen kommentar |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-commentary> |
| **Graph Representation** | arkumu:hasEnglishCommentary |

<br/>
<br/>

### has english content description

|||
|-----------|-----------|
| **English Name of Property** | has english content description |
| **German Name of Property** | hat englische inhaltliche beschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-content-description> |
| **Graph Representation** | arkumu:hasEnglishContentDescription |

<br/>
<br/>

### has english description

|||
|-----------|-----------|
| **English Name of Property** | has english description |
| **German Name of Property** | hat englische beschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-description> |
| **Graph Representation** | arkumu:hasEnglishDescription |

<br/>
<br/>

### has english image description

|||
|-----------|-----------|
| **English Name of Property** | has english image description |
| **German Name of Property** | hat englische bildbeschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-image-description> |
| **Graph Representation** | arkumu:hasEnglishImageDescription |

<br/>
<br/>

### has english name

|||
|-----------|-----------|
| **English Name of Property** | has english name |
| **German Name of Property** | hat englischen namen |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-name> |
| **Graph Representation** | arkumu:hasEnglishName |

<br/>
<br/>

### has english short biography

|||
|-----------|-----------|
| **English Name of Property** | has english short biography |
| **German Name of Property** | hat englische kurzbiografie |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-short-biography> |
| **Graph Representation** | arkumu:hasEnglishShortBiography |

<br/>
<br/>

### has english synonym

|||
|-----------|-----------|
| **English Name of Property** | has english synonym |
| **German Name of Property** | hat englisches synonym |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-synonym> |
| **Graph Representation** | arkumu:hasEnglishSynonym |

<br/>
<br/>

### has english technique commentary

|||
|-----------|-----------|
| **English Name of Property** | has english technique commentary |
| **German Name of Property** | hat kommentar zur technik (englisch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-technique-commentary> |
| **Graph Representation** | arkumu:hasEnglishTechniqueCommentary |

<br/>
<br/>

### has english wikidata label

|||
|-----------|-----------|
| **English Name of Property** | has english wikidata label |
| **German Name of Property** | hat englisches wikidata-label |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-wikidata-label> |
| **Graph Representation** | arkumu:hasEnglishWikidataLabel |

<br/>
<br/>

### has english wikidata synonym

|||
|-----------|-----------|
| **English Name of Property** | has english wikidata synonym |
| **German Name of Property** | hat englisches wikidata-synonym |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-wikidata-synonym> |
| **Graph Representation** | arkumu:hasEnglishWikidataSynonym |

<br/>
<br/>

### has english wording

|||
|-----------|-----------|
| **English Name of Property** | has english wording |
| **German Name of Property** | hat englischen vertragstext |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-english-wording> |
| **Graph Representation** | arkumu:hasEnglishWording |

<br/>
<br/>

### has equipment and software

|||
|-----------|-----------|
| **English Name of Property** | has equipment and software |
| **German Name of Property** | hat equipment und software |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-equipment-and-software> |
| **Graph Representation** | arkumu:hasEquipmentAndSoftware |

<br/>
<br/>

### has event

|||
|-----------|-----------|
| **English Name of Property** | has event |
| **German Name of Property** | hat ereignis |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-event> |
| **Graph Representation** | arkumu:hasEvent |

<br/>
<br/>

### has event beginning

|||
|-----------|-----------|
| **English Name of Property** | has event beginning |
| **German Name of Property** | hat ereignisbeginn |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-event-beginning> |
| **Graph Representation** | arkumu:hasEventBeginning |

<br/>
<br/>

### has event description

|||
|-----------|-----------|
| **English Name of Property** | has event description |
| **German Name of Property** | hat ereignisbeschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-event-description> |
| **Graph Representation** | arkumu:hasEventDescription |

<br/>
<br/>

### has event end

|||
|-----------|-----------|
| **English Name of Property** | has event end |
| **German Name of Property** | hat ereignisende |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-event-end> |
| **Graph Representation** | arkumu:hasEventEnd |

<br/>
<br/>

### has event place

|||
|-----------|-----------|
| **English Name of Property** | has event place |
| **German Name of Property** | hat ereignisort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-event-place> |
| **Graph Representation** | arkumu:hasEventPlace |

<br/>
<br/>

### has event property

|||
|-----------|-----------|
| **English Name of Property** | has event property |
| **German Name of Property** | hat ereigniseigenschaft |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-event-property> |
| **Graph Representation** | arkumu:hasEventProperty |

<br/>
<br/>

### has event type

|||
|-----------|-----------|
| **English Name of Property** | has event type |
| **German Name of Property** | hat ereignistyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-event-type> |
| **Graph Representation** | arkumu:hasEventType |

<br/>
<br/>

### has ExifTool metadata

|||
|-----------|-----------|
| **English Name of Property** | has ExifTool metadata |
| **German Name of Property** | hat ExifTool-metadaten |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-exiftool-metadata> |
| **Graph Representation** | arkumu:hasExiftoolMetadata |

<br/>
<br/>

### has existing licence agreement

|||
|-----------|-----------|
| **English Name of Property** | has existing licence agreement |
| **German Name of Property** | hat bestehenden lizenzvertrag |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-existing-licence-agreement> |
| **Graph Representation** | arkumu:hasExistingLicenceAgreement |

<br/>
<br/>

### has external inventory number

|||
|-----------|-----------|
| **English Name of Property** | has external inventory number |
| **German Name of Property** | has externe inventarnummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-external-inventory-number> |
| **Graph Representation** | arkumu:hasExternalInventoryNumber |

<br/>
<br/>

### has file licence document

|||
|-----------|-----------|
| **English Name of Property** | has file licence document |
| **German Name of Property** | hat dateiabfrage-dokument |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-file-licence-document> |
| **Graph Representation** | arkumu:hasFileLicenceDocument |

<br/>
<br/>

### has file name

|||
|-----------|-----------|
| **English Name of Property** | has file name |
| **German Name of Property** | hat Dateiname |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-file-name> |
| **Graph Representation** | arkumu:hasFileName |

<br/>
<br/>

### has file path

|||
|-----------|-----------|
| **English Name of Property** | has file path |
| **German Name of Property** | hat Dateipfad |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-file-path> |
| **Graph Representation** | arkumu:hasFilePath |

<br/>
<br/>

### has file size

|||
|-----------|-----------|
| **English Name of Property** | has file size |
| **German Name of Property** | hat Dateigröße |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-file-size> |
| **Graph Representation** | arkumu:hasFileSize |

<br/>
<br/>

### has filmportal.de category ID

|||
|-----------|-----------|
| **English Name of Property** | has filmportal.de category ID |
| **German Name of Property** | hat filmportal.de-kategorie-id |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-filmportalde-category-id> |
| **Graph Representation** | arkumu:hasFilmportalDeCategoryId |

<br/>
<br/>

### has frame rate

|||
|-----------|-----------|
| **English Name of Property** | has frame rate |
| **German Name of Property** | hat Bildfrequenz |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-frame-rate> |
| **Graph Representation** | arkumu:hasFrameRate |

<br/>
<br/>

### has gender

|||
|-----------|-----------|
| **English Name of Property** | has gender |
| **German Name of Property** | hat geschlecht |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-gender> |
| **Graph Representation** | arkumu:hasGender |

<br/>
<br/>

### has genesis type

|||
|-----------|-----------|
| **English Name of Property** | has genesis type |
| **German Name of Property** | hat Entstehungstyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-genesis-type> |
| **Graph Representation** | arkumu:hasGenesisType |

<br/>
<br/>

### has german commentary

|||
|-----------|-----------|
| **English Name of Property** | has german commentary |
| **German Name of Property** | hat deutschen kommentar |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-commentary> |
| **Graph Representation** | arkumu:hasGermanCommentary |

<br/>
<br/>

### has german content description

|||
|-----------|-----------|
| **English Name of Property** | has german content description |
| **German Name of Property** | hat deutsche inhaltliche beschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-content-description> |
| **Graph Representation** | arkumu:hasGermanContentDescription |

<br/>
<br/>

### has german description

|||
|-----------|-----------|
| **English Name of Property** | has german description |
| **German Name of Property** | hat deutsche beschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-description> |
| **Graph Representation** | arkumu:hasGermanDescription |

<br/>
<br/>

### has german image description

|||
|-----------|-----------|
| **English Name of Property** | has german image description |
| **German Name of Property** | hat deutsche Bildbeschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-image-description> |
| **Graph Representation** | arkumu:hasGermanImageDescription |

<br/>
<br/>

### has german name

|||
|-----------|-----------|
| **English Name of Property** | has german name |
| **German Name of Property** | hat deutschen namen |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-name> |
| **Graph Representation** | arkumu:hasGermanName |

<br/>
<br/>

### has german short biography

|||
|-----------|-----------|
| **English Name of Property** | has german short biography |
| **German Name of Property** | hat deutsche kurzbiografie |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-short-biography> |
| **Graph Representation** | arkumu:hasGermanShortBiography |

<br/>
<br/>

### has german synonym

|||
|-----------|-----------|
| **English Name of Property** | has german synonym |
| **German Name of Property** | hat deutsches synonym |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-synonym> |
| **Graph Representation** | arkumu:hasGermanSynonym |

<br/>
<br/>

### has german technique commentary

|||
|-----------|-----------|
| **English Name of Property** | has german technique commentary |
| **German Name of Property** | hat kommentar zur technik (deutsch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-technique-commentary> |
| **Graph Representation** | arkumu:hasGermanTechniqueCommentary |

<br/>
<br/>

### has german wikidata description

|||
|-----------|-----------|
| **English Name of Property** | has german wikidata description |
| **German Name of Property** | hat englische wikidata-beschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-wikidata-description> |
| **Graph Representation** | arkumu:hasGermanWikidataDescription |

<br/>
<br/>

### has german wikidata label

|||
|-----------|-----------|
| **English Name of Property** | has german wikidata label |
| **German Name of Property** | hat deutsches wikidata-label |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-wikidata-label> |
| **Graph Representation** | arkumu:hasGermanWikidataLabel |

<br/>
<br/>

### has german wikidata synonym

|||
|-----------|-----------|
| **English Name of Property** | has german wikidata synonym |
| **German Name of Property** | hat deutsches wikidata-synonym |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-wikidata-synonym> |
| **Graph Representation** | arkumu:hasGermanWikidataSynonym |

<br/>
<br/>

### has german wording

|||
|-----------|-----------|
| **English Name of Property** | has german wording |
| **German Name of Property** | hat deutschen Vertragstext |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-german-wording> |
| **Graph Representation** | arkumu:hasGermanWording |

<br/>
<br/>

### has GND ID

|||
|-----------|-----------|
| **English Name of Property** | has GND ID |
| **German Name of Property** | hat GND-nummer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-gnd-id> |
| **Graph Representation** | arkumu:hasGndId |

<br/>
<br/>

### has GND ID (female)

|||
|-----------|-----------|
| **English Name of Property** | has GND ID (female) |
| **German Name of Property** | hat GND-nummer (weiblich) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-gnd-id-female> |
| **Graph Representation** | arkumu:hasGndIdFemale |

<br/>
<br/>

### has GND ID (group)

|||
|-----------|-----------|
| **English Name of Property** | has GND ID (group) |
| **German Name of Property** | hat GND-nummer (gruppe) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-gnd-id-group> |
| **Graph Representation** | arkumu:hasGndIdGroup |

<br/>
<br/>

### has GND ID (male)

|||
|-----------|-----------|
| **English Name of Property** | has GND ID (male) |
| **German Name of Property** | hat GND-nummer (männlich) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-gnd-id-male> |
| **Graph Representation** | arkumu:hasGndIdMale |

<br/>
<br/>

### has ID at depositor

|||
|-----------|-----------|
| **English Name of Property** | has ID at depositor |
| **German Name of Property** | hat ID beim einlieferer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-id-at-depositor> |
| **Graph Representation** | arkumu:hasIdAtDepositor |

<br/>
<br/>

### has information storage medium

|||
|-----------|-----------|
| **English Name of Property** | has information storage medium |
| **German Name of Property** | hat informationsträger |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-information-storage-medium> |
| **Graph Representation** | arkumu:hasInformationStorageMedium |

<br/>
<br/>

### has information storage medium type

|||
|-----------|-----------|
| **English Name of Property** | has information storage medium type |
| **German Name of Property** | hat informationsträgertyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-information-storage-medium-type> |
| **Graph Representation** | arkumu:hasInformationStorageMediumType |

<br/>
<br/>

### has internal commentary

|||
|-----------|-----------|
| **English Name of Property** | has internal commentary |
| **German Name of Property** | hat internen kommentar |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-internal-commentary> |
| **Graph Representation** | arkumu:hasInternalCommentary |

<br/>
<br/>

### has is arkumu preview

|||
|-----------|-----------|
| **English Name of Property** | has is arkumu preview |
| **German Name of Property** | hat ist Vorschaubild |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-is-arkumu-preview> |
| **Graph Representation** | arkumu:hasIsArkumuPreview |

<br/>
<br/>

### has is poster image

|||
|-----------|-----------|
| **English Name of Property** | has is poster image |
| **German Name of Property** | hat ist Vorschaubild |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-is-poster-image> |
| **Graph Representation** | arkumu:hasIsPosterImage |

<br/>
<br/>

### has ISO 639-1 code

|||
|-----------|-----------|
| **English Name of Property** | has ISO 639-1 code |
| **German Name of Property** | hat ISO 639-1-code |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-iso-639-1-code> |
| **Graph Representation** | arkumu:hasIso639-1-Code |

<br/>
<br/>

### has ISO 639-2(B) code

|||
|-----------|-----------|
| **English Name of Property** | has ISO 639-2(B) code |
| **German Name of Property** | hat ISO 639-2(B)-code |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-iso-639-2b-code> |
| **Graph Representation** | arkumu:hasIso639-2-B-Code |

<br/>
<br/>

### has ISO 639-2(T) code

|||
|-----------|-----------|
| **English Name of Property** | has ISO 639-2(T) code |
| **German Name of Property** | hat ISO 639-2(T)-code |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-iso-639-2t-code> |
| **Graph Representation** | hasIso639-2-T-Code |

<br/>
<br/>

### has JHOVE metadata

|||
|-----------|-----------|
| **English Name of Property** | has JHOVE metadata |
| **German Name of Property** | hat JHOVE-metadaten |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-jhove-metadata> |
| **Graph Representation** | arkumu:hasJhoveMetadata |

<br/>
<br/>

### has JHOVE status

|||
|-----------|-----------|
| **English Name of Property** | has JHOVE status |
| **German Name of Property** | hat JHOVE-dateistatus |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-jhove-status> |
| **Graph Representation** | arkumu:hasJhoveStatus |

<br/>
<br/>

### has keyword

|||
|-----------|-----------|
| **English Name of Property** | has keyword |
| **German Name of Property** | hat schlagwort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-keyword> |
| **Graph Representation** | arkumu:hasKeyword |

<br/>
<br/>

### has label

|||
|-----------|-----------|
| **English Name of Property** | has label |
| **German Name of Property** | hat label |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-label> |
| **Graph Representation** | arkumu:hasLabel |

<br/>
<br/>

### has language

|||
|-----------|-----------|
| **English Name of Property** | has language |
| **German Name of Property** | hat sprache |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-language> |
| **Graph Representation** | arkumu:hasLanguage |

<br/>
<br/>

### has language version

|||
|-----------|-----------|
| **English Name of Property** | has language version |
| **German Name of Property** | hat sprachversion |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-language-version> |
| **Graph Representation** | arkumu:hasLanguageVersion |

<br/>
<br/>

### has latitude

|||
|-----------|-----------|
| **English Name of Property** | has latitude |
| **German Name of Property** | hat breitengrad |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-latitude> |
| **Graph Representation** | arkumu:hasLatitude |

<br/>
<br/>

### has LCCN ID

|||
|-----------|-----------|
| **English Name of Property** | has LCCN ID |
| **German Name of Property** | hat LCCN-id |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-lccn-id> |
| **Graph Representation** | arkumu:hasLccnId |

<br/>
<br/>

### has legal rights holder

|||
|-----------|-----------|
| **English Name of Property** | has legal rights holder |
| **German Name of Property** | hat eigentümer:in |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-legal-rights-holder> |
| **Graph Representation** | arkumu:hasLegalRightsHolder |

<br/>
<br/>

### has LIDO Terminology ID

|||
|-----------|-----------|
| **English Name of Property** | has LIDO Terminology ID |
| **German Name of Property** | hat LIDO-Terminologie-id |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-lido-terminology-id> |
| **Graph Representation** | arkumu:hasLidoTerminologyId |

<br/>
<br/>

### has longitude

|||
|-----------|-----------|
| **English Name of Property** | has longitude |
| **German Name of Property** | hat längengrad |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-longitude> |
| **Graph Representation** | arkumu:hasLongitude |

<br/>
<br/>

### has material keyword

|||
|-----------|-----------|
| **English Name of Property** | has material keyword |
| **German Name of Property** | hat materialschlagwort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-material-keyword> |
| **Graph Representation** | arkumu:hasMaterialKeyword |

<br/>
<br/>

### has media type

|||
|-----------|-----------|
| **English Name of Property** | has media type |
| **German Name of Property** | hat Medientyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-media-type> |
| **Graph Representation** | arkumu:hasMediaType |

<br/>
<br/>

### has MediaInfo metadata

|||
|-----------|-----------|
| **English Name of Property** | has MediaInfo metadata |
| **German Name of Property** | hat MediaInfo-metadaten |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-mediainfo-metadata> |
| **Graph Representation** | arkumu:hasMediainfoMetadata |

<br/>
<br/>

### has MIME type

|||
|-----------|-----------|
| **English Name of Property** | has MIME type |
| **German Name of Property** | hat MIME type |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-mime-type> |
| **Graph Representation** | arkumu:hasMimeType |

<br/>
<br/>

### has new arkumu licence agreement

|||
|-----------|-----------|
| **English Name of Property** | has new arkumu licence agreement |
| **German Name of Property** | hat neuen arkumu lizenzvertrag |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-new-arkumu-licence-agreement> |
| **Graph Representation** | arkumu:hasNewArkumuLicenceAgreement |

<br/>
<br/>

### has non-public name

|||
|-----------|-----------|
| **English Name of Property** | has non-public name |
| **German Name of Property** | hat nicht-öffentlichen Namen |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-non-public-name> |
| **Graph Representation** | arkumu:hasNon-publicName |

<br/>
<br/>

### has ORCID

|||
|-----------|-----------|
| **English Name of Property** | has ORCID |
| **German Name of Property** | hat ORCID |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-orcid> |
| **Graph Representation** | arkumu:hasOrcid |

<br/>
<br/>

### has organisational unit

|||
|-----------|-----------|
| **English Name of Property** | has organisational unit |
| **German Name of Property** | hat organisationseinheit |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-organisational-unit> |
| **Graph Representation** | arkumu:hasOrganisationalUnit |

<br/>
<br/>

### has original language

|||
|-----------|-----------|
| **English Name of Property** | has original language |
| **German Name of Property** | hat originalsprache |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-original-language> |
| **Graph Representation** | arkumu:hasOriginalLanguage |

<br/>
<br/>

### has other authority file

|||
|-----------|-----------|
| **English Name of Property** | has other authority file |
| **German Name of Property** | hat andere normdatei |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-other-authority-file> |
| **Graph Representation** | arkumu:hasOtherAuthorityFile |

<br/>
<br/>

### has owner

|||
|-----------|-----------|
| **English Name of Property** | has owner |
| **German Name of Property** | hat besitzer:in |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-owner> |
| **Graph Representation** | arkumu:hasOwner |

<br/>
<br/>

### has PBCore link

|||
|-----------|-----------|
| **English Name of Property** | has PBCore link |
| **German Name of Property** | hat PBCore-link |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-pbcore-link> |
| **Graph Representation** | arkumu:hasPbcoreLink |

<br/>
<br/>

### has pdf

|||
|-----------|-----------|
| **English Name of Property** | has pdf |
| **German Name of Property** | has pdf |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-pdf> |
| **Graph Representation** | arkumu:hasPdf |

<br/>
<br/>

### has physical object

|||
|-----------|-----------|
| **English Name of Property** | has physical object |
| **German Name of Property** | hat physisches objekt |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-physical-object> |
| **Graph Representation** | arkumu:hasPhysicalObject |

<br/>
<br/>

### has place of activity

|||
|-----------|-----------|
| **English Name of Property** | has place of activity |
| **German Name of Property** | hat wirkungsort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-place-of-activity> |
| **Graph Representation** | arkumu:hasPlaceOfActivity |

<br/>
<br/>

### has place of birth

|||
|-----------|-----------|
| **English Name of Property** | has place of birth |
| **German Name of Property** | hat geburtsort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-place-of-birth> |
| **Graph Representation** | arkumu:hasPlaceOfBirth |

<br/>
<br/>

### has place of death

|||
|-----------|-----------|
| **English Name of Property** | has place of death |
| **German Name of Property** | hat sterbeort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-place-of-death> |
| **Graph Representation** | arkumu:hasPlaceOfDeath |

<br/>
<br/>

### has place of dissolution

|||
|-----------|-----------|
| **English Name of Property** | has place of dissolution |
| **German Name of Property** | hat auflösungsort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-place-of-dissolution> |
| **Graph Representation** | arkumu:hasPlaceOfDissolution |

<br/>
<br/>

### has place of foundation

|||
|-----------|-----------|
| **English Name of Property** | has place of foundation |
| **German Name of Property** | hat gründungsort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-place-of-foundation> |
| **Graph Representation** | arkumu:hasPlaceOfFoundation |

<br/>
<br/>

### has place type

|||
|-----------|-----------|
| **English Name of Property** | has place type |
| **German Name of Property** | hat ortart |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-place-type> |
| **Graph Representation** | arkumu:hasPlaceType |

<br/>
<br/>

### has preceding title

|||
|-----------|-----------|
| **English Name of Property** | has preceding title |
| **German Name of Property** | hat vorangestellten titel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-preceding-title> |
| **Graph Representation** | arkumu:hasPrecedingTitle |

<br/>
<br/>

### has preferred subtitle

|||
|-----------|-----------|
| **English Name of Property** | has preferred subtitle |
| **German Name of Property** | hat bevorzugten untertitel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-preferred-subtitle> |
| **Graph Representation** | arkumu:hasPreferredSubtitle |

<br/>
<br/>

### has preferred title

|||
|-----------|-----------|
| **English Name of Property** | has preferred title |
| **German Name of Property** | hat bevorzugten titel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-preferred-title> |
| **Graph Representation** | arkumu:hasPreferredTitle |

<br/>
<br/>

### has preservation type

|||
|-----------|-----------|
| **English Name of Property** | has preservation type |
| **German Name of Property** | hat Erhaltungstyp |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-preservation-type> |
| **Graph Representation** | arkumu:hasPreservationType |

<br/>
<br/>

### has producer

|||
|-----------|-----------|
| **English Name of Property** | has producer |
| **German Name of Property** | hat Hersteller |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-producer> |
| **Graph Representation** | arkumu:hasProducer |

<br/>
<br/>

### has product ID

|||
|-----------|-----------|
| **English Name of Property** | has product ID |
| **German Name of Property** | hat produkt-id |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-product-id> |
| **Graph Representation** | arkumu:hasProductId |

<br/>
<br/>

### has profession or activity

|||
|-----------|-----------|
| **English Name of Property** | has profession or activity |
| **German Name of Property** | hat beruf oder tätigkeit |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-profession-or-activity> |
| **Graph Representation** | arkumu:hasProfessionOrActivity |

<br/>
<br/>

### has project category

|||
|-----------|-----------|
| **English Name of Property** | has project category |
| **German Name of Property** | hat projektkategorie |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-project-category> |
| **Graph Representation** | arkumu:hasProjectCategory |

<br/>
<br/>

### has project description

|||
|-----------|-----------|
| **English Name of Property** | has project description |
| **German Name of Property** | hat projektbeschreibung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-project-description> |
| **Graph Representation** | arkumu:hasProjectDescription |

<br/>
<br/>

### has project property

|||
|-----------|-----------|
| **English Name of Property** | has project property |
| **German Name of Property** | hat projekteigenschaft |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-project-property> |
| **Graph Representation** | arkumu:hasProjectProperty |

<br/>
<br/>

### has project type

|||
|-----------|-----------|
| **English Name of Property** | has project type |
| **German Name of Property** | hat projektart |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-project-type> |
| **Graph Representation** | arkumu:hasProjectType |

<br/>
<br/>

### has provenance

|||
|-----------|-----------|
| **English Name of Property** | has provenance |
| **German Name of Property** | hat provenienz |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-provenance> |
| **Graph Representation** | arkumu:hasProvenance |

<br/>
<br/>

### has related actor

|||
|-----------|-----------|
| **English Name of Property** | has related actor |
| **German Name of Property** | hat verknüpfte:n Akteur:in |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-related-actor> |
| **Graph Representation** | arkumu:hasRelatedActor |

<br/>
<br/>

### has related event

|||
|-----------|-----------|
| **English Name of Property** | has related event |
| **German Name of Property** | hat verknüpftes ereignis |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-related-event> |
| **Graph Representation** | arkumu:hasRelatedEvent |

<br/>
<br/>

### has related project

|||
|-----------|-----------|
| **English Name of Property** | has related project |
| **German Name of Property** | hat verknüpftes projekt |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-related-project> |
| **Graph Representation** | arkumu:hasRelatedProject |

<br/>
<br/>

### has rights status

|||
|-----------|-----------|
| **English Name of Property** | has rights status |
| **German Name of Property** | hat rechtsstatus |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-rights-status> |
| **Graph Representation** | arkumu:hasRightsStatus |

<br/>
<br/>

### has significant properties (english)

|||
|-----------|-----------|
| **English Name of Property** | has significant properties (english) |
| **German Name of Property** | hat wesentliche eigenschaften (englisch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-significant-properties-english> |
| **Graph Representation** | arkumu:hasSignificantPropertiesEnglish |

<br/>
<br/>

### has significant properties (german)

|||
|-----------|-----------|
| **English Name of Property** | has significant properties (german) |
| **German Name of Property** | hat wesentliche eigenschaften (deutsch) |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-significant-properties-german> |
| **Graph Representation** | arkumu:hasSignificantPropertiesGerman |

<br/>
<br/>

### has sorting number

|||
|-----------|-----------|
| **English Name of Property** | has sorting number |
| **German Name of Property** | hat sortiernummre |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-sorting-number> |
| **Graph Representation** | arkumu:hasSortingNumber |

<br/>
<br/>

### has subtitle language

|||
|-----------|-----------|
| **English Name of Property** | has subtitle language |
| **German Name of Property** | hat untertitelsprache |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-subtitle-language> |
| **Graph Representation** | arkumu:hasSubtitleLanguage |

<br/>
<br/>

### has system requirements

|||
|-----------|-----------|
| **English Name of Property** | has system requirements |
| **German Name of Property** | hat systemvoraussetzungen |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-system-requirements> |
| **Graph Representation** | arkumu:hasSystemRequirements |

<br/>
<br/>

### has technique keyword

|||
|-----------|-----------|
| **English Name of Property** | has technique keyword |
| **German Name of Property** | hat technikschlagwort |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-technique-keyword> |
| **Graph Representation** | arkumu:hasTechniqueKeyword |

<br/>
<br/>

### has television standard

|||
|-----------|-----------|
| **English Name of Property** | has television standard |
| **German Name of Property** | hat Fernsehnorm |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-television-standard> |
| **Graph Representation** | arkumu:hasTelevisionStandard |

<br/>
<br/>

### has trailing title

|||
|-----------|-----------|
| **English Name of Property** | has trailing title |
| **German Name of Property** | hat nachgestellten titel |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-trailing-title> |
| **Graph Representation** | arkumu:hasTrailingTitle |

<br/>
<br/>

### has uri

|||
|-----------|-----------|
| **English Name of Property** | has uri |
| **German Name of Property** | has uri |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-uri> |
| **Graph Representation** | arkumu:hasUri |

<br/>
<br/>

### has VIAF ID

|||
|-----------|-----------|
| **English Name of Property** | has VIAF ID |
| **German Name of Property** | hat VIAF-id |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-viaf-id> |
| **Graph Representation** | arkumu:hasViafId |

<br/>
<br/>

### has website

|||
|-----------|-----------|
| **English Name of Property** | has website |
| **German Name of Property** | hat webseite |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-website> |
| **Graph Representation** | arkumu:hasWebsite |

<br/>
<br/>

### has Wikidata ID

|||
|-----------|-----------|
| **English Name of Property** | has Wikidata ID |
| **German Name of Property** | hat Wikidata-id |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-wikidata-id> |
| **Graph Representation** | arkumu:hasWikidataId |

<br/>
<br/>


### is compilation

|||
|-----------|-----------|
| **English Name of Property** | is compilation |
| **German Name of Property** | ist kompilation |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#is-compilation> |
| **Graph Representation** | arkumu:isCompilation |

<br/>
<br/>

### is file package

|||
|-----------|-----------|
| **English Name of Property** | is file package |
| **German Name of Property** | ist Dateipaket |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#is-file-package> |
| **Graph Representation** | arkumu:isFilePackage |

<br/>
<br/>

## Contextual Properties

```Kontextuelle Eigenschaften```

---

### has event role

|||
|-----------|-----------|
| **Placed in Context to (English)** | [Actor](#actor) ⇒ [Event](#event) |
| **Placed in Context to (German)** | [Akteur:in](#actor) ⇒ [Ereignis](#event) |
| **English Name of Property** | has event role |
| **German Name of Property** | hat ereignisrolle |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-event-role> |
| **Graph Representation** | arkumu:hasEventRole |

<br/>
<br/>

### is leistungsschutzrechinhaber:in

|||
|-----------|-----------|
| **Placed in Context to (English)** | [Actor](#actor) ⇒ [Event](#event) |
| **Placed in Context to (German)** | [Akteur:in](#actor) ⇒ [Ereignis](#event) |
| **English Name of Property** | is leistungsschutzrechinhaber:in |
| **German Name of Property** | ist leistungsschutzrechinhaber:in |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#is-leistungsschutzrechinhaberin> |
| **Graph Representation** | arkumu:isLeistungsschutzrechinhaberIn |

<br/>
<br/>


### is uncertainly attributed

|||
|-----------|-----------|
| **Placed in Context to (English)** | [Actor](#actor) ⇒ [Event](#event) |
| **Placed in Context to (German)** | [Akteur:in](#actor) ⇒ [Ereignis](#event) |
| **English Name of Property** | is uncertainly attributed |
| **German Name of Property** | ist unsicher zugeschrieben |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#is-uncertainly-attributed> |
| **Graph Representation** | arkumu:isUncertainlyAttributed |

<br/>
<br/>

### is urheber:in

|||
|-----------|-----------|
| **Placed in Context to (English)** | [Actor](#actor) ⇒ [Event](#event) |
| **Placed in Context to (German)** | [Akteur:in](#actor) ⇒ [Ereignis](#event) |
| **English Name of Property** | is urheber:in |
| **German Name of Property** | ist urheber:in |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#is-urheberin> |
| **Graph Representation** | arkumu:isUrheberIn |

<br/>
<br/>

## Further Properties

```Weitere Eigenschaften```

---

### has aspect ratio

|||
|-----------|-----------|
| **English Name of Property** | has aspect ratio |
| **German Name of Property** | hat bildseitenverhältnis |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-aspect-ratio> |
| **Graph Representation** | arkumu:hasAspectRatio |

<br/>
<br/>

### has audio channels

|||
|-----------|-----------|
| **English Name of Property** | has audio channels |
| **German Name of Property** | hat Tonkanäle |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-audio-channels> |
| **Graph Representation** | arkumu:hasAudioChannels|

<br/>
<br/>

### has audio recording technique

|||
|-----------|-----------|
| **English Name of Property** | has audio recording technique |
| **German Name of Property** | hat Audio-Aufnahmetechnik |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-audio-recording-technique> |
| **Graph Representation** | arkumu:hasAudioRecordingTechnique|

<br/>
<br/>

### has duration

|||
|-----------|-----------|
| **English Name of Property** | has duration |
| **German Name of Property** | hat dauer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-duration> |
| **Graph Representation** | arkumu:hasDuration |

<br/>
<br/>

### has equalizer

|||
|-----------|-----------|
| **English Name of Property** | has equalizer |
| **German Name of Property** | hat equalizer |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-equalizer> |
| **Graph Representation** | arkumu:hasEqualizer |

<br/>
<br/>

### has frequency

|||
|-----------|-----------|
| **English Name of Property** | has frequency |
| **German Name of Property** | hat frequenz |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-frequency> |
| **Graph Representation** | arkumu:hasFrequency |

<br/>
<br/>

### has instrumentation

|||
|-----------|-----------|
| **English Name of Property** | has instrumentation |
| **German Name of Property** | hat Instrumentierung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-instrumentation> |
| **Graph Representation** | arkumu:hasInstrumentation |

<br/>
<br/>

### has musical key

|||
|-----------|-----------|
| **English Name of Property** | has musical key |
| **German Name of Property** | hat tonart |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-key> |
| **Graph Representation** | arkumu:hasKey|

<br/>
<br/>

### has playback speed

|||
|-----------|-----------|
| **English Name of Property** | has playback speed |
| **German Name of Property** | hat abspielgeschwindigkeit |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-playback-speed> |
| **Graph Representation** | arkumu:hasPlaybackSpeed |

<br/>
<br/>

### has photographic process

|||
|-----------|-----------|
| **English Name of Property** | has photographic process |
| **German Name of Property** | hat Filmentwicklung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-photographic-process > |
| **Graph Representation** | arkumu:hasPhotographicProcess  |

<br/>
<br/>

### has production format

|||
|-----------|-----------|
| **English Name of Property** | has production format |
| **German Name of Property** | hat produktionsformat |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-production-format> |
| **Graph Representation** | arkumu:hasProductionFormat |

<br/>
<br/>

### has sound format

|||
|-----------|-----------|
| **English Name of Property** | has sound format |
| **German Name of Property** | hat Tonformat |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-sound-format> |
| **Graph Representation** | arkumu:hasSoundFormat |

<br/>
<br/>

### has sound mix version

|||
|-----------|-----------|
| **English Name of Property** | has sound mix version |
| **German Name of Property** | hat Tonmischfassung |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-sound-mix-version> |
| **Graph Representation** | arkumu:hasSoundMixVersion |

<br/>
<br/>

### has spatial sound

|||
|-----------|-----------|
| **English Name of Property** | has spatial sound |
| **German Name of Property** | hat Raumklang |
| **URI** | <https://docs.arkumu.nrw/documentation/data-model/graph-model#has-spatial-sound> |
| **Graph Representation** | arkumu:hasSpatialSound |

<br/>
<br/>

