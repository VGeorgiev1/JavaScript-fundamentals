function nextDay(year,month,date) {
        console.log(year);
        let result=new Date(year,month,date);
        console.log(result);
        console.log(result.getYear());
        console.log(result.getMonth());
        console.log(result.getDate());
}
nextDay(2016, 9, 11);
