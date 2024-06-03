# Mehrsprachige JavaScript-Anwendung

Um die Wartbarkeit und Erweiterbarkeit einer mehrsprachigen Website zu gewährleisten, kann man die Aufteilung auf mehrere JavaScript-Dateien wie folgt sinnvoll umsetzen:

## Struktur der Dateien

### Translator JavaScript-Datei (Translator.js)

Diese Datei enthält die Hauptlogik der Anwendung. Sie lädt die benötigten Sprachdateien dynamisch basierend auf der ausgewählten Sprache.

Die Html Elemente bekommen eine Id mit dessen hilfe man deren Inhalt anpassen kann

```javascript
function loadLanguage(lang) {
    // Sprache laden
}

function applyTranslations() {
    // Beispielhafte Anwendung der Übersetzungen auf die HTML-Elemente
    document.getElementById('welcomeMessage').textContent = translations.   welcomeMessage;
    // Weitere Übersetzungen
}

// Standardmäßig die Sprache laden
loadLanguage('de'); // Beispiel: Deutsch
```

## Sprachdateien (languages)

Jede Sprachdatei enthält ein Dictionary (alternativ auch eine Map) mit allen benötigten Übersetzungen. Die Dateien sind nach Sprachcode benannt, z.B. `de.js` für Deutsch, `en.js` für Englisch.

### Beispiel für `de.js`:

```javascript
const translations = {
    welcomeMessage: "Willkommen",
    // Weitere Übersetzungen
};

```
### Beispiel für `en.js` : 

```javascript
const translations = {
    welcomeMessage: "Welcome",
    // Weitere Übersetzungen
};

```

## Gute Wartbarkeit der Sprachdateien

### Konsistente Struktur
Jede Sprachdatei sollte die gleiche Struktur und die gleichen Schlüssel
verwenden, um die Übersichtlichkeit zu wahren.

## Modulare Aufteilung bei umfangreichen Übersetzungen 
Falls die Anzahl der Übersetzungen sehr groß ist, kann es sinnvoll sein, die Übersetzungen auf mehrere Module aufzuteilen und diese in der Hauptsprachdatei zu kombinieren.

```javascript

const navbarTranslations = {
    home: "Startseite",
    about: "Über uns",
    contact: "Kontakt"
};

const translations = {
    ...navbarTranslations,
    welcomeMessage: "Willkommen",
    logoutButton: "Abmelden"
};

```