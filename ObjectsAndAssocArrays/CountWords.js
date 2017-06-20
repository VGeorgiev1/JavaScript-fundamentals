function countwirhmaps(input) {
    let regex=new RegExp(/[\w]+/g);
    let match=regex.exec(input[0]);
    let map=new Map();
    let words=input[0].match(regex).map(x=>x.toLowerCase());
    for(let i=0;i<words.length;i++){
     if(!map.has(words[i])){
         map.set(words[i],0);
     }
        map.set(words[i],map.get(words[i])+1);
    }
    let array=[...map.entries()];
    //[...map].forEach(([word,amount]) => console.log(`'${word}' -> ${amount} times`));
    array.sort(mysort);
   for(let i=0;i<array.length;i++){
       console.log(`'${array[i][0]}' -> ${array[i][1]} times`);
   }


    function mysort(a,b) {
        return a[0].localeCompare(b[0]);
    }


}
countwirhmaps(['Far too slow, you\'re far too slow.'])
