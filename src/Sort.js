class Sort{
    constructor(){
        //Empty constructor
    }

    sortDate(dates){
        // Sortiert die Daten aufsteigend
        return dates.sort((a, b) => new Date(a) - new Date(b));
    }

    sortRunTime(times){
        // Sortiert die Zeiten aufsteigend
        return times.sort((a, b) => a - b);
    }
}
module.exports = Sort;