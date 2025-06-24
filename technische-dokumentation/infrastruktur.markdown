---
layout: arkumu-docs
title: Infrastruktur
order: 3.3
---

Dieses im Vorprojekt entwickelte Strukturdiagramm veranschaulicht den logischen Aufbau der Projektinfrastruktur und zeigt die Zusammenhänge von Systemkomponenten, Nutzer:innen, angebundenen Diensten und externen Institutionen. In den folgenden Abschnitten werden die zentralen Einheiten dieses Modells kurz erklärt und ihre zentralen Funktionsweisen beschrieben.

[![arkumu.nrw-Strukturdiagramm Stand Juni 2025](/assets/images/2025-06-18_Strukturdiagramm.png 'Das Strukturdiagramm veranschaulicht den logischen Aufbau der intendierten Projektinfrastruktur')](/assets/images/2025-06-18_Strukturdiagramm.png)

[<svg class="download-icon" xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg> 2025-06-18_Strukturdiagramm.pdf](/assets/documents/2025-06-18_Strukturdiagramm.pdf) (50 KB)

----

## Importer und Erfassungs-Maske

Über den Importer oder die Erfassungs-Maske können neue [Projekte](/ressourcen/entitaeten-und-attribute-des-datenmodells.html#zentrale-entitäten-projekt-und-ereignis) angelegt und verwaltet werden. Sie stehen allen Personen zur Verfügung, die mit der Einlieferung und dem [Pre-Ingest](/ressourcen/a-bis-z.html#daten-staging) der Daten beauftragt sind. Neben der [Projektleitung](/projektstruktur/team.html#gesamtprojektleitung) und den [Mediendokumentar:innen](/projektstruktur/team.html#mediendokumentarinnen) sind dies zunächst ausgewählte Personen an den Hochschulen. In Zukunft sollen Importer und Erfassungs-Maske via [Shibboleth](https://www.shibboleth.net/) auch für Lehrende und Studierende zugänglich sein.

Die mit der Einlieferung in dem Pre-Ingest beauftragten Personen einer Hochschule haben ausschließlich Zugang zu den von ihrer eigenen Hochschule eingelieferten Metadaten und Dateien. 

Auf Wunsch können ganze Projekt- und Akteur:innen-Datensätze als vertraulich markiert und damit gesperrt werden. Sie sind dann nur nicht mehr für alle Einliefernden einer Hochschule sondern noch für Benutzende der Rollen „Manager:in“ oder höher zugänglich.

----

## Admin-Backend

Das Admin-Backend (ein privilegierter Zugang zur Erfassungs-Maske) erlaubt die Verwaltung kontrollierter Vokabulare und Taxonomien sowie von Rechte- und Lizenzangaben für Projekte und [Digitale Objekte](/ressourcen/entitaeten-und-attribute-des-datenmodells.html#ereignis-digitale-objekte) in der Erfassungs-Maske. Zudem können vom Admin-Backend aus alle zentralen Arbeitsschritte zur Überführung in die Langzeitverfügbarkeit und zum Web-Portal geplant und durchgeführt werden. Der Zugriff auf das Admin-Backend ist auf die Projektleitung und Benutzende der Rollen „Manager:in“ oder höher beschränkt. Bis zum Ende der ersten Projektlaufzeit 2025 haben zusätzlich die die Mediendokumentar:innen Zugang.


----

## Web- und Arbeitsrepositorium

Das Web- und Arbeitsrepositorium ist der zentrale Knotenpunkt, an dem alle Daten und Dateien, die bei arkumu.nrw erfasst werden, zusammenlaufen und von dem aus sie weiterverarbeitet werden können. arkumu.nrw sollte ursprünglich dafür das speziell für die Archivierung von audio-visuellen Kulturarchivalien entwickelte Repositoriumssystem [KA³](https://ka3.uni-koeln.de/) nutzen, hat aber im Lauf der Projektlaufzeit aufgrund gestiegener Anforderungen eine eigene Softwarelösung entwickelt. Das Web- und Arbeitsrepositorium liefert die Daten für das öffentliche Web-Portal und ist über eine Schnittstelle an die Langzeitverfügbarkeits-Lösung des [hbz](https://www.hbz-nrw.de/) angebunden.

----


## S3-Speicher

Sämtliche Dateien werden direkt auf den vom [ITCC](/projektstruktur/team#entwicklungs-team) betriebenen S3-Speicher von DataStorage.nrw (ehemals RDS.nrw) hochgeladen. Nach dem Hochladen werden eine Reihe technischer Metadaten aus den Dateien ausgelesen. Diese ausgelesenen Metadaten werden dann gemeinsam mit den in Importer bzw. Erfassungs-Maske eingegebenen Informationen in einer [relationalen Datenbank](https://www.ibm.com/de-de/topics/relational-databases) gespeichert. Damit einzelne Datensätze identifizierbar bleiben, werden sie mit [Persistenten Identifikatoren](https://projects.tib.eu/pid-service/persistent-identifiers/persistent-identifiers-pids/) versehen. 

Alle Dateien befinden sich bis zum Transfer in den Speicher des hbz auf dem S3-Speicher. Dateien, die nicht für die Veröffentlichung bestimmt sind, werden danach gelöscht. Gegebenenfalls erstellte Nutzerkopien (wie herunter skalierte Bilder und Audioformate fürs Web) und Originaldateien, die direkt veröffentlicht werden sollen, verbleiben auf diesem Speicher.

----

## Transfer in das Dark Archive des hbz

Das Web- und Arbeitsrepositorium produziert aus den erfassten Dateien und Metadaten in sich abgeschlossene Daten-Pakete („SIPs“ nach dem  [OAIS-Referenzmodell](https://docs.nfdi4culture.de/ta4-digital-preservation-basics/4-forschungsdaten-im-digitalen-langzeitarchiv/4-1-das-oais-modell)), die alle nötigen Informationen enthalten, die zur Einlieferung der Dateien in die Langzeitverfügbarkeits-Lösung des [hbz](https://www.hbz-nrw.de/) benötigt werden.  

Nach dem Transfer in den Speicher des hbz werden Dateien, die nicht veröffentlicht werden sollen, aus dem S3-Speicher gelöscht. Sie befinden dann nur noch im sogenannten Dark Archive und unter alleiniger Kontrolle der einliefernden Hochschule. Siehe die Informationsseiten des [hbz](https://service-wiki.hbz-nrw.de/spaces/LLZV/pages/565936255/Glossar+wichtiger+Begriffe+f%C3%BCr+die+Langzeitverf%C3%BCgbarkeit#GlossarwichtigerBegriffef%C3%BCrdieLangzeitverf%C3%BCgbarkeit-DarkArchiveDarkArchive) zum Dark Archive.

----

## Rosetta-Backend

Über das vom hbz betriebene [Rosetta-Backend](https://www.lzv.nrw/ueber-lzv/wie-funktioniert-lzv) kann die Hochschule auf ihr „Dark Archive“ zugreifen und Erhaltungsmaßnahmen zu ihren digitalen Daten planen und durchführen. Bei Bedarf können alle eingelieferten Daten auch wieder exportiert werden. Weitere Informationen zu diesen Prozessen finden sich im [Wiki der LZV.nrw](https://service-wiki.hbz-nrw.de/display/LLZV/Landesweite+LZV+-+Willkommen).
 
----

## Web-Portal

Auf der öffentlichen Webseite, dem [Web-Portal](/ressourcen/a-bis-z.html#web-portal), können die Meta- und Mediendaten von arkumu.nrw durchsucht und angesehen werden. Manche werden erst nach einem Log-In und/oder nach vorheriger Anfrage einsehbar sein. Metadaten sind grundsätzlich (sofern möglich und nicht anderweitig entschieden wurde) frei verfügbar und können in mehreren Standard-Formaten heruntergeladen oder über Schnittstellen abgerufen werden. Alle Datensätze sind über persistente Identifier zitierbar und es ist immer ersichtlich, wann sie zuletzt geändert wurden. So ist erkennbar, mit welcher Version des Datensatzes gerade gearbeitet wird.