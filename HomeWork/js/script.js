// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
//{/* <div id="text"> зникав. */}

const button = document.getElementById("button1");
const text = document.getElementById("text");

button.addEventListener("click", function() {
    text.style.display = "none";
})



// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.

const button2 = document.getElementById("button2");

button2.addEventListener("click", function() {
        button2.style.display = "none";
    })



// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці

document.addEventListener("DOMContentLoaded", function () {
    const nodes = document.querySelectorAll("li");
  
    nodes.forEach(function (node) {
      node.addEventListener("click", function () {
        const childUL = this.querySelector("ul");
        if (childUL) {
          childUL.style.display = childUL.style.display === "none" ? "block" : "none";
        }
      });
    });
  });