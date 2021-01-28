// Classes: Blueprint to create objects

class Vehicle{
    author = "Car Author: Imdadul Haque"
    constructor(param1, param2){
        this.color = param1;
        this.passenger = param2;
    }
    saySomething(){
        console.log(`Color: ${this.color}`);
    }
}
let obj1 = new Vehicle("Red", 4);
let obj2 = new Vehicle("Green", 8);
console.log(obj1);
console.log(obj2);

obj1.saySomething();
obj2.saySomething();