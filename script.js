console.log("RUNNING")
const fortuneTeller = document.querySelector("#teller")
const fortune = document.querySelector("#words")

const randint = (a, b)=>{
  return math.floor(math.random()*(b-a))
}

fortuneTeller.addEventListener("mouseover", ()=>{
  console.log("Mouse Over")
})

fortuneTeller.addEventListener("click", ()=>{
  console.log("Tell a fortune!")
  fortune.innerHTML = `${fortunes[randint(0, fortunes.length)]}`
})