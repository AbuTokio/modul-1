// Primitive Typen in der Programmiersprache

let firstName: string = "max"
let age: number = 22
let isOnline: boolean = true

function sayHello(name: string): string {
  return "Hello, " + name
}

console.log(sayHello("Andre"))
console.log(sayHello("Joe"))

function logMessage(message: string): void {
  console.log("Log:", message)
}

logMessage("Heute ist ein schöner Tag.")

function calcArea(width: number, height: number): number {
  return width * height
}

console.log(calcArea(100, 20))
