const { fetchData, projects, tasks, artefacts } = require('./ProjectDataFetch');

// Funktion zum Ausgeben der Arrays
function printArrays() {
    console.log("Projects:");
    console.log(projects);
    console.log("\nTasks:");
    console.log(tasks);
    console.log("\nArtefacts:");
    console.log(artefacts);
}

// Array für die Fetch-Promises
const fetchPromises = [];

// Fetch daten von drei URLs
fetchPromises.push(fetchData('https://scl.fh-bielefeld.de/WBA/projects.json'));
fetchPromises.push(fetchData('https://scl.fh-bielefeld.de/WBA/tasks.json'));
fetchPromises.push(fetchData('https://scl.fh-bielefeld.de/WBA/artefacts.json'));

// Warte auf alle Fetch-Operationen

/*
Promise:
- Ein Promise ist ein Objekt, das einen asynchronen Vorgang repräsentiert.
- Ein Promise ist ein Platzhalter für einen Wert, der möglicherweise in der Zukunft verfügbar ist. 
*/
Promise.all(fetchPromises)
    .then(printArrays)
    .catch(error => {
        console.error('Error fetching data:', error);
    });
