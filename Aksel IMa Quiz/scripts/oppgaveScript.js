const feil = document.querySelectorAll(".feilKnapp")

let hearts = 5

document.getElementById("test").textContent = (hearts)

feil.forEach(function (feilButton) {
    feilButton.addEventListener("click", function () {
        hearts -= 1
        document.getElementById("test").textContent = (hearts)
        if (hearts <= 0) {
            window.location = "feil.html"
        }
    })
})
