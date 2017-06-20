function smallesttwo(input) {

    input.sort((a,b) => a-b);

    console.log(input[0]);
    console.log(input[1]);

}
smallesttwo([30, 15, 50, 5]);