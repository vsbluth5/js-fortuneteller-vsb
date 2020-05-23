console.log("RUNNING");
const fortuneTeller = document.querySelector("#teller");
const fortune = document.querySelector("#words");

const randint = (a, b) => {
  return Math.floor(Math.random() * (b - a));
};

fortuneTeller.addEventListener("mouseenter", event => {
  console.log("Mouse Enter");
  // event.target.classList.add("active");
});

fortuneTeller.addEventListener("mouseout", event => {
  console.log("Mouse Exit");
  // event.target.classList.remove("active");
});

fortuneTeller.addEventListener("click", () => {
  console.log("Tell a fortune!");
  fortune.innerHTML = `${fortunes[randint(0, fortunes.length)]}`;
});
