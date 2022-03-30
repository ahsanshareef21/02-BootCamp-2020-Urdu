document.write(" <h2>javascript Lecture - 02 </h2>");

// Common String methods

let email = "Muhammadahsan7099@gmail.com";

// Search the last no from the string

let name = email.lastIndexOf("m");

console.log(name);

//slice
// string.slice(form , to)

let sliceResut = email.slice(0, 6);
console.log(sliceResut);

// Replace from the string

let change = email.replace("ahsan", "aliRaza");
console.log(change);

//Substring  Startind index sy ktny no print krany han

let subStr = email.substr(5, 10);
console.log(subStr);

// Find Domain Nam with Slice Method

let domainName = email.slice(email.lastIndexOf("@"), email.length);
console.log(domainName);

// Template litrals

const title = "Blog Post";
const author = "Ahsan";
const likes = 300;

let no = `
 <h2>${title}</h2>
 <p>${author}</p>
 <span>This Blog has ${likes}</span>`;

console.log(no);

// Array Method

let friends = ["ali", "raza", "ahsan"];
console.log(friends);

console.log(friends.length);

//concatination method

let concat = friends.concat(["Java", "Script"]);

console.log(concat);

console.log(friends);

//remove last element

let lastRem = friends.pop();
console.log(lastRem);

//Splice Method

month = ["jan", "Feb", "March"];
month.splice(0, 0, "Aug");
console.log(month);
