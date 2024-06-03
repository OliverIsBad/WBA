class Project {
    
    constructor(title, shortDescription, pathProjectLogo, startDate) {
        this.title = title;
        this.shortDescription = this.setMaxLength(shortDescription, 255);
        this.pathProjectLogo = pathProjectLogo;
        this.startDate = new Date(startDate);
        this.artefacts = [];
    }
    
    setMaxLength(text, maxLength) {
        if (text.length > maxLength) {
            // Wenn der Text länger als maxLength ist, wird er auf maxLength gekürzt
            return text.substring(0, maxLength);
        } else {
            return text;
        }
    }

    addArtefact(artefact) {
        this.artefacts.push(artefact);
    }

    calculateProjectRuntime() {
        // Summiere die geplanten Arbeitszeiten aller Artefakte
        return this.artefacts.reduce((sum, artefact) => sum + artefact.planedWorkingTime, 0);
    }
}
module.exports = Project;