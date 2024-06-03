class TaskArea {
    constructor(title, shortDescription) {
        this.titel = title;
        this.kurzbeschreibung = this.setMaxLength(shortDescription, 255);
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
module.exports = TaskArea;