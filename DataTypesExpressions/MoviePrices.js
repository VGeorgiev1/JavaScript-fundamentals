function price(input){
    let day=input[1].toLowerCase();
    let namelower=input[0].toLowerCase();

    switch(day){
        case "monday":
            if(namelower== "the godfather"){
                console.log(12);
            }
            else if(namelower=="schindler's list"){
                console.log(8.50);
            }
            else if(namelower=="casablanca"){
                console.log(8);
            }
            else if(namelower== "the wizard of oz"){
                console.log(10);
            }
            else{
                console.log("error");
            }
            break;
        case "tuesday":
            if(namelower== "the godfather"){
                console.log(10);
            }
            else if(namelower=="schindler's list"){
                console.log(8.50);
            }
            else if(namelower=="casablanca"){
                console.log(8);
            }
            else if(namelower== "the wizard of oz"){
                console.log(10);
            }
            else{
                console.log("error");
            }
            break;
        case "wednesday":
            if(namelower== "the godfather"){
                console.log(15);
            }
            else if(namelower=="schindler's list"){
                console.log(8.50);
            }
            else if(namelower=="casablanca"){
                console.log(8);
            }
            else if(namelower== "the wizard of oz"){
                console.log(10);
            }
            else{
                console.log("error");
            }
            break;
        case "thursday":
            if(namelower== "the godfather"){
                console.log(12.50);
            }
            else if(namelower=="schindler's list"){
                console.log(8.50);
            }
            else if(namelower=="casablanca"){
                console.log(8);
            }
            else if(namelower== "the wizard of oz"){
                console.log(10);
            }
            else{
                console.log("error");
            }
            break;
        case "friday":
            if(namelower== "the godfather"){
                console.log(15);
            }
            else if(namelower=="schindler's list"){
                console.log(8.50);
            }
            else if(namelower=="casablanca"){
                console.log(8);
            }
            else if(namelower== "the wizard of oz"){
                console.log(10);
            }
            else{
                console.log("error");
            }
            break;
        case "saturday":
            if(namelower== "the godfather"){
                console.log(25);
            }
            else if(namelower=="schindler's list"){
                console.log(15);
            }
            else if(namelower=="casablanca"){
                console.log(10);
            }
            else if(namelower== "the wizard of oz"){
                console.log(15);
            }
            else{
                console.log("error");
            }
            break;
        case "sunday":
            if(namelower== "the godfather"){
                console.log(30);
            }
            else if(namelower=="schindler's list"){
                console.log(15);
            }
            else if(namelower=="casablanca"){
                console.log(10);
            }
            else if(namelower== "the wizard of oz"){
                console.log(15);
            }
            else{
                console.log("error");
            }
            break;
        default: console.log("error");
    }



}
