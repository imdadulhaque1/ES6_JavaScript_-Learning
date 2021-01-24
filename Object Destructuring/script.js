//  Object Destructing

let Person = {
    firstName : "Imdadul",
    lastName : "Haque",
    dob : "10-12-1997"
}

// let fname = Person.firstName,
// lname = Person.lastName,
// dob = Person.dob;
// console.log(`Full Name: ${fname} ${lname}\nDate of Birth: ${dob}`);

// let full_name = fname +" "+ lname;
// console.log(`Full Name: ${full_name}\nDate of Birth: ${dob}`);

function display({firstName:fname, lastName:lname, dob}){
    console.log(`Name: ${fname} ${lname}\nDate of Birth: ${dob}`);
}
display(Person);