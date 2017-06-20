function area(w,h,W,H) {

    let area=0;
    if(w<=W && h>H){
        area=Number(H*W+((h-H)*w));
    }
    else if(w>W && h<=H){
        area=Number(H*W+((w-W)*h));
    }
    else if(w>W && h>H){
        area=Number(w*h);
    }
    else{
        area=Number(H*W);

    }

    console.log(area);

}
area(12.45, 23.266, 10.145, 28.561);


