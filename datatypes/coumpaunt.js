function interest(input){
    var ps=Number(input[0]);
    var inrate=Number(input[1]);
    intrate=intrate/100;
    var compper=Number(input[2]);
    var years=Number(input[3]);
    var n=12/compper;
    var f=ps*Math.pow((1+(inrate/n)),n*years);
    console.log(f);
}
