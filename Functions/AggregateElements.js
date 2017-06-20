function aggregate(input) {
    let sum=0;
    let invsum=0;
    let str="";
    input.forEach( el => {
        sum+=el;
        invsum+=1/el;
        str+=el.toString();
    });
    console.log(sum);
    console.log(invsum);
    console.log(str);

}
aggregate([2, 4, 8, 16]);