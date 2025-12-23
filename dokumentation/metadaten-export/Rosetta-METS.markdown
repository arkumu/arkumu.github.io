---
layout: arkumu-docs
title: Rosetta-METS
order: 4.1
permalink: /documentation/metadata-export/Rosetta-METS
---

```Rosetta METS```

<br/>

**Deutsch:**

Im [Hochschulbibliothekszentrum NRW](https://www.hbz-nrw.de/), kurz *hbz*, wird die Software Rosetta des Herstellers ExLibris für die Verwaltung der separaten zentralen Langzeit-Repositories der teilnehmenden Hochschulen eingesetzt. Damit Dateien und Metadaten korrekt in das System geladen werden können, wird eine Variante des [METS (Metadata Encoding & Transmission Standard)](https://www.loc.gov/standards/mets/) verwendet, der ursprünglich von der [Library of Congress](https://www.loc.gov/) definiert wurde. Diese Variante wird gemeinhin als [Rosetta-METS](https://knowledge.exlibrisgroup.com/Rosetta/Product_Documentation/Rosetta_AIP_Data_Model/03_METS_%E2%80%93_Metadata_Encoding_and_Transmission_Standard) bezeichnet, eine optimierte und domänenspezifisch erweiterte Version dieses Standards, die beispielsweise mit [DNX](https://knowledge.exlibrisgroup.com/Rosetta/Product_Documentation/Rosetta_AIP_Data_Model/04_Rosetta_DNX_Profile) die [PREMIS (Preservation Metadata Implementation Strategies)](https://www.loc.gov/standards/premis/) in das METS-Modell implementiert. Im folgenden Abschnitt wird definiert, wie die Felder aus dem [arkumu.nrw-Datenmodell](/documentation/data-model), das hier in seiner [Graphen-bereiten Form](/documentation/data-model/graph-model) verwendet und verlinkt wird, in das zu generierende XML eingefügt werden sollen.

<br/>

---

<br/>

**English:**

At the [*Hochschulbibliothekszentrum NRW* (University Library Centre North Rhine-Westphalia)](https://www.hbz-nrw.de/), for short *hbz*, the software Rosetta by manufacturer ExLibris is used for managing the seperate central long-term repositories of the participating universities. For files and metadata to be correctly loaded into the system, a variety of the [METS (Metadata Encoding & Transmission Standard)](https://www.loc.gov/standards/mets/) which initially defined by the [Library of Congress](https://www.loc.gov/). This variety is commonly called [Rosetta-METS](https://knowledge.exlibrisgroup.com/Rosetta/Product_Documentation/Rosetta_AIP_Data_Model/03_METS_%E2%80%93_Metadata_Encoding_and_Transmission_Standard), which is a streamlined and domain specific expanded version of that standard that, for example with [DNX](https://knowledge.exlibrisgroup.com/Rosetta/Product_Documentation/Rosetta_AIP_Data_Model/04_Rosetta_DNX_Profile), implements the [PREMIS (Preservation Metadata Implementation Strategies)](https://www.loc.gov/standards/premis/) into the METS model. The following section defines how the fileds from the [arkumu.nrw Data Model](/documentation/data-model), used and linked here in its [graph-ready form](/documentation/data-model/graph-model), are to be inserted in the to be generated XML.

<br/>

---

<br/>

**Inhaltsverzeichnis**

* [1. Ordner- und Dateistruktur](#1-ordner--und-datei-struktur)
* [2. Abschnitts-Übersicht](#2-abschnitts-%C3%BCbersicht)
* [3. METS-Wurzel-Element](#3-mets-wurzel-element)
* [4. Intellektuelle Einheit: Beschreibende und rechtliche Metadaten](#4-intellektuelle-einheit-beschreibende-und-rechtliche-metadatena)
* [5. Dateien: Beschreibende und rechtliche Metadaten](#5-dateien-beschreibende-und-rechtliche-metadaten)
* [6. Intellektuelle Einheit: Administrative und rechtliche Metadaten](#6-intellektuelle-einheit-administrative-und-rechtliche-metadaten)
* [7. Representation: Administrative Metadaten](#7-representation-administrative-metadaten)
* [8. Dateien: Administrative und rechtliche Metadaten](#8-dateien-administrative-und-rechtliche-metadaten)
* [9. Datei-Sektion](#9-datei-sektion)
* [10. Structural Map](#10-structural-map)

<br/>

---

<br/>

**Table of Contents:**

* [1. Folder and File Structure](#1-ordner--und-datei-struktur)
* [2. Section Overview](#2-abschnitts-%C3%BCbersicht)
* [3. METS-Root Element](#3-mets-wurzel-element)
* [4. Intellectual Entity: Descriptive and Rights Metadata](#4-intellektuelle-einheit-beschreibende-und-rechtliche-metadatena)
* [5. Files: Descriptive and Rights Metadata](#5-dateien-beschreibende-und-rechtliche-metadaten)
* [6. Intellectual Entity: Administrative and Rights Metadata](#6-intellektuelle-einheit-administrative-und-rechtliche-metadaten)
* [7. Representation: Administrative Metadata](#7-representation-administrative-metadaten)
* [8. Files: Administrative and Rights Metadata](#8-dateien-administrative-und-rechtliche-metadaten)
* [9. File Section](#9-datei-sektion)
* [10. Structural Map](#10-structural-map)



<br/>

---

<br/>

## 1. Ordner- und Datei-Struktur

```Folder and File Structure```

<br/>

**Deutsch**

Damit Daten und Metadaten jeweils eines Projekts nach Rosetta eingeliefert werden können, müssen sie in einer bestimmten Ordnerstruktur vorliegen und entsprechend benannte werden. Die Kernmetadaten im Rosetta-METS-Format, befinden sich im ```content```-Ordner, in der Datei ```ie1.xml``` (wobei „ie“ für „Intellectual Entity“ steht). Theoretisch könnte es mehrere „ie“-Dateien geben, jedoch soll pro Paket immer nur ein Projekt übertragen werden. Neben dieser METS-Datei existiert im Ordner ```content``` auch noch der Unterordner ```streams```, der die zu übretragenden Mediendateien enthält. Beide sind in einer übergeordneten Ordnerstruktur eingebettet, die nach der "arkumu-ID" benannt ist (z.B. arkumu-1-RSH-1). In diesem Hauptordner befinden sich neben dem ```content```-Ordner auch noch eine ```dc.xml```, die einfach nur den Bevorzugten Titel des Projekts enthält. Der Bevorzugte Titel ist in einem Dublin Core-```dc:title```-Element erfasst, welches in ein ```record```-XML-Element eingefasst ist.

<br/>

---

<br/>

**English:**

In order for data and metadata of a Project to be transmitted to Rosetta, they must be stored in a specific folder structure and named accordingly. The core metadata in Rosetta-METS format is located in the ```content``` folder, in the file ```ie1.xml``` (where "ie" stands for "Intellectual Entity"). Theoretically, there could be several "ie" files, but only one Project should be transferred per package. In addition to this METS file, the ```content``` folder also contains the subfolder ```streams```, which contains the media files to be transmitted. Both are embedded in a higher-level folder structure named after the according "arkumu ID" (e.g. arkumu-1-RSH-1). In addition to the content folder, this main folder also contains a ```dc.xml``` file, which simply contains the Preferred Title of the Project. The Preferred Title is recorded in a Dublin Core ```dc:title``` element, which is enclosed in a ```record``` XML element.

<br/>

---

<br/>

```xml
<record xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dc="http://purl.org/dc/elements/1.1">
    <dc:title>Project.Preferred Title</dc:title>
</record>
```

<br/>

---

<br/>


arkumu-1-RSH-1/  
├── dc.xml  
└── content/  
    ├── ie1.xml  
    └── streams/  
        └── audio.wav

<br/>

![rosetta_mets_folder_structure](/assets/images/rosetta_mets_folder_structure.png)

<br/>

---

<br/>

## 2. Abschnitts-Übersicht

```Section Overview```


<br/>

**Deutsch:**

Metadaten-Dateien nach dem Rosetta-METS-Standard bestehen aus mehreren Abschnitten. Jene Abschnitte, die in der [offiziellen Dokumentation](https://knowledge.exlibrisgroup.com/Rosetta/Product_Documentation/Rosetta_AIP_Data_Model/03_METS_%E2%80%93_Metadata_Encoding_and_Transmission_Standard) als Pflichtelemente definiert sind, sind hier mit einer „(1)“ oder einer „(1-n)“ markiert. Grob unterschieden wird im Inhalt dieser XML-Datei zwischen deskriptiven Metadaten („Descriptive Metadata“, ```dmd```), die beschreibende Angaben enthalten, sowie, im Fall von arkumu.nrw, auch Rechtsmetadaten; und administrativen Metadaten („Administrative Metadata“, ```amd```), die vor allem für die Verwalter:innen der jeweiligen Repositorien von Bedeutung sind. Die deskriptiven Metadaten können im Rosetta-System gesucht und gefiltert, exportiert und sogar, mit den entsprechenden Rechten, bearbeitet werden. Im letzterem Fall wird eine neue METS-Datei erstellt, dass der originale Inhalt der Übertragung jederzeit nachvollziehbar bleibt. Auf der administrativen Ebene werden Zugangs- und Nutzungsrechte geregelt und noch einmal Rechte des geistigen Eigentums dargelegt sowie Quellmetadaten transferiert und technische Informationen übermittelt. Auch hier lassen sich einige Daten später bearbeiten. Viele administrative Metadaten werden von Rosetta jedoch automatisch angelegt. Für arkumu.nrw aber, wo ein möglichst automatisierter Prozess der Übermittlung stattfinden soll, werden bereits vor dem Ingest nach Rosetta entscheidende Daten vollständig mitangegeben.<br/>
Zudem wird unterschieden zwischen Metadaten für die „intellektuelle Einheit“ („Intellectual Entity“, ```ie```), die Daten über das Projekt und die verknüpften Ereignisse enthält, und den Metadaten zu den Dateien („Files“, ```FL```). Eine Zwischenpostion zu diesen beiden nimmt die Repräsentationsebene (```REP```) ein. Uaf deren administrativer Ebene wird geregelt, in welchen Erhaltungsformen das zu übertragende Projekt über die Inhalte in den Ereignissen vorliegt. Dabei muss es eine ```REP1-amd``` geben, auch wenn keine Mediendaten übermittelt werden. Optional kann es weitere geben: maximal eine für einen Modified Master und mehrere für Derivatkopien (Nutzer:innenkopien). Diese werden mit den Datein in der „File Section“ (```mets:fileSec```) verknüpft, und über die „Structural Map“ (```mets:stuctMap```) so vorbereitet, dass sie auch in der Anzeige von Rosetta wie in arkumu.nrw, bzw. in ihrer übertragenen Ordnerstruktur angezeigt werden.<br/>
Die verwendete XML-Version muss ```1.0``` sein und als Kodierung ```utf-8``` eingetragen sein. 

<br/>

---

<br/>

**English:**

Metadata files conforming to the Rosetta METS standard consist of several sections. Those sections, that are described as mandatory in the [official documentation](https://knowledge.exlibrisgroup.com/Rosetta/Product_Documentation/Rosetta_AIP_Data_Model/03_METS_%E2%80%93_Metadata_Encoding_and_Transmission_Standard), are marked with a "(1)" or "(1-n)". A rough distinction is made in the content of this XML file between descriptive metadata (```dmd```), which contains information about the object, and, in the case of arkumu.nrw, also legal metadata; and administrative metadata (```amd```), which is particularly important for the administrators of the respective repositories. The descriptive metadata can be searched, filtered, exported and even edited in the Rosetta system, provided the user has the according rights. In the latter case, a new METS file is created so that the original content of the transfered data remains traceable at all times. At the administrative level, access and usage rights are regulated, intellectual property rights are set out once again, source metadata is transferred and technical information communicated. Here, too, some data can be edited later. Though, much of the administrative metadata is created automatically by Rosetta. But for arkumu.nrw, where the transfering process should be as much automated as possible, crucial data is already provided in full before the ingestion into Rosetta.<br/>
A distinction is also made between metadata for the "Intellectual Entity" (```ie```), which contains data about the Project and the linked Events, and metadata for the files (```FL```). The representation level (```REP```) is an intermediate position between these two. In its administrative section regulates the forms of preservation in which the transferred Project is available via the content in the events. There must be a ```REP1-amd```, even if no media data is transmitted. Optionally, there may also be additional sections: a maximum of one for a Modified Master and several for Derivative Copies (user copies). These are linked to the files via the "File Section" (```mets:fileSec```), and formatted via the "Structural Map" (```mets:structMap```) so that they are presented in Rosetta as they are in arkumu.nrw, respectively in their transferred folder structure.<br/>
The XML version used must be ```1.0```, and ```utf-8``` must be set as the encoding.
 
<br/>

---

<br/>

```xml
<?xml version="1.0" encoding="utf-8"?>
<mets>
    <mets:dmdSec ID="ie-dmd">(1)
        [...]
    </mets:dmdSec>
    <mets:dmdSec ID="FL[...]-dmd">(0-n)
        [...]
    </mets:dmdSec>
    <mets:amdSec ID="ie[...]-amd">(1)
        [...]
    </mets:amdSec>
    <mets:amdSec ID="REP[...]-amd">(1 for Preservation Master, 0-1 for Modified Master, 0-n for Derivate Copy)
        [...]
    </mets:amdSec>
    <mets:amdSec ID="FL[...]-amd">(0-n)
        [...]
    </mets:amdSec>
    <mets:fileSec>(1)
        [...]
    </mets:fileSec>
    <structMap ID="REP1-1" TYPE="LOGICAL">(1-n)
        [...]
    </mets:structMap>
</mets>
```

<br/>

---

<br/>

## 3. METS-Wurzel-Element

```METS-Root Element```

<br/>

**English:**

The element ```<mets:mets>``` appears at the beginning of every METS document and, as its root, defines the required namespaces and schemas, thereby laying the formal foundation for all further descriptive and administrative data:

|||
| ------------ | ------------ |
| xmlns:mets | Defines the METS namespace. However, instead of referring to "http://www.loc.gov/METS/", as in standard METS documents, it refers to the Rosetta-METS namespace, "http://www.exlibrisgroup.com/xsd/dps/rosettaMets". |
| xmlns:xsi | This is a preparatory element for the following schema location for Rosetta-METS, so that the according schema can be loaded and data validated against it. |
| xsi:schemaLocation | Through the schema namespace (http://www.exlibrisgroup.com/xsd/ dps/rosettaMets) and the actual XML schema (https://developers.exlibrisgroup.com/wp-content/uploads/2022/06/mets_rosetta.xsd), software can check whether the Rosetta-METS document is well-formed and valid. |
| xmlns:dc | Includes the base Dublin Core Element namespace, which can be accessed at http://purl.org/dc/elements/1.1. | 
| xmlns:dcterms | http://purl.org/dc/terms/ also includes the Dublin Core Term extension. At armumu.nrw, this namespace is mainly used as an attribute and less frequently in its XML-element form. |
| xmlns:sch | Refers to Schematron, which is also used to validate content and structure in a XML. |
| xmlns:xlin | xlink, but in Rosetta-METS actually used with ```xlin```, allows for the usage of links in an XML document. However, [METS2](https://mets.github.io/) does not use xlink anymore; see https://mets.github.io/METS2_whitepaper.html. This could also affect future releases of Rosetta. |
| xmlns:dnx | Integrates the Rosetta-specific DNX namespace, which is specifically designed for administrative metadata and holds technical information, access and general rights, and implements the guidelines of [PREMIS (Preservation Metadata: Implementation Strategies)](https://www.loc.gov/standards/premis/), among other things. |

<br/>

---

<br/>

**Deutsch:**

Das Element ```<mets:mets>``` steht zu Beginn eines jedes METS-Dokuments und definiert – als Wurzel – die benötigten Namensräume und Schemata, womit es die formale Grundlage für alle weiteren deskriptiven und administrativen Angaben legt:

|||
| ------------ | ------------ |
| xmlns:mets | Definiert den METS-Namensraum. Anstatt jedoch, wie bei Standard-METS-Dokumenten auf "http://www.loc.gov/METS/" zu verweisen, wird hier auf den Rosetta-METS Namensraum, "http://www.exlibrisgroup.com/xsd/dps/rosettaMets", verwiesen. |
| xmlns:xsi | Ist ein vorbereitendes Element für die folgende Schema-Lokation für Rosetta-METS, damit das Schema geladen und gegen es valiedert werden kann. |
| xsi:schemaLocation | Durch den Schema-Namensraum (http://www.exlibrisgroup.com/xsd/dps/rosettaMets) und das eigentliche XML-Schema (https://developers.exlibrisgroup.com/wp-content/uploads/2022/06/mets_rosetta.xsd) ist es möglich, dass Software in der Lage ist zu prüfen, ob das Rosetta-METS dokument wohlgeformt und valide ist. |
| xmlns:dc | Bindet den Dublin Core-(Basis)-Element-Namensraum mit ein, der unter http://purl.org/dc/elements/1.1 aufrufbar ist. |
| xmlns:dcterms | Mit http://purl.org/dc/terms/ wird auch die Term-Erweiterung von Dublin Core eingebunden. Dieser Namensraum wird bei armumu.nrw vor allem aber als Attribut und seltener in seiner XML-Element-Form benutzt. |
| xmlns:sch | Verweist auf Schematron, was ebenfalls zur Validierung von Inhalt und Struktur in einem XML benutzt wird. |
| xmlns:xlin | xlink, in Rosetta-METS aber tatsächlich mit ```xlin``` verwendet, erlaubt die Verwendung von Links in einem XML-Dokument. In [METS2](https://mets.github.io/) wird auf die Verwendung von xlink allerdings verzichtet, siehe https://mets.github.io/METS2_whitepaper.html. Dies könnte auch zukünftige Releases von Rosetta betreffen. |
| xmlns:dnx | Bindet den Rosetta-spezifischen DNX-Namensraum ein, der speziell für administrative Metadaten da ist und technische Informationen, genauso wie Zugangs- und allgemeine Rechte fasst und u.a. die Richtlinien von [PREMIS (Preservation Metadata: Implementation Strategies)](https://www.loc.gov/standards/premis/) umsetzt. |

<br/>

---

<br/>

```xml
<mets:mets xmlns:mets="http://www.exlibrisgroup.com/xsd/dps/rosettaMets"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.exlibrisgroup.com/xsd/dps/rosettaMets
https://developers.exlibrisgroup.com/wp-content/uploads/2022/06/mets_rosetta.xsd"
xmlns:dc="http://purl.org/dc/elements/1.1"
xmlns:dcterms="http://purl.org/dc/terms/"
xmlns:sch="http://purl.oclc.org/dsdl/schematron" 
xmlns:xlin="http://www.w3.org/1999/xlink"
xmlns:dnx='http://www.exlibrisgroup.com/dps/dnx'>
    [...]
</mets:mets>
```

<br/>

---

<br/>


## 4. Intellektuelle Einheit: Beschreibende und rechtliche Metadaten


```Intellectual Entity: Descriptive and Rights Metadata```

<br/>

**Deutsch:**

Die „Descriptive Metadata“-Sektion (*Beschreibende Metadaten-Sektion*), auf der Ebene einer intellektuellen Einheit, enthält die beschreibenden und rechtlichen Metadaten eines [Projekts](/documentation/data-model/graph-model#Projekt) und den mit ihn verbundenen [Ereignissen](/documentation/data-model/graph-model#Events). Um diese Informationen jedoch über XML in das ExLibris Rosetta-System übertragen zu können, sind einige weitere Wrapper erforderlich, um zu kommunizieren, in welcher Form und in welchem Format die Inhalte übertragen werden. Als erstes folgt die Angabe der Sektion selber. Dabei muss die ```ID``` der ```mets:dmdSec``` immer ```ie-dmd``` lauten. Die folgend beschreibenden Metadaten müssen, darüber hinaus, stets im Metadatenstandard [Dublin Core](https://www.dublincore.org/specifications/dublin-core/) erfasst werden. Dies muss sich in der folgenden Metadaten-Wrapper widerspiegeln, weswegen der Metadatentyp immer ```DC``` lauten muss. Das Format der Dublin-Core-Repräsentation ist XML, weshalb als Nächstes ein ```mets:xmlData```-Wrap folgt, um diesen Umstand explizit zu machen. Das Element ```dc:record``` leitet sich direkt aus der [offiziellen Dokumentation von Rosetta](https://files.mtstatic.com/site_11811/151860/0?Expires=1755262016&Signature=fDQwPVF8Ghk3~KaWELEeU3j4BZxbRaNIIQR9fJ1yskYmYAa8i8ShgKp8AnT1Ko5rEqgF2WeIALGCVvpAsZjRJ7HXkd1DJh9hOE3MncVOspWKdqKmVwCuzcb6khlqoYab6M5DgPe-WI4Hec3VpeUXeqfbH56jXOTbCaLEHmOX7tI_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA) ab sowie den [offiziellen Metadatenbeispielen](https://github.com/ExLibrisGroup/Rosetta.dps-sdk-projects/blob/master/current/dps-sdk-projects/dps-sdk-deposit/data/depositExamples/DepositExample1/content/ie1.xml), ist jedoch nicht im Dublin Core-Standard definiert. Stattdessen scheint es direkt aus der internen Arbeit der Library of Congress, als Teil ihres [Search- and Retrieval-Systems](https://www.loc.gov/standards/sru/recordSchemas/dc-schema.html), abgeleitet zu sein. Dennoch wurde in der Umsetzung der offiziellen Dokumentation gefolgt und, durch Tests mit dem hbz die, die zusätzliche XSI-Schema-Definition als notwendig bewertet.

<br/>

---

<br/>

**English:**

The descriptive metadata section, on a itellectual entity level, holds the descriptive and rights metadata information of a [Project](/documentation/data-model/graph-model#Project) and its connected [Events](/documentation/data-model/graph-model#Events). But to ingest those information via xml to the ExLibris Rosetta system, some further wrappers are needed, to communicate in what type and in which form the content will be transmitted. First, the section itself is specified. The ```ID``` of the ```mets:dmdSec``` must always be ```ie-dmd```.  In addition, the following descriptive metadata must always be recorded in the metadata standard [Dublin Core](https://www.dublincore.org/specifications/dublin-core/). This must be reflected in the following metadata wrap, where the metadata type therefore must always be ```DC```. The format of the Dublin Core representation is XML, why an ```mets:xmlData``` wrap comes next, to make this circumstance explicit. The ```dc:record``` element is derived directly from [Rosetta's official documentation](https://files.mtstatic.com/site_11811/151860/0?Expires=1755262016&Signature=fDQwPVF8Ghk3~KaWELEeU3j4BZxbRaNIIQR9fJ1yskYmYAa8i8ShgKp8AnT1Ko5rEqgF2WeIALGCVvpAsZjRJ7HXkd1DJh9hOE3MncVOspWKdqKmVwCuzcb6khlqoYab6M5DgPe-WI4Hec3VpeUXeqfbH56jXOTbCaLEHmOX7tI_&Key-Pair-Id=APKAJ5Y6AV4GI7A555NA) and its [official metadata examples](https://github.com/ExLibrisGroup/Rosetta.dps-sdk-projects/blob/master/current/dps-sdk-projects/dps-sdk-deposit/data/depositExamples/DepositExample1/content/ie1.xml), but is not itself defined in the Dublin Core standard. Instead, it seems to be direved from the inner work of the Library of Congress directly, as part of their [search and retrieval system](https://www.loc.gov/standards/sru/recordSchemas/dc-schema.html). Nevertheless, the official documentation was followed during implementation, and tests conducted with the *hbz* showed that the additional XSI schema definition was necessary.

<br/>

---

<br/>

```xml
<mets:dmdSec ID="ie-dmd">
    <mets:mdWrap MDTYPE="DC">
        <mets:xmlData>
            <dc:record xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
               [...]
            </dc:record>
        </mets:xmlData>
    </mets:mdWrap>
</mets:dmdSec>
```

<br/>

---

<br/>

**Deutsch:**

Die folgenden Felder aus dem arkumu.nrw-Datenmodell sollten in der unten angegebenen Reihenfolge erscheinen. Für dieses grundlegende Metadatenformat wurde so weit wie möglich mit den grundlegenden Dublin-Core-Elementen gearbeitet, anstatt großumfänglich das „Dublin Core Terms“-Vokabular zu nutzen. Das Fehlen von Attributen ist ebenfalls völlig beabsichtigt, da diese beim Einlesen der Metadaten in Rosetta Probleme verursacht haben. Zum besseren Verständnis der Daten, wird die ursprüngliche Version mit Attributen über den „Source Metadata Wrap“ (```mets:SourceMS```) im Abschnitt der [administrativen Metadaten der Intellektuellen Einheit”](#6-itellectual-entity-administrative-and-rights-metadata) übertragen.

<br/>

---

<br/>

**English:**

The following fields from the arkumu.nrw Data Model should appear in the order specified below. For this basic metadata format, as much as possible was done with elementary Dublin Core elements, rather than using the Dublin Core Terms vocabulary extensively. The lack of attributes is also completely intentional, as they caused problems when ingesting the metadata into Rosetta. For better understanding of the data, the original version with attributes is transferred via the Source Metadata Wrap (```mets:SourceMS``` ) in the [Administrative Metadata Section of the Intellectual Entity](#6-itellectual-entity-administrative-and-rights-metadata).

<br/>

---

<br/>

**arkumu ID \| arkumu-ID**

Min-Max Occurence: 1

```xml
<dc:identifier>Project.arkumu ID</a></dc:identifier>
```

<br/>

---

<br/>

**Right Status \| Rechtsstatus**

Min-Max Occurence: 1

```xml
<dc:rights>Project.Rights Status</dc:rights>
<dc:rights>EnglishTranslation</dc:rights>
<dc:rights>German Disclaimer</dc:rights>
<dc:rights>English Disclaimer</dc:rights>
```
<br/>

**Automatically addded elements \| Automatisch hinzugefügte Elemente**

The English translation of the Rights Status has to be added. As well as the following disclaimers in German and English\
Die englische Übersetzung des Rechtsstatus muss hinzugefügt werden. Ebenso wie die folgenden Hinweise in deutscher und englischer Sprache.

If the Rights Status is "Free of German Urheberrecht and Leistungsschutzrecht protection"("Urheberrechts- und leistungsschutzrechts-frei"), the following disclaimers have to be set:\
Wenn der Rechtsstatus „Urheberrechts- und leistungsschutzrechts-frei“ lautet, müssen die folgenden Hinweise gesetzt werden:

<br/>

```
Das Projekt/Werk ist frei nach dem deutschen Urheberrecht und Leistungsschutzrecht. 
Dennoch können einige Digitale Objekte, referenziert über Ereignisse, immer noch dem 
urheberrechtlichen, leistungsschutzrechlitchen oder verwertungsrechtlichen Schutz
unterliegen. Überprüfen Sie daher bitte alle verknüpften Ereignisse sorgfältig, bevor 
Sie die bereitgestellten Medien weiterverwenden.
```

<br/>

```
The Project/Work is free under German Urheberrecht and Leistungsschutzrecht. However,
some digital objects, referenced via events, may still be subject to German Urheberrecht,
German Leistungsschutzrecht or exploitation rights protection. Therefore, please 
check all linked events thoroughly before further use of the media provided.
```

<br/>

---

<br/>

If the Rights Status is "Protected by German Urhebrrecht and/or Leistungsschutzrecht ("Urheberrechtlich und/oder leistungsschutzrechtlich geschützt"), the following disclaimers have to be set:\
Wenn der Rechtsstatus „Urheberrechtlich und/oder leistungsschutzrechtlich geschützt“ lautet, müssen die folgenden Hinweise gesetzt werden:

<br/>

```
Das Projekt/Werk ist durch das deutsche Urheberrecht und/oder Leistungsschutzrecht geschützt. 
Einige Digitale Objekte können auch noch durch Verwertungsrechte geschützt sein. Überprüfen Sie 
daher bitte alle verknüpften Ereignisse sorgfältig, bevor Sie die bereitgestellten Medien 
weiterverwenden.
```

<br/>

```
The Project/Work is protected by German Urheberrecht and/or Leistungsschutzrecht.
Some digital objects may also be protected by exploitation rights. Therefore, please 
check all linked events thoroughly before further use of the media provided.
```

<br/>

---

<br/>


**Preferred Title \| Bevorzugter Titel**

Min-Max Occurence: 1

```xml
<dc:title>Project.Preferred Title</dc:title>
```

<br/>

---

<br/>

**Preferred Subitle \| Bevorzugter Untertitel**

Min-Max Occurence: 0-1

```xml
<dc:title>Project.Preferred Subtitle</dc:title>
```

<br/>

---

<br/>

**Project Types \| Projektarten**

Related Entity Class: [Project Type](/documentation/data-model/graph-model#project-type)<br/>
Min-Max Occurence: 1-n

```xml
<dc:type>Project Type.German Name(1)</dc:type>
<dc:type>Project Type.English Name(1)</dc:type>
<dc:type>Project Type.Wikidata ID(1)</dc:type>
```

<br/>

---

<br/>

**Project Categories \| Projektkategorien**

Related Entity Class: [Project Category](/documentation/data-model/graph-model#project-category)<br/>
Min-Max Occurence: 1-n<br/>
Note: This is an entry from a taxonomy. If a Project Category has a connection via [has broader project category](/documentation/data-model/graph-model#has-broader-project-category) to another one, the broader category is set under the previous. Further, if there are several Project Categories stemming from the same broader one, only unique values should be set.

```xml
<dc:subject>Project Category.German Name(1)</dc:subject>
<dc:subject>Project Category.English Name(1)</dc:subject>
<dc:subject>Project Category.German Synonym(0-n)</dc:subject>
<dc:subject>Project Category.English Synonym(0-n)</dc:subject>
<dc:subject>Project Category.Wikidata ID(1)</dc:subject>
<dc:subject>Project Category.GND ID(0-1)</dc:subject>
<dc:subject>Project Category.AAT ID(0-1)</dc:subject>
<dc:subject>Project Category.filmportal.de Category ID(0-1)</dc:subject>
```

<br/>

---

<br/>

**Keywords \| Schlagwörter**

Related Entity Class: [Keyword](/documentation/data-model/graph-model#keyword)<br/>
Min-Max Occurence: 0-n<br/>

```xml
<dc:subject>Keyword.German Wikidata Label(1)</dc:subject>
<dc:subject>Keyword.English Wikidata Label(1)</dc:subject>
<dc:subject>Keyword.German Wikidata Synonym(0-n)</dc:subject>
<dc:subject>Keyword.English Wikidata Synonym(0-n)</dc:subject>
<dc:subject>Keyword.Wikidata ID(1)</dc:subject>
```

<br/>

---

<br/>

**Project Description \| Projektbeschreibung**

Related Entity Class: [Project Description](/documentation/data-model/graph-model#project-category)<br/>
Min-Max Occurence: 0-n

```xml
<dc:description>Project Description.Description Text(1)</dc:description>
```

<br/>

---

<br/>

**Events \| Ereignisse**

Related Entity Class: [Event](/documentation/data-model/graph-model#event)<br/>
Min-Max Occurence: 0-n<br/>

```xml
<dc:title>Event.German Name(1)</dc:title>
<dc:title>Event.English Name(0-1)</dc:title>
<dc:type>Event Type.German Name(1)</dc:type>
<dc:type>Event Type.English Name(1)</dc:type>
<dc:type>Event Type.German Synonym(0-n)</dc:type>
<dc:type>Event Type.English Synonym(0-n)</dc:type>
<dc:type>Event Type.Wikidata ID(1)</dc:type>
<dc:type>Event Type.GND ID(0-1)</dc:type>
<dc:type>Event Type.AAT ID(0-1)</dc:type>
<dc:type>Event Type.LIDO Terminology ID(0-1)</dc:type>
<dc:date>Event.Event Begin(1; if none given, the technical is taken)</dc:date>
<dc:date>Event Begin.Estimation(1; true or false)</dc:date>
<dc:date>Event.Event End(1; if none given, the technical is taken)</dc:date>
<dc:date>Event End.Estimation(1; true or false)</dc:date>
<dc:contributor>Event.Actor(0-n)</dc:contributor>
<dc:type>ist/is Urheber:in(1 if Urheber:in)</dc:type>
<dc:rights>https://www.gesetze-im-internet.de/urhg/(1 if Urheber:in)</dc:rights>
<dc:rights>https://www.gesetze-im-internet.de/englisch_urhg/(1 if Urheber:in)</dc:rights>
<dc:type>ist/is Leistungsschutzinhaber:in(1 if Leistungsschutzinhaber:in)</dc:type>
<dc:rights>https://www.gesetze-im-internet.de/urhg/BJNR012730965.html#BJNR012730965BJNG001501377(1 if Leistungsschutzinhaber:in)</dc:rights>
<dc:rights>https://www.gesetze-im-internet.de/englisch_urhg/englisch_urhg.html#p0646(1 if Leistungsschutzinhaber:in)</dc:rights>
```

<br/>

---

<br/>

## 5. Dateien: Beschreibende und rechtliche Metadaten

```Files: Descriptive and Rights Metadata```

<br/>

**Deutsch:**

Für jede übertragene Datei wird auch jeweils ein ein Abschnitt mit beschreibenden Metadaten für das Digitale Objekt angelegt. Dieser Abschnitt hat im Wesentlichen die gleiche Wrapper-Struktur wie der Abschnitt der [beschreibenden Metadaten der Intellektuellen Einheit](#4-itellectual-entity-descriptive-and-rights-metadata), jedoch wird die ```ID``` mit einem Indikator für die Datei, der in der Rosetta-Dokumentation mit ```FL``` spezifiziert ist, und einer eindeutigen Kennung für die Datei erstellt. Dies kann z. B. eine fortlaufende Nummer innerhalb des Dokuments sein, sodass Datei-IDs als ```FL1```, ```FL2``` usw. erscheinen könnten. In der Grails-Version des Exporters wurde die interne Datei-ID verwendet. Nichtsdestotrotz ist die neue UUID der Datei Teil der mitgelieferten Dublin-Core-Metadaten, genauso wie die [Digitales Objekt-Lizenz](), die diesem bestimmten Digitalen Objekt zugewiesen wurde. Davor werden einige, für die Aufbewahrung wichtige Typen und die [Signifikanten Eigenschaften (Deutsch)](/documentation/data-model/graph-model# signifikante-eigenschaften-deutsch) und die [Signifikanten Eigenschaften (Englisch)](/documentation/data-model/graph-model#significant-properties-english) gesetzt – letztere, wenn sie vorhanden sind. Genau wie bei der Intellektuellen Einheit wurden alle Attribute absichtlich ausgelassen, und eine mit Attributen versehene Version wird als Quellmetadaten zum entsprechenden administrativen Metadatenabschnitt hinzugefügt.

<br/>

---

<br/>

**English:**

For each file that is submitted, a descriptive metadata section is also added for the Digital Object. This section has basically the same wrapper structure as the [Descriptive Metadata Section of the Intellectual Entity](#4-itellectual-entity-descriptive-and-rights-metadata), but the ```ID``` is contructed with an indicator for the file, specified by the Rosetta Documentation with ```FL```, and a unique identifier for the file. This can be a counted up number inside the document, so file IDs would appear as ```FL1```, ```FL2```, and so on. In the Grails version of the exporter, the internal File ID was used. Nevertheless, the new UUID of the file is part of the provided Dublin Core metadata, as well as the [Digital Object License]() that was assigned to this particular Digital Objekt. Before that, some Types, important for preservation, and the [German Significant Properties](/documentation/data-model/graph-model#significant-properties-german), and [English Significant Properties](/documentation/data-model/graph-model#significant-properties-english) are set – the later if they are prevalent. Just as for the Intellectual Entity, all attributes are left out intentionally, and a attributed version is added as source metadata to the according administrative section. 

<br/>

---

<br/>

```xml
<mets:dmdSec ID="FL[...]-dmd">
    <mets:mdWrap MDTYPE="DC">
        <mets:xmlData>
            <dc:record xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
               [...]
            </dc:record>
        </mets:xmlData>
    </mets:mdWrap>
</mets:dmdSec>
```

<br/>

---

<br/>

```xml
<mets:dmdSec ID="FL[...]-dmd">
    <mets:mdWrap MDTYPE="DC">
        <mets:xmlData>
            <dc:record xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <dc:identifier>Digital Object.UUID</dc:identifier>(1)
                <dc:title>Digital Object.File Name</dc:title>(1)
		<dc:type>Digital Object.Genesis Type</dc:type>(1)
		<dc:type>Digital Object.Media Type</dc:type>(1)
		<dc:type>Digital Object.MIME Type</dc:type>(1)
		<dc:description>Digital Object.Significant Properties (German)</dc:description>(0-1)
		<dc:description>Digital Object.Significant Properties (English)</dc:description>(0-1)
		<dcterms:license>Digital Object.Digital Object Licence.German Name</dcterms:license>(1)
		<dcterms:license>Digital Object.Digital Object Licence.English Name</dcterms:license>(1)
		<dcterms:license>Digital Object.Digital Object Licence.URI</dcterms:license>(1)
            </dc:record>
        </mets:xmlData>
    </mets:mdWrap>
</mets:dmdSec>
```

<br/>

---

<br/>

## 6. Intellektuelle Einheit: Administrative und rechtliche Metadaten

```Intellectual Entity: Administrative and Rights Metadata```

 Der Rechte- und technische Metadaten-Wrap werden nicht mehr verwendet, da sie mit der Rosetta-Spezifikation interferieren und zu Fehlern führen würden. Der Quell-Metadaten-Wrap kann weiterhin verwendet werden. | The rights and technical metatada wrap are not used anymore, since they interfere with the Rosetta specification and would lead to errors. The source metadata wrap can still be used. |

**Deutsch:**

Die administrative Sektion der Intellektuellen Einheit (```mets:amdSec ID="ie-amd"``` ) besteht aus drei Einheiten. Dem technischen Metadaten-Wrap (```mets:techMD ID="ie-amd-tech```), einem Rechts-Metadaten-Wrap(```mets:techMD ID="ie-amd-rights```) und mindestens einem Quell-Metadaten-Wrap (```mets:sourceMD```) für Dublin Core, gekennzeichnet durch die ```ID="ie-amd-source-dc"```. Dieser Wrap ist genau wie der entsprechende Abschnitt für die beschreibende Metadaten strukturiert und enthält zudem auch denselben Inhalt, jedoch mit zusätzlichen Attributen. In der vorherigen Grails-Version wurde diese, mit Attributen versehene Version, als Standard von arkumu.nrw angesehen und wird daher hier als Quellformat behandelt. Zusätzlich kann dieser administrative Abschnitt alle Metadaten-Exportformate enthalten, die arkumu.nrw bereitstellt, beispielsweise die [LIDO](https://cidoc.mini.icom.museum/working-groups/lido/lido-overview/about-lido/what-is-lido/)-Repräsentanz der Daten eines Projekts.

<br/>

---

<br/>

**English:**

The administrative Section of the Intellectual Entity (```mets:amdSec ID="ie-amd"```) consists of three parts. The Technical Metadata Wrap (```mets:techMD ID="ie-amd-tech```), an Rights Metadata Wrap (```mets:techMD ID="ie-amd-rights```), and minimally of a Source Metadata Wrap (```mets:sourceMD```) for Dublin Core, indicated by the ```ID="ie-amd-source-dc"```. This wrap is exactly structured as the according Descriptive Metadata Section, and contains also the same content, but with added Attributes. In the previous Grails version, this attributed version was seen as the standard arkumu.nrw representation and is therefore treated here as a source format. But additionally, this administrative Section can hold all metadata export formats, arkumu.nrw provides, for example the [LIDO](https://cidoc.mini.icom.museum/working-groups/lido/lido-overview/about-lido/what-is-lido/) representation of a Project's data.

<br/>

---

<br/>

```xml
<mets:amdSec ID="ie-amd">
    <mets:techMD ID="ie-amd-tech">(1)
        [...]
    </mets:techMD>
    <mets:rightsMD ID="ie-amd-rights">(1)
        [...]
    </mets:rightsMD>
    <mets:sourceMD ID="ie-amd-source-dc">(1)
        <mets:mdWrap MDTYPE="DC">
            <mets:xmlData>
                <dc:record xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                    [...]
                </dc:record>
            </mets:xmlData>
        </mets:mdWrap>
    </mets:sourceMD>
    <mets:sourceMD ID="ie-amd-source-lido">(example)
        <mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="LIDO">
            <mets:xmlData>
                <lido:lido>
                    [...]
                <lido:lido>
            </mets:xmlData>
        </mets:mdWrap>
    </mets:sourceMD>
</mets:amdSec>
```

<br/>

---

<br/>

**Deutsch:**

Der technische Metadaten-Wrap verwendet das Rosetta-eigene DNX-Metadatenformat. Um dies zum Ausdruck zu bringen, muss der Metadatentyp des folgenden Metadaten-Wraps immer ```OTHER``` und der ```OTHERMDTYPE``` immer „dnx“ sein. DNX wird auch in XML wiedergegeben. Am Anfang eines DNX-Abschnitts muss das entsprechende ```dnx``` -Element gesetzt werden, wobei der Link immer erforderlich ist. DNX sind in verschiedenen ```section```s organisiert, die entweder auf eine Intellektuelle Einheit, eine Repräsentation oder eine Datei anwendbar sind. Ein Abschnitt kann einen oder mehrere gleiche ```record```s enthalten, wenn letztere wiederholbar sind. Ein „Record” kann einen oder mehrere ```key```s enthalten, alles dem [Rosetta DNX-Profil](https://knowledge.exlibrisgroup.com/Rosetta/Product_Documentation/Rosetta_AIP_Data_Model/04_Rosetta_DNX_Profile) entsprechend. Für diese bestimmte ```section``` ist das ```id```-Attribut immer ```objectCharacteristics``` und der ```objectType``` immer ```INTELLECTUAL_ENTITY```.

<br/>

---

<br/>

**English:**

The Technical Metadata Wrap uses Rosetta's own DNX metadata format. To express this, the following metadata wrap's Metadata Type must be always be ```OTHER``` and the ```OTHERMDTYPE``` always "dnx". DNX is also represented in XML. At the beginning of a DNX section, the according ```dnx``` element must be set, with the link always being necessary. DNX matedata is organized in different ```section```s, that are either applyable to an Intellectual Entity, a Representation, or a File. One can hold one or more of the same ```record```, the later if it is repeatable. A "record" can hold one or more ```key```s, all according to the [Rosetta DNX Profile](https://knowledge.exlibrisgroup.com/Rosetta/Product_Documentation/Rosetta_AIP_Data_Model/04_Rosetta_DNX_Profile). For this particular ```section```, the ```id``` attribute is always ```objectCharacteristics``` and the ```objectType``` always ```INTELLECTUAL_ENTITY```.

<br/>

---

<br/>

```xml
<mets:techMD ID="ie-amd-tech">
    <mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="dnx">
        <mets:xmlData>
            <dnx xmlns="http://www.exlibrisgroup.com/dps/dnx">
               <section id="objectCharacteristics">
                    <record>
                        <key id="objectType">INTELLECTUAL_ENTITY</key>
                    </record>
                </section>
            </dnx>
        </mets:xmlData>
    </mets:mdWrap>
</mets:techMD>
```

<br/>

---

<br/>

**Deutsch:**

Der Abschnitt zu den Rechte-Metadaten zeigt den [Rechtstatus] des Projekts an (/documentation/data-model/graph-model#rights-status). Die ```section``` ist immer mit ```linkingRightsStatementIdentifier``` gekennzeichnet, um die Verknüpfung zu einem externen Rechtsdokument außerhalb von Rosetta vorzubereiten. Bei Projekten, die durch das deutsche Urheberrecht und Leistungsschutzrecht geschützt sind, verweisen die ```records```s auf den deutschen und englischen Gesetzestext des UrhG, bei freien Projekten können sie auf die [Kein Urheberrechtsschutz - Andere rechtliche Beschränkungen](https://rightsstatements.org/page/NoC-OKLR/1.0/?language=de)-Erklärung von [Rights Statements](https://rightsstatements.org/) zeigen. Der ```linkingRightsStatementIdentifier``` ist immer ```URI```, das ```linkingRightsStatementIdentifierValue``` enthält den tatsächlichen Link.

<br/>

---

<br/>

**English:**

The Rights Metadata Section displays the Project's [Right Status](/documentation/data-model/graph-model#rights-status). The ```section``` is always marked with```linkingRightsStatementIdentifier```, for preparing the linking to an external rights document outside of Rosetta. For Projects protected by German Urheberrecht und Leistungsschutzrecht, the ```record```s point to the German and English legal text of the "UrhG", and for free Projects, they could point to the [No Copyright - Other Known Legal Restrictions](https://rightsstatements.org/page/NoC-OKLR/1.0/?language=en) statement by [Rights Statements](https://rightsstatements.org/). The ```linkingRightsStatementIdentifier``` is always ```URI```, the ```linkingRightsStatementIdentifierValue``` contains the actual link.

<br/>

---

<br/>

```xml
<mets:rightsMD ID="ie-amd-rights">(1; for Projects protected by German Urheberrecht or Leistungsschutzrecht)
    <mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="dnx">
        <mets:xmlData>
            <dnx xmlns="http://www.exlibrisgroup.com/dps/dnx">
                <section id="linkingRightsStatementIdentifier">
                    <record>
                        <key id="linkingRightsStatementIdentifier">URI</key>
                        <key id="linkingRightsStatementIdentifierValue">https://www.gesetze-im-internet.de/urhg/</key>
                    </record>
                    <record>
                        <key id="linkingRightsStatementIdentifier">URI</key>
                        <key id="linkingRightsStatementIdentifierValue">https://www.gesetze-im-internet.de/englisch_urhg/</key>
                    </record>
                </section>
            </dnx>
        </mets:xmlData>
    </mets:mdWrap>
</mets:rightsMD>

<mets:rightsMD ID="ie-amd-rights">(1; for Projects deemed free by German Urheberrecht or Leistungsschutzrecht; example)
    <mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="dnx">
        <mets:xmlData>
            <dnx xmlns="http://www.exlibrisgroup.com/dps/dnx">
                <section id="linkingRightsStatementIdentifier">
                    <record>
                        <key id="linkingRightsStatementIdentifier">URI</key>
                        <key id="linkingRightsStatementIdentifierValue">[https://www.gesetze-im-internet.de/urhg/](http://rightsstatements.org/vocab/NoC-OKLR/1.0/)</key>
                    </record>
                </section>
            </dnx>
        </mets:xmlData>
    </mets:mdWrap>
</mets:rightsMD>
```

<br/>

---

<br/>

**Deutsch:**

In der Quell-Metadaten-Sektion werden als Attribute in der Regel die URI-Kennungen der Entitäts- und Feld-Klassen der [Graphenmodell-Umsetzung des Datenmodells](/documentation/data-model/graph-model) verwendet. Bei Bedarf erweitert durch eine Sprachauszeichnung nach ISO 639-2(B). Eine dezidierte Ausnahme bilden Felder die (Normdaten-)Links enthalten, die alle durchgängig mit ```xml:type="dcterms:URI"``` ausgezeichnet sind. Dies hat vor allem technische Gründe, sodass sie im Grunde als Trenner zwischen verschiedenen Einträgen einer Klasse fungieren, z.B. zwischen zwei Schlagworten oder Projektkategorien. So wurde in der Grails-Version die Trennung für eine mögliche XSD-Konvertierung erleichtert. Freilich könnten aber auch andere Benennungen gefunden werden, die den selben Zweck erfüllen, z.B. stets zuerst die Benennung der Entitäs-Klasse, dann die Feld-Klasse.

<br/>

---

<br/>

**English:**

In the Source Metadata Section, the URI identifiers of the Entity and Field Classes of the [Graph Model Implementation of the Data Model](/documentation/data-model/graph-model) are generally used as attributes. If necessary, this is extended by a language tag in accordance with ISO 639-2(B). A notable exception are the fields containing (authority file) links, which are all consistently marked with ```xml:type="dcterms:URI"```. This is primarily for technical reasons, so that they essentially function as separators between different entries in a Class, e.g. between two Keywords or Project Categories. In the Grails version, this made it easier to separate them for a possible XSD conversion. Of course, other names could also be found that serve the same purpose, e.g. always using the Entity Class first, then the Field Class, for the naming.

<br/>

---

<br/>


**arkumu ID \| arkumu-ID**

Min-Max Occurence: 1

```xml
<dc:identifier xml:type="arkumu-ID">Project.arkumu ID</dc:identifier>
```

<br/>

---

<br/>

**Right Status \| Rechtsstatus**

Min-Max Occurence: 1

```xml
<dc:rights xml:type="rights-status" xml:lang="ger">Project.Rights Status</dc:rights>
<dc:rights xml:type="rights-status" xml:lang="eng">EnglishTranslation</dc:rights>
<dc:rights xml:type="german-rights-disclaimer" xml:lang="ger">German Disclaimer</dc:rights>
<dc:rights xml:type="english-rights-disclaimer" xml:lang="eng">English Disclaimer</dc:rights>
```

<br/>

---

<br/>


**Preferred Title \| Bevorzugter Titel**

Min-Max Occurence: 1

```xml
<dc:title xml:type="preferred-title" xml:lang="Preferred Title.Language.ISO 639-2(B) Code">Project.Preferred Title</dc:title>
```

<br/>

---

<br/>

**Preferred Subitle \| Bevorzugter Untertitel**

Min-Max Occurence: 0-1

```xml
<dc:title xml:type="preferred-subtitle" xml:lang="Preferred Subtitle.Language.ISO 639-2(B) Code">Project.Preferred Subtitle</dc:title>
```

<br/>

---

<br/>

**Project Types \| Projektarten**

Related Entity Class: [Project Type](/documentation/data-model/graph-model#project-type)<br/>
Min-Max Occurence: 1-n

```xml
<dc:type xml:type="project-type" xml:lang="ger">Project Type.German Name(1)</dc:type>
<dc:type xml:type="project-type" xml:lang="eng">Project Type.English Name(1)</dc:type>
<dc:type xml:type="dcterms:URI">Project Type.Wikidata ID(1)</dc:type>
```

<br/>

---

<br/>

**Project Categories \| Projektkategorien**

Related Entity Class: [Project Category](/documentation/data-model/graph-model#project-category)<br/>
Min-Max Occurence: 1-n<br/>
Note: This is an entry from a taxonomy. If a Project Category has a connection via [has broader project category](/documentation/data-model/graph-model#has-broader-project-category) to another one, the broader category is set under the previous. Further, if there are several Project Categories stemming from the same broader one, only unique values should be set.

```xml
<dc:subject xml:type="project-category" xml:lang="ger">Project Category.German Name(1)</dc:subject>
<dc:subject xml:type="project-category" xml:lang="ger">Project Category.English Name(1)</dc:subject>
<dc:subject xml:type="project-category-german-synonym" xml:lang="ger">Project Category.German Synonym(0-n)</dc:subject>
<dc:subject xml:type="project-category-english-synonym" xml:lang="eng">Project Category.English Synonym(0-n)</dc:subject>
<dc:subject xml:type="dcterms:URI">Project Category.Wikidata ID(1)</dc:subject>
<dc:subject xml:type="dcterms:URI">Project Category.GND ID(0-1)</dc:subject>
<dc:subject xml:type="dcterms:URI">Project Category.AAT ID(0-1)</dc:subject>
<dc:subject xml:type="dcterms:URI">Project Category.filmportal.de Category ID(0-1)</dc:subject>
```

<br/>

---

<br/>

**Keywords \| Schlagwörter**

Related Entity Class: [Keyword](/documentation/data-model/graph-model#keyword)<br/>
Min-Max Occurence: 0-n<br/>

```xml
<dc:subject xml:type="keyword-wikidata-label" xml:lang="ger">Keyword.German Wikidata Label(1)</dc:subject>
<dc:subject xml:type="keyword-wikidata-label" xml:lang="eng">Keyword.English Wikidata Label(1)</dc:subject>
<dc:subject xml:type="keyword-wikidata-synonym" xml:lang="ger">Keyword.German Wikidata Synonym(0-n)</dc:subject>
<dc:subject xml:type="keyword-wikidata-synonym" xml:lang="eng">Keyword.English Wikidata Synonym(0-n)</dc:subject>
<dc:subject xml:type="dcterms:URI">Keyword.Wikidata ID(1)</dc:subject>
```

<br/>

---

<br/>

**Project Description \| Projektbeschreibung**

Related Entity Class: [Project Description](/documentation/data-model/graph-model#project-category)<br/>
Min-Max Occurence: 0-n

```xml
<dc:description xml:type="project-description" xml:lang="Project Description.Language.ISO 639-2(B) Code">Project Description.Description Text(1)</dc:description>
```

<br/>

---

<br/>

**Events \| Ereignisse**

Related Entity Class: [Event](/documentation/data-model/graph-model#event)<br/>
Min-Max Occurence: 0-n<br/>

```xml
<dc:title xml:type="event-name" xml:lang="ger">Event.German Name(1)</dc:title>
<dc:title xml:type="event-name" xml:lang="eng">Event.English Name(0-1)</dc:title>
<dc:type xml:type="event-type" xml:lang="ger">Event Type.German Name(1)</dc:type>
<dc:type xml:type"event-type" xml:lang="eng">Event Type.English Name(1)</dc:type>
<dc:type xml:type"event-type-synonym" xml:lang="ger">Event Type.German Synonym(0-n)</dc:type>
<dc:type xml:type"event-type-synonym" xml:lang="eng">Event Type.English Synonym(0-n)</dc:type>
<dc:type xml:type"dcterms:URI">Event Type.Wikidata ID(1)</dc:type>
<dc:type xml:type"dcterms:URI">Event Type.GND ID(0-1)</dc:type>
<dc:type xml:type"dcterms:URI">Event Type.AAT ID(0-1)</dc:type>
<dc:type xml:type"dcterms:URI">Event Type.LIDO Terminology ID(0-1)</dc:type>
<dc:date xml:type="event-begin">Event.Event Begin(1; if none given, the technical is taken)</dc:date>
<dc:date xml:type="event-begin-estimated">Event Begin.Estimation(1; true or false)</dc:date>
<dc:date xml:type="event-end">Event.Event End(1; if none given, the technical is taken)</dc:date>
<dc:date xml:type="event-end-estimated">Event End.Estimation(1; true or false)</dc:date>
<dc:contributor xml:type="actor">Event.Actor(0-n)</dc:contributor>
<dc:type xml:type="actor-rights-type">ist/is Urheber:in(1 if Urheber:in)</dc:type>
<dc:rights xml:type="dcterms:URI">https://www.gesetze-im-internet.de/urhg/(1 if Urheber:in)</dc:rights>
<dc:rights xml:type="dcterms:URI">https://www.gesetze-im-internet.de/englisch_urhg/(1 if Urheber:in)</dc:rights>
<dc:type xml:type="actor-rights-type">ist/is Leistungsschutzinhaber:in(1 if Leistungsschutzinhaber:in)</dc:type>
<dc:rights xml:type="dcterms:URI" >https://www.gesetze-im-internet.de/urhg/BJNR012730965.html#BJNR012730965BJNG001501377(1 if Leistungsschutzinhaber:in)</dc:rights>
<dc:rights xml:type="dcterms:URI">https://www.gesetze-im-internet.de/englisch_urhg/englisch_urhg.html#p0646(1 if Leistungsschutzinhaber:in)</dc:rights>
```

<br/>

---

<br/>

## 7. Representation: Administrative Metadaten

```Representation: Administrative Metadata```

| Das Element kann vollständig weggelassen werden, wenn nur ein Preservation Master übermittelt wird. Weitere Tests müssen zeigen, wie sich die gemeinsame Übermittlung eines Preservation Master und eines Modified Master verhält. | The element can be completely left out if only a Preservation Master is submitted. Further testing must show how the submission of a Preservation and a Modified Master behaves |

**Deutsch:**

Die administrative Repräsentations-Sektion, hat eine besondere Vermittlungsposition innerhlab der Rosetta-METS-Struktur. Sie vermitteln Rosetta, in welcher Erhaltungsform das Projekt, repräsentiert durch die Dateien der Ereignisse, die in unten auftauchenden [Datei-Sektion](#9-file-section) verwaltet werden, überhaupt übermittelt wird. Die ```ID``` der Repräsentation bildet sich aus "REP" + einer hochzählenden Zahl, die die Anzahl der Repräsentation angibt: ```REP1```, ```REP2```, usw. Der einzige DNX-Key,der  die im dazugehörigen ```generalRepCharacteristics```-„tech wrap“ verwendet wird, wird mit ```representationType``` angegeben. Dabei kann es maximal eine Repräsentation geben, die als ```PRESERVATION_MASTER``` ausgezeichnet ist, diese ist Pflicht, auch wenn keine Daten übertragen werden. Zudem maximal eine, die als ```MODIFIED_MASTER``` ausgezeichnet ist, und beliebig viele, die als ```DERIVATIVE_COPY``` ausgezeichnet sind. Das deckt sich mit den Erhaltungstypen, die im [Digitalen Objekt](/data-model/graph-model#digital-object) verwendet werden. Gleich auffällig wird dadurch allerdings eine Beschränkung: Da Rosetta nur eine „Preservation Master“- und eine „Modified Master“-Sektion haben kann, bedeuted dies, dass, selbt wenn verschiedene „Preservation Master“- oder „Modified Master“-Dateien durch ihre Ereignisse separiert sind, so tauchen sie doch als eine gemeinsame administrative Repräsentation in Rosetta auf, und werden entsprechend auch so in der [Datei-Sektion](#9-file-section) behandelt. Es muss allerdings unbedingt darauf hingewiesen werden, dass dies nur eine technische Notwendigkeit ist. Weder ist davon die eigentlich übertragene Ordnerstruktur betroffen, noch werden die Dateien einfach zusammengefasst angezeigt, sondern sauber nach Ereignissen getrennt, geregelt über die unten stehende [Structural Map](#10-structural-map). Letztere kann frei angepasst werden, wenn die Darstellung angepasst werden muss.

<br/>

---

<br/>

**English:**

The administrative Representation Section has a special mediating position within the Rosetta METS structure. It communicates Rosetta in which preservation form the project, represented by the files in the Events, managed in the [file section](#9-file-section) below, is actually transmitted.  The ```ID``` of the representation is formed from "REP" + an incrementing number that indicates the number of the representation: ```REP1```, ```REP2```, etc. The only DNX key used in the corresponding ```generalRepCharacteristics``` tech wrap is specified with ```representationType``` . There can be a maximum of one representation marked as ```PRESERVATION_MASTER``` , which is mandatory – even if no data is transferred. In addition, there can be a maximum of one representation that is designated as ```MODIFIED_MASTER```, and any number that are designated as ```DERIVATIVE_COPY```. This corresponds to the Preservation Types used in the [Digital Object](/data-model/graph-model#digital-object). However, this also highlights a limitation: Since Rosetta can only have one "Preservation Master" and one "Modified Master" section, this means that even if different "Preservation Master" or "Modified Master" files are separated by their Events, they still appear as a collective administrative representation in Rosetta, and are treated accordingly in the [file section](#9-file-section). However, it is important to note that this is only a technical necessity. Neither the actual folder structure that is transferred is affected, nor are the files simply displayed together, but rather properly separated by Events, regulated by the [Structural Map](#10-structural-map) below. The latter can be freely adjusted if the display needs to be customised.

<br/>

---

<br/>

```xml
<mets:amdSec ID="REP1-amd">(1)
    <mets:techMD ID="REP1-amd-tech">
        <mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="dnx">
            <mets:xmlData>
                <dnx xmlns="http://www.exlibrisgroup.com/dps/dnx">
                    <section id="generalRepCharacteristics">
                        <record>
                            <key id="representationType">PRESERVATION_MASTER</key>
                        </record>
                    </section>
                </dnx>
            </mets:xmlData>
        </mets:mdWrap>
    </mets:techMD>
</mets:amdSec>
<mets:amdSec ID="REP2-amd">(0-1)
    <mets:techMD ID="REP2-amd-tech">
        <mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="dnx">
            <mets:xmlData>
                <dnx xmlns="http://www.exlibrisgroup.com/dps/dnx">
                    <section id="generalRepCharacteristics">
                        <record>
                            <key id="representationType">MODIFIED_MASTER</key>
                        </record>
                    </section>
                </dnx>
            </mets:xmlData>
        </mets:mdWrap>
    </mets:techMD>
</mets:amdSec>
<mets:amdSec ID="REP3-amd">(0-n; example)
    <mets:techMD ID="REP3-amd-tech">
        <mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="dnx">
            <mets:xmlData>
                <dnx xmlns="http://www.exlibrisgroup.com/dps/dnx">
                    <section id="generalRepCharacteristics">
                        <record>
                            <key id="representationType">DERIVATIVE_COPY</key>
                        </record>
                    </section>
                </dnx>
            </mets:xmlData>
        </mets:mdWrap>
    </mets:techMD>
</mets:amdSec>
<mets:amdSec ID="REP4-amd">(example)
    <mets:techMD ID="REP4-amd-tech">
        <mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="dnx">
            <mets:xmlData>
                <dnx xmlns="http://www.exlibrisgroup.com/dps/dnx">
                    <section id="representationType">
                        <record>
                            <key id="objectType">DERIVATIVE_COPY</key>
                        </record>
                    </section>
                </dnx>
            </mets:xmlData>
        </mets:mdWrap>
    </mets:techMD>
</mets:amdSec>
```

<br/>

---

<br/>

## 8. Dateien: Administrative und rechtliche Metadaten

```Files: Administrative and Rights Metadata```


| Der Rechte- und technische Metadaten-Wrap werden nicht mehr verwendet, da sie mit der Rosetta-Spezifikation interferieren und zu Fehlern führen würden. Der Quell-Metadaten-Wrap kann weiterhin verwendet werden. | The rights and technical metatada wrap are not used anymore, since they interfere with the Rosetta specification and would lead to errors. The source metadata wrap can still be used. |

<br/>


---

<br/>

**Deutsch:**

Der administrative Abschnitt für die Dateien ist ähnlich strukturiert wie der [administrative Abschnitt für die Intellektuelle Einheit](#6-itellectual-entity-administrative-and-rights-metadata) und umfasst stets je einen Abschnitt für technische Metadaten, Rechte und Quellenmetadaten. Für jede übertragene Datei sollte es immer eine entsprechende Sektion für administrative Metadaten geben. Der ```objectType```, in den technischen Metadaten, muss ```FILE``` sein, und über die ```generalFileCharacteristics``` wird der [Dateiname](/documentation/data-model/graph-model#file-name) übertragen. Der ```linkingRightsStatementIdentifierValue``` muss immer die [URI](/documentation/data-model/graph-model#uri) der [Digitales Objekt-Lizenz]() sein, die dem Objekt beigefügt ist. Für die Quell-Metadaten gelten dieselben Regeln wie für die Intellektuelle Einheit.

<br/>

---

<br/>

**English:**

The Administrative Section for the Files is similarly structured as the [Administrative Section for the Intellectual Entity](#6-itellectual-entity-administrative-and-rights-metadata), and always includes a section for technical metadata, rights and source metadata. There should be always one Administrative Metadata Section for each file transmitted. The ```objectType``` in the technical metadata must be ```FILE```, and via the ```generalFileCharacteristics``` the [File Name](/documentation/data-model/graph-model#file-name) is transmitted. The ```linkingRightsStatementIdentifierValue``` must always be the [URI](/documentation/data-model/graph-model#uri) of the [Digital Object Licence]() attached to the Object. For the source metadata, the same rules apply as the the Itellectual Object as well.

<br/>

---

<br/>

```xml
<mets:amdSec ID='FL[...]-amd'>
    <mets:techMD ID="FL[...]-amd-tech">(1)
        [...]
    </mets:techMD>
    <mets:rightsMD ID="FL[...]-amd-rights">(1)
        [...]
    </mets:rightsMD>
    <mets:sourceMD ID="FL[...]-amd-source-dc">(1)
        <mets:mdWrap MDTYPE="DC">
            <mets:xmlData>
                <dc:record xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                    [...]
                </dc:record>
            </mets:xmlData>
        </mets:mdWrap>
    </mets:sourceMD>
</mets:amdSec>
```

<br/>

---

<br/>

```xml
<mets:techMD ID="FL[...]-amd-tech">
    <mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="dnx">
        <mets:xmlData>
            <dnx xmlns="http://www.exlibrisgroup.com/dps/dnx">
                <section id="objectCharacteristics">
                    <record>
                        <key id="objectType">FILE</key>
                    </record>
                </section>
                <section id="generalFileCharacteristics">
                    <record>
                        <key id="label">Digital Object.File Name</key>
                    </record>
                </section>
            </dnx>
        </mets:xmlData>
    </mets:mdWrap>
</mets:techMD>
```

<br/>

---

<br/>

```xml
<mets:rightsMD ID="FL[...]-amd-rights">
    <mets:mdWrap MDTYPE="OTHER" OTHERMDTYPE="dnx">
        <mets:xmlData>
            <dnx xmlns="http://www.exlibrisgroup.com/dps/dnx">
                <section id="linkingRightsStatementIdentifier">
                    <record>
                        <key id="linkingRightsStatementIdentifier">URI</key>
                        <key id="linkingRightsStatementIdentifierValue">Digital Object.Digital Object Licence.URI</key>
                    </record>
                </section>
            </dnx>
        </mets:xmlData>
    </mets:mdWrap>
</mets:rightsMD>
```

<br/>

---

<br/>

```xml
<mets:sourceMD ID="FL[...]-amd-source-dc">
    <mets:mdWrap MDTYPE="DC">
        <mets:xmlData>
            <dc:record xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
                <dc:identifier xml:type="Digital-Object-ID">Digital Object.UUID</dc:identifier>
                <dc:title xml:type="file-name">Digital Object.File Name</dc:title>
		<dc:type xml:type="genesis-type">Digital Object.Genesis Type</dc:type>
		<dc:type xml:type="media-type">Digital Object.Media Type</dc:type>
		<dc:type xml:type="mimetype">Digital Object.MIME Type</dc:type>
		<dc:description xml:type="significant-properties-german">Digital Object.Significant Properties (German)</dc:description>(0-1)
		<dc:description xml:type="significant-properties-english" >Digital Object.Significant Properties (English)</dc:description>(0-1)
		<dcterms:license xml:lang="ger">Digital Object.Digital Object Licence.German Name</dcterms:license>
		<dcterms:license xml:lang="eng">Digital Object.Digital Object Licence.English Name</dcterms:license>
		<dcterms:license xml:type="dcterms:URI">Digital Object.Digital Object Licence.URI</dcterms:license>
            </dc:record>
        </mets:xmlData>
    </mets:mdWrap>
</mets:SourceMD>
```

<br/>

---

<br/>

## 9. Datei-Sektion

```File Section```

| Wenn für die Dateien keine administrativen Metadatenabschnitte erstellt werden, dürfen sie nicht referenziert werden. Andernfalls würde die Validierung fehlschlagen. | If no administrative metadata sections are created for the files, they must not be referenced. Otherwise the validation would fail. | 

**Deutsch:**

Die File Section (```mets:fileSec```) enthält den Pfad zu den eigentlichen Mediendateien des METS-Pakets, die sich im oben genannten Ordner ```streams``` befinden. Dieser Pfad werden durch das „File Location“-Element (```mets:FLocat```) angegeben. Obwohl ein relativer Dateipfad, ausgehend vom ```streams```-Ordner, der als Rootverzeichnis fungiert, angegeben werden muss, muss der Library of Congress Type (```LOCTYPE```) dennoch immer ```URL``` sein. Der relative Pfad selbst wird im Argument ```xlin:href``` angegeben. In [METS2](https://mets.github.io/) wird xlink jedoch nicht mehr verwendet und stattdessen wird ein eigenes Library of Congress-Element namens ```LOCREF``` verwendet, das möglicherweise in neuere Versionen von Rosetta Einzug erhalten wird. Jedes „File Location“-Element wird durch ein ```mets:file```-Element umschlossen, das diese bestimmte Datei mit den entsprechenden Abschnitten für ihre administrativen und deskriptiven Metadaten (```DMDID``` & ```AMDID```) verknüpft. Es enthält auch die ID der Datei selbst, definiert als „FL”, gefolgt vom tatsächlichen Identifikator selbst. In der Grials-Version des METS-Exporters wurde auch ein ```MIMETYPE``` angegeben, aber laut der aktuellen offiziellen Rosetta-Dokumentation wird dieses Argument nicht mehr verwendet. Stattdessen wurde der Mimetype zum Abschnitt der jeweils beschreibenden Datei-Metadaten hinzugefügt. Das Attribut ```USE``` muss immer auf ```VIEW``` gesetzt sein. Auch wenn METS hier vielfältigere Werte zulässt, arbeitet Rosetta nur mit diesem einen.

<br/>

---

<br/>

**English:**

The file section (```mets:fileSec```) contains the path to the actual media files of the METS package, which are placed in the aforementioned ```streams``` folder. This path is specified in the File Location element (```mets:FLocat```). Although a relative file path from the ```streams```-folder, as the root, needs to be put here, the Library of Congress Type (```LOCTYPE```) must still always be ```URL```. The relative path itself is written into the ```xlin:href``` argument. In [METS2](https://mets.github.io/) though, xlink is deprecated and istead an own Library of Congress element called ```LOCREF``` is used, which will maybe find its way into newer versions of Rosetta. Each File Location element is wrapped into a ```mets:file``` element, which links this specific file to its corresponding Administravive and Descriptive Metadata sections (```DMDID``` & ```AMDID```). It also contains the ID of the file itself, defined as "FL", with the actual identificator following. In the Grials version of the METS Exporter, also a ```MIMETYPE``` was precified, but according to the official current Rosetta Documentation, this argument is not in use anymore. Instead, the mimetype was added to the descriptive metadata section of the files. The ‘File Group’ defines the actual representation of the files in Rosetta. The ```ID```, e.g. ```REP1```, points to the existing, associated administrative metadata section ```REP1-amd```. The attribute ```USE``` must be always set to ```VIEW```, even though METS allows for more  diverse values here, Rosetta only recognizes this single one.

<br/>

---

<br/>

```xml
<mets:fileSec>
    <mets:fileGrp USE="VIEW" ID="REP1" AMDID="REP1-amd">
        <mets:file ID="FL1" ADMID="FL1-amd" DMDID="FL1-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="picture.bmp" />
        </mets:file>
    </mets:fileGrp>
    <mets:fileGrp USE="VIEW" ID="REP2" AMDID="REP2-amd>
        <mets:file ID="FL2" ADMID="FL2-amd" DMDID="FL2-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="picture.tiff" />
        </mets:file>
    </mets:fileGrp>
    <mets:fileGrp ID="REP3" AMDID="REP3-amd>
        <mets:file ID="FL3" ADMID="FL3-amd" DMDID="FL3-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="picture.jpeg" />
        </mets:file>
    </mets:fileGrp>
    <mets:fileGrp USE="VIEW" ID="REP4" AMDID="REP4-amd>
        <mets:file ID="FL4" ADMID="FL4-amd" DMDID="FL4-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="picture.webp" />
        </mets:file>
    </mets:fileGrp>
</mets:fileSec>
```

<br/>

---

<br/>

```xml
<mets:fileSec>
    <mets:fileGrp USE="VIEW" ID="REP1" AMDID="REP1-amd">
        <mets:file ID="FL118" ADMID="FL118-amd" DMDID="FL118-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-3lvwbg.jpg" />
        </mets:file>
        <mets:file ID="FL119" ADMID="FL119-amd" DMDID="FL119-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-53byxz.jpg" />
        </mets:file>
        <mets:file ID="FL120" ADMID="FL120-amd" DMDID="FL120-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-7bh9e8.jpg" />
        </mets:file>
        <mets:file ID="FL121" ADMID="FL121-amd" DMDID="FL121-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-aoj7rv.jpg" />
        </mets:file>
        <mets:file ID="FL122" ADMID="FL122-amd" DMDID="FL122-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-bwbjow.jpg" />
        </mets:file>
        <mets:file ID="FL123" ADMID="FL123-amd" DMDID="FL123-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-feature-image-1.0x260.jpg" />
        </mets:file>
        <mets:file ID="FL124" ADMID="FL124-amd" DMDID="FL124-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-feature-image-1.jpg" />
        </mets:file>
        <mets:file ID="FL125" ADMID="FL125-amd" DMDID="FL125-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-feature-image.260x0.jpg" />
        </mets:file>
        <mets:file ID="FL126" ADMID="FL126-amd" DMDID="FL126-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-ftf3g0.jpg" />
        </mets:file>
        <mets:file ID="FL127" ADMID="FL127-amd" DMDID="FL127-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-gq7ri9.jpg" />
        </mets:file>
        <mets:file ID="FL128" ADMID="FL128-amd" DMDID="FL128-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-ijrfax.jpg" />
        </mets:file>
        <mets:file ID="FL129" ADMID="FL129-amd" DMDID="FL129-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-jsvj0h.jpg" />
        </mets:file>
        <mets:file ID="FL130" ADMID="FL130-amd" DMDID="FL130-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-m4v6gj.jpg" />
        </mets:file>
        <mets:file ID="FL131" ADMID="FL131-amd" DMDID="FL131-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-ntwpmh.jpg" />
        </mets:file>
        <mets:file ID="FL132" ADMID="FL132-amd" DMDID="FL132-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-t0gmce.jpg" />
        </mets:file>
        <mets:file ID="FL133" ADMID="FL133-amd" DMDID="FL133-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-vvqrjr.jpg" />
        </mets:file>
        <mets:file ID="FL134" ADMID="FL134-amd" DMDID="FL134-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-w6ltcg.jpg" />
        </mets:file>
        <mets:file ID="FL135" ADMID="FL135-amd" DMDID="FL135-dmd">
            <mets:FLocat xmlns:xlin="http://www.w3.org/1999/xlink" LOCTYPE="URL" xlin:href="folkwang-industrial-design-the_unemployed_heinzen-xnku0y.jpg" />
        </mets:file>
    </mets:fileGrp>
</mets:fileSec>
```

<br/>

---

<br/>

## 10. Structual Map

<br/>

**Deutsch:**

Die Structural Map (```mets:structMap```) definiert, wie die übertragenen Dateien in Rosetta angezeigt werden sollen. Dies ist vor allem bedeutsam, da hier sowohl die übermittelte Ordner- und Dateistruktur als auch der Ereignis-Aufbau des arkumu.nrw-Datenmodells wieder entsprechend wiedergegeben werden kann, auch wenn durch die [Repräsentations-](#7-representation-administrative-metadata) und [Datei-Sektion](#9-file-section), die Dateien technisch-notwendig zusammenhängend bearbeitet werden. Pro „Preservation Master“ und „Modified Master“ gibt es nur eine strukturelle Repräsentation, auch wenn Rosetta theoretisch mehrere erlaubt. Selbiges gilt für alle „Derivate-Copy“-Repräsentationen, wo es pro Derivat-Kopie-Paket nur eine Repräsentation gibt. Die ```ID``` setzt sich daher zusammen aus der ID der referenzierten [Representationssektion](#7-representation-administrative-metadata) und stets einer „1“, die disen Umstand ausdrückt. Der ```TYPE``` ist dabei immer ```LOGICAL```. Da hauptsählich Dateistrukturen abgebildet werden, wäre auch der Typ „PHYSICAL“ denkbar, da „LOGICAL“ eigentlich für solche Fälle gedacht ist, in dem besipielsweise eine PDF gleich mehrere Buchkapitel enthält, oder ein Buchkapitel auf mehrere PDFs aufgeteit ist. Da aber in der unten aufgeführten Struktur auf die Ereignisse des Datenmodells verwiesen wird, gleichfalls aber die Rosetta-interne Sortierung nach Erhaltungstypen in gleicherweise gewahrt werden soll, und diese die rein physische Wiedergabe der Ordnerstruktur ergänzt, sollte dies durch ```LOGICAL``` ausdrückt werden. Durch ```mets:div``` kann aber nicht nur die logische und die physische Ordnerstruktur ausgedrückt werden, sondern drückt ebenso aus, wohin einer der vorhandenen Dateien platziert werden soll. Die entsprechenden ```mets:div``` müssen mit ```TYPE="FILE"``` ausgezeichnet werden. In ihnen befindet sich dann der eigentliche „File Pointer“ (```mets:fptr```), der mit seiner ```FILEID``` auf eine Datei der entsprechenden Repräsenatation in der [Datei-Sektion](#9-file-section) verweist. Der logische Aufbau folgt dabei, im armukumu.nrw-Sinn: Zuerst wird der Bevorzugte Titel des Projekts angeben, danach der Erhaltungstyp, der den Rosetta-Erhaltungstypen entspricht, danach der Deutsche Name des entsprechenden Ereignisses, und letztlich die dazugehörigen Dateien und bei Bedarf die originale Ordnerstruktur vorgelagert. Eine Struktur für den „Preservation Master“ ist Plicht, auch ohne verknüpfte Digitale Objekte.

<br/>

---

<br/>

**English:**

The Structural Map (```mets:structMap```) defines how the transferred files are to be displayed in Rosetta. This is particularly important because it allows both the transmitted folder and file structure, as well as the event structure of the arkumu.nrw data model to be reproduced accordingly, even if the files are, due to the form of the [Administrative Representation](#7-representation-administrative-metadata) and [File Section](#9-file-section), processed in a certain technically necessary manner. There is only one structural representation per "Preservation Master" and "Modified Master", even though Rosetta theoretically allows more. The same applies to all "Derivative Copy" representations, where there is only one representation per "Derivative Copy" package. The ```ID``` therefore consists of the ID of the referenced Representation Section and always a "1", which expresses this circumstance. The ```TYPE``` is always set to ```LOGICAL```. Since mainly file structures are mapped, the type "PHYSICAL" would also be conceivable, as "LOGICAL" is predominantly intended for cases where, for example, a PDF contains several book chapters, or a book chapter is split across several PDFs. However, since the structure listed below refers to the Events of the data model, and, at the same time, maintains Rosetta's internal sorting by preservation types, which supplements the purely physical reproduction of the folder structure, this should be expressed by ```LOGICAL``` . However, ```mets:div``` can be used not only for expressing the logical and physical folder structure, but also to state where one of the existing files should be placed. The corresponding ```mets:div``` must be marked with ```TYPE=‘FILE’``` . They then contain the actual File Pointer (```mets:fptr```), which refers with its ```FILEID``` to a file of the corresponding representation in the [File Section](#9-file-section). The logical structure follows, in the armukumu.nrw sense: First, the Preferred Title of the project is given, followed by the Preservation Type, which corresponds to the Rosetta preservation types, then the German Name of the corresponding Event, and finally the associated files and, if necessary, the original folder structure. A Structural Map for the "Preservation Master" is mandatory, even without attached Digital Objects.

<br/>

---

<br/>

```xml
<mets:structMap ID="REP1-1" TYPE="LOGICAL">(1 for Preservation Master)
    <mets:div LABEL="Project.Preferred Title">(1)
        <mets:div LABEL="Event.German Name">[1-n]
            <mets:div LABEL="Preservation Master">(1)
                <mets:div LABEL="[folder name]">[0-n; displaying the folder structure if prevalent]
                    <mets:div LABEL="Event.Digital Object.File Name" TYPE="FILE">[1-n]
                        <mets:fptr FILEID="FL[...]">
                        </mets:fptr>
                    </mets:div>
                </mets:div>
            </mets:div>
        </mets:div>
    </mets:div>
</mets:structMap>
```

<br/>

---

<br/>

```xml
<mets:structMap ID="REP1-1" TYPE="LOGICAL">
    <mets:div LABEL="Oculus">
        <mets:div LABEL="Preservation Master">
            <mets:div LABEL="Herstellung von Oculus">
                <mets:div LABEL="folkwang-industrial-design-oculus-8oxqsi.jpg" TYPE="FILE">
                    <mets:fptr FILEID="FL1" />
                </mets:div>
                <mets:div LABEL="folkwang-industrial-design-oculus-jm2esu.jpg" TYPE="FILE">
                    <mets:fptr FILEID="FL2" />
                </mets:div>
            </mets:div>
            <mets:div LABEL="Herstellung von Oculus Fotodokumentation">
                <mets:div LABEL="folkwang-industrial-design-oculus-1.jpg" TYPE="FILE">
                    <mets:fptr FILEID="FL3" />
                </mets:div>
                <mets:div LABEL="folkwang-industrial-design-oculus-nn8fpe.jpg" TYPE="FILE">
                    <mets:fptr FILEID="FL4" />
                </mets:div>
                <mets:div LABEL="folkwang-industrial-design-oculus.jpg" TYPE="FILE">
                    <mets:fptr FILEID="FL5" />
                </mets:div>
            </mets:div>
        </mets:div>
    </mets:div>
</mets:structMap>
```

<br/>

---

<br/>


```xml
<mets:structMap ID="REP1-1" TYPE="LOGICAL">
    <mets:div LABEL="Sample DCP">
        <mets:div LABEL="Preservation Master">
            <mets:div LABEL="Herstellung von Sample DCP">
                <mets:div LABEL="CTT2Pop51_TST-1-48cd_C_EN-en_US-15_51_2K_CTT_20160518_SMPTE_OV">
                    <mets:div LABEL="CTT2Pop51_TST-1-48cd_C_EN-en_US-15_51_2K_CTT_20160518_SMPTE_OV">
                         <mets:div LABEL="ASSETMAP.xml" TYPE="FILE">
                             <mets:fptr FILEID="FL8" />
                         </mets:div>
                         <mets:div LABEL="cpl_a5528d87-c9bb-4b7d-be22-decdbe256de0.xml" TYPE="FILE">
                             <mets:fptr FILEID="FL9" />
                         </mets:div>
                         <mets:div LABEL="j2c_524f436d-f21e-472c-9bf1-18905e105daa.mxf" TYPE="FILE">
                             <mets:fptr FILEID="FL10" />
                         </mets:div>
                         <mets:div LABEL="pcm_73870429-d82a-4dfc-a6c6-237ddcc25205.mxf" TYPE="FILE">
                             <mets:fptr FILEID="FL11" />
                         </mets:div>
                         <mets:div LABEL="pkl_779b768b-8cf3-42c0-bfe2-e56a62e6b43c.xml" TYPE="FILE">
                             <mets:fptr FILEID="FL12" />
                         </mets:div>
                         <mets:div LABEL="VOLINDEX.xml" TYPE="FILE">
                             <mets:fptr FILEID="FL13" />
                         </mets:div>
                    </mets:div>
                </mets:div>
            </mets:div>
        </mets:div>
    </mets:div>
</mets:structMap>
```