class Sort{
    constructor(){
        //Empty constructor
    }

    sortDate(dates){
        return dates.sort((a, b) => new Date(a) - new Date(b));
    }

    sortRunTime(times){
        return times.sort((a, b) => a - b);
    }
}
module.exports = Sort;