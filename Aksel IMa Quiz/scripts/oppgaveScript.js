const feil = document.querySelectorAll(".feilKnapp")
const heartDisplay = document.getElementById("hearts")
let hearts = 5

feil.forEach(function (feilButton) {
    feilButton.addEventListener("click", function () {
        hearts -= 1
        console.log(hearts)
        heartDisplay.src = "4hearts.png"
        if (hearts <= 0) {
            window.location = "feil.html"
        }
    })
})