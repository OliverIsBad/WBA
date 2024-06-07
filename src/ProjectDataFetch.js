const Project = require('./Project.js');
const Artefact = require('./Artefact.js');
const TaskArea = require('./TaskArea.js');

const projects = [];
const tasks = [];
const artefacts = [];

// Function to fetch data from a URL and process it
function fetchData(url) {
    console.log(`Fetching data from ${url}`);
    // Return a Promise
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            processFetchedData(data); // Process the fetched data
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Function to process the fetched data
function processFetchedData(data) {
    if (Array.isArray(data)) {
        data.forEach(item => {
            if (item.hasOwnProperty('id')) {
                if (item.hasOwnProperty('name') && item.hasOwnProperty('shortdesc') && item.hasOwnProperty('longdesc') && item.hasOwnProperty('maintainer')) {
                    // Projekt
                    const project = new Project(item.id, item.name, item.shortdesc, item.longdesc, item.logourl, item.maintainer, item.start, item.end);
                    projects.push(project);
                } else if (item.hasOwnProperty('name') && item.hasOwnProperty('shortdesc') && item.hasOwnProperty('taskid')) {
                    // Artefakt
                    const artefact = new Artefact(item.id, item.name, item.shortdesc, item.longdesc, item.plannedtime, item.realtime, item.taskid);
                    artefacts.push(artefact);
                } else if (item.hasOwnProperty('name') && item.hasOwnProperty('shortdesc') && item.hasOwnProperty('project')) {
                    // Task
                    const task = new TaskArea(item.id, item.name, item.shortdesc, item.project);
                    tasks.push(task);
                }
            }
        });
    }
}

// Export the fetchData function and arrays
module.exports = {
    fetchData,
    projects,
    tasks,
    artefacts
};
