function catchthenumbers(input) {
    let text='';
    text=input.join(' ');
    let regex=/\d+/g;
    let match=regex.exec(text);
    let numbers=[];
    while (match){
        numbers.push(match[0]);
        match=regex.exec(text);

    }
    console.log(numbers.join(' '));

}
catchthenumbers(['Let’s go11!!!11!', 'Okey!1!']);