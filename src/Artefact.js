class Artefact {
    constructor(title, shortDescription, taskAreaId, plannedWorkingTime) {
        this.title = title;
        this.shortDescription = this.setMaxLength(shortDescription, 255);
        this.taskAreaId = taskAreaId;
        this.planedWorkingTime = plannedWorkingTime;
    }

    setMaxLength(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    }
}
module.exports = Artefact;