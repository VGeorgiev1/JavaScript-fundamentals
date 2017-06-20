function lastK(n,k){
    let n1 =n;
    let k1 =k;
   let array = [];
    array[0] = 1;

    for(let i = 1; i<n1; i++)
    {
    let sum = 0;
    let startIndex = Math.max(0, i - k1);

    for (let j=startIndex; j<i; j++)
    {
    sum += array[j];
    }

    array[i] = sum;
    }

    console.log(array.join(" "));
}
lastK(6, 3);

