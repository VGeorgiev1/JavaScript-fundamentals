function trarea(input){

    var a=Number(input[0]);
    var b=Number(input[1]);
    var c=Number(input[2]);
    var s=(a+b+c)/2;
    var A=Math.sqrt(s*(s-a)*(s-b)*(s-c));
    console.log(A);
}
