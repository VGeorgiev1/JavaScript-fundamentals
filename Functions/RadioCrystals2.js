function radio(input) {
        let desired=input[0];
        let jobdone=0;
    for(let i=1;i<input.length;i++){
        let curCryst=input[i];
        let done=0;
        jobdone=0;

        console.log(`Processing chunk ${curCryst} microns`);
            if(curCryst-1==desired){
                console.log(`X-ray x1`);
                console.log(`Finished crystal ${desired} microns`);
                jobdone=1;
            }

            if(curCryst/4>=desired || curCryst/4==curCryst-1) {
                for (let i = 0; ; i++) {

                    if (curCryst / 4 > desired || curCryst / 4 == desired - 1 || curCryst / 4 == desired) {
                        done++;
                        if (curCryst / 4 == desired - 1) {
                            console.log(`Cut x${done}`);
                            console.log("Transporting and washing");
                            console.log(`X-ray x1`);
                            console.log(`Finished crystal ${desired} microns`);
                            jobdone = 1;
                            break;

                        }
                        if (curCryst / 4 == desired) {
                            console.log(`Cut x${done}`);
                            console.log("Transporting and washing");
                            console.log(`Finished crystal ${desired} microns`);
                            jobdone = 1;
                            break;
                        }
                        curCryst = curCryst / 4;
                    }
                    else {

                        console.log(`Cut x${done}`);
                        done = 0;

                        break;
                    }

                }

                if (jobdone == 1) {
                    continue;
                }
                console.log("Transporting and washing");
                curCryst = Math.floor(curCryst);
            }

          if(curCryst-(curCryst*0.2)>=desired || curCryst-(curCryst*0.2)==desired-1) {
              for (let i = 0; ; i++) {
                  if (curCryst - 0.2 * curCryst > desired || curCryst - 0.2 * curCryst == desired - 1 || curCryst - curCryst * 0.2 == desired) {
                      done++;
                      if (curCryst - 0.2 * curCryst == desired - 1) {
                          console.log(`Lap x${done}`);
                          console.log("Transporting and washing");
                          console.log(`X-ray x1`);
                          jobdone = 1;
                          console.log(`Finished crystal ${desired} microns`);
                          break;
                      }
                      if (curCryst - curCryst * 0.2 == desired) {
                          console.log(`Lap x${done}`);
                          console.log("Transporting and washing");
                          console.log(`Finished crystal ${desired} microns`);
                          jobdone = 1;
                          break;
                      }
                      curCryst = curCryst - curCryst * 0.2;
                  }
                  else {

                      console.log(`Lap x${done}`);
                      done = 0;
                      break;
                  }
              }



            if(jobdone==1){
                continue;
            }
            console.log("Transporting and washing");
            curCryst=Math.floor(curCryst);
        }
        if(curCryst-20>=desired || curCryst-20==desired-1) {
            for (let i = 0; ; i++) {
                if (curCryst - 20 > desired || curCryst - 20 == desired - 1 || desired == curCryst - 20) {
                    done++;

                    if (curCryst - 20 == desired - 1) {
                        console.log(`Grind x${done}`);
                        console.log("Transporting and washing");
                        console.log(`X-ray x1`);
                        console.log(`Finished crystal ${desired} microns`);
                        jobdone = 1;
                        break;
                    }
                    if (curCryst - 20 == desired) {
                        console.log(`Grind x${done}`);
                        console.log("Transporting and washing");
                        console.log(`Finished crystal ${desired} microns`);
                        jobdone = 1;
                        break;
                    }
                    curCryst = curCryst - 20;

                }
                else {
                    console.log(`Grind x${done}`);
                    done = 0;
                    break;
                }

            }
            if (jobdone == 1) {
                continue;
            }
            console.log("Transporting and washing");
            curCryst = Math.floor(curCryst);
        }

        for(let i=0;;i++){
            if(curCryst-2>desired || curCryst-2==desired-1 || curCryst-2==desired){
                done++;
                if(curCryst-2==desired){
                    console.log(`Etch x${done}`);
                    console.log("Transporting and washing");
                    console.log(`Finished crystal ${desired} microns`);
                    jobdone=1;
                    break;
                }
                if(curCryst-2==desired-1){
                    console.log(`Etch x${done}`);
                    console.log("Transporting and washing");
                    console.log(`X-ray x1`);
                    console.log(`Finished crystal ${desired} microns`);
                    jobdone=1;
                    break;

                }
                curCryst=curCryst-2;

            }

        }

    }

}
