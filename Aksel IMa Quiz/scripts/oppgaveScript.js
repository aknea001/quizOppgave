const feil = document.querySelectorAll(".feilKnapp")
const heartDisplays = document.querySelectorAll(".hearts")
const hint = document.getElementById("hint")
let hearts = localStorage.getItem("hearts")
let opg = localStorage.getItem("opgnr")
let num = 0

heartDisplays.forEach(function (heartDisplay) {
    heartDisplay.src = "bilder/hearts/" + hearts + "hearts.png"
})

feil.forEach(function (feilButton) {
    feilButton.addEventListener("click", function () {
        hearts -= 1
        feilButton.style.backgroundColor = "#D9043D"
        
        heartDisplays.forEach(function (heartDisplay) {
            heartDisplay.src = "bilder/hearts/" + hearts + "hearts.png"
        })        

        localStorage.setItem("hearts", hearts)
        if (hearts <= 0) {
            window.location = "feil.html"
        }
    })
})

hint.addEventListener("click", function () {
    num = Math.floor(Math.random() * (4 - 2 + 1)) + 2
    feil.forEach(button => {
        button.classList.remove("red")
    })

    feil[num].classList.add("red")
})