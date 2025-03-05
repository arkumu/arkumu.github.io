---
layout: digi-kunst-docs
title: Infrastruktur
order: 3.3
---

Dieses Strukturdiagramm veranschaulicht den logischen Aufbau der derzeitigen Projektinfrastruktur und zeigt die Zusammenhänge von Systemkomponenten, Nutzer:innen, angebundenen Diensten und externen Institutionen. In den folgenden Abschnitten werden die zentralen Einheiten dieses Modells kurz erklärt und ihre zentralen Funktionsweisen beschrieben.

[![Digi-Kunst-Strukturdiagramm Stand Juli 2024](/assets/images/2024-07-03_Strukturdiagramm.png 'Das Strukturdiagramm veranschaulicht den logischen Aufbau der intendierten Projektinfrastruktur')](/assets/images/2024-07-03_Strukturdiagramm.png)

[<svg class="download-icon" xmlns="https://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"/></svg> 2024-07-03_Strukturdiagramm.pdf](/assets/documents/2024-07-03_Strukturdiagramm.pdf) (50 KB)\
<sub>Stand 3. Juli 2024</sub>

----

## Erfassungs-Backend

Im Erfassungs-Backend können neue [Projekte](/ressourcen/entitaeten_und_attribute_des_datenmodells.html#zentrale-entitäten-projekt-und-ereignis) angelegt und bereits bestehende Projekte verwaltet werden. Das Erfassungs-Backend steht allen einliefernden Personen zur Verfügung. Das sind, neben der [Projektleitung](/projektstruktur/team.html#gesamtprojektleitung) und den [Mediendokumentar:innen](/projektstruktur/team.html#mediendokumentarinnen), zunächst ausgewählte Personen an den Hochschulen. In Zukunft soll dieses Backend aber, via [Shibboleth](https://www.shibboleth.net/), auch für Lehrende und Studierende zugänglich sein.

----

## Admin-Backend

Das Admin-Backend umfasst die Verwaltung bestimmter kontrollierter Vokabulare und Taxonomien sowie die Verwaltung von zuweisbaren Rechte- und Lizenzangaben für Projekte und [Digitale Objekte](/ressourcen/entitaeten_und_attribute_des_datenmodells.html#ereignis-digitale-objekte) im Erfassungs-Backend. Zudem können vom Admin-Portal aus alle zentralen Arbeitsschritte zur Überführung in die Langzeitverfügbarkeit (LZV) und zur öffentlichen Webpräsenz geplant und durchgeführt werden. Der Zugriff auf das Admin-Backend ist, je nachdem, was dort verwaltet werden muss, auf die Mediendokumentar:innen und/oder die Projektleitung beschränkt.

----

## Staging-Speicher

Die hochgeladenen Dateien werden zunächst in einem Staging-Speicher gespeichert. Dabei wird darauf geachtet, dass die Dateien auch vollständig hochgeladen wurden. Dort angekommen wird jede Datei mit einer Prüfsumme versehen, sodass spätere Änderungen an ihr im Erhaltungsprozess erkennbar werden. Auch werden eine Reihe technischer Informationen aus den Dateien ausgelesen. Diese ausgelesen Daten werden dann gemeinsam mit den im Erfassungs-Backend eingegebenen Informationen in einer [relationalen Datenbank](https://www.ibm.com/de-de/topics/relational-databases) gespeichert. Damit einzelne Datensätze in- und außerhalb von Digi-Kunst.nrw identifizierbar sind, werden sie mit [Handles](https://www.handle.net/) versehen. Es ist vorgesehen, auch noch weitere digitale Identifikatoren vergeben zu können, zum Beispiel [DOIs](https://www.doi.org/). Sind alle Dateien und Informationen vollständig vorhanden, kann ein Paket erzeugt werden, das für die Langzeitverfügbarkeit geeignet ist. Dieses Paket wird dann in das Web- und Arbeitsrepositorium eingeliefert.

----

## Web- und Arbeitsrepositorium KA³

Das Web- und Arbeitsrepositorium ist der zentrale Knotenpunkt, an dem alle Daten und Dateien, die bei Digi-Kunst.nrw erfasst werden, zusammenlaufen und von dem aus sie auch weiterverarbeitet werden können. Für diesen Workload benutzt Digi-Kunst.nrw das speziell für die Archivierung von audio-visuellen Kulturarchivalien entwickelte Repositoriumssystem [KA³](https://ka3.uni-koeln.de/). KA³ liefert die Daten für die öffentliche Webseite und ist über eine Schnittstelle zu den Strukturen der Langzeitverfügbarkeit im [Hochschulbibliothekszentrum NRW](https://www.hbz-nrw.de/) angebunden.

----

## Speicher der Langzeitverfügbarkeit NRW

Das erstellte Daten-Paket enthält alle nötigen Informationen, die zur Einlieferung der Dateien in die Langzeitverfügbarkeit benötigt werden. Entsprechend kann das Paket von KA³ an den Speicher der [Landesinitiative Langzeitverfügbarkeit](https://www.lzv.nrw/) gesendet werden. Digi-Kunst.nrw ist in dieser Funktion also ein sogenannter „SIP(Submission Information Package)-Produzent“ für die Hochschulen, wenn man das Portal in den Lanzeitarchivierungsprozess nach dem Referenzmodell [OAIS](https://www.forschungsdaten.org/index.php/OAIS) einordnet. Die LZV übernimmt dann die Sicherung der digitalen Originale (der sogenannten „Preservation Masters“). Dies funktioniert sogar bei Dateien, die beispielsweise verschlüsselt, beschädigt oder keinem Dateiformat mehr zuzuordnen sind. Durch die Speicherung im Bitstream aus Nullen und Einsen können diese Dateien zumindest erhalten werden, ebenso wie die dazugehörigen Metadaten.

----

## Rosetta-Backend

Über das [Rosetta-Backend](https://www.lzv.nrw/ueber-lzv/wie-funktioniert-lzv), welches von der Landesinitiative Langzeitverfügbarkeit bereitgestellt wird, kann die Hochschule dann die Erhaltungsmaßnahmen ihrer digitalen Daten planen und durchführen. Bei Bedarf können die dort eingelieferten Daten auch wieder exportiert werden. Weitere Informationen zu diesen Prozessen finden sich im [Wiki der LZV](https://service-wiki.hbz-nrw.de/display/LLZV/Landesweite+LZV+-+Willkommen).
 
----

## Frontend/öffentliche Webseite

Auf der öffentlichen Webseite können die Meta- und Mediendaten von Digi-Kunst.nrw durchsucht und angesehen werden. Manche werden erst nach einem Log-In und/oder nach vorheriger Anfrage einsehbar sein. Die Metadaten sind jedoch (sofern möglich) frei verfügbar und können in mehreren Standard-Formaten heruntergeladen oder über Schnittstellen abgerufen werden. Alle Datensätze sind über feste Identifier zitierbar und es ist immer ersichtlich, wann sie zuletzt geändert wurden. So ist erkennbar, mit welcher Version des Datensatzes gerade gearbeitet wird.