function table(input) {

    console.log('<table>');
    for(let i=0;i<input.length;i++){
        console.log(`    <tr>`);
        let curemploye=JSON.parse(input[i]);
        console.log(`        <td>${curemploye.name}</td>`);
        console.log(`        <td>${curemploye.position}</td>`);
        console.log(`        <td>${curemploye.salary}</td>`);
        console.log(`    <tr>`);
    }
    console.log('</table>');
}
table([
'{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
);