function filter(min,fName,fAge,sName,sAge) {

            let f=[];
        if(fAge>=min){
            f[0]={name: fName, age: fAge};
            JSON.stringify(f[0]);
            console.log(f[0]);
        }
        if(sAge>=min){
            f[1]={name: sName, age: sAge};
            JSON.stringify(f[1]);
            console.log(f[1]);
        }




}
filter(12, 'Ivan', 15, 'Asen', 16);