 //ES5 Constructor
// function employee(age, name){
//     this.age = age;
//     this.name = name;
// }
// employee.prototype.getName = function (){
//     console.log(this.name);
// }
//    Note: Constructor was before ES6 means ES5..... But ES6 represents as Class not Constructor
// ES6 Class
class employee {
    constructor(age, name){
        this.age = age;
        this.name = name;
    }
    getName(){
        console.log(this.name);
    }
}
let employee1 = new employee(23 , "Imdadul Haque");
console.log(employee1);
console.log(employee1.getName());