// # String Methoden

// index start ist immer bei 0. H wäre in dem Fall also index 0
//                 0123456789
const ourString = "Hallo Leudee! Heute ist ein schöner Tag! Heute werden wir String Methoden lernen."

// ? concat
// * Verbindet 2 Texte bzw. Strings

let moreText = "Ich bin sogar mehr input"

console.log(ourString.concat(" " + moreText))
console.log(moreText.concat(" blablabla"))

// ? charAt()
// * Liefert uns das jeweilige Zeichen an dem genannten index befindet
console.log(ourString.charAt(6))

// ? includes()
// * Überprüft ob ein bestimmter string innerhalb des Strings ist und gibt true/false zurück
console.log(ourString.includes("tag")) // false
console.log(ourString.includes("Tag")) // true

// ? indexOf()
// * Liefert den jeweiligen Index an dem genannten Zeichen
console.log(ourString.indexOf("i"))
console.log(ourString.indexOf("H"))

// ? length
// * Gibt die Länge, also die Anzahl der Zeichen im String zurück
console.log(ourString.length)

// ? replace()
// * Ersetzt einen Teil von einem String und gibt diesen zurück
console.log(ourString.replace("Tag", "Abend"))

// ? replaceAll()
console.log(ourString.replaceAll("Heute", "Heute Abend"))

// ! slice()
// * 1 Argument: Schneidet den Teil bis zu dem index ab und gibt den Rest zurück
// * 2 Argumente: Schneidet einen bestimmten Teil von index x bis index y des Strings und gibt diesen zurück
console.log(ourString.slice(6))
console.log(ourString.slice(0, 6))

// ! substring()
// * Ist genau so wie slice, allerdings gibt es den Unterschied, dass man bei slice mit Minuswerten arbeiten kann (somit fängt es von hinten an). Bei Substring kann man so etwas nicht machen
console.log(ourString.slice(-2))
// console.log(ourString.substring(-2)) // ! Das funktioniert nicht

// ? toLowerCase()
// * Gibt den String in Kleinbuchstaben zurück
console.log(ourString.toLowerCase())

// ? toUpperCase()
// * Gibt den String in Großbuchstaben zurück
console.log(ourString.toUpperCase())

// ? toString() oder String(...)
// * Gibt einen String zurück
let number3 = 100
console.log(String(number3))
