function calendar([date,month,year]) {
    let startingdate=new Date(year,month-1,date);
    let thismonthdays=new Date(year,month,0);
    let previousmonth=new Date(year,month-1,0);
    let thismonthfirstday=new Date(year,month-1,1);
    console.log('<table>');
    console.log('  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>');
        if(thismonthfirstday.getDay()==0) {
            let d = 0;
            let row = "  <tr>";
            for (let i = 1; i <= thismonthdays.getDate(); i++) {
                if(i==date){
                    row+= `<td class="today">${i}</td>`;
                }
                else {
                    row += `<td>${i}</td>`;
                }
                d++;
                if (d == 7) {
                    row += `</tr>`;
                    console.log(row);
                    d = 0;
                    row = " <tr>";
                }

            }
            if (row != "  <tr>") {


                if (d != 7) {

                    for (let newd = 1; d < 7; d++, newd++) {

                        row += `<td class=\"next-month\">${newd}</td>`;


                    }
                }
                row += "</tr>";
                console.log(row);
            }
        }
        else{
            let row="  <tr>";
            let previousdays=previousmonth.getDate()-thismonthfirstday.getDay()+1;
           // console.log(previousdays);
            let printedalready=0;
           for(;previousdays<=previousmonth.getDate();previousdays++){
               row+=`<td class="prev-month">${previousdays}</td>`;
                printedalready++;
           }
           let start=0;
           for(let i=1;i<=7-printedalready;i++){
               if(i==date){
                   row+= `<td class="today">${i}</td>`;
               }
               else{
                   row+=`<td>${i}</td>`;
               }
               start=i;
           }
           row+="</tr>";
            console.log(row);
            row="  <tr>";
            let d=0;

           for(let i=start+1;i<=thismonthdays.getDate();i++){
               if(i==date){
                   row+= `<td class="today">${i}</td>`;
               }
               else {
                   row += `<td>${i}</td>`;
               }
               d++;
               if(d==7){
                   row+="</tr>";
                   console.log(row);
                   d=0;
                   row="  <tr>";
               }
           }
           if(row!="  <tr>"){
               for (let newd = 1; d < 7; d++, newd++) {

                   row += `<td class=\"next-month\">${newd}</td>`;


               }


               row+="</tr>";
               console.log(row);
           }

        }
        console.log("</table>");
}
calendar([30,6,1986]);
