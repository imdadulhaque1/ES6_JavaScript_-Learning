//  Callback(): Is a function wher we call a function in anoither function for passing as parameters

numbers = [1, 2, 3, 4, 5, 6];

// let printAll = (item) => console.log(item);

// numbers.forEach(function(item){console.log(item);})
//numbers.forEach(item =>console.log(item));

// let squareAll = (item) => item *item;
// let squareNum = numbers.map(squareAll);
// console.log(squareNum);

// let squareNum = numbers.map(function(item){return item*item;});
// console.log(squareNum);

squareNum = numbers.map(item => item*item);
console.log(squareNum);