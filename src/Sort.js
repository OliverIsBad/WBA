class Sort{
    constructor(){
        //Empty constructor
    }

    sortDate(dates){
        // Sortiert die Daten aufsteigend
        return dates.sort((a, b) => new Date(a) - new Date(b));

        /* 
        // Alternativ mit Bubbelsort
        let n = dates.length;
        for (let i = 0; i < n-1; i++)
            for (let j = 0; j < n-i-1; j++)
                if (dates[j] > dates[j+1])
                {
                    let temp = dates[j];
                    dates[j] = dates[j+1];
                    dates[j+1] = temp;
                }


        */
        
        return dates;
    }

    sortRunTime(times){
        // Sortiert die Zeiten aufsteigend
        return times.sort((a, b) => a - b);

        /*
        // Alternativ mit Bubbelsort
        let n = times.length;
        for (let i = 0; i < n-1; i++)
            for (let j = 0; j < n-i-1; j++)
                if (times[j] > times[j+1])
                {
                    let temp = times[j];
                    times[j] = times[j+1];
                    times[j+1] = temp;
                }
        
        */
    }
}
module.exports = Sort;