// //function declearaton

// function myname() {
//   document.write("Muhammad Ahsan");
// }
// myname();

// document.write("<br>");

// //function expression

// const lastname = function () {
//   document.write("Ali Raza");
// };
// lastname();

// document.write("<br>");

// //Parmeters and Arguments

// const a = function (Name, Class) {
//   document.write(`${Name}, ${Class}`);
// };
// a("Muhammad Ahsan", "BSCS");

// //

// const b = function (Name = "Umer", Class = "CS") {
//   document.write(`${Name}, ${Class}`);
// };
// b();

// //Function Can return Values

// const calcArea = function (radius) {
//   // let area = 3.14 * radius ** 2;
//   // return area;
//   return 3.13 * radius ** 2;
// };
// const area = calcArea(4);
// console.log(area);

//Arrow function

const ali = () => console.log("My name is Muhammad ");

ali();


function bill = (products, tex)=>{
    let total = 0;
    for (let i=0; i<products.length; i++){
        total+=products[i]+products[i] * tex;

    }
    return total
}

// Function VS Method

 // Function define array    ,  methods are in objects

 // 01 How we invoke them
 // 02 where they are used / stored


 

