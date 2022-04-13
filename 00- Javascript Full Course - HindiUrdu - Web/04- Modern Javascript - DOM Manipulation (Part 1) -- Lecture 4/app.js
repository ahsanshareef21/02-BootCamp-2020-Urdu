console.log("Muhammad Ahsan");

const para = document.querySelector("p");
console.log(para);

const paraone = document.querySelector(".err-msg");
console.log(paraone);

const paraDiv = document.querySelector("div >.err-msg-two");
console.log(paraDiv);

const paratwo = document.querySelector("body > h2");
console.log(paratwo);

const paraAll = document.querySelectorAll("p");
console.log(paraAll);

console.log(paraAll[3]);

console.log(
  paraAll.forEach((ele) => {
    console.log(ele);
  })
);

// Other ways to Use Querry thr DOM
