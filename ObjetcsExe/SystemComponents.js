function systemcomponents(input) {
    let base={};
    let systemsarr=[];

    for(let i=0;i<input.length;i++){
        let towkens=input[i].split(' | ');
        let system=towkens[0];
        let component=towkens[1];
        let subcomponent=towkens[2];

        if(!base.hasOwnProperty(system)){
            base[system]={};
            systemsarr.push(system);
        }
        if(!base[system].hasOwnProperty(component)){
            base[system][component]=[];
        }
        base[system][component].push(subcomponent);

    }
   // console.log(systemsarr);
    let keys=Object.keys(base[systemsarr[0]]);
    console.log(base);
    systemsarr.sort(mysort);
    //console.log(systemsarr);
    function mysort(a,b){
        let aKeys=Object.keys(base[a]).length;
        let bKeys=Object.keys(base[b]).length;
        if(bKeys-aKeys!=0){
            return b-a;
        }
        else{
            return a.localeCompare(b);
        }

    }
    function comparebykey(key) {
       return function (a,b)
        {
            return base[key][b].length-base[key][a].length
        }
    }

    for(let i=0;i<systemsarr.length;i++){
        console.log(systemsarr[i]);
        let keysofsystem=Object.keys(base[systemsarr[i]]);
        keysofsystem.sort(comparebykey(systemsarr[i]));
        for(let j=0;j<keysofsystem.length;j++){
            console.log(`|||${keysofsystem[j]}`);
            for(let h=0;h<base[systemsarr[i]][keysofsystem[j]].length;h++){
                console.log(`||||||${base[systemsarr[i]][keysofsystem[j]][h]}`)
            }
        }

    }

}
systemcomponents([
    'SULS | Main Site | Home Page',
    'SULS | Judge Site | Login Page',

    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'

]);