function circleArea(input){
    var rad=Number(input[0]);
    var area=Math.PI*rad*rad;
    console.log(area);
    var rounded=Math.round(area*100)/100;
    console.log(rounded);
}
