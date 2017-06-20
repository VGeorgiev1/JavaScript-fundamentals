function boxbot(input) {
    var a = Number(input[0]);
    if(a%2==0){
        console.log("even");
    }
    else if(a%2==Math.round(a%2)){
        console.log("odd");
    }
    else{
        console.log("invalid");
    }

}