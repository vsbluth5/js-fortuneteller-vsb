console.log("RUNNING");
// get reference to the fortune teller image
const fortuneTeller = document.querySelector("#teller");

// get a reference to the div which displays the words

// define a function to get random integers between a and b
const randint = (a, b) => {
  return Math.floor(Math.random() * Math.abs(b - a));
};

fortuneTeller.addEventListener("mouseenter", event => {
  console.log("Mouse Enter");
  fortuneTeller.classList.add("active");
});

fortuneTeller.addEventListener("mouseout", event => {
  console.log("Mouse Exit");
  fortuneTeller.classList.remove("active");
});


fortuneTeller.addEventListener("click", () => {
  console.log("Tell a fortune!");
  
  // 
  
  // add innerHTML to the words when the teller is clickec
  
  
  // More advanced = get a random entry from the list and display
  
});
