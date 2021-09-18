const nav = document.querySelector("nav");
const comments = document.getElementById("comments");
const commentary = document.querySelector(".comments");
let newComments = "";
console.log();
window.addEventListener("mousemove", (e) => {
  nav.style.setProperty("--x", e.layerX + "px");
  nav.style.setProperty("--y", e.layerY + "px");
});
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 300)
    nav.style.transform = `translateY(${window.scrollY}px) `;
  else nav.style.transform = `translateY(-200px)`;
});

comments.addEventListener("keypress", (e) => {
  newComments += e.key;
  if (e.key) {
    let f;
    f = newComments;
    commentary.innerHTML = `
    <h4>
    ${newComments}
    </h4>
    `;
  }
});
