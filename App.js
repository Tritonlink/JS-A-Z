const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector("p");
const showAnswer = document.getElementsByClassName("show-answer");
const mousemove = document.querySelector(".mousemove");
const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

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
});
