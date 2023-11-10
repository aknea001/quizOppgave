const opg1Knapp = document.getElementById("opg1Vinn")
const opg2Knapp = document.getElementById("opg2Vinn")
const opg3Knapp = document.getElementById("opg3Vinn")
const opg4Knapp = document.getElementById("opg4Vinn")
const opg5Knapp = document.getElementById("opg5Vinn")
const opg6Knapp = document.getElementById("opg6Vinn")
const opg7Knapp = document.getElementById("opg7Vinn")
const opg8Knapp = document.getElementById("opg8Vinn")
const opg9Knapp = document.getElementById("opg9Vinn")
const opg10Knapp = document.getElementById("opg10Vinn")

const opg1 = document.getElementById("question1")
const opg2 = document.getElementById("question2")
const opg3 = document.getElementById("question3")
const opg4 = document.getElementById("question4")
const opg5 = document.getElementById("question5")
const opg6 = document.getElementById("question6")
const opg7 = document.getElementById("question7")
const opg8 = document.getElementById("question8")
const opg9 = document.getElementById("question9")
const opg10 = document.getElementById("question10")
const opg11 = document.getElementById("question11")

const hintDisplay = document.getElementById("hint")

let opgnr = parseInt(localStorage.getItem("opg"))

opg1Knapp.addEventListener("click", function () {
    opg1.style.display = "none"
    opg2.style.display = "block"
    hintDisplay.style.display = "block"
    opgnr += 1
    localStorage.setItem("opg", opgnr)
    console.log(opgnr)
    document.documentElement.scrollTop = 0
})

opg2Knapp.addEventListener("click", function () {
    opg2.style.display = "none"
    opg3.style.display = "block"
    hintDisplay.style.display = "block"
    opgnr += 1
    localStorage.setItem("opg", opgnr)
    document.documentElement.scrollTop = 0
})

opg3Knapp.addEventListener("click", function () {
    opg3.style.display = "none"
    opg4.style.display = "block"
    hintDisplay.style.display = "block"
    opgnr += 1
    localStorage.setItem("opg", opgnr)
    document.documentElement.scrollTop = 0
})

opg4Knapp.addEventListener("click", function () {
    opg4.style.display = "none"
    opg5.style.display = "block"
    hintDisplay.style.display = "block"
    opgnr += 1
    localStorage.setItem("opg", opgnr)
    document.documentElement.scrollTop = 0
})

opg5Knapp.addEventListener("click", function () {
    opg5.style.display = "none"
    opg6.style.display = "block"
    hintDisplay.style.display = "block"
    opgnr += 1
    localStorage.setItem("opg", opgnr)
    document.documentElement.scrollTop = 0
})

opg6Knapp.addEventListener("click", function () {
    opg6.style.display = "none"
    opg7.style.display = "block"
    hintDisplay.style.display = "block"
    opgnr += 1
    localStorage.setItem("opg", opgnr)
    document.documentElement.scrollTop = 0
})

opg7Knapp.addEventListener("click", function () {
    opg7.style.display = "none"
    opg8.style.display = "block"
    hintDisplay.style.display = "block"
    opgnr += 1
    localStorage.setItem("opg", opgnr)
    document.documentElement.scrollTop = 0
})

opg8Knapp.addEventListener("click", function () {
    opg8.style.display = "none"
    opg9.style.display = "block"
    hintDisplay.style.display = "block"
    opgnr += 1
    localStorage.setItem("opg", opgnr)
    document.documentElement.scrollTop = 0
})

opg9Knapp.addEventListener("click", function () {
    opg9.style.display = "none"
    opg10.style.display = "block"
    hintDisplay.style.display = "block"
    opgnr += 1
    localStorage.setItem("opg", opgnr)
    document.documentElement.scrollTop = 0
})

opg10Knapp.addEventListener("click", function () {
    opg10.style.display = "none"
    opg11.style.display = "block"
    hintDisplay.style.display = "none"
    opgnr += 1
    localStorage.setItem("opg", opgnr)
    document.documentElement.scrollTop = 0
})

/*let opg = 1
let vinnKnapp = document.getElementById("opg" + opg + "Vinn")
let question = document.getElementById("question" + opg)


vinnKnapp.addEventListener("click", function () {
    question.style.display = "none"
    opg += 1
    question.style.display = "block"
    document.documentElement.scrollTop = 0
})*/