function score(json) {
    console.log("<table>");
    let parsedData=JSON.parse(json);
    let keys=Object.keys(parsedData[0]);
    let header="  <tr>";
    for(let i=0;i<keys.length;i++){
        header+=`<th>${keys[i]}</th>`
    }
    header+="</tr>";
    console.log(header);
    let index=0;
    let row="";
    for(let j=0;j<parsedData.length;j++) {
        row+="  <tr><td>";
        row+=`${htmlEscape(parsedData[j][keys[0]])}</td>`;
        for (let i = 1; i < keys.length; i++){
            row+=`<td>${(parsedData[j][keys[i]])}</td>`;
        }
        row+="</tr>";
        console.log(row);
        row="";
    }
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
    console.log("</table>");

}
score('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]');