// ~ Beispiel 1

// % V1
// window.loginFunc = function () {
//   const usernameInput = document.querySelector("#username").value
//   const passwordInput = document.querySelector("#password").value
//   document.querySelector("p").innerText = `Hallo ${usernameInput}`
// }

// % V2

const usernameInputElement = document.querySelector("#username")
const passwordInputElement = document.querySelector("#password")
const result = document.querySelector("p")

let userNameVomBac
let passwordVomBackend = "12345"

document.querySelector("#login").addEventListener("submit", function (event) {
  event.preventDefault()

  const usernameInputValue = usernameInputElement.value
  const passwordInputValue = passwordInputElement.value

  if (usernameInputValue === userNameVomBackend && passwordInputValue === passwordVomBackend) {
    result.innerText = `Guten Morgen ${usernameInputValue}, du bist eingeloggt.`
  } else {
    result.innerText = "Username oder Password ist falsch."
  }
})

// ~ Beispiel 2

document.querySelector("#live-input").addEventListener("input", function (event) {
  const inputValue = event.target.value
  console.log("🚀 ~ inputValue:", inputValue.toUpperCase())
  document.querySelector("#live-input").style.color = "red"
})

document.querySelector("#agree-checkbox").addEventListener("change", function (e) {
  const checkBoxValue = e.target.checked
  console.log("🚀 ~ checkBoxValue:", checkBoxValue)
})

// ~ Beispiel 3

document.querySelector("#color-picker").addEventListener("input", function (event) {
  const inputElementValue = event.target.value
  document.body.style.backgroundColor = inputElementValue
})

// ~ Beispiel 4

const myBtn = document.querySelector("#say-hi-btn")
const helloOutputElement = document.querySelector("#hello-output")

myBtn.addEventListener("click", function () {
  helloOutputElement.innerText = "Hallooo vom AddEventListener"
})

// ~ Beispiel 5

const textInputElement = document.querySelector("#text-input")

textInputElement.addEventListener("mouseover", function () {
  textInputElement.style.border = "2px solid red"
  console.log("Die Maus wurde über mir bewegt")
})

textInputElement.addEventListener("mouseout", function () {
  textInputElement.style.border = "2px solid blue"
})

// ~ Beispiel 6

const selectInputElement = document.querySelector("#select-input")
const selectOutputElement = document.querySelector("#select-output")

selectInputElement.addEventListener("change", function (e) {
  console.log("🚀 ~ e.target.value:", e.target.value)
  const selectInputValue = selectInputElement.value
  selectOutputElement.innerText = `Your Order is ${selectInputValue}`
})

// ~ Beispiel 7

const hacker = document.querySelector("#hacker")
const log = document.querySelector("#log")

hacker.addEventListener("keyup", function (event) {
  console.log("🚀 ~ event.code:", event.code)
})
