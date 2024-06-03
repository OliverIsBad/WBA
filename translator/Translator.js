class Translator {
    constructor() {
        const translations = new Map([
            ["de", new Map([
                ["project", "Projekt"],
                ["menu", "Menü"],
                ["shortDescription", "Kurzbeschreibung"],
                // Weitere Übersetzungen...
            ])],
            ["en", new Map([
                ["project", "Project"],
                ["menu", "Menu"],
                ["shortDescription", "Short Description"],
                // Weitere Übersetzungen...
            ])]
        ]);
    }
    loadLanguage(lang) {
        // Sprache hier laden
    }
    
    applyTranslations() {
        // Beispielhafte Anwendung der Übersetzungen auf die HTML-Elemente
        document.getElementById('welcomeMessage').textContent = translations.welcomeMessage;
        // Weitere Übersetzungen
    }
}


module.exports = Translator;