function requiredReading(pages, pg1, days){
    //Number of pages of the current book - integer [1… 1000]
// Pages read in 1 hour - integer [1… 1000]
 //The number of days for which you must read the book - integer [1… 1000]
    let timeNeeded = pages / pg1;
    let allTimeNeeded = timeNeeded / days;
    console.log(allTimeNeeded);
}
requiredReading(432,

    15 ,
    
    4)