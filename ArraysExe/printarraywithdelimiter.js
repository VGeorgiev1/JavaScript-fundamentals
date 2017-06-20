function delimiter(input) {
    let deli=input[input.length-1];

    input.pop();

    console.log(input.join(deli));


}
delimiter(["Ho", "Two", "Three", "Four", "Five", "-"]);