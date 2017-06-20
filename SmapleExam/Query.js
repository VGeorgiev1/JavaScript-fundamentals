
//([^=&?]+?)=([^=&?]+?)(?=&|$)
function query(input){
    let queryMap=new Map();
    for(let i=0;i<input.length;i++){
        let row=input[i].replace(/(\+|%20)+/g, ' ');

        let regex=new RegExp('([^=&?]+)=([^=&?]+)(?=&|$)', 'g');
        let match=regex.exec(row);
        while(match){

            let value=match[2];
            let key=match[1];
            if(!queryMap.has(key.trim())){
                queryMap.set(key.trim(),[]);
            }
            queryMap.get(key.trim()).push(value.trim());

            match=regex.exec(row);
        }
        let arr=[...queryMap];
        let final='';
        for(let i=0;i<arr.length;i++){
            final+=`${arr[i][0].trim()}=[${arr[i][1].join(', ')}]`;

        }
    console.log(final);
        final='';
        queryMap=new Map();

    }

}
query([
    'field=value1&field=value2&field=value3',
    'http://example.com/over/there?name=ferret'
]);