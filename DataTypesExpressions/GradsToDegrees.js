function dist(grads) {
    let found=0;
    if(Math.abs(grads)>=400){
        if(grads%400==0){
            console.log(0);
             found=1;
        }
        let fullRot=Math.floor(grads/400);
        grads=grads-400*fullRot;

    }
    else if(grads<0){
        grads=400+grads;

    }
    if(found==0) {

            console.log((grads * 360) / 400);

    }



}
dist(-360);
