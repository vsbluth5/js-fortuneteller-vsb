console.log("RUNNING")
const fortuneTeller = document.querySelector("#teller")
const fortune = document.querySelector("#words")

const randint = (a, b)=>{
  return Math.floor(Math.random()*(b-a))
}

fortuneTeller.addEventListener("mouseenter", (event)=>{
  console.log("Mouse Over")
  event.target.classList.add("glow");
})

ortuneTeller.addEventListener("mouseleave", (event)=>{
  console.log("Mouse Over")
  event.target.classList.remove("glow");
})

fortuneTeller.addEventListener("click", ()=>{
  console.log("Tell a fortune!")
  fortune.innerHTML = `${fortunes[randint(0, fortunes.length)]}`
})