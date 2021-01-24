// -----------------> Defines a normal function
// function hello(){
//     console.log(`Hello. myself Imdadul Haque !`);
// }
// hello();

// -----------------> Arrow function
// let hello = () => {
//     console.log(`Hello. myself Imdadul Haque !`);
// }
// hello();

// let hello = (name, dob) => {
//     console.log(`Name: ${name} \nDate of Birth: ${dob}`);
// }
// hello('Imdadul Haque', '12-10-1997');

// Parenthesis can be avoided when there is single parameter
// Curly braces can be avoided  when there is just single statement ( Not return)

// let hello = name => {console.log(name)};
let hello = name => console.log(name);
hello("Imdadul Haque");

// let getSquare = n =>{return n*n};
let getSquare = n => n*n;
console.log(getSquare(4));


