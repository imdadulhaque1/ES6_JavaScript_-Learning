// --------------> Global Scope

var a = 1;
let b = 2;
const c = 3;

console.log(`Global Scope: ${a}  ${b}  ${c}`);
function test(){
    // --------------> local Scope / Function Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log("Function Scope: ",a, b, c);
}
test();
console.log('Global Scope: ', a, b, c);

if(true){
    // --------------> If Scope
    var a = 7;
    let b = 8;
    const c = 9;
    console.log("If Scope: ", a, b, c);
}
console.log("Global Scope: ", a, b, c);

for(let a=0; a<10; a++){
    // --------------> loop Scope
    console.log(`Loop: `, a);
}