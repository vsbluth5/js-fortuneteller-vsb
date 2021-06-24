console.log("RUNNING");
// get reference to the fortune teller image
const fortuneTeller = document.querySelector("#teller");
const fortune = document.querySelector("#words");
// console.log(fortune.ineerHTML)
let count = 0;

// get a reference to the div which displays the words

// define a function to get random integers between a and b
const randint = (a, b) => {
  return Math.floor(Math.random() * Math.abs(b - a));
};

fortuneTeller.addEventListener("mouseenter", event => {
  // console.log("Mouse Enter");
  fortuneTeller.classList.add("active");
});

fortuneTeller.addEventListener("mouseout", event => {
  // console.log("Mouse Exit");
  fortuneTeller.classList.remove("active");
});


fortuneTeller.addEventListener("click", () => {
  console.log("Tell a fortune!");
  
  // Have the teller say how many times it has been clicked
  // Use the innerHTML property
  // fortune.innerHTML = `<img src="fortune_teller.png"/>`
  // Do we want to add images, change images dependent on the count?
  count = count + 1;
  fortune.innerHTML = `Count = ${count}`
  
  // More advanced = get a random entry from the list and display
  
});
