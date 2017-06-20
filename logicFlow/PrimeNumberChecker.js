function primeChecker(num) {
    let prime=0;
    if(num==0 || num==1 || num<0){
        console.log("false");
        prime=1;
    }
    for(let i=2;i<=num;i++){
        if(num%i==0 && i!=num){

          console.log("false");
          prime=1;
          break;
        }
    }
    if(prime==0){
        console.log("true");
    }
}
primeChecker(-5);
