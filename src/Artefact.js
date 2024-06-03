class Artefact {
    constructor(title, shortDescription, taskAreaId, plannedWorkingTime) {
        this.title = title;
        this.shortDescription = this.setMaxLength(shortDescription, 255);
        this.taskAreaId = taskAreaId;
        this.planedWorkingTime = plannedWorkingTime;
    }

    setMaxLength(text, maxLength) {
        if (text.length > maxLength) {
            // Wenn der Text länger als maxLength ist, wird er auf maxLength gekürzt
            return text.substring(0, maxLength);
        } else {
            return text;
        }
    }
}
module.exports = Artefact;