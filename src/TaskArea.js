class TaskArea {
    constructor(id, name, shortdesc, project) {
        this.id = id;
        this.name = name;
        this.shortdesc = this.setMaxLength(shortdesc, 255);
        this.project = project;
    }

    setMaxLength(text, maxLength) {
        if (typeof text === 'string' && text.length > maxLength) {
            // If the text is longer than maxLength, truncate it
            return text.substring(0, maxLength);
        } else {
            return text;
        }
    }
    
}

module.exports = TaskArea;