class Artefact {
    constructor(id, name, shortdesc, longdesc, plannedtime, realtime, taskid) {
        this.id = id;
        this.name = name;
        this.shortdesc = this.setMaxLength(shortdesc, 255);
        this.longdesc = longdesc;
        this.plannedtime = this.convertTimeToMinutes(plannedtime);
        this.realtime = this.convertTimeToMinutes(realtime);
        this.taskid = taskid;
    }

    setMaxLength(text, maxLength) {
        if (text.length > maxLength) {
            // If the text is longer than maxLength, truncate it
            return text.substring(0, maxLength);
        } else {
            return text;
        }
    }

    convertTimeToMinutes(time) {
        if (time) {
            const [hours, minutes] = time.split(':'); // Corrected reference from this.planedtime to time
            return parseInt(hours) * 60 + parseInt(minutes);
        }
        return 0;
    }
}

module.exports = Artefact;
