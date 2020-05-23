console.log("RUNNING")
const fortuneTeller = document.querySelector("#teller")
const fortunr = document.querySelector("#words")

fortuneTeller.addeventListener("mouseover", ()=>{
  console.log("Mouse Over")
})

fortuneTeller.addeventListener("click", ()=>{
  console.log("Tell a fortune!")
})