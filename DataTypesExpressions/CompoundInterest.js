function interest(intArgs) {
    let sum=intArgs[0];
    let rate=intArgs[1];
    let period=intArgs[2];
    let timespan=intArgs[3];
    let procent=rate/100;
    let freq=12/period;


    console.log((sum*Math.pow((1+procent/freq),freq*timespan)).toFixed(2));


}
interest([1500, 4.3, 3, 6]);