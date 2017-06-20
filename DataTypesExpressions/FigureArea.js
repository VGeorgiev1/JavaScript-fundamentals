function area(w,h,W,H) {

    let area=0;
    if(w<=W && h>H){
        area=H*W+((h-H)*w);

    }
    else if(w>W && h<=H){
        area=H*W+((w-W)*h);

    }
    else if(w>W && h>H){
        area=w*h;

    }
    else{
        area=H*W;


    }

    console.log(area.toPrecision(17));

}
area(1,
1.01,
1,
1);
