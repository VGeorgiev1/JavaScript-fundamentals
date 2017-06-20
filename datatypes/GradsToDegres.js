function hello(input) {
    var a = input[0];
    var degreas=0;
    var turns=0;
    if(a==400){
        console.log("0");
    }
    else if(a>400){

        turns=Math.floor(a/400);
        degreas=(a*360)/400-turns*360;
        console.log(degreas);
    }
    else if(a<0){
            turns=Math.floor(a/400);
            degreas=360-(Math.abs(a)*360)/400;
            console.log(degreas);
    }
    else if(a<-400){
        turns=Math.abs(Math.floor(a/400)); //turns=2;
        degreas=(Math.abs(a)*360)/400-(turns*360);
        console.log(degreas);
    }
    else{

        degreas=(a*360)/400;
        console.log(degreas);
    }

}

