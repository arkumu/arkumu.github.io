---
layout: arkumu-docs
title: ❗ Benutzerrechteverwaltung
order: 3.05
permalink: /documentation/user-rights-management
---

```❗ To-Do: fix broken links to files, correct formatting```

```User rights management```

<br/>

---

<br/>

**Deutsch:**

Die Benutzerrechteverwaltung steuert, welche Art von Benutzer:innen bestimmte Aktionen innerhalb des arkumu.nrw Erfassungsportals durchführen darf. In einem System dieser Größenordnung ist es von größter Wichtigkeit, dass sowohl die Metadaten als auch die Dateien selber selbständig angelegt/abgelegt und bearbeitet werden können sowie, dass sie vor unerlaubten Zugriffen geschützt und gesichert sind, sodass nur autorisierte Benutzer:innen und Benutzer:innengruppen mit den entsprechenden Daten arbeiten und auf sie zugreifen können. Aus diesem Grund mussten sowohl auf Dateiebene als auch auf Benutzer:innenebene Regeln aufgestellt werden, um diesen Arbeitsprozess entsprechend zu verwalten.

<br/>

---

<br/>

**English:**

The user rights management controls, what type of user can perform certain actions within the arkumu.nrw ingest portal. In a system of this size, it is extremely important that both the metadata and the files themselves can be created/stored and edited autonomously, and that they are protected and secured against unauthorised access, so that only authorised users and user groups can work with, and access, the corresponding data. For this reason, rules had to be established both at file level and at user level, in order to manage this work process accordingly.

<br/>
<br/>

---

<br/>
<br/>

## Frühe Überlegungen mit KA3
```Early Considerations with KA3```

<br/>

**Deutsch:**

Ursprünglich sollte [**KA3**](https://ka3.uni-koeln.de/) für den Umgang mit Benutzer:innen und der Dateiverwaltungsrechten verwendet werden, das ebenfalls von unserem technischen Konsortialpartner, dem Rechenzentrum der Universität zu Köln (jetzt [IT Center University of Cologne](https://itcc.uni-koeln.de/)), entwickelt wurde.

<br/>

---

<br/>

**English:**

Initially, [**KA3**](https://ka3.uni-koeln.de/) should've been used for handling users and file managements rights, which was also developed by our technical consortial partner, the Rechenzentrum der Universität zu Köln (now [IT Center University of Cologne](https://itcc.uni-koeln.de/)).

<br/>
<br/>

![User and Authorisation Overview KA3](/assets/images/Benutzer___Autorisierungsuebersicht.drawio.png)<br/>
<sub>Erste grobe Skizze, welche Benutzer:innengruppen existieren und welche Rechte sie haben, als erster Beispiel für weitere Entscheidungen, wie Benutzer:innen- und Dateizugriffsrechte verwaltet werden sollten.</sub>
<sub>First rough sketch on what user groups exist and what their rights are, used as a basic example for further determining how user and file access rights should be managed.</sub><br/>


<br/>
<br/>

---

<br/>
<br/>

# Benutzer:innenverwaltung


## Nutzerinnengruppen

`User Groups`

<br/>
<br/>

---

<br/>
<br/>

### Einfache registrierte Benutzer:in  
`Simple registered user`

*Vorerst sind hiermit angemeldete Hochschulbenutzer:innen der Konsortialhochschulen gemeint!*

<mark>Hier muss eine Einleitung zur Benutzer:innengruppe auf deutsch und englisch hin</mark>

<br/>

---

<br/>

**Deutsch:**

**Registrierte Benutzer:innen düfen im Erfassungsbackend:**

*	Projekte für die Hochschule anlegen.
*	Eigene Projekte sehen, bearbeiten und löschen, falls sie von niemand anderen verknüpft wurden.
*	Projekte von anderen Benutzer:innen, auch von anderen Hochschulen, sehen (* zumindest jene Informationen, die für die Öffentlichkeit bestimmt sind) und mit eigenen Projekten verknüpfen.
*	Schlagworte anlegen und bereits vorhandene Schlagworte verwenden.
*	Ereignisse anlegen, eigene Ereignisse bearbeiten und diese löschen, falls sie von keiner anderen Benutzer:in verwendet werden.
*	Ereignisse von anderen Benutzer:innen, auch von anderen Hochschulen, sehen* und mit seinem Projekt verknüpfen.
*	Akteur:innen anlegen, eigene Akteur:innen bearbeiten und diese löschen, falls sie von keiner anderen Benutzer:in verwendet werden.
*	Equipment und Equipmentarten anlegen, eigenes Equipment bearbeiten und dieses löschen, falls es von keiner anderen Benutzer:in verwendet wird.
*	Equipment von anderen Benutzer:innen, auch von anderen Hochschulen, sehen* und mit seinem Projekt verknüpfen.
*	Physische Objekte anlegen, eigene Physische Objekte bearbeiten und diese löschen, falls sie von keiner anderen Benutzer:in verwendet werden.
*	Physische Objekte von anderen Benutzer:innen, auch von anderen Hochschulen, sehen* und mit dem eigenen Ereignis verknüpfen.
*	Informationsträger anlegen, eigene Informationsträger bearbeiten und diese löschen, falls sie von keiner anderen Benutzer:in verwendet werden.
*	Informationsträger von anderen Benutzer:innen, auch von anderen Hochschulen, sehen* und mit dem eigenen Ereignis verknüpfen.
*	Digitale Objekte zu eigenen Ereignissen hinzufügen und bearbeiten sowie löschen, falls sie von keiner anderen Benutzer:innen verwendet werden.
*	Als Referenz können außerdem folgende Tabellen angesehen und durchsucht werden, z. B.: Organisationseinheiten, Projektarten, Projektkategorien, Ereignistypen, Rollen, Informationsträgertypen, etc.

**Registrierte Benutzer:innen düfen im Erfassungsbackend nicht:**

*	Digitale Objekte von anderen Benutzer:innen sehen und verknüpfen.

**Registrierte Benutzer:innen düfen im Admin-Backend:**

*	Anderen Benutzer:innen erlauben seine Projekte, Ereignisse, Akteur:innen, Equipment, Physische Objekte und Informationsträger zu bearbeiten. Dies ermöglicht das kooperative Arbeiten bei Paar- oder Gruppenprojekten.

**Registrierte Benutzer:innen düfen im Admin-Backend nicht:**

*	Alle übrigen Operationen. 

<br/>

---

<br/>

**English**:

**Simple Registered Users**  
*For the time being, this refers to university users from consortium universities!*


**Simple Registered Users in the Ingest Backend are permitted to:**

* Create Projects for the university.
* View, edit and delete your own Projects if they have not been linked by anyone else.
* View Projects created by other users, including those from other universities (* at least the information that is intended for public viewing), and link them to your own Projects.
* Create Keywords and use existing Keywords.
* Create Events, edit your own Events and delete them if they are not used by any other users.
* View Events created by other users, including those from other universities, and link them to your Project.
* Create Actors, edit your own Actors and delete them if they are not used by any other users.
* Create Equipment and Equipment Types, edit your own equipment and delete it if it is not used by any other user.
* View Equipment from other users, including those from other universities, and link it to your Project.
* Create Physical Objects, edit their own Physical Objects and delete them if they are not used by any other user.
* View* Physical Objects belonging to other users, including those from other universities, and link them to their own event.
* Create Information Carriers, edit their own Information Carriers and delete them if they are not used by any other user.
* View Information Carriers from other users, including those from other universities, and link them to your own event.
* Add and edit Digital Objects to your own events and delete them if they are not used by any other users.
* The following tables can also be viewed and searched for reference, e.g.: Organisational Units, Project Types, Project Categories, Event Types, Roles, Information Storage Medium Type, etc.

**Simple Registered Users in the Ingest Backend are not permitted to:**

* Viewing and linking Digital Objects from other users.

**Simple Registered Users in the Admin Backend are permitted to:**

* Allow other users to edit their Projects, Events, Actors, Equipment, Physical Objects and Information Carriers. This enables collaborative work on pair or group projects.

**Simple Registered Users in the Admin Backend are not permitted to:**

* All other operations.

<br/>
<br/>

---

<br/>
<br/>

## Mediendokumentar:in
`Media Documentarian`

<br/>

---

<br/>

**Deutsch:**

**Mediendokumentar:innen düfen im Erfassungsbackend:**

*	Alles, was einfache aregistrierte Benutzer:innen auch dürfen und außerdem:
*	Projekte der eigenen Hochschule sehen, bearbeiten und löschen, *  falls diese nicht hochschulextern verknüpft wurden.
*	Ereignisse der eigenen Hochschule sehen, bearbeiten und löschen*.
*	Akteur:innen der eigenen Hochschule sehen, bearbeiten und löschen*.
*	Equipment der eigenen Hochschule sehen, bearbeiten und löschen.*
*	Physische Objekte der eigenen Hochschule sehen, bearbeiten und löschen.*
*	Informationsträger der eigenen Hochschule sehen, bearbeiten und löschen.*
*	Digitale Objekte der eigenen Hochschule an hochschuleigene Ereignisse knüpfen.

**Mediendokumentar:innen düfen im Erfassungsbackend nicht:**

*	Hochschulexterne Daten bearbeiten oder löschen. Mediendokumentar:innen haben aber die Möglichkeit, die Bearbeitung der entsprechenden Datensätze mit anderen Mediendokumentar:innen zu teilen.

**Mediendokumentar:innen düfen im Admin-Backend:**

*	Alles, was einfache registrierte Benutzer:innen auch dürfen und außerdem:
*	Rollen anlegen und bearbeiten.
*	Ereignistypen anlegen und bearbeiten.
*	Projektkategorien anlegen und bearbeiten.
*	Informationsträgertypen anlegen und bearbeiten.
*	Produkt-ID-Typen anlegen und bearbeiten.
*	Eigenschafts-Felder für die Entitäten Projekt, Ereignis und Informationsträger anlegen und bearbeiten, falls es dieses Feld nicht verwendet wird.

**Mediendokumentar:innen düfen im Admin-Backend nicht:**

*	Bestehende Lizenzverträge und Digitale-Objekt-Lizenzen anlegen, bearbeiten oder gar löschen.
*	Einliefernde Hochschulen anlegen, bearbeiten oder löschen.
*	Projektarten anlegen, bearbeiten oder löschen.
*	Sprachen anlegen, bearbeiten oder löschen.
*	Hochschulinterne Projekte an die öffentliche Webseite und an die LZV.nrw übertragen.
*	Digitale Objekte an Benutzer:innen der Hochschule oder hochschulexterne Benutzer:innen über die öffentliche Webseite freigeben.
*	Andere Benutzer:innen zu Mediendokumentar:innen ernennen.
*	Projekte über den Universalimporter importieren.


<br/>

---

<br/>

**English:**

**Media Documentarians in the Ingest Backend are permitted to:**

* Everything that Simple Registered Users are also permitted to do, plus:
* View, edit and delete Projects from their own university, * provided these have not been linked to external institutions.
* View, edit and delete Events at their own university*.
* View, edit and delete Actors at their own university*.
* View, edit and delete Equipment at their own university.*
* View, edit and delete Physical Objects at their own university.*
* View, edit and delete Information Carriers at their own university.*
* Link Digital Objects from your own university to university events.

**Media Documentarians in the Ingest Backend are not permitted to:**

* Edit or delete data external to the university. However, Media Documentarians have the option of sharing the editing of the relevant data records with other Media Documentarians.

**Media Documentarians in the Admin Backend are permitted to:**

* Everything that Simple Registered Users are also permitted to do, plus:
* Create and edit Roles.
* Create and edit Event Types.
* Create and edit Project Categories.
* Create and edit Information Storage Medium Type.
* Create and edit Product ID Types.
* Create and edit property fields for the entities project, event and information carrier, if this field is not used.

**Media Documentarians in the Admin Backend are not permitted to:**

* Create, edit or even delete existing Licence Agreements and Digital Object Licences.
* Create, edit or delete Depositing University.
* Create, edit or delete Project Types.
* Create, edit or delete Languages.
* Transfer internal university projects to the public website and to LZV.nrw.
* Release Digital Objects to users at the university or external users via the public website.
* Appoint other users as Media Documentarians.
* Import Projects via the universal importer.

<br/>
<br/>

---

<br/>
<br/>

## Manager:in
`Manager`

<br/>

---

<br/>

**Deutsch:**

**Manager:innen düfen im Erfassungsbackend:**

*	Alles, was Mediendokumentar:innen auch dürfen.

**Manager:innen düfen im Erfassungsbackend nicht:**

*	Hochschulexterne Daten bearbeiten oder löschen. Manager:innen haben aber die Möglichkeit, die Bearbeitung der entsprechenden Datensätze mit anderen Manager:innen oder Mediendokumentar:innen zu teilen.

**Manager:innen düfen im Admin-Backend:**

*	Alles, was Mediendokumentar:innen auch dürfen und außerdem:
*	Rollen löschen, falls diese nicht verwendet werden.
*	Ereignistypen löschen, falls diese nicht verwendet werden.
*	Projektkategorien löschen, falls diese nicht verwendet werden.
*	Informationsträgertypen löschen, falls diese nicht verwendet werden.
*	Produkt-ID-Typen löschen, falls diese nicht verwendet werden. 
*	Eigenschafts-Felder in den Entitäten Projekt, Ereignis und Informationsträger löschen, falls diese nicht verwendet werden.
*	Projektarten anlegen, bearbeiten und löschen, falls diese nicht verwendet werden.
*	Bestehende Lizenzverträge und Digitale-Objekt-Lizenzen anlegen und bearbeiten.
*	Hochschulinterne Projekte an die öffentliche Webseite und an die LZV.nrw übertragen.
*	Digitale Objekte an Benutzer:innen der Hochschule oder hochschulexterne Benutzer:innen über die öffentliche Webseite freigeben.
*	Andere Benutzer:innen zu Mediendokumentar:innen er- und entnennen.
*	Projekte über den Universalimporter importieren.

**Manager:innen düfen im Admin-Backend nicht:**

*	Bestehende Lizenzverträge und Digitale-Objekt-Lizenzen löschen.
*	Einliefernde Hochschulen anlegen, bearbeiten oder löschen.
*	Sprachen anlegen, bearbeiten oder löschen.
*	Benutzer:innen für die Hochschule anlegen.
*	Andere Benutzer:innen zu Manager:innen ernennen.

<br/>

---

<br/>

**English:**

**Managers in the Ingest Backend are permitted to:**

* Everything that Media Documentarians are also permitted to do.

**Managers in the Ingest Backend are not permitted to:**

* Editing or deleting data from outside the university. However, Managers have the option of sharing the editing of the relevant data records with other Managers or Media Documentarians.

**Managers in the Admin Backend are permitted to:**

* Everything that Media Documentarians are also permitted to do, plus:
* Delete Roles if they are not used.
* Delete Event Types if they are not used.
* Delete Project Categories if they are not used.
* Delete Information Storage Medium Type if they are not used.
* Delete Product ID Types if they are not used.
* Delete property fields in the Project, Event and Information Carrier entities if they are not used.
* Create, edit and delete Project Types if they are not used.
* Create and edit existing Licence Agreements and Digital Object Licences.
* Transfer internal university projects to the public website and to LZV.nrw.
* Share Digital Objects with university users or external users via the public website.
* Appoint and remove other users as Media Documentarians.
* Import projects via the universal importer.

**Managers in the Admin Backend are not permitted to:**

* Deleting existing Licence Agreements and Digital Object Licences.
* Creating, editing or deleting Depositing University.
* Creating, editing or deleting Languages.
* Creating users for the university.
* Appointing other users as Managers.

<br/>
<br/>

---

<br/>
<br/>


## Supermanager:in (Hochschul-IT)
`Super Manager (University IT)`

<br/>

---

<br/>

**Deutsch:**

**Supermanager:innen düfen im Erfassungsbackend:**

*	Alles, was einfache registrierte Benutzer:innen auch dürfen.

**Super,anager:innen düfen im Erfassungsbackend nicht:**

*	Was Mediendokumentar:innen und Manager:innen dürfen.

**Supermanager:innen düfen im Admin-Backend:**

*	Alles, was einfache registrierte Benutzer:innen auch dürfen und außerdem:
*	Benutzer:innen für ihre Hochschule anlegen und löschen.
*	Benutzer:innen ihrer Hochschule zu Manager:innen oder Mediendokumentar:innen er- und entnennen.

**Supermanager:innen düfen im Admin-Backend nicht:**

*	Alle übrigen Operationen.

<br/>

---

<br/>

**English:**

**Super Managers in the Ingest Backend are permitted to:**

* Everything that Simple Registered Users are also allowed to do.

**Super Managers in the Ingest Backend are not permitted to:**

* What Media Documentarians and Managers are allowed to do.

**Super Managers in the Ingest Backend are permitted to:**

* Everything that Simple Registered Users are also allowed to do, plus:
* Create and delete users for their university.
* Appoint and dismiss users at their university as Managers or Media Documentarians.

**Super Managers in the Ingest Backend are not permitted to:**

* All other operations.

<br/>
<br/>

---

<br/>
<br/>

## Technische Administrator:innen (Zentrale IT)
`Technical Administrators (Central IT)`

<br/>

---

<br/>

**Deutsch:**

**Technische Administrator:innen düfen im Erfassungsbackend:**

*	Aus technischen Gründen: Alles, auch über Hochschulgrenzen hinweg.

**Technische Administrator:innen düfen im Admin-Backend:**

*	Aus technischen Gründen: Alles, auch über Hochschulgrenzen hinweg.

<br/>

---

<br/>

**English:**

**Technical Administrators in the Ingest Backend are permitted to:**

* For technical reasons: Everything, even beyond university boundaries.

**Technical Administrators in the Admin Backend are permitted to:**

* For technical reasons: Everything, even beyond university boundaries.