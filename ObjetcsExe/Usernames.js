function username(input) {
    let names=new Set();
    for(let i=0;i<input.length;i++){
        names.add(input[i]);
    }
    let arr=Array.from(names);
    console.log(arr.sort(mysort).join('\n'));
    function mysort(a,b) {
        if(a.length-b.length!=0){
            return a.length-b.length;
        }
        else{
            return a.localeCompare(b);
        }
        
    }
}
username([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'
]);