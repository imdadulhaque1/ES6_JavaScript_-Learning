//  Array Destructuring

let names = ["Imdadul Haque","Enamul Haque", "Hena Khatun", "Shampa Khatun", "Israt Jahan Maisha"];

// let [name1, name2, name3, name4, name5] = names;
// console.log(name1, name2, name3, name4, name5);

let [, name2, , , name5] = names;
console.log(name2, name5);