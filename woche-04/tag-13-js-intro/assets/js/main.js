// ! Dadurch testen wir, ob unsere JS Datei erfolgreich eingebunden wurde.
// * Was ist console.log()?
// * Damit können wir z.b. Texte bzw. Variablen in der Konsole ausgeben lassen. Das benutzen wir sehr oft, wenn wir die Sachen testen wollen.
console.log("Die Verbindung ist da.")

// # Variablen

// % const => die Variablen sollten für Werte verwendet werden, die sich nicht mehr verändern.

const meinName = "Bünyamin"
// ! einName = "Joe" => main.js:11 Uncaught TypeError: Assignment to constant variable.
console.log(meinName)

// % let => die Variablen werden für Werte verwendet, die sich später auch ändern können.

let alter = 29

console.log(alter)

alter = 30

console.log(alter)

// % var => hat man vor ECMASscript 6 benutzt => benutzen wir NICHT mehr.
// var street = "Musterstraße"
// console.log(street)

// # Datentypen

// * string, number, boolean

// ? 1. strings => Text, der in Anführungszeichen stehen muss.
// * z.B.
console.log("Hallo, ich bin da.")

// ? 2. number => Zahlen, werden in der Konsole lila ausgegeben

const number1 = 17
console.log(number1)

console.log(number1 + 3)

// sobald man einen string mit einer number kombiniert, wird am Ende ein string ausgegeben.
console.log(number1 + "3")

// ? 3. boolean => gibt true/false bzw. 0 oder 1 zurück. Das können wir für Vergleiche benutzen.

console.log(true)
console.log(false)

// # Koventionen bei Variablenbenennung

// ? Aussagekräftige Namen
// ? Nicht zu kurz und auch nicht zu lang
// ? Namen dürfen nicht mit Zahlen beginnen
// ? Keine Leerzeichen
// ? JS ist case-sensitive

// ❌ let 0_apfel = 2;
// ! An identifier or keyword cannot immediately follow a numeric literal.
// ❌ let kiwi apfel = 200
// ❌ let heuteisteinschönertag = true

// klein oder groß geschriebene Variablen sind zwei verschiedene Variablen
let apfel = 15
console.log(apfel)

let Apfel = 20
console.log(Apfel)

// ? camelCase

let vorName = "Joe"
let nachName = "Doe"

console.log(vorName)
console.log(nachName)

// ? snake_case

let meine_erste_variable = "Heute ist es richtig warm."
console.log(meine_erste_variable)

// ? PascalCase

let MeineErsteVariable = ""

// ! Auf gar keinen Fall

// ❌ let $meineErsteVariable
// ❌ let meineerstevariable
// ❌ let banane-traube-apfel

// # Strings miteinander verbinden

const firstName = "Marco"
const lastName = "Orlandi"

let city = "München"

const fullName = firstName + lastName
console.log(fullName)

// * mehrere Textelemente direkt in console.log() miteinander verbinden

// ! ACHTUNG => JS beachtet keine Zeilenumbrüche

console.log("Ich heiße " + firstName + " " + lastName + " und ich wohne in " + city + ".")

// * template Literals => schreiben wir in die Backticks ``` + $ + {}
// * das können wir mit Anführungszeichen leider nicht kombinieren
// * Hier werden Zeilenumbrüche, Leerzeichen und Einrückungen beachtet
// * z.B.

console.log(`Ich bin ${firstName} ${lastName} und wohne in ${city}.`)

// * mit dem Zuweisungsoperator += können wir den Satz "Hallo, was geht?" nach dem Satz "Hello, whats up?" anhängen
// ! V1
let message = "Hello, whats up?"
message += "Hallo, was geht?"

// ! V2
let message2 = "Hello, whats up?"
message2 = message2 + "Hallo, was geht?"
// ! Diese Variante führt allerdings nur zur Verwirrung und sollte vermieden werden

console.log(message)

// # Arithmetische Operatoren

let x = 5
let y = 10
let z = 3

// ? Addition
console.log(x + y)

// ? Substraktion
console.log(y - z)

// ? Multiplikation
console.log(x * y)

// ? Division
console.log(y / x)

// ? Modulo - gibt Restwert bei Division zurück
console.log(y % z)

// * Wie können wir zu Variable x eine 1 addieren?
const summe = x + 1
console.log(summe)

// * Hier wird ebenfalls 1 addiert, dies ist aber eine kurze Schreibweise + das darf bei einer neuen Deklaration nicht verwendet werden
// * ❌ let summe2 = x++

x++
console.log(x)

// #######################################

// % SEHR VERALTET
// * Hier können wir Text in unser HTML einfügen
document.write("Hallo, heute ist es sehr warm.")
document.write("<h2>Ich bin eine Überschrift</h2>")

// * Es öffnet sich ein Popup Fenster jedes Mal, wenn die Seite neu geladen wird
// window.alert("Irgendwas")

// * confirm => Öffnet ein Dialog-Popupfenster mit der eingegebenen Nachricht und wartet darauf, dass der User den Dialog bestätigt oder abbricht
// let confirmElement = window.confirm("Stimmen Sie den Cookies zu?")
// console.log(confirmElement)

// #######################################

// # Wiederholung

// * Wie deklarieren wir eine Variable richtig?

let myStreet = "Musterstraße"
let myCity = "Berlin"

console.log(myStreet + ", " + myCity)

let actor = "Ben Affleck"

console.log(`${actor} ist gerade in ${myCity}.`)

myStreet = "Sesamstraße"

console.log(myStreet)

const result = myStreet + " 10"

console.log(result)
