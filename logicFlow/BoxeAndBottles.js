function boxesandBottles(bots,cap) {
    if(bots%cap==0){
        console.log(bots/cap);
    }
    else if(bots>cap){
        //console.log("tuk");
        let result=Math.floor(bots/cap)+1;

        console.log(result);
    }
    else{
        console.log(1);
    }
    console.log("greshka");
}
boxesandBottles(5,10);