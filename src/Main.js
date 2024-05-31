
const Project = require('./Project.js');
const ProjectTaskArea = require('./ProjectTaskArea.js');
const Artefact = require('./Artefact.js');
const ProjectArtefact = require('./ProjectArtefact.js');
const TaskArea = require('./TaskArea.js');
const Sort = require('./Sort.js');


// Beispielprojekte mit je zwei Artefakten
let project1 = new Project("Projekt A", "Beschreibung A", "pfad/logoA.png", "2024-01-01");
let project2 = new Project("Projekt B", "Beschreibung B", "pfad/logoB.png", "2024-03-01");
let project3 = new Project("Projekt C", "Beschreibung C", "pfad/logoC.png", "2024-02-01");

let taskArea1 = new TaskArea("Aufgabenbereich 1", "Beschreibung 1");
let taskArea2 = new TaskArea("Aufgabenbereich 2", "Beschreibung 2");

let artefact1 = new Artefact("Artefakt 1", "Beschreibung Artefakt 1", 1, 10);
let artefact2 = new Artefact("Artefakt 2", "Beschreibung Artefakt 2", 1, 20);
let artefact3 = new Artefact("Artefakt 3", "Beschreibung Artefakt 3", 2, 30);
let artefact4 = new Artefact("Artefakt 4", "Beschreibung Artefakt 4", 2, 40);

let projectTaskArea1 = new ProjectTaskArea(1, 1);
let projectTaskArea2 = new ProjectTaskArea(1, 2);

let projectArtefact1 = new ProjectArtefact(1, 1, 8);
let projectArtefact2 = new ProjectArtefact(1, 2, 15);
let projectArtefact3 = new ProjectArtefact(2, 3, 25);
let projectArtefact4 = new ProjectArtefact(2, 4, 35);

let sort = new Sort();
let projects = [project1, project2, project3];

console.log(project1, project2, project3);
console.log(taskArea1, taskArea2);
console.log(artefact1, artefact2, artefact3, artefact4);
console.log(projectTaskArea1, projectTaskArea2);
console.log(projectArtefact1, projectArtefact2, projectArtefact3, projectArtefact4);

project1.addArtefact(artefact1);
project1.addArtefact(artefact2);
project2.addArtefact(artefact3);
project2.addArtefact(artefact4);

console.log(project1);
console.log("Projektlaufzeit für Projekt 1:", project1.calculateProjectRuntime(), "Stunden");
console.log("");
console.log(project2);
console.log("");
console.log("Projektlaufzeit für Projekt 2:", project2.calculateProjectRuntime(), "Stunden");

let sortedProjects = sort.sortDate(projects.map(project => project.startDate));
console.log(sortedProjects);

