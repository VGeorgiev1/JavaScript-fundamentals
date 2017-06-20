function cone(input){

    var rad=Number(input[0]);
    var hei=Number(input[1]);
    var volume=(Math.PI*rad*rad*hei)/3;
    var slant=Math.sqrt(rad*rad+hei*hei);
    var area=Math.PI*rad*slant+Math.PI*rad*rad;
    console.log("volume = "+volume);
    console.log("area = "+area);


    }
