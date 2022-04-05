//function declearaton

function myname() {
  document.write("Muhammad Ahsan");
}
myname();

document.write("<br>");

//function expression

const lastname = function () {
  document.write("Ali Raza");
};
lastname();

document.write("<br>");

//Parmeters and Arguments

const a = function (Name, Class) {
  document.write(`${Name}, ${Class}`);
};
a("Muhammad Ahsan", "BSCS");

//

const b = function (Name = "Umer", Class = "CS") {
  document.write(`${Name}, ${Class}`);
};
b();

//Function Can return Values

const calcArea = function (radius) {
  let area = 3.14 * radius ** 2;
  return area;
};
const area = calcArea(4);
console.log(area);
