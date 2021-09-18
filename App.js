const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector("p");
const showAnswer = document.getElementsByClassName("show-answer");
const mousemove = document.querySelector(".mousemove");
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const nav = document.querySelector("nav");
const inputName = document.querySelector("input[type= text]");
const select = document.querySelector("select");
const form = document.querySelector("form");
const boxes = document.querySelectorAll(".box");
let language;
let pseudo;
const ring = () => {
  const audio = new Audio();
  audio.src = "./Enter.mp3";
  audio.play();
};
console.log(boxes);

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});
btn1.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "#41b441";
});
btn2.addEventListener("click", () => {
  answer.classList.add("show-answer");
  answer.style.background = "#bb3c3c";
});

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "2px solid pink";
});
window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6) ";
});
questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "rgba(0,0,0)";
});
answer.addEventListener("mouseover", () => {
  answer.style.transform = "rotate(5deg) ";
});

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  ring();
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = -50 + "px";
  }
});

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
  console.log(pseudo);
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgv.checked === true) {
    document.querySelector("form > div").innerHTML = `
    <h3> Pseudo : ${pseudo} </h3>
    <h4> langage préféré : ${language} </h4>
    `;
  } else {
    alert("Veuillez acceptez les CGV !");
  }
});

window.addEventListener("load", (e) => {
  console.log("loaded");
});

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.style.transform = "scale(0.85) ";
  });
});

questionContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("test !");
});
document.body.addEventListener(
  "click",
  () => {
    console.log("chacccc");
  },
  true
);

window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
