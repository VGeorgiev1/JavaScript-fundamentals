function distoverTime(numbs) {
    let v1=numbs[0];
    let v2=numbs[1];
    let time=numbs[2];

    console.log(Math.abs((v1*(time/3600))-(v2*(time/3600)))*1000);
}
distoverTime([11, 10, 120]);

