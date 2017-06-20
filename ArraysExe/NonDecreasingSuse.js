function extract(input) {
    let result=[];
    let max=Number(input[0]);
    result.push(Number(input[0]));

    for(let i=1;i<input.length;i++){
        if(Number(input[i])>=max){
            result.push(Number(input[i]));
            max=Number(input[i]);

        }
    }
    console.log(result.join("\n"));
}
extract([20,
    3,
    2,
    15,
    6,
    1,

]);