function inventory(input) {
    let allhero = [];
    let curHero = {};
    let items=[];
    for (let i = 0; i < input.length; i++) {
        curHero = {};

        let args=input[i].split(' / ');
        if(args.length>2){
            items = args[2].split(', ');

        }
        curHero.name = args[0];
        curHero.level = Number(args[1]);
        curHero.items = items;


        allhero.push(curHero);
    }
    console.log(JSON.stringify(allhero));
}

inventory([
    'Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
