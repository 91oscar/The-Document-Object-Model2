// Accessing elements

const body = document.querySelector("body");
console.log(body);

// Modifying elements

const h1 = document.getElementById("hello");

h1.textContent = "Hello world!";

const image = document.querySelector("img");

image.src = "/pics/Spiderman.jpg";

// Adding elements

image.style.width = "200px";
image.style.height = "200px";
image.style.borderRadius = "10px";

const h2 = document.createElement("h2");
h2.textContent = "This is H2";
document.body.appendChild(h2);

// Removing elements

h1.remove();
