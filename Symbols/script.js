// Symbols: It always provides a uniques feature

let a = Symbol();
// let b = Symbol();
// console.log(a == b);
// console.log(typeof(a));
// console.log(typeof(b));

// let person = {
//     name : "Imdadul Haque",
//     age : 25,
//     [a] : "I am learning Symbol in JavaScript !"
// }
// console.log(person);
// console.log(Object.getOwnPropertyNames(person));
// console.log(Object.getOwnPropertySymbols(person));
// console.log(Object.keys(person));
// console.log(JSON.stringify(person));

// for(x in person){
//     console.log(x);
// }

//-----> We can add parameters in Symbols
let sym1 = Symbol("Imdadul Haque");
let sym2 = Symbol("Imdadul Haque");
console.log(sym1 == sym2);