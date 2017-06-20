function crystals(input) {
    let desired=input[0];
    console.log(input);
    console.log(crystals.length);

    for(let i=1;i<=crystals.length;i++){
          let curCryst=input[i];
        for(let j=0;;j++) {
            let max = Math.min(cut(curCryst)[0], lap(curCryst)[0], grind(curCryst)[0], etch(curCryst)[0]);
            let lastoperation = "";
            let operationneeded="";

            let counter = 0;

            if (curCryst / 4 == max) {
                operationneeded="cut";
                if(lastoperation!=operationneeded){

                }

                for (let a = 0; ; a++) {

                    curCryst = cut(curCryst);
                    counter++;
                    if (curCryst / 4 < desired) {
                        break;
                    }

                }
                lastoperation = "cut";
                console.log(`Cut x${counter}`);
            }
            else if (curCryst - 0.2 * curCryst == max) {
                operationneeded="cut";
                for (let a = 0; ; a++) {

                    curCryst = lap(curCryst);
                    counter++;
                    if (curCryst - curCryst - 0.2 < desired) {
                        break;
                    }
                }
                lastoperation = "lap";
                console.log(`Lap x${counter}`);


            }
            else if (curCryst - 20 == max) {
                operationneeded="cut";
                for (let a = 0; ; a++) {

                    curCryst = grind(curCryst);
                    counter++;
                    if (curCryst - 20 < desired) {
                        break;
                    }
                }
                lastoperation = "grind";
                console.log(`Grind x${counter}`);

            } else if (curCryst - 2 == max) {
                operationneeded="cut";
                for (let a = 0; ; a++) {

                    curCryst = lap(curCryst);
                    counter++;
                    if (curCryst - 2 < desired) {
                        break;
                    }
                }
                lastoperation = "etch";
                console.log(`Etch x${counter}`);
            }
            if(curCryst===desired){
                break;
            }
        }
          
          console.log(max);
        

    }
    function cut(crystal) {
        return crystal/4;
    }
    function lap(crystal) {
        return crystal-0.2*crystal;
    }
    function grind(crystal) {
        return crystal-20;
    }
    function etch(crystal) {
        return crystal-2;
    }


}
crystals([1375, 50000]);
