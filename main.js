let i = 0
let depth = 0.1
const licznik = document.createElement("button")
const minus = document.createElement("button")
const nowy = document.createElement("button")
const wroc = document.createElement("button")
const screen = document.querySelector(".screen")
const section = document.querySelector("section")
const body = document.querySelector("body")
const result = document.querySelector(".result")
let i2 = 0
const h2 = document.querySelector("h2")

//const paragraph= document.createElement('p')

screen.textContent = i
function addLicznik() {
  section.appendChild(licznik)
  licznik.textContent = "uderzenie"


}
function addMinus() {
  section.appendChild(minus)
  minus.textContent = "-1"
  minus.classList.add("minus")
}
function addNowy() {
  section.appendChild(nowy)
  nowy.textContent = "Nowe 10cm"
}
function addWroc() {
  section.appendChild(wroc)
  wroc.textContent = "cofnij"
  wroc.classList.add("minus")
}
function uderzenie(
) {
  i++

  screen.textContent = `${depth.toFixed(1)}` + "m   " + `${i}`
}
function odejmijJeden() {
  i--
  screen.textContent = `${depth.toFixed(1)}` + "m   " + `${i}`
}
function nowyLicznik() {
  let paragraph = document.createElement('p')
  paragraph.textContent = `${depth.toFixed(1)}m    ${i} uderzeń`
  result.appendChild(paragraph)
  depth += 0.1
  i2 = i
  i = 0
  screen.textContent = `${depth.toFixed(1)}` + "m   " + `${i}`
    //window.localStorage.setItem(paragraph.textContent, "")
    ;
}
function doPoprzedniego() {
  depth -= 0.1
  i = i2
  screen.textContent = `${depth.toFixed(1)}` + "m   " + `${i}`
}
addLicznik()
addMinus()
addNowy()
addWroc()
licznik.addEventListener("click", uderzenie)
minus.addEventListener("click", odejmijJeden)
wroc.addEventListener("click", doPoprzedniego)
nowy.addEventListener("click", nowyLicznik)
