class Projekt {
    constructor(titel, kurzbeschreibung, pfadZumProjektlogo, startDatum) {
        this.titel = titel;
        this.kurzbeschreibung = this.setMaxLength(kurzbeschreibung, 255);
        this.pfadZumProjektlogo = pfadZumProjektlogo;
        this.startDatum = startDatum;
        this.artefakte = [];
    }
    
    setMaxLength(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    }

    addArtefakt(artefakt) {
        this.artefakte.push(artefakt);
    }

    berechneProjektlaufzeit() {
        return this.artefakte.reduce((sum, artefakt) => sum + artefakt.geplanteArbeitszeit, 0);
    }
}

class Aufgabenbereich {
    constructor(titel, kurzbeschreibung) {
        this.titel = titel;
        this.kurzbeschreibung = this.setMaxLength(kurzbeschreibung, 255);
    }

    setMaxLength(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    }
}

class Artefakt {
    constructor(titel, kurzbeschreibung, aufgabenbereichId, geplanteArbeitszeit) {
        this.titel = titel;
        this.kurzbeschreibung = this.setMaxLength(kurzbeschreibung, 255);
        this.aufgabenbereichId = aufgabenbereichId;
        this.geplanteArbeitszeit = geplanteArbeitszeit;
    }

    setMaxLength(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    }
}

class ProjektAufgabenbereich {
    constructor(projektId, aufgabenbereichId) {
        this.projektId = projektId;
        this.aufgabenbereichId = aufgabenbereichId;
    }
}

class ProjektArtefakt {
    constructor(projektId, artefaktId, tatsaechlicheArbeitszeit) {
        this.projektId = projektId;
        this.artefaktId = artefaktId;
        this.tatsaechlicheArbeitszeit = tatsaechlicheArbeitszeit;
    }
}

// Beispielprojekte mit je zwei Artefakten
let projekt1 = new Projekt("Projekt A", "Beschreibung A", "pfad/logoA.png", "2024-01-01");
let projekt2 = new Projekt("Projekt B", "Beschreibung B", "pfad/logoB.png", "2024-02-01");
let projekt3 = new Projekt("Projekt C", "Beschreibung C", "pfad/logoC.png", "2024-03-01");

let aufgabenbereich1 = new Aufgabenbereich("Aufgabenbereich 1", "Beschreibung 1");
let aufgabenbereich2 = new Aufgabenbereich("Aufgabenbereich 2", "Beschreibung 2");

let artefakt1 = new Artefakt("Artefakt 1", "Beschreibung Artefakt 1", 1, 10);
let artefakt2 = new Artefakt("Artefakt 2", "Beschreibung Artefakt 2", 1, 20);
let artefakt3 = new Artefakt("Artefakt 3", "Beschreibung Artefakt 3", 2, 30);
let artefakt4 = new Artefakt("Artefakt 4", "Beschreibung Artefakt 4", 2, 40);

let projektAufgabenbereich1 = new ProjektAufgabenbereich(1, 1);
let projektAufgabenbereich2 = new ProjektAufgabenbereich(1, 2);

let projektArtefakt1 = new ProjektArtefakt(1, 1, 8);
let projektArtefakt2 = new ProjektArtefakt(1, 2, 15);
let projektArtefakt3 = new ProjektArtefakt(2, 3, 25);
let projektArtefakt4 = new ProjektArtefakt(2, 4, 35);

console.log(projekt1, projekt2, projekt3);
console.log(aufgabenbereich1, aufgabenbereich2);
console.log(artefakt1, artefakt2, artefakt3, artefakt4);
console.log(projektAufgabenbereich1, projektAufgabenbereich2);
console.log(projektArtefakt1, projektArtefakt2, projektArtefakt3, projektArtefakt4);

projekt1.addArtefakt(artefakt1);
projekt1.addArtefakt(artefakt2);
projekt2.addArtefakt(artefakt3);
projekt2.addArtefakt(artefakt4);

console.log(projekt1);
console.log("Projektlaufzeit für Projekt 1:", projekt1.berechneProjektlaufzeit(), "Stunden");
console.log("");
console.log(projekt2);
console.log("");
console.log("Projektlaufzeit für Projekt 2:", projekt2.berechneProjektlaufzeit(), "Stunden");
