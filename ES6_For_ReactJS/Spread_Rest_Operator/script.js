// Spread Operator: use for split the multip[le array]
console.log(`\n<---------Starting Spread Operator------>\n`);

let num1 = [1,3,5,7,9];
let num2 = [2,4,6,8];

// let arr = [num1, num2]
// let arr = [...num1, num2]
// let arr = [...num1, ...num2]
let arr = [...num1, ...num2, 10]
console.log(`${arr}\n`);

let person = {
    name: "Imdadul Haque",
    age: 23
}
// let another = {person, nationality: "Bangladeshi"};
let another = {...person, nationality: "Bangladeshi"};
console.log(another);



// Rest Operator: march the array
console.log(`\n\n<---------Starting Rest Operator------>\n`);
let something = (...numArr) => console.log(numArr);
something(1,2,3,4,5,6);