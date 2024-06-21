# frontend_tools - Das Frontend für: * Tools * - Die Ausleihkiste

## Zweck
Diese Anwendung soll die Möglichkeit bieten, für kreative Aktionen Hilfsmittel auszuleihen

## Verwendung
### Home 
- beschreibt kurz, wofür * Tools * da ist
- (soll zukünftig für alle sichtbar sein)  
![Home](https://github.com/eliseHtw/frontend_tools/blob/main/images_readme/tools_home.png)

### Ausleihkiste
- bietet eine Übersicht über alle Kisten
- zeigt an, was die Kisten beinhalten
- zeigt an, welche Kisten verfügbar sind
- (soll zukünftig für eingeloggte Benutzer*innen mit Leserechten sichtbar sein)
- ist nach Kategorie, Artikel und Details filterbar  
![Ausleihkiste](https://github.com/eliseHtw/frontend_tools/blob/main/images_readme/tools_kiste.png)

### Kiste bearbeiten
- zeigt alle vorhandenen Kisten an  
![Kiste bearbeiten](https://github.com/eliseHtw/frontend_tools/blob/main/images_readme/tools_edit.png)
- es ist möglich einzelne Kisten ganz zu löschen über den Button `löschen`
- es ist möglich neue Kisten hinzuzufügen über den Button `neue Kiste erstellen`  
![neue Kiste erstellen](https://github.com/eliseHtw/frontend_tools/blob/main/images_readme/tools_create.png)
- es ist möglich einzelne Kisten zu aktualisieren über den Button `aktualisieren`  
![Kiste aktualisieren](https://github.com/eliseHtw/frontend_tools/blob/main/images_readme/tools_update.png)
- (soll zukünftig nur für eingeloggte Benutzer*innen mit erweiterten Rechten sichtbar sein)  


### Login
- hier entsteht eine Login-Seite

### Registrieren
- hier können sich neue Nutzer*innen registrieren
- benötigt wird ein Benutzer*innenname, ein Passwort mit mindestens 12 Zeichen, eine E-Mail-Adresse und noch ist die Rolle für Leserechte vs. erweiterte Rechte frei wählbar  
![Registrieren](https://github.com/eliseHtw/frontend_tools/blob/main/images_readme/tools_register.png)

## Nächste Schritte
- hier gibt es verschiedene Ideen, wie die Seite noch funktionaler, schöner, sinnvoller ... werden kann [Nächste Schritte](https://github.com/eliseHtw/frontend_tools/blob/main/nextSteps.md)

## Entwicklungsumgebung

### Voraussetzungen zur Installation
- Backend clonen, installieren und starten, siehe: [backend_tools](https://github.com/eliseHtw/backend_tools/blob/main/README.md).
- Angular CLI Version: 17.0.5 / 17.2.2 (andere Versionen nicht geprüft)
- Node: 20.10.0 (andere Versionen nicht geprüft)
- Package Manager: npm 10.2.3 (andere Versionen nicht geprüft)
- Angular: 17.0.5 / 17.3.1 (andere Versionen nicht geprüft)

### Installation
- Das Repository frontend_tools clonen, zu finden unter: [frontend_tools](https://github.com/eliseHtw/frontend_tools.git).
- Im eigenen Terminal in das Projektverzeichnis `frontend_tools` navigieren.
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
![frontend_started](https://github.com/eliseHtw/frontend_tools/blob/main/images_readme/frontend_started.png)
- Die Website ist dann im Browser über `localhost:4200` erreichbar. Bei Änderungen der Dateien lädt die Seite automatisch neu.
- Weitere Infos zu Angular in diesem Projekt unter: [frontend_tools_start](https://github.com/eliseHtw/frontend_tools/blob/main/frontend_tools_start/README.md).
