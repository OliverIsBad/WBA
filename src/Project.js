class Project {
    constructor(id, name, shortdesc, longdesc, logourl, maintainer, start, end) {
        this.id = id;
        this.name = name;
        this.shortdesc = shortdesc ? this.setMaxLength(shortdesc, 255) : '';
        this.longdesc = longdesc ? this.setMaxLength(longdesc, 255) : '';
        this.logourl = logourl;
        this.maintainer = maintainer;
        this.start = new Date(start);
        this.end = new Date(end);
        this.artefacts = [];
    }

    setMaxLength(text, maxLength) {
        if (text.length > maxLength) {
            // If the text is longer than maxLength, truncate it
            return text.substring(0, maxLength);
        } else {
            return text;
        }
    }

    addArtefact(artefact) {
        this.artefacts.push(artefact);
    }

    calculateProjectRuntime() {
        // Sum up the planned working times of all artefacts
        return this.artefacts.reduce((sum, artefact) => sum + artefact.planedWorkingTime, 0);
    }
}

module.exports = Project;
