function capitalize(string) {
    let splitted=string.split(' ');

    for(let i=0;i<splitted.length;i++){

        splitted[i]=splitted[i].split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()).join(' ');


    }
    console.log(splitted.join(' '));

}
capitalize('Capitalize these words');