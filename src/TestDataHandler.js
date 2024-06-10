const fs = require('fs');
const apiUrl = 'https://scl.fh-bielefeld.de/WBA/projectsAPI';
const dataHandler = require('./dataHandler');

async function saveData(data) {
    // Simulierter API-Aufruf
    console.log('Sending data to API:', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ status: 200, message: 'Success' });
        }, 1000);
    }).catch(error => {
        console.error('Error:', error);
        saveToLocal(data);
    });
}

function saveToLocal(data) {
    let localData = [];
    if (fs.existsSync('unsavedData.json')) {
        localData = JSON.parse(fs.readFileSync('unsavedData.json'));
    }
    localData.push(data);
    fs.writeFileSync('unsavedData.json', JSON.stringify(localData));
}

async function retryLocalData() {
    if (!fs.existsSync('unsavedData.json')) return;
    let localData = JSON.parse(fs.readFileSync('unsavedData.json'));
    let successfulSaves = [];

    for (let data of localData) {
        try {
            let result = await saveData(data);
            if (result) {
                successfulSaves.push(data);
            }
        } catch (error) {
            console.error('Retry failed:', error);
        }
    }

    let remainingData = localData.filter(data => !successfulSaves.includes(data));
    fs.writeFileSync('unsavedData.json', JSON.stringify(remainingData));
}

function init() {
    retryLocalData();
}

let newProject = { type: 'project', name: 'Neues Projekt' };
let newTask = { type: 'task', description: 'Neue Aufgabe' };
let newArtifact = { type: 'artifact', content: 'Neues Artefakt' };

saveData(newProject);
saveData(newTask);
saveData(newArtifact);

init();