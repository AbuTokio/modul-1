import { differenceInYears, format, getDate, getDay } from "date-fns"

console.log("%cDate Methoden", "background-color: red; color: white")

const myDate = new Date()
console.log("myDate:", myDate)
console.log(typeof myDate)
console.log(typeof myDate.toString())

// ? Koordinierte Weltzeit (UTC)
console.log(myDate.toUTCString())

// ? Uhrzeiten in Stunden, Minuten, Sekunden unterteilt
const meineBearbeiteteVariable = myDate.toISOString()
console.log(meineBearbeiteteVariable)

// ? toLocate-Methoden
console.log(
  'myDate.toLocaleDateString("de", { dateStyle: "full" }):',
  myDate.toLocaleDateString("de", { dateStyle: "full" })
)
console.log(
  'myDate.toLocaleDateString("de", { dateStyle: "long" }):',
  myDate.toLocaleDateString("de", { dateStyle: "long" })
)
console.log(
  'myDate.toLocaleDateString("de", { dateStyle: "short" }):',
  myDate.toLocaleDateString("de", { dateStyle: "short" })
)

// Das gibt uns die MS (timestamp) zurück
console.log(Date.now())

// ? getFullYear() => holt sich das Jahr
console.log("myDate.getFullYear().toString():", myDate.getFullYear().toString())

// ? getMonth() => holt sich den Monat, beginnt mit 0
console.log("myDate.getMonth():", myDate.getMonth())

// ? getDay() => holt sich den Tag der Woche, beginnt mit 0 und Sonntag
console.log("myDate.getDay():", myDate.getDay())

// ? getDate() => holt sich den Tag des Monats
console.log("myDate.getDate():", myDate.getDate())

// ? getTime() => holt sich die timestamp (Millisekunden seit 01.01.1970)
console.log("myDate.getTime():", myDate.getTime())

console.log("TIME:", myDate.getHours(), myDate.getMinutes(), myDate.getSeconds())

console.clear()

const projectStartDate = new Date(2025, 7, 24, 0)
console.log(projectStartDate)

// ? sobald wir keine Uhrzeiten übergeben, wird 00:00:00 angezeigt.
console.log(new Date(2025, 8, 30))

// ! LASS UNS ETWAS COOLES MACHEN UND ETWAS INSTALLIEREN
console.log(format(new Date(), "'Heute ist' eeee"))

const sagMirWieAltDuBist = differenceInYears(new Date(), new Date("1996-05-14"))
console.log(sagMirWieAltDuBist)

const gibMirDenTag = getDay(new Date(2025, 6, 28))
console.log(gibMirDenTag)

switch (gibMirDenTag) {
  case 0:
    console.log("Sonntag")
    break
  case 1:
    console.log("Montag")
    break
  case 2:
    console.log("Dienstag")
    break
  case 3:
    console.log("Mittwoch")
    break
  case 4:
    console.log("Donnerstag")
    break
  case 5:
    console.log("Freitag")
    break
  case 6:
    console.log("Samstag")
    break
}
