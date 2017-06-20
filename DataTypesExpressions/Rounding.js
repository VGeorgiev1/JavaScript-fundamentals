function rounding(input) {
    let numAsAString=input[0].toString();

    let index=numAsAString.indexOf(".");
    let decimalPart=numAsAString.substr(index+1);
    let roundargh=input[1];
    if(roundargh>15){
        roundargh=15;
    }
    if(decimalPart.length<roundargh){
        console.log(input[0]);
    }
    else {
        console.log(input[0].toFixed(roundargh));
    }

}
rounding([10.5, 0]);

