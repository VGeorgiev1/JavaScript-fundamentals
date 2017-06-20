function triangle(num) {
    let row="";

    for(let i=1;i<=num;i++){

        console.log("*".repeat(i));

    }
    for(let j=num-1;j>0;j--){

        console.log("*".repeat(j));

    }
}
triangle(1);