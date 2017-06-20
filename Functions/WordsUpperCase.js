function upper(input) {
    let words=input.split(/[\s,!?.:]+/);

    for(let i=0;i<words.length;i++){
        words[i]=words[i].toUpperCase();

    }
    let index=words.indexOf("");
    if(index>-1){
        words.splice(words.length-1);

    }
    let result=words.join(", ");
    console.log(result);
}
upper('Hi, how are you?');