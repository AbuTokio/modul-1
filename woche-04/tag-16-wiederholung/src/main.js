// ? Wiederholung

// # odd or even

let zahl = 7

// ? if-else

if (zahl % 2 === 0) {
  console.log("Die Zahl ist gerade.")
} else {
  console.log("Die Zahl ist ungerade.")
}

// ? switch

// % V1
switch (true) {
  case zahl % 2 === 0:
    console.log("Die Zahl ist gerade.")
    break
  case zahl % 2 !== 0:
    console.log("Die Zahl ist ungerade.")
    break
}

// % V2
switch (zahl % 2) {
  case 0:
    console.log("Die Zahl ist gerade.")
    break
  default:
    console.log("Die Zahl ist ungerade.")
}

// ? ternary

// % V1
zahl % 2 === 0 ? console.log("Die Zahl ist gerade.") : console.log("Die Zahl ist ungerade.")

// % V2
const result = zahl % 2 === 0 ? "Die Zahl ist gerade." : "Die Zahl ist ungerade."
console.log(result)

// # Wochentagentage anzeigen

const today = new Date()
console.log(today.getDay())

const donnerstag = today.getDay()
console.log(donnerstag)

const output_div = document.querySelector("#output")

console.log(output_div)

switch (today.getDay()) {
  case 0:
    output_div.innerHTML = "<p>Sonntag</p>"
    break
  case 1:
    output_div.innerHTML = "<p>Montag</p>"
    break
  case 2:
    output_div.innerHTML = "<p>Dienstag</p>"
    break
  case 3:
    output_div.innerHTML = "<p>Mittwoch</p>"
    break
  case 4:
    output_div.innerHTML = "<p>Donnerstag</p>"
    break
  case 5:
    output_div.innerHTML = "<p>Freitag</p>"
    break
  case 6:
    output_div.innerHTML = "<p>Samstag</p>"
    break
  default:
    output_div.innerHTML = "<p>Kein gültiger input</p>"
}

// # && - und

let istEingeloggt = true
let isAdmin = true

if (istEingeloggt && isAdmin) {
  console.log("Willkommen, Admin!")
} else {
  console.log("Zugriff verweigert!")
}

// # || - oder

let hatGutschein = false
let istHappyHour = true

if (hatGutschein || istHappyHour) {
  console.log("Du kriegst einen Rabatt!")
} else {
  console.log("Leider kriegst du keinen Rabatt!")
}

// # || &&

let alter = 17
let mitEinwilligung = false

if (alter >= 18 || (alter < 18 && mitEinwilligung)) {
  console.log("Zugang erlaubt!")
} else {
  console.log("Geh nach Hause!")
}

// # undefined und null

// ? undefined  = irgendwas existiert, aber wir haben keinen Zugang
// ? null       = es existiert noch nicht

let myAge
console.log(myAge)
