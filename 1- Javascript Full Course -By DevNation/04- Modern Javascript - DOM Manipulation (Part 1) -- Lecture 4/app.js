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

// GetelementById()

const title = document.getElementById("title");
console.log(title);

// GetElementBy class Name

const get_Elem = document.getElementsByClassName(".err-msg");
console.log(get_Elem);





const cls = document.getElementsByClassName("error");
console.log(cls);

console.log(cls[0]);

const pTag = document.getElementsByTagName("p");
console.log(pTag);

// 03 Adding and Changing page contents
// changing the Text inside the elements

// we will change text inside our first p tag

const access = document.querySelector("p");
console.log(access);

console.log(access.innerText);

//update the text

access.innerText = "This is updated Text";

//change thetext of the sevral tags

const parasAll = document.querySelectorAll("p");
parasAll.forEach(para => {
  console.log(para.innerText);
});

//add new element into the div
const content = document.querySelector(".content");
console.log(content.innerText);
content.innerHTML += `<h2> this is H2 tag</h2>`;

// we have dtabase and update the value into the database

const people = ["Ali", "Raza", "Umer"];

people.forEach(people => {
    content.innerHTML += `<h1>${people}</h1>`


})




// 04-  Geting and setting an attributes


const link = document.querySelector('a');
console.log(link.getAttribute('href'));

link.setAttribute('href','www.facebook.com');
console.log(link.getAttribute('href'));


link.innerText ="go to Faebook"

//delete a  style

// update styles

//Add or remove the classes

