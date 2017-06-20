function expression(input){

    let elements=input.split(/[\s.();:,]/);

    console.log(elements.filter(x=> x!="").join("\n"));



}
expression('let sum = 4 * 4,b = "wow";');