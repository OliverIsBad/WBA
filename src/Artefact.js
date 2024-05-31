class Artefact {
    constructor(title, shortDescription, taskAreaId, plannedWorkingTime) {
        this.titel = title;
        this.kurzbeschreibung = this.setMaxLength(shortDescription, 255);
        this.aufgabenbereichId = taskAreaId;
        this.geplanteArbeitszeit = plannedWorkingTime;
    }

    setMaxLength(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    }
}
module.exports = Artefact;