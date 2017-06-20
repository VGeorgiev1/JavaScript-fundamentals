//<table>
//    <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>
//    <tr><td class="prev-month">25</td><td class="prev-month">26</td><td class="prev-month">27</td><td class="prev-month">28</td><td class="prev-month">29</td><td class="prev-month">30</td>
//    <td>1</td></tr><tr><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
//    <tr><td>9</td><td>10</td><td>11</td><td>12</td><td>13</td><td>14</td><td>15</td></tr>
//    <tr><td>16</td><td>17</td><td>18</td><td>19</td><td>20</td><td>21</td><td>22</td></tr>
//    <tr><td>23</td><td class="today">24</td><td>25</td><td>26</td><td>27</td><td>28</td><td>29</td></tr>
//    <tr><td>30</td><td>31</td><td class="next-month">1</td><td class="next-month">2</td><td class="next-month">3</td><td class="next-month">4</td><td class="next-month">5</td></tr>
//</table>
function calendar(input) {
    let date=input[0];
    let month=input[1];
    let year=input[2];

    let cal=new Date(year,month-1,date);
    let firstDate=new Date(year,month-1,1);
    let daysincal=new Date(year,month,0);
  //  console.log(cal.getDay());
    console.log(firstDate.getDay());
    let previousmonth=new Date(year,month-1,0);
    console.log(cal.getMonth());
  //  console.log(previousmonth.getDate());
  // console.log(previousmonth.getMonth());

    let firstrow="<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>";
    console.log("<table>");
    console.log(firstrow);
    console.log(daysincal.getDate());
        let daysprinted=1;
        let row=""
        for(let j=0;j<5;j++) {
            row+="<tr>";
            for (let i = 1; i <= 7; i++) {

                row += `<td>${daysprinted}</td>`;
                daysprinted++;
                if(daysprinted==daysincal.getDate()) {
                    break;
                }
            }
            console.log(row);
            row="";
        }




}
calendar([24,12,2012]);

