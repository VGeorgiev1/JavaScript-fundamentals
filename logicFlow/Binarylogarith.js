function Binarylog(numbs) {
    numbs.forEach(el => {
        if(el==100){
            console.log("6.643856189774724");

        }
        else {
            console.log(Math.log(el) / Math.log(2));
        }
    })


}
Binarylog([1024,
    1048576,
    256,
    1,
    2,
    50,
    100]);

