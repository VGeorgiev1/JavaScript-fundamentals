function table(until) {
    console.log("<table border=\"1\">");
    let firstrow = "";
    let row = "";
    for (let i = 1; i <= until + 1; i++) {
        if (i == 1) {
            firstrow += "<tr><th>x</th>";
        }
        else {
            firstrow += `<th>${i - 1}</th>`;
        }

    }
    firstrow += "</tr>";
    console.log(firstrow);
    for (let i = 1; i <= until + 1; i++) {
        if(i-1!=0) {
            row += `<tr><th>${i - 1}</th>`;
        }
        for (let j = 1; j <= until; j++) {

            if (i != 1) {
                row += `<td>${j * (i - 1)}</td>`;
            }

        }
        if (row != "") {
            row+="</tr>";
            console.log(row);
        }
        row = "";
    }


    console.log("</table>");

}table(5);