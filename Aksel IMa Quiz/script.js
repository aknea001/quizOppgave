const knapp = document.getElementById("startKnapp")

knapp.addEventListener("click", function () {
    window.location = ("oppgave1.html")
})


/*const opg2Knapp = document.getElementById("opg2Vinn")
const opg3Knapp = document.getElementById("opg3Vinn")
const opg4Knapp = document.getElementById("opg4Vinn")
const opg5Knapp = document.getElementById("opg5Vinn")
const opg6Knapp = document.getElementById("opg6Vinn")
const opg7Knapp = document.getElementById("opg7Vinn")
const opg8Knapp = document.getElementById("opg8Vinn")
const opg9Knapp = document.getElementById("opg9Vinn")
const opg10Knapp = document.getElementById("opg10Vinn")

const feil = document.querySelectorAll(".feilKnapp")*/
const opg1Knapp = document.getElementById("opg1Vinn")

opg1Knapp.addEventListener("click", function () {
    window.location = ("oppgave2.html")
})

opg2Knapp.addEventListener("click", function () {
    opg2.style.display = "none"
    opg3.style.display = "block"
    document.documentElement.scrollTop = 0
})

opg3Knapp.addEventListener("click", function () {
    opg3.style.display = "none"
    opg4.style.display = "block"
    document.documentElement.scrollTop = 0
})

opg4Knapp.addEventListener("click", function () {
    opg4.style.display = "none"
    opg5.style.display = "block"
    document.documentElement.scrollTop = 0
})

opg5Knapp.addEventListener("click", function () {
    opg5.style.display = "none"
    opg6.style.display = "block"
    document.documentElement.scrollTop = 0
})

opg6Knapp.addEventListener("click", function () {
    opg6.style.display = "none"
    opg7.style.display = "block"
    document.documentElement.scrollTop = 0
})

opg7Knapp.addEventListener("click", function () {
    opg7.style.display = "none"
    opg8.style.display = "block"
    document.documentElement.scrollTop = 0
})

opg8Knapp.addEventListener("click", function () {
    opg8.style.display = "none"
    opg9.style.display = "block"
    document.documentElement.scrollTop = 0
})

opg9Knapp.addEventListener("click", function () {
    opg9.style.display = "none"
    opg10.style.display = "block"
    document.documentElement.scrollTop = 0
})

opg10Knapp.addEventListener("click", function () {
    window.location = ("vinn.html")
})

feil.forEach(function (feilButton) {
    feilButton.addEventListener("click", function () {
        window.location = ("feil.html")
})})