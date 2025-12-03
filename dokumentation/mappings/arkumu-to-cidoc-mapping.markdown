---
layout: arkumu-docs
title: arkumu zu CIDOC mapping
order: 3.4.1
permalink: /documentation/mappings/arkumu-to-cidoc-mapping
---

```arkumu to CIDOC mapping```

<br/>

---

This document provides a mapping of arkumu.nrw’s entities and fields within the ontological framework of [CIDOC CRM](https://cidoc-crm.org/). The primary aim is to preserve the conceptual integrity of the initial arkumu.nrw model while transitioning to the semantically richer structure offered by CIDOC.

For this purpose, it follows the [Official CIDOC CRM Documentation](https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html), and its [Functional Units](https://cidoc-crm.org/functional-units). It is important to notice, though, that some entities and properties mentioned in those units were removed or their numbers were changed in the newer version of CIDOC. arkumu.nrw is using [Version 7.1.3 of CIDOC CRM](https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html). But since [Version 7.3 of CIDOC CRM](https://cidoc-crm.org/sites/default/files/cidoc_crm_version_7.3.pdf) is already published, while still being in draft status, this mapping also takes it in consideration, since arkumu.nrw should also be compatible with that newer version. This is also true for [CRM Dig Version 4.0](https://cidoc-crm.org/sites/default/files/CRMdigv4.0.pdf). This mapping is currently using [CRM Dig Version 3.2.1](https://cidoc-crm.org/sites/default/files/CRMdig_v3.2.1.pdf).

Key resources are also the [Mapping LIDO v0.7 to CIDOC-CRM v5.0.1](https://cidoc-crm.org/Resources/the-lido-model), and [A mapping between LIDO v1.0 and CIDOC-CRM v6.0.](https://rdamsc.bath.ac.uk/msc/c33), since [LIDO](https://cidoc.mini.icom.museum/working-groups/lido/lido-overview/about-lido/what-is-lido/) was used as the central metadata standard arkumu.nrw was designed after.

This mapping also takes notice of the [Linked Art Model](https://linked.art/model/), its [Class Recommendations](https://linked.art/model/profile/class_analysis/#useful-classes), as well as their [Example Mapping of the Categories for the Description of Works of Art (CDWA) by Getty](https://linked.art/cookbook/mappings/cdwa/), and [their own schema](https://linked.art/cookbook/mappings/schema/).

**Notes:**

Values in square brackets are subproperties according to the [Table of Properties of Properties (.1 Properties)](https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html#tableOfPropertiesOfProperties). For source fields that can only be expressed with two necessary tied together CRM Properties and Entities, a "⇒" is used. An example would be the use of [**E67** Birth](http://cidoc-crm.org/cidoc-crm/7.1.3/E67_Birth) as a neccesary entitiy to connect a **Birthplace** and a **Date of Birth** to an [Actor](#actor). Also, as a general rule, this mapping does not show the reverse properties of properties, which are marked with an "i" in the official documentation, like [**P127i** has narrower term](http://www.cidoc-crm.org/cidoc-crm/P127i_has_narrower_term). They are only implied by normal brackets after the mentioned property. This corresponds how they are handled in the [Classes & Properties Declarations of CIDOC-CRM](https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html). It can be the case, though, that a reverse property will still appear in this mapping. This happens when a key functionality of arkumu.nrw can be better expressed with that particular reverse property in a CIDOC compliant way. That is, for example, the case in [**Event**](#event), where the connection to **Digital Object(s)** can be described more concrete with [**P67i** is referred to by (refers to)](http://cidoc-crm.org/cidoc-crm/7.1.3/P67_refers_to), rather than [**Digital Object**](#digital-object) holding this important property in this mapping. As a tutorial, for the exertion of basic concepts, the [CIDOC CRM as a Language Level A1](https://cidoc-crm.org/Resources/cidoc-crm-as-a-language-level-a1) presentation by [George Bruseker](https://independent.academia.edu/GeorgeBruseker) was used. For architectural decisions the [(CIDOC-CRM): PRIMER](https://cidoc-crm.org//sites/default/files/CRMPrimer_v1.1_1.pdf) by [Dominic Oldman](https://scholar.google.co.uk/citations?user=BtZUHlsAAAAJ&hl=en) and CRM Labs, and edited by [Professor Donna Kurtz](https://www.classics.ox.ac.uk/people/professor-donna-kurtz), was consulted. A mapping from another institution can be seen at [DOPHEDA (Données Patrimoniales Heritage Data)](https://chin-rcip.github.io/collections-model/en).

**The following CRM Entities are used in this mapping:**

[**D1** Digital Object (CRMDig Extension)](https://cidoc-crm.org/sites/default/files/CRMdig_v3.2.1.pdf), [**E3** Condition State](http://cidoc-crm.org/cidoc-crm/7.1.3/E3_Condition_State), [**E7** Activity](http://cidoc-crm.org/cidoc-crm/7.1.3/E7_Activity), [**E19** Physical Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E19_Physical_Object), [**E21** Person](http://cidoc-crm.org/cidoc-crm/7.1.3/E21_Person), [**E22** Human-Made Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E22_Human-Made_Object), [**E30** Right](http://cidoc-crm.org/cidoc-crm/7.1.3/E30_Right), [**E35** Title](http://cidoc-crm.org/cidoc-crm/7.1.3/E35_Title), [**E39** Actor](http://cidoc-crm.org/cidoc-crm/7.1.3/E39_Actor), [**E41** Appellation](http://cidoc-crm.org/cidoc-crm/7.1.3/E41_Appellation), [**E42** Identifier](http://cidoc-crm.org/cidoc-crm/7.1.3/E42_Identifier), [**E52** Time-Span](http://cidoc-crm.org/cidoc-crm/7.1.3/E52_Time-Span), [**E54** Dimension](http://cidoc-crm.org/cidoc-crm/7.1.3/E54_Dimension), [**E55** Type](http://cidoc-crm.org/cidoc-crm/7.1.3/E55_Type), [**E56** Language](http://cidoc-crm.org/cidoc-crm/7.1.3/E56_Language), [**E57** Material](http://cidoc-crm.org/cidoc-crm/7.1.3/E57_Material), [**E62** String](http://cidoc-crm.org/cidoc-crm/7.1.3/E62_String), [**E66** Formation](http://cidoc-crm.org/cidoc-crm/7.1.3/E66_Formation), [**E67** Birth](http://cidoc-crm.org/cidoc-crm/7.1.3/E67_Birth), [**E68** Dissolution](http://cidoc-crm.org/cidoc-crm/7.1.3/E68_Dissolution), [**E69** Death](http://cidoc-crm.org/cidoc-crm/7.1.3/E69_Death), [**E70** Thing](http://cidoc-crm.org/cidoc-crm/7.1.3/E70_Thing), [**E73** Information Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E73_Information_Object), [**E74** Group](http://cidoc-crm.org/cidoc-crm/7.1.3/E74_Group), [**E94** Space Primitive](http://cidoc-crm.org/cidoc-crm/7.1.3/E94_Space_Primitive).

**The following CRM Properties are used in this mapping:**

* [**P1** is identified by (identifies)](http://cidoc-crm.org/cidoc-crm/7.1.3/P1_is_identified_by) ⇒ [**E41** Appellation](http://cidoc-crm.org/cidoc-crm/7.1.3/E41_Appellation), [**E42** Identifier](http://cidoc-crm.org/cidoc-crm/7.1.3/E42_Identifier)
* [**P2** has type (is type of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P2_has_type) ⇒ [**E55** Type](http://cidoc-crm.org/cidoc-crm/7.1.3/E55_Type)
* [**P3** has note](http://cidoc-crm.org/cidoc-crm/7.1.3/P3_has_note) ⇒ [**E62** String](http://cidoc-crm.org/cidoc-crm/7.1.3/E62_String)
* [**P4** has time-span (is time-span of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P4_has_time-span) ⇒ [**E52** Time-Span](http://cidoc-crm.org/cidoc-crm/7.1.3/E52_Time-Span)
* [**P7** took place at (witnessed)](http://cidoc-crm.org/cidoc-crm/7.1.3/P7_took_place_at) ⇒ [**E53** Place](http://cidoc-crm.org/cidoc-crm/7.1.3/E53_Place)
* [**P12** occurred in the presence of (was present at)](http://cidoc-crm.org/cidoc-crm/7.1.3/P12_occurred_in_the_presence_of) ⇒ [**E19** Physical Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E19_Physical_Object)
* [**P14** carried out by (performed)](http://cidoc-crm.org/cidoc-crm/7.1.3/P14_carried_out_by) ⇒ [**E39** Actor](http://cidoc-crm.org/cidoc-crm/7.1.3/E39_Actor), [**E21** Person](http://cidoc-crm.org/cidoc-crm/7.1.3/E21_Person), [**E74** Group](http://cidoc-crm.org/cidoc-crm/7.1.3/E74_Group)
* [**P14.1** in the role of](https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html#tableOfPropertiesOfProperties) ⇒ [**E55** Type](http://cidoc-crm.org/cidoc-crm/7.1.3/E55_Type)
* [**P16** used specific object (was used for)](http://cidoc-crm.org/cidoc-crm/7.1.3/P16_used_specific_object) ⇒ [**E70** Thing](http://cidoc-crm.org/cidoc-crm/7.1.3/E70_Thing)
* [**P43** has dimension (is dimension of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P43_has_dimension) ⇒ [**E54** Dimension](http://cidoc-crm.org/cidoc-crm/7.1.3/E54_Dimension)
* [**P44** has condition (is condition of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P44_has_condition) ⇒ [**E3** Condition State](http://cidoc-crm.org/cidoc-crm/7.1.3/E55_Type)
* [**P45** consists of (is incorporated in)](http://cidoc-crm.org/cidoc-crm/7.1.3/P45_consists_of) ⇒ [**E57** Material](http://cidoc-crm.org/cidoc-crm/7.1.3/E57_Material)
* [**P48** has preferred identifier (is preferred identifier of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P48_has_preferred_identifier) ⇒ [**E42** Identifier](http://cidoc-crm.org/cidoc-crm/7.1.3/E42_Identifier)
* [**P50** has current keeper (is current keeper of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P50_has_current_keeper) ⇒ [**E39** Actor](http://cidoc-crm.org/cidoc-crm/7.1.3/E39_Actor), [**E21** Person](http://cidoc-crm.org/cidoc-crm/7.1.3/E21_Person), [**E74** Group](http://cidoc-crm.org/cidoc-crm/7.1.3/E74_Group)
* [**P52** has current owner (is current owner of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P52_has_current_owner) ⇒ [**E39** Actor](http://cidoc-crm.org/cidoc-crm/7.1.3/E39_Actor), [**E21** Person](http://cidoc-crm.org/cidoc-crm/7.1.3/E21_Person), [**E74** Group](http://cidoc-crm.org/cidoc-crm/7.1.3/E74_Group)
* [**P67** refers to (is referred to by)](http://cidoc-crm.org/cidoc-crm/7.1.3/P67_refers_to) ⇒ [**E39** Actor](http://cidoc-crm.org/cidoc-crm/7.1.3/E39_Actor), [**E73** Information Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E73_Information_Object), [**E74** Group](http://cidoc-crm.org/cidoc-crm/7.1.3/E74_Group)
* [**P67i** is referred to by](http://www.cidoc-crm.org/cidoc-crm/P67i_is_referred_to_by) ⇒ [**D1** Digital Object (CRMDig Extension)](https://cidoc-crm.org/sites/default/files/CRMdig_v3.2.1.pdf)
* [**P72** has language (is language of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P72_has_language) ⇒ [**E56** Language](http://cidoc-crm.org/cidoc-crm/7.1.3/E56_Language)
* [**P76** has contact point (provides access to)](http://cidoc-crm.org/cidoc-crm/7.1.3/P76_has_contact_point) ⇒ [**E41** Appellation](http://cidoc-crm.org/cidoc-crm/7.1.3/E41_Appellation)
* [**P89** falls within (contains)](http://cidoc-crm.org/cidoc-crm/7.1.3/P89_falls_within) ⇒ [**E53** Place](http://cidoc-crm.org/cidoc-crm/7.1.3/E53_Place)
* [**P98** brought into life (was born)](http://cidoc-crm.org/cidoc-crm/7.1.3/P98_brought_into_life) ⇒ [**E21** Person](http://cidoc-crm.org/cidoc-crm/7.1.3/E21_Person)
* [**P100** was death of (died in) ](http://cidoc-crm.org/cidoc-crm/7.1.3/P100_was_death_of)⇒ [**E21** Person](http://cidoc-crm.org/cidoc-crm/7.1.3/E21_Person)
* [**P102** has Title (is Title of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P102_has_title) ⇒ [**E35** Title](http://cidoc-crm.org/cidoc-crm/7.1.3/E35_Title)
* [**P104** is subject to (applies to)](http://cidoc-crm.org/cidoc-crm/7.1.3/P104_is_subject_to) ⇒ [**E30** Right](http://cidoc-crm.org/cidoc-crm/7.1.3/E30_Right)
* [**P105** right held by (has right on)](http://cidoc-crm.org/cidoc-crm/7.1.3/P105_right_held_by) ⇒ [**E39** Actor](http://cidoc-crm.org/cidoc-crm/7.1.3/E39_Actor), [**E21** Person](http://cidoc-crm.org/cidoc-crm/7.1.3/E21_Person), [**E74** Group](http://cidoc-crm.org/cidoc-crm/7.1.3/E74_Group)
* [**P127** has broader term (has narrower term)](http://cidoc-crm.org/cidoc-crm/7.1.3/P127_has_broader_term) ⇒ [**E55** Type](http://cidoc-crm.org/cidoc-crm/7.1.3/E55_Type)
* [**P139** has alternative form (is alternative form of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P139_has_alternative_form) ⇒ [**E41** Appellation](http://cidoc-crm.org/cidoc-crm/7.1.3/E41_Appellation)
* [**P168** place is defined by (defines place)](http://cidoc-crm.org/cidoc-crm/7.1.3/P168_place_is_defined_by) ⇒ [**E94** Space Primitive](http://cidoc-crm.org/cidoc-crm/7.1.3/E94_Space_Primitive)

<br/>
<br/>

---

<br/>
<br/>

## Actor

<br/>

**German Name of Arkumu Entity:** Akteur:in\
**Is an Instance of:** **E39** Actor/**E21** Person/**E74** Group

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Vorangestellter Titel | Preceding Title | 0-1 | **P1** is identified by (identifies) | **E41** Appellation |
| Nachgestellter Titel | Trailing Title | 0-1 | **P1** is identified by (identifies) | **E41** Appellation |
| Alternative Name(n) | Alternative Name(s) | 0-n | **P1** is identified by (identifies) | **E41** Appellation |
| Nicht öffentlicher Name | Non-public Name | 0-n | **P1** is identified by (identifies) | **E41** Appellation |
| Geschlecht | Gender | 0-1 | **P2** has type (is type of) | **E55** Type |
| Geburtsdatum | Birth Date | 0-1 | **P4** has time-span (is time-span of) | **E63** Birth ⇒<br/>**E52** Time-Span |
| Geburtsort | Place of Birth | 0-1 | **P7** took place at (witnessed) | **E63** Birth ⇒<br/>**E53** Place |
| Sterbedatum | Death Date | 0-1 | **P4** has time-span (is time-span of) | **E69** Death ⇒<br/>**E52** Time-Span |
| Sterbeort | Place of Death | 0-1 | **P7** took place at (witnessed) | **E69** Death ⇒<br/>**E53** Place |
| Wirkungsort(e) | Place(s) of Activity | 0-n | **P7** took place at (witnessed) |  |
| Gründungsdatum | Formation Date | 0-1 | **P4** has time-span (is time-span of) | **E66** Formation ⇒<br/>**E52** Time-Span |
| Gründungsort | Place of Formation | 0-1 | **P7** took place at (witnessed) | **E66** Formation ⇒<br/>**E53** Place |
| Auflösungsdatum | Dissolution Date | 0-1 | **P4** has time-span (is time-span of) | **E68** Dissolution ⇒<br/>**E52** Time-Span |
| Auflösungssort | Place of Dissolution | 0-1 | **P7** took place at (witnessed) | **E68** Dissolution ⇒<br/>**E53** Place |
| Deutsche Kurzbiografie | German Short Biography | 0-1 | **P3** has note | **E62** String |
| Englische Kurzbiografie | English Short Biography | 0-1 | **P3** has note | **E62** String |
| Deutscher Kommentar | German Commentary | 0-1 | **P3** has note | **E62** String |
| Englischer Kommentar | English Commentary | 0-1 | **P3** has note | **E62** String |
| Interner Kommentar | Internal Commentary | 0-1 | **P3** has note | **E62** String |
| Beruf(e) und Tätigkeit(en) | Profession(s) and Activitie(s) | 0-n | **P2** has type (is type of) | **E55** Type |
| Wikidata-ID | Wikidata ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| VIAF-ID | VIAF ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| LCCN-ID | LCCN-ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| OrcID | OrcID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| Weitere Normdaten | Additional Authority Files | 0-n | **P1** is identified by (identifies) | **E42** Identifier |
| Webseite(n) der Akteur:in | Actor Website(s) | 0-n | **P76** has contact point (provides access to) | **E41** Appellation |
| Kontakt (E-Mail) | Contact (E-Mail) | 0-n | **P76** has contact point (provides access to) | **E41** Appellation |
| Kontakt (Telefon) | Contact (Phone) | 0-n | **P76** has contact point (provides access to) | **E41** Appellation |
| Kontakt (Postanschrift) | Contact (Postal Address) | 0-1 | **P76** has contact point (provides access to) | **E41** Appellation |

<br/>

**Outgoing Relationship(s)**:
* **Place of Birth** points to: [Place](#place)
* **Place of Death** points to: [Place](#place)
* **Place of Formation** points to: [Place](#place)
* **Place of Dissolution** points to: [Place](#place)
* **Profession(s) and Activitie(s)** points to: [Role](#role)

**Note(s):**
* Since **E40 Legal Body** was deprecated, the migration instruction of the [official documentation](https://cidoc-crm.org/sites/default/files/cidoc_crm_version_7.1.3.pdf) was followed, that they should be treated as a [**E74** Group](http://cidoc-crm.org/cidoc-crm/7.1.3/E74_Group):
  | <sub>Deprecated Class</sub> | <sub>Migration Instruction</sub> |
  |------------------|-----------------------|
  | <sub>E40 Legal Body</sub> | <sub>use E74 Group</sub> |
* **Alternative Name** (Alternativer Name) **was renamed to Alternative Name(s)** (Alternative Name(n)), to better express that more than one value can be entered.
* **Following Title** (Nachgestellter Titel) **was renamed to Trailing Title**. The German naming remains unchanged.
* **For Preceding Title** (Vorangestelter Titel) **and Trailing Title** (Nachgestellter Titel) **property** [**P1** is identified by (identifies)](http://cidoc-crm.org/cidoc-crm/7.1.3/P1_is_identified_by) **is used**, since they are treated as name prefixes or suffixes, and not pointing at a controlled vocabulary.
* **For Alternative Name(s)** (Alternative Name(n)) **property** [**P1** is identified by (identifies)](http://cidoc-crm.org/cidoc-crm/7.1.3/P1_is_identified_by) **is used**, instead of [**P139** has alternative form (is alternative form of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P139_has_alternative_form). This particular mapping follows the recomendation that property **P139** "should not be \[used for\] additional variants of names used characteristically for a single, particular item, such as individual nicknames". But **Alternative Name(s)** are not always a synonyme of the name, but sometimes a nickname, property **P1** seems more appropriate. Property **P139** is instead used to connect two instances of **E41** Appellation directly together, for example binding a [Keyword](#keyword) to its synonyms in different languages.
* **Non-public Names are for internal long-term preservation use only** and not part of the metadata representations. They are therefore not included in the RDF representations below.
* The fields **Earliest Birth Date** (Frühestes Geburtsdatum), **Latest Birth Date** (Spätestes Geburtsdatum), **Eearliest Death Date** (Frühestes Sterbedatum), and **Latest Death Date** (Spätestes Sterbedatum), **can be subsumed in two fields: Birth Date** (Geburtsdatum) **and Death Date** (Sterbedatum). Through ISO 8601 it is possible that both **Birth Date** and **Death Date** can be time-spans on their own. It is also possible that an uncertainty can be expressed.
* Both **Birth Date** and **Place of Birth** **need to be subsumed under the Event** [**E63** Birth](http://cidoc-crm.org/cidoc-crm/7.1.3/E67_Birth), since CIDOC can only treat time-spans as parts of events, with the place further substantiating this event. **Same is true for Death Date and Place of Death using Event** [**E69** Death](http://cidoc-crm.org/cidoc-crm/7.1.3/E69_Death). **Same is true for Formation Date, Dissolution Date, Place of Formation, and Place of Dissolution, using** [**E66** Formation](http://cidoc-crm.org/cidoc-crm/7.1.3/E66_Formation) **and** [**E68** Dissolution](http://cidoc-crm.org/cidoc-crm/7.1.3/E68_Dissolution) **respectively**.
* **GND ID was renamed to (GND-Nummer) in German**, to fit with the common use of that term in the source institution istelsef. The English naming remains unchanged.
* **Other Authority Files** (andere Normdaten) **was renamed to Additional Authority Files** (Weitere Normdaten).

<br/>
<br/>

---

<br/>
<br/>

## Digital Object

<br/>

**German Name of Arkumu Entity:** Digitales Objekt\
**Is an Instance of:** **D1** Digital Object ([CRMDig Extension](https://cidoc-crm.org/crmdig))

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Dateipfad | File Path | 1 | **P1** is identified by (identifies) | **E42** Identifier |
| Prüfsumme | Checksum | 1 | **P1** is identified by (identifies) | **E42** Identifier |
| Prüfsumme beim Einlieferer | Checksum at Depositor | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| DROID PUID | DROID PUID | 1 | **P1** is identified by (identifies) | **E42** Identifier |
| Dateiname | File Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Dateigröße | File Size | 1 | **P43** has dimension (is dimension of) | **E54** Dimension |
| MIME Type | Mime Type | 1 | **P2** has type (is type of) | **E55** Type |
| Medientyp | Media Type | 1 | **P2** has type (is type of) | **E55** Type |
| Entstehungstyp | Genesis Type | 0-1 | **P2** has type (is type of) | **E55** Type |
| Erhaltungstyp | Preservation Type | 1 | **P2** has type (is type of) | **E55** Type |
| Digitales Objekt-Schlagwort | Digital Object Keyword | 0-n | **P2** has type (is type of) | **E55** Type |
| Dateipaket | File Package | 0-1 | **P2** has type (is type of) | **E55** Type |
| Digitales Objekt-Lizenz | Digital Object License | 1 | **P104** is subject to (applies to) | **E30** Right |
| Deutsche Inhaltsbeschreibung | German Content Description | 0-1 | **P3** has note | **E62** String |
| Englische Inhaltsbeschreibung | English Content Description | 0-1 | **P3** has note | **E62** String |
| Deutscher Kommentar | German Commentary | 0-1 | **P3** has note | **E62** String |
| Englischer Kommentar | English Commentary | 0-1 | **P3** has note | **E62** String |
| Interner Kommentar | Internal Commentary | 0-1 | **P3** has note | **E62** String |
| Wesentliche Eigenschaften (Deutsch) | Significant Properties (German) | 0-1 | **P3** has note | **E62** String |
| Wesentliche Eigenschaften (Englisch) | Significant Properties (English) | 0-1 | **P3** has note | **E62** String |
| Systemvoraussetzungen | System Requirements | (1 for Code) | **P3** has note | **E62** String |
| JHOVE-Dateistatus | JHOVE Status | 1 |  |  |
| JHOVE-Metadaten | JHOVE Metadata | 1 | **P3** has note | **E62** String |
| DROID-Metadaten | DROID Metadata | 1 | **P3** has note | **E62** String |
| ExifTool-Metadaten | ExifTool Metadata | 1 | **P3** has note | **E62** String |
| MediaInfo-Metadaten | MediaInfo Metadata | 1 | **P3** has note | **E62** String |

<br/>

**Outgoing Relationship(s):**
* **Digital Objekt Keyword** points to: [Keyword](#keyword)
* **Digital Object License** points to: [Digital Object License](#digital-object-license)

**Note(s):**
* **Checksum at Depositor is a new field!**
* **MIME Type** has no E55 Type. It simply references to the according MIME Type as a string of E62. It could also be handled as a identifier.
* **Genesis** (Entstehung) **was renamed to Genesis Type** (Entstehungstyp), to better describe its function in the CIDOC ontology – for it is handled as an instance of E55 Type.
* **Digital Object Keyword** (Digitales Objekt-Schlagwort) **is a replacement for Object Type** (Objekttyp), because the term _Object_ interferes with the CIDOC naming conventions.
* **License State** (Lizenzstatus) **was renamed to Digtal Object License** (Digitales Objekt-Lizenz), which more accurately describes its content and is also the name of the corresponding entity.
* **JHOVE XML was renamed to JHOVE Metadata**, so name that the name reflects that this field is agnostic to the format used.
* **DROID Output \[-or XML\] was renamed to DROID Metadata**, so name that the name reflects that this field is agnostic to the format used.
* **ExifTool XML was renamed to ExifTool Metadata**, so name that the name reflects that this field is agnostic to the format used.
* **MediaInfo XML was renamed to MediaInfo Metadata**, so name that the name reflects that this field is agnostic to the format used.
* The fields **File Type (short)** (Dateityp (kurz)), **File Type (long)** (Dateityp (lang)), and **File Family** (Dateifamilie) **have been removed**, as they are accessible as [PRONOM](https://www.nationalarchives.gov.uk/PRONOM/) metadata.

<br/>
<br/>

---

<br/>
<br/>

## Digital Object License

<br/>

**German Name of Arkumu Entity:** Digitales Objekt-Lizenz\
**Is an Instance of:** **E30** Right

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Deutscher Lizenztext | German License Wording | 0-1 | **P3** has note | **E62** String |
| Englischer Lizenztext | English License Wording | 0-1 | **P3** has note | **E62** String |
| Deutscher Anzeigetext | German Display Text | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Anzeigetext | English Display Text | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| URI | URI | 1 | **P1** is identified by (identifies) | **E42** Identifier |
| Zugehöriges Rechtestatement | Connected Rights Statement | 1 | **P2** has type (is type of) | **E55** Type |

<br/>
<br/>

---

<br/>
<br/>

## Equipment and Software

<br/>

**German Name of Arkumu Entity:** Equiment und Software\
**Is an Instance of:** **E70** Thing

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutsche (Produkt-)Bezeichnung | German (Product-)Naming | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englishe (Produkt-)Bezeichnung | English (Product-)Naming | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Hersteller | Producer | 0-1 | **P1** is identified by (identifies) | **E41** Appellation |
| Equipmentart | Equipment Type | 1 | **P2** has type (is type of) | **E55** Type |
| Deutsche Beschreibung | German Description | 0-1 | **P3** has note | **E62** String |
| Englische Beschreibung | German Description | 0-1 | **P3** has note | **E62** String |
| Wikidata-ID | Wikidata ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |

<br/>
<br/>

**Outgoing Relationship(s):**
* **Equipment Type** points to: [Equipment Type](#equipment-type)

<br/>
<br/>

---

<br/>
<br/>

## Equipment Type

<br/>

**German Name of Arkumu Entity:** Equipmentart\
**Is an Instance of:** **E55** Type

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Wikidata-ID | Wikidata ID | 1 | **P1** is identified by (identifies) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| AAT-ID | AAT ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |

<br/>
<br/>

---

<br/>
<br/>

## Event

<br/>

**German Name of Arkumu Entity:** Ereignis\
**Is an Instance of:** **E7** Activity

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 0-1 | **P1** is identified by (identifies) | **E41** Appellation |
| Ereignistyp | Event Type | 1 | **P2** has type (is type of) | **E55** Type |
| Ereignisbeginn | Event Begin | 0-1 | **P4** has time-span (is time-span of) | **E52** Time-Span |
| Ereignisende | Event End | 0-1 | **P4** has time-span (is time-span of) | **E52** Time-Span |
| Ereignisort(e) | Event Place(s) | 0-n | **P7** took place at (witnessed) | **E53** Place |
| Ereignisbeschreibung(en) | Event Description(s) | 0-n | **P3** has note | **E62** String |
| Deutscher Kommentar | German Commentary | 0-1 | **P3** has note | **E62** String |
| Englischer Kommentar | English Commentary | 0-1 | **P3** has note | **E62** String |
| Interner Kommentar | Internal Commentary | 0-1 | **P3** has note | **E62** String |
| Wikidata-ID | Wikidata ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| Weitere Normdaten | Additional Authority Files | 0-n | **P1** is identified by (identifies) | **E42** Identifier |
| Ereignisakteur:in(nen) | Event Actor(s) | 0-n | **P14** carried out by (performed)<br/>[**P14.1** in the role of] | **E39** Actor<br/>**E21** Person<br/>**E74** Group<br/> | **E55** Type |
| Equipment und Software | Equipment and Software | 0-n | **P16** used specific object (was used for) | **E70** Thing |
| Physische(s) Objekt(e) | Physical Object(s) | 0-n | **P12** occurred in the presence of (was present at) | **E19** Physical Object |
| Informationsträger | Information Storage Medium(s) | 0-n | **P16** used specific object (was used for)<br/>[**P16.1** mode of use: delivering and/or holding information related to this event] | **E22** Human-Made Object |
| Digitales Objekt(e) | Digital Object(s) | 0-n | **P67i** is referred to by (refers to) | **D1** Digital Object |
| Verknüpfte Ereignis(se) | Related Event(s) | 0-n | **P9** consists of (forms part of) ("has part - is part off") | **E7** Activity |
| Datensatz-ID(s) beim Einlieferer | Data Record ID(s) at Depositor | 0-n | **P1** is identified by (identifies) | **E42** Identifier |
| Einlieferer-Verweis | Depositor Reference | 0-1 | **P2** has type (is type of) | **E55** Type |
| Datensatz-Erstellungdatum beim Einliefer | Data Record Creation Date at Depositor | 0-1 | **P4** has time-span (is time-span of) | **E7** Activity ("Data Record Creation at Depositor") ⇒<br/>**E52** Time-Span |
| Letztes Datensatz-Änderungsdatum beim Einliefer | Data Record Last Modification Date at Depositor | 0-1 | **P4** has time-span (is time-span of) | **E7** Activity ("Data Record Last Modification at Depositor") ⇒<br/>**E52** Time-Span |


<br/>

**Outgoing Relationship(s):**
* **Event Type** points to: [Event Type](#event-type)
* **Event Place(s)** points to: [Place](#keyword)
* **Event Actor(s)** points to: [Actor](#actor)
* **Physical Object(s)** points to: [Physical Object](#physical-object)
* **Information Storage Medium(s)** points to: [Information Storage Medium](#information-storage-medium)
* **Related Event(s)** points to: [Event](#event)
* **Depositor Reference** points to: [Organizational Unit](#organizational-unit)

**Note(s):**
* **Event Name** (Ereginisname) **was replaced with two fields German Name** (Deutscher Name) **and English Name** (Englischer Name), to reflect events that have both German and English names, as well as holding the possibility open to add synonyms of that names in the future, if this feature is wanted.
* **GND ID was renamed to (GND-Nummer) in German**, to fit with the common use of that term in the source institution istelsef. The English naming remains unchanged.
* **The deprecated field Additional Authority Files** ('Weitere Normdaten') **was reinitiated, because it is in use at the Folkwang University of the Arts!**
* **ID at Depositor** (Datensatz-ID beim Einlieferer) **was renamed to Data Record ID(s) at Depositor** (Datensatz-ID(s) beim Einlieferer), to let the English name more closely resemble the German version.
* **Depositor** (Einlieferer) **was renamed to Depositor Reference** (Einlieferer-Verweis), to more closely resemble that an [**Organizational Unit**](#organizational-unit) is used, and that they are an intance of **E55** Type.
* **Data Set Created at Depositor** (Datum Datensatz-Erstellung beim Einlieferer) **was renamed to Data Record Creation Date at Depositor** (Datensatz-Erstellungdatum beim Einliefer), to harmonize both their names in German and English.
* **Data Set Last Modified at Depositor** (Datum Datensatz-Modifikation beim Einlieferer) **was renamed to Data Record Last Modification Date at Depositor** (Letztes Datensatz-Änderungsdatum beim Einliefer), to harmonize both their names in German and English.
* **Data Record Creation Date at Depositor** (Datensatz-Erstellungdatum beim Einliefer) **and Data Record Last Modification Date at Depositor** (Letztes Datensatz-Änderungsdatum beim Einliefer) **need to be part of their respective automatically created activities**, to keep them consistent with other entities using similar fields. The activities are **"Data Record Creation at Depositor"** ("Datensatzerstellung beim Einlieferer") and **"Data Record Last Modification at Depositor"** ("Letzte Datensatz-Modifikation beim Einlieferer").

<br/>
<br/>

---

<br/>
<br/>

## Event Type

<br/>

**German Name of Arkumu Entity:** Ereignistyp\
**Is an Instance of:** **E55** Type

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Deutsche Synonym(e) | German Synonym(s) | 0-n | **P139** has alternative form (is alternative form of) | [German Name] ⇒<br/>**E41** Appellation |
| Englishe Synonym(e) | English Synonym(s) | 0-n | **P139** has alternative form (is alternative form of) | [English Name] ⇒<br/>**E41** Appellation |
| Wikidata-ID | Wikidata ID | 1 | **P1** is identified by (identifies) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| AAT-ID | AAT ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| LIDO-Terminologie-ID | LIDO Terminology ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |

<br/>

**Note(s):**
* **The Source Field Synonyms** (Synonyme) **was split up in the two distinct fields German Synonym(s)** (Deutsche Synonym(e)) **and English Synonym(s)** (Englische Synonym(e)), to accomodate how CIDOC treats alternative forms of controlled vocabulary terms.
* **GND ID was renamed to (GND-Nummer) in German**, to fit with the common use of that term in the source institution istelsef. The English naming remains unchanged.

<br/>

**Graphical Schema Representation:**

<br/>
<br/>

[![Graphical Schema Representation Event Type](uploads/d7d3a944ba963680c569bcdab750abc5/Event_Type_CIDOC.drawio.png)](uploads/d7d3a944ba963680c569bcdab750abc5/Event_Type_CIDOC.drawio.png)

<br/>
<br/>

**RDF Representations:**

| Format | File |
|--------|------|
| Turtle | [https://raw.githubusercontent.com/arkumu/RDF-Metadata-Examples/refs/heads/main/EventType.ttl](https://gitlab.git.nrw/arkumu/arkumu-rdf-samples/-/raw/main/EventType.ttl) |
| RDF/XML | [https://raw.githubusercontent.com/arkumu/RDF-Metadata-Examples/refs/heads/main/EventType.xml](https://gitlab.git.nrw/arkumu/arkumu-rdf-samples/-/raw/main/EventType.xml) |
| JSON-LD Conversion | [https://raw.githubusercontent.com/arkumu/RDF-Metadata-Examples/refs/heads/main/EventType.json](https://gitlab.git.nrw/arkumu/arkumu-rdf-samples/-/raw/main/EventType.json) |

<br/>
<br/>

---

<br/>
<br/>

## Existing License Agreement

<br/>

**German Name of Arkumu Entity:** Bestehender Lizenzvertrag\
**Is an Instance of:** **E30** Right

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 0-1 | **P1** is identified by (identifies) | **E41** Appellation |
| Verantwortliche Hochschule | Accountable University | 1 | **P67** refers to (is referred to by) | **E39** Actor<br/>**E74** Group |
| Deutscher Vertragstext | German Contract Wording | 0-1 | **P3** has note | **E62** String |
| Englischer Vertragstext | English Contract Wording | 0-1 | **P3** has note | **E62** String |
| PDF | PDF | 1 |  |  |
| URI | URI | 1 | **P1** is identified by (identifies) | **E42** Identifier |

<br/>
<br/>

---

<br/>
<br/>

## Information Storage Medium

<br/>

**German Name of Arkumu Entity:** Informationsträger\
**Is an Instance of:** **E22** Human-Made Object

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutsche (Produkt-)Bezeichnung | German (Product-)Naming | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englishe (Produkt-)Bezeichnung | English (Product-)Naming | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Label (Handelsmarke) | Label | 0-1 |  |  |
| Informationsträgertyp | Information Storage Medium Type | 1 | **P2** has type (is type of) | **E55** Type |
| Produkt-ID | Product-ID | 0-n |  |  |
| Aufbewahrungsort | Depository | 0-1 | **P55** has current location (currently holds) | **E53** Place |
| Externe Inventar-Signaturnummer | External Inventory Signature | 0-n | **P1** is identified by (identifies) | **E41** Appellation |
| Derzeitige Besitzer:in(nen) | Current Keeper(s) | 0-n | **P50** has current keeper | **E39** Actor<br/>**E21** Person<br/>**E74** Group |
| Derzeitige Eigentümer:in(nen) | Current Owner(s) | 0-n | **P52** has current owner | **E39** Actor<br/>**E21** Person<br/>**E74** Group |
| Provenienz-Notiz | Provenance Note | 0-1 | **P3** has note | **E62** String |
| Deutsche Beschreibung | German Description | 0-1 | **P3** has note | **E62** String |
| Englische Beschreibung | English Description | 0-1 | **P3** has note | **E62** String |
| Deutscher Kommentar | German Commentary | 0-1 | **P3** has note | **E62** String |
| Englischer Kommentar | English Commentary | 0-1 | **P3** has note | **E62** String |
| Interner Kommentar | Internal Commentary | 0-1 | **P3** has note | **E62** String |
| Materialschlagwort(e) | Material Keyword(s) | 0-n | **P45** consists of (is incorporated in)  | **E57** Material|
| Maße | Dimensions | 0-1 | **P43** has dimension (is dimension of) | **E54** Dimension |
| Erhaltungszustand (deutsch) | Condition State (German) | 0-1 | **P44** has condition (is condition of) | **E3** Condition State |
| Erhaltungszustand (englisch) | Condition State (English) | 0-1 | **P44** has condition (is condition of) | **E3** Condition State |

<br/>

**Additional Properties**:
| <sub>German Name of Additional Property</sub> | <sub>English Name of Additional Property</sub> | <sub>Min-Max Occurence</sub> | <sub>CRM Property</sub> | <sub>CRM Entity</sub> |
------------|------------|-----------|--------------|------------|
| <sub>Originalsprache(n)</sub> | <sub>Original Language(s)</sub> | <sub>0-n</sub> | <sub>**P128** carries (is carried by) ⇒<br/>**P72** has language (is language of)</sub> | <sub>**E33** Linguistic Object ⇒<br/>**E56** Language</sub> |
| <sub>Sprachfassunge(n)</sub> | <sub>Language Version(s)</sub> | <sub>0-n</sub> | <sub>**P128** carries (is carried by) ⇒<br/>**P72** has language (is language of)</sub> | <sub>**E33** Linguistic Object ⇒<br/>**E56** Language</sub> |
| <sub>Untertitelsprache(n)</sub> | <sub>Subtitle Language(s)</sub> | <sub>0-n</sub> | <sub>**P128** carries (is carried by) ⇒<br/>**P72** has language (is language of)</sub> | <sub>**E33** Linguistic Object ⇒<br/>**E56** Language</sub> |
| <sub>Abspielgeschwindigkeit</sub> | <sub>Playback Speed</sub> | <sub>0-1</sub> | <sub>**P43** has dimension (is dimension of)</sub> | <sub>**E54** Dimension</sub> |
| <sub>Dauer (HH:MM:SS)</sub> | <sub>Duration (HH:MM:SS)</sub> | <sub>0-1</sub> | <sub>**P43** has dimension (is dimension of)</sub> | <sub>**E54** Dimension</sub> |
| <sub>Dauer (Free Text)</sub> | <sub>Duration (Free Text)</sub> | <sub>0-1</sub> | <sub>**P43** has dimension (is dimension of)</sub> | <sub>**E54** Dimension</sub> |
| <sub>Ton-Kanäle</sub> | <sub>Audio Chanels</sub> | <sub>0-1</sub> | <sub>**P43** has dimension (is dimension of)</sub> | <sub>**E54** Dimension</sub> |

<br/>

**Outgoing Relationship(s):**
* **Depository** points to: [Place](#place)
* **Current Keeper(s)** points to: [Actor](#actor)
* **Current Owner(s)** points to: [Actor](#actor)
* **Material Keyword(s)** points to: [Keyword](#keyword)

**Note(s)**:
* Since **E84** Information Carrier was deprecated, the migration instruction of the official documentation was followed, in that [**E22** Human-Made Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E22_Human-Made_Object) should be used:
  | <sub>Deprecated Class</sub> | <sub>Migration Instruction</sub> |
  |------------------|-----------------------|
  | <sub>E84 Information Carrier</sub> | <sub>use E22 Human-Made Object, P2 has type: “Information Carrier”</sub> |

  If arkumu will also follow the recommendation of using the type is open to discussion, since the entity name already describes what type of physical human-made object is being presented here.

<br/>
<br/>

---

<br/>
<br/>

## Information Storage Medium Type

<br/>

**German Name of Arkumu Entity:** Informationsträgertyp\
**Is an Instance of:** **E55** Type

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Deutsche Synonym(e) | German Synonym(s) | 0-n | **P139** has alternative form (is alternative form of) | **E41** Appellation |
| Englishe Synonym(e) | English Synonym(s) | 0-n | **P139** has alternative form (is alternative form of) | **E41** Appellation |
| Wikidata-ID | Wikidata ID | 1 | **P1** is identified by (identifies) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| AAT-ID | AAT ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| PBCore-ID | PBCore ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| Übergeordnete Projektträgertyp(en) | Parent Information Storage Medium Types | 0-n | **P127** has broader term (has narrower term) | **E55** Type |

<br/>
<br/>

---

<br/>
<br/>

## Keyword

<br/>

**German Name of Arkumu Entity:** Schlagwort\
**Is an Instance of:** **E55** Type

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutsches Wikidata-Label | German Wikidata Label | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englisches Wikidata-Label | English Wikidata Label | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Deutsche Wikidata-Synonym(e) | German Wikidata Synonym(s) | 0-n | **P139** has alternative form (is alternative form of) | **E41** Appellation |
| Englishe Wikidata-Synonym(e) | English Wikidata Synonym(s) | 0-n | **P139** has alternative form (is alternative form of) | **E41** Appellation |
| Deutsche Wikidata-Beschreibung | German Wikidata Description | 1 | **P3** has note | **E62** String |
| Englishe Wikidata-Beschreibung | English Wikidata Description | 1 | **P3** has note | **E62** String |
| Wikidata-ID | Wikidata ID | 1 | **P48** has preferred identifier (is preferred identifier of) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| Schlagwortart | Keyword Type | 1-n | **P2** has type (is type of) | **E55** Type |

<br/>

**Note(s)**:
* The fields **German Synonyms** (Deutsche Synonyme) and **English Synonyms** (Englische Synonyme) got a reference that they are also from Wikidata, and **are now named German Wikidata Synonym(s)** (Deutsche Wikidata-Synonym(e)) and **English Wikidata Synonym(s)** (Englische Wikidata-Synonym(e)). The same is applicable for the fields **German Wikidata Description** (Deutsche Wikidata-Beschreibung) and **English Wikidata Description** (Englishe Wikidata-Beschreibung).
* The **German Wikidata Synonyms** and **English Wikidata Synonyms** **are directly connected to their corresponding Wikidata Labels**, via the property [**P139** has alternative form (is alternative form of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P139_has_alternative_form).
* The **new field Keyword Type** (Schlagwortart) defines in which type of fields this keyword should be shown in. The Options are e.g. "project_keyword", "material_keyword", "technique_keyword", "digital_object_keyword", etc. The Keyword Type is technically necessary, cause on creation, the keyword must be available to one field using it, but can be available to many fields. Keyword type does not need a seperate entity, cause there is no underlying metadata. Its use is for the arkumu system only.

<br/>

**Graphical Schema Representation:**

<br/>
<br/>

[![Graphical Schema Representation Keyword](uploads/d7b0ae0fbf8d2eee9029e6267baef364/Keyword_CIDOC.drawio.png)](uploads/d7b0ae0fbf8d2eee9029e6267baef364/Keyword_CIDOC.drawio.png)

<br/>
<br/>

**RDF Representations:**

| Format | File |
|--------|------|
| Turtle | [https://raw.githubusercontent.com/arkumu/RDF-Metadata-Examples/refs/heads/main/Keyword.ttl](https://gitlab.git.nrw/arkumu/arkumu-rdf-samples/-/raw/main/Keyword.ttl) |
| RDF/XML | [https://raw.githubusercontent.com/arkumu/RDF-Metadata-Examples/refs/heads/main/Keyword.xml](https://gitlab.git.nrw/arkumu/arkumu-rdf-samples/-/raw/main/Keyword.xml) |
| JSON-LD Conversion | [https://raw.githubusercontent.com/arkumu/RDF-Metadata-Examples/refs/heads/main/Keyword.json](https://gitlab.git.nrw/arkumu/arkumu-rdf-samples/-/raw/main/Keyword.json) |

<br/>
<br/>

---

<br/>
<br/>

## Language

<br/>

**German Name of Arkumu Entity:** Sprache\
**Is an Instance of:** **E56** Language

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| ISO 639-2(B)-Code | ISO 639-2(B) Code | 1 | **P1** is identified by (identifies) | **E42** Identifier |
| ISO 639-2(T)-Code | ISO 639-2(T) Code | 1 | **P1** is identified by (identifies) | **E42** Identifier |
| ISO 639-1-Code | ISO 639-1 Code | 1 | **P1** is identified by (identifies) | **E42** Identifier |

<br/>
<br/>
<br/>

---

<br/>
<br/>

## Organizational Unit

<br/>

**German Name of Arkumu Entity:** Organisationseinheit\
**Is an Instance of:** **E55** Type

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| English Name | Englischer Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Deutscher Beschreibung | German Description | 0-1 | **P3** has note | **E62** String |
| Englische Beschreibung | English Description | 0-1 | **P3** has note | **E62** String |
| Übergeordnete Organisationseinheit(en) | Übergeordnete Organisationseinheit(en) | 0-n | **P127** has broader term (has narrower term) | **E55** Type |

<br/>

**Note(s):**
* **Organizational Units are not considered **[**Actors**](#actor)** within arkumu.nrw.** Since the mandatory rights for long-term preservation and for making projects accessible to the public and cultural heritage partners must be granted at the university level, there is no need to treat organizational units as separate actors in CIDOC CRM. Instead they are simply a controlled vocabulary of institutions, organizations, and study programs at the consortial universities.
* **The field University** (Hochschule) **is not needed anymore**, since relationships can be expressed in the ontological model. Since multiple universities can be parents now, the category "Cooperation" is also not needed anymore.

<br/>
<br/>

---

<br/>
<br/>

## Physical Object

<br/>

**German Name of Arkumu Entity:** Physisches Objekt\
**Is an Instance of:** **E19** Physical Object

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutsche Bezeichnung | German Naming | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englische Bezeichnung | English Naming | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Externe Inventar-Signaturnummer | External Inventory Signature | 0-n | **P1** is identified by (identifies) | **E41** Appellation |
| Aufbewahrungsort | Depository | 0-1 | **P55** has current location (currently holds) | **E53** Place |
| Derzeitige Besitzer:in(nen) | Current Keeper(s) | 0-n | **P50** has current keeper | **E39** Actor<br/>**E21** Person<br/>**E74** Group |
| Derzeitige Eigentümer:in(nen) | Current Owner(s) | 0-n | **P52** has current owner | **E39** Actor<br/>**E21** Person<br/>**E74** Group |
| Provenienz-Notiz | Provenance Note | 0-1 | **P3** has note | **E62** String |
| Deutsche Beschreibung | German Description | 0-1 | **P3** has note | **E62** String |
| Englische Beschreibung | English Description | 0-1 | **P3** has note | **E62** String |
| Deutscher Kommentar | German Commentary | 0-1 | **P3** has note | **E62** String |
| Englischer Kommentar | English Commentary | 0-1 | **P3** has note | **E62** String |
| Interner Kommentar | Internal Commentary | 0-1 | **P3** has note | **E62** String |
| Klassifizierende Schlagwort(e) | Classification Keyword(s) | 0-n | **P2** has type (is type of) | **E55** Type |
| Materialschlagwort(e) | Material Keyword(s) | 0-n | **P45** consists of (is incorporated in)  | **E57** Material|
| Deutscher Kommentar zur Technik | German Technique Commentary | 0 -1 | **P3** has note | **E62** String |
| Englischer Kommentar zur Technik | German Technique Commentary | 0 -1 | **P3** has note | **E62** String |
| Maße | Dimensions | 0-1 | **P43** has dimension (is dimension of) | **E54** Dimension |
| Erhaltungszustand (deutsch) | Condition State (German) | 0-1 | **P44** has condition (is condition of) | **E3** Condition State |
| Erhaltungszustand (englisch) | Condition State (English) | 0-1 | **P44** has condition (is condition of) | **E3** Condition State |

<br/>

**Outgoing Relationship(s):**
* **Depository** points to: [Place](#place)
* **Current Keeper(s)** points to: [Actor](#actor)
* **Current Owner(s)** points to: [Actor](#actor)
* **Classification Keyword(s)** points to: [Keyword](#keyword)
* **Material Keyword(s)** points to: [Keyword](#keyword)

<br/>
<br/>

---

<br/>
<br/>

## Place

<br/>

**German Name of Arkumu Entity:** Ort\
**Is an Instance of:** **E53** Place

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutsches Wikidata-Label | German Wikidata Label | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englisches Wikdata-Label | English Wikidata Label | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Ortart | Place Type | 1 | **P2** has type (is type of) | **E55** Type |
| Breitengrad | Latitude | 1 | **P168** place is defined by (defines place) | **E94** Space Primitive |
| Längengrad | Longitude | 1 | **P168** place is defined by (defines place) | **E94** Space Primitive |
| Wikidata-ID | Wikidata ID | 1 | **P48** has preferred identifier (is preferred identifier of) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| VIAF-ID | VIAF ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| Übergeordneter Ort | Parent Place | 0-1 | **P89** falls within | **E53** Place |

<br/>

**Outgoing Relationship(s):**
* **Parent Place** points to [Place](#place)

**Note(s)**:
* **Latitude** (Breitengrad) and **Longitute** (Längengrad) **could be saved in one Space Primitive field**.
* **GND ID was renamed to (GND-Nummer) in German**, to fit with the common use of that term in the source institution istelsef. The English naming remains unchanged.
* **Subordinate Place was renamed to Parent Place**. The German naming remains unchanged.

<br/>
<br/>

---

<br/>
<br/>

## Product ID Type

<br/>

**German Name of Arkumu Entity:** Produkt-ID-Typ\
**Is an Instance of:** **E55** Type

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Wikidata-ID | Wikidata ID | 1 | **P48** has preferred identifier (is preferred identifier of) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |

<br/>

**Note(s)**:
* **GND ID was renamed to (GND-Nummer) in German**, to fit with the common use of that term in the source institution istelsef. The English naming remains unchanged.

<br/>
<br/>

---

<br/>
<br/>

## Project

<br/>

**German Name of Arkumu Entity:** Projekt\
**Is an Instance of:** **E73** Information Object

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| arkumu.nrw ID | arkumu.nrw ID | 1 | **P48** has preferred identifier (is preferred identifier of) | **E42** Identifier |
| Archival Resource Key (ARK) | Archival Resource Key (ARK) | 1 | **P1** is identified by (identifies) | **E42** Identifier |
| Einliefernde Hochschule | Depositing University | 1 | **P105** right held by (has right on) | **E39** Actor<br/>**E74** Group  |
| Bevorzugter Titel | Preferred Title | 1 | **P102** has title (is title of) | **E35** Title |
| Bevorzugter Untertitel | Preferred Subtitle | 0-1 | **P102** has title (is title of) | **E35** Title |
| Alternative Titel-Set(s) | Alternate Title-Sets(s) | 0-n | **P102** has title (is title of) | **E35** Title |
| Projektart(en) | Project Type(s) | 1-n | **P2** has type (is type of) | **E55** Type |
| Projektkategorie(n) | Project Category(/ies) | 1-n | **P2** has type (is type of) | **E55** Type |
| Schlagwort(e) | Keyword(s) | 0-n | **P2** has type (is type of) | **E55** Type |
| Projektbeschreibung(en) | Project Descriptions(s) | 0-n | **P3** has note | **E62** String |
| Deutscher Kommentar | German Commentary | 0-1 | **P3** has note | **E62** String |
| Englischer Kommentar | English Commentary | 0-1 | **P3** has note | **E62** String |
| Interner Kommentar | Internal Commentary | 0-1 | **P3** has note | **E62** String |
| Signatur(en) beim Einlieferer | Signature(s) at Depositor | 0-n | **P1** is identified by (identifies) | **E42** Identifier |
| Werkverzeichnisnummer(n) | Catalog Raisonné Reference Number(s) | 0-n | **P1** is identified by (identifies) | **E42** Identifier |
| Wikidata-ID | Wikidata ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| Externe Projektwebseite(n) | External Project Webniste(s) | 0-n | **P67** refers to (is referred to by) | **E73** Information Object |
| Ereignis(se) | Event(s) | 0-n | **P67** refers to (is referred to by) | **E7** Activity |
| Deutsche Inhaltswarnung | German Content Warning | 0-1 | **P3** has note | **E62** String |
| Englische Inhaltswarnung | English Content Warning | 0-1 | **P3** has note | **E62** String |
| Rechtsstatus | Right Status | 1 | **P104** is subject to (applies to) | **E30** Right |
| Bestehender Lizenzvertrag | Existing License Agreement | (1 if *Existing License Agreement* is selected in the field **Type of License Agreement**; `rule disabled for testing`) | **P104** is subject to (applies to) | **E30** Right |
| Dokumentation des bestehenden Lizenzvertrags | Documentation of Existing License Agreement | (0-n if *Existing License Agreement* is selected in the field **Type of License Agreement**; `rule disabled for testing`) | |
| Neuer Lizenzvertrag (arkumu.nrw-Formular) | New Licence Agreement (arkumu.nrw Form) | (1 if *New License Agreement* or *Existing License Agreement* is selected in the field **Type of License Agreement**; `rule disabled for testing`) | **P104** is subject to (applies to) | **E30** Right |
| Dokumentation des neuen Lizenzvertrags (arkumu.nrw-Formular) | Documentation of New License Agreement (arkumu.nrw Form) | (1 if *New License Agreement* or *Existing License Agreement* is selected in the field **Type of License Agreement**; `rule disabled for testing`) | |
| Angegebene Nutzungsrechte | Granted Usage Rigths | (1; Documentation of New License Agreement (arkumu.nrw Form) needs to be uploaded | **P104** is subject to (applies to) | **E30** Right |
| Weitere Rechtsdokumente | Additional Rights Documents | (0-n if *New License Agreement* or *Existing License Agreement* is selected in the field **Type of License Agreement**; `rule disabled for testing`) |
| Dateiabfrage-Dokument | File Licences Document | (0-n if *New License Agreement* or *Existing License Agreement* is selected in the field **Type of License Agreement**; `rule disabled for testing`) |


<br/>

**Outgoing Relationship(s):**
* **Project Type(s)** points to: [Project Type](#project-type)
* **Project Categorie(s)** points to: [Project Category](#project-category)
* **Keyword(s)** points to: [Keyword](#keyword)
* **Existing License Agreement** points to: [Existing License Agreement](#existing-license-agreement)

**Note(s):**
* Other possible mapping options for **Project** could be [**E71** Human-Made Thing](http://cidoc-crm.org/cidoc-crm/7.1.3/E71_Human-Made_Thing) or [**E28** Conceptual Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E28_Conceptual_Object). The Slovenian New Media Art Archive, which is in planning, also plans to use [**E73** Information Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E73_Information_Object) as their central entity, cause it seems the most fitting to hold information even for complex and richly layered types of art. 
* A Project, in the sense arkumu.nrw uses it, is an overarching construct that is both suitable for describing physical and non-physical artworks in a standardized form. Additionally to that, Projects are also a central managing point through which the process of obtaining important rights from the right holders is handled. To accommodate both of these features, the CRM Entity [**E73** Information Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E73_Information_Object) seems to be the most appropriate option. This is because this entity sits at an important junction point inside the CIDOC CRM ontology itself. It inhibits both properties from [**E89** Propositional Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E89_Propositional_Object) and [**E90** Symbolic Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E90_Symbolic_Object), combining two parts of the ontology that don't meet otherwise. From [**E89** Propositional Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E89_Propositional_Object) the Information Object inherits those properties that are of importance for defining relationships from it to other CRM entities, including itself, these are: [**P67** refers to (is referred to by)](http://cidoc-crm.org/cidoc-crm/7.1.3/P67_refers_to), [**P129** is about (is subject of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P129_is_about), and [**P148** has component (is component of)](http://cidoc-crm.org/cidoc-crm/7.1.3/P148_has_component). While also being a subclass of [**E90** Symbolic Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E90_Symbolic_Object), which – in itself – is a subclass of [**E72** Legal Object](http://cidoc-crm.org/cidoc-crm/7.1.3/E72_Legal_Object), it enables the Information Object to hold rights on its own. This encompasses the two important properties [**P104** is subject to (applies to)](http://cidoc-crm.org/cidoc-crm/7.1.3/P104_is_subject_to), and [**P105** right held by (has right on)](http://cidoc-crm.org/cidoc-crm/7.1.3/P105_right_held_by).
* **Signature** (Signatur) **was renamed to arkumu.nrw ID** to fit more in the naming scheme of other identifiers, with **Signature(s) at Depositor** keeping its name, cause it can hold both digital identifiers and identifiers on the physical objects at the consortial universities.
* **Archival Resource Key (ARK) is a new field!**
* In Order to use [**P105** right held by (has right on)](http://cidoc-crm.org/cidoc-crm/7.1.3/P105_right_held_by), **Depositing University** (Einliefernde Hochschule) **MUST be an instance of** [**E39** Actor](http://cidoc-crm.org/cidoc-crm/7.1.3/E39_Actor)/[**E74** Group](http://cidoc-crm.org/cidoc-crm/7.1.3/E74_Group). 
* Since **Project Categorie(s)**("Projektkategorie(n)") are commonly used, and since they were planned as a mandatory field, they **are a mandatory field** now.
* **Content Warning German** (Inhaltswarnung deutsch) **and Content Warning English** (Inhaltswarnung [e]nglisch) **were renamed to German Content Warning** (Deutsche Inhaltswarnung) **and English Content Warning** (Englische Inhaltswarnung), to be compatible to the new naming conventions. Both come from their according entity [Content Warning](/data-model#content-warning), as it can be seen in the [arkumu.nrw data model](/data-model).

<br/>
<br/>

---

<br/>
<br/>

## Project Category

<br/>

**German Name of Arkumu Entity:** Projektkategorie\
**Is an Instance of:** **E55** Type

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Deutsche Synonym(e) | German Synonym(s) | 0-n | **P139** has alternative form (is alternative form of) | [German Name] ⇒<br/>**E41** Appellation |
| Englishe Synonym(e) | English Synonym(s) | 0-n | **P139** has alternative form (is alternative form of) | [English Name] ⇒<br/>**E41** Appellation |
| Wikidata-ID | Wikidata ID | 1 | **P48** has preferred identifier (is preferred identifier of) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| AAT-ID | AAT ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| filmportal.de-ID | filmportal.de​ ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| Übergeordnete Projektkategorie(n) | Parent Project Categorie(s) | 0-n | **P127** has broader term (has narrower term) | **E55** Type |

<br/>

**Note(s):**
* **This table plans for the project categories to be an ontology and not a hierachical tree. For the modelling of this** [**P127** has broader term (has narrower term)](http://cidoc-crm.org/cidoc-crm/7.1.3/P127_has_broader_term) **was used.**
* **The Source Field Synonyms** (Synonyme) **was split up in the two distinct fields German Synonym(s)** (Deutsche Synonym(e)) **and English Synonym(s)** (Englische Synonym(e)), to accomodate how CIDOC treats alternative forms of controlled vocabulary terms.
* **GND ID was renamed to (GND-Nummer) in German**, to fit with the common use of that term in the source institution istelsef. The English naming remains unchanged.
* **The Project Category cand be displayed in breadcrumbs and a graph for the user.**

<br/>
<br/>

---

<br/>
<br/>

## Role

<br/>

**German Name of Arkumu Entity:** Rolle\
**Is an Instance of:** **E55** Type

<br/>

| German Name of Source Field | English Name of Source Field | Min-Max Occurence | CRM Property | CRM Entity |
|-----------------------------|------------------------------|-----------|--------------|------------|
| Deutscher Name | German Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Englischer Name | English Name | 1 | **P1** is identified by (identifies) | **E41** Appellation |
| Deutsche Synonym(e) | German Synonym(s) | 0-n | **P139** has alternative form (is alternative form of) | **E41** Appellation |
| Englishe Synonym(e) | English Synonym(s) | 0-n | **P139** has alternative form (is alternative form of) | **E41** Appellation |
| Wikidata-ID | Wikidata ID | 1 | **P48** has preferred identifier (is preferred identifier of) | **E42** Identifier |
| GND-Nummer | GND ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| AAT-ID | AAT ID | 0-1 | **P1** is identified by (identifies) | **E42** Identifier |
| Übergeordnete Rolle(n) | Parent Role(s) | 0-n | **P127** has broader term (has narrower term) | **E55** Type |

<br/>

**Note(s):**
* **This table plans for the project categories to be an ontology and not a hierachical tree. For the modelling of this** [**P127** has broader term (has narrower term)](http://cidoc-crm.org/cidoc-crm/7.1.3/P127_has_broader_term) **was used.**
* **The Source Field Synonyms** (Synonyme) **was split up in the two distinct fields German Synonym(s)** (Deutsche Synonym(e)) **and English Synonym(s)** (Englische Synonym(e)), to accomodate how CIDOC treats alternative forms of controlled vocabulary terms.
* **GND ID was renamed to (GND-Nummer) in German**, to fit with the common use of that term in the source institution istelsef. The English naming remains unchanged.
* **The Role can be displayed in breadcrumbs and a graph for the user.**