// Spread Operator

// let name = "Imdadul Haque";
// let newName = [...name];
// console.log(newName);

let fruit1 = ["Apple" , "Pine-Apple" , "Mango"];
let fruit2 = ["Orange" , "Grape"];
let fruit3 = ["Jackfruit"];

let newFruits = [...fruit1, ...fruit2 , ...fruit3];
console.log(newFruits)


//Spread on Object (ES8)
let person={
    // dob: string,
    fname = "Imdadul",
    lname="Haque"
}
// let newPerson = {...person, dob:"12-10-1997"};
// console.log(newPerson);