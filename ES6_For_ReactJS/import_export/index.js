
import { str, a, obj, hello, Person } from "./component.js";
import arr from "./component.js";
import App from "./other.js";
console.log(str);
console.log(a);
console.log(arr);
console.log(obj);
hello();

let person = new Person();
console.log(person);

let app = new App(" This text is for App class !");
console.log(app);