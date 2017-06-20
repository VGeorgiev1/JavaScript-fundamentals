function fruitorveg(thing) {

    if(thing=="banana" || thing=="apple" || thing=="kiwi" || thing=="cherry" || thing=="lemon" || thing=="grapes" || thing=="peach"){
        console.log("fruit");

    }
    else if(thing=="tomato" || thing=="cucumber" || thing=="pepper" || thing=="onion" || thing=="garlic" || thing=="parsley"){
        console.log("vegetable");
    }
    else{
        console.log("unknown");
    }
}
fruitorveg("banana");
