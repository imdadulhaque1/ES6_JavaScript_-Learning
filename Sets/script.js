// Sets
let mySet = new Set([1, 2, 3, 3, 4, 4]);

// Add 
mySet.add("Hello");
mySet.add(2);

// Delete
mySet.delete(4);

//check
// console.log(mySet.has(4));
//Size
// console.log(mySet.size);

// Iterating Sets using "for of"
// for(x of mySet.values()){     //mySet.keys()   //mySet.value()
//     console.log(x);
// }

// Another way to Iterating Sets using "for of"
// for (let [x] of mySet.entries()){
//     console.log(x);
// }


// Another techniques to iterating Sets
// let iter = mySet.entries();
// console.log(iter);

// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value);


// Another way using Spread Operator
let iter = [...mySet.keys()];  //entries()   //keys()    //values()
// console.log(iter);

mySet.forEach(value => console.log(value));