// # Ternary Operator

const myAge = 19

if (myAge > 20) {
  console.log("Ich bin schon groß")
} else {
  console.log("Geh bitte nach Hause")
}

// # Bspl. 1
// ? Die Schreibweise => Variable, dann Fragezeichen, dann Aktion wenn wahr, dann ":", dann Aktion wenn falsch
myAge > 20 ? console.log("Ich bin schon groß") : console.log("Geh bitte nach Hause")

// # Bspl. 2
const habIchHunger = true

habIchHunger ? console.log("Ja, ich hab Hunger.") : console.log("Nein, Danke. Ich hab keinen Appetit.")

// # Bspl. 3
let zahl2 = 6
let ergebnis = zahl2 > 5 ? "Ja, das ist größer als 5." : "Nein, das ist kleiner als 5."
console.log(ergebnis)

// # Bspl. 4
const durst = true ? console.log("Ja, bitte!") : console.log("Nein, danke!")

// # Bspl. 5
const password = "geheim"
//                                       true area           false area
const zugang = password === "geheim" ? "Zugang erlaubt" : "Zugang verweigert"
console.log(zugang)

// ! Bisschen komplexer

// # Bspl. 6
const username = "Max"
const login = username === "Max" && password === "geheim" ? "Willkommen, Max!" : "Passwort oder Username ist falsch!"
console.log(login)

// # Bspl. 7
const a = 5
const b = 2
const operator = "*"
let result

// result = operator === "+" ? a + b : operator === "*" ? a * b : operator === "/" ? a / b : a - b
// console.log(result)

switch (operator) {
  case "+":
    result = a + b
    break
  case "*":
    result = a * b
    break
  case "/":
    result = a / b
    break
  case "-":
    result = a - b
    break
  default:
    result = "Ungültiger Operator"
}

console.log(result)
