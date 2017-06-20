function oddnumers(input) {
    let result=[];
    for(let i=0;i<input.length;i++){
        if(i%2!=0){

            result.unshift(input[i]*2);

        }

    }
    console.log(result.join(" "));
}
oddnumers([10, 15, 20, 25]);