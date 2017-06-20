function airport(input){
   let airport=new Map;
   let townPeople=new Map();
   let townPlanes=new Map();
   for(let i=0;i<input.length;i++){
      let townkens=input[i].split(' ');
      let plane=townkens[0];
      let town=townkens[1];
      let pople=Number(townkens[2]);
      let action=townkens[3];

      if(action=="land"){
         if(!airport.has(plane)){
            airport.set(plane, action);
            if(!townPeople.has(town)){
               townPeople.set(town,[0,0]);
            }
            if(!townPlanes.has(town)){
               townPlanes.set(town,new Set());
            }
            townPlanes.get(town).add(plane);
            townPeople.get(town)[0]+=pople;
         }
      }
      else {
          if (airport.has(plane)) {
              if(!townPeople.has(town)){
                  townPeople.set(town,[0,0]);
              }
              if(!townPlanes.has(town)){
                  townPlanes.set(town,new Set());
              }
              airport.delete(plane);
              townPeople.get(town)[1]+=pople;
              townPlanes.get(town).add(plane);
          }
      }
   }
   let airportarr=[...airport];
   let townandpassengers=[...townPeople];
   let planeandtown=[...townPlanes];

   function alphsort(a,b) {
   return a[0].localeCompare(b[0]);
   }
   function mysort(a,b) {
       let aPassengers=a[1][0];
       let bPassengers=b[1][0];
       if(bPassengers-aPassengers!=0){
          return bPassengers-aPassengers;
       }
       else{
          return a[0].localeCompare(b[0]);
       }
   }

   function planeaplhsort(a,b) {
       return a.localeCompare(b);
   }
   for(let i=0;i<planeandtown.length;i++){
      planeandtown[i][1]=[...planeandtown[i][1]];
      planeandtown[i][1]=planeandtown[i][1].sort(planeaplhsort);
   }
   let obj={};
   for(let i=0;i<planeandtown.length;i++){
      if(!obj.hasOwnProperty(planeandtown[i][0])){
         obj[planeandtown[i][0]]=[];
      }
      obj[planeandtown[i][0]]=planeandtown[i][1];
   }

   airportarr.sort(alphsort);
   townandpassengers.sort(mysort);

   console.log("Planes left:");
   for(let i=0;i<airportarr.length;i++){
      console.log(`- ${airportarr[i][0]}`);
   }

   for(let i=0;i<townandpassengers.length;i++){
      console.log(townandpassengers[i][0]);
      console.log(`Arrivals: ${townandpassengers[i][1][0]}`);
      console.log(`Departures: ${townandpassengers[i][1][1]}`);
      console.log("Planes:");

         for(let h=0;h<obj[townandpassengers[i][0]].length;h++){
            console.log(`-- ${obj[townandpassengers[i][0]][h]}`);
         }


   }
}
airport(

        [
            "Airbus Paris 356 land",
            "Airbus London 321 land",
            "Airbus Paris 213 depart",
            "Airbus Ljubljana 250 land"
        ]

);