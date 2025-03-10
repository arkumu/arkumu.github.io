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

arkumu-Docs ist eine leichtgewichtige [Jekyll](https://jekyllrb.com/)-Umgebung, die dazu optimiert wurde von einer Person oder von einer kleinen Gruppe von Personen gepflegt und gewartet zu werden. arkumu-Docs.nrw baut auf dem mitausgelieferten [Minima-Design 2.5](https://github.com/jekyll/minima/blob/v2.5.0/README.md) auf und verwendet externe wie eigene Open-Source-Komponenten, um seine Funktionalitäten bereitzustellen. Zum erstellen neuer Webseiten und Webinhalte wird Markdown verwendet. Es sind also keine Programmierkenntnisse vonnöten. Lediglich für die technische Wartung sind sie empfholen. Allerdings enthält der Source-Code an zentralen Stellen Kommentare und Erweiterungsmöglichkeiten, sodass viele Arbeiten auch im allgemeinen Betrieb durchgeführt werden können.

arkumu-Docs is a lightweight [Jekyll](https://jekyllrb.com/) environment optimized to be hosted and maintained by one person or a small group of people. arkumu-Docs.nrw is based on the included [Minima Design 2.5](https://github.com/jekyll/minima/blob/v2.5.0/README.md), and uses external and custom open source components to provide its functionality. Markdown is used for creating new pages and content, so no prior programming knowledge is required. It is only recommended for technical maintenance. However, the source code contains comments and extension options at key points, so that many tasks can also be carried out in general operation.

----

## Struktur | Structure

* **.github/workflows:** arkumu-Docs verwendet einen einstellbaren Build-Prozess via [GitHub Actions](https://github.com/features/actions). In der beigefügten jekyll.yml kann dieser Build-Prozess gesteuert werden. | arkumu-Docs uses a customizable build process via [GitHub Actions](https://github.com/features/actions). This build process can be controlled in the attached jekyll.yml.

* **_includes:** Dieser Ordner enthält Komponenten, die die [Liquid-Template-Sprache](https://shopify.github.io/liquid/basics/introduction/) verwenden. Diese Komponenten können in das Layout integriert werden. | This folder contains components that are using the [Liquid Template Language](https://shopify.github.io/liquid/basics/introduction/). These components can be integrated into the layout.

* **_layouts:** Enthält das HTML-Grundgerüst, in das das gerenderte Markdown eingebettet ist. | Contains the base HTML in which the rendered Markdown is embedded.

* **assets:** Hier finden sich Bilder für die Webseite, Dokumente, wie PDFs und Excel-Dateien, alle JavaScript-Komponenten sowie das Design-Stylesheet. | Images for the website, documents such as PDFs and Excel files, all JavaScript components and the design stylesheet can be found here.

* **resolver:** HTML-Seiten mit automatischer Weiterleitung (in einem minimalen arkumu-Docs-Design), die als URI-Resolver eingesetzt werden. | HTML pages with automatic forwarding (in a minimal arkumu-Docs design), which are used as URI resolvers.

* **projektstruktur, ressourcen, technische-dokumentation** Enthalten die meisten Seiten für die Website. Sobald ein neuer Ordner erstellt und eine index.markdown mit der entsprechenden Kopfzeile hinzugefügt wurde, wird dieser Ordner zu einem neuen Dropdown-Element in der Kopfzeile der Webseite, welches dann weitere Seiten enthalten kann. | Contain most of the pages for the website. As soon as a new folder has been created and an index.markdown with the corresponding front matter has been added, this folder becomes a new dropdown element in the header of the website, which then can contain further pages.

* **404.html:** Die Fehlerseite der Webpage. | The error site of the webpage.

* **CNAME:** DNS-Weiterleitung von <https://www.arkumu.nrw> nach <https://docs.arkumu.nrw>. Dieses Feature wird entfernt werden, sobald das Web-Portal verfügbar ist. | DNS forwarding from <https://www.arkumu.nrw> to <https://docs.arkumu.nrw>. This feature will be removed as soon as the web portal is available.

* **Gemfile & _config.yml:** Zentrale Dateien zur Steuerung des Kerns der Webseite. Hier finden sich vorallem alle hinzugefügten Plugins. | Central files for controlling the core of the website. All added plugins can be found and managed here.

* **impressum.markdown:** Unsere Impressums-Seite. | Our about page.

* **index.markdown:** Die Startseite der Webseite. | The front page of the website.

* **search.json:** Eine Liquid-Komponente, die beim Build ein JSON-Objekt erzeugt, das die Suche speist. | A Liquid component that generates a JSON object during the build that is our base for the search.

----

## 3. Dockerization

### Vollzogene Arbeitsschritte / Steps taken

arkumu.nrw-Docs wurde erweitert, dass eine einfachere Benutzung in Docker möglich ist. Dafür wurden folgende Schritte unternommen. | arkumu.nrw-Docs has been extended to make it easier to use in Docker. The following steps were taken to achieve this.

1. **Erstellen der Dockerfile / Creation the Docker file**  
Es wurde eine <code>Dockerfile</code> erstellt, die ein Ruby-System, in Version 3.2.3, im Container installiert. Das ist die Version, die zur Erstellung von arkumu.nrw-Docs verwendet wurde. Es werden alle Dateien übertragen inklusive der Informationen wie sie in der Gemfile spezifiziert sind. Der Port ist ursprünglich 0.0.0.0 und wird auf [http://localhost:4000/](http://localhost:4000/) lokal gehostet. Die Jekyll-Einstellung <code>--force-polling</code> ermöglicht das automatische neuladen der Jekyll-App im Container. Ebenso ist der Live-Reload von Jekyll mit <code>--livereload</code> aktiviert, was aber in einem Container-Build nur mäßig sinnvoll ist. Er kann bei Bedarf in der Dockerfile und in der unten stehenden <code>docker-compose.yml</code> samt des Port entfernt werden. | A <code>Dockerfile</code> was created that installs a Ruby, version 3.2.3, in the container. That's the version used for creating arkumu.nrw-Docs. All files are transferred including the information as specified in the Gemfile. The port is originally 0.0.0.0 and is hosted locally on http://localhost:4000/. The Jekyll setting <code>--force-polling</code> enables the automatic reload of the Jekyll app in the container. The live reload of Jekyll is also activated with <code>--livereload</code>, but this is only moderately useful in a container build. If required, it can be removed in the Dockerfile and in the <code>docker-compose.yml</code> below, along with the used port.

```dockerfile
FROM ruby:3.2.3
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs
WORKDIR /app
COPY Gemfile ./
RUN bundle install
COPY . .
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--force-polling", "--livereload" ]
EXPOSE 4000
```

2. **Erstellen der docker-compose.yml | Creation of the docker-compose.yaml**

Die .yml-Datei ist zum automatischen Neu-Laden des Containers und der Ausgabe auf Port 4000. Sie enthält den Container-Namen und baut bei jedem Neuladen die gesamte App. Hier kann noch weiter verbessert werden, dass nicht alles immer neu geladen wird. Port 35729 ist der Live-Reload-Port von Jekyll. Diesen und das <code>--livereload</code> unter <code>command:</code> entfernen, damit es ausgeschaltet wird. |  The .yml file is for automatically reloading the container and refreshing to port 4000. It contains the container name and builds the entire app each time it is reloaded. This can be further improved so that not everything is always reloaded. Port 35729 is Jekyll's live reload port. Remove port and the <code>--livereload</code> under <code>command:</code> to turn it off.

```yml
services:
  jekyll:
    container_name: arkumunrwdocs
    build: .
    ports:
      - "4000:4000"
      - "35729:35729"
    volumes:
      - .:/app
    command: bundle exec jekyll serve --host 0.0.0.0 --force-polling --livereload
```

## 3.2 Installation

Die Installation ist einfach und benötigt nur zwei Schritte. | The installation is straight forward and only requires two steps.

Vorraussetzung: | Requirement: Docker ist installiert und läuft. | Docker is installed and running. 

1. Normal das GitHub-Repo klonen: | Simply clone the git repo: <code>git clone https://github.com/Digi-Kunst/digi-kunst.github.io.git</code>.

2. Den Docker Container mit <code>docker compose up</code> starten. | Start the docker container with <code>docker compose up</code>.
