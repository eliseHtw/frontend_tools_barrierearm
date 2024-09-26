# frontend_tools_barrierearm - Das neue Frontend für frontend_tools - Das Frontend für: * Tools * - Die Ausleihkiste

- (Technische Details siehe unten. Altes Projekt siehe: [frontend_tools](https://github.com/eliseHtw/frontend_tools.git).)
- Vergleich mit Bildern der alten und neuen Webseite ab [#Verwendung](#Verwendung)

Das Frontend wurde an vielen Stellen angepasst, damit es barrierefrei zu bedienen ist. Dafür wurden verschiedene Erfolgskriterein aus den Web Content Accessibility Guidelines (WCAG) 2.2 umgesetzt. 

## Pflichtkriterien und was wurde dafür geändert mit den jeweiligen WCAG-Bezügen

### 1. Verwenden Sie Semantisches Markup. 1.3.1
Für die einzelnen Bestandteile wurden die Begrifflichkeiten verdeutlicht und angepasst, wo dies noch fehlte, damit eindeutiger beschrieben ist, was der jeweilige Bestandteil ist. Für assistive Technologien wie Screenreader ist dies verständlicher und unterstützt zum Beispiel beim Vorlesen. Insbesondere wurden \<header\>, \<footer\>, \<nav\>, \<button\> richtig benannt. Die Navigation wurde nun (Sub-)Bestandteil des Headers.

### 2. Das Projekt ist über die Tastatur bedienbar. 2.1.1, 2.1.3
Alle Bedienelemente sollen über die Tastatur erreichbar und auch bedienbar sein, also z.B. das Enter auf einem Button soll das gleiche erreichen, wie das Klicken darauf. Dies wurde nun umgesetzt.

### 3. Die Sprache im Dokument ist angegeben. 3.1.1
Für assistive Technologien wie Screenreader ist es hilfreich die richtige Hauptsprache anzugeben. Zuvor wurde die Sprache als en für englisch angegeben. Dies wurde nun in de für deutsch in der index.html geändert.

### 4. Ein Fokusring ist bei jedem Element sichtbar 2.4.7
Alle Bedienelement, wie z.B. Buttons, Eingabefelder oder Links sollen, wenn sie fokussiert sind, einen deutlich sichtbaren und erkennbaren Fokusring erhalten. Dies wurde eingerichtet und auch an bereits vorhandenen Stellen verstärkt. Die Änderungen mussten jeweils in den css-Dateien aller Module eingetragen werden.

### 5. Ein Skip-Link ist Vorhanden, um Bereiche zu überspringen.
Beim Laden der Seite und auch jeder Unterseite soll ein Skip-Link vorhanden sein, damit bei Bedienung mit der Tastatur nicht jedes Mal alle Links, z.B. die gesamte Navigation erst durchgesprungen werden muss, sondern es die Möglichkeit gibt direkt in den Hauptteil zu gelangen. Diese Aufgabe stellte aufgrund der Stuktur von Angular eine der größten Herausforderungen dar. Der Link ist nur sichtbar, wenn er gerade fokussiert ist und ist immer bei dem Neuladen als erstes fokussiert. Änderungen waren in app.component.html, css, ts und in app.config.ts nötig sowie in allen html-Dateien der main-Module.

## Wahlkriterien (mindestens 6) mit den jeweiligen WCAG-Bezügen

### 1. Mindestgröße der Bedienelemente 2.5.8 AA
Die Größe des Ziels für Zeigereingaben, also z.B. Buttons, Eingabefelder oder Links beträgt mindestens 24 x 24 Pixel. Dazu wurden in der styles.css entsprechende Styles eingetragen.

### 2. Mindestgröße der Bedienelemente 2.5.5 AAA
Die Größe des Ziels für Zeigereingaben, also z.B. Buttons, Eingabefelder oder Links beträgt mindestens 44 x 44 Pixel. Dazu wurden in der styles.css entsprechende Styles eingetragen.

### 3. farblicher Kontrast 1.4.3 AA
Der Farbkontrast aller Teile der Webseite wurde verändert und entspricht nun einem Mindestkontrast von 4,5:1. Dazu wurden alle Farben von allen Elementen heller oder dunkler gemacht, die Farbgebung blieb aber ähnlich.

### 4. erweiterter farblicher Kontrast 1.4.6 AAA
Der Farbkontrast aller Teile der Webseite wurde verändert und entspricht nun einem Mindestkontrast von 7:1. Dazu wurden alle Farben von allen Elementen heller oder dunkler gemacht, die Farbgebung blieb aber ähnlich.

### 5. richtige Reihenfolge der Überschriften 1.3.2
In home gab es nur die Überschriftenarten h1 und h3 aus Größengründen. Dies wurde nun der richtigen Reihenfolge angepasst und die Hauptüberschrift blieb weiterhin h1, die anderen wurden zu h2-Überschriften. Außerdem wurde die quasi Überschrift im header geändert zu einem p wie paragraph aber in der gleichen Größe wie eine h1-Überschrift, damit es nicht mehr zwei h1-überschriften auf einer Seite gibt und im Header einfach das Banner ist.

### 6. Beschriftungen Labels 3.3.2, 2.5.3
Eingabefelder in Formularen sollen klar beschriftet sein, um den Zweck des Eingabefeldes zu verdeutlichen. Dies unterstützt auch Assistive Technologien wie Screenreader. Labels werden mit den dazugehörigen Feldern verknüpft. Dies war bereits an fast allen Stellen richtig umgesetzt, jedoch fehlte es noch für das Suchfeld in kiste und wurde auch hier entsprechend ergänzt. 

### 7. Textabstand 1.4.12 AA
Den Vorgaben für eine Linienhöhe von mindestens dem 1,5-fachen der Schriftgröße, den Abstand zwischen Paragraphen vom mindestens 2-fachen der Schriftgröße, den Buchstabenabstand vom mindestens 0,12-fachen der Schriftgröße und den Wortabstand vom mindestens 0,16-fachen der Schriftgröße wurde entsprochen. Dies wurde überwiegend in der styles.css für den body umgesetzt. Nur der Paragraphabstand findet sind im Textblock von home.

### 8. Titel der einzelnen Seiten 2.4.2
Um den Zweck und Inhalt einer Seite insbesondere für Screenreader deutlich zu machen, wenn eine Seite geöffnet wird, wurde für jede Seite ein Seitentitel eingefügt. Dazu war eine Funktion in der app.component.ts nötig und in der app.routes.ts wurden in den Routes die Titel hinzugefügt. Bsp.: 
``` app.rotes.ts
{ path: 'create', component: CreateComponent, data: {title: 'neue Kiste erstellen für * Tools * - die Ausleihkiste'} }
```

### 9. Textgröße änderbar
Alle Größenangaben abgesehen von Mindestgrößen und Fokusringgrößen wurden in dynamischen Größen angegeben, damit die Textgröße gut veränderbar ist.

## Sonstiges

### Schriftgröße
Die Schriftgröße in den Buttons wurde für bessere Lesbarkeit vergrößert und fett.

### Namen und Aria-Labels ergänzt
Bei Eingabefeldern wurden name und teilweise aria-label ergänzt.

### Inhalt angepasst
Im Footer wurde das aktuelle Projekt eingetragen und ein paar Bindestriche entfernt, weil das beim Vorlesen anstrengend zum Hören klang. Es wurden an manchen Stellen die * entfernt, da die zwar hübsch aussehen, aber beim Screenreader klang das auch eher anstrengend.

### bisher keine Änderungen nötig weil nicht vorhanden
Textalternativen oder zeitbasierte Medien haben für diese Webseite keine Rolle gespielt, da es bisher keine Bilder, Audios oder Videos gibt. Einige andere Anpassungen waren nicht nötig, weil sie bereists umgesetzt waren oder ebenfalls bislang keine Rolle spielten. Möglicherweise wurden bereits mehr Anforderungen umgesetzt, da diese sich teilweise überlappen.

### responsives Webdesign
Die Seite wurde an manchen Punkten responsiver gemacht, also je nach Größe des Devices oder der Schriftgröße immer noch gut überblickbar. Dies geschah insbesondere für footer und main. Die Tabellen bei kiste und edit sind bis zu einer bestimmten Breite gut anpassbar auf eine Seite und es wird noch an einer endgültigen Lösung gearbeitet, aber bereits relevante Größen erkannt.

## Zweck
Diese Anwendung soll die Möglichkeit bieten, für kreative Aktionen Hilfsmittel auszuleihen

## Verwendung
Hier sind nun auch die vorher - nachher Bilder zu sehen.

### Home 
- beschreibt kurz, wofür * Tools * da ist
- (soll zukünftig für alle sichtbar sein)  
<u>neu</u>
![Home](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools2-home.png) 
<u>alt</u>
![Home](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools_home.png)

### Ausleihkiste
- bietet eine Übersicht über alle Kisten
- zeigt an, was die Kisten beinhalten
- zeigt an, welche Kisten verfügbar sind
- (soll zukünftig für eingeloggte Benutzer*innen mit Leserechten sichtbar sein)
- ist nach Kategorie, Artikel und Details filterbar  
<u>neu (mit Skip-Link)</u>
![Ausleihkiste](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools2-kiste.png)
<u>alt</u>
![Ausleihkiste](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools_kiste.png)
<u>neu mit Filter</u>
![Ausleihkiste](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools2-kiste-filter.png)

### Kiste bearbeiten
- zeigt alle vorhandenen Kisten an  
<u>neu</u>
![Kiste bearbeiten](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools2-edit.png)
<u>alt</u>
![Kiste bearbeiten](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools_edit.png)

- es ist möglich einzelne Kisten ganz zu löschen über den Button `löschen`
- es ist möglich neue Kisten hinzuzufügen über den Button `neue Kiste erstellen`  
<u>neu</u>
![neue Kiste erstellen](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools2-create.png)
<u>alt</u>
![neue Kiste erstellen](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools_create.png)

- es ist möglich einzelne Kisten zu aktualisieren über den Button `aktualisieren`  
<u>neu</u>
![Kiste aktualisieren](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools2-update.png)
<u>alt</u>
![Kiste aktualisieren](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools_update.png)

- (soll zukünftig nur für eingeloggte Benutzer*innen mit erweiterten Rechten sichtbar sein)  

### Login
- hier entsteht eine Login-Seite  
<u>neu</u>
![Einloggen](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools2-login.png)

### Registrieren
- hier können sich neue Nutzer*innen registrieren
- benötigt wird ein Benutzer*innenname, ein Passwort mit mindestens 12 Zeichen, eine E-Mail-Adresse und noch ist die Rolle für Leserechte vs. erweiterte Rechte frei wählbar  
<u>neu</u>
![Registrieren](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools2-register.png)
<u>alt</u>
![Registrieren](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/tools_register.png)

## Nächste Schritte
- Das Projekt befindet sich weiterhin in der Entwicklungsphase und mögliche Ideen für Erweiterungen sind zusammengetragen.
- hier gibt es verschiedene Ideen, wie die Seite noch funktionaler, schöner, sinnvoller ... werden kann [Nächste Schritte](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/nextSteps.md)

## Entwicklungsumgebung

### Voraussetzungen zur Installation
- Backend clonen, installieren und starten, siehe: [backend_tools](https://github.com/eliseHtw/backend_tools/blob/main/README.md).
- Angular CLI Version: 17.0.5 / 17.2.2 (andere Versionen nicht geprüft)
- Node: 20.10.0 (andere Versionen nicht geprüft)
- Package Manager: npm 10.2.3 (andere Versionen nicht geprüft)
- Angular: 17.0.5 / 17.3.1 (andere Versionen nicht geprüft)

### Installation
- Das Repository frontend_tools clonen, zu finden unter: [frontend_tools_barrierearm](https://github.com/eliseHtw/frontend_tools_barrierearm.git).
- Im eigenen Terminal in das Projektverzeichnis `frontend_tools_barrierearm` navigieren.
- Für die Angular-Anwendung in das Verzeichnis `frontend_tools_start` navigieren.
- Um die benötigten Abhängigkeiten zu installieren: `npm install` ausführen.
- "Für den Produktiv-Einsatz:" Und danach dann: `ng generate environment`
- Im Verzeichnis src/app/environment `environment.ts` einfügen, mit folgendem Inhalt:  
```environment.ts
    export const environment = {
        production: true,
        apiUrl: '<URL_des_eigenen_Backends>'
    };
```
- `ng build` ausführen
- Frontend starten mit `ng serve`. Wenn das Backend erfolgreich gestartet wurde, sollte es dann so aussehen:  
![frontend_started](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/images_readme/frontend_started.png)
- Die Website ist dann im Browser über `localhost:4200` erreichbar. Bei Änderungen der Dateien lädt die Seite automatisch neu.
- Weitere Infos zu Angular in diesem Projekt unter: [frontend_tools_start](https://github.com/eliseHtw/frontend_tools_barrierearm/blob/main/frontend_tools_start/README.md).
