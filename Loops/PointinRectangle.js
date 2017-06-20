function rectangle(input){
   var x=Number(input[0]);
    var y=Number(input[1]);
    var xMin=Number(input[2]);
    var xMax=Number(input[3]);
    var yMin=Number(input[4]);
    var yMax=Number(input[5]);
 if((x>=xMin && x<=xMax) && (y>=yMin && y<=yMax) ){
    console.log("inside");

 }
 else{

  console.log("outside");
 }
}
