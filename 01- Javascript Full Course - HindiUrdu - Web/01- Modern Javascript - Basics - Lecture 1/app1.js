document.write(" <h2>javascript Lecture - 02 </h2>")

// Common String methods

let email = "Muhammadahsan7099@gmail.com";

// Search the last no from the string

let resut = email.lastIndexOf('m');

console.log(resut);


//slice
// string.slice(form , to)

let sliceResut = email.slice(0,6)
console.log(sliceResut);


// // Replace from the string

let replace= email.replace('ahsan','aliRaza');
console.log(replace);

// //Substring--> Main to Sub

// let s = email.substr(5,5);
// console.log(substr);

