class TaskArea {
    constructor(title, shortDescription) {
        this.titel = title;
        this.kurzbeschreibung = this.setMaxLength(shortDescription, 255);
    }

    setMaxLength(text, maxLength) {
        return text.length > maxLength ? text.substring(0, maxLength) : text;
    }
}
module.exports = TaskArea;