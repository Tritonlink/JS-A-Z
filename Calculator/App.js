const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");
console.log();

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
    console.log(e.target.id);
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

C.addEventListener("click", () => {
  result.textContent = "";
});
