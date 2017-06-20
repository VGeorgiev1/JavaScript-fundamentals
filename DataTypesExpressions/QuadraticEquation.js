function quad(a,b,c) {
    let disctiminant=b*b-4*a*c;
    //console.log((-b+Math.sqrt(disctiminant))/(2*a));
    if(disctiminant<0){
        console.log("No");
    }
    else if(disctiminant==0){
        console.log(-b/(2*a));

    }
    else{

        console.log(Math.min((-b+Math.sqrt(disctiminant))/(2*a),(-b-Math.sqrt(disctiminant))/(2*a)));
        console.log(Math.max((-b+Math.sqrt(disctiminant))/(2*a),(-b-Math.sqrt(disctiminant))/(2*a)));
    }


}
quad(5,2,1)