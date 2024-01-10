const feil = document.querySelectorAll(".feilKnapp")
const heartDisplays = document.querySelectorAll(".hearts")
const hintElement = document.getElementById("hint")
const hintLeft = document.getElementById("hintnr")
const input = document.getElementById("inputField")
const inputText = document.getElementById("textDisplay")

let hearts = localStorage.getItem("hearts")
let num = Math.floor(Math.random() * (2 - 0)) + 0

let opg = parseInt(localStorage.getItem("opg"))

let hint = localStorage.getItem("hint")

let max = opg * 2
let min = max - 2

let inputValue = input.value

hintLeft.textContent = hint

heartDisplays.forEach(function (heartDisplay) {
    heartDisplay.src = "bilder/hearts/" + hearts + "hearts.png"
})

feil.forEach(function (feilButton) {
    feilButton.addEventListener("click", function () {
        hearts -= 1
        feilButton.style.backgroundColor = "#D9043D"
        feilButton.style.animation = "shake 0.5s"
        
        heartDisplays.forEach(function (heartDisplay) {
            heartDisplay.src = "bilder/hearts/" + hearts + "hearts.png"
        })        

        localStorage.setItem("hearts", hearts)
        if (hearts <= 0) {
            window.location = "feil.html"
        }
    })
})

hintElement.addEventListener("click", function () {
    hintElement.style.display = "none"

    hint -= 1
    hintLeft.textContent = hint

    opg = parseInt(localStorage.getItem("opg"))
    max = opg * 2
    min = max - 2

    num = Math.floor(Math.random() * (max - min)) + min
    console.log(num)
    feil.forEach(button => {
        button.classList.remove("wrong")
    })
    feil[num].classList.add("wrong")

    localStorage.setItem("hint", hint)
})

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        inputValue = input.value.toLowerCase()
        if (inputValue == "golf") {
            window.location = "vinn.html"
        }
        else {
            inputText.textContent = "Det var feil, siden det er et bonus spørsmål får du uendlige liv! \n PS Hint: De har små baller"
        }
    }
})