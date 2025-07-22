// # Functions

// * Funktion ein Argument übergeben - Parameter vs. Argument
// ? Parameter = Platzhalter bei der Definition von der Funktion
// ? Argument = Der Wert, der an die FN übergeben wird, wenn sie aufgerufen wird

function sayHello(firstName) {
  const btnOutput = document.querySelector(".btn-output")
  console.log(btnOutput)

  btnOutput.innerHTML = `<p>${firstName}</p>`
}

// # Counter

let outputVal = 0

function calc(operator) {
  const outputH4 = document.querySelector(".output-vom-rechner")
  outputVal = outputVal + operator
  outputH4.innerText = outputVal
}

function malZwei() {
  const outputH4 = document.querySelector(".output-vom-rechner")
  outputVal = outputVal * 2
  outputH4.innerText = outputVal
}

function reset() {
  const outputH4 = document.querySelector(".output-vom-rechner")
  outputVal = 0
  outputH4.innerText = outputVal
}

// # values auslesen

function getInputVal() {
  const name = document.querySelector("#name").value
  const age = document.querySelector("#age").valueAsNumber
  const range = Number(document.querySelector("#range").value)
  const checkbox = document.querySelector("#checkbox").checked
  const bday = document.querySelector("#bday").value

  console.log(name)
  console.log(age)
  console.log(range)
  console.log(checkbox)
  console.log(bday)

  document.querySelector(
    ".values"
  ).innerHTML += `<p>${name}, ${age}, range: ${range}, happy: ${checkbox}, Bday: ${bday}</p>`
}

// # Conditional Statements -> if/else

const age = 17

if (age >= 18) {
  console.log("Du bist volljährig!")
} else {
  console.log("Du bist minderjährig!")
}

// Function check

function checkNumber() {
  // entweder .value (oder Ähnliches) am Ende des querySelector
  const inputNum = document.querySelector(".num-input") //.value
  // oder als neue Variable deklarieren
  const inputNumVal = inputNum.value

  if (inputNumVal < 0) {
    console.log("Zahl ist kleiner als 0.")
    // "=" => Zuweisung
    // "==" => Vergleicht Wert - 0 - "0"
    // "===" => Vergleicht Wert (0 oder "0") & Type (String, Number, etc.)
  } else if (inputNumVal == 0) {
    console.log("Zahl ist 0.")
  } else {
    console.log("Zahl ist größer als 0.")
  }
}

// # Login

// Login Daten
// ! global scope
const username = "abutokio"
const password = "123"

function checkUserData() {
  let loginUserName = document.querySelector("#userName")
  let passwordInput = document.querySelector("#password")
  const userNameVal = loginUserName.value
  const passwordVal = passwordInput.value
  const output = document.querySelector(".login-feedback")

  // ? && operator: Damit kannst du in einer if-Abfrage mehrere Bedingungen abfragen, die ALLE true ergeben müssen
  if (username == userNameVal && password == passwordVal) {
    output.innerHTML = `<p>Login successful.</p>`
  } else {
    output.innerHTML = `<p>Username or password wrong.</p>`
  }
}

// # switch

// wir brauchen eine Variable, um die sich unser switch-statement kümmert (Abhängigkeit)
const age1 = 20

// es fängt immer mit dem switch keyword an. In Klammern kommt die Abhängigkeit bzw. unsere Variable
switch (age1) {
  // in unserem switch öffnen wir einzelne cases, in denen wir dann unsere Logik aufbauen (je nach dem welchen Wert die Variable hat, also unseren case)
  case 20:
    console.log("Age ist 20.")
    // mit break sagen wir, dass dieser case zuende ist und das sich um die nächste Logik gekümmert werden kann
    break
  case 21:
    console.log("Age ist 21.")
    break
  case 18:
    console.log("Age ist 18.")
    break
  default:
    console.log("Age ist uns egal.")
}

// # classList -> add, remove & toggle

// ? add
function addClass() {
  const headline = document.querySelector(".add")
  headline.classList.add("big")
}

// ? remove
function removeClass() {
  const headline1 = document.querySelector(".remove")
  headline1.classList.remove("remove")
}

// ? toggle
function toggleClass() {
  const headline1 = document.querySelector(".toggle")
  headline1.classList.toggle("remove")
}
