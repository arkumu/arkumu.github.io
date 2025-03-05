# arkumu-Docs

arkumu-Docs ist die öffentliche Dokumentation des [Digitale Hochschule](https://www.dh.nrw/)-Konsortialprojekts "arkumu.nrw".
Die veröffentlichte Webseite ist unter <https://docs.arkumu.nrw/> erreichbar.

arkumu-Docs is the public documentation page of the [Digitale Hochschule](https://www.dh.nrw/) consortial project "arkumu.nrw".
The published website is available at <https://docs.arkumu.nrw/>.

----

## Inhaltsverzeichnis | Table of Contents

1. [Basis-Konzepte | Basic Concepts](#basis-konzepte--basic-concepts)
2. [Struktur | Structure](#struktur--structure)

----

## Basis-Konzepte | Basic Concepts

arkumu-Docs ist eine leichtgewichtige [Jekyll](https://jekyllrb.com/)-Umgebung, die dazu optimiert wurde von einer Person oder von einer kleinen Gruppe von Personen gepflegt und gewartet zu werden. Digi-Kunst-Docs.nrw baut auf dem mitausgelieferten [Minima-Design 2.5](https://github.com/jekyll/minima/blob/v2.5.0/README.md) auf und verwendet externe wie eigene Open-Source-Komponenten, um seine Funktionalitäten bereitzustellen. Zum erstellen erstellen neuer Webseiten und Webinhalte wird Markdown verwendet, es sind also keine Programmierkenttnisse vonnöten. Lediglich für die technische Wartung sind sie empfholen. Allerdings enthält der Source-Code an zentralen Stellen Kommentare und Erweiterungsmöglichkeiten, sodass viele Arbeiten auch im allgemeinen Betrieb durchgeführt werden können.

arkumu-Docs is a lightweight [Jekyll](https://jekyllrb.com/) environment optimized to be hosted and maintained by one person or a small group of people. Digi-Kunst-Docs.nrw is based on the included [Minima Design 2.5](https://github.com/jekyll/minima/blob/v2.5.0/README.md), and uses external and custom open source components to provide its functionality. Markdown is used for creating new pages and content, so no prior programming knowledge is required. It is only recommended for technical maintenance. However, the source code contains comments and extension options at key points, so that many tasks can also be carried out in general operation.

----

## Struktur | Structure

* **.github/workflows:** arkumu-Docs verwendet einen einstellbaren Build-Prozess via [GitHub Actions](https://github.com/features/actions). In der beigefügten jekyll.yml kann dieser Build-Prozess gesteuert werden. | arkumu-Docs uses a customizable build process via [GitHub Actions](https://github.com/features/actions). This build process can be controlled in the attached jekyll.yml.

* **_includes:** Dieser Ordner enthält Komponenten, die die [Liquid-Template-Sprache](https://shopify.github.io/liquid/basics/introduction/) verwenden. Diese Komponenten können in das Layout integriert werden. | This folder contains components that are using the [Liquid Template Language](https://shopify.github.io/liquid/basics/introduction/). These components can be integrated into the layout.

* **_layouts:** Enthält das HTML-Grundgerüst, in das das gerenderte Markdown eingebettet ist. | Contains the base HTML in which the rendered Markdown is embedded.

* **assets:** Hier finden sich Bilder für die Webseite, Dokumente, wie PDFs und Excel-Dateien, alle JavaScript-Komponenten sowie das Design-Stylesheet. | Images for the website, documents such as PDFs and Excel files, all JavaScript components and the design stylesheet can be found here.

* **resolver:** HTML-Seiten mit automatischer Weiterleitung (in einem minimalen arkumu-Docs-Design), die als URI-Resolver eingesetzt werden. | HTML pages with automatic forwarding (in a minimal arkumu-Docs design), which are used as URI resolvers.

* **projektstruktur, ressourcen, technische-dokumentation** Enthalten die meisten Seiten für die Website. Sobald ein neuer Ordner erstellt und eine index.markdown mit der entsprechenden Kopfzeile hinzugefügt wurde, wird dieser Ordner zu einem neuen Dropdown-Element in der Kopfzeile der Webseite, welches dann weitere Seiten enthalten kann. | Contain most of the pages for the website. As soon as a new folder has been created and an index.markdown with the corresponding front matter has been added, this folder becomes a new dropdown element in the header of the website, which then can contain further pages.

* **404.html:** Die Fehlerseite der Webpage. | The error site of the webpage.

* **CNAME:** DNS-Weiterleitung von <https://www.digi-kunst.nrw> nach <https://docs.digi-kunst.nrw>. Dieses Feature wird entfernt werden, sobald die Hauptseite verfügbar ist. | DNS forwarding from <https://www.digi-kunst.nrw> to <https://docs.digi-kunst.nrw>. This feature will be removed as soon as the main page is available.

* **Gemfile & _config.yml:** Zentrale Dateien zur Steuerung des Kerns der Webseite. Hier finden sich vorallem alle hinzugefügten Plugins. | Central files for controlling the core of the website. All added plugins can be found and managed here.

* **impressum.markdown:** Unsere Impressums-Seite. | Our about page.

* **index.markdown:** Die Startseite der Webseite. | The front page of the website.

* **search.json:** Eine Liquid-Komponente, die beim Build ein JSON-Objekt erzeugt, das die Suche speist. | A Liquid component that generates a JSON object during the build that is our base for the search.
