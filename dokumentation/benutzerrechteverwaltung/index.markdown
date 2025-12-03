---
layout: arkumu-docs
title: ❗ Benutzerrechteverwaltung
order: 5
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

## Benutzer:innengruppen des Erfassungsportals
```User Groups for the Ingest portal```

<br/>

---

<br/>

### Registrierte Nutzer:innen der Kunst- und Musikhochschulen im Konsortium
```Registered Users of Consortial Art and Music Universities```

<br/>

---

<br/>

**Deutsch:**

Registrierte Nutzer:innen sind alle Mitglieder:innen der beteiligten Kunst- und Musikhochschulen. Dazu gehören Studierende, Lehrende, wissenschaftliche und künstlerische Mitarbeiter:innen sowie alle anderen Mitglieder:innen, die an ihrer eigenen Universität über Shibboleth registriert sind (also grundsätzlich alle Nutzer:innen mit einer universitären E-Mail-Adresse).

**Registrierte Nutzer:innen können:**

* Projekte für ihre Hochschule erstellen, ihre eigenen Projekte bearbeiten und sie löschen, wenn sie nicht von jemand anderem verlinkt wurden.
* Projekte von anderen Nutzer:innen, auch von anderen Hochschulen, einsehen und mit den eigenen Projekten verknüpfen, wenn sie nicht auf privat gesetzt sind.
* Schlagworte erstellen und vorhandene Schlagworte verwenden.
* Ereignisse erstellen, ihre eigenen Ereignisse bearbeiten und sie löschen, wenn sie von keiner anderen Nutzer:in verwendet werden.
* Ereignisse von anderen Nutzern:innen, auch von anderen Hochschulen, einsehen und mit dem eigenen Projekt verknüpfen, wenn sie nicht auf privat gesetzt sind.
* Akteur:innn erstellen, ihre eigenen Akteur:innen zu bearbeiten und sie zu löschen, wenn sie nicht von anderen Nutzer:innen verwendet werden.
* Akteur:innen von anderen Nutzer:innen, auch von anderen Hochschulen, einsehen und mit den eigenen Ereignissen oder anderen Akteur:innen verknüpfen, wenn sie nicht auf privat gesetzt sind.
* Datensätze über Equipment und Software sowie Equipmentarten erstellen, ihre eigenen Equipment- und Software-Datensätze bearbeiten und sie löschen, wenn sie nicht von anderen Nutzer:innen verwendet werden.
* Equipment und Software sowie Equipmentarten von anderen Nutzer:innen, auch von anderen Hochschulen, einsehen und mit den eigenen Ereignissen verknüpfen.
* Physische Objekt-Datensätze erstellen, ihre eigenen bearbeiten und sie löschen, wenn sie nicht von einem anderen Benutzer verwendet werden.
* Physische Objekte von anderen Nutzern:innen, auch von anderen Hochschulen, einsehen und mit den eigenen Ereignissen verknüpfen.
* Datensätze für Informationsträger erstellen, ihre eigenen bearbeiten und sie löschen, wenn sie nicht von anderen Nutzer:innen verwendet werden.
* Informationsträger von anderen Nutzer:innen, auch von anderen Hochschulen, einsehen und mit der eigenen Veranstaltung verknüpfen.
* Digitale Objekte zu ihren eigenen Ereignissen hinzufügen, sie zu bearbeiten und sie löschen, wenn sie nicht von anderen Nutzer:innen verwendet werden.
* Folgende Dinge können ebenfalls eingesehen und durchsucht werden, z. B. Organisationseinheiten, Projektarten, Projektkategorien, Ereignistypen, Rollen, Informationsträgertypen usw.

**Registrierte Nutzer:innen dürfen nicht:**

* Digitale Objekte von anderen Nutzer:innen einsehen und verknüpfen.

<br/>

---

<br/>

**English**:

Registered users are all members of the participating art and music universities. This encompasses students, teaching staff, scientific ant artistic employees, as well as any other member that is registred at his home university via Shibboleth (this basically encompases any user with an university email adress).

**Registered Users can:**

* Create Projects for their university, edit their own Projects, and delete them if they have not been linked by anyone else.
* View Projects from other users, including from other universities, and link them to their own projects if they are not set to private.
* Create keywords and use existing keywords.
* Create Events, edit their own Events, and delete them if they are not used by any other user.
* View Events from other users, including from other universities, and link them to their Project if they are not set to private.
* Create Actors, edit their own Actors, and delete them if they are not used by another user.
* View Actors from other users, including from other universities, and link them to their Event or other Actors if they are not set to private.
* Create datasets about Equipment and Software, as well as Equipment Types, edit their own Equipment and Software datasets and delete them if they are not used by another user.
* View Equipment and Software, as well as Equipment Types, from other users, including from other universities, and link them to their own Event.
* Create Physical Object Datasets, edit their own, and delete them if they are not used by another user.
* View Physical Objects from other users, including from other universities, and link them to their own Event.
* Create Information Storage Medium Datasets, edit their own, and delete them if they are not used by another user.
* View Information Storage Mediums from other users, including from other universities, and link them to their own event.
* Add and edit Digital Objects to/at their own Events, and delete them if they are not used by another user.
* The following things can also be viewed and searched for reference, e.g. Organisational Units, Project Types, Project Categories, Event Types, Roles, Information Storage Medium Types, etc.

**Registered User aren't allowed to:**

* Link and view Digital Objects from other users.

<br/>

[<svg class="download-icon" xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>User_Rights_-_Registered_Users.pdf](/assets/documents/User_Rights_-_Registered_Users.pdf) (96,9 KB)<br/>
[<svg class="download-icon" xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg>NutzerInnenrechte_-_Registrierte_NutzerInnen.pdf](/assets/documents/NutzerInnenrechte_-_Registrierte_NutzerInnen.pdf) (97,8 KB)

<br/>

---

<br/>

### Mediendokumentar:innen
```Media Documentarians```

<br/>

---

<br/>

* Everything that Registered Users are also allowed to do and also:
* View and edit Projects from their own university, as well as delete them if they are not used by any other user than the one who created it.
* View and edit Events from their own university, as well as delete them if they are not used by any other user than the one who created it.
* View and edit Actors from their own university, as well as delete them if they are not used by any other user than the one who created it.
* View and edit Equipment and Software from their own university, as well as delete it if it is not used by any other user than the one who created it.
* View and edit Phyiscal Object from their own university, as well as delete them if they are not used by any other user than the one who created it.
* View and edit Information Storage Mediums from their own university, as well as delete them if they are not used by any other user than the one who created it.
* Connect Digital Objects from their own university to corresponding Events created by users of the University.