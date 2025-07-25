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
