function Sum(input) {

  let myObj={
       name:"",
       age:0,
       grade:"",
  };
  let result=[];
    for(let i=0;i<input.length;i++)
    {

        let parsed=input[i].split(" -> ");
        let name=parsed[0];
      // console.log(name);
        let age=Number(parsed[1]);
        let grade=parsed[2];
        myObj.name=name;
        myObj.age=age;
        myObj.grade=grade;
       // console.log(myObj);
       result.push(myObj);
        myObj={};


    }
    for(let i=0;i<result.length;i++){

      console.log(`Name: ${result[i].name}
Age: ${result[i].age}
Grade: ${result[i].grade}`);
    }

}



Sum([
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90'

]);



