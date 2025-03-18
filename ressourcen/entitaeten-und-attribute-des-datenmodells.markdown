---
layout: arkumu-docs
title: Entitäten und Attribute des Datenmodells
order: 2.4
---

Diese Seite bietet einen Überblick über das Datenmodell. Eine detaillierte Aufstellung findet sich in der vollständigen [technischen Dokumentation](/technische-dokumentation/datenmodell#tabelle).

Die Aufgabe von arkumu.nrw ist es, die multimedialen künstlerischen Inhalte der Kunst- und Musikhochschulen des Landes NRW zu erschließen und in die Langzeitarchivierung zu überführen. Hauptsächlich sind das künstlerische Werke, aber auch viele Dinge, die sich nicht wirklich als Werk beschreiben lassen, wie z. B. Aufzeichnungen von Vorträgen.

---

## Zentrale Entitäten: Projekt und Ereignis

Deshalb benutzt arkumu.nrw als zentrale Verzeichnungseinheit den Begriff **Projekt**. Dies erlaubt eine größere Flexibilität und ermöglicht es, die ganze Bandbreite der künstlerischen Aktivitäten an den Hochschulen zu erfassen. Ein Datensatz zu einem Projekt enthält in der Regel einen Titel und die Beschreibung eines Projekts. Hier wird es kategorisiert und verschlagwortet, es wird die einliefernde Hochschule und ggf. deren Organisationseinheit erfasst.  
Als zweite zentrale Einheit bilden **Ereignisse** die historische Entwicklung eines Projekts ab:

* Es gibt viele [Typen von Ereignissen](/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/ereignistypen): Mit dem Ereignis der geistigen Schöpfung oder der Herstellung entsteht überhaupt erst ein Kunstwerk, später gibt es dann oft weitere Ereignisse wie Aufführung, Ausstellung oder Premiere.
* Ereignisse haben in der Regel einen Beginn und ein Ende und finden an bestimmten Orten statt.
* Ereignisse werden von verschiedenen Akteur:innen durch- oder aufgeführt, wodurch sich rechtliche Ansprüche ableiten können.
* Bei manchen Ereignissen wird bestimmte Software und Equipment verwendet.
* Bei manchen Ereignissen entstehen Physische Objekte oder werden verwendet.
* Ereignisse manifestieren sich oder werden dokumentiert in Digitalen Objekten (Dateien).
* Manche Digitalen Objekte entstehen durch die Retrodigitalisierung eines Informationsträgers.

Diese Informationen sind ausschließlich über Ereignisse mit einem Projekt verknüpft. Ein Projekt kann beliebig viele Ereignisse beinhalten, und dasselbe Ereignis kann in beliebig vielen Projekten auftauchen.

<pre class="mermaid">
flowchart LR;
    Projekt-- <span style="background-color: #f4effc">Ein Projekt kann mehrere Ereignisse haben</span> -->Ereignis
    Ereignis-- <span style="background-color: #f4effc">Dasselbe Ereignis kann in mehreren Projekten vorkommen</span> -->Projekt
    style Projekt fill:#FFFFE0, stroke:#000000;
    style Ereignis fill:#90EE90, stroke:#000000;
</pre>


---

## Projekt: Titel & Alternative Titel

Ein Projekt muss einen bevorzugten Titel und kann – bei Bedarf – einen bevorzugten Untertitel haben. Diese bevorzugten Titel werden prominent in Anzeige und Suche angezeigt und sollten den gewünschten Haupt- und/oder Originaltitel des Projekts wiedergeben. Zudem müssen der bevorzugter Titel und der bevorzugter Untertitel eine Sprachauszeichnung erhalten. Für die Sprachauszeichnungen wird die Norm [ISO639-2](https://www.loc.gov/standards/iso639-2/php/code_list.php) verwendet.

<pre class="mermaid">
flowchart TB;
    Projekt-- <span style="background-color: #f4effc">hat</span>  --> Bevorzugter_Titel[Bevorzugter Titel]
    Projekt-- <span style="background-color: #f4effc">hat bei Bedarf</span> --> Bevorzugter_Untertitel[Bevorzugter Untertitel]
    Bevorzugter_Titel-- <span style="background-color: #f4effc">hat</span>  --> Sprachauszeichnung
    Bevorzugter_Untertitel-- <span style="background-color: #f4effc">hat</span> --> Sprachauszeichnung
    style Projekt fill:#FFFFE0, stroke:#000000;
    style Bevorzugter_Titel fill:#FFFFE0, stroke:#000000;
    style Bevorzugter_Untertitel fill:#FFFFE0, stroke:#000000;
</pre>


Zusätzlich können noch beliebig viele alternative Titel angelegt werden. Es ist häufig der Fall, dass Kunstwerke nicht nur unter einem Namen bekannt sind oder geführt werden, sondern im Laufe ihrer Historie oft mehrere Titel haben. Dies ist auch notwendig, wenn der Originaltitel nicht das lateinische Alphabet verwendet, sondern beispielsweise kyrillische Schrift oder chinesische Zeichen. 

---

## Projekt: Beschreibungen & Kommentare

Ein Projekt muss mindestens eine und kann beliebig viele Beschreibungen haben. Folglich ist das Feld „Beschreibung“ in unserer [Datenmodell-Tabelle](/technische-dokumentation/datenmodell#tabelle) mit der Kardinalität „1-u[nendlich]“ gekennzeichnet. Die Beschreibung ist meistens ein von dem/der Autor:in des Projekts verfasster Text, kann aber auch von Dritten stammen. Ähnlich wie Titel haben Beschreibungen eine Sprachauszeichnung, die Angabe, in welcher Sprache sie verfasst ist. Beschreibungen können innerhalb eines Projekts nach ihrer Wertigkeit sortiert werden.

<pre class="mermaid">
flowchart TB;
    Projekt-- <span style="background-color: #f4effc">Ein Projekt kann mehrere Beschreibungen haben \n Zum Export benötigt es mindestens eine</span>  -->Beschreibung
    Beschreibung-- <span style="background-color: #f4effc">hat</span> --> Sprachauszeichnung
    Beschreibung-- <span style="background-color: #f4effc">hat</span> --> Sortierungsnummer
    style Projekt fill:#FFFFE0, stroke:#000000;
    style Beschreibung fill:#FFFFE0, stroke:#000000;
</pre>

Ebenso ist es möglich, einen deutschen und einen englischen Kommentar zum Projekt anzugeben.

<pre class="mermaid">
flowchart TB;
    Projekt-- <span style="background-color: #f4effc">kann einen Deutschen Kommentar haben</span>  ---> Deutscher_Kommentar[Deutscher Kommentar]
    Projekt-- <span style="background-color: #f4effc">kann einen Englischen Kommentar haben</span>  --> Englischer_Kommentar[Englischer Kommentar]
    style Projekt fill:#FFFFE0, stroke:#000000;
    style Deutscher_Kommentar fill:#FFFFE0, stroke:#000000;
    style Englischer_Kommentar fill:#FFFFE0, stroke:#000000;
</pre>

---

## Projekt: Projektkategorien

Projektkategorien geben die Kunstgattung oder das Genre eines Projekts an. Dafür verwenden wir eine Taxonomie, in der die Kategorien in einem hierarchischen Kontext abgebildet werden. Beispiel: Für ein Projekt wurde die Projektkategorie „Industrial Design“ vergeben. In unserem System taucht diese Projektkategorie dann wie folgt auf:

<div style="width: fit-content; margin-left: auto; margin-right: auto; margin-bottom: 4%; border: 1px solid black; padding: 10px;"><span style="color: blue">Angewandte Kunst</span> / <span style="color: blue">Design</span> / <span style="color: blue">Industrial Design</span></div>

Alle drei Kategorien werden dem Projekt zugeordnet, so dass sich dieses dann auch z. B. unter dem Begriff "Angewandte Kunst" wiederfindet. Zusätzlich sind die Kategorien mit Synonymen angereichert, um eine bessere Auffindbarkeit zu gewährleisten.  
Es können beliebig viele Kategorien zu einem Projekt vergeben werden, was es ermöglicht, Projekte zu beschreiben, die nicht eindeutig in nur eine Kategorie fallen. Einen Überblick, mit welchen Kategorien arkumu.nrw gestartet ist, lässt sich in der Liste unserer [Projektkategorien](/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/projektkategorien) finden.  
Jede Projektkategorie enthält mindestens auch noch den Link zu einem Objekt aus der [Wikidata](https://www.wikidata.org/w/index.php?title=Wikidata:Main_Page&uselang=de), oft sogar noch weitere Links zu großen kontrollierten Vokabularen: der Deutschen Nationalbibliothek, dem Getty Art & Architecture Thesaurus und dem Vokabular von Filmportal.de.

---

## Projekt: Schlagwörter

Die Verzeichnung der Schlagwörter erfolgt über [Wikidata](https://www.wikidata.org/). Dadurch wird die Anbindung an Semantic-Web- und Linked-Open-Data-Anwendungen gewährleistet. Damit ein Schlagwort in unser System geladen werden kann, benötigt es mindestens einen deutschen oder englischen Wikidata-Eintrag mit zugehöriger Beschreibung, die automatisch ausgelesen werden. Synonyme werden, falls vorhanden, ebenfalls abgerufen, um zusätzlich die Erschließung der erfassten Inhalte zu verbessern.  
Dieses System der Verschlagwortung über Wikidata findet überall dort Verwendung, wo Schlagwort-ähnliche Einträge gemacht werden können. Neben dem Projekt sind dies Physisches Objekt, Digitales Objekt und Informationsträger.

<figure>
<a href="/assets/images/Erfassungs-Backend_Schlagwort_anlegen_1.png"><img src="/assets/images/Erfassungs-Backend_Schlagwort_anlegen_1.png" alt="Wikidata wird nach einem Begriff durchsucht. Das System liefert einen Treffer und seine bei Wikidata hinterlegte Beschreibung." title="Wikidata wird nach einem Begriff durchsucht. Das System liefert einen Treffer und seine bei Wikidata hinterlegte Beschreibung."></a>
<figcaption>Wikidata wird nach einem Begriff durchsucht. Das System liefert einen Treffer und seine bei Wikidata hinterlegte Beschreibung.</figcaption>
</figure>

<figure>
<a href="/assets/images/Erfassungs-Backend_Schlagwort_anlegen_2.png"><img src="/assets/images/Erfassungs-Backend_Schlagwort_anlegen_2.png" alt="Wichtige Attribute werden aus Wikidata ausgelesen und im System gespeichert." title="Wichtige Attribute werden aus Wikidata ausgelesen und im System gespeichert."></a>
<figcaption>Wichtige Attribute werden aus Wikidata ausgelesen und im System gespeichert.</figcaption>
</figure>

---

## Projekt: Einliefernde Hochschule und Organisationseinheiten

Ein Projekt muss einer einliefernden Hochschule zugeordnet werden. Mit diesem Eintrag wird angegeben, welche der Konsortialhochschulen rechtlich für die Behandlung des Projektes verantwortlich ist. Neben ihrem offiziellen deutschen Namen und ihrem englischen Namen werden die einzelnen einliefernden Hochschulen zusätzlich durch Wikidata- und GND-Links eindeutig identifiziert.

| Deutscher Name | Englischer Name | Wikidata-Link | GND-Link |
| ---------- | ---------- | ---------- | ---------- |
| Folkwang Universität der Künste | Folkwang University of the Arts | [https://www.wikidata.org/entity/Q521612](https://www.wikidata.org/entity/Q521612) | [https://d-nb.info/gnd/16159133-4](https://d-nb.info/gnd/16159133-4) |
| Hochschule für Musik Detmold | Hochschule für Musik Detmold | [https://www.wikidata.org/entity/Q317855](https://www.wikidata.org/entity/Q317855) | [https://d-nb.info/gnd/5073685-1](https://d-nb.info/gnd/5073685-1) |
| Hochschule für Musik und Tanz Köln | Hochschule für Musik und Tanz Köln | [https://www.wikidata.org/entity/Q55021](https://www.wikidata.org/entity/Q55021) | [https://d-nb.info/gnd/6525138-6](https://d-nb.info/gnd/6525138-6) |
| Kunsthochschule für Medien Köln | Academy of Media Arts Cologne | [https://www.wikidata.org/entity/Q827038](https://www.wikidata.org/entity/Q827038) | [https://d-nb.info/gnd/2128885-9](https://d-nb.info/gnd/2128885-9) |
| Robert Schumann Hochschule Düsseldorf | Robert Schumann Hochschule Düsseldorf | [https://www.wikidata.org/entity/Q315238](https://www.wikidata.org/entity/Q315238) | [https://d-nb.info/gnd/5082177-5](https://d-nb.info/gnd/5082177-5) |

Abgesehen von diesem rechtlichen Rahmen kann angegeben werden, aus welcher Organisationseinheit innerhalb der Hochschule ein Projekt stammt. Das kann beispielsweise ein Studiengang sein, ein Forschungsinstitut oder ein Archiv.

<pre class="mermaid">
flowchart LR;
    Projekt-- <span style="background-color: #f4effc">Ein Projekt gehört zu einer\n Einliefernden Hochschule</span>  --> Einliefernde_Hochschule[Einliefernde Hochschule]
    Einliefernde_Hochschule-- <span style="background-color: #f4effc">Zu einer Einliefernden Hochschule können beliebig\n viele Projekte gehören</span>  --> Projekt
    Projekt-- <span style="background-color: #f4effc">Ein Projekt kann zu einer oder\n mehreren Organisationseinheiten gehören</span>  --> Organisationseinheit
    Organisationseinheit-- <span style="background-color: #f4effc">Zu einer Organisationseinheit können beliebig\n viele Projekte gehören</span>  --> Projekt
    style Projekt fill:#FFFFE0, stroke:#000000;
    style Einliefernde_Hochschule fill:#FFFFE0, stroke:#000000;
    style Organisationseinheit fill:#FFFFE0, stroke:#000000;
</pre>

---

## Projekt: Projektart

Ein Projekt muss zu mindestens einer und kann zu mehreren [Projektarten](/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/projektarten) gehören. Die Projektart bezeichnet den Typ des Projekts im akademischen oder administrativen Kontext. 

---

## Projekt: Identifikatoren und Normdaten

Ein Projekt bekommt automatisch eine arkumu.nrw-Signatur. Diese setzt sich zusammen aus:

* Der Kennzeichnung „arkumu“
* Einer automatischen Nummer, die fortlaufend die Projekte im System zählt
* Einem dreistelligen Identifikator für die einliefernde Hochschule: *FUK* für die Folkwang Universität der Künste, *DET* für die Hochschule für Musik Detmold, *HMT* für die Hochschule für Musik und Tanz Köln, *KHM* für die Kunsthochschule für Medien Köln und *RSH* für die Robert Schumann Hochschule Düsseldorf
* Einer weiteren automatischen Nummer, die fortlaufend die Projekte pro einliefernder Hochschule zählt

Eine vollständige Signatur könnte also wie folgt aussehen: **arkumu-9876-KHM-5432**.

Des Weiteren werden auch Einlieferer-interne Signaturen bei uns erfasst, ebenso wie Werkverzeichnisnummern.  
Zusätzlich können zu einem Projekt beliebig viele Normdaten angegeben werden, wie z. B. GND-Einträge für bekannte, klassische Werke der Musik.

<pre class="mermaid">
flowchart TB;
    Projekt-- <span style="background-color: #f4effc">hat</span>  ---> arkumu-ID
    Projekt-- <span style="background-color: #f4effc">kann, wenn vorhanden, ein oder mehrere haben</span> --> Werkverzeichnisnummer
    Projekt-- <span style="background-color: #f4effc">kann, wenn vorhanden, ein oder mehrere haben</span> ---> Normdaten-Link
    style Projekt fill:#FFFFE0, stroke:#000000;
    style arkumu-ID fill:#FFFFE0, stroke:#000000;
    style Werkverzeichnisnummer fill:#FFFFE0, stroke:#000000;
    style Normdaten-Link fill:#FFFFE0, stroke:#000000;
</pre>

---

## Projekt: Projekteigenschaften und Inhaltswarnungen

In den Projekteigenschaften können fachspezifische Angaben gemacht werden, etwa die Tonart eines Musikstücks oder die Dauer eines Films. Ein Projekt kann beliebig viele fachspezifische Angaben haben.  

Zu einem Projekt kann eine projektspezifische, einmalig verwendbare Inhaltswarnung gegeben werden. Andere, bereits im Voraus angelegte Inhaltswarnungen können in anderen Projekten immer wieder Verwendung finden.

---

## Projekt: Nutzungsrechte

Damit eine einliefernde Hochschule die Digitalen Objekte eines Projekts in die Langzeitverfügbarkeit überführen, sie öffentlich zugänglich machen und sie gegebenenfalls an andere Portale für Kultur und Wissen weitergeben kann, benötigt sie dafür die Nutzungsrechte von den Rechteinhaber:innen.  
Diese können auf zweierlei Arten eingeholt werden:

* Zum einen kann bereits ein Nutzungsvertrag zwischen den Rechteinhaber:innen und der Hochschule bestehen, der der Hochschule bereits verschiedene Erhaltungsschritte erlaubt, wie z. B. die Archivierung eines Projekts.
* Zum anderen kann zwischen den Rechteinhaber:innen und der Hochschule ein neuer Lizenzvertrag geschlossen werden, falls noch keiner vorliegt oder der bereits bestehende Lizenzvertrag erweitert werden soll. arkumu.nrw stellt dafür eine speziell für diesen Zweck erstellte Modularlizenz und ein Formular zur Rechteabfrage zur Verfügung. Details hierzu finden sich auf der Seite [Lizenzen](/ressourcen/lizenzen).

Je nach Wunsch der Rechteinhaber:innen ist es möglich, alle, keine oder nur einzelne Digitale Objekte eines Projekts zu veröffentlichen. Nicht veröffentlichte Digitale Objekte bleiben für die Öffentlichkeit unzugänglich und werden nur in die Langzeitverfügbarkeits-Sicherung des hbz gegeben. Die Metadaten (Titel, Beschreibung, Akteur:innen, usw.) werden, sofern sie keine gesperrten oder durch die DSGVO geschützten, persönlichen Informationen beinhalten, frei veröffentlicht.

<pre class="mermaid">
flowchart TB;
    Projekt_Urheberrechtsstatus{Ist das Projekt urheberrechtlich\n und/oder leistungsschutzrechtlich geschützt?}-- <span style="background-color: #f4effc">nein</span>  --> Projekt_eingeliefert[Das Projekt kann ohne Lizenzvereinbarung\n bei arkumu.nrw eingeliefert werden]
    Projekt_Urheberrechtsstatus-- <span style="background-color: #f4effc">ja</span>  ---> Lizenzvertrag_benötigt[Es wird eine Lizenzvereinbarung benötigt]
    Lizenzvertrag_benötigt --> Besteht_Lizenzvertrag{Besteht bereits ein Lizenzvertrag zwischen\n der Hochschule und dem/der Lizenzgeber:in?}
    Besteht_Lizenzvertrag-- <span style="background-color: #f4effc">ja</span>  --> Rechte_werden_geprüft[Es wird geprüft, welche Erhaltungsschritte\n bei arkumu.nrw bereits durchgeführt werden können]
    Besteht_Lizenzvertrag-- <span style="background-color: #f4effc">nein</span>  --> Neuer_Lizenzvertrag[Es kann ein neuer Lizenzvertrag via arkumu.nrw geschlossen werden]
    Rechte_werden_geprüft-- <span style="background-color: #f4effc">zusätzlich</span>  --> Neuer_Lizenzvertrag[Es kann ein neuer Lizenzvertrag via arkumu.nrw geschlossen werden]
</pre>

Außerdem gibt es noch einige Sonderfälle, die im Einzelfall geprüft werden müssen. So kann es sein, dass ein Werk verwaist ist, es also auch nach vorheriger Recherche nicht mehr seinen zugehörigen Urheber:innen zugeordnet werden kann. In diesem Fall kann eine europäische Sonderregelung gelten, bei der die zugehörigen Dateien öffentlich zugänglich gemacht werden könnten.


---

## Ereignis: Ereignistypen

Ereignisse können ebenso kategorisiert werden wie Projekte. Ein Ereignis kann ein Ankauf sein, eine musikalische Komposition, eine Ursendung oder ein Rundgang. Eine Übersicht über die verwendeten Ereignistypen findet sich in der Liste unserer [Ereignistypen](/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/ereignistypen). Ein Ereignistyp wird mindestens über einen Wikidata-Link definiert und kann zusätzlich einen GND-Link, einen AAT-Link und einen Link zu einem Ereignis aus der LIDO-Terminologie haben.

<pre class="mermaid">
flowchart LR;
    Ereignis-- <span style="background-color: #f4effc">hat einen</span> --> Ereignistyp
    Ereignistyp-- <span style="background-color: #f4effc">wird definiert über</span> --> Wikidata-Link
    Ereignistyp-- <span style="background-color: #f4effc">kann zusätzlich haben</span> --> GND-Link
    Ereignistyp-- <span style="background-color: #f4effc">kann zusätzlich haben</span> --> AAT-Link
    Ereignistyp-- <span style="background-color: #f4effc">kann zusätzlich haben</span> --> LIDO-Terminologie-Link
    Ereignistyp-- <span style="background-color: #f4effc">kann zusätzlich haben</span> --> Synonyme
    style Ereignis fill:#90EE90, stroke:#000000;
    style Ereignistyp fill:#90EE90, stroke:#000000;
</pre>

---

## Ereignis: Zeitraumangaben

Ein Ereignis kann einen Beginn und/oder ein Ende haben. Sowohl der Ereignisbeginn als auch das Ereignisende können geschätzt sein. 

<pre class="mermaid">
flowchart TB;
    Ereignis-- <span style="background-color: #f4effc">hat (mindestens)\n kann bei Bedarf geschätzt sein</span> ---> Ereignisbeginn
    Ereignis-- <span style="background-color: #f4effc">hat (mindestens)\n kann bei Bedarf geschätzt sein</span> --> Ereignisende
    style Ereignis fill:#90EE90, stroke:#000000;
    style Ereignisbeginn fill:#90EE90, stroke:#000000;
    style Ereignisende fill:#90EE90, stroke:#000000;
</pre>

Zeitangaben speichern wir nach der Norm [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html). In dieser sind sowohl grobe als auch sehr genaue Angaben möglich.

| Ereignisbeginn | Ereignisende | Ereigniszeitraum | Technischer Ereigniszeitraum |
| ---------- | ---------- | ---------- |
|2022| 2023 | 2022–2023 | 01.01.2022, 0:00 Uhr–31.12.2023, 23:59 Uhr |
| 2022-02 | 2023-03 | Februar 2023–März 2023 | 01.02.2022, 0:00 Uhr–31.03.2023, 23:59 Uhr |
| 2022-02-02 | 2023-03-03 | 02.02.2022–03.03.2023 | 02.02-2022, 0:00 Uhr–03.03.2023, 23:59 Uhr |
| 2022-02-02T12:12 | 2023-03-02T13:13 | 02.02.2022, 12:12 Uhr–03.03.2023, 13:13 Uhr | 02.02.2022, 12:12 Uhr–03.03.2023, 13:13 Uhr |

---

## Ereignis: Orte
Orte werden ähnlich wie Schlagwörter über Wikidata referenziert. Bei Orten wird im Hintergrund eine komplexe Abfrage gestellt, die alle übergeordneten Orte findet. Die Orts-Abfrage ist damit in der Lage, einen eingegebenen Ort direkt in seinen geografischen Kontext zu setzen. Orte werden dabei in 6 Hierarchieebenen erfasst: **Kontinent** > **Land** > **Region** > **Stadt** > **Genauer Ort** > **Interner Ort**.

<figure>
<a href="/assets/images/Erfassungs-Backend_Ort_anlegen_1.PNG"><img src="/assets/images/Erfassungs-Backend_Ort_anlegen_1.PNG" alt="Über eine Wikidata-Suche kann ein Ort gesucht werden. Das System liefert einen Treffer und seine bei Wikidata hinterlegte Beschreibung." title="Über eine Wikidata-Suche kann ein Ort gesucht werden. Das System liefert einen Treffer und seine bei Wikidata hinterlegte Beschreibung."></a>
<figcaption>Über eine Wikidata-Suche kann ein Ort gesucht werden. Das System liefert einen Treffer und seine bei Wikidata hinterlegte Beschreibung.</figcaption>
</figure>

<figure>
<a href="/assets/images/Erfassungs-Backend_Ort_anlegen_2.PNG"><img src="/assets/images/Erfassungs-Backend_Ort_anlegen_2.PNG" alt="Der Ort wurde angelegt. Seine Attribute wurden aus Wikidata ausgelesen und im System gespeichert." title="Der Ort wurde angelegt. Seine Attribute wurden aus Wikidata ausgelesen und im System gespeichert."></a>
<figcaption>Der Ort wurde angelegt. Seine Attribute wurden aus Wikidata ausgelesen und im System gespeichert.</figcaption>
</figure>

---

## Ereignis: Akteur:innen, Rollen und Rechteangaben

Personen, Gruppen oder Körperschaften können Akteur:innen sein. 

<pre class="mermaid">
flowchart LR;
    Ereignis-- <span style="background-color: #f4effc">Ein Ereignis kann mehrere Akteur:innen haben</span> --> AkteurIn[Akteur:in]
    AkteurIn-- <span style="background-color: #f4effc">Dieselbe Akteur:in kann an mehreren Ereignissen beteiligt sein</span> --> Ereignis
    style Ereignis fill:#90EE90, stroke:#000000;
    style AkteurIn fill:#F0F8FF, stroke:#000000;
</pre>

Die folgende Tabelle, zeigt, welche Attribute für **Akteur:innen** benutzt werden können:

| Deutscher Feldname | Englischer Feldname | Kardinalität | Bemerkung |
| ---------- | ---------- | ---------- |
| Deutscher Name | German Name | 1 | Automatisch der englische Name, wenn nur dieser angegeben wurde |
| Englischer Name | English Name | 1 | Automatisch der deutsche Name, wenn nur dieser angegeben wurde |
| Alternativer Name | Alternative Name | 0-u | Beliebig viele Varianten des Namens, u. a. auch der Name in der Herkunftssprache |
| Nicht-öffentlicher Name | Non-public Name | 0-u | Ein Name, der nicht veröffentlicht werden soll, aber für die Langzeitverfügbarkeit oder die interne Verwaltung der Daten von Bedeutung ist |
| Nicht-öffentlicher Name (Erläuterung)| Non-public Name (Reason) | [1-u] | Eine Begründung, warum der Name nicht veröffentlicht werden soll |
| Vorangestellter Titel | Preceding Title | 0-1 | Z. B. "Prof.", "Dr.phil.", "Dr. Dr.", etc.. |
| Nachgestellter Titel | Following Title | 0-1 | Z. B. "PhD" |
| Geschlecht | Gender | 0-1 | Erfassung im Freitext. Wird nicht veröffentlicht. Bei Gruppen und Körperschaften bleibt dieses Feld leer |
| Frühestes Geburtsdatum | Earliest Birth Date | 0-1 | Das früheste bekannte Geburtsdatum in ISO 8601|
| Spätestes Geburtsdatum | Latest Birth Date | 0-1 | Das späteste bekannte Geburtsdatum in ISO 8601 |
| Frühestes Sterbedatum | Earliest Death Date | 0-1 | Das früheste bekannte Sterbedatum in ISO 8601 |
| Spätestes Sterbedatum | Latest Death Date | 0-1 | Das späteste bekannte Sterbedatum in ISO 8601 |
| Wirkungsbeginn | Begin of Activity | 0-1 | Für Gruppen und Körperschaften; deren Wirkungsbeginn in ISO 8601 |
| Wirkungsende | Enf of Activity | 0-1 | Für Gruppen und Körperschaften; deren Wirkungsende in ISO 8601 |
| Geburtsort | Place of Birth | 0-1 | Ein Geburtsort aus der Entität Orte |
| Sterbeort | Place of Death | 0-1 | Ein Sterbeort aus der Entität Orte |
| Wirkungsort | Place of Activity | 0-u | Ein oder mehrere Wirkungsorte |
| Gründungsort | Place of Activity | 0-1 | Für Gruppen und Körperschaften; deren Gründungsort |
| Auflösungsort | Place of Activity | 0-1 | Für Gruppen und Körperschaften; deren Auflösungsort |
| Deutsche Kurzbiografie | German Short Biography | 0-1 | Die deutsche Kurzbiografie der Person, Gruppe oder Körperschaft |
| Englische Kurzbiografie | English Short Biography | 0-1 | Die englische Kurzbiografie der Person, Gruppe oder Körperschaft |
| Deutscher Kommentar | German Commentary | 0-1 | Ein deutscher Kommentar. Freitext. |
| Englischer Kommentar | English Commentary | 0-1  | Ein entsprechender englischer Kommentar. Freitext. Es wird darauf hingewiesen, wenn möglich beide Felder auszufüllen. |
| Interner Kommentar | Internal Commentary | 0-1 | Ein Team-interner Kommentar |           
| Beruf und Tätigkeit | Profession and Activity | 0-u | Eine oder mehrere feste Rollen aus der entsprechenden Entität (s. u.)|
| OrcID | OrcID | 0-1 | Ein Orcid-Identifier der Person |
| GND-ID | GND ID | 0-1 | Link zu einem GND-Normdatensatz zur Akteur:in |
| VIAF-ID | VIAF ID | 0-1 | Link zu einem VIAF-Normdatensatz zur Akteur:in |
| LCCN-ID | LCCN ID | 0-1 | Link zu einem Normdatensatz zur Akteur:in in der Library of Congress Authority File |
| Wikidata-ID | Wikidata ID | 0-1 | Link zu einem Wikidata-Objekt zur Akteur:in |
| Andere Normdaten | Other Authority Files | 0-u | Weitere Normdatenlinks |
| Link zur Webseite der Akteur:in | Link to Actor Page | 0-u | Links zu externen Webseiten der Akteur:innen |
| Kontakt (E-Mail) | Contact (E-Mail) | 0-u | Eine oder mehrere mögliche Kontaktemails. Diese werden nicht veröffentlicht und nicht mit in die Langzeitverfügbarkeit überführt. |
| Kontakt (Telefon) | Contact (Phone) | 0-u | Ein oder mehrere mögliche Telefonkontakte. Diese werden nicht veröffentlicht und nicht mit in die Langzeitverfügbarkeit überführt. |
| Kontakt (Postanschrift) | Contact (Postal Address) | 0-1 | Eine mögliche Postanschrift. Diese wird nicht veröffentlicht und nicht mit in die Langzeitverfügbarkeit überführt. |

Innerhalb eines Ereignisses kann ein:e Akteur:in mehrere Rollen haben. Eine Rolle hat einen deutschen und einen englischen Namen und eine Wikidata-Referenz. Zusätzlich können Rollen auch einen rollenspezifischen GND-Link und einen „Getty Art and Architecture Thesaurus“-Link haben. Zur besseren Auffindbarkeit von Akteur:innen kann eine Rolle auch noch mit deutschen und englischen Synonymen angereichert werden. Eine Übersicht, welche Rollen verwendbar sind, findet sich in der [Rollen-Taxonomie](/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/rollen).

<pre class="mermaid">
flowchart TB;
    AkteurIn[Akteur:in]-- <span style="background-color: #f4effc">hat eine oder mehrere</span> ---> Rolle
    Rolle-- <span style="background-color: #f4effc">im</span> ---> Ereignis
    style Ereignis fill:#90EE90, stroke:#000000;
    style AkteurIn fill:#F0F8FF, stroke:#000000;
</pre>

Zusätzlich lässt sich angeben, ob ein:e Akteur:in aufgrund einer Rolle Urheberrechte und/oder Leistungsschutzrechte besitzt. Bestimmte Rollen führen in vielen Fällen automatisch zu Urheber- und Leistungsschutzrechten der Akteur:innen. Ist eine Person beispielsweise „Komponist:in“ oder "Künstler:in" in einem Ereignis, dann besitzt sie mit großer Wahrscheinlichkeit Urheberrechte am Projekt. Ist ein:e Akteur:in „Produzent:in“ eines Films, besitzt sie wahrscheinlich Leistungsschutzrechte. Die Taxonomie der Rollen bietet eine Vorauswahl, die angibt, bei welchen Rollen diese Rechte üblicherweise vorhanden sind. Dies entbindet nicht von der Pflicht, individuell zu prüfen, welche Angaben zutreffen.

Weiterhin kann angegeben werden, ob nur vermutet wird, dass ein:e Akteur:in in einem Ereignis mitgewirkt hat. Für diesen Fall gibt es das Feld „Ungesicherte Zuschreibung“.

---

## Ereignis: Equipment & Software

In einem Ereignis können verschiedene Arten von Equipment und/oder Software zum Einsatz kommen. Mit diese Entität lässt sich z. B. beschreiben, welche technische Ausrüstung oder welche Software in einem Herstellungs-Ereignis verwendet wurden. Die Liste der [Equipmentarten](/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/equipmentarten) erlaubt die Kategorisierung von Einträgen in der Tabelle Equipment und Software.

| Deutsche Feldbezeichnung | Englische Feldbezeichnung | Verweist auf Entität | Kardinalität | Notizen/Definition/Referenz |
| ---------- | ---------- | ---------- | ---------- |
| Deutsche (Produkt-) Bezeichnung | German (Product) Name |  |  1 | Handelsname, z.B. Hasselblad X, Photoshop CS6, Numark 402, InkJet 7800 |
| Englische (Produkt-) Bezeichnung | English (Product) Name |  |   1| Es kann vorkommen, dass Produkte in verschiedenen Vertriebs-Regionen unterschiedlich bezeichnet werden. Der Regelfall wird aber sein, dass in beiden Bezeichnungsfeldern dasselbe steht. |
| Hersteller | Producer |  | 0-1 | Freitext |
| [Equipmentarten](/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/equipmentarten) | Equipment Type | Equimentart | 1 | Auswahlliste , z.b. Mikrofon, Mischpult, Verstärker, Filmkamera, Fotokamera, Videokamera, 3D-Scanner, 3D-Drucker, Software, Audiorecorder, Licht. |
| Deutsche Beschreibung	 | German Description |  | 0-1	| Freitext |
| Englische Beschreibung | English Description |  | 0-1	| Freitext |
| Normdatei | Authority File |  | 0-u	| z. B. Wikidata-ID |

---

## Ereignis: Physische Objekte

Die Entität „Physische Objekte“ beschreibt Objekte und Materialien, die in Ereignissen entstanden sind oder verwendet wurden, z.B. eine Skulptur, ein Foto-Print, eine Malerei oder ein Buch.
In einem Ereignis können beliebig viele Physische Objekte beschrieben werden. Dasselbe Physische Objekt kann in vielen Ereignissen vorkommen.

| Deutscher Feldname | Englischer Feldname | Kardinalität | Kommentar |
| ---------- | ---------- | ---------- | ---------- |
|Deutsche Bezeichnung | German Name | 1 | Automatisch der englische Name, wenn nur dieser angegeben wurde |
| Englische Bezeichnung	| English Name | 1 | Automatisch der deutsche Name, wenn nur dieser angegeben wurde |
| Externe Inventar-Signaturnummer | External Inventory Number | 0-u | Eine oder mehrere Signaturen |
| Aufbewahrungsort | Depository | 0-1 | Ein Ort aus der Orte-Entität |
| Besitzer:in | Owner | 0-u | Ein oder mehrere Akteur:innen aus der Akteur:in-Entität |
| Eigentümer:in | Legal Rights Holder | 0-u | Ein oder mehrere Akteur:innen aus der Akteur:in-Entität |
| Provenienz | Provenance | 0-1 | Ein Freitextfeld zur Provenienzbeschreibung |
| Deutsche Beschreibung | German Description | 0-1 | Eine Beschreibung im Freitext |
| Englische Beschreibung | English Description | 0-1 | Eine Beschreibung im Freitext |
| Deutscher Kommentar | German Commentary | 0-1 | Ein deutscher Kommentar im Freitext |
| Englischer Kommentar |English Commentary | 0-1 | Ein englischer Kommentar im Freitext. Es wird darauf hingewiesen, wenn möglich beide Felder auszufüllen. |
| Klassifizierendes Schlagwort | Classification Keyword to Physical Object | 0-u | Ein oder mehrere Schlagworte aus der Schlagwort-Entität, die Objekte bezeichnen, z. B. „Stuhl“, „Bühne“, „Sockel“, etc. |
| Materialschlagwort | Material Keyword | 0-u | Ein oder mehrere Schlagworte aus einer separaten Entität, um Materialien zu bezeichnen, z. B. „Polyurethan“, „Sand“, „Wachs“, „Kabel“ |
| Technischer Kommentar (deutsch) | Technique [German] | 0-1 | Freitext. Verwendete künstlerische Technik, z.B. „C-Print auf Alu Dibond“, „Aquarell auf Hahnemühle 300g“, „Monotypie und Bleistift“, etc. |
| Technischer Kommentar (englisch) | Technique [English] | 0-1 | Freitext. Es wird darauf hingewiesen, wenn möglich, beide Felder auszufüllen. |
| Technikschlagwort | Technique Keyword | 0-u | Verwendete künstlerische Technik (Wikidata-Schlagwort) |
| Maße	| Measurements | 0-1 | Ein Freitextfeld, in das Maße eingetragen werden können. |		
| Erhaltungszustand (deutsch) | Conservation State (German) | 0-1 | Eine deutsche Beschreibung des Erhaltungszustands des Objekts. |
| Erhaltungszustand (englisch) | Conservation State (English) | 0-1 | Eine englische Beschreibung des Erhaltungszustands des Objekts. Freitext. Es wird darauf hingewiesen, wenn möglich beide Felder auszufüllen.|

---

## Ereignis: Informationsträger

Informationsträger sind materielle Datenträger oder Trägermedien, die digitalisiert wurden, wie z. B. eine Schallplatte, eine Diskette, ein Tonband oder ein VHS-Band. Informationsträger werden durch [die Informationsträgertypen](/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/informationstraegertypen) kategorisiert. 

Anmerkung für die Erfassung: Diese Entität sollte benutzt werden, wenn:
1. Ein Projekt Retrodigitalisierung beinhaltet und Informationen über analoge Original erhaltenswert sind,
2. der Informationsträger unabdingbarer Teil eines Werks ist, z.B. bei einer interaktiven CD-ROM oder
3. die Details des Transfers von einem digitalen Informationsträger relevant für die Sacherschließung/die digitale Historie und entsprechend erhaltenswert sind.
		

Zu einem Informationsträger können die folgenden Informationen erfasst werden:

| Deutscher Feldname | Englischer Feldname | Kardinalität | Kommentar |
| ---------- | ---------- | ---------- | ---------- |
| Deutsche (Produkt-) Bezeichnung | German (Product-) Name | 0-1 | Der deutsche Name oder die Bezeichnung des Informationsträgers, z. B. „BASF C-90“, „SONY KSP-20“, „Hi8 ME 120“, etc. |
| Englische (Produkt-) Bezeichnung | English (Product-) Name | 0-1 | Der englische Name oder die Bezeichnung des Informationsträgers |			
| Label (Handelsmarke) | Label | 0-1 | Eine Handelsmarke |			
| [Informationsträgertyp](/technische-dokumentation/kontrollierte-vokabulare-und-taxonomien/informationstraegertypen)	| Information Storage Media Type | 1 | Eine Auswahl aus der Informationsträgertyp-Taxonomie |
| Produkt-ID-Typ | Product ID Type | 0-u | Eine Auswahl aus der Entität "Nummernart". Z. B. "Bestellnummer", "ISBN", "Seriennummer" oder "Matritzennummer" |
| Produkt-ID-Wert | Product ID Value | [1] | Zu jeder Auswahl ein dazugehöriger Wert |
| Externe Inventar-Signaturnummer | External Inventory Number | 1-u | Eine Pflichtangabe, die den Informationsträger beim Einlieferer identifiziert. Bei Bedarf können es auch mehrere Nummern sein | 
| Besitzer:in                  | Owner                        | 0-u | Ein oder mehrere Akteur:innen aus der Akteur:in-Entität |
| Eigentümer:in                | Legal Rights Holder          | 0-u | Ein oder mehrere Akteur:innen aus der Akteur:in-Entität |
| Provenienz                   | Provenance                   | 0-1 | Freitext-Feld z.b. "von 1950-1990 Frau Meyer, ab 1990 Herr Schulze" (Daten werden nicht veröffentlicht und gehen ausschließlich in die Langzeitverfügbarkeit/Rosetta) |
| Deutsche Beschreibung        | German Description           | 0-1 | Freitext |
| Englische Beschreibung       | English Description          | 0-1 | Freitext |
| Deutscher Kommentar          | German Commentary            | 0-1 | Freitext |
| Englischer Kommentar         | English Commentary           | 0-1 | Freitext |
| Interner Kommentar           | Internal Commentary          | 0-1 | Freitext |
| Maße                         | Measurements                 | 0-1 | Freitext |
| Materialschlagwort           | Material Keyword             | 0-u | Verzeichnung über Schlagwort-Entität|
| Erhaltungszustand (deutsch)  | Conservation State (German)  | 0-1 | z.B. im Original vorhanden, zerstört, verschollen |
| Erhaltungszustand (englisch) | Conservation State (English) | 0-1 | Ein entsprechender englischer Eintrag |
| Aufbewahrungsort | Depository | 0-1 | Ein Ort aus der Orte-Entität. Der derzeitige oder letztbekannte Aufbewahrungsort |
| Informationsträgereigenschaft | Information Storage Medium Property | 0-u | Eine Auswahl aus der Entität "Informationsträgereigenschaft", z. B. „Bildfrequenz“, „Abspielgeschwindigkeit“ oder „Tonformat“ |
| Informationsträgereigenschaft-Wert | Information Storage Medium Property Value | [1] | Zu jeder Auswahl ein dazugehöriger Wert |
| Normdatei | Authority File | 0-u | Ein oder mehrere Normdatenlinks zum Informationsträger |								
| Kompilation | Compilation | 0/1 | Eine Angabe, ob der Informationsträger mehrere Projekte enthält. Entweder "ja", "nein" oder "keine Aussage" |
| Kompilationstitel | Compilation Title | [0-1] | Der Name dieser Kompilation |
| Kompilations-Reihennummer | Compilation Series Number | [0-1] | Die entsprechende Reihennummer |									
| Originalsprache | Original Language | 0-u | Eine oder mehrere ISO 639-Sprachen |
| Sprachfassung | Language Version | 0-u | Eine oder mehrere ISO 639-Sprachen  |
| Untertitelsprache | Subtitle Language | 0-u | Eine oder mehrere ISO 639-Sprachen  |	

---

## Ereignis: Digitale Objekte

arkumu.nrw definiert ein Digitales Objekt als eine Datei oder ein Dateibündel sowie die zugehörige inhaltliche Beschreibung und technische Metadaten. Ein Ereignis kann beliebig viele Digitale Objekte enthalten, und ein Digitales Objekt kann in beliebig vielen Ereignissen auftauchen. Bereits beim Upload werden zentrale Metadaten zur Datei erfasst:

Dies sind die wichtigsten Angaben zu einem Digitalen Objekt:

| Deutscher Feldname | Englischer Feldname | Kardinalität | Kommentar |
| ---------- | ---------- | ---------- | ---------- |
| Medientyp | Media Type | 1 | Bezeichnung des Datei- oder Datentyps. Das System klassifiziert hochgeladene Dateien automatisch dem MIME-Type folgend. Dieser sollte in den meisten Fällen beibehalten werden. Es kann aber auch manuell ein anderer Typ ausgewählt werden, z.B. im Fall dass der MIME-Type nicht erkannt werden kann. "Code" sollte für ausführbaren Programmcode verwendet werden (auch wenn er z.B, in ein Dateiarchiv verpackt wurde), "Daten" für alle weiteren Dateitypen, auf die keine der anderen Bezeichnungen zutrifft. |
| Erhaltungstyp | Preservation Type | 1 | Entweder "Preservation Master", "Modified Master" oder "Derivative Copy (Nutzerformat)". Der Erhaltungstyp bezeichnet den Status einer Datei im Sinne des PREMIS-Standards. Als "Preservation Master" bezeichnet man digitale Originale, die für die langfristige Erhaltung maßgeblich sind. Diese sollten möglichst unkomprimiert, hochaufgelöst und langzeitstabil sein. Wenn keine solche Datei von hoher Qualität vorhanden ist, dann muss die bestmögliche Datei als "Preservation Master" behandelt werden. "Modified Master" sind optionale Kopien von "Preservation Mastern" in langzeitstabilen Formaten und entstehen zum Beispiel durch Formatmigrationen. "Derivate Copies" sind optionale Nutzerkopien in meist komprimierten, internetfreundlicheren Formaten, die nicht in die Langzeitarchivierung überführt werden. |
| Entstehung | Genesis | 0-1 | Eine Auswahl zwischen "born digital" oder "Retrodigitalisat". Die Angabe, ob das authentische Original eines Objekts digital entstanden ist oder erst später digitalisiert wurde. Computergrafiken, Drehbücher im Word-Format und Digitalfotos zur Dokumentation sind "Born Digital". Ein Film, der auf Filmmaterial gedreht und danach digital bearbeitet wird, ist demnach ebenso "Born Digital". Scans von Büchern und Bildern, oder Digitalisierungen von alten Tonbändern sind "Retrodigitalisate". Die Angabe ist optional, da die Entstehung bei alten Beständen oft nicht mehr festgestellt werden kann.  |
| Lizenzstatus | License State | 1 | Eine Auswahl, welche Lizenz dieser Datei vergeben werden soll.  | 


Neben diesen  gibt es noch eine Reihe von technischen und deskriptiven Feldern:

| Deutscher Feldname | Englischer Feldname | Kardinalität | Kommentar |
| ---------- | ---------- | ---------- | ---------- |
| Dateiname | File Name | 1 | Der automatisch ausgelesene Dateiname der Datei |
| Dateigröße | File Size | 1 | Die automatisch ausgelesene Dateigröße der Datei |
| MIME Type | MIME Type | 1 | Der automatisch ausgelesene Dateityp der Datei |
| Datei-Änderungsdatum | File Modification Date	| 1 | Das automatisch ausgelesene letzte Änderungsdatum der Datei |
| Dateipfad | File Path | 1 | Der Dateipfad der Datei im arkumu.nrw-Erfassungsportal |
| arkumu.nrw Signatur bzw. ID | arkumu.nrw ID | 1 | Ein eindeutiger Identifikator der Datei |	
| ID beim Einlieferer | ID at Depositor | 0-1 | Ein oder mehrere eindeutige Identifikatoren dieser Datei oder dieses Datei-Metadatensatzes in Systemen der einliefernden Hochschule oder Organisationseinheit. Mehrere Identifikatoren sind mit einem ";" zu trennen.|
| Objekttyp | Object Type | 0-1 | Ein oder mehrere Schlagwörter, die den Inhalt des Objekts beschreiben, beispielsweise  "Ausstellungsdokumentation",  "Trailer", "Poster" oder "Screenshot". Schlagwörter werden immer durch Verweise auf Einträge in Wikidata definiert. |
| Deutsche inhaltliche Beschreibung | German Description | 0-1 | Freitext |
| Englische inhaltliche Beschreibung | English Description | 0-1 | Freitext. Es wird darauf hingewiesen, wenn möglich beide Felder auszufüllen.|
| Deutscher Kommentar | German Commentary | 0-1 | Ein öffentlich sichtbarer Kommentar über das Digitale Objekt.|
| Englischer Kommentar | English Commentary | 0-1 |Freitext. Es wird darauf hingewiesen, wenn möglich beide Felder auszufüllen. |
| Interner Kommentar | Internal Commentary | 0-1 | Anmerkungen, Notizen und andere Bemerkungen zur Datei, die nicht öffentlich angezeigt werden, aber für die Erfassung wichtig sind. |
| Dateipaket | File Package | 0/1 | Entweder keine Auswahl oder "ja" |
| Systemvoraussetzungen	| System Requirements | [1 für "Code"] | Pflicht wenn für eine Datei der Medientyp "Code" ausgewählt wurde |
| Derivatkopie-Nummer | Derivative Copy Number | [1 wenn "Derivative Copy (Nutzerformat)] | Von der gleichen Datei (oder einer Reihe von Dateien) können mehrere Nutzerkopien erstellt werden, die durchnummeriert werden sollten. |		
| Wesentliche Eigenschaften (deutsch) | Significant Properties (German) | 0-1 | Eigenschaften, die sich nicht ändern dürfen, wenn – zum Zweck der Langzeitverfügbarkeit – Kopien von dieser Datei gemacht werden, z. B.: "Das Seitenverhältnis darf nicht geändert werden", oder "Es ist zu beachten, dass der Filtereffekt im Video erhalten bleibt". |
| Wesentliche Eigenschaften (englisch) | Significant Properties (English) | 0-1 | Eigenschaften, die sich nicht ändern dürfen, wenn – zum Zweck der Langzeitverfügbarkeit – Kopien von dieser Datei gemacht werden, z. B.: "The aspect ratio must not be changed", or "It should be noted that the filter effect is preserved in the video".|
| Bildbeschreibung (deutsch) | Image Description (German) | 0-1 | Ein deutschsprachiges Feld speziell für die Beschreibung von Bildinhalten, z. B.: "Zeichnung eines Baums auf weißen Hintergrund.". | 
| Bildbeschreibung (englisch) | Image Description (English) | 0-1 | Ein englischsprachiges Feld speziell für die Beschreibung von Bildinhalten, z. B.: "Drawing of a tree on white background."|
| Eigenschaften | Properties | 0-u | Zusätzlich können weitere, sammlungsspezifische Eigenschaften angegeben werden, wie z. B. Originalsprache, Sprachfassung, Untertitelsprache, Tonmischfassung, Tonformat, DCP-Art oder die Angabe, ob ein Digitales Objekt in einer Endlosschleife abzuspielen ist. |

Mit folgenden Programmen wird außerdem eine Vielzahl von technischen Metadaten der Datei ausgelesen: [JHOVE](https://jhove.openpreservation.org/), [DROID](https://www.nationalarchives.gov.uk/information-management/manage-information/preserving-digital-records/droid/), [MediaInfo](https://mediaarea.net/de/MediaInfo) und [metadata-extractor](https://github.com/drewnoakes/metadata-extractor). Der Output dieser Tools wird in Gänze gespeichert. Einige Informationen aus diesem technischen Metadaten werden zusätzlich herausgezogen und in eigenen Feldern angezeigt:

| Deutscher Feldname | Englischer Feldname | Kardinalität | Kommentar |
| ---------- | ---------- | ---------- | ---------- |
| JHOVE-Dateistatus | JHOVE Status | 1 | Die Angabe, ob eine Datei valide und/oder wohlgeformt ist |							
| DROID-PUID | PUID | 1 | Eine aus DROID automatisch ausgelesene ID, die eine Datei in der [PRONOM-Datenbank](https://www.nationalarchives.gov.uk/PRONOM/) von [The National Archives](https://www.nationalarchives.gov.uk/) identifiziert. |							
| DROID-PUID-Link | PUID Link | 1 | Ein aus der PUID erstellter Link zur PRONOM-Webseite, z. B.: [https://www.nationalarchives.gov.uk/PRONOM/fmt/134](https://www.nationalarchives.gov.uk/PRONOM/fmt/134)
| Prüfsumme | Hash/Checksum | 1 | Eine vom System automatisch erstellte Prüfsumme, mit der die Datei eindeutig zu identifizieren ist und sich verifizieren lässt, dass sie seitdem unverändert ist. (SHA256) |									
| Dateityp (kurz) | File Type (short) | 1 | Der kurze Name des Dateityps |
| Dateityp (lang) | File Type (long) | 1 | Der ausgeschriebene Name des Dateityps |
| Dateifamilie | File Family | 1 | Die jeweilige Dateifamilie |
| MediaInfo-Format | MediaInfo-Format | 0-1 | Ein oder mehrere MediaInfo „track types“ (General, Audio, Video, Text, Other) |
| Technische Dauer | Technical Duration	| 0-1 | Für Video- und Audiodateien |								

---

## Selbstreferentielle Verknüpfungen

Projekte, Ereignisse und Akteur:innen können jeweils rekursiv verknüpft werden, z. B. ein Projekt kann Teil eines anderen Projekts sein, oder einzelne Akteur:innen sind Mitglied einer Künstler:innengruppe, die ebenfalls als Akteur:in angelegt ist. Diese Art von Verbindungen ist immer reziprok. Das heißt, wenn eine Verbindung hergestellt wurde, wird immer die passende Gegenverbindung mit angelegt. Ein Beispiel: Würde man bei C. P. E. Bach die Verbindung "hat Vater" zu "Johann Sebastian Bach" herstellen, so würde bei Letzterem automatisch folgendes angelegt werden: "ist Vater von" "C. P. E. Bach". 

<pre class="mermaid">
flowchart LR;
    Projekt<-- <span style="background-color: #f4effc">kann verknüpft sein mit</span> ---> Projekt
    Ereignis<-- <span style="background-color: #f4effc">kann verknüpft sein mit</span> ---> Ereignis
    AkteurIn[Akteur:in]<-- <span style="background-color: #f4effc">kann verknüpft sein mit</span> ---> AkteurIn
    style AkteurIn fill:#F0F8FF, stroke:#000000;
    style AkteurIn fill:#F0F8FF, stroke:#000000;
    style Projekt fill:#FFFFE0, stroke:#000000;
    style Ereignis fill:#90EE90, stroke:#000000;
</pre>

Folgende Verbindungen können angelegt werden:

### Projekt

| Ausgewählte Verbindung | Gegenstück |
| ---------- | ---------- |
| hat Bezug zu | hat Bezug zu |
| hat Teil | ist Teil von |
| ist Teil von | hat Teil |
| basiert auf | ist vorbereitend für |
| ist vorbereitend für | basiert auf |
| hat Kopie | ist Kopie von |
| ist Kopie von | hat Kopie |
| hat Exemplar | ist Exemplar von |
| ist Exemplar von | ist Exemplar |
| dokumentiert | ist dokumentiert von |
| ist dokumentiert von | dokumentiert | 

### Ereignis

| Ausgewählte Verbindung | Gegenstück |
| ---------- | ---------- |
| hat Bezug zu |hat Bezug zu |
| ist Teil von | hat Teil |
| hat Teil | ist Teil von |
| ist ähnlich zu | ist ähnlich zu |

### Akteur:in

| Persönliche Beziehungen ||
| Ausgewählte Verbindung   | Gegenstück |
| ---------- | ---------- |
| ist verwandt mit | ist verwandt mit |
| ist Urgroßmutter von | hat Urgroßmutter |
| hat Urgroßmutter | ist Urgroßmutter von |
| ist Urgroßvater von | hat Urgroßvater |
| hat Urgroßvater | ist Urgroßvater von |
| ist Großmutter von | hat Großmutter |
| hat Großmutter | ist Großmutter von |
| ist Großvater von | hat Großvater |
| hat Großvater | ist Großvater von |
| ist Mutter von  | hat Mutter |
| hat Mutter | ist Mutter von  |
| ist Vater von | hat Vater |
| hat Vater | ist Vater von |
| ist Schwester von | hat Schwester |
| hat Schwester | ist Schwester von |
| ist Bruder von | hat Bruder |
| hat Bruder | ist Bruder von |
| ist Tante von | hat Tante |
| hat Tante | ist Tante von |
| ist Onkel von | hat Onkel |
| hat Onkel | ist Onkel von |
| ist Großtante von | hat Großtante |
| hat Großtante | ist Großtante von |
| ist Großonkel von | hat Großonkel |
| hat Großonkel | ist Großonkel von |
| ist Cousine von | hat Cousine	|
| hat Cousine | ist Cousine von |
| ist Cousin von | hat Cousin |
| hat Cousin | ist Cousin von |
| ist Nichte von | hat Nichte |
| hat Nichte | ist Nichte von |
| ist Neffe von | hat Neffe |
| hat Neffe | ist Neffe von |
| ist Schwägerin von | hat Schwägerin |
| hat Schwägerin | ist Schwägerin von |
| ist Schwager von | hat Schwager |
| hat Schwager | ist Schwager von |
| ist Schwiegermutter von | hat Schwiegermutter |
| hat Schwiegermutter | ist Schwiegermutter von |
| ist Schwiegervater von | hat Schwiegervater |
| hat Schwiegervater | ist Schwiegervater von |
| ist verheiratet mit | ist verheiratet mit |
| ist Lebenspartner:in von | ist Lebenspartner:in von |
| ist Trauzeug:in von | hat Trauzeug:in |
| hat Trauzeug:in | ist Trauzeug:in von |


| Professionelle Beziehungen ||
| Ausgewählte Verbindung   | Gegenstück |
| ---------- | ---------- |
| in Zusammenarbeit mit | in Zusammenarbeit mit |
| ist (Firmen-)Besitzer:in von | hat (Firmen-)Besitzer:in |
| hat (Firmen-)Besitzer:in | ist (Firmen-)Besitzer:in von |
| ist Mitarbeiter:in von | hat Mitarbeiter:in |
| hat Mitarbeiter:in | ist Mitarbeiter:in von |
| ist Assistent:in von | hat Assistent:in |
| hat Assistent:in | ist Assistent:in von |
| ist Direktor:in von | hat Direktor:in |
| hat Direktor:in | ist Direktor:in von |
| ist Gründer:in von | hat Gründer:in |
| hat Gründer:in | ist Gründer:in von |
| ist Lehrer:in von | hat Lehrer:in |
| hat Lehrer:in | ist Lehrer:in von |
| ist künstlerische:r Leiter:in von | hat künstlerische:n Leiter:in |
| hat künstlerische:n Leiter:in | ist künstlerische:r Leiter:in von |
| hat Meisterschüler:in | ist Meisterschüler:in von |
| ist Meisterschüler:in von | hat Meisterschüler:in |
| ist Kolleg:in von | hat Kolleg:in |
| hat Kolleg:in | ist Kolleg:in von |
| ist Mitglied von | hat Mitglied |
| hat Mitglied | ist Mitglied von |
| ist Vorgängerin von | hat Vorgänger:in |
| hat Vorgänger:in | ist Vorgängerin von |
| ist Präsident:in von | hat Präsident:in |
| hat Präsident:in | ist Präsident:in von |
| ist Schriftführer:in von | hat Schriftführer:in |
| hat Schriftführer:in | ist Schriftführer:in von |
| ist Teil von | hat Teil |
| hat Teil | ist Teil von |
| ist zugehörig zu | ist zugehörig zu |

---

## Sammlungen

Über Sammlungen können Zusammengehörigkeiten bei den einliefernden Institutionen erfasst werden bzw. eine gemeinsame Provenienz. Beispiele: Tonträger aus dem Bandarchiv der HfMT Köln, Fotografien aus dem Fotoarchiv der Folkwang Universität der Künste, Equipment aus dem Technikarchiv der Kunsthochschule für Medien Köln, aber auch Veranstaltungen aus einer Reihe, etc.


<pre class="mermaid">
flowchart LR;
    Sammlung-- <span style="background-color: #f4effc">enthält beliebig viele</span> ---> Projekt
    Projekt-- <span style="background-color: #f4effc">kann auftauchen in beliebig vielen</span> --->Sammlung
    Sammlung-- <span style="background-color: #f4effc">enthält beliebig viele</span> ---> Ereignis
    Ereignis-- <span style="background-color: #f4effc">kann auftauchen in beliebig vielen</span> --->Sammlung
    Sammlung-- <span style="background-color: #f4effc">enthält beliebig viele</span> ---> Equipment_Software[Equipment und Software]
    Equipment_Software-- <span style="background-color: #f4effc">kann auftauchen in beliebig vielen</span> --->Sammlung
    Sammlung-- <span style="background-color: #f4effc">enthält beliebig viele</span> ---> Physisches_Objekt[Physisches Objekt]
    Physisches_Objekt-- <span style="background-color: #f4effc">kann auftauchen in beliebig vielen</span> --->Sammlung
    Sammlung-- <span style="background-color: #f4effc">enthält beliebig viele</span> ---> Informationsträger
    Informationsträger-- <span style="background-color: #f4effc">kann auftauchen in beliebig vielen</span> --->Sammlung
    Sammlung-- <span style="background-color: #f4effc">enthält beliebig viele</span> ---> Digitales_Objekt[Digitales Objekt]
    Digitales_Objekt-- <span style="background-color: #f4effc">kann auftauchen in beliebig vielen</span> --->Sammlung
    style Sammlung fill:#90EE90, stroke:#000000;
    style Projekt fill:#FFFFE0, stroke:#000000;
    style Ereignis fill:#90EE90, stroke:#000000;
</pre>
