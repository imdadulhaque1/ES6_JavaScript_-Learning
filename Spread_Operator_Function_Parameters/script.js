// Spread Operator Fnctions Parameters

// let numbers = [23, 3, 6, 0, -1];
// console.log(`Maximum number: ${Math.max(...numbers)}`);
// console.log(`Minimum number: ${Math.min(...numbers)}`);

let employee = ["Imdadul","Haque"];
let test = (fname , lname) => {
    console.log(`Hello, ${fname} ${lname}!`);
}
test(...employee);