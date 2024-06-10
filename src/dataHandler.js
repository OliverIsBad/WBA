// Ist die URL der API, an die die Daten gesendet werden sollen
const apiUrl = 'https://scl.fh-bielefeld.de/WBA/projectsAPI';
// Wird verwendet, um CORS-Beschränkungen zu umgehen
const proxyUrl = 'https://cors-anywhere.herokuapp.com/';


// Funktion zum Speichern von Daten (simuliert das Speichern durch das Hinzufügen von Daten zu bestehenden JSON-Dateien)
async function saveData(data) {
    try {
        // Senden einer POST-Anfrage an die API
        let response = await fetch(proxyUrl + apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Wenn die Antwort nicht erfolgreich ist, wird ein Fehler ausgelöst
        if (!response.ok) {
            throw new Error('Fehler beim Speichern der Daten');
        }

        // Konvertiere die Antwort des Servers in ein JSON-Objekt, um auf die Daten zugreifen zu können
        let result = await response.json();
        console.log('Daten erfolgreich gesendet:', result);
        return result;

    } catch (error) {
        console.error('Fehler:', error);
        // Bei einem Fehler wird die saveToLocal-Funktion aufgerufen, um die Daten lokal zu speichern
        saveToLocal(data);
    }
}


// Funktion zum Speichern von Daten in localStorage
function saveToLocal(data) {
    // Abrufen der bereits in localStorage gespeicherten Daten oder Initialisierung als leeres Array
    let localData = JSON.parse(localStorage.getItem('unsavedData')) || [];
    // Hinzufügen der neuen Daten
    localData.push(data);
    // Speichern der aktualisierten Daten in localStorage
    localStorage.setItem('unsavedData', JSON.stringify(localData));
}


// Funktion zum erneuten Versuch, Daten aus localStorage zu speichern
async function retryLocalData() {
    // Abrufen der in localStorage gespeicherten Daten oder Initialisierung als leeres Array
    let localData = JSON.parse(localStorage.getItem('unsavedData')) || [];
    let successfulSaves = [];

    // Versuch, jede Dateneinheit in localStorage zu speichern
    for (let data of localData) {
        try {
            // Warte auf das Ergebnis der saveData-Funktion, die die Daten an die API sendet und das Ergebnis zurückgibt
            let result = await saveData(data);
            if (result) {
                // Wenn das Speichern erfolgreich ist, wird die Dateneinheit zur Liste der erfolgreichen Speichern hinzugefügt
                successfulSaves.push(data);
            }
        } catch (error) {
            // Wenn der erneute Versuch fehlschlägt, wird ein Fehler protokolliert
            console.error('Erneuter Versuch fehlgeschlagen:', error);
        }
    }

    // Filtere die lokal gespeicherten Daten, um nur die Daten beizubehalten, die nicht erfolgreich gespeichert wurden
    let remainingData = localData.filter(data => !successfulSaves.includes(data));

    // Aktualisiere localStorage mit den verbleibenden, nicht gespeicherten Daten
    localStorage.setItem('unsavedData', JSON.stringify(remainingData));
}


// Funktion zur Initialisierung und zum erneuten Versuch, ungespeicherte Daten zu senden
function init() {
    retryLocalData();
}

// Beispielhafte Speicherung eines neuen Projekts, einer Aufgabe und eines Artefakts
let newProject = {
    type: 'project',
    name: 'Neues Projekt'
};

let newTask = {
    type: 'task',
    description: 'Neue Aufgabe'
};

let newArtifact = {
    type: 'artifact',
    content: 'Neues Artefakt'
};

// Aufruf der saveData-Funktion mit neuen Daten
saveData(newProject);
saveData(newTask);
saveData(newArtifact);

// Initialisierung der Wiederholungslogik beim Laden der Seite
window.onload = init;

// Export der Funktionen für Tests
export default {
    saveData,
    saveToLocal,
    retryLocalData
};
