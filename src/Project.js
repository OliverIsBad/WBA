class Project {
    startDate = new Date();
    constructor(title, shortDescription, pathProjectLogo, startDate) {
        this.title = title;
        this.shortDescription = this.setMaxLength(shortDescription, 255);
        this.pathProjectLogo = pathProjectLogo;
        this.startDate = new Date(startDate);
        this.artefacts = [];
    }
    
    setMaxLength(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    }

    addArtefact(artefact) {
        this.artefacts.push(artefact);
    }

    calculateProjectRuntime() {
        return this.artefacts.reduce((sum, artefact) => sum + artefact.planedWorkingTime, 0);
    }
}
module.exports = Project;