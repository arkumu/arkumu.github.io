---
layout: arkumu-docs
title: Infrastruktur
order: 3.3
permalink: /documentation/infrastructure/
---

```Infrastructure```

<br/>

Dieses im Vorprojekt entwickelte Strukturdiagramm veranschaulicht den logischen Aufbau der Projektinfrastruktur und zeigt die Zusammenhänge von Systemkomponenten, Nutzer:innen, angebundenen Diensten und externen Institutionen. In den folgenden Abschnitten werden die zentralen Einheiten dieses Modells kurz erklärt und ihre Funktionsweisen beschrieben.

[![arkumu.nrw-Strukturdiagramm Stand Juni 2025](/assets/images/2025-06-18_Strukturdiagramm.png 'Das Strukturdiagramm veranschaulicht den logischen Aufbau der intendierten Projektinfrastruktur')](/assets/images/2025-06-18_Strukturdiagramm.png)

[<svg class="download-icon" xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg> 2025-06-18_Strukturdiagramm.pdf](/assets/documents/2025-06-18_Strukturdiagramm.pdf) (50 KB)

----

## Web- und Arbeitsrepositorium

Das Web- und Arbeitsrepositorium, kurz Repositorium, ist der zentrale Knotenpunkt, an dem alle Daten und Dateien, die bei arkumu.nrw erfasst werden, zusammenlaufen, bearbeitet und angereichert werden können, und von dem aus sie weiterverarbeitet werden können. Das Repositorium stellt einen Daten- und Metadaten-Importer ebenso wie eine manuelle Erfassungsmaske zur Verfügung, liefert die Daten für das öffentliche Web-Portal und bietet eine OAI-PMH Schnittstelle für Rosetta, die Langzeitverfügbarkeits-Lösung des [hbz](https://www.hbz-nrw.de/). 

Das Projekt arkumu.nrw sollte ursprünglich dafür das speziell für die Archivierung von audio-visuellen Kulturarchivalien entwickelte Repositoriumssystem [KA³](https://ka3.uni-koeln.de/) nutzen. Das ITCC der Uni Köln hat aber aufgrund gestiegener Anforderungen erst eine eigene Softwarelösung auf Basis von Grails entwickelt, und diese 2025 noch einmal verworfen und neu und auf Basis von Django programmiert.

Diese Django-App wird vom ITCC weiter entwickelt werden. Der Code und die technische Dokumentation werden auf git.nrw gehostet, zu dem bei Bedarf das ITTC Zugang geben kann. Eine Kopie des Codes ist ohne Beschränkungen zusätzlich auf [GitHub](https://github.com/arkumu/arkumu-app) zugänglich. Fragen und Anregungen nimmt das ITCC über das [Kontaktformular](https://itcc.uni-koeln.de/das-itcc/kontakt/itcc-helpdesk) oder die dort hinterlegte Email-Adresse entgegen.

----

## Importer und Erfassungs-Maske

Diese bilden einen Teil der Funktionen des Repositoriums, siehe oben. Über diese können neue [Projekte](/resources/entitaeten-und-attribute-des-datenmodells.html#zentrale-entitäten-projekt-und-ereignis) angelegt und verwaltet werden. Sie stehen allen Personen zur Verfügung, die mit der Einlieferung der Daten beauftragt sind. Neben dem Team der ersten Projektlaufzeit sind dies zunächst ausgewählte Personen an den Hochschulen. In Zukunft sollen Importer und Erfassungs-Maske via [Shibboleth](https://www.shibboleth.net/) auch für Lehrende und Studierende zugänglich sein.

Die mit der Einlieferung in dem Pre-Ingest beauftragten Personen einer Hochschule haben ausschließlich Zugang zu den von ihrer eigenen Hochschule eingelieferten Metadaten und Dateien. 

Auf Wunsch können ganze Projekt- und Akteur:innen-Datensätze als vertraulich markiert und damit gesperrt werden. Sie sind dann nur nicht mehr für alle Einliefernden einer Hochschule sondern noch für Benutzende der Rollen „Manager:in“ oder höher zugänglich.

----

## Admin-Backend

Das Admin-Backend (ein privilegierter Zugang zum Repositorium erlaubt die Verwaltung kontrollierter Vokabulare und Taxonomien sowie von Rechte- und Lizenzangaben für Projekte und [Digitale Objekte](/resources/entitaeten-und-attribute-des-datenmodells.html#ereignis-digitale-objekte) in der Erfassungs-Maske. Zudem können vom Admin-Backend aus alle zentralen Arbeitsschritte zur Überführung in die Langzeitverfügbarkeit und zum Web-Portal geplant und durchgeführt werden. Der Zugriff auf das Admin-Backend ist auf die Projektleitung und Benutzende der Rollen „Manager:in“ oder höher beschränkt. Bis zum Ende der ersten Projektlaufzeit 2025 haben zusätzlich die Mediendokumentar:innen Zugang.


----


## S3-Speicher

Sämtliche Dateien werden vom Repositorium auf den vom ITCC betriebenen S3-Speicher von DataStorage.nrw (ehemals RDS.nrw) hochgeladen. Nach dem Hochladen werden eine Reihe technischer Metadaten aus den Dateien ausgelesen. Diese ausgelesenen Metadaten werden dann gemeinsam mit den in Importer bzw. Erfassungs-Maske eingegebenen Informationen in einer [relationalen Datenbank](https://www.ibm.com/de-de/topics/relational-databases) gespeichert. Damit einzelne Datensätze identifizierbar bleiben, werden sie mit [Persistenten Identifikatoren](/resources/entitaeten-und-attribute-des-datenmodells.html#projekt-identifikatoren-und-normdaten) versehen. 

Alle Dateien befinden sich bis zum Transfer in das hbz auf dem S3-Speicher. Dateien, die nicht für die Veröffentlichung bestimmt sind, werden danach gelöscht. Gegebenenfalls erstellte Nutzerkopien (wie Bilder und Audioformate fürs Web) und Originaldateien, die direkt veröffentlicht werden sollen, verbleiben auf diesem Speicher.

----

## Transfer in das Dark Archive des hbz

Das Web- und Arbeitsrepositorium produziert aus den erfassten Dateien und Metadaten in sich abgeschlossene Daten-Pakete im METS-Format, die alle nötigen Informationen enthalten, die zur Einlieferung der Dateien in die Langzeitverfügbarkeits-Lösung des [hbz](https://www.hbz-nrw.de/) benötigt werden.  

Nach dem Transfer in den Speicher des hbz werden Dateien, die nicht veröffentlicht werden sollen, aus dem S3-Speicher gelöscht. Sie befinden dann nur noch im sogenannten Dark Archive und unter alleiniger Kontrolle der einliefernden Hochschule. Siehe die Informationsseiten des [hbz](https://service-wiki.hbz-nrw.de/spaces/LLZV/pages/565936255/Glossar+wichtiger+Begriffe+f%C3%BCr+die+Langzeitverf%C3%BCgbarkeit#GlossarwichtigerBegriffef%C3%BCrdieLangzeitverf%C3%BCgbarkeit-DarkArchiveDarkArchive) zum Dark Archive.

Es ist möglich, alternativ Dateien ohne den Umweg über den S3-Speicher direkt an das hbz zu liefern. Das hbz stellt dafür nach Absprache einen Zugang zum I/O-Server des Rosetta-Systems zur Verfügung.

----

## Rosetta-System

Über das Backend zum vom hbz betriebenen [Rosetta-System](https://www.lzv.nrw/ueber-lzv/wie-funktioniert-lzv) kann die Hochschule auf ihr „Dark Archive“ zugreifen und Erhaltungsmaßnahmen zu ihren digitalen Daten planen und durchführen. Bei Bedarf können alle eingelieferten Daten auch wieder exportiert werden. Weitere Informationen zu diesen Prozessen finden sich im [Wiki der LZV.nrw](https://service-wiki.hbz-nrw.de/spaces/LLZV/pages/556499219/Landesweite+LZV+-+Das+Service-Wiki+zur+digitalen+Langzeitverf%C3%BCgbarkeit). Gegen Ende der dreijährigen Projektlaufzeit wurden ausgewählte Personen aus den Partnerhochschulen im Rahmen eines Onboardings in die Benutzung von Rosetta eingeführt. Auf internen Seiten des hbz-Service Wikis, die auch für zukünftige Benutzende der einzelnen Hochschulen freigeschaltet werden können, ist der Prozess des Onboardings und der Einlieferung im Detail langfristig dokumentiert.
 
----

## Web-Portal

Auf der öffentlichen Webseite, dem [Web-Portal](/resources/a-bis-z.html#web-portal), können die Meta- und Mediendaten von arkumu.nrw durchsucht und angesehen werden. Die meisten Medien sind nicht abrufbar, da die einliefernden Hochschulen für in der Vergangenheit liegende studentische Projekte nicht die Möglichkeit hatten, die dafür nötigen Nutzungsrechte von den Rechtinhaber:innen, den Absolvent:innen, einzuholen. Manche Medien werden erst nach einem Log-In und/oder nach vorheriger Anfrage einsehbar sein. Metadaten sind grundsätzlich (sofern möglich und nicht anderweitig entschieden wurde) frei verfügbar und können in mehreren Standard-Formaten heruntergeladen oder über Schnittstellen abgerufen werden. Alle Datensätze sind über persistente Identifier zitierbar und es ist immer ersichtlich, wann sie zuletzt geändert wurden.