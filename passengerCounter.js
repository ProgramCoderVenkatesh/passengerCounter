// document.getElementById("count").innerText = 3

// --------------------------------------
// MATHS OPERATION

// let firstBatch = 5
// let secondBatch = 7

// let count = firstBatch + secondBatch

// --------------------------------------

// Increment by 1

// count = 3

// count = count + 1

// console.log(count)

// --------------------------------------

// what is function

// function countdown() {
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }

// countdown()

// --------------------------------------

// What is string
// String always wins with interger while plusing

// let username = "venky"
// let message = "You have a three new notifications"

// console.log(message + ", " + username + "!")

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(totalPoints) // 410 = "4""10"

// --------------------------------------

let welcomeEl = document.getElementById("welcome-el")
let myName = "Venky"
let msg = "Welcome back "

welcomeEl.innerText = msg + myName

welcomeEl.innerText += " emoji"

// --------------------------------------

// innertext only reads "Human readable text".
// innertext alternative is textcontent.

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // Pass in argumnets
console.log(countEl)

let count = 0

function increment() {
    console.log("The button was clicked")
    count += 1
    // document.getElementById("count-el").innerText = count  // It will not work
    countEl.textContent = count
}

function save() {
    console.log("count")
    let savestr = count + " - "
    saveEl.textContent += savestr
    count = 0
    countEl.textContent = 0
}

function error() {
    let errorEl = document.getElementById("error-el")
    errorEl.textContent = "Something went wrong"
}

// ------------------------------------------------------

// Calculator

let num1 = 8
let num2 = 2

let firstNumber = document.getElementById("first-number")
let secondNumber = document.getElementById("second-number")
let sum = document.getElementById("sum")

firstNumber.textContent = num1
secondNumber.textContent = num2


function add() {
    let value = num1 + num2
    sum.textContent = "Sum: " + value
}


function subtract() {
    let value = num1 - num2
    sum.textContent = "Sum: " + value
}

function multiply() {
    let value = num1 * num2
    sum.textContent = "Sum: " + value
}

function divide() {
    let value = num1 / num2
    sum.textContent = "Sum: " + value
}