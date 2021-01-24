//   Rest Operator:  It mainly works to make a array to added anything splited

let fruits = ['Apple', 'Grape', 'Mango', 'JackFruit', 'Banana'];
let [first, second, ...third] = fruits;

// console.log(first);
// console.log(second);
// console.log(third);

let employee = {
    fname : "Israt",
     mname : "Jahan",
    lname : "Maisha",
    dob : "10-12-2018"
}
let {fname, ...mname} = employee;
// console.log(fname);
// console.log(mname);

// let {fname, ...lname} = employee;
// console.log(fname);
// console.log(lname);

// let test = (name, num1, ...numbers) => {
//     console.log(name);
//     console.log(num1);
//     console.log(numbers);
// }
// test("Imdadul Haque", 1440, 171, 15, 00);

// Another Examples of rest Operators
let moreNums = [19, 81, 31, 12, 10, 1997];
let test = (name,  ...numbers) => {     //... use as Rest Operators
    console.log(name);
    console.log(numbers);
}
// test("Imdadul Haque", 1440, 171, 15, 00);
test("Imdadul Haque", ...moreNums);     //... use as Spread Operators