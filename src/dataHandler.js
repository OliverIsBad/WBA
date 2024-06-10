const apiUrl = 'https://scl.fh-bielefeld.de/WBA/projectsAPI';

// Funktion zum Speichern von Daten (simuliert das Speichern durch das Hinzufügen von Daten zu bestehenden JSON-Dateien)
async function saveData(data) {
    try {
        // Senden einer POST-Anfrage an die API
        let response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Wenn die API-Endpoint nicht gefunden wird (404), wird ein Fehler ausgelöst
        if (response.status === 404) {
            throw new Error('API-Endpunkt nicht gefunden');
        }

        // Wenn die Antwort nicht erfolgreich ist, wird ein Fehler ausgelöst
        if (!response.ok) {
            throw new Error('Fehler beim Speichern der Daten');
        }

        // Umwandeln der Antwort in JSON-Format
        let result = await response.json();
        return result;

    } catch (error) {
        // Bei einem Fehler wird die saveToLocal-Funktion aufgerufen, um die Daten lokal zu speichern
        console.error('Fehler:', error);
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

    // Entfernen der erfolgreich gespeicherten Daten aus localStorage
    let remainingData = localData.filter(data => !successfulSaves.includes(data));
    localStorage.setItem('unsavedData', JSON.stringify(remainingData));
}

// Funktion zur Initialisierung und zum erneuten Versuch, ungespeicherte Daten zu senden
function init() {
    retryLocalData();
}

// Speichern eines neuen Projekts, einer Aufgabe und eines Artefakts
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
