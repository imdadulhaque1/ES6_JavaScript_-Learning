// Maps 
let myMap = new Map(
    [
        ['first key', 10],
        ['second key', 'Learning ES6']
    ]
);
// console.log(myMap);
// Add
myMap.set('third key','Hello World');

console.log(myMap.get('second key'));
// console.log(myMap.has('second key'));

// console.log(myMap.size);

// iterate
for(let x of myMap){
    console.log(x);
}
