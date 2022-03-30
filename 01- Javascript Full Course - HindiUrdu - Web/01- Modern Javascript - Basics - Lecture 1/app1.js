document.write(" <h2>javascript Lecture - 02 </h2>")

// Common String methods

let email = "Muhammadahsan7099@gmail.com";

// Search the last no from the string

let name = email.lastIndexOf('m');

console.log(name);


//slice
// string.slice(form , to)

let sliceResut = email.slice(0,6)
console.log(sliceResut);


// // Replace from the string

let change = email.replace('ahsan','aliRaza');
console.log(change);

// //Substring  Startind index sy ktny no print krany han

let subStr = email.substr(5,10);
console.log(subStr);





