function prime(input) {
    var a = Number(input[0]);
    if(a==0 || a==1){

        console.log("false");
    }
    if(a>0) {
        for (var i = 2; i <= a; i++) {
            if (a % i == 0 && a != i) {
                console.log("false");
            }
            else if (a % i == 0 && a == i) {
                console.log("true");
            }


        }
    }
}


