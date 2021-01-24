// // Iterators
// let iterable = "Imdadul";     // show the string iterator
// iterable = [1,2,3,4,5,6];       // show the Array iterator

// //symbol iterator
// let iter = iterable[Symbol.iterator]();

// console.log(iter);
// console.log(iter.next().value);  // to access the value
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log("I am inside Imdadul's name !");
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// -----> How to write iterator with our own response
let names = ["Imdadul", "Enamul", "Hena", "Shampa","Maisha"];

// Custom iterator
function customIterator(arr){
    let i = 0;   // Zero, because it starts from zero index

    return {     // For using the Curlibases, It will return objects
        next: function(){
            return i<arr.length ? {value: arr[i++], done:false}:{value:undefined, done:true};
        }
    };   
}

let members = customIterator(names);

console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);
console.log("#--------------> Coding Inside the Iterators <--------------#")
console.log(members.next().value);
console.log(members.next());
console.log(members.next());


// #----------------------->Generator like as Iterator<---------------------#
// Generator
function* genFunction(){
    console.log("Starting the Generator");
    yield 1;
    return;   // When it get the return, it will be stop to print from below code
    console.log("Inside the GEN code !");
    console.log("Inside the GEN code !");
    console.log("Inside the GEN code !");
    yield "Imdadul Haque";
    yield 1440;
    yield "Maisha";
    yield "Learning Generator !";
}

let gen = genFunction();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);