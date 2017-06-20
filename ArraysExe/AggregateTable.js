function aggregate(input) {
    let start=0;
    let end=0;
    let city='';
    let sum=0;
    let cities=[];
    for(let i=0;i<input.length;i++){
        start=input[i].indexOf('|');
        end=input[i].substr(start+1).indexOf('|');
        cities.push(input[i].substr(start+1,end).trim());
        sum+=Number(Array.from(input[i].substr(end+2)).filter(x => x!=' ').join(''));
    }
    console.log(cities.join(', '));
    console.log(sum);


}
aggregate(['| Sofia           |     300',
    '| Veliko Tarnovo  |    500',
    '| Yambol          |     275']
);