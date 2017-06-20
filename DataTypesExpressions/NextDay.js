function nextdate(year,month,date) {
    let nextdate=new Date(year,month-1,date+2);
   // console.log(nextdate);
    if(nextdate.getDate()-1==0){
        console.log((nextdate.getYear()+1900)+"-"+(nextdate.getMonth())+"-"+29);

    }
    else {
        console.log((nextdate.getYear() + 1900) + "-" + (nextdate.getMonth() + 1) + "-" + (nextdate.getDate() - 1));
    }


}
nextdate(2012,2,28);