function cappy(input) {
let all=new Map();
let bottles=new Map();
    for(let i=0;i<input.length;i++) {
        let juicetownkes = input[i].split('=>');
        let name = juicetownkes[0];
        let amount = juicetownkes[1];
        let fullbottles = 0;
        let left = 0;
        if(all.has(name)){
            all.set(name,all.get(name)+amount);
            if(all.get(name)>=1000){
                if(bottles.has(name)){
                    bottles.set(name,bottles.get(name)+Math.floor(bottles.get(name)/1000));
                    all.set(name,all.get(name)-bottles.get(name)*1000);

                }
                else{
                    
                }

            }
        }
        else{
            all.set(name,amount);

        }


    }
    //console.log(all);
}
cappy([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]);