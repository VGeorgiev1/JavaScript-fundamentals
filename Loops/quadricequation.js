function rots(input){


    var a=Number(input[0]);
    var b=Number(input[1]);
    var c=Number(input[2]);
    var d=(b*b)-4*a*c;
    var x1,x2;
    if(d>0){
        x1=(-b+Math.sqrt(d))/(2*a);
        x2=(-b-Math.sqrt(d))/(2*a);
        console.log(x2);
        console.log(x1);
    }
    else if(d==0){

        x1=-b/(2*a);
        console.log(x1);
    }
    else{
        console.log("No");
    }
}
