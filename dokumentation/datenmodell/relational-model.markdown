---
layout: arkumu-docs
title: ❗ Relationales Modell
order: 3.1.1
permalink: /documentation/data-model/relational-model
---

`Relational Model`

<br/>

**Deutsch:**

Die nachfolgenden Tabellen dokumentieren die Struktur des arkumu.nrw-Datenmodells in seiner relationalen Form. Jede Entität (z.B. Projekt, Ereignis, Akteur:in) wird dabei in einer eigenen Tabelle dargestellt, die sämtliche dazugehörigen Felder und deren Spezifikationen beschreibt. Die Tabellen folgen einem einheitlichen Aufbau mit den folgenden Spalten:

| **German Name of Field/English Name of Field**<br/>(Deutscher Name des Feldes / Englischer Name des Feldes) | Diese Spalten enthalten die deutschsprachige und englischsprachige Bezeichnung des jeweiligen Datenfeldes. Die Namen sind als Links formatiert, die zum entsprechenden [Graphenmodell-Eintrag](/documentation/data-model/graph-model) führen. |
| **Min-Max Occurence**<br/>(Minimales-Maximales Vorkommen) | Diese Spalte gibt an, wie oft ein Feld innerhalb eines einzelnen Datensatzes mindestens und höchstens vorkommen und ausgefüllt werden kann bzw. muss, damit dieser gespeichert werden kann:<br/><br/>`1` bedeutet, dass dieses Feld genau einmal im Formular vorkommt und ausgefüllt werden muss (Pflichtfeld).<br/>`0-1` bedeutet, dass das Feld einamal im Formular vorkommt und optinal ausgefüllt werden kann.<br/>`1-n` bedeutet, dass das Feld mindestens einmal ausgefüllt werden muss und beliebig oft wiederholt werden kann (Pflichtfeld mit zusätlichen Wiederholungen).<br/>`0-n` bedeutet, dass das Feld optional ist und beliebig oft ausgefüllt werden kann.<br/>`[1]` (in eckigen Klammern) bedeutet, dass das Feld bedingt Pflicht ist, wenn das darüber stehenden Feld verwendet wird (Bedingtes Pflichtfeld).<br/>`0/1` bedeutet, dass der Kontext entweder zutrifft oder nicht.<br/><br/>Zusätzliche Hinweise wie `(created automatically)` oder `(planned; created automatically)` kennzeichnen Felder, die nicht manuell erfasst, sondern systemseitig generiert werden. |
| **Multi-Value**<br/>(Mehrfachwerte) | Diese Spalte zeigt an, ob in einem einzelnen Feld mehrere (einzelne) Werte gespeichert werden können. Die Kennzeichnung erfolgt durch:<br/><br/>`⨉` (Kreuz): Das Feld nimmt nur einen einzelnen Wert auf<br/>`✓` (Häkchen): Das Feld kann mehrere Werte aufnehmen<br/><br/> Wichtig ist dabei die Unterscheidung zwischen echten Multi-Value-Feldern und Freitextfeldern: Ein Freitextfeld wie "Provenienz" kann zwar inhaltlich Informationen über mehrere Besitzverhältnisse enthalten, technisch handelt es sich aber um ein einzelnes Feld, in dem keine Werte getrennt werden. Bei Multi-Value-Feldern wird zusätzlich die Art der Mehrfachwerteingabe spezifiziert:<br/><br/><br/>`(multi select)`: Mehrere Werte können aus einer vordefinierten oder erweiterbaren Liste ausgewählt werden.<a href="/assets/images/multi_select_example.PNG"><img src="/assets/images/multi_select_example.PNG" style="width: 70%; height: auto; margin-left: 0px;"></a><br/>`(multi create)`: Einträge in einer Entität können via Eingabemasken direkt aus einer anderen Entität erstellt werden, z.B. Projektbeschreibungen in einem Projekt.<a href="/assets/images/multi_create_example.PNG"><img src="/assets/images/multi_create_example.PNG" style="width: 70%; height: auto; margin-left: 0px;"></a><br/>`(multi file upload)`: Erlaubt das Hochladen mehrerer Dateien.<br/>`(comma separated)`: Mehrere Werte werden durch Komma getrennt in einem Feld eingegeben.<br/>`(semicolon separated)`: Mehrere Werte werden durch Semikolon getrennt in einem Feld eingegeben.<br/>`(linebreak separated)`: Mehrere Werte werden durch Zeilenumbruch getrennt in einem Feld eingegeben.<br/>`(linebreak separated; comma separated on import)`: Mehrere Werte werden durch Zeilenumbrüche getrennt erfasst, beim Import aber kommagetrennt verarbeitet. |
| **Connection**<br/>(Verbindungstyp)| Diese Spalte beschreibt die Art der relationalen Beziehung zwischen der aktuellen Entität und anderen Entitäten im Datenmodell. Es werden drei grundlegende Verbindungstypen unterschieden:<br/><br/> `many-to-one` (viele-zu-eins): Mehrere Datensätze der aktuellen Entität können auf denselben Datensatz einer anderen Entität verweisen. Beispiel: Viele Projekte können derselben Einliefernden Hochschule zugeordnet sein, aber jedes Projekt hat genau eine Einliefernde Hochschule.<br/> `one-to-many` (eins-zu-viele): Ein Datensatz der aktuellen Entität kann mit mehreren Datensätzen einer anderen Entität verbunden sein, wobei diese ausschließlich zur aktuellen Entität gehören. Beispiel: Ein Projekt kann mehrere Projektbeschreibungen haben, aber jede Projektbeschreibung gehört zu genau zu einem Projekt.<br/>`many-to-many` (viele-zu-viele): Mehrere Datensätze der aktuellen Entität können mit mehreren Datensätzen einer anderen Entität verbunden sein, wobei die Zuordnungen in beide Richtungen mehrfach möglich sind. Beispiel: Ein Projekt kann mehrere Schlagworte haben, und dasselbe Schlagwort kann in mehreren Projekten auftauchen.<br/><br/>Jede Verbindungsangabe wird durch einen zusätzlichen erläuternden Text ausformuliert, der die Beziehung aus beiden Perspektiven beschreibt und die praktische Bedeutung verdeutlicht. |
| **Points to Entity**<br/>(Verweist auf Entität)| Diese Spalte gibt an, auf welche andere Entität innerhalb des arkumu.nrw-Datenmodells das jeweilige Feld verweist. Die Angaben sind als interne Links formatiert, die zum entsprechenden Eintrag in diesem Datenmodell führen. Bei abgeleiteten Entitäten wird die Herkunft gekennzeichnet, z.B. `Depositing University - Derived from User`, was bedeutet, dass die Einliefernde Hochschule aus dem/der Benutzer:in abgeleitet wird. |
| **German Definition/English Definition**<br/>(Deutsche Definition/Englische Definition) | Diese Spalten enthalten kurze prägnante Beschreibungen, welche Informationen in einem Feld gespeichert werden. |
| **German Note/English Note**<br/>(Deutscher Kommentar / Englischer Kommentar) | Diese Spalten bieten Raum für zusätzliche Hinweise, Erläuterungen oder Kontextinformationen, die für das Verständnis oder die korrekte Nutzung des Feldes wichtig sind. Die Kommentare können beispielsweise auf Formatvorgaben, Nutzungsrichtlinien oder Besonderheiten bei der Datenerfassung hinweisen. |

Diese Dokumentation konzentriert sich bewusst auf die fachliche Komponente des Datenmodells und verzichtet auf technische Implementierungsdetails. Es werden weder technische ID-Felder (Primärschlüssel, Fremdschlüssel) noch Dateitypen (VARCHAR, INT, BOOLEAN etc.) aufgeführt, wie man sie aus klassischen Datenbankschemas kennt. Noch listet diese Dokumentation einfache Kreuztabellen auf, die lediglich (aus einer ID und) aus zwei Fremdschlüsseln bestehen. Stattdessen liegt der Fokus auf der inhaltlichen Bedeutung der Felder, ihrer Beziehungen untereinander und ihrer Rolle im Erfassungs- und Dokumentationsprozess.

---

**English:**

The following tables document the structure of the arkumu.nrw data model in its relational form. Each entity (e.g. Project, Event, Actor) is represented in a separate table that describes all associated fields and their specifications. The tables follow a uniform structure with the following columns:

| **German Name of Field/English Name of Field** | These columns contain the German and English names of the respective data fields. The names are formatted as links that lead to the corresponding [Graph Model entry](/documentation/data-model/graph-model). |
| **Min-Max Occurence** | This column indicates how often a field can and must appear and be filled in within a single data record, in order for it to be saved:<br/><br/>`1` means that this field appears exactly once in the form and must be filled in (mandatory field). <br/>`0-1` means that the field appears once in the form and can be filled in optionally.<br/>`1-n` means that the field must be filled in at least once and can be repeated any number of times (mandatory field with additional repetitions).<br/>`0-n` means that the field is optional and can be filled in any number of times.<br/>`[1]` (in square brackets) means that the field is conditionally mandatory if the field above it is used (conditional mandatory field). `0/1` means that the context either applies or does not apply.<br/><br/>Additional notes such as `(created automatically)` or `(planned; created automatically)` indicate fields that are not entered manually but are generated by the system. |
| **Multi-Value** | This column indicates whether multiple (individual) values can be stored in a single field. This is indicated by:<br/><br/>`⨉` (cross): The field can only contain a single value<br/>` ✓` (tick): The field can contain multiple values<br/><br/> It is important to distinguish between true multi-value fields and free text fields: A free text field such as "Provenance" may contain information about multiple previous ownerships, but technically it is a single field in which no values are separated. For multi-value fields, the type of the multiple value entry is also specified:<br/><br/><br/>`(multi select)`: Multiple values can be selected from a predefined or expandable list.<a href="/assets/images/multi_select_example.PNG"><img src="/assets/images/multi_select_example.PNG" style="width: 70%; height: auto; margin-left: 0px;"></a><br/>`(multi create)`: Entries in an entity can be created directly from another entity via input masks, e.g. Project Descriptions in a Project.<a href="/assets/images/multi_create_example.PNG"><img src="/assets/images/multi_create_example.PNG" style="width: 70%; height: auto; margin-left: 0px;"></a><br/>`(multi file upload)`: Allows multiple files to be uploaded.<br/>`(comma separated):` Multiple values are entered in a field separated by commas.<br/>`(semicolon separated)`: Multiple values are entered in a field separated by semicolons. `(line break separated)`: Multiple values are entered in a field separated by line breaks.<br/>`(line break separated; comma separated on import)`: Multiple values are entered separated by line breaks, but are processed as comma-separated values during import. |
| **Connection** | This column describes the type of relational relationship between the current entity and other entities in the data model. There are three basic connection types:<br/><br/>`many-to-one`: Multiple records of the current entity can refer to the same record of another entity. Example: Many Projects can be assigned to the same Depositing University, but each Project has exactly one Depositing University.<br/>`one-to-many`: One record of the current entity can be connected to multiple records of another entity, whereby these belong exclusively to the current entity. Example: A Project can have multiple Project Descriptions, but each Project Description belongs to exactly one Project.<br/>`many-to-many`: Multiple records of the current entity can be linked to multiple records of another entity, with multiple associations possible in both directions. Example: A Project can have multiple Keywords, and the same Keyword can appear in multiple Projects. Each connection specification is formulated with additional explanatory text that describes the relationship from both perspectives and clarifies its practical significance. |
| **Points to Entity** | This column indicates which other entity within the arkumu.nrw data model the respective field refers to. The information is formatted as internal links that lead to the corresponding entry in this relational model. For derived entities, the origin is indicated, e.g. `Depositing University - Derived from User`, which means that the depositing university is derived from the active user. |
| **German Definition/English Definition** | These columns provide space for additional notes, explanations or contextual information that is important for understanding or correctly using the field. The comments can, for example, refer to format specifications, usage guidelines or specifics regarding data collection. |

This documentation deliberately focuses on the functional components of the data model and does not go into technical implementation details. It does not list technical ID fields (primary keys, foreign keys) or file types (VARCHAR, INT, BOOLEAN, etc.) as found in typical database schemas. Nor does this documentation lists simple junction tables that consist only of (an ID and) two foreign keys. Instead, the focus is on the content-related meaning of the fields, their relationships to each other and their role in the ingest and documentation process.

<br/>
<br/>

---

<br/>
<br/>

## Actor

`Akteur:in`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ | | |  Der deutsche Name der Person, der Gruppe oder Körperschaft | The German name of the person, group or legal body | Wir erfassen anstelle von Nachname und Vorname den vollen Namen in "natürlicher" Reihenfolge; z.B. fiddk und musiconn.performance sind dabei Vorbild. Der Name sollte dabei widerspiegeln, wie die Person selbst genannt werden möchte. Das ist z.B. wichtig im Fall eines Künstlernamens oder einer Namenänderung. Der Name sollte die lateinisierte Version sein, wenn der native Name einen anderen Zeichensatz benutzt. Das gilt auch für Körperschaften. Wenn der Englische Name nicht ausgefüllt ist, wird dort automatisch der Deutsche Name gesetzt.| Instead of last name and first name, we enter the full name in “natural” order; e.g. fiddk and musiconn.performance are a model for this. The name should reflect what the person themselves would like to be called. This is important, for example, in the case of a pen name, screen name or stage name, or in the case of a name change. The name should be the Latinized version if the native name uses a different character set. This also applies to legal bodies. If the English name is not filled in, the German name will be automatically set there. |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | |  Der englische Name der Person, der Gruppe oder Körperschaft | The English name of the person, group or legal body | | |
| [Alternative Name](/documentation/data-model/graph-model#alternative-name) | [Alternative Name](/documentation/data-model/graph-model#alternative-name) | 0-1 | ✓<br/>(linebreak separated) | | | Ein oder mehrere alternative Namen der Akteur:in | One or more alternative names of the Actor | | |
| [Nicht-öffentlicher Name](/documentation/data-model/graph-model#non-public-name) | [Non-public Name](/documentation/data-model/graph-model#non-public-name) | 0-1 | ✓<br/>(linebreak separated) | | | Ein oder mehrere nicht-öffentliche Namen der Akteur:in | One or more non-public names of the Actor | | |
| Nicht-öffentliche Namen (Begründung) | Non-public Names (Reason) | 0-1 | ✓<br/>(linebreak separated; one for each non-public name) | | | Eine interne Begründung, weswegen der oder die Namen nicht veröffentlicht werden können | An internal reason why the name(s) cannot be published | |
| [Vorangestellter Titel](/documentation/data-model/graph-model#preceding-title) | [Preceding Title](/documentation/data-model/graph-model#preceding-title) | 0-1 | ⨉ | | | Ein oder mehrere vorangestellte Titel der Akteur:in | One or more Preceding Titles of the Actor | Z.B. "Prof", "Dr." | E.g. "Prof.", "Dr." |
| [Nachgestellter Titel](/documentation/data-model/graph-model#trailing-title) | [Trailing Title](/documentation/data-model/graph-model#trailing-title) | 0-1 | ⨉ | | | Ein oder mehrere nachgestellte Titel der Akteur:in | One or more Trailing Titles of the Actor | Z.B. "Ph.D." | E.g. "Ph.D." |
| [Geschlecht](/documentation/data-model/graph-model#gender) | [Gender](/documentation/data-model/graph-model#gender) | 0-1 | ⨉ | many-to-one<br/><sub>(each Actor may be assigned at most one Gender; the same Gender can be used for many Actors)</sub> | [Gender](#gender) | Das Geschlecht einer Person. Bei Gruppen und Körperschaften bleibt dieses Feld leer | The gender of a person. The field can remain empty for groups and legal bodies | | |
| [Geburtsdatum](/documentation/data-model/graph-model#date-of-birth) | [Date of Birth](/documentation/data-model/graph-model#date-of-birth) | 0-1 | ⨉ | | | Das (nicht-geschätzte oder geschätzte) Geburtsdatum oder eine (nicht-geschätzte oder geschätzte) Geburtsdatums-Spanne der Akteur:in. Dieses Feld könnte auch in zwei Felder frühestes und spätestes Geburtsdatum aufgetrennt werden, für eine Expert:inneneingabe, wie in einer ersten Iteration der App | The (non-estimated or estimated ) birth date or a birth date timespan of the Actor. This field could also be split into two fields, earliest and latest date of birth, for expert input, as in a first iteration of the application | In LIDO müssen zwei Daten angegeben werden: *earliest* und *latest*, zusätzlich ein Typ, entwerder *Estimated date* oder *Exact date*. Die Erfassung wird unverfälscht gespeichert, eine Interpretation des Werts wird in einem separaten Feld gespeichert, um SQL-Datumsabfragen zu ermöglichen. Dieses Feld ist simultan in seiner Funktionsweise mit dem Feld "Ereignisbeginn". | Two dates must be specified in LIDO: *earliest* and *latest*, plus a type, either *Estimated date* or *Exact date*. The entry is saved unaltered, an interpretation of the value is saved in a separate field to enable SQL date queries. This field functions similarly to the "Event Beginning" field. |
| [Sterbedatum](/documentation/data-model/graph-model#date-of-death) | [Date of Death](/documentation/data-model/graph-model#date-of-death) | 0-1 | ⨉ | | | Das (nicht-geschätzte oder geschätzte) Sterbedatum oder eine (nicht-geschätzte oder geschätzte) Sterbedatum-Spanne der Akteur:in. Dieses Feld könnte auch in zwei Felder frühestes und spätestes Sterbedatum aufgetrennt werden, für eine Expert:innenneingabe, wie in einer ersten Iteration der App | The (non-estimated or estimated ) death date or a death date timespan of the Actor. The (non-estimated or estimated ) death date or a death date timespan of the Actor. This field could also be split into two fields, earliest and latest date of death, for expert input, as in a first iteration of the application | In LIDO müssen zwei Daten angegeben werden: *earliest* und *latest*, zusätzlich ein Typ, entwerder *Estimated date* oder *Exact date*. Die Erfassung wird unverfälscht gespeichert, eine Interpretation des Werts wird in einem separaten Feld gespeichert, um SQL-Datumsabfragen zu ermöglichen. Dieses Feld ist simultan in seiner Funktionsweise mit dem Feld "Ereignisende". | Two dates must be specified in LIDO: *earliest* and *latest*, plus a type, either *Estimated date* or *Exact date*. The entry is saved unaltered, an interpretation of the value is saved in a separate field to enable SQL date queries. This field functions similarly to the "Event End" field. |
| [Wirkungsbeginn](/documentation/data-model/graph-model#beginning-of-activity) | [Beginning of Activity](/documentation/data-model/graph-model#beginning-of-activity) | 0-1 | ⨉ | | | Das früheste Wirkungsdatum oder ein frühester Wirkungszeitraum einer Akteur:in | The earliest activity date or activity timespan of an Actor | | |
| [Wirkungsende](/documentation/data-model/graph-model#end-of-activity) | [End of Activity](/documentation/data-model/graph-model#end-of-activity) | 0-1 | ⨉ | | | Das späteste Wirkungsdatum oder ein spätester Wirkungszeitraum einer Akteur:in | The latest activity date or activity timespan of an Actor | | |
| [Geburtsort](/documentation/data-model/graph-model#place) | [Place of Birth](/documentation/data-model/graph-model#place) | 0-1 | ⨉ | many-to-one<br/><sub>(each Actor may have one Place of Birth; the same Place can be associated as a Place of Birth with many Actors)</sub> | [Place](#place) | Der Ort, an dem der/die Akteur:in geboren wurde | The place where the Actor was born | | |
| [Sterbeort](/documentation/data-model/graph-model#place) | [Place of Death](/documentation/data-model/graph-model#place) | 0-1 | ⨉ | many-to-one<br/><sub>(each Actor may have one Place of Death; the same Place can be associated as a Place of Death Place with many Actors)</sub> | [Place](#place) | Der Ort, an dem der/die Akteur:in gestorben ist | The place where the Actor died | | |
| [Wirkungsort](/documentation/data-model/graph-model#place) | [Place of Activity](/documentation/data-model/graph-model#place) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Actor may be active at multiple Places; the same Place may be linked to many Actors)</sub> | [Place](#place) | Ein oder mehrere Wirkungsorte der Akteur:in | One or more places of activity of the Actor | | |
| [Gründungsort](/documentation/data-model/graph-model#place) | [Place of Foundation](/documentation/data-model/graph-model#place) | 0-n | ⨉ | many-to-many<br/><sub>(an Actor may be founded at multiple Places; the same Place may be linked to many Actors)</sub> | [Place](#place) | | Der Gründungsort einer Gruppe oder Körperschaft. Gruppen und Körperschaften sind bei uns Akteur:innen | The Place where a group or a legal body was founded. Groups and legal bodies are Actors in our model | | |
| [Auflösungsort](/documentation/data-model/graph-model#place) | [Place of Dissolution](/documentation/data-model/graph-model#place) | 0-n | ⨉ | many-to-many<br/><sub>(an Actor may be dissoluted at multiple Places; the same Place may be linked to many Actors)</sub> | [Place](#place) | Der Auflösungsort einer Gruppe oder Körperschaft. Gruppen und Körperschaften sind bei uns Akteur:innen | The place where a group or a legal body was dissoluted. Groups and legal bodies are Actors in our model | | |
| [Deutsche Kurzbiografie](/documentation/data-model/graph-model#german-short-biography) | [German Short Biography](/documentation/data-model/graph-model#german-short-biography) | 0-1 | ⨉ | | | Eine deutsche Kurzbiografie des/der Akteur:in | A German Short Biography of the Actor | Freitext | Free Text |
| [Englische Kurzbiografie](/documentation/data-model/graph-model#english-short-biography) | [English Short Biography](/documentation/data-model/graph-model#english-short-biography) | 0-1 | ⨉ | | | Eine englische Kurzbiografie des/der Akteur:in | An English Short Biography of the Actor | Freitext | Free Text |
| [Deutscher Kommentar](/documentation/data-model/graph-model#german-commentary) | [German Commentary](/documentation/data-model/graph-model#german-commentary) | 0-1 | ⨉ | | | Ein deutscher Kommentar zu dem/der Akteur:in | A German commentary on the Actor | | |
| [Englischer Kommentar](/documentation/data-model/graph-model#english-commentary) | [English Commentary](/documentation/data-model/graph-model#english-commentary) | 0-1 | ⨉ | | | Ein englischer Kommentar zu dem/der Akteur:in | An English commentary on the Actor | | |
| [Interner Kommentar](/documentation/data-model/graph-model#internal-commentary) | [Internal Commentary](/documentation/data-model/graph-model#english-commentary) | 0-1 | ⨉ | | | Ein interner Kommentar, nur sichtbar innerhalb des arkumu.nrw-Erfassungssystems und in den Langzeiterhaltungs-Metadaten | An internal comment, only visible within the arkumu.nrw ingest system and in the long-term preservation metadata  | | |
| [Beruf und Tätigkeit](/documentation/data-model/graph-model#role) | [Profession and Activity](/documentation/data-model/graph-model#role) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Actor may have multiple Professions or Activities; the same Role may be assigned to many Actors)</sub> | [Role](#role) | Eine Auswahl von Berufen und Tätigkeiten, die eine Person, Gruppe oder Körperschaft identifizieren | A selection of professions and activities that identify a person, group or legal body  | | |
| [ORCID](/documentation/data-model/graph-model#orcid) | [ORCID](/documentation/data-model/graph-model#wikidata-id) | 1 | ⨉ | | | Die ORCID des/der Akteur:in | The ORCID of the Actor | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1 | ⨉ | | | Wikidata-ID des/der Akteur:in | Wikidata ID of the Actor | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | GND-Nummer des/der Akteur:in | GND ID of the Actor | | |
| [VIAF-ID](/documentation/data-model/graph-model#viaf-id) | [VIAF ID](/documentation/data-model/graph-model#viaf-id) | 0-1 | ⨉ | | | VIAF-ID des/der Akteur:in | VIAF ID of the Actor | | |
| [LCCN-ID](/documentation/data-model/graph-model#lccn-id) | [LCCN ID](/documentation/data-model/graph-model#lccn-id) | 0-1 | ⨉ | | | LCCN-ID des/der Akteur:in | LCCN ID of the Actor | Ein Eintrag in der Library of Congress Authority File | An entry in the Library of Congress Authority File |
| [Weitere Normdatei](/documentation/data-model/graph-model#other-authority-file) | [Other Authority File](/documentation/data-model/graph-model#other-authority-file) | 0-1 | ✓<br/>(linebreak separated) | | | Eine oder mehrere weitere Normdateien | One or more further authority files | Z.B. ISNI | E.g. ISNI |
| [Webseiten der Akteur:in](/documentation/data-model/graph-model#website) | [Websites of the Actor](/documentation/data-model/graph-model#website) | 0-1 | ✓<br/>(linebreak separated) | | | Eine oder mehrere Webseiten des/der Akteur:in | One or more Websites of the Actor | | |
| [Kontakt (E-Mail)](/documentation/data-model/graph-model#contact-e-mail) | [Contact (E-Mail)](/documentation/data-model/graph-model#contact-e-mail) | 0-1 | ⨉ | | | Nur für den kurzzeitigen internen Gebrauch. Nicht öffentlich oder Teil der Langzeitverfügbarkeit. Eine oder mehrere E-Mail-Adressen der Akteur:in | | |
| [Kontakt (Telefon)](/documentation/data-model/graph-model#contact-phone) | [Contact (Phone)](/documentation/data-model/graph-model#contact-phone) | 0-1 | ⨉ | | | Nur für den kurzzeitigen internen Gebrauch. Nicht öffentlich oder Teil der Langzeitverfügbarkeit. Eine oder mehrere Telefonnummern der Akteur:in | | |
| [Kontakt (Postanschrift)](/documentation/data-model/graph-model#contact-postal-address) | [Contact (Postal Address)](/documentation/data-model/graph-model#contact-postal-address) | 0-1 | ⨉ | | | Nur für den kurzzeitigen internen Gebrauch. Nicht öffentlich oder Teil der Langzeitverfügbarkeit. Eine Anschrift der Akteur:in | | |
| [Verknüpfte:r Akteur:in](/documentation/data-model/graph-model#actor) | [Related Actor](/documentation/data-model/graph-model#actor) | 0-n | ✓<br/>(multi create) | many-to-many<br/><sub>(each Actor may be linked to multiple other Actors, including a unique relation to each of these Actors)</sub> | [Related Actor (Actor-Actor Junction Table)](#related-actor-actor-actor-junction-table) | Eine Verknüpfung zu anderen Akteur:innen, die in einer bestimmten reziproken Relation stehen | A connection to other Actors that have a specific reciprocal relationship | | |
| Datensatz beim Einlieferer | Dataset at the Depositor | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Actor may be identified by multiple Datasets at the Depositor; each Dataset at the Depositor refers to exactly one Actor)</sub> | [Dataset at the Depositor](#dataset-at-the-depositor) | Eine Signatur und Datum-/Zeitangaben, die die/den Akteur:in beim Einlieferer identifizieren | Am ID and date/time stamps identifying the Actor at the depositor | | |

<br/>
<br/>

---

<br/>
<br/>

## Alternative Title Set

`Alternativer Titel-Set`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Alternativer Titel](/documentation/data-model/graph-model#alternative-title) | [Alternative Title](/documentation/data-model/graph-model#alternative-title) | 0-1 | ⨉ | | | Ein möglicher alternativer Titel des Projekts | A possible alternative title for the Project | | |
| Sprachauszeichnung des Alternativen Titels | Language Markup of Alternative Title | [1] | ⨉ | many-to-one<br/><sub>(each Alternative Title has exactly one Language Markup; the same Language can be used for many Alternative Titles)</sub> | [Language](#language) | Eine Sprachauszeichnung samt ISO639-2-Code für den alternativen Titel des Projekts | An ISO639-2 language markup for the alternative title of the Project | | |
| [Alternativer Untertitel](/documentation/data-model/graph-model#alternative-subtitle) | [Alternative Subtitle](/documentation/data-model/graph-model#alternative-subtitle) | 0-1 | ⨉ | | | Ein möglicher alternativer Titel des Projekts | A possible alternative title for the Project | | |
| Sprachauszeichnung des Alternativen Untertitels | Language Markup of Alternative Subtitle | [1] | ⨉ | many-to-one<br/><sub>(each Alternative Subtitle has exactly one Language Markup; the same Language can be used for many Alternative Subtitles)</sub> | [Language](#language) | Eine Sprachauszeichnung samt ISO639-2-Code für den alternativen Titel des Projekts | An ISO639-2 language markup for the alternative title of the Project | | |
| [Sortierungsnummer](/documentation/data-model/graph-model#sorting-number) | [Sorting Number](/documentation/data-model/graph-model#sorting-number) | 1<br/>(handled through user interaction/separate field)  | ⨉ | | | Eine Nummer, die die Anzeigereihenfolge des Alternativen Titel-Sets innerhalb eines Projektes regelt | A number that handles the displayed order of the Alternative Title Sets inside of a Project | | |
| [Projekt](/documentation/data-model/graph-model#project) | [Project](/documentation/data-model/graph-model#project) | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each Alternative Title Set belongs to exactly one Project; a Project may have multiple Alternative Title Sets)</sub> | [Project](#project) | Das Projekt, zu dem dieses Alternative Titel-Set gehört | The Project to which this Alternative Title Set belongs | | |


<br/>
<br/>

---

<br/>
<br/>

## Collection

`Sammlung`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  |  | Die deutsche Bezeichnung der Sammlung | The German appellation of the Collection  | | | 
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ |  |  | Die englische Bezeichnung der Sammlung | The English appellation of the Collection | | |
| Sammlungsart | Collection Type | 1 | ⨉ |  |  | Entweder "Sammlung" oder "Reihe" | Either "Collection" or "Series" | Können ihr eigenes kontrolliertes Vokabular sein | Can be their own controlled vocabulary |
| [Deutsche Beschreibung](/documentation/data-model/graph-model#german-description) | [German Description](/documentation/data-model/graph-model#german-description) | 0-1 | ⨉ | | | Eine deutsche Beschreibung der Sammlung | A German description of the Collection | Z.B. Inhalt der Sammlung oder Entehungszusammenhang | E.g. contents of the Collection or its context of origin |
| [Englische Beschreibung](/documentation/data-model/graph-model#english-description) | [English Description](/documentation/data-model/graph-model#english-description) | 0-1 | ⨉ | | | Eine englische Beschreibung der Sammlung | An English description of the Collection | Z.B. Inhalt der Sammlung oder Entehungszusammenhang | E.g. contents of the Collection or its context of origin |
| Verknüpfte Projekte | Linked Projects | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(a Collection may contain multiple Projects; a Project may belong to multiple Collections)</sub> | [Project](#project) | Projekte, die Teil dieser Sammlung oder Reihe sind | Projects that are part of this Collection or Series | | |
| Verknüpfte Ereignisse | Linked Events | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(a Collection may include multiple Events; an Event may be assigned to multiple Collections)</sub> | [Event](#event) | Ereignisse, die mit dieser Sammlung oder Reihe verbunden sind | Events that are related to this Collection or Series | | |
| Verknüpftes Equipment und Software | Linked Equipment and Software | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(a Collection may reference multiple Equipment or Software entries; the same Equipment or Software may be linked to multiple Collections)</sub> | [Equipment and Software](#equipment-and-software) | Technische Ausrüstung, Werkzeuge oder Software, die im Kontext dieser Sammlung oder Reihe verwendet wurden | Technical equipment, tools, or software used in the context of this Collection or Series | | |
| Verknüpfte Physische Objekte | Linked Physical Objects | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(a Collection may include multiple Physical Objects; a Physical Object may be linked to multiple Collections)</sub> | [Physical Object](#physical-object) | Physische Objekte, Materialien oder Artefakte, die zu dieser Sammlung oder Reihe gehören oder zugeordnet sind | Physical Objects, materials, or artefacts belonging to or associated with this Collection or Series | | |
| Verknüpfte Informationsträger | Linked Information Storage Medium | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(a Collection may reference multiple Information Storage Mediums; an Information Storage Medium may be linked to multiple Collections)</sub> | [Information Storage Medium](#information-storage-medium) | Informations- oder Datenträger, die im Zusammenhang mit dieser Sammlung oder Reihe stehen | Information or data mediums that are related to this Collection or Series | | |
| Verknüpfte Digitale Objekte | Linked Digital Objects | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(a Collection may include multiple Digital Objects; a Digital Object may be associated with multiple Collections)</sub> | [Digital Object](#digital-object) | Digitale Objekte, die Bestandteil dieser Sammlung oder Reihe sind oder ihr inhaltlich zugeordnet sind | Digital objects that are part of this Collection or Series or are thematically associated with it | | |

<br/>
<br/>

---

<br/>
<br/>

## Content Warning

`Inhaltswarnung`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Deutscher Inhaltswarnungs-Text | German Content Warning Text | 1 | ⨉ | | | Die deutscher Version der Inhaltswarnung  | The German version of the Content Warning | | |
| Englischer Inhaltswarnungs-Text | English Content Warning Text | 1 | ⨉ | | | Die englische Version der Inhaltswarnung  | The English version of the Content Warning | | |

<br/>
<br/>

---

<br/>
<br/>

## Dataset at the Depositor

`Datensatz beim Einlieferer`

| Diese Entität wurde erstellt, um gemeinsam verwendete Akteur:innen, Ereignisse und gegebenenfalls auch gemeinschaftliche Projekte hochschulübergreifend referenzieren zu können, selbst wenn hierfür an den jeweiligen Hochschulen unterschiedliche Datensatz-Identifikatoren für dieselbe Einheit verwendet werden. Es ist jedoch unabdingbar, dass diese Entität durch eine präzise Benutzer:innen- und Rechteverwaltung geregelt wird. Die rechtliche Verantwortung für einen Datensatz verbleibt stets bei der Hochschule, von deren Benutzer:innen der entsprechende Datensatz ursprünglich angelegt wurde. | This entity was created to enable cross-institutional referencing of shared Actors, Events, and, where applicable, joint Projects, even if different dataset identifiers are used for the same entry at different universities. It is, however, essential that this entity is governed by a precise user and access rights management system. Legal responsibility for a dataset always remains with the university whose users originally created the respective record. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Einlieferer |	Depositor | 1 | ⨉ | many-to-one<br/><sub>(each Dataset at the Depositor has exactly one Depositor; the same Depositor can be used for multiple Datasets at the Depositor)</sub> | [Organisational Unit](#organisational-unit) | Die einliefernde Institution | The depositing institution | | |
| Datensatz-ID beim Einlieferer | Dataset ID at Depositor | 0-1 | ⨉ | | | Freitext-Feld, dass einen Identifikator beim Einlieferer enthält | Free text field containing a identifiers at the depositor | | |
| Datensatz-Erstellungsdatum beim Einlieferer | Dataset Creation Date at Depositor | 0-1 | ⨉ | | | Datum/Uhrzeit der Erstellung des Datensatzes beim Einlieferer | Date/time of creation of the data record by at depositor | | |
| Datensatz-Letztes-Änderungsdatum beim Einlieferer	| Dataset Last Modification Date at Depositor | 0-1 | ⨉ | | | Datum/Uhrzeit der letzten Änderung des Datensatzes beim Einlieferer | Date/time of the last modification of the data record at the depositor | | |
| *Entitäts-Instanz* | *Entity Instance* | 1 | ⨉ | many-to-one<br/><sub>(each Dataset at the Depositor has exactly one Instance of an Entity it belongs to, the same Instance can have many Datasets at the Depositor entries)</sub> | | Die zugehörige Instanz einer Entität, z.B. ein Projekt, ein Ereignis oder eine:n Akteur:in | The associated instance of an entity, e.g. a Project, an Event or an Actor | | |

<br/>
<br/>

---

<br/>
<br/>

## Depositing University

`Einliefernde Hochschule`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  |  | Die deutsche Bezeichnung der einliefernden Hochschule | The German appellation of the Depositing University  | | | 
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ |  |  | Die englische Bezeichnung der einliefernden Hochschule | The English appellation of the Depositing University | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 0-1 | ⨉ | | | ID des Wikidata-Eintrag für die einliefernde Hochschule | ID of the Wikidata entry for the Depositing University | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | ID des GND-Körperschaftseintrag für die einliefernde Hochschule | ID of the GND institutional record for Depositing University | | |

<br/>
<br/>

---

<br/>
<br/>

## Digital Object

`Digitales Objekt`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Prüfsumme](/documentation/data-model/graph-mode#checksum) | [Checksum](/documentation/data-model/graph-model#checksum) | 1<br/>(handled automatically) | ⨉ |  |  | Eine beim Ingest in das System erstellte Prüfsumme für die Datei | A checksum for the file created during ingest into the system | | |
| [Prüfsumme beim Einlieferer](/documentation/data-model/graph-model#checksum-at-depositor) | [Checksum at Depositor](/documentation/data-model/graph-model#checksum-at-depositor) | 1 | ⨉ |  |  | Eine Prüfsumme bei der einliefernden Institution für die Datei | A checksum for the file at the depositing institution | | |
| Dateipfad | File Path | 1<br/>(handled automatically)  | ⨉ | | | | | |
| Dateiname | File Name | 1<br/>(handled automatically) | ⨉ | | | | | |
| Dateigröße | File Size | 1<br/>(handled automatically) | ⨉ | | | | | |
| Dateierstellungsdatum | File Creation Date | 0-1 | ⨉ | | | Eine Angabe durch den/die Einlieferer:in, wann die Datei zum ersten Mal erstellt wurde | An indication by the depositor of when the file was first created | | |
| Letztes Dateiänderungsdatum | File Last Modification Date | 1<br/>(handled automatically) | ⨉ | | | Das letzte Änderungsdaum der Datei, beim Ingest automatisch ausgelesen | The last modification date of the file, automatically extracted during ingest | | |
| MIME Type | MIME Type | 1 | 1<br/>(handled automatically) | ⨉ | | | Der MIME Type der Datei, beim Ingest automatisch ausgelesen | The MIME type of the file, automatically extracted during ingest | | |
| Medientyp | Media Type | 1 | ⨉ | | | | | |
| Erhaltungstyp | Genesis Type | 1 | ⨉ | | | | | |
| Derivatkopie-Nummer | Derivative Copy Number | [1]<br/>(if Genesis Type is "Derivate Copy") | ⨉ | | | | | |
| Dateipaket | File Package | 0/1 | ⨉ | | | | | |
| Digitales-Objekt-Lizenz | Digital Object Licence | 1 | ⨉ | | [Digital Object License](#digital-object-license) | Die zentrale Lizenzangabe zur Datei. Entweder eine arkumu-Lizenz oder eine externe Lizenz, z.B. von Creative Commons | The central licence statement for the file. Either an arkumu licence or an external licence, e.g. from Creative Commons | | |
| Anzeigestatus | Display State | 0-1<br/>(partly automatically handled) | ⨉ | | | Eine Angabe, ob eine Datei/ein Digitales Objekt auch ohne vorherige Anmeldung öffentlich gezeigt werden soll. Zu benutzen bei Lizenzen freier als "arkumu-A+B 1.0". Bei Lizenz "arkumu-A 1.0" ist der Anzeigestatus immer "Datei nicht frei anzeigen" | | | |
| ist arkumu Preview | is arkumu Preview | 0-1 | ⨉ | | | | | |
| Digitales-Objekt-Schlagwort | Digital Object Keyword | 0-n | ✓<br/>(multi select) | [Keyword](#keyword) | | | | |
| Deutsche inhaltliche Beschreibung | German Content Description | 0-1 | ⨉ | | | | | |
| Englische inhaltliche Beschreibung | English Content Description | 0-1 | ⨉ | | | | | |
| Deutsche Bildbeschreibung | German Image Description | 0-1 | ⨉ | | | | | |
| Englische Bildbeschreibung | English Image Description | 0-1 | ⨉ | | | | | |
| [Deutscher Kommentar](/documentation/data-model/graph-model#german-commentary) | [German Commentary](/documentation/data-model/graph-model#german-commentary) | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte inhaltlich relevante Bemerkungen/Kommentare zum Digitalen Objekt oder zu seiner Beschaffenheit gegeben werden können | A field in which specific comments/remarks relevant to the Digital Object's content or constitution can be provided | | |
| [Englischer Kommentar](/documentation/data-model/graph-model#english-commentary) | [English Commentary](/documentation/data-model/graph-model#english-commentary) | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte inhaltlich relevante Bemerkungen/Kommentare zum Digitalen Objekt oder zu seiner Beschaffenheit gegeben werden können | A field in which specific comments/remarks relevant to the Digital Object's content or constitution can be provided | | |
| [Interner Kommentar](/documentation/data-model/graph-model#internal-commentary) | [Internal Commentary](/documentation/data-model/graph-model#internal-commentary) | 0-1 | ⨉ | | | Ein Kommentar, der nur innerhalb des arkumu.nrw-Erfassungssystems für höhere Nutzer:innen angezeigt wird, aber nie öffentlich | A comment that is only displayed within the arkumu.nrw ingest system for higher-level users, but never publicly | Nicht-öffentliche, z. B. Team-interne Bearbeitungsnotizen oder interne Bearbeitungsnotizen aus der Quelldatenbank des Einlieferers | Non-public, e.g. internal team processing notes or internal processing notes from the depositor's source database |
| [Wesentliche Eigenschaften (Deutsch)](/documentation/data-model/graph-model#significant-properties-german) | [Significant Properties (German)](/documentation/data-model/graph-model#significant-properties-german) | 0-1 | ⨉ | | | Eine Angabe zur Langzeiterhaltung: In deutscher Sprache angegebene wesentliche Eigenschaften der Datei, die sowohl den Originalstatus der Datei definieren und die nicht verändert werden dürfen als auch auch bei Dateiumwandlungen weiter beachtet werden müssen | Information on long-term preservation: Essential characteristics of the file specified in German, which define the original status of the file and must not be changed, and which must also be taken into account during file conversions | | |
| [Wesentliche Eigenschaften (Englisch)](/documentation/data-model/graph-model#significant-properties-german) | [Significant Properties (English)](/documentation/data-model/graph-model#significant-properties-german) | 0-1 | ⨉ | | | Eine Angabe zur Langzeiterhaltung: In englischer Sprache angegebene wesentliche Eigenschaften der Datei, die sowohl den Originalstatus der Datei definieren und die nicht verändert werden dürfen als auch auch bei Dateiumwandlungen weiter beachtet werden müssen | Information on long-term preservation: Essential characteristics of the file specified in English, which define the original status of the file and must not be changed, and which must also be taken into account during file conversions | | |
| Systemvoraussetzungen | System Requirements | [1]<br/>(for Media Type "Code") | ⨉ | | | | | |
| [Originalsprache](/documentation/data-model/graph-model#original-language) | [Original Language](/documentation/data-model/graph-model#original-language) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Digital Object may hold multiple Original Languages; each Language can be linked to multiple Digital Objects)</sub> | [Language](#language) | Die Originalsprache bezeichnet die Sprache, in der ein audiovisueller Inhalt ursprünglich erstellt bzw. erstmals veröffentlicht wurde | The Original Language refers to the language in which an audiovisual content was originally created or first published | | |
| [Untertitelsprache](/documentation/data-model/graph-model#subtitle-language) | [Subtitle Language](/documentation/data-model/graph-model#subtitle-language) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Digital Object may hold multiple Subtitle Languages; each Language can be linked to multiple Digital Objects)</sub> | [Language](#language) | Die Untertitelsprache bezeichnet die Sprache der textlichen Untertitel, die zur Wiedergabe eines audiovisuellen Inhalts in einem bestimmten Digitalen Objekt verfügbar sind. Sie dient der Übersetzung oder der barrierefreien Nutzung und kann in mehreren Sprachen angeboten werden | The Subtitle Language refers to text subtitles that are available besides the audiovisual content in a specific Digital Object. They are used for translation or accessibility reasons and can be prevalent in several languages | | |
| [Sprachversion](/documentation/data-model/graph-model#language-version) | [Language Version](/documentation/data-model/graph-model#language-version) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Information Storage Medium may hold multiple Language Version; each Language can be linked to multiple Information Storage Mediums)</sub> | [Language](#language) | Die Sprachfassung beschreibt die Sprache der auf einem Informationsträger zusätzlich enthaltenen Tonspuren. Sie gibt an, in welcher Sprache der meist gesprochene Inhalt wiedergegeben wird (z. B. als Tonspur einer synchronisierten Fassung). | The Language Version describes the language of additional audio tracks contained on an Information Storage Medium. It specifies the language in which the mostly spoken content is presented (e.g. as the audio track of a dubbed version) | | |
| [JHOVE-Dateistatus] | [JHOVE Status]() | 1<br/>(handled automatically) | ⨉ | | | Eine aus JHOVE ausgelesene Information, ob die Datei valide und wohlgeformt ist | Information extracted from JHOVE indicating whether the file is valid and well-formed | | |
| DROID-PUID | DROID-PUID | 1<br/>(handled automatically) | ⨉ | | | | | |
| MediaInfo-Track-Format | MediaInfo-Track-Format | 1<br/>(handled automatically) | ⨉ | | | | | |
| Technische Dauer | Technical Duration | 0-1 | ⨉ | | | | | |
| [JHOVE-Metadaten](/documentation/data-model/graph-model#jhove-metadata) | [JHOVE Metadata](/documentation/data-model/graph-model#jhove-metadata) | 1<br/>(handled automatically) | ⨉ | | | Ausgelesene Metadaten aus dem Validierungstool JHOVE | Metadata read from the JHOVE validation tool | | |
| [DROID-Metadaten](/documentation/data-model/graph-model#droid-metadata) | [DROID Metadata](/documentation/data-model/graph-model#droid-metadata) | 1<br/>(handled automatically) | ⨉ | | | Ausgelesene Metadaten aus dem Dateiidentifikationstool DROID | Metadata extracted from the DROID file identification tool | |
| [ExifTool-Metadaten](/documentation/data-model/graph-model#exiftool-metadata) | [Exiftool Metadata](/documentation/data-model/graph-model#exiftool-metadata) | 1<br/>(handled automatically) | ⨉ | | | Ausgelesene Metadaten aus der Software ExifTool | Metadata extracted from ExifTool software | |
| [MediaInfo-Metadaten](/documentation/data-model/graph-model#droid-metadata) | [MediaInfo Metadata](/documentation/data-model/graph-model#droid-metadata) | 1<br/>(handled automatically) | ⨉ | | | Ausgelesene Metadaten aus der Software MediaInfo | Metadata extracted from the MediaInfo software | |
| Projektkomplation | Project Compilation | 0/1 | ⨉ | | | | | |
| Teil einer Serie | Part of a Series | 0/1 | ⨉ | | | | | |
| Tonmischfassung | Dubbing Version | 0-1 | ⨉ | | | | | |
| Tonformat | Sound Format | 0-1 | ⨉ | | | | | |
| DCP-Art | DCP Type | 0-1 | ⨉ | | | | | |
| Datensatz beim Einlieferer | Dataset at the Depositor | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Digital Object may be identified by multiple Datasets at the Depositor; each Dataset at the Depositor refers to exactly one Digital Object)</sub> | [Dataset at the Depositor](#dataset-at-the-depositor) | Eine Signatur und Datum-/Zeitangaben, die das Digitale Objekt beim Einlieferer identifizieren | Am ID and date/time stamps identifying the Deigital Object at the depositor | | |

<br/>
<br/>

---

<br/>
<br/>

## Digital Object Licence

`Digitales-Objekt-Lizenz`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  |  | Der offizielle deutsche Name der Lizenz | The official German Name of the Licence | Z.B. "arkumu A 1.0", "arkumu A+B 1.0" | E.g. "arkumu A 1.0", "arkumu A+B 1.0" | | | 
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ |  |  | Der offizielle englische Name der Lizenz | The official English Name of the Licence | Z.B. "arkumu A 1.0", "arkumu A+B 1.0" | E.g. "arkumu A 1.0", "arkumu A+B 1.0" | | | 
| [Deutscher Lizenztext](/documentation/data-model/graph-model#german-wording) | [German Wording](/documentation/data-model/graph-model#german-wording) | 0-1 | ⨉ | | | Der deutsche Text der Lizenz | The German text of the licence | | |
| [Englischer Lizenztext](/documentation/data-model/graph-model#emglish-wording) | [English Wording](/documentation/data-model/graph-model#english-wording) | 0-1 | ⨉ | | | Der englische Text der Lizenz| The English text of the licence | | |
| Deutscher Anzeige-Text | German Display Text | 1 | ⨉ |  |  | Feld, wie die Lizenz im Dateiupload/im Digitalen Objekt auf deutsch angezeigt werden soll | Field indicating how the licence should be displayed in German in the file upload/the Digital Object entity | Z.B. "arkumu A 1.0 – Langzeitarchivierung", "arkumu A+B 1.0  – Langzeitarchivierung & Öffentliche Zugänglichmachung" | E.g. "arkumu A 1.0 – Langzeitarchivierung", "arkumu A+B 1.0  – Langzeitarchivierung & Öffentliche Zugänglichmachung"  |
| Englischer Anzeige-Text | English Display Text | 1 | ⨉ |  |  | Feld, wie die Lizenz im Dateiupload/im Digitalen Objekt auf englisch angezeigt werden soll | Field indicating how the licence should be displayed in English in the file upload/the Digital Object entity | Z.B. "arkumu A 1.0 – Long-term Preservation", "arkumu A+B 1.0 – Long-term Preservation & Public Availability" | E.g. "arkumu A 1.0 – Long-term Preservation", "arkumu A+B 1.0 – Long-term Preservation & Public Availability" |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1 | ⨉ | | | Eine zum bestehenden Lizenzvertrag gehörende URI | An URI associated with the existing licence agreement |
| Zugehöriges Rechtestatement | Connected Rights Statement | 1 | ⨉ | | | Eine weitere URI, die auf ein zugöriges Statement von rightsstatements.org oder von Creative Commons verweist | A further URI that refers to a related statement from rightsstatements.org or Creative Commons | | |

<br/>
<br/>

---

<br/>
<br/>

## Equipment Type

`Equipmentart`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI der Equipmentart, für ihren Eintrag in das kontrollierte Vokabular | The automatically generated URI of the Equipment Type for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  | | Die deutsche Bezeichnung des Ereignistyps | The German appellation of the Event Type | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englische Bezeichnung des Ereignistyps | The German appellation of the Event Type | | |
| [Deutsche Synonyme](/documentation/data-model/graph-model#german-synonym) | [German Synonyms](/documentation/data-model/graph-model#german-synonym) | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten deutschen Synonymen der Equipmentart | A series of comma-separated German synonyms of the Equipment Type | | |
| [Englische Synonyme](/documentation/data-model/graph-model#english-synonym) | [German Synonyms](/documentation/data-model/graph-model#english-synonym) | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten englischen Synonymen der Equipmentart | A series of comma-separated English synonyms of the Equipment Type | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1 | ⨉ | | | Wikidata-ID der Equipmentart | Wikidata ID of the Equipment Type | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | GND-Nummer der Equipmentart | GND ID of the Equipment Type | | |
| [AAT-ID](/documentation/data-model/graph-model#aat-id) | [AAT ID](/documentation/data-model/graph-model#aat-id) | 0-1 | ⨉ | | | AAT-ID der Equipmentart | AAT ID of the Equipment Type | | |

<br/>
<br/>

---

<br/>
<br/>

## Equipment and Software

`Equipment and Software`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  |  | Die deutsche Bezeichnung des Equipments oder der Software | The German appellation of the Equipment or Software  | Deutsche (Produkt-) Bezeichnung. Eine Produkt- oder sonstige Bezeichnung (mit den notwendigen Nummern), die angeben, um welch ein Modell oder was für eine Sache es sich handelt | German (product) designation. A product or other designation (with the necessary numbers) that indicates what model or type of item it is | 
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ |  |  | Die englische Bezeichnung des Equipments oder der Software | The English appellation of the Equipment or Software  | Englische (Produkt-) Bezeichnung. Eine Produkt- oder sonstige Bezeichnung (mit den notwendigen Nummern), die angeben, um welch ein Modell oder was für eine Sache es sich handelt | English (product) designation. A product or other designation (with the necessary numbers) that indicates what model or type of item it is | 
| [Hersteller](/documentation/data-model/graph-model#producer) | [Producer](/documentation/data-model/graph-model#producer) | 0-1 | ⨉ | | | Der/die Hersteller:in oder Produzent:in des Equipments oder der Software | The manufacturer or producer of the equipment or software | Freitext | Free Text |
| [Equipmentart](/documentation/data-model/graph-model#equipment-type) | [Equipment Type](/documentation/data-model/graph-model#equipment-type) | 1 | ⨉ | many-to-one<br/><sub>(each Equipment or Software has exactly one Equipment Type; each Equipment Type can be assigned to multiple Equipment and Software items)</sub> | [Equipment Type](#equipment-type) | Eine Kategorisierung des Equipments oder der Software | A categorisation of the Equipment or Software | Z.B. Mikrofon, Mischpult, Verstärker, Filmkamera, Fotokamera, Videokamera, 3D-Scanner, 3D-Drucker, SBC, Software, Zubehör (allgemein), Audiorecorder, Licht, Aufnahmegerät (allgemein) | E.g. Microphone, Mixer, Amp(lifier), Film Vamera, Photo Camera, Video Camera, 3D Scanner, 3D Printer, SBC, Software, Equipment (general), Audio Recorder, Lighting, Recording Device (general) |
| [Deutsche Beschreibung](/documentation/data-model/graph-model#german-description) | [German Description](/documentation/data-model/graph-model#german-description) | 0-1 | ⨉ | | | Eine deutsche Beschreibung des Equipments oder der Software | A German description of the Equipment or Software | | |
| [Englische Beschreibung](/documentation/data-model/graph-model#english-description) | [English Description](/documentation/data-model/graph-model#english-description) | 0-1 | ⨉ | | | Eine englische Beschreibung des Equipments oder der Software | An English description of the Equipment or Software | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1 | ✓<br/>(comma separated) | | | Wikidata-IDs des Equipments oder der Software | Wikidata ID of the Equipment or Software | So übernommen aus letzter Datenmodell-Tabelle | As such taken from the current data model table |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | GND-Nummer des Ereignisses | GND ID of the Event| | |

<br/>
<br/>

---

<br/>
<br/>

## Event

`Ereignis`

| Die Zeitangaben in dieser Entität benötigen noch zusatzliche Felder, die die Nutzer:inneneingaben des "Ereignisbeginn" und des "Ereignisende" in genaue ISO-Angaben umwandeln. Diese Felder sind hier nicht gesondert aufgeführt. | The time specifications in this entity require additional fields that convert the user entries for "Event Beginning" and "Event End" into precise ISO dates. These fields are not listed separately here. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  |  | Die deutsche Bezeichnung des Ereignisses | The German appellation of the Event  | | | 
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 0-1 | ⨉ |  |  | Die englische Bezeichnung des Ereignisses | The English appellation of the Event  | | |
| [Ereignistyp](/documentation/data-model/graph-model#event-type) | [Event Type](/documentation/data-model/graph-model#event-type) | 1 | ⨉ | many-to-one<br/><sub>(each Event has exactly one Event Type; each Event Type can be assigned to multiple Events)</sub> | [Event Type](#event-type) | Eine Kategorisierung des Ereignisses mit allgemeinen sowie aus dem Kunst- und Kultur- und Musikbereich üblichen Ereignistypen | A categorisation of the Event with general Event Types and Event Types that are common in the arts, culture and music sectors | | |
| [Ereignisbeginn](/documentation/data-model/graph-model#event-beginning) | [Event Beginning](/documentation/data-model/graph-model#event-beginning) | 0-1 | ⨉ | | | Der zeitliche Anfang des Ereignisses, angegeben als ISO 8601-Zeitpunk oder Zeitraum | The temporal beginning of the Event, specified as an ISO 8601 time or time period | z.B. "2002", "2002-03", "2002-03-01", "2002-03-01T13:12". Ebenso könnte es eine Experten-Ansicht geben, sodass ein frühester und ein spätester Zeitpunkt des Beginns angegeben und geschätzt werden kann | e.g. "2002", "2002-03", "2002-03-01", "2002-03-01T13:12", Likewise, there could be an expert feature, allowing the earliest and latest possible beginning dates to be specified and estimated |
| Ereignisbeginn geschätzt | Estimated Event Beginning | 0/1 | ⨉ | | | Eine Angabe, ob ein Ereignisbeginn geschätzt ist | An indication of whether the beginning of an Event is estimated | Diese Angabe könnte auch durch ein Zeichen im Ereignisbeginn-Feld angegeben werden; es ist jedoch eine einfache Eingabemethode für die Nutzer:innen zu bevorzugen | This information could also be indicated by a symbol in the Event Beginning field; however, a simple input method for the users is preferable |  
| [Ereignisende](/documentation/data-model/graph-model#event-end) | [Event End](/documentation/data-model/graph-model#event-end) | 0-1 | ⨉ | | | Das zeitliche Ende des Ereignisses, angegeben als ISO 8601-Zeitpunk oder Zeitraum | The temporal end of the Event, specified as an ISO 8601 time or time period | z.B. "2005", "2005-03", "2005-03-01", "2005-03-01T13:12". Ebenso könnte es eine Experten-Ansicht geben, sodass ein frühester und ein spätester Zeitpunkt des Endes angegeben und geschätzt werden kann | e.g. "2005", "2005-03", "2005-03-01", "2005-03-01T13:12", Likewise, there could be an expert feature, allowing the earliest and latest possible end dates to be specified and estimated |
| Ereignisende geschätzt | Estimated Event End | 0/1 | ⨉ | | | Eine Angabe, ob ein Ereignisende geschätzt ist | An indication of whether the end of an Event is estimated | Diese Angabe könnte auch durch ein Zeichen im Ereignisende-Feld angegeben werden; es ist jedoch eine einfache Eingabemethode für die Nutzer:innen zu bevorzugen | This information could also be indicated by a symbol in the Event End field; however, a simple input method for the users is preferable |  
| [Ereignisort](/documentation/data-model/graph-model#place) | [Event Place](/documentation/data-model/graph-model#place) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(an Event can happen at multiple Places; a Place can host multiple Events)</sub> | [Place](#place) | Ein Ort, an dem das Ereignis stattgefunden hat | A place where the event took place | | |
| [Ereignisbeschreibung](/documentation/data-model/graph-model#event-description) | [Event Description](/documentation/data-model/graph-model#event-description) | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Event may have multiple Event Descriptions; each Event Description belongs to exactly one Event) | [Event Description](#event-description) | Freitext mit eigener Sprachauszeichnung, angezeigt nach Wertigkeit | Free text with own language markup, displayed according to the provided sorting | | |
| [Deutscher Kommentar](/documentation/data-model/graph-model#german-commentary) | [German Commentary](/documentation/data-model/graph-model#german-commentary) | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte deutsche inhaltlich relevante Bemerkungen/Kommentare zum Ereignis gegeben werden können | A field in which specific German comments/remarks relevant to the Event can be provided | | |
| [Englischer Kommentar](/documentation/data-model/graph-model#english-commentary) | [English Commentary](/documentation/data-model/graph-model#english-commentary) | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte englische inhaltlich relevante Bemerkungen/Kommentare zum Ereignis gegeben werden können | A field in which specific English comments/remarks relevant to the Event can be provided | | |
| [Interner Kommentar](/documentation/data-model/graph-model#internal-commentary) | [Internal Commentary](/documentation/data-model/graph-model#internal-commentary) | 0-1 | ⨉ | | | Ein Kommentar, der nur innerhalb des arkumu.nrw-Erfassungssystems für höhere Nutzer:innen angezeigt wird, aber nie öffentlich | A comment that is only displayed within the arkumu.nrw ingest system for higher-level users, but never publicly | Nicht-öffentliche, z. B. Team-interne Bearbeitungsnotizen oder interne Bearbeitungsnotizen aus der Quelldatenbank des Einlieferers | Non-public, e.g. internal team processing notes or internal processing notes from the depositor's source database |
| [Ereignisakteur:in](/documentation/data-model/graph-model#actor) | [Event Actor](/documentation/data-model/graph-model#actor) | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Event may have multiple Actors; each Event-Actor record belongs to exactly one Event)</sub> | [Event Actor (Event-Actor Junction Table)](#event-actor-event-actor-junction-table) | Eine Akteur:in samt einer Angabe, ob diese durch dieses Ereignis Urheberrechte oder Leistungsschutsansprüche an einem Projekt oder an Teilen eines Projekts erworben hat; zusätzlich eine Angabe darüber, ob eine Akteur:in diesem Ereignis lediglich zugeschrieben wurde | An Actor, including information on whether the Actor acquired the German "Urheberrecht" or "Leistungsschutzansprüche" to a Project or parts of a Project as a result of this Event; Additionally, information on whether an Actor was merely attributed to this event | | |
| [Equipment und Software](/documentation/data-model/graph-model#equipment-and-software) | [Equipment and Software](/documentation/data-model/graph-model#equipment-and-software) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(an Event may had multiple Equipment or Software items in use; each Equipment/Software may be used in multiple Events)</sub> | [Equipment and Software](#equipment-and-software) | Benutzte  Werkzeuge, Tools, Technologien und technische Ausrüstung, die in diesem Ereignis verwendet wurden | Tools, utilities, technologies, and technical equipment, used in this Event | | |
| [Physisches Objekt](/documentation/data-model/graph-model#physical-object) | [Physical Object](/documentation/data-model/graph-model#physical-object) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(an Event may involve multiple Physical Objects; each Physical Object may appear in multiple Events)</sub> | [Physical Object](#physical-object) | Beschreibungen zu einem Objekt oder dessen Bestandteilen, Materialien, Artefakten, etc., die in diesem Ereignis erstellt oder vorhanden waren | Descriptions of an object or its components, materials, artefacts, etc., which were created or present during this Event | | |
| [Informationsträger](/documentation/data-model/graph-model#information-storage-medium) | [Information Carrier](/documentation/data-model/graph-model#information-storage-medium) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(an Event may involve multiple Information Storage Mediums; each Inforamtion Storage Medium may be related to multiple Events)</sub> | [Information Storage Medium](#information-storage-medium) | Ein Speichermedium, Aufzeichnungsmedium, Datenträger oder Trägermedium mit Bezug zum Ereignis und deren Digitaler Objekte | A storage medium, recording medium, data carrier or carrier medium related to the Event and its Digital Objects | | |
| [Digitales Objekt](/documentation/data-model/graph-model#digital-object) | [Digital Object](/documentation/data-model/graph-model#digital-object) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(an Event may produced, is documented in, or used multiple Digital Objects; each Digital Object may be related to multiple Events)</sub> | [Digital Object](#digital-object) | Eine Datei, die dieses Ereignis dokumentiert oder aus ihm hervorgegangen ist oder verwendet wurde, samt ihrem zugehörigen Metadatenpaket. Hierbei handelt es sich um die digitalen Archivalien der Hochschulen | A file that documents this Event or has been created or used in it, together with its associated metadata package. These are the digital files of the universities, that are to be archived | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 0-1 | ⨉ | | | Wikidata-ID des Ereignisses | Wikidata ID of the Event | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | GND-Nummer des Ereignisses | GND ID of the Event| | |
| [VIAF-ID](/documentation/data-model/graph-model#viaf-id) | [VIAF ID](/documentation/data-model/graph-model#viaf-id) | 0-1 | ⨉ | | | VIAF-ID des Ereignisses | VIAF ID of the Event | | |
| Ereignis-Eigenschaft | Event Property | 0-n | ✓<br/>(multi create) | many-to-many<br/><sub>(each Event may be linked to multiple Properties, including a certain value solely for this Event; each Property may be used in multiple Events)</sub> | [Event Property](#event-property) | Eine Eigenschaft des Ereignisses, z.B. Dauer, Aufführungstonart oder ähnliches | A property of the Event, e.g. duration, performance key or similar | | |
| [Verknüpftes Ereignis](/documentation/data-model/graph-model#event) | [Related Event](/documentation/data-model/graph-model#event) | 0-n | ✓<br/>(multi create) | many-to-many<br/><sub>(each Event may be linked to multiple other Events, including a unique relation to each of these Events)</sub> | [Related Event (Event-Event Junction Table)](#related-event-event-event-junction-table) | Eine Verknüpfung zu anderen Ereignissen, die in einer bestimmten reziproken Relation stehen | A connection to other Events that have a specific reciprocal relationship | | |
| Datensatz beim Einlieferer | Dataset at the Depositor | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Event may be identified by multiple Datasets at the Depositor; each Dataset at the Depositor refers to exactly one Event)</sub> | [Dataset at the Depositor](#dataset-at-the-depositor) | Eine Signatur und Datum-/Zeitangaben, die das Ereignis beim Einlieferer identifizieren | Am ID and date/time stamps identifying the Event at the depositor | | |

<br/>
<br/>

---

<br/>
<br/>

## Event Actor (Event-Actor Junction Table)

`Ereignisakteur:in (Ereignis-Akteur:in-Kreuztabelle)`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Ereignis](/documentation/data-model/graph-model#event) | [Event](/documentation/data-model/graph-model#event) | 1 | ⨉ | many-to-one<br><sub>(each Event Actor record refers to exactly one Event; an Event may have multiple Actors)</sub> | [Event](#event) | Das Ereignis, an dem eine Akteur:in beteiligt war | The event in which an actor was involved | | |
| [Akteur:in](/documentation/data-model/graph-model#actor) | [Actor](/documentation/data-model/graph-model#actor) | 1 | ⨉ | many-to-one<br><sub>(each Event Actor record refers to exactly one Actor; an Actor may participate in multiple Events)</sub> | [Actor](#actor) | Die Akteur:in, die im jeweiligen Ereignis beteiligt war | Die Akteur:in, die an dem jeweiligen Ereignis beteiligt war  | | |
| ist Urheber:in | is Urheber:in | 0/1 | ⨉ | | | Eine rechtlich bedeutende Auszeichnung, ob der/die jeweilige Akteur:in durch das entsprechende Ereignis Urheberrechte an einem Projekt oder an einem Teil eines Projekts erworben hat. | A legally significant distinction as to whether the respective Actor has acquired "Urheberrechte" through the corresponding Event on a Project or part of a Project | | |
| besitzt Leistungsschutzrechte | holds Leistungsschutzrechte | 0/1 | ⨉ | | | Eine rechtlich bedeutende Auszeichnung, ob der/die jeweilige Akteur:in durch das entsprechende Ereignis Leistungsschutzrechte an einem Projekt oder an einem Teil eines Projekts erworben hat | A legally significant distinction as to whether the respective Actor has acquired "Urheberrechte" through the corresponding Event on a Project or part of a Project | | |
| ist unsicher zugeschrieben | is uncertainly attributed | 0/1 | ⨉ | | | Ein Hinweis darauf, ob unklar war, ob der/die Akteur:in tatsächlich bei dem betreffenden Ereignis anwesend war | A distinctiom whether it was unclear if the Actor really was present at the Event in question | | |
| [Rolle(n) der Akteur:in im Ereignis](/documentation/data-model/graph-model#role) | [Role(s) of the Actor in an Event](/documentation/data-model/graph-model#role) | 1-n | ✓<br/>(multi select) | many-to-many<br><sub>(each Actor in an Event has one or more Roles; the same Role can be assigned in many Events and to many Actors)</sub> | [Role](#role) | Eine oder mehrere Rollen, die eine Akteur:in während des Ereignisses innehatte oder ausführte | One or more Roles that an Actor held or carried out during an Event  |

<br/>
<br/>

---

<br/>
<br/>

## Event Description

`Ereignisbeschreibung`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Beschreibungstext](/documentation/data-model/graph-model#description-text) | [Description Text](/documentation/data-model/graph-model#description-text) | 1 | ⨉ | | |  Eine Beschreibung des Ereignisses | A description of the Event | | |
| Sprachauszeichung der Ereignisbeschreibung | Language Markup of the Event Description | 1 | ⨉ | many-to-one<br/><sub>(each Description has exactly one Language Markup; the same Language can be used for multiple Descriptions)</sub> | [Language](#language) | Eine Sprachauszeichnung samt ISO-Code für die Beschreibung des Ereignisses | A language markup for the description of the Event, including the ISO code | | |
| [Sortierungsnummer](/documentation/data-model/graph-model#sorting-number) | [Sorting Number](/documentation/data-model/graph-model#sorting-number) | 1<br/>(handled through user interaction/separate field) | ⨉ | | | Sortierung der Beschreibung innerhalb eines Ereignisses | Sorting of the Description inside of an Event | | |
| [Ereignis](/documentation/data-model/graph-model#description-text#event) | [Event](/documentation/data-model/graph-model#description-text#event) | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each Description is assigned to exactly one Event; each Event may have multiple Descriptions)</sub> | [Event](#event) | Das zugehörige Ereignis | The associated Event | | |

<br/>
<br/>

---

<br/>
<br/>

## Event Property

`Ereignis-Eigenschaft`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ----------- | ----------- | ----------- | ----------- | ------------ | ----------- | ----------- |
| Ereignis-Eigenschaft | Event Property | 1 | ⨉ | many-to-one<br/><sub>(each Event Property has exactly one Property; the same Property can be used for many Event Properties)</sub> | [Property](#property) | Die Art der Ereignis-Eigenschaft | The type of the Event Property | | |
| Ereignis-Eigenschaft-Wert | Event Property Value | 1 | ⨉ | | | Der eigentliche Wert der Ereignis-Eigenschaft | The actual value of the Event Property | | |
| [Ereignis](/documentation/data-model/graph-model#event) | [Event](/documentation/data-model/graph-model#event) | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each Event Property is assigned to exactly one Event; each Event may have multiple Event Properties)</sub> | [Event](#event) | Das Ereignis, welches die Eigenschaft trägt | The Event that has the Property | | |

<br/>
<br/>

---

<br/>
<br/>

## Event Type

`Ereignistyp`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI des Ereignistyps, für seinen Eintrag in das kontrollierte Vokabular | The automatically generated URI of the Event Type for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  | | Die deutsche Bezeichnung des Ereignistyps | The German appellation of the Event Type | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englische Bezeichnung des Ereignistyps | The German appellation of the Event Type | | |
| [Deutsche Synonyme](/documentation/data-model/graph-model#german-synonym) | [German Synonyms](/documentation/data-model/graph-model#german-synonym) | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten deutschen Synonymen des Ereignistyps | A series of comma-separated German synonyms of the Event Type | | |
| [Englische Synonyme](/documentation/data-model/graph-model#english-synonym) | [German Synonyms](/documentation/data-model/graph-model#english-synonym) | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten englischen Synonymen des Ereignistyps | A series of comma-separated English synonyms of the Event Type | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1 | ⨉ | | | Wikidata-ID des Ereignistyps | Wikidata ID of the Event Type | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | GND-Nummer des Ereignistyps | GND ID of the Event Type | | |
| [AAT-ID](/documentation/data-model/graph-model#aat-id) | [AAT ID](/documentation/data-model/graph-model#aat-id) | 0-1 | ⨉ | | | AAT-ID des Ereignistyps | AAT ID of the Event Type | | |
| [LIDO-Terminlogogie-ID](/documentation/data-model/graph-model#lido-terminology-id) | [LIDO Terminology ID](/documentation/data-model/graph-model#lido-terminology-id) | 0-1 | ⨉ | | | ID des LIDO-Terminologie-Eintrags des Ereignistyps | ID of the LIDO Terminology entry for the Event Type | | |

<br/>
<br/>

---

<br/>
<br/>

## Existing Licence Agreement

`Bestehender Lizenzvertrag`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ | | | Die deutsche Bezeichnung des bestehenden Lizenzvertrages | The German appellation of the Existing Licence Agreement | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ |  |  | Die englische Bezeichnung des bestehenden Lizenzvertrages | The English appellation of the Existing Licence Agreement | Für die englische Sprachversion die deutsche Bezeichnung übernehmen, falls keine englische angegeben wurde | For the English language version, use the German term if no English term is specified |
| Verantwortliche Hochschule | Accountable University | 1 | ⨉ |  | [Depositing University](#depositing-university) | Die Hochschule, die den jeweiligen Vertrages verwaltet | The university that administers the respective contract | | |
| [Deutscher Vertragstext](/documentation/data-model/graph-model#german-wording) | [German Wording](/documentation/data-model/graph-model#german-wording) | 0-1 | ⨉ | | | Der deutsche Text des Vertrages | The German text of the contract | | |
| [Englischer Vertragstext](/documentation/data-model/graph-model#emglish-wording) | [English Wording](/documentation/data-model/graph-model#english-wording) | 0-1 | ⨉ | | | Der englische Text des Vertrages | The English text of the contract | | |
| [PDF](/documentation/data-model/graph-model#pdf) | [PDF](/documentation/data-model/graph-model#pdf) | 0-1 | ⨉ | | | Ein PDF, das den Vertragstext enthält | A PDF that contains the text of the contract | | |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 0-1 | ⨉ | | | Eine zum bestehenden Lizenzvertrag gehörende URI | An URI associated with the existing licence agreement |
| Wählt automatisch folgende Digitales-Objekt-Lizenz aus | Pre-selects following Digital Object Licence  | 0-1 | ⨉ | many-to-one<br/><sub/>(each Existing Licence Agreement may preset a Digital Object to one existing Digital Object Licence; the same Digital Object Licence may be used by multiple Existing Licence Agreements) | [Digital Object Licence](#digital-object-licence) | Eine Digitales-Objekt-Lizenz, die automatisch für alle Digitalen Objekte voreingestellt werden sollte, wenn die entpdrechenden Objekte in einem Ereignis hochgeladen werden, dass von dem verknüpften Projekt aus erstellt wurde | A Digital Object Öicence that should be automatically preset for all Digital Objects when the corresponding objects are uploaded in an Event created from the linked Project | | |
| Wählt automatisch folgenden Anzeigestatus aus | Pre-selects following Display State  | 0-1 | ⨉ | | | Eine Voreinstellung, die außerdem regelt, ob die Datei öffentlich gezeigt werden soll oder nicht. Dabei sind die Einschränkungen der Digitalen Objekt-Lizenzen zu beachten | A preset that also determines whether the file should be displayed publicly or not. The restrictions of the Digital Object Licences must be observed | | |

<br/>
<br/>

---

<br/>
<br/>

## Gender

`Geschlecht`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI des Gendereintrags, für seinen Eintrag in das kontrollierte Vokabular | The automatically generated URI of the gender for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  |  | Die deutsche Genderbezeichnung | The German gender appellation | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ |  |  | Die englische Genderbezeichnung | The English gender appellation | | |

<br/>
<br/>

---

<br/>
<br/>

## Genesis Type

`Entstehungstyp`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI des Entstehungstyps, für seinen Eintrag in das kontrollierte Vokabular | The automatically generated URI of the Genesis Type for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  |  | Die deutsche Bezeichnung des Entstehungstyps | The German appellation of the Genesis Type | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ |  |  | Die englische Bezeichnung des Entstehungstyps | The English appellation of the Genesis Type | | |

<br/>
<br/>

---

<br/>
<br/>

## Information Storage Medium 

`Informationsträger`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  |  | Die deutsche Bezeichnung des Informationsträgers | The German appellation of the Information Storage Medium  | Z.B. ein interner Name oder im Sinne eines Handelsname. Bei selbstbespielbaren Informationsträgern z.b. BASF C-90, Verbatim DVD-R Gold | E.g. an internal name or in the sense of a trade name. For recordable media, e.g. BASF C-90, Verbatim DVD-R Gold | 
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ |  |  | Die englische Bezeichnung des Informationsträgers | The English appellation of the Information Storage Medium  | | |
| [Label](/documentation/data-model/graph-model#label) | [Label](/documentation/data-model/graph-model#label) | 0-1 | ⨉ |  | | Z.B Plattenlabel  | E.g. record label | | | 
| [Informationsträgertyp](/documentation/data-model/graph-model#information-storage-medium-type) | [Information Storage Medium Type](/documentation/data-model/graph-model#information-storage-medium-type) | 1 | ⨉ | one-to-many<br/><sub>(each Information Storage Medium has exactly one Product IDs; each Product ID belongs to exactly one Project)</sub> | [Product ID](#product-id) | [Information Storage Medium Type](#information-storage-medium-type) | Eine Kategorisierung des Informationsträgers. Ein Wert aus der "Informationsträgertyp-Taxonomie" | A categorisation of the Information Storage Medium. A value from the "Information Storage Medium Taxonomy" | | |
| Produkt-ID | Product ID | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Information Storage Medium may have multiple Product IDs; each Product ID belongs to exactly one Project)</sub> | [Product ID](#product-id) | Auswahlliste von Identifikatoren wie "Matritzennummer" oder "ISBN", samt einem zum Informationsträger gehörenden Wert | List of identifiers such as "Matrix Number" or "ISBN", including a value associated with the Information Storage Medium | | |
| [Externe Inventar-Signaturnummer](/documentation/data-model/graph-model#external-inventory-number) | [External Inventory Number](/documentation/data-model/graph-model#external-inventory-number) | 0-1 | ✓<br/>(semicolon separated) | | | Signatur des Objekts in der Einlieferer-Hochschule | Identifier of the object in the Depositing University | | |
| [Aufbewahrungsort](/documentation/data-model/graph-model#place) | [Depository](/documentation/data-model/graph-model#place) | 0-1 | ⨉ | many-to-one<br/><sub>(each Information Storage Medium can have at most one Dpository; the same Place can be used for multiple Information Storage Mediums)</sub> | [Place](#place) | Der derzeitige oder letztbekannte Aufbewahrungsort des Objekts | The current or last known depository of the object | | |
| [Besitzer:in](/documentation/data-model/graph-model#actor) | [Owner](/documentation/data-model/graph-model#actor) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Information Storage Medium may have multiple Owners; each Actor may be linked to multiple Information Storage Mediums)</sub> | [Actor](#actor) | Die derzeitigen oder letztbekannten Besitzer:innen des Informationsträgers | The current or last known owners of the Information Storage Medium | | |
| [Eigentürmer:in](/documentation/data-model/graph-model#actor) | [Legal Rights Holders](/documentation/data-model/graph-model#actor) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Information Storage Medium may have multiple Legal Rights Holders; each Actor may be linked to multiple Information Storage Mediums)</sub> | [Actor](#actor) | Die derzeitigen oder letztbekannten Besitzer:innen des Informationsträgers | The current or last known legal rights holders of the Information Storage Medium | | |
| [Provenienz](/documentation/data-model/graph-model#provenance) | [Provenance](/documentation/data-model/graph-model#provenance) | 0-1 | ⨉ | | | Freitext-Feld z.b. "von 1950-1990 Frau Meyer, ab 1990 Herr Schulze", wird nicht veröffentlicht | Free text field, e.g. "from 1950 to 1990 Mrs. Meyer, from 1990 Mr. Schulze", will not be published  | | |
| [Deutsche Beschreibung](/documentation/data-model/graph-model#german-description) | [German Description](/documentation/data-model/graph-model#german-description) | 0-1 | ⨉ | | | Eine deutsche Beschreibung des Informationsträgers | A German description of the object | | |
| [Englische Beschreibung](/documentation/data-model/graph-model#english-description) | [English Description](/documentation/data-model/graph-model#english-description) | 0-1 | ⨉ | | | Eine englische Beschreibung des Informationsträgers | An English description of the object | | |
| [Deutscher Kommentar](/documentation/data-model/graph-model#german-commentary) | [German Commentary](/documentation/data-model/graph-model#german-commentary) | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte deutsche inhaltlich relevante Bemerkungen/Kommentare zum Informationsträger gegeben werden können | A field in which specific German comments/remarks relevant to the Information Storage Medium can be provided | | |
| [Englischer Kommentar](/documentation/data-model/graph-model#english-commentary) | [English Commentary](/documentation/data-model/graph-model#english-commentary) | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte englische inhaltlich relevante Bemerkungen/Kommentare zum Informationsträger gegeben werden können | A field in which specific English comments/remarks relevant to the Information Storage Medium can be provided | | |
| [Interner Kommentar](/documentation/data-model/graph-model#internal-commentary) | [Internal Commentary](/documentation/data-model/graph-model#internal-commentary) | 0-1 | ⨉ | | | Ein Kommentar, der nur innerhalb des arkumu.nrw-Erfassungssystems für höhere Nutzer:innen angezeigt wird, aber nie öffentlich | A comment that is only displayed within the arkumu.nrw ingest system for higher-level users, but never publicly | Nicht-öffentliche, z. B. Team-interne Bearbeitungsnotizen oder interne Bearbeitungsnotizen aus der Quelldatenbank des Einlieferers | Non-public, e.g. internal team processing notes or internal processing notes from the depositor's source database |
| [Materialschlagwort](/documentation/data-model/graph-model#material-keyword) | [Material Keyword](/documentation/data-model/graph-model#material-keyword) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Physical Object may have multiple Material Keywords; the same Keyword may be linked to multiple Physical Objects)</sub> | [Keyword](#keyword)<br/>(see comment) | Material aus dem Objekt gefertigt ist. z.B. "C-Print", "Polypropylen" | Material from which the object is made. e.g. "C-print", "polypropylene" | | |
| [Maße](/documentation/data-model/graph-model#meassurements) | [Measurements](/documentation/data-model/graph-model#meassurements) | 0-1 | ⨉ | | | Freitext-Feld <br/>Konventionen zum Gebrauch von Maßangaben,siehe: https://de.wikipedia.org/wiki/Abmessungen<br/>"Bei quaderförmigen Objekten, welche eine eindeutige Zuordnung einer Abmessung zur Senkrechten (Höhe) haben, wie z. B. Transportbehälter, wird diese stets zuletzt gelistet."; Länge (L) × Breite (B) × Höhe (H). <br/> "Bei (annähernd) zylindrischen Objekten erfolgt die Angabe üblicherweise in Länge und Durchmesser, wenn die Lage unbestimmt oder mit horizontaler Mittelachse ist" <br/> "Bei zweidimensionalen Objekten ...: Papiermaße: Breite × Höhe. 210 mm × 297 mm bedeutet DIN A4 Hochformat und 297 mm × 210 mm bedeutet A4 Querformat. <br/><br/> Bei Publikationen kann hier ein Seitenumfang angegeben werden. | Free text field <br/>Conventions for the use of measurements, see: https://de.wikipedia.org/wiki/Abmessungen<br/>‘For cuboid objects that have a clear assignment of a dimension to the vertical (height), such as transport containers, this is always listed last.’; Length (L) × width (W) × height (H). <br/> ‘For (approximately) cylindrical objects, the dimensions are usually given in length and diameter if the position is undefined or with a horizontal centre axis.’ <br/> "For two-dimensional objects ...: Paper dimensions: width × height. 210 mm × 297 mm means DIN A4 portrait format and 297 mm × 210 mm means A4 landscape format. <br/><br/> For publications, the page size can be specified here. | | |
| [Erhaltungszustand (Deutsch)](/documentation/data-model/graph-model#condition-state-german) | [Condition State (German)](/documentation/data-model/graph-model#condition-state-german) | 0-1 | ⨉ | | | z.B. "zerstört", "verschollen". Freitext. | e.g. "zerstört", "verschollen". Free Text. | | |
| [Erhaltungszustand (Englisch)](/documentation/data-model/graph-model#condition-state-english) | [Condition State (English)](/documentation/data-model/graph-model#condition-state-english) | 0-1 | ⨉ | | | z.B. "destroyed", "lost". Freitext. | e.g. "destroyed", "lost". Free text. | | |
| Kompilation | Compilation | 0/1<br/>(enum) | ⨉ | | | "ja", "nein", oder keine Aussage (leere Auswahl), ob es sich z.B. bei einem Band und eine Kompilation handelt (Beispielfall: Filmbänder der KHM) | "yes", "no", or no statement (blank selection) as to whether e.g. a tape holds/is a compilation (example: film tapes of the KHM) |  |
| Kompilationstitel | Compilation Title  | 0-1 | ⨉ | | | Die Bezeichnung der jeweiligen Kompilation | The appellation of said compilation | | |
| Kompilations-Reihennummer | Compilation Series Number  | 0-1 | ⨉ | | | Ein interner Identifikator für die Kompilation (z.B. KHM-Reihennummer) | An internal identifier for compilation (e.g. "KHM-Reihennummer") | | |
| [Originalsprache](/documentation/data-model/graph-model#original-language) | [Original Language](/documentation/data-model/graph-model#original-language) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Information Storage Medium may hold multiple Original Languages; each Language can be linked to multiple Information Storage Mediums)</sub> | [Language](#language) | Die Originalsprache bezeichnet die Sprache, in der ein audiovisueller Inhalt ursprünglich erstellt bzw. erstmals veröffentlicht wurde | The Original Language refers to the language in which an audiovisual content was originally created or first published | | |
| [Untertitelsprache](/documentation/data-model/graph-model#subtitle-language) | [Subtitle Language](/documentation/data-model/graph-model#subtitle-language) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Information Storage Medium may hold multiple Subtitle Languages; each Language can be linked to multiple Information Storage Mediums)</sub> | [Language](#language) | Die Untertitelsprache bezeichnet die Sprache der textlichen Untertitel, die zur Wiedergabe eines audiovisuellen Inhalts auf einem bestimmten Informationsträger verfügbar sind. Sie dient der Übersetzung oder der barrierefreien Nutzung und kann in mehreren Sprachen angeboten werden | The Subtitle Language refers to text subtitles that are available besides the audiovisual content on a specific Information Storage Medium. They are used for translation or accessibility reasons and can be prevalent in several languages | | |
| [Sprachversion](/documentation/data-model/graph-model#language-version) | [Language Version](/documentation/data-model/graph-model#language-version) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Information Storage Medium may hold multiple Language Version; each Language can be linked to multiple Information Storage Mediums)</sub> | [Language](#language) | Die Sprachfassung beschreibt die Sprache der auf einem Informationsträger zusätzlich enthaltenen Tonspuren. Sie gibt an, in welcher Sprache der meist gesprochene Inhalt wiedergegeben wird (z. B. als Tonspur einer synchronisierten Fassung). | The Language Version describes the language of additional audio tracks contained on an Information Storage Medium. It specifies the language in which the mostly spoken content is presented (e.g. as the audio track of a dubbed version) | | |
| Informationsträger-Eigenschaften | Information Storage Medium Properties | 0-n | ✓<br/>(multi create) | many-to-many<br/><sub>(each Information Storage Medium may be linked to multiple Properties, including a certain value solely for this Information Storage Medium; each Property may be used in multiple Information Storage Mediums)</sub> | [Information Storage Medium Property](#information-storage-medium-property) | Eine Eigenschaft des Informationsträgers, z.B. Dauer oder Bildfrequenz | A property of the project, e.g. duration or frame rate | | |
| Datensatz beim Einlieferer | Dataset at the Depositor | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Information Storage Medium may be identified by multiple Datasets at the Depositor; each Dataset at the Depositor refers to exactly one Information Storage Medium)</sub> | [Dataset at the Depositor](#dataset-at-the-depositor) | Eine Signatur und Datum-/Zeitangaben, die den Informationsträger beim Einlieferer identifizieren | Am ID and date/time stamps identifying the Information Storage Medium at the depositor | | |

<br/>
<br/>

---

<br/>
<br/>

## Information Storage Medium Property

`Informationsträger-Eigenschaft`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ----------- | ----------- | ----------- | ----------- | ------------ | ----------- | ----------- |
| Informationsträger-Eigenschaft | Information Storage Medium Property | 1 | ⨉ | many-to-one<br/><sub>(each Information Storage Medium Property has exactly one Property; the same Property can be used for many Information Storage Medium Properties)</sub> | [Property](#property) | Die Art der Informationsträger-Eigenschaft | The type of the Information Storage Medium Property | | |
| Informationsträger-Eigenschaft-Wert | Information Storage Medium Property Value | 1 | ⨉ | | | Der eigentliche Wert der Informationsträger-Eigenschaft | The actual value of the Information Storage Medium Property | | |
| [Informationsträger](/documentation/data-model/graph-model#information-storage-medium) | [Information Storage Medium](/documentation/data-model/graph-model#information-storage-medium) | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each Information Storage Medium Property is assigned to exactly one Information Storage Medium; each Information Storage Medium may have multiple Information Storage Medium Properties)</sub> | [Information Storage Medium](#information-storage-medium) | Der Informationsträger, welcher die Eigenschaft trägt | The Information Storage Medium that has the Property | | |

<br/>
<br/>

---

<br/>
<br/>

## Information Storage Medium Type

`Informationsträgertyp`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI des Informationsträgertyps, für seinen Eintrag in das kontrollierte Vokabular | The automatically generated URI of the Information Storage Medium Type for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  | | Die deutsche Bezeichnung des Informationsträgertyps | The German appellation of the Information Storage Medium Type | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englische Bezeichnung des Informationsträgertyps | The German appellation of the Information Storage Medium Type | | |
| [Deutsche Synonyme](/documentation/data-model/graph-model#german-synonym) | [German Synonyms](/documentation/data-model/graph-model#german-synonym) | 0-1 | ✓<br/>(semicolon separated) | | | Eine Reihe von semikolongetrennten deutschen Synonymen des Informationsträgertyps | A series of semicolon-separated German synonyms of the Information Storage Medium Type | | |
| [Englische Synonyme](/documentation/data-model/graph-model#english-synonym) | [German Synonyms](/documentation/data-model/graph-model#english-synonym) | 0-1 | ✓<br/>(semicolon separated) | | | Eine Reihe von semikolongetrennten englischen Synonymen des Informationsträgertyps | A series of semicolon-separated English synonyms of the Information Storage Medium Type | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1 | ⨉ | | | Wikidata-ID des Informationsträgertyps | Wikidata ID of the Information Storage Medium Type | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | GND-Nummer des Informationsträgertyps | GND ID of the Information Storage Medium Type | | |
| [AAT-ID](/documentation/data-model/graph-model#aat-id) | [AAT ID](/documentation/data-model/graph-model#aat-id) | 0-1 | ⨉ | | | AAT-ID des Informationsträgertyps | AAT ID of the Information Storage Medium Type | | |
| [PBCore-Link] | [PBCore Link] | 0-1 | ⨉ | | | PBCore-Link zum Informationsträgertyps | PBCore Link to the Information Storage Medium Type | | |
| [Übergeordneter Informationsträgertyp](/documentation/data-model/graph-model#information-storage-medium-type) | [Parent Information Storage Medium Type](/documentation/data-model/graph-model#information-storage-medium-type) | 0-1 | ⨉ | many-to-one<br/><sub>(each Information Storage Medium Type can have at most one Parent Information Storage Medium Type; an Information Storage Medium Type can be the parent of many children)</sub> | [Information Storage Medium Type](#information-storage-medium-type) | Eine bereits angelegter, direkt übergordnete Rolle | An already created, directly superordinate role | | |
| Deutscher Breadcrumb | German Breadcrumb | 1<br/>(handled automatically) | ⨉ | | | Der zusammengesetze deutsche Breadcrumb mit allen übergeordneten Informationsträgertypen | The composite German breadcrumb with all Parent Information Storage Medium Types | Das folgende Feld sollte hinzugefügt werden um die Rechenlast zu mindern | The following field should be added to reduce the processing load |
| Englischer Breadcrumb | English Breadcrumb| 1<br/>(handled automatically) | ⨉ | | | Der zusammengesetze englische Breadcrumb mit allen übergeordneten Informationsträgertypen | The composite English Breadcrumb with all Parent Information Storage Medium Types | Das folgende Feld sollte hinzugefügt werden um die Rechenlast zu mindern | The following field should be added to reduce the processing load |

<br/>
<br/>

---

<br/>
<br/>

## Keyword

`Schlagwort`

| Diese Entität kann entweder zentral oder getrennt verwendet werden, letzteres als **Schlagwort**, **Klassifizierendes Schlagwort**, **Materialschlagwort** und **Technikschlagwort**. | This entity can be used either centrally or separated, the latter as a **Keyword**, **Classifying keyword**, **Material keyword** and **Technique Keyword**. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutsches Wikidata-Label](/documentation/data-model/graph-model#german-wikidata-label) | [German Wikidata Label](/documentation/data-model/graph-model#german-wikidata-label) | 1<br/>(handled automatically) | ⨉ | | | Der deutsche Bezeichnung des Ortes, aus Wikidata ausgelesen | The German appellation of the place, retrieved from Wikidata | | |
| [Englisches Wikidata-Label](/documentation/data-model/graph-model#english-wikidata-label) | [English Wikidata Label](/documentation/data-model/graph-model#english-wikidata-label) | 1<br/>(handled automatically) | ⨉ | | | Die englische Bezeichnung des Ortes, aus Wikidata ausgelesen | The English appellation of the place, retrieved from Wikidata | | |
| [Deutsche Wikidata-Synonyme](/documentation/data-model/graph-model#german-wikidata-synonym) | [German Wikidata Synonyms](/documentation/data-model/graph-model#german-wikidata-synonym) | 0-1<br/>(handled automatically) | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten deutschen Synonymen des Schlagworts, aus Wikidata ausgelesen | A series of comma-separated German synonyms of the Keyword, retreived from Wikidata | | |
| [Englische Wikidata-Synonyme](/documentation/data-model/graph-model#english-wikidata-synonym) | [English Wikidata Synonyms](/documentation/data-model/graph-model#english-wikidata-synonym) | 0-1<br/>(handled automatically) | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten englischen Synonymen des Schlagworts, aus Wikidata ausgelesen | A series of comma-separated English synonyms of the Keyword, retreived from Wikidata | | |
| [Deutsche Wikidata-Beschreibung](/documentation/data-model/graph-model#german-wikidata-description) | [German Wikidata Description](/documentation/data-model/graph-model#german-wikidata-description) | 0-1<br/>(handled automatically) | ⨉ | | | Eine deutsche Beschreibung des Schlagworts, aus Wikidata ausgelesen | A German description of the Keyword, retreived from Wikidata | | |
| [Englische Wikidata-Beschreibung](/documentation/data-model/graph-model#english-wikidata-description) | [English Wikidata Description](/documentation/data-model/graph-model#english-wikidata-description) | 0-1<br/>(handled automatically) | ⨉ | | | Eine englische Beschreibung des Schlagworts, aus Wikidata ausgelesen | An English description of the Keyword, retreived from Wikidata | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1<br/>(handled automatically) | ⨉ | | | Wikidata-ID des Schlagworts, aus Wikidata ausgelesen | Wikidata ID of the Keyword, retrieved from Wikidata | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1<br/>(handled automatically) | ⨉ | | | GND-Nummer des Schlagworts, aus Wikidata ausgelesen | GND ID of the Keyword, retrieved from Wikidata | | |

<br/>
<br/>

---

<br/>
<br/>

## Language

`Sprache`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ | | | Die deutsche, genormte Bezeichnung der Sprache nach ISO 693-2 | The German appellation of the language, in accordance to ISO 639-2 | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englisch, genormte Bezeichnung der Sprache nach ISO 693-2 | The English appellation of the language, in accordance to ISO 639-2 | | |
| [ISO 639-2(B)-Code](/documentation/data-model/graph-model#iso639-2b-code) | [ISO 639-2(B) Code](/documentation/data-model/graph-model#iso639-2b-code) | 1 | ⨉ | | | Der entsprechende bibliografische Identifikator | The according bibliographic identifier | | |
| [ISO 639-2(T)-Code](/documentation/data-model/graph-model#iso639-2t-code) | [ISO 639-2(T) Code](/documentation/data-model/graph-model#iso639-2t-code) | 1 | ⨉ | | | Der entsprechende terminologische Identifikator | The according terminologic identifier | | |
| [ISO 639-1 Code](/documentation/data-model/graph-model#iso639-1-code) | [ISO 639-1 Code](/documentation/data-model/graph-model#iso639-1-code) | 0-1 | ⨉ | | | Der ältere Idenfikator aus Kompatibilitätsgründen | The older identifier for compatibility reasons | | |

<br/>
<br/>

---

<br/>
<br/>

## Media Type

`Medientyp`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI des Medentyps, für seinen Eintrag in das kontrollierte Vokabular | The automatically generated URI of the Media Type for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  |  | Die deutsche Bezeichnung des Medientyps | The German appellation of the Media Type | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ |  |  | Die englische Bezeichnung des Medientyps | The English appellation of the Media Type | | |

<br/>
<br/>

---

<br/>
<br/>

## Organisational Unit

`Organisationseinheit`

| Das Feld "Hochschule" wurde entfernt, da diese nun auch eigenständig als eigene Organisationseinheiten auswählbar sind. | The field "University" has been removed, as these can now be selected as organisational units as well. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI der Organisationseinheit, für ihren Eintrag in das kontrollierte Vokabular | The automatically generated URI of the Organisational Unit for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ | | | Die deutsche Bezeichnung der Organisationseinheit | The German appellation of the Organisational Unit | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englische Bezeichnung der Organisationseinheit | English appellation for the object, e.g. "Main part of the sculpture", "right half", "left half", etc. | | |
| [Deutsche Beschreibung](/documentation/data-model/graph-model#german-description) | [German Description](/documentation/data-model/graph-model#german-description) | 0-1 | ⨉ | | | Eine deutsche Beschreibung der Organisationseinheit | A German description of the Organisational Unit | | |
| [Englische Beschreibung](/documentation/data-model/graph-model#english-description) | [English Description](/documentation/data-model/graph-model#english-description) | 0-1 | ⨉ | | | Eine englische Beschreibung der Organisationseinheit | An English description of the object | | |
| [Übergeordnete Organisationseinheit](/documentation/data-model/graph-model#organisational-unit) | [Parent Organisational Unit](/documentation/data-model/graph-model#role) | 0-1 | ⨉ | many-to-one<br/><sub>(each Organisational Unit can have at most one Parent Organisational Unit; an Organisational Unit can be the parent of many children)</sub> | [Organisational Unit](#organisational-unit) | Eine bereits angelegte, direkt übergordnete Organisationseinheit | An already created, directly superordinate Organisational Unit | | |
| Deutscher Breadcrumb | German Breadcrumb | 1<br/>(handled automatically) | ⨉ | | | Der zusammengesetze deutsche Breadcrumb mit allen übergeordneten Organisationseinheiten | The composite German breadcrumb with all Parent Organisational Units | Das folgende Feld sollte hinzugefügt werden um die Rechenlast zu mindern | The following field should be added to reduce the processing load |
| Englischer Breadcrumb | English Breadcrumb| 1<br/>(handled automatically) | ⨉ | | | Der zusammengesetze englische Breadcrumb mit allen übergeordneten Organisationseinheiten | The composite English Breadcrumb with all Parent Organisational Units | Das folgende Feld sollte hinzugefügt werden um die Rechenlast zu mindern | The following field should be added to reduce the processing load |

<br/>
<br/>

---

<br/>
<br/>

## Physical Object

`Physisches Objekt`


| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ | | | Deutsche Bezeichnung für das Objekt, z.B. "Hauptteil der Skulptur", "rechte Hälfte", "linke Hälfte", etc. | German appellation for the object, e.g. "Main part of the sculpture", "right half", "left half", etc. | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Englische Bezeichnung für das Objekt, z.B. "Hauptteil der Skulptur", "rechte Hälfte", "linke Hälfte", etc. | English appellation for the object, e.g. "Main part of the sculpture", "right half", "left half", etc. | | |
| [Externe Inventar-Signaturnummer](/documentation/data-model/graph-model#external-inventory-number) | [External Inventory Number](/documentation/data-model/graph-model#external-inventory-number) | 0-1 | ✓<br/>(semicolon separated) | | | Signatur des Objekts in der Einlieferer-Hochschule | Identifier of the object in the Depositing University | | |
| [Aufbewahrungsort](/documentation/data-model/graph-model#place) | [Depository](/documentation/data-model/graph-model#place) | 0-1 | ⨉ | many-to-one<br/><sub>(each Physical Object can have at most one Dpository; the same Place can be used for multiple Physical Objects)</sub> | [Place](#place) | Der derzeitige oder letztbekannte Aufbewahrungsort des Objekts | The current or last known depository of the object | | |
| [Besitzer:in](/documentation/data-model/graph-model#actor) | [Owner](/documentation/data-model/graph-model#actor) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Physical Object may have multiple Owners; each Actor may be linked to multiple Physical Objects)</sub> | [Actor](#actor) | Die derzeitigen oder letztbekannten Besitzer:innen des Objekts | The current or last known owners of the object | | |
| [Eigentürmer:in](/documentation/data-model/graph-model#actor) | [Legal Rights Holders](/documentation/data-model/graph-model#actor) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Physical Object may have multiple Legal Rights Holders; each Actor may be linked to multiple Physical Objects)</sub> | [Actor](#actor) | Die derzeitigen oder letztbekannten Besitzer:innen des Objekts | The current or last known legal rights holders of the object | | |
| [Provenienz](/documentation/data-model/graph-model#provenance) | [Provenance](/documentation/data-model/graph-model#provenance) | 0-1 | ⨉ | | | Freitext-Feld z.b. "von 1950-1990 Frau Meyer, ab 1990 Herr Schulze", wird nicht veröffentlicht | Free text field, e.g. "from 1950 to 1990 Mrs. Meyer, from 1990 Mr. Schulze", will not be published  | | |
| [Deutsche Beschreibung](/documentation/data-model/graph-model#german-description) | [German Description](/documentation/data-model/graph-model#german-description) | 0-1 | ⨉ | | | Eine deutsche Beschreibung des Objekt | A German description of the object | | |
| [Englische Beschreibung](/documentation/data-model/graph-model#english-description) | [English Description](/documentation/data-model/graph-model#english-description) | 0-1 | ⨉ | | | Eine englische Beschreibung des Objekt | An English description of the object | | |
| [Deutscher Kommentar](/documentation/data-model/graph-model#german-commentary) | [German Commentary](/documentation/data-model/graph-model#german-commentary) | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte deutsche inhaltlich relevante Bemerkungen/Kommentare zum Objekt gegeben werden können | A field in which specific German comments/remarks relevant to the object can be provided | | |
| [Englischer Kommentar](/documentation/data-model/graph-model#english-commentary) | [English Commentary](/documentation/data-model/graph-model#english-commentary) | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte englische inhaltlich relevante Bemerkungen/Kommentare zum Objekt gegeben werden können |A field in which specific English comments/remarks relevant to the object can be provided | | |
| [Interner Kommentar](/documentation/data-model/graph-model#internal-commentary) | [Internal Commentary](/documentation/data-model/graph-model#internal-commentary) | 0-1 | ⨉ | | | Ein Kommentar, der nur innerhalb des arkumu.nrw-Erfassungssystems für höhere Nutzer:innen angezeigt wird, aber nie öffentlich | A comment that is only displayed within the arkumu.nrw ingest system for higher-level users, but never publicly | Nicht-öffentliche, z. B. Team-interne Bearbeitungsnotizen oder interne Bearbeitungsnotizen aus der Quelldatenbank des Einlieferers | Non-public, e.g. internal team processing notes or internal processing notes from the depositor's source database |
| [Klassifizierendes Schlagwort](/documentation/data-model/graph-model#classifying-keyword) | [Classifying Keyword](/documentation/data-model/graph-model#classifying-keyword) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Physical Object may have multiple Classifying Keywords; the same Keyword may be linked to multiple Physical Objects)</sub> | [Keyword](#keyword)<br/>(see comment) | Eine Klassifizierung des Objekts als Teil der Sacherschließung/Beschreibung, z.B. "Barco Monitor" | A classification of the object, e.g. "Barco Monitor" | | |
| [Materialschlagwort](/documentation/data-model/graph-model#material-keyword) | [Material Keyword](/documentation/data-model/graph-model#material-keyword) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Physical Object may have multiple Material Keywords; the same Keyword may be linked to multiple Physical Objects)</sub> | [Keyword](#keyword)<br/>(see comment) | Material aus dem Objekt gefertigt ist. z.B. "C-Print", "Polypropylen" | Material from which the object is made. e.g. "C-print", "polypropylene" | | |
| [Kommentar zur Technik (Deutsch)](/documentation/data-model/graph-model#german-technique-commentary) | [German Technique Commentary](/documentation/data-model/graph-model#german-technique-commentary) | 0-1 | ⨉ | | | Freitext auf Deutsch über die verwendete künstlerische Technik, z.B. "C-Print auf Alu Dibond", "Aquarell auf Hahnemühle 300g", "Monotypie und Bleistift", etc. | Free text in German about the artistic technique used, e.g. "C-Print auf Alu Dibond", "Aquarell auf Hahnemühle 300g", "Monotypie und Bleistift", etc. | | |
| [Kommentar zur Technik (Englisch)](/documentation/data-model/graph-model#english-technique-commentary) | [English Technique Commentary](/documentation/data-model/graph-model#english-technique-commentary) | 0-1 | ⨉ | | | Freitext auf Englisch über die verwendete künstlerische Technik, z.B. "C-print on aluminium Dibond", "watercolour on Hahnemühle 300g", "monotype and pencil", etc. | Free text inEnglish about the artistic technique used, e.g. "C-print on aluminium Dibond", "watercolour on Hahnemühle 300g", "monotype and pencil", etc. | | |
| [Technikschlagwort](/documentation/data-model/graph-model#technique-keyword) | [Technique Keyword](/documentation/data-model/graph-model#technique-keyword) | 0-n | ✓<br/>(multi select) | [Keyword](#keyword)<br/>(see comment) | many-to-many<br/><sub>(each Physical Object may have multiple Material Keywords; the same Keyword may be linked to multiple Physical Objects)</sub> | verwendete künstlerische Technik (Wikidata-Schlagwort), z.B. C-Print, Alu Dibond, Aquarell, Hahnemühle-Papier, Monotypie, Bleistift, etc. | | | |
| [Maße](/documentation/data-model/graph-model#meassurements) | [Measurements](/documentation/data-model/graph-model#meassurements) | 0-1 | ⨉ | | | Freitext-Feld <br/>Konventionen zum Gebrauch von Maßangaben,siehe: https://de.wikipedia.org/wiki/Abmessungen<br/>"Bei quaderförmigen Objekten, welche eine eindeutige Zuordnung einer Abmessung zur Senkrechten (Höhe) haben, wie z. B. Transportbehälter, wird diese stets zuletzt gelistet."; Länge (L) × Breite (B) × Höhe (H). <br/> "Bei (annähernd) zylindrischen Objekten erfolgt die Angabe üblicherweise in Länge und Durchmesser, wenn die Lage unbestimmt oder mit horizontaler Mittelachse ist" <br/> "Bei zweidimensionalen Objekten ...: Papiermaße: Breite × Höhe. 210 mm × 297 mm bedeutet DIN A4 Hochformat und 297 mm × 210 mm bedeutet A4 Querformat. <br/><br/> Bei Publikationen kann hier ein Seitenumfang angegeben werden. | Free text field <br/>Conventions for the use of measurements, see: https://de.wikipedia.org/wiki/Abmessungen<br/>‘For cuboid objects that have a clear assignment of a dimension to the vertical (height), such as transport containers, this is always listed last.’; Length (L) × width (W) × height (H). <br/> ‘For (approximately) cylindrical objects, the dimensions are usually given in length and diameter if the position is undefined or with a horizontal centre axis.’ <br/> "For two-dimensional objects ...: Paper dimensions: width × height. 210 mm × 297 mm means DIN A4 portrait format and 297 mm × 210 mm means A4 landscape format. <br/><br/> For publications, the page size can be specified here. | | |
| [Erhaltungszustand (deutsch)](/documentation/data-model/graph-model#condition-state-german) | [Condition State (German)](/documentation/data-model/graph-model#condition-state-german) | 0-1 | ⨉ | | | z.B. "im Original vorhanden", "zerstört", "verschollen". Freitext. | e.g. "im Original vorhanden", "zerstört", "verschollen". Free Text. | | |
| [Erhaltungszustand (englisch)](/documentation/data-model/graph-model#condition-state-english) | [Condition State (English)](/documentation/data-model/graph-model#condition-state-english) | 0-1 | ⨉ | | | z.B. "present in the original form", "destroyed", "lost". Freitext. | e.g. "present in the original form", "destroyed", "lost". Free text. | | |
| Datensatz beim Einlieferer | Dataset at the Depositor | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Physical Object may be identified by multiple Datasets at the Depositor; each Dataset at the Depositor refers to exactly one Physical Object)</sub> | [Dataset at the Depositor](#dataset-at-the-depositor) | Eine Signatur und Datum-/Zeitangaben, die das Physische Objekt beim Einlieferer identifizieren | Am ID and date/time stamps identifying the Physical Object at the depositor | | |

<br/>
<br/>

---

<br/>
<br/>

## Place

`Ort`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutsches Wikidata-Label](/documentation/data-model/graph-model#german-wikidata-label) | [German Wikidata Label](/documentation/data-model/graph-model#german-wikidata-label) | 1<br/>(handled automatically) | ⨉ | | | Der deutsche Bezeichnung des Ortes, aus Wikidata ausgelesen | The German appellation of the place, retrieved from Wikidata | | |
| [Englisches Wikidata-Label](/documentation/data-model/graph-model#english-wikidata-label) | [English Wikidata Label](/documentation/data-model/graph-model#english-wikidata-label) | 1<br/>(handled automatically) | ⨉ | | | Die englische Bezeichnung des Ortes, aus Wikidata ausgelesen | The English appellation of the place, retrieved from Wikidata | | |
| Ortart | Place Type | 1<br/>(pre-selected automatically) | ⨉ | many-to-one<br/><sub>(each Place can have at most one Place Type; the same Place Type can be used for multiple Places)</sub> | [Place Type](#place-type) | Entweder: Kontinent (Q5107)<br/>Land (Q6256)<br/>Region Q82794<br/>Stadt (Q515)<br/>Genauer Ort<br/> Interner Ort | Either: Continent (Q5107)<br/>Country (Q6256)<br/>Region Q82794<br/>City (Q515)<br/>Exact location<br/>Internal location | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1<br/>(handled automatically) | ⨉ | | | Wikidata-ID des Ortes, aus Wikidata ausgelesen | Wikidata ID of the Place, retrieved from Wikidata | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1<br/>(handled automatically) | ⨉ | | | GND-Nummer des Ortes, aus Wikidata ausgelesen | GND ID of the Place, retrieved from Wikidata | | |
| [VIAF-ID](/documentation/data-model/graph-model#viaf-id) | [VIAF ID](/documentation/data-model/graph-model#viaf-id) | 0-1<br/>(handled automatically) | ⨉ | | | VIAF-ID des Ortes, aus Wikidata ausgelesen | VIAF ID of the Place, retrieved from Wikidata | | |
| [Längengrad](/documentation/data-model/graph-model#longitude) | [Longitude](/documentation/data-model/graph-model#longitude) | 1<br/>(handled automatically) | ⨉ | | | Längengrad des Ortes, aus Wikidata ausgelesen | Longitude of the Place, retreived from Wikidata | | |
| [Breitengrad](/documentation/data-model/graph-model#latitude) | [Latitude](/documentation/data-model/graph-model#latitude) | 1<br/>(handled automatically) | ⨉ | | | Breitengrad des Ortes, aus Wikidata ausgelesen | | | |
| [Übergeordneter Ort](/documentation/data-model/graph-model#place) | [Parent Place](/documentation/data-model/graph-model#place) | 0-1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each Role can have at most one Parent Role; a Role can be the parent of many children)</sub> | [Place](#place) | Ein bereits angelegter oder neuer, direkt übergordneter Ort. Existiert der übergordnete Ort noch nicht, wird dieser und alle weiteren übergeordneten Orte automatisch angelegt | An existing or new, directly superordinate Place. If the superordinate Place does not yet exist, it and all other superordinate places are created automatically | | |
| Deutscher Breadcrumb | German Breadcrumb | 1<br/>(handled automatically) | ⨉ | | | Der zusammengesetze deutsche Breadcrumb mit allen übergeordneten Orten | The composite German breadcrumb with all Parent Places  | Das folgende Feld sollte hinzugefügt werden um die Rechenlast zu mindern | The following field should be added to reduce the processing load |
| Englischer Breadcrumb | English Breadcrumb| 1<br/>(handled automatically) | ⨉ | | | Der zusammengesetze englische Breadcrumb mit allen übergeordneten Orten | The composite English Breadcrumb with all Parent Places | Das folgende Feld sollte hinzugefügt werden um die Rechenlast zu mindern | The following field should be added to reduce the processing load |

<br/>
<br/>

---

<br/>
<br/>

## Place Type

`Ortart`

| Diese Entität ist hier lediglich skizziert und kann bei Bedarf um andere Felder erweitert werden. Das letzte Feld, "Technische Wikidata-IDs", enthält dabei eine Reihe von Wikidata-IDs, die für die automatische Erstellung der oben sprezifizierten Ort-Breadcrumbs (z.B. "Europa > Deutschland > Hessen > Frankfurt am Main") benötigt werden. Die in diesem Feld eingetragenen IDs werden dazu verwendet, um z.B über den SPARQL-Endpunkt der Wikidata korrekt die übergeordneten geografischen Einheiten abzufragen und die vollständige Hierarchie aufzubauen. Eine saubere Umsetzung dieses Feldes könnte auch über eine eigene Entität erfolgen, die simultan zur Wikidata-Schlagwortsuche funktioniert, in der immer das deutsche und englische Wikidata-Label mitgeladen wird, sodass man stets einen sauberen Überblick hat, welche Wikidata-IDs gerade technisch zum Generieren des Breadcrumbs verwendet werden. | This entity is merely outlined here and can be extended with additional fields as needed. The last field, "Technical Wikidata IDs", contains a series of Wikidata IDs that are required for the automatic generation of the Place breadcrumbs specified above (e.g., "Europe > Germany > Hesse > Frankfurt am Main"). The IDs entered in this field are used to correctly query the parent geographic units, for example via Wikidata's SPARQL endpoint, and to construct the complete hierarchy. A clean implementation of this field could also be achieved through a separate entity that works like the Wikidata keyword search, always loading the German and English Wikidata Labels, so that one always has a clear overview of which Wikidata IDs are currently being used technically generate the breadcrumb. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ----------- | ----------- | ----------- | ----------- | ------------ | ----------- | ----------- |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI der Ortart, für ihren Eintrag in das kontrollierte Vokabular | The automatically generated URI of the Place Type for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ | | | Die deutsche Bezeichnung der Ortart | The German appellation of the Place Type | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englische Bezeichnung Bezeichnung der Ortart | The German appellation of the Place Type | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1  | ⨉ | | | Die zentrale Wikidata-ID der Ortart | The central Wikidata ID of the Product Type | Siehe hierzu die Tabelle [Ort](#place) | See, on this matter, the table [Place](#place) |
| [Technische Wikidata-IDs](/documentation/data-model/graph-model#wikidata-id) | [Technical Wikidata IDs](/documentation/data-model/graph-model#wikidata-id) | 1-n | ✓<br/>(for example comma separated) | | | Eine Reihe von Wikidata-IDs, die zur Erstellung der automatischen Breadcrumbs der Orte-Entität benötigt werden | A series of Wikidata IDs required to generate the automatic breadcrumbs for the Place entity | | |


<br/>
<br/>

---

<br/>
<br/>

## Product ID 

`Produkt-ID`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ----------- | ----------- | ----------- | ----------- | ------------ | ----------- | ----------- |
| Produkt-ID-Typ | Product ID Type | 1 | ⨉ | many-to-one<br/><sub>(each Product ID has exactly one Product ID Type; the same Product ID Type can be used for many Product IDs)</sub> | [Product ID Type](#product-id-type) | Die Art der Produkt-ID, z.B. "ISBN", "Matritzennummer", "Katalognummer", etc. | The type of the Product ID, e.g. "ISBN", "Matrix Number", "Catalogue Number", etc. | | |
| [Produkt-ID-Wert](/documentation/data-model/graph-model#product-id-value) | [Product ID Value](/documentation/data-model/graph-model#product-id-value) | 1 | ⨉ | | | Die eigentliche Produkt-ID selber | The actual Product ID itself | | |
| [Informationsträger](/documentation/data-model/graph-model#description-text#information-storage-medium) | [Information Storage Medium](/documentation/data-model/graph-model#description-text#information-storage-medium) | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each Product ID refers to exactly one Information Storage Medium; an Information Storage Medium may have multiple Product IDs)</sub> | [Information Storage Medium](#project) | Der Informationsträger, welcher die Produkt ID trägt und/oder durch welche er identifiziert wird | The Information Storage Medium that displays the Product ID and/or is identified by it | | |

<br/>
<br/>

---

<br/>
<br/>

## Product ID Type

`Produkt-ID-Typ`

| Die Entität "Nummernart" wurde in "Produkt-ID-Typ" umbenannt, und somit an die Benennung des entsprechenden Feldes in der Entität "Informationsträger" angepasst zu werden. | The entity "Number Type" has been renamed "Product ID Type" to match the name of the corresponding field in the entity "Information Storage Medium". |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ | | | Die deutsche Bezeichnung des Produkt-ID-Typs, z.B. "ISBN", "Matritzennummer", "Katalognummer", etc. | The German appellation of the Product ID Type, e.g. "ISBN", "Matritzennummer", "Katalognummer", etc. | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englische Bezeichnung der Produkt-ID-Typs, z.B. "ISBN", "Matrix Number", "Catalogue Number", etc. | English appellation for the Product ID Type, e.g. "ISBN", "Matrix Number", "Catalogue Number", etc. | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1  | ⨉ | | | Wikidata-ID Produkt-ID-Typs | Wikidata ID of the Product ID Type | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | GND-Nummer des Produkt-ID-Typs | GND ID of the Product ID Type | | |

<br/>
<br/>

---

<br/>
<br/>

## Project

`Projekt`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Bearbeitungs-Status | Processing Status | 1 | ⨉ | | | Ein Feld, welches den aktuellen Bearbeitungs-Status des Projekts wiedergibt. Der Kommentar ist zu beachten! | A field that shows the current processing status of the project. Please note the comment! | Es enthält folgende Optionen:<br/>1. Automatisch importiert (nicht per Hand auswählbar)<br/>2. in Bearbeitung (Daten werden aus Quellsystem übertragen, werden angereichert)<br/>3. Daten eingetragen und angereichert, zu prüfen (durch Manager:in, ggf. Rechteinhaber:in/Künstler:in)<br/>4. Daten werden geprüft (dazu kurze Info zu Details im internen Kommentar: wer prüft, was wurde unternommen, worauf warten wir)<br/>5. Prüfung durch alle Parteien abgeschlossen, Ingest kann veranlasst werden<br/>6. Rosetta Ingest durchgeführt<br/><br/>Wenn nach dem Ingest ndie Daten neu editiert werden, sollte man den Status zurücksetzen auf Schritt "in Bearbeitung". Dies könnte auch automatisch erfolgen. Ebenfalls bitte internen Kommentar hinterlegen, was die Änderungen sind (z.B. "Name war falsch geschrieben") | It contains the following options:<br/>1. Automatically imported (cannot be selected manually)<br/>2. In progress (data is transferred from the source system and is being enriched)<br/>3. Data entered and enriched, to be checked (by manager, rights holder/artist if applicable)<br/>4. Data is being checked (with brief information on details in Internal Commentary: who is checking, what has been done, what are we waiting for)<br/>5. Checking by all parties completed, ingest can be initiated<br/>6. Rosetta ingest completed<br/><br/>If the data is re-edited after ingest, the status should be reset to "In progress". This could also be done automatically. Please also add an Internal Commentary explaining what the changes are (e.g. "name was misspelled"). |
| [arkumu-ID](/documentation/data-model/graph-model#arkumu-id) | [arkumu ID](/documentation/data-model/graph-model#arkumu-id) | 1<br/>(created automatically) | ⨉ | | | Die interne arkumu-Signatur des Projekts, die auch Teil der Seiten-URL werden soll | The internal arkumu signature of the project, which should also be part of the page URL | | |
| [Archival Resource Key (ARK)-ID](/documentation/data-model/graph-model#ark-ID) | [Archival Resource Key (ARK) ID](/documentation/data-model/graph-model#ark-id) | 1<br/>(planned; created automatically) | ⨉ | | | Ein eindeutiger, internationaler Archiv-Identifikator des Projekts | A unique, international archive identifier for the project | | |
| [Vorschaubild](/documentation/data-model/graph-model#poster-image)  | [Poster Image](/documentation/data-model/graph-model#poster-image) | 0-1 | ⨉ | many-to-one<br/><sub>(each Project can have at most one Poster Image; the same Digital Object can be used as the Poster Image for multiple Projects)</sub> | [Digital Object](#digital-object) | Ein Digitales Objekt vom Medientyp "Bild", welches prominent und repräsentativ als erstes in der Detailansicht und in Suchergebnissen zu diesem Projekt angezeigt wird | A digital object of the Media Type "Image" that is prominently and representatively displayed first in the detailed view for this Project and in search results | | |
| [Bevorzugter Titel](/documentation/data-model/graph-model#preferred-title) | [Preferred Title](/documentation/data-model/graph-model#preferred-title) | 1 | ⨉ | | | Der bevorzugte Haupttitel des Projekts | The preferred main title of the Project | | |
| Sprachauszeichnung des Bevorzugten Titels | Language Markup of Preferred Title | 1 | ⨉ | many-to-one<br/><sub>(each Project has exactly one Language Markup for the Preferred Title; the same Language can be used as the Language Markup for multiple Preferred Titles)</sub> | [Language](#language) | Eine Sprachauszeichnung samt ISO639-2-Code für den Haupttitel des Projekts | An ISO639-2 language markup for the main title of the Project | | |
| [Bevorzugter Untertitel](/documentation/data-model/graph-model#preferred-subtitle) | [Preferred Subtitle](/documentation/data-model/graph-model#preferred-subtitle) | 0-1 | ⨉ | | | Der bevorzugte Hauptuntertitel des Projekts | The preferred main subtitle of the Project | | |
| Sprachauszeichnung des Bevorzugten Untertitels | Language Markup of Preferred Subtitle | [1] | ⨉ | many-to-one<br/><sub>(each Project has at most one Language Markup for the Preferred Subtitle; the same Language can be used as the Language Markup for multiple Preferred Subtitles)</sub> | [Language](#language) | Eine Sprachauszeichnung samt ISO639-2-Code für den Hauptuntertitel des Projekts | An ISO639-2 language markup for the main subtitle of the Project | | |
| Alternative Titel-Set(s) | Alternative Title Set(s) | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Project may have multiple Alternative Title Sets; each Alternative Title Set belongs to exactly one Project)</sub> | [Alternative Title Set](#alternative-title-set) | Ein Set aus einem möglichen alternativen Titel und einem möglichen alternativen Untertitel für das Projekt, samt ihren Sprachauszeichnungen | A set consisting of a possible alternative title and a possible alternative subtitle for the project, including their language markups | | |
| [Einliefernde Hochschule](/documentation/data-model/graph-model#depositing-university) | [Depositing University](/documentation/data-model/graph-model#depositing-university) | 1 | ⨉ | many-to-one<br/><sub>(each Project has exactly one Depositing University; the same Depositing University can be the Univerversity for many Projects)</sub> | [Depositing University](#depositing-university)<br/>(Derived from [User](#user)) | Die Hochschule, von der das eingelieferte Projekt kommt oder die für das eingelieferte Projekt (entfernt) verantwortlich ist. Die Einliefernde Hochschule ergibt sich aus der Hochschule der einliefernden Nutzer:in | The university from which the submitted project originates or which university is (remotely) responsible for the submitted project. The Depositing University is determined by the university of the depositing User | | |
| [Organisationseinheit](/documentation/data-model/graph-model#organisational-unit) | [Organisational Unit](/documentation/data-model/graph-model#organisational-unit) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Project may be linked to multiple Organisational Units; each Organisational Unit may be linked to multiple Projects)</sub> | [Organisational Unit](#organisational-unit) | Akademischer Kontext, in dem Projekt entstanden ist bzw. aus dem es stammt, z. B. Studiengang, Lehrgebiet, Fotoarchiv Folkwang, Studio für Digitalisierung historischer Tonträger RSH, Projektarchiv KHM | Academic context in which the Project was created or from which it originates, e.g. a study programme, a teaching filed,the Folkwang photo archive,the RSH Studio for Digitising Historical Sound Recordings, KHM Project Archive | | |
| [Projektart](/documentation/data-model/graph-model#project-type) | [Project Type](/documentation/data-model/graph-model#project-type) | 1-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Project must be linked to at least one Project Type and can be linked to multiple; each Project Type may be linked to multiple Projects)</sub> | [Project Type](#project-type) | Die Art einer wissenschaftlichen oder künstlerischen Arbeit, die einen Abschluss oder sonstige Qualifikation oder Tätigkeit ausweist, sowie eine allgemeine Kategorisierung des Projekts. Siehe Werteliste [„Projekteart-Werte“](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/controlled-vocabularies/project-types) | The type of a scientific or artistic work that leads to a degree, or identify another qualification or activity, as well as a general categorisation of the project. See the value list of ["Project Type Values"](https://gitlab.git.nrw/arkumu/arkumu-exchange-portal/-/wikis/controlled-vocabularies/project-types) | | |
| [Projektkategorie](/documentation/data-model/graph-model#project-category) | [Project Categories](/documentation/data-model/graph-model#project-category) | 1-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Project must be linked to at least one Project Category and can be linked to multiple; each Project Category may be linked to multiple Projects)</sub> | [Project Category](#project-category) | Künstlerische oder nichtkünstlerische Kategorien, zu der dieses Projekt gehört oder in der dieses sich einordnen lässt | Artistic or non-artistic categories to which this project belongs to or in which it can be categorised | | |
| [Schlagwort](/documentation/data-model/graph-model#keyword) | [Keyword](/documentation/data-model/graph-model#keyword) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Project may be linked to multiple Keywords; each Keyword may be linked to multiple Projects)</sub> | [Keyword](#keyword) | Prägnante Begriffe, die das Projekt/Werk inhaltlich, künstlerisch oder in der Gattung und Form beschreiben und genauer klassifizieren | Concise terms that describe the project/work in terms of content, artistic merit or genre and form, and classify it more precisely | | |
| [Projektbeschreibung](/documentation/data-model/graph-model#project-description) | [Project Description](/documentation/data-model/graph-model#project-description) | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Project may have multiple Project Descriptions; each Project Description belongs to exactly one Project) | [Project Description](#project-description) | Freitext mit eigener Sprachauszeichnung, angezeigt nach Wertigkeit | Free text with own language markup, displayed according to the provided sorting | | |
| [Deutscher Kommentar](/documentation/data-model/graph-model#german-commentary) | [German Commentary](/documentation/data-model/graph-model#german-commentary) | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte inhaltlich relevante Bemerkungen/Kommentare zum Projekt gegeben werden können | A field in which specific comments/remarks relevant to the project's content can be provided | | |
| [Englischer Kommentar](/documentation/data-model/graph-model#english-commentary) | [English Commentary](/documentation/data-model/graph-model#english-commentary) | 0-1 | ⨉ | | | Ein Feld, in dem bestimmte inhaltlich relevante Bemerkungen/Kommentare zum Projekt gegeben werden können | A field in which an English comment on the project can be provided | | |
| [Interner Kommentar](/documentation/data-model/graph-model#internal-commentary) | [Internal Commentary](/documentation/data-model/graph-model#internal-commentary) | 0-1 | ⨉ | | | Ein Kommentar, der nur innerhalb des arkumu.nrw-Erfassungssystems für höhere Nutzer:innen angezeigt wird, aber nie öffentlich | A comment that is only displayed within the arkumu.nrw ingest system for higher-level users, but never publicly | Nicht-öffentliche, z. B. Team-interne Bearbeitungsnotizen oder interne Bearbeitungsnotizen aus der Quelldatenbank des Einlieferers | Non-public, e.g. internal team processing notes or internal processing notes from the depositor's source database |
| [Werkverzeichnisnummer](/documentation/data-model/graph-model##catalogue-raisonne-reference-number) | [Catalog Raisonné Reference Number](/documentation/data-model/graph-model##catalogue-raisonne-reference-number) | 0-1 | ✓<br/>(semicolon separated) | | | Eine feste Nummer aus einem wissenschaftlich oder von der Künstler:in erstellten Werkverzeichnis.  | A fixed number from a scientific or artist-created catalogue raisonné | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 0-1 | ⨉ | | | Ein Feld, in dem man die Wikidata Q-ID dieses Projekts angeben kann, falls vorhanden | A field where one can enter the Wikidata Q-ID of this Project, if available | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | Ein Feld, in dem man die GND-Nummer dieses Projekts angeben kann, falls vorhanden | A field where one can enter the GND ID of this Project, if available | | |
| [Externe Projekt-Webseite](/documentation/data-model/graph-model#website) | [External Project Website](/documentation/data-model/graph-model#website) | 0-1 | ✓<br/>(linebreak separated; comma separated on import) | | | Ein großes mehrzeiliges Textfeld, in dem man eine oder mehrere URLs zu externen Projektseiten eingeben kann | A large multi-line text field where you can enter one or more URLs to external project pages | | |
| [Ereignis](/documentation/data-model/graph-model#event) | [Event](/documentation/data-model/graph-model#event) | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Project may be linked to multiple Events; each Event may be linked to multiple Projects)</sub> | [Event](#event) | Eine Entität, die Informationen zu ihrem Typ, ihrem Zeitraum, beteiligten Akteur:innen und deren Rollen, die Digitalen Objekte, etc., enthält | An entity that contains information about its type, time period, Actors involved and their Roles, Digital Objects, etc. | | |
| Projekt-Eigenschaft | Project Property | 0-n | ✓<br/>(multi create) | many-to-many<br/><sub>(each Project may be linked to multiple Properties, including a certain value solely for this Project; each Property may be used in multiple Projects)</sub> | [Project Property](#project-property) | Eine Eigenschaft des Projekts, z.B. Dauer, Tonart oder ähnliches | A property of the Project, e.g. duration, key or similar | | |
| [Verknüpftes Projekt](/documentation/data-model/graph-model#project) | [Related Project](/documentation/data-model/graph-model#project) | 0-n | ✓<br/>(multi create) | many-to-many<br/><sub>(each Project may be linked to multiple other Projects, including a unique relation to each of these Projects)</sub> | [Related Project (Project-Project Junction Table)](#related-project-project-project-junction-table) | Eine Verknüpfung zu anderen Projekten, die in einer bestimmten reziproken Relation stehen | A connection to other Projects that have a specific reciprocal relationship | | |
| [Rechtsstatus](/documentation/data-model/graph-model#rights-status) | [Rights Status](/documentation/data-model/graph-model#rights-status) | 1 | ⨉ | | | Feld, das den Rechtsstatus des Projektes angibt. Die Auswahlmöglichkeiten sind vorerst: „Urheberrechts- und leistungsschutzrechts-frei“ und „Urheberrechtlich und/oder leistungsschutzrechtlich geschützt“ | Field indicating the legal status of the project. The options currently available are: "Free of German Urheberrecht and Leistungsschutzrecht protection" and "Protected by German Urhebrrecht and/or Leistungsschutzrecht" | | |
| Art des Lizenzvertrages | Type of Licence Agreement | [1]<br/>(If Rights Status is "Protected by German Urhebrrecht and/or Leistungsschutzrecht"; deactivated for import) | ⨉ | | | Feld, das regelt, in welcher Form diese Rechte vorliegen. Die Auswahlmöglichkeiten sind vorerst: „Bestehender Lizenzvertrag“, „Neuer Lizenzvertrag (arkumu-Formular)“ | Field that regulates the form in which these rights are presented. The options are currently: "Existing Licence Agreement", "New Licence Agreement (arkumu form)" | | |
| [Bestehender Lizenzvertrag](/documentation/data-model/graph-model#existing-licence-agreement) | [Existing Licence Agreement](/documentation/data-model/graph-model#existing-licence-agreement) | [1]<br/>(If Type of Licence Agreement is "Existing Licence Agreement"; deactivated for import) | ⨉ | many-to-one<br/><sub>(each Project may be subject to just one Existing Licence Agreement; the same Existing Licence Agreement can be the legal base for multiple Projects)</sub> | [Existing Licence Agreement](#existing-licence-agreement) | Feld, das die Grundlage der Lizenzvereinbarung zwischen Hochschule und dem/der rechtehabenden Person angibt, z.B. Standard KHM Projektvertrag Version 1990 | Field specifying the basis of the licence agreement between the university and the rights holder, e.g. Standard KHM Project Agreement Version 1990 | | |
| [Dokumentation des bestehenden Lizenzvertrages](/documentation/data-model/graph-model#existing-licence-agreement) | [Documentation of Existing Licence Agreement](/documentation/data-model/graph-model#existing-licence-agreement) | [0-n]<br/>(If Type of Licence Agreement is "Existing Licence Agreement"; deactivated for Import) | ✓<br/>(multi file upload) | | | Unterzeichnetes Lizenz-Dokument, welches der Hochschule vorliegt, die das Lizenzrecht mir dem/der rechteinhabenden Person regelt | Signed licence document, which is available to the university, regulating the licence rights with the rights holder | | |
| [Neuer Lizenzvertrag (arkumu-Formular)](/documentation/data-model/graph-model#new-arkumu-licence-agreement) | [New Licence Agreement (arkumu form)](/documentation/data-model/graph-model#new-arkumu-licence-agreement) | [1]<br/>(If Type of Licence Agreement is "New Licence Agreement (arkumu form)"; deactivated for Import)<br/><br/>[0-1]<br/>(If Type of Licence Agreement is "Existing Licence Agreement"; also deactivated for Import) | ⨉ | | | Feld, das angibt, wie - vermittelnd über arkumu.nrw - die Hochschule und der/die rechteinhabende Person verblieben sind | Field indicating how the university and the rights holder have agreed through arkumu.nrw | | |
| [Dokumentation des Neuen Lizenzvertrages (arkumu-Formular)](/documentation/data-model/graph-model#new-arkumu-licence-agreement) | [Documentation of Existing Licence Agreement](/documentation/data-model/graph-model#new-arkumu-licence-agreement) | [1]<br/>(If Type of Licence Agreement is "New Licence Agreement (arkumu form)"; deactivated for Import)<br/><br/>[0-n] (If Type of Licence Agreement is "Existing Licence Agreement"; also deactivated for Import) | ✓<br/>(multi file upload) | | | Dokumentation des neuen Lizenzabschlusses zwischen des/der rechteinhabenden Person und der Hochschule in Verwendung des arkumu-Formulars | Documentation of the new licence agreement between the rights holder and the university using the arkumu form | | |
| [Weiteres Rechtsdokument](documentation/data-model/graph-model#additional-rights-document) | [Additional Rights Document]((documentation/data-model/graph-model#additional-rights-document)) | [0-n]  | ✓<br/>(multi file upload) | | | Sonstige Rechtsdokumente, die für urheberrechtliche oder leistungsschutzrechtliche Fragen relevant sind | Other legal documents relevant to Urheberrecht orLeistungsschutzrecht issues | | |
| Dateiabfrage-Dokumente | File Licences Documents | [0-n]  | ✓<br/>(multi file upload) | | | Ein oder mehrere Dokumente, die festhalten, welche Lizenz auf zusätzlich einzelne Dateien angewendet werden sollen | One or more documents specifying which licence should be applied additionally to individual files | | |
| Inhaltswarnungen | Content Warnings | 0-n | ✓<br/>(multi select) | many-to-many<br/><sub>(each Project may be linked to multiple Content Warnings; each Content Warning may be linked to multiple Projects)</sub> | [Content Warning](#content-warning) | Kennzeichnung von sensiblen Inhalten und Themen. Dies können z.B. sexualisierte Gewalt, Gewaltdarstellung, Suizid, häusliche Gewalt, Trans- und Homophobie, Rassismus usw. sein | Labelling of sensitive content and topics. These may include sexualised violence, depictions of violence, suicide, domestic violence, transphobia and homophobia, racism, etc. | | |
| Datensatz beim Einlieferer | Dataset at the Depositor | 0-n | ✓<br/>(multi create) | one-to-many<br/><sub>(each Project may be identified by multiple Datasets at the Depositor; each Dataset at the Depositor refers to exactly one Project)</sub> | [Dataset at the Depositor](#dataset-at-the-depositor) | Eine Signatur und Datum-/Zeitangaben, die das Projekt beim Einlieferer identifizieren | Am ID and date/time stamps identifying the Project at the depositor | | |

<br/>
<br/>

---

<br/>
<br/>

## Project Category

`Projektkategorie`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI der Projektkategorie, für ihren Eintrag in das kontrollierte Vokabular | The automatically generated URI of the Project Category for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ | | | Die deutsche Bezeichnung der Projektkategorie | The German appellation of the Project Category | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englische Bezeichnung der Projektkategorie | The English appellation of the Project Category | | |
| [Deutsche Synonyme](/documentation/data-model/graph-model#german-synonym) | [German Synonyms](/documentation/data-model/graph-model#german-synonym) | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten deutschen Synonymen der Projektkategorie | A series of comma-separated German synonyms of the Project Category | | |
| [Englishe Synonyme](/documentation/data-model/graph-model#english-synonym) | [English Synonyms](/documentation/data-model/graph-model#english-synonym) | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten englischen Synonymen der Projektkategorie | A series of comma-separated English synonyms of the Project Category | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1 | ⨉ | | | Wikidata-ID der Projektkategorie | Wikidata ID of the Project Category | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | GND-Nummer der Projektkategorie | GND ID of the Project Category | | |
| [AAT-ID](/documentation/data-model/graph-model#aat-id) | [AAT ID](/documentation/data-model/graph-model#aat-id) | 0-1 | ⨉ | | | AAT-ID der Projektkategorie | AAT ID of the Project Category | | |
| [filmportal.de-Kategorie-ID](/documentation/data-model/graph-model#filmportalde-category-id) | [filmportal.de Category ID](/documentation/data-model/graph-model#filmportalde-category-id) | 0-1 | ⨉ | | | filmportal.de-Kategorie-ID zur Projektkategorie | filmportal.de Category ID  of the Project Category | | |
| [Übergeordnete Projektkategorie](/documentation/data-model/graph-model#project-category) | [Parent Project Category](/documentation/data-model/graph-model#project-category) | 0-1 | ⨉ | many-to-one<br/><sub>(each Project Category can have at most one Parent Project Category; a Project Category can be the parent of many children)</sub> | [Project Category](#project-category) | Eine bereits angelegte, direkt übergordnete Projektkategorie | An already created, directly superordinate Project Category | | |
| Deutscher Breadcrumb | German Breadcrumb| 1<br/>(handled automatically) | ⨉ | | | Der zusammengesetze deutsche Breadcrumb mit allen übergeordneten Projektkategorien | The composite German Breadcrumb with all Parent Project Categories  | Das folgende Feld sollte hinzugefügt werden um die Rechenlast zu mindern | The following field should be added to reduce the processing load |
| Englischer Breadcrumb | English Breadcrumb| 1<br/>(handled automatically) | ⨉ | | | Der zusammengesetze englische Breadcrumb mit allen übergeordneten Projektkategorien | The composite English Breadcrumb with all Parent Project Categories  | Das folgende Feld sollte hinzugefügt werden um die Rechenlast zu mindern | The following field should be added to reduce the processing load |

<br/>
<br/>

---

<br/>
<br/>

## Project Description

`Projektbeschreibung`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Beschreibungstext](/documentation/data-model/graph-model#description-text) | [Description Text](/documentation/data-model/graph-model#description-text) | 1 | ⨉ | | |  Eine Beschreibung des Projekts | A description of the Project | | |
| Sprachauszeichung der Projektbeschreibung | Language Markup of the Project Description | 1 | ⨉ | many-to-one<br/><sub>(each Description has exactly one Language Markup; the same Language can be used for multiple Descriptions)</sub> | [Language](#language) | Eine Sprachauszeichnung samt ISO-Code für die Beschreibung des Projekts | A language markup for the description of the Project, including the ISO code | | |
| [Sortierungsnummer](/documentation/data-model/graph-model#sorting-number) | [Sorting Number](/documentation/data-model/graph-model#sorting-number) | 1<br/>(handled through user interaction/ separate field) | ⨉ | | | Sortierung der Beschreibung innerhalb eines Projekts | Sorting of the Description inside of a Project | | |
| [Projekt](/documentation/data-model/graph-model#description-text#project) | [Project](/documentation/data-model/graph-model#description-text#project) | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each Description is assigned to exactly one Project; each Project may have multiple Descriptions)</sub> | [Project](#project) | Das zugehörige Projekt | The associated Project | | |

<br/>
<br/>

---

<br/>
<br/>

## Project Property

`Projekt-Eigenschaft`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ----------- | ----------- | ----------- | ----------- | ------------ | ----------- | ----------- |
| Projekt-Eigenschaft | Project Property | 1 | ⨉ | many-to-one<br/><sub>(each Project Property has exactly one Property; the same Property can be used for many Project Properties)</sub> | [Property](#property) | Die Art der Projekt-Eigenschaft | The type of the Project Property | | |
| Projekt-Eigenschaft-Wert | Project Property Value | 1 | ⨉ | | | Der eigentliche Wert der Projekt-Eigenschaft | The actual value of the Project Property | | |
| [Projekt](/documentation/data-model/graph-model#project) | [Project](/documentation/data-model/graph-model#project) | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each Project Property is assigned to exactly one Project; each Project may have multiple Project Properties)</sub> | [Project](#project) | Das Projekt, welches die Eigenschaft trägt | The Project that has the Property | | |

<br/>
<br/>

---

<br/>
<br/>

## Project Type

`Projektart`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI der Projektart, für ihren Eintrag in das kontrollierte Vokabular | The automatically generated URI of the Project Type for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ | | | Die deutsche Bezeichnung der Projektart | The German appellation of the Project Type | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englisch Bezeichnung der Projektart | The English appellation of the Project Type | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1 | ⨉ | | | Wikidata-ID der Projektart | Wikidata ID of the Project Type | | |

<br/>
<br/>

---

<br/>
<br/>

## Property

`Eigenschaft`

| Diese Entität wird in [Projekt](#project), [Ereignis](#event) und [Informationsträger](#information-storage-medium) verwendet. Sie kann als zentrale Einheit verwendet oder in drei separate Entitäten aufgeteilt werden, nämlich **Projekteigenschaft**, **Ereigniseigenschaft** und **Informationsträgereigenschaft**. | This entity is used in [Project](#project), [Event](#event) and [Information Storage Medium](#information-storage-medium). It can be used as a central Entity or split up in three separate entites, namely **Project Property**, **Event Property** and **Information Storage Medium Property**. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ | | | Die deutsche Bezeichnung der Eigenschaft | The German appellation of the Property | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englische Bezeichnung der Eigenschaft | The English appellation of the Property | | |
| Erläuterung (deutsch) | German Explanation | 1 | ⨉ | | | Eine deutschsprachige Erläuterung, wozu ein Eigenschaftswert benutzt werden sollte | A German explanation of what a property value should be used for | | |
| Erläuterung (englisch) | English Explanation | 1  | ⨉ | | | Eine englischsprachige Erläuterung, wozu ein Eigenschaftswert benutzt werden sollte | An English explanation of what a property value should be used for | | |
| Typ | Type | 0-1  | ⨉ | | | wird benötigt, um für manche Werte eine Formatierung bzw. Syntax validieren zu können. Zum Beispiel: Eigenschaft "Dauer" hat Typ "Time (HH:mm:ss)" | is needed to validate formatting or syntax for some values. For example: The "Duration" property has the type "Time (HH:mm:ss)" | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1  | ⨉ | | | Wikidata-ID der Eigenschaft | Wikidata ID of the Property | | |
| [GND-Nummer](/documentation/data-model/graph-model#gnd-id) | [GND ID](/documentation/data-model/graph-model#gnd-id) | 0-1 | ⨉ | | | GND-Nummer der Eigenschaft | GND ID of the Property | | |

<br/>
<br/>

---

<br/>
<br/>

## Related Actor (Actor-Actor Junction Table)

`Verknüpfte:r Akteur:in (Akteur:in-Akteur:in-Kreuztabelle)`

| In dieser Entität werden automatisch reziproke Verbindungen anlegt: Wenn eine Verknüpfung gemacht wurde, wird die gegenseitige automatisch angelegt. | Reciprocal connections are automatically created in this entity: when a relation is made, the reciprocal connection is automatically created. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ----------- | ----------- | ----------- | ----------- | ------------ | ----------- | ----------- |
| [Ausgangsakteur:in](/documentation/data-model/graph-model#actor) | [Source Actor](/documentation/data-model/graph-model#actor) | 1<br/>(handled automatically by the Actor form) | ⨉ | many-to-one<br/><sub>(each Actor–Actor record refers to exactly one Source Actor; an Actor may be the source of many relationships)</sub> | [Actor](#actor) | Die Akteur:in von der die Beziehung ausgeht | The Actor from whom the relationship goes out | | |
| Beziehung | Relationship | 1 | ⨉ | | | Die Art der Beziehung zwischen der Ausgangsakteur:in und der verknüpften Akteur:in. Die Arten der Beziehungen sind der Datenmodell-Excel-Tabelle zu entnehmen | The type of relationship between the Source Actor and the Related Actor. The types of relationships can be found in the data model Excel table. | | |
| [Verknüpfte:r Akteur:in](/documentation/data-model/graph-model#actor) | [Related Actor](/documentation/data-model/graph-model#actor) | 1 | ⨉ | many-to-one<br/><sub>(each Actor–Actor record refers to exactly one Related Actor; an Actor may be related to many other Actors)</sub> | [Actor](#actor) | Die verknüpfte Akteur:in der Verbindung | The Related Actor of the connection | | |

<br/>
<br/>

---

<br/>
<br/>

## Related Event (Event-Event Junction Table)

`Verknüpftes Ereignis (Ereignis-Ereignis-Kreuztabelle)`

| In dieser Entität werden automatisch reziproke Verbindungen anlegt: Wenn eine Verknüpfung gemacht wurde, wird die gegenseitige automatisch angelegt. | Reciprocal connections are automatically created in this entity: when a relation is made, the reciprocal connection is automatically created. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ----------- | ----------- | ----------- | ----------- | ------------ | ----------- | ----------- |
| [Ausgangsereignis](/documentation/data-model/graph-model#event) | [Source Event](/documentation/data-model/graph-model#event) | 1<br/>(handled automatically by the Event form) | ⨉ | many-to-one<br/><sub>(each Event–Event record refers to exactly one Source Event; an Event may be the source of many relationships)</sub> | [Event](#event) | Das Ereignis von dem die Beziehung ausgeht | The Event from which the relationship goes out | | |
| Beziehung | Relationship | 1 | ⨉ | | | Die Art der Beziehung zwischen dem Ausgangsereignis und dem verknüpften Ereignis. Die Arten der Beziehungen sind der Datenmodell-Excel-Tabelle zu entnehmen | The type of relationship between the Source Event and the Related Event. The types of relationships can be found in the data model Excel table. | | |
| [Verknüpftes Ereignis](/documentation/data-model/graph-model#event) | [Related Event](/documentation/data-model/graph-model#event) | 1 | ⨉ | many-to-one<br/><sub>(each Event–Event record refers to exactly one Related Event; an Event may be related to many other Events)</sub> | [Event](#event) | Das verknüpfte Ereignis der Verbindung | The Related Event of the connection | | |

<br/>
<br/>

---

<br/>
<br/>

## Related Project (Project-Project Junction Table)

`Verknüpftes Projekt (Projekt-Projekt-Kreuztabelle)`

| In dieser Entität werden automatisch reziproke Verbindungen anlegt: Wenn eine Verknüpfung gemacht wurde, wird die gegenseitige automatisch angelegt. | Reciprocal connections are automatically created in this entity: when a relation is made, the reciprocal connection is automatically created. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ----------- | ----------- | ----------- | ----------- | ------------ | ----------- | ----------- |
| [Ausgangsprojekt](/documentation/data-model/graph-model#project) | [Source Project](/documentation/data-model/graph-model#project) | 1<br/>(handled automatically by the Project form) | ⨉ | many-to-one<br/><sub>(each Project–Project record refers to exactly one Source Project; a Project may be the source of many relationships)</sub> | [Project](#project) | Das Projekt von dem die Beziehung ausgeht | The Project from which the relationship goes out | | |
| Beziehung | Relationship | 1 | ⨉ | | | Die Art der Beziehung zwischen dem Ausgangsprojekt und dem verknüpften Projekt. Die Arten der Beziehungen sind der Datenmodell-Excel-Tabelle zu entnehmen | The type of relationship between the Source Project and the Related Project. The types of relationships can be found in the data model Excel table. | | |
| [Verknüpftes Projekt](/documentation/data-model/graph-model#project) | [Related Project](/documentation/data-model/graph-model#project) | 1 | ⨉ | many-to-one<br/><sub>(each Project–Project record refers to exactly one Related Project; a Project may be related to many other Projects)</sub> | [Project](#project) | Das verknüpfte Projekt der Verbindung | The Related Project of the connection | | |

<br/>
<br/>

---

<br/>
<br/>

## Role

`Rolle`

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| [URI](/documentation/data-model/graph-model#uri) | [URI](/documentation/data-model/graph-model#uri) | 1<br/>(handled automatically) | ⨉ | | | Die automatisch erzeugte URI der Rolle, für ihren Eintrag in das kontrollierte Vokabular | The automatically generated URI of the Role for its entry in the controlled vocabulary | | |
| [Deutscher Name](/documentation/data-model/graph-model#german-name) | [German Name](/documentation/data-model/graph-model#german-name) | 1 | ⨉ |  | | Die deutsche Bezeichnung der Rolle | The German appellation of the Role | | |
| [Englischer Name](/documentation/data-model/graph-model#english-name) | [English Name](/documentation/data-model/graph-model#english-name) | 1 | ⨉ | | | Die englische Bezeichnung der Rolle | The German appellation of the Role | | |
| [Deutsche Synonyme](/documentation/data-model/graph-model#german-synonym) | [German Synonyms](/documentation/data-model/graph-model#german-synonym) | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten deutschen Synonymen der Rolle | A series of comma-separated German synonyms of the Role | | |
| [Englishe Synonyme](/documentation/data-model/graph-model#english-synonym) | [English Synonyms](/documentation/data-model/graph-model#english-synonym) | 0-1 | ✓<br/>(comma separated) | | | Eine Reihe von kommagetrennten englischen Synonymen der Rolle | A series of comma-separated English synonyms of the Role | | |
| [Wikidata-ID](/documentation/data-model/graph-model#wikidata-id) | [Wikidata ID](/documentation/data-model/graph-model#wikidata-id) | 1 | ⨉ | | | Wikidata-ID der Rolle | Wikidata ID of the Role | | |
| [GND-Nummer (männlich)](/documentation/data-model/graph-model#gnd-id-male) | [GND ID (male)](/documentation/data-model/graph-model#gnd-id-male) | 0-1 | ⨉ | | | GND-Nummer für den männlichen Eintrag der Rolle | GND ID of the male entry for the role | | |
| [GND-Nummer (weiblich)](/documentation/data-model/graph-model#gnd-id-female) | [GND ID (female)](/documentation/data-model/graph-model#gnd-id-female) | 0-1 | ⨉ | | | GND-Nummer für den weiblichen Eintrag der Rolle | GND ID of the female entry for the role | | |
| [GND-Nummer (Gruppe)](/documentation/data-model/graph-model#gnd-id-group) | [GND ID (Group)](/documentation/data-model/graph-model#gnd-id-group) | 0-1 | ⨉ | | | GND-Nummer eines Eintrag zur Gruppe oder Körperschaft | GND ID of an entry for a group or body | | |
| [AAT-ID](/documentation/data-model/graph-model#aat-id) | [AAT ID](/documentation/data-model/graph-model#aat-id) | 0-1 | ⨉ | | | AAT-ID der Rolle | AAT ID of the Role | | |
| wählt "ist Urheber:in" automatisch aus | automatically pre-selects "ist Urheber:in" | 0/1 | ⨉ | | | "ja" ist vorausgewählt bei Rollen, die mit großer Sicherheit immer Urheber:innen (bedingt durch ein Ereignis) nach sich ziehen. Dies ist jedoch manuell an- und abwählbar. | "yes" is pre-selected for roles that are highly likely to always produce "Urheber:innen" (due to an event). However, this can be selected or deselected manually. | | |
| wählt "besitzt Leistungsschutzrechte" automatisch aus | automatically pre-selects "besitzt Leistungsschutzrechte" | 0/1 | ⨉ | | | "ja" ist vorausgewählt bei Rollen, die mit großer Sicherheit immer Leistungsschutzreche für Akteur:innen (bedingt durch ein Ereignis) nach sich ziehen. Dies ist jedoch manuell an- und abwählbar. | "yes" is pre-selected for roles that are highly likely to always result in "Leistungsschutzrechte" for Actors (due to an event). However, this can be selected or deselected manually. | | |
| [Übergeordnete Rolle](/documentation/data-model/graph-model#role) | [Parent Role](/documentation/data-model/graph-model#role) | 0-1 | ⨉ | many-to-one<br/><sub>(each Role can have at most one Parent Role; a Role can be the parent of many children)</sub> | [Role](#role) | Eine bereits angelegte, direkt übergordnete Rolle | An already created, directly superordinate Role | | |
| Deutscher Breadcrumb | German Breadcrumb | 1<br/>(handled automatically) | ⨉ | | | Der zusammengesetze deutsche Breadcrumb mit allen übergeordneten Rollen | The composite German breadcrumb with all Parent Roles  | Das folgende Feld sollte hinzugefügt werden um die Rechenlast zu mindern | The following field should be added to reduce the processing load |
| Englischer Breadcrumb | English Breadcrumb| 1<br/>(handled automatically) | ⨉ | | | Der zusammengesetze englische Breadcrumb mit allen übergeordneten Rollen | The composite English Breadcrumb with all Parent Roles  | Das folgende Feld sollte hinzugefügt werden um die Rechenlast zu mindern | The following field should be added to reduce the processing load |

<br/>
<br/>

---

<br/>
<br/>

## User

`Benutzer:in`

| Diese Entität verwaltet die Benutzerkonten des Systems. Die Dokumentation dieser Entität beschränkt sich auf jene Felder, die besonders zentral für die rechtliche Zuordnung von Datensätzen zu den Hochschulen und bezüglich von Benutzer:innen-Rechten innerhalb des Systems relevant sind. | This entity manages the user accounts of the system. The documentation of this entity is limited to those fields that are particularly central for the legal assignment of records to the universities and regarding user rights within the system. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Hochschule der Benutzer:in | User University | 1<br/>(handled automatically or manually) | ⨉ | many-to-one<br/><sub>(each User belongs to excatly one ; a User may create multiple records)</sub> | [Depositing University](#depositing-university) | Die aktuelle oder letzte Hochschule der Benutzer:in | The User's current or most recent university | Kann sich über die Zeit ändern. Eine Anbindung an Shibboleth könnte für die Automatisierung dieses Feldes verwendet werden | May change over time. A connection to Shibboleth could be used for automating this field | 
| Rolle der Benutzer:in | User Role | 1<br/>(handled automatically or manually) | ⨉ | | | Die Benutzer:innenrechte-Gruppe der jeweiligen Benutzer:in, z.B. "Mediendokumentar:in", "Manager:in" oder "Supermanager:in" | The user rights group of the respective User, e.g. "Media Documentarian", "Manager" or "Super Manager" | Siehe [Benutzerrechteverwaltung](/documentation/user-rights-management). Eine Anbindung an Shibboleth könnte für die Automatisierung dieses Feldes verwendet werden | See [User Rights Management](/documentation/user-rights-management). A connection to Shibboleth could be used for automating this field |

<br/>
<br/>

---

<br/>
<br/>

## Fields required for Archiving, Technical and User Rights Purposes

`Archivarisch, technsich und Nutzer:innen-rechtlich bedingte Felder`

| Die folgenden Felder sind Teil jeder Entität und treten daher hier gesammelt auf. | The following fields are part of every entity and are therefore listed here collectively. |

| German Name of Field | English Name of Field | Min-Max Occurence | Multi-Value | Connection | Points to Entity | German Definition | English Definition | German Note | English Note |
| ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ | ------------ |
| Einliefernde Hochschule | Depositing University | 1<br/>(handled automatically) | ⨉ | Derived from User | [Depositing University](#depositing-university)<br/>(Derived from [User](#user)) | Die Hochschule, von der das eingelieferte Projekt kommt oder die für das eingelieferte Projekt (entfernt) verantwortlich ist. Die Einliefernde Hochschule ergibt sich aus der Hochschule der einliefernden Benutzer:in | The university from which the submitted Project originates or which university is (remotely) responsible for the submitted Project. The Depoting University is determined by the university of the depositing User | | |
| Erstellt am | Created at | 1<br/>(handled automatically) | ⨉ | | | Ein Zeitstempel, der das erste speichern eines Datensatzes erfasst | A timestamp that records the first time a data record is saved | | |
| Erstellt von | Created by | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each data record is created by exactly one User; a User may create multiple records)</sub> | [User](#user) | Die Anzeige der Benutzerkennung der erstspeichernden Person | Display of the User ID of the person who first saved the data record | | | 
| Erstellt in Nutzer:innen-Rolle | Created in User Role | 1<br/>(handled automatically) | ⨉ | Derived from User at time of creation | Derived from [User](#user) | Die Benutzer:innen-Rolle der erstspeichernden Person | The User Role of the person who first saved the data record | | | 
| Zuletzt geändert am | Last modified at | 1<br/>(handled automatically) | ⨉ | | | Ein Zeitstempel, der das aktuelle speichern eines Projekts erfasst | A timestamp that records the current saving of a Project | | |
| Zuletzt geändert von | Last modified by | 1<br/>(handled automatically) | ⨉ | many-to-one<br/><sub>(each data record is last modified by exactly one User; a User may modify multiple records over time)</sub> | [User](#user) | Die Anzeige der Benutzerkennung der letztspeichernden Person | Display of the User ID of the person who last saved the data record | | |
| Zuletzt geändert in Nutzer:innen-Rolle | Last modified in User Role | 1<br/>(handled automatically) | ⨉ | Derived from User at time of last modification | Derived from [User](#user) | Die Benutzer:innen-Rolle der aktuell speicehernden Person | The User Role of the person who last saved the data record | | |